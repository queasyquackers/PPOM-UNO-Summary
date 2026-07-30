#!/usr/bin/env python3
"""
lecture_pipeline.py  --  One command to turn a lecture into a high-yield summary
(PPOM-UNO-Summary) AND a board-question set (PPOM-UNO-Problems).

The generation itself is done by Claude Code (free, uses your subscription), so this
script handles everything *around* it:

    0. ingest        (new-semester files only) Drop the semester's raw files into
                     _incoming/, then run ingest to renumber them with a +200 offset
                     per semester (semester 2 lecture #1 -> Lecture #201) and move
                     them into transcripts/ and pdfs/. This keeps lecture numbers
                     globally unique even though each semester restarts at #1.

    1. prep    <N>   Find the transcript + slide PDF for lecture N, extract clean text,
                     and write a self-contained bundle in _pipeline/L<N>/ that tells
                     Claude Code exactly what to produce and where.

       -> Then, inside Claude Code, run:  /generate-lecture <N>
          (or just say: "generate lecture <N>")
          Claude writes 3 files into _pipeline/L<N>/:
              l<N>.file.js     (summary, window.L<N> schema)
              Test_L<N>.js     (questions, const Test_L<N> schema)
              meta.json        (module / week / topic / readingTime for registration)

    3. install <N>   Validate those 3 files, copy them into both repos, register them
                     (lectures_index.js + config.js + Problems/index.html), optionally
                     render the high-yield PDF, and optionally git commit / push.

Usage:
    python lecture_pipeline.py ingest                      # semester 2 (+200): #1 -> L201
    python lecture_pipeline.py ingest --semester 3         # semester 3 (+400): #1 -> L401
    python lecture_pipeline.py prep 193
    python lecture_pipeline.py install 193                 # place + register, no git
    python lecture_pipeline.py install 193 --commit        # + git commit in both repos
    python lecture_pipeline.py install 193 --commit --push # + push to GitHub ("upload")

Paths assume PPOM-UNO-Summary and PPOM-UNO-Problems are sibling folders.
Override with --summary-repo / --problems-repo if not.
"""

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

# --------------------------------------------------------------------------- #
# Configuration
# --------------------------------------------------------------------------- #
SUMMARY_REPO = Path(__file__).resolve().parent
PROBLEMS_REPO = SUMMARY_REPO.parent / "PPOM-UNO-Problems"
WORK_DIR = SUMMARY_REPO / "_pipeline"

SUMMARY_PROMPT = SUMMARY_REPO / "lecture_summary_prompt.md"
QUESTION_PROMPT = PROBLEMS_REPO / "question_generation_prompt_v5.txt"

WORDS_PER_MINUTE = 200  # for readingTime estimate


# --------------------------------------------------------------------------- #
# Small helpers
# --------------------------------------------------------------------------- #
def die(msg):
    print(f"\n[ERROR] {msg}\n", file=sys.stderr)
    sys.exit(1)


def info(msg):
    print(f"  {msg}")


def lecture_num_regex(n):
    """Matches '#193', '# 193', 'L193' but NOT '#1930' / 'L1931'."""
    return re.compile(rf"(?:#\s*|L){n}(?!\d)", re.IGNORECASE)


def find_input_file(n, folders, extensions):
    """Search folders for a file belonging to lecture N with one of `extensions`.
    Returns the best match (prefers the shortest/cleanest name)."""
    pat = lecture_num_regex(n)
    candidates = []
    for folder in folders:
        if not folder.exists():
            continue
        for f in folder.iterdir():
            if f.suffix.lower() not in extensions:
                continue
            if pat.search(f.name):
                candidates.append(f)
    if not candidates:
        return None
    # Prefer files that literally contain "#<n>" (full lecture naming) then shortest name.
    candidates.sort(key=lambda p: (0 if f"#{n}" in p.name or f"# {n}" in p.name else 1, len(p.name)))
    return candidates[0]


def clean_srt(text):
    """Strip SRT indices + timestamps, collapse into readable prose."""
    text = re.sub(r"^\d+\s*$", "", text, flags=re.MULTILINE)
    text = re.sub(
        r"^\d{2}:\d{2}:\d{2}[,.]\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}[,.]\d{3}.*$",
        "",
        text,
        flags=re.MULTILINE,
    )
    text = re.sub(r"<[^>]+>", "", text)  # stray formatting tags
    text = re.sub(r"\n{2,}", "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def extract_transcript(path):
    raw = path.read_text(encoding="utf-8", errors="ignore")
    if path.suffix.lower() == ".srt":
        return clean_srt(raw)
    return raw.strip()  # already-cleaned .txt


def extract_slides(pdf_path):
    """Per-slide text with '--- SLIDE n ---' markers so slide numbers survive
    (the summary cites '(Slide X)' and questions store pdfPage)."""
    try:
        import pdfplumber

        out = []
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages, start=1):
                out.append(f"\n--- SLIDE {i} ---\n{page.extract_text() or ''}")
        return "".join(out).strip()
    except Exception:
        pass
    try:
        import fitz

        out = []
        doc = fitz.open(pdf_path)
        for i, page in enumerate(doc, start=1):
            out.append(f"\n--- SLIDE {i} ---\n{page.get_text()}")
        return "".join(out).strip()
    except Exception as e:
        die(f"Could not extract PDF text from {pdf_path}: {e}")


def parse_meta_hint(transcript_name):
    """Best-effort title/lecturer from a filename like
    'Lecture #159_ Clinical Medicine... Faculty_ X. Smith, M.D..srt'.
    These are only hints -- the generated .file.js is authoritative."""
    stem = Path(transcript_name).stem
    lecturer = ""
    for marker in ("Faculty_", "Presenter_", "Facilitator_", "Faculty:", "Presenter:"):
        if marker in stem:
            stem, lecturer = stem.split(marker, 1)
            lecturer = lecturer.strip(" _;:.")
            break
    title = re.sub(r"^Lecture\s*#?\s*\d+[_:\s;]*", "", stem).strip(" _;:.-")
    return title, lecturer


def run_git(repo, args, check=True):
    result = subprocess.run(
        ["git", "-C", str(repo)] + args,
        capture_output=True,
        text=True,
    )
    if check and result.returncode != 0:
        die(f"git {' '.join(args)} failed in {repo.name}:\n{result.stderr}")
    return result


# --------------------------------------------------------------------------- #
# ingest (new-semester renumbering)
# --------------------------------------------------------------------------- #
# Each semester's lectures restart at #1, but this pipeline needs globally unique
# numbers (filenames, window.L<N>, index/config registrations all key on it).
# Semester s gets a +(s-1)*200 offset: semester 2 lecture #1 -> Lecture #201.
SEMESTER_BLOCK = 200

def cmd_ingest(args):
    offset = (args.semester - 1) * SEMESTER_BLOCK
    incoming = SUMMARY_REPO / "_incoming"
    incoming.mkdir(exist_ok=True)
    print(f"\n=== INGEST semester {args.semester} (lecture #N -> #{offset}+N) ===")

    files = [f for f in sorted(incoming.iterdir()) if f.is_file()]
    if not files:
        print(
            f"\n_incoming/ is empty. Drop the new semester's raw files there\n"
            f"({incoming}) -- transcripts (.srt/.txt) and slide PDFs, named with\n"
            f"their original numbers (e.g. 'Lecture #1_ ...') -- then re-run:\n"
            f"    python lecture_pipeline.py ingest --semester {args.semester}\n"
        )
        return

    # First lecture-number token in the name: '#1', '# 1', or 'L1' (not 'L19' inside 'L190').
    num_pat = re.compile(r"(#\s*|\bL)(\d+)(?!\d)")
    moved, skipped, ingested_numbers = [], [], []
    for f in files:
        if f.suffix.lower() in {".srt", ".txt"}:
            dest_dir = SUMMARY_REPO / "transcripts"
        elif f.suffix.lower() == ".pdf":
            dest_dir = SUMMARY_REPO / "pdfs"
        else:
            skipped.append((f.name, "not a transcript (.srt/.txt) or slide PDF"))
            continue
        m = num_pat.search(f.name)
        if not m:
            skipped.append((f.name, "no lecture number ('#N' or 'LN') in filename"))
            continue
        n = int(m.group(2))
        if n >= SEMESTER_BLOCK:
            skipped.append((f.name, f"number {n} looks already offset -- move it manually if intended"))
            continue
        new_n = n + offset
        new_name = f.name[: m.start(2)] + str(new_n) + f.name[m.end(2):]
        dest = dest_dir / new_name
        if dest.exists():
            skipped.append((f.name, f"{dest_dir.name}/{new_name} already exists"))
            continue
        shutil.move(str(f), str(dest))
        moved.append((f.name, f"{dest_dir.name}/{new_name}"))
        ingested_numbers.append(new_n)

    for old, new in moved:
        info(f"{old}  ->  {new}")
    for name, why in skipped:
        info(f"SKIPPED  {name}  ({why})")

    if ingested_numbers:
        nums = sorted(set(ingested_numbers))
        print(
            f"\n[OK] Ingested {len(moved)} file(s) as lecture(s) "
            f"{', '.join(str(x) for x in nums)}.\n"
            f"     From here the normal flow applies, using the NEW numbers:\n"
            f"         python lecture_pipeline.py prep {nums[0]}\n"
            f"         /generate-lecture {nums[0]}        (in Claude Code)\n"
            f"         python lecture_pipeline.py install {nums[0]} --commit\n"
        )
    else:
        print("\n[!] Nothing ingested -- see SKIPPED reasons above.\n")


# --------------------------------------------------------------------------- #
# prep
# --------------------------------------------------------------------------- #
def cmd_prep(args):
    n = args.number
    print(f"\n=== PREP lecture {n} ===")

    if not SUMMARY_PROMPT.exists():
        die(f"Summary prompt not found: {SUMMARY_PROMPT}")
    if not QUESTION_PROMPT.exists():
        die(f"Question prompt not found: {QUESTION_PROMPT}")

    transcript_folders = [SUMMARY_REPO / "transcripts", PROBLEMS_REPO / "transcripts"]
    pdf_folders = [SUMMARY_REPO / "pdfs", PROBLEMS_REPO / "pdfs"]

    transcript = find_input_file(n, transcript_folders, {".srt", ".txt"})
    if not transcript:
        die(
            f"No transcript found for lecture {n} in:\n    "
            + "\n    ".join(str(f) for f in transcript_folders)
        )
    pdf = find_input_file(n, pdf_folders, {".pdf"})
    if not pdf:
        die(
            f"No slide PDF found for lecture {n} in:\n    "
            + "\n    ".join(str(f) for f in pdf_folders)
        )

    info(f"transcript: {transcript.name}")
    info(f"slides:     {pdf.name}")

    transcript_text = extract_transcript(transcript)
    slides_text = extract_slides(pdf)
    title_hint, lecturer_hint = parse_meta_hint(transcript.name)

    bundle = WORK_DIR / f"L{n}"
    bundle.mkdir(parents=True, exist_ok=True)
    (bundle / "transcript.txt").write_text(transcript_text, encoding="utf-8")
    (bundle / "slides.txt").write_text(slides_text, encoding="utf-8")

    # Record where the source PDF lives so install can render the high-yield PDF.
    (bundle / "sources.json").write_text(
        json.dumps(
            {
                "lecture": n,
                "transcript_file": str(transcript),
                "pdf_file": str(pdf),
                "title_hint": title_hint,
                "lecturer_hint": lecturer_hint,
            },
            indent=2,
        ),
        encoding="utf-8",
    )

    generate_md = build_generate_instructions(n, title_hint, lecturer_hint)
    (bundle / "GENERATE.md").write_text(generate_md, encoding="utf-8")

    tword = len(transcript_text.split())
    print(
        f"\n[OK] Bundle ready: {bundle}\n"
        f"     transcript.txt ({tword:,} words)  slides.txt  GENERATE.md  sources.json\n\n"
        f"NEXT -- in Claude Code, run:\n"
        f"     /generate-lecture {n}\n"
        f"     (or say: \"generate lecture {n}\" -- Claude reads {bundle.name}/GENERATE.md)\n\n"
        f"THEN:\n"
        f"     python lecture_pipeline.py install {n} --commit\n"
    )


def build_generate_instructions(n, title_hint, lecturer_hint):
    rel_summary_prompt = SUMMARY_PROMPT
    rel_question_prompt = QUESTION_PROMPT
    bundle = WORK_DIR / f"L{n}"
    return f"""# Generate lecture {n}

You (Claude Code) are producing the summary + question files for **Lecture {n}**.
Everything you need is in this folder: `{bundle}`

## Inputs (read these)
- `transcript.txt`  -- cleaned lecture transcript (PRIMARY source of truth)
- `slides.txt`      -- slide text, marked `--- SLIDE n ---` (use for slide #s + spellings)

Filename hints (verify against content -- the transcript wins):
- Title hint:    {title_hint or "(unknown -- derive from content)"}
- Lecturer hint: {lecturer_hint or "(unknown -- derive from content)"}

## What to produce -- write EXACTLY these 3 files into this folder

### 1. `l{n}.file.js`  -- the high-yield summary
Follow the full spec in:
    {rel_summary_prompt}
Wrap the result as a JS assignment matching the existing schema
(`content/json/l134.file.js` is a reference). Required top-level keys, in order:
    window.L{n} = {{
      "id": {n},
      "title": "Lecture #{n}: <Title>",
      "lecturer": "<Name, credentials>",
      "pdf": "content/L{n}_HighYield_Render.pdf",
      "content": `<markdown summary per the prompt>`,
      "flashcards": [ { "front": ..., "back": ..., "tag": "Concept|Clinical|Glossary" }, ... ],
      "questions": [ { "question": ..., "options": ["A. ...","B. ...","C. ...","D. ...","E. ..."],
                      "answer": "C", "rationale": ..., "hidden": true }, ... ],  // 5 review MCQs (structured array, NOT markdown)
      "anking": [ ... ],
      "ankingResource": {{ ... }},
      "pearls": [ ... ],
      "mindmap": `<markdown outline>`
    }};
Use backtick template strings for `content` and `mindmap`. Escape any backticks/${{}}
inside them. Keep clinical-correlate titles plain (no ** or ###).

### 2. `Test_L{n}.js`  -- the board questions
Follow the full spec in:
    {rel_question_prompt}
Output ONLY the JS array (skip the "Part 1: Thinking Process" prose in the file):
    const Test_L{n} = [ {{ "id": 1, "category": ..., "questionText": ...,
      "options": [{{"text":...,"explanation":...}}, ...],
      "correctAnswerIndex": <int>, "clinicalPearl": ...,
      "pdfPage": <slide number from slides.txt>, "pdfQuote": "<short slide quote>" }}, ... ];
30 questions, distribution + rules per the prompt. `pdfPage` must match a real
`--- SLIDE n ---` from slides.txt.

### 3. `meta.json`  -- registration metadata
    {{
      "lecture": {n},
      "module": "<one of the existing modules, e.g. Pharmacology, Pathology, Hematology, DPR, ...>",
      "week": <curriculum week number as used in config.js, e.g. 21>,
      "topic": "<Module: Short Topic>  e.g. 'Pharmacology: Antifungal Agents'>",
      "readingTime": <estimate: summary words / {WORDS_PER_MINUTE}, min 2>
    }}
`topic` becomes the config.js label: "<week>-<topic> (L{n})".

## When done
Tell the user to run:
    python lecture_pipeline.py install {n} --commit
"""


# --------------------------------------------------------------------------- #
# install
# --------------------------------------------------------------------------- #
def validate_js(path, must_contain):
    text = path.read_text(encoding="utf-8", errors="ignore")
    if must_contain not in text:
        die(f"{path.name} does not contain expected token '{must_contain}'.")
    if text.count("{") != text.count("}"):
        die(f"{path.name}: unbalanced curly braces {{}} -- check the generated JS.")
    if text.count("[") != text.count("]"):
        die(f"{path.name}: unbalanced square brackets [] -- check the generated JS.")
    return text


def summary_index_entry(n, title, module, reading_time):
    return (
        "  {\n"
        f'    "id": "l{n}",\n'
        f'    "title": {json.dumps(title)},\n'
        f'    "module": {json.dumps(module)},\n'
        f'    "tags": "Lecture #{n}",\n'
        f'    "path": "content/json/l{n}.file.js",\n'
        f'    "readingTime": {reading_time}\n'
        "  }"
    )


def insert_into_lectures_index(index_path, n, entry_block):
    text = index_path.read_text(encoding="utf-8")
    # Existing entries: capture numeric part of each "id": "l<num>..."
    ids = [(int(m.group(1)), m.start()) for m in re.finditer(r'"id":\s*"l(\d+)[a-z]?"', text)]
    if any(num == n for num, _ in ids):
        info(f"lectures_index.js already has l{n} -- skipping.")
        return
    # Find first entry with number > n -> insert before its leading "  {"
    target = next((pos for num, pos in ids if num > n), None)
    if target is not None:
        line_start = text.rfind("\n  {", 0, target + 3)
        # position of the "  {" that begins that entry
        brace = text.rfind("  {", 0, target)
        text = text[:brace] + entry_block + ",\n" + text[brace:]
    else:
        # Append at end: previous last entry has NO trailing comma -> add one.
        close = text.rfind("\n]);")
        if close == -1:
            die("lectures_index.js: could not find closing ']);'.")
        head = text[:close].rstrip()
        text = head + ",\n" + entry_block + "\n" + text[close + 1 :]
    index_path.write_text(text, encoding="utf-8")
    info(f"registered l{n} in lectures_index.js")


def insert_into_config(config_path, n, week, topic):
    text = config_path.read_text(encoding="utf-8")
    start = text.find("const testsToLoad = [")
    if start == -1:
        die("config.js: 'const testsToLoad = [' not found.")
    end = text.find("\n];", start)
    if end == -1:
        die("config.js: end of testsToLoad array not found.")
    block = text[start:end]
    if f"window.Test_L{n} " in block or f"window.Test_L{n}," in block or f"window.Test_L{n}}}" in block:
        info(f"config.js already registers Test_L{n} -- skipping.")
        return
    entry = f'    {{ name: "{week}-{topic} (L{n})", data: window.Test_L{n} }},'
    # Insert before first entry with a higher lecture number, else at end of array.
    nums = [
        (int(m.group(1)), m.start() + start)
        for m in re.finditer(r"window\.Test_L(\d+)\b", block)
    ]
    target = next((pos for num, pos in nums if num > n), None)
    if target is not None:
        line_start = text.rfind("\n", 0, target) + 1
        text = text[:line_start] + entry + "\n" + text[line_start:]
    else:
        # Append at end of array; the last existing entry may lack a trailing
        # comma (e.g. the Pathoma block), so add one before appending.
        head = text[:end].rstrip()
        if not head.endswith(","):
            head += ","
        text = head + "\n" + entry + text[end:]
    config_path.write_text(text, encoding="utf-8")
    info(f"registered Test_L{n} in config.js")


def insert_script_tag(index_html, n):
    text = index_html.read_text(encoding="utf-8")
    if f'src="Test_L{n}.js"' in text:
        info(f"index.html already includes Test_L{n}.js -- skipping.")
        return
    tag = f'    <script src="Test_L{n}.js"></script>\n'
    nums = [
        (int(m.group(1)), m.start())
        for m in re.finditer(r'<script src="Test_L(\d+)\.js"></script>', text)
    ]
    target = next((pos for num, pos in nums if num > n), None)
    if target is not None:
        line_start = text.rfind("\n", 0, target) + 1
        text = text[:line_start] + tag + text[line_start:]
    else:
        anchor = text.find('<script src="config.js">')
        if anchor == -1:
            die("Problems/index.html: could not find config.js script tag to anchor before.")
        line_start = text.rfind("\n", 0, anchor) + 1
        text = text[:line_start] + tag + text[line_start:]
    index_html.write_text(text, encoding="utf-8")
    info(f"added <script> include for Test_L{n}.js in Problems/index.html")


def register_pdf_source(n, bundle):
    """Copy the slide PDF into Problems/pdfs (if missing) and register it in
    scripts/pdf_mapping.js under the "L<n>" key, so the Problems site can show
    the 'Lecture source PDF -- page X' link for each question's pdfPage."""
    sources_file = bundle / "sources.json"
    if not sources_file.exists():
        info("sources.json missing (dupe/manual bundle) -- skipping PDF source mapping.")
        return
    sources = json.loads(sources_file.read_text(encoding="utf-8"))
    pdf_src = Path(sources["pdf_file"])
    if not pdf_src.exists():
        info(f"slide PDF not found ({pdf_src.name}) -- skipping PDF source mapping.")
        return

    # Ensure the slide PDF is present in the Problems repo's pdfs/ folder.
    pdf_dst = PROBLEMS_REPO / "pdfs" / pdf_src.name
    if not pdf_dst.exists():
        shutil.copyfile(pdf_src, pdf_dst)
        info(f"copied slide PDF -> Problems/pdfs/{pdf_src.name}")
    mapping_value = f"pdfs/{pdf_src.name}"

    mapping_path = PROBLEMS_REPO / "scripts" / "pdf_mapping.js"
    text = mapping_path.read_text(encoding="utf-8")
    if re.search(rf'"L{n}"\s*:', text):
        info(f"pdf_mapping.js already maps L{n} -- skipping.")
        return
    start = text.find("PDF_MAPPING = {")
    end = text.find("\n};", start)
    if start == -1 or end == -1:
        info("pdf_mapping.js: could not locate PDF_MAPPING object -- skipping.")
        return
    entry = f'    "L{n}": {json.dumps(mapping_value)},'
    head = text[:end].rstrip()
    if not head.endswith(","):
        head += ","
    text = head + "\n" + entry + text[end:]
    mapping_path.write_text(text, encoding="utf-8")
    info(f'registered "L{n}" in Problems/scripts/pdf_mapping.js')


def render_high_yield_pdf(n, bundle):
    sources = json.loads((bundle / "sources.json").read_text(encoding="utf-8"))
    pdf_src = Path(sources["pdf_file"])
    transcript_src = Path(sources["transcript_file"])
    out_pdf = SUMMARY_REPO / "content" / f"L{n}_HighYield_Render.pdf"
    gen = SUMMARY_REPO / "generate_high_yield.py"
    if not gen.exists():
        info("generate_high_yield.py not found -- skipping render PDF.")
        return
    info("rendering high-yield PDF (generate_high_yield.py)...")
    result = subprocess.run(
        [sys.executable, str(gen), str(pdf_src), str(out_pdf), str(transcript_src)],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0 or not out_pdf.exists():
        info(f"   render skipped/failed (non-fatal): {result.stderr.strip()[:200]}")
    else:
        info(f"   -> {out_pdf.relative_to(SUMMARY_REPO)}")


def cmd_install(args):
    n = args.number
    print(f"\n=== INSTALL lecture {n} ===")
    bundle = WORK_DIR / f"L{n}"
    summary_src = bundle / f"l{n}.file.js"
    quest_src = bundle / f"Test_L{n}.js"
    meta_src = bundle / "meta.json"

    for f in (summary_src, quest_src, meta_src):
        if not f.exists():
            die(
                f"Missing {f.name} in {bundle}.\n"
                f"Run  /generate-lecture {n}  in Claude Code first."
            )

    # Validate generated JS + metadata
    summary_text = validate_js(summary_src, f"window.L{n}")
    validate_js(quest_src, f"const Test_L{n}")
    meta = json.loads(meta_src.read_text(encoding="utf-8"))
    module = meta.get("module") or "Clinical Medicine"
    week = meta.get("week")
    topic = meta.get("topic")
    if week is None or not topic:
        die("meta.json must include numeric 'week' and string 'topic'.")

    title_match = re.search(r'"title":\s*"([^"]+)"', summary_text)
    title = title_match.group(1) if title_match else f"Lecture #{n}"
    reading_time = meta.get("readingTime")
    if not reading_time:
        content_match = re.search(r'"content":\s*`(.*?)`,\n\s*"flashcards"', summary_text, re.DOTALL)
        words = len(content_match.group(1).split()) if content_match else 2000
        reading_time = max(2, round(words / WORDS_PER_MINUTE))

    # --- Copy files into both repos ---
    summary_dst = SUMMARY_REPO / "content" / "json" / f"l{n}.file.js"
    quest_dst = PROBLEMS_REPO / f"Test_L{n}.js"
    shutil.copyfile(summary_src, summary_dst)
    info(f"copied -> {summary_dst.relative_to(SUMMARY_REPO)}")
    shutil.copyfile(quest_src, quest_dst)
    info(f"copied -> PPOM-UNO-Problems/{quest_dst.name}")

    # --- Register in both sites ---
    insert_into_lectures_index(
        SUMMARY_REPO / "lectures_index.js", n,
        summary_index_entry(n, title, module, reading_time),
    )
    insert_into_config(PROBLEMS_REPO / "config.js", n, week, topic)
    insert_script_tag(PROBLEMS_REPO / "index.html", n)
    register_pdf_source(n, bundle)

    # --- Optional high-yield PDF render ---
    if not args.no_pdf:
        render_high_yield_pdf(n, bundle)

    # --- Git ---
    if args.commit or args.push:
        commit_and_push(n, title, args.push)

    print(
        f"\n[OK] Lecture {n} installed into both sites.\n"
        f"     Summary:  content/json/l{n}.file.js  (+ lectures_index.js)\n"
        f"     Problems: Test_L{n}.js  (+ config.js, index.html)\n"
        + ("" if (args.commit or args.push) else
           "\n     Not committed. Re-run with --commit (and --push to upload) when ready.\n")
    )


def commit_and_push(n, title, push):
    msg_summary = f"Add lecture {n} high-yield summary\n\n{title}"
    msg_problems = f"Add lecture {n} question set\n\n{title}"

    for repo, paths, msg in (
        (SUMMARY_REPO, [f"content/json/l{n}.file.js", "lectures_index.js",
                        f"content/L{n}_HighYield_Render.pdf"], msg_summary),
        (PROBLEMS_REPO, [f"Test_L{n}.js", "config.js", "index.html",
                         "scripts/pdf_mapping.js"], msg_problems),
    ):
        # Only add paths that exist.
        existing = [p for p in paths if (repo / p).exists()]
        run_git(repo, ["add"] + existing)
        status = run_git(repo, ["status", "--porcelain"] + existing, check=False)
        if not status.stdout.strip():
            info(f"{repo.name}: nothing to commit.")
            continue
        run_git(repo, ["commit", "-m", msg])
        info(f"{repo.name}: committed.")
        if push:
            branch = run_git(repo, ["rev-parse", "--abbrev-ref", "HEAD"]).stdout.strip()
            run_git(repo, ["push", "origin", branch])
            info(f"{repo.name}: pushed to origin/{branch}.")


# --------------------------------------------------------------------------- #
# main
# --------------------------------------------------------------------------- #
def main():
    global SUMMARY_REPO, PROBLEMS_REPO, WORK_DIR, SUMMARY_PROMPT, QUESTION_PROMPT

    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--summary-repo", type=Path, help="Path to PPOM-UNO-Summary")
    parser.add_argument("--problems-repo", type=Path, help="Path to PPOM-UNO-Problems")
    sub = parser.add_subparsers(dest="command", required=True)

    p_ing = sub.add_parser(
        "ingest",
        help="Renumber new-semester files from _incoming/ (+200 per semester) into transcripts/ + pdfs/",
    )
    p_ing.add_argument(
        "--semester", type=int, default=2,
        help="Semester of the files in _incoming/ (default 2: lecture #1 -> L201; 3 -> L401)",
    )
    p_ing.set_defaults(func=cmd_ingest)

    p_prep = sub.add_parser("prep", help="Extract inputs + build the generation bundle")
    p_prep.add_argument("number", type=int, help="Lecture number, e.g. 193")
    p_prep.set_defaults(func=cmd_prep)

    p_inst = sub.add_parser("install", help="Place + register generated files in both sites")
    p_inst.add_argument("number", type=int, help="Lecture number, e.g. 193")
    p_inst.add_argument("--commit", action="store_true", help="git commit in both repos")
    p_inst.add_argument("--push", action="store_true", help="git commit AND push (upload)")
    p_inst.add_argument("--no-pdf", action="store_true", help="Skip high-yield PDF render")
    p_inst.set_defaults(func=cmd_install)

    args = parser.parse_args()

    if args.summary_repo:
        SUMMARY_REPO = args.summary_repo.resolve()
        WORK_DIR = SUMMARY_REPO / "_pipeline"
        SUMMARY_PROMPT = SUMMARY_REPO / "lecture_summary_prompt.md"
    if args.problems_repo:
        PROBLEMS_REPO = args.problems_repo.resolve()
        QUESTION_PROMPT = PROBLEMS_REPO / "question_generation_prompt_v5.txt"

    args.func(args)


if __name__ == "__main__":
    main()
