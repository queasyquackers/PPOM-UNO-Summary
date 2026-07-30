#!/usr/bin/env python3
"""
lecture_pipeline.py  --  One command to turn a lecture into a high-yield summary
(PPOM-UNO-Summary) AND a board-question set (PPOM-UNO-Problems).

The generation itself is done by Claude Code (free, uses your subscription), so this
script handles everything *around* it:

    0. ingest        (new-semester files only) Drop the semester's raw files into
                     _incoming/ -- in either repo; both are scanned -- then run
                     ingest to renumber them with a +200 offset per semester
                     (semester 2 lecture #1 -> Lecture #201) and move them into
                     that repo's transcripts/ and pdfs/. This keeps lecture numbers
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
# Block identity  (main vs cardiovascular)
# --------------------------------------------------------------------------- #
# The "main" block is semester-1 (Neuro/Psych/MSK/Heme) and uses the l<N>/L<N>
# id scheme. The "cardio" block is a separate semester whose lecture numbers
# restart at 1; to keep the displayed numbers (e.g. 22) while staying globally
# unique -- l22 already exists in Neuro -- cardio lectures carry a "cv" prefix
# (cv22 -> displays "CV22", routes to the Cardiovascular block). See app.js
# getBlockInfo() (Summary) and config.js getTestSection() (Problems).
def block_ids(n, block):
    if block == "cardio":
        return {
            "block": "cardio",
            "num": n,
            "slug": f"cv{n}",                 # Summary lecture id + file stem
            "summary_file": f"cv{n}.file.js",
            "summary_token": f'"id": "cv{n}"',  # validation token (receiveLectureContent format)
            "test_var": f"Test_CV{n}",
            "test_file": f"Test_CV{n}.js",
            "pdf_key": f"CV{n}",              # key in Problems/scripts/pdf_mapping.js
            "id_token": f"CV{n}",            # "(CV22)" token in the config test name
            "bundle_name": f"CV{n}",
            "append_index": True,            # cardio lectures append at the end of the index
        }
    return {
        "block": "main",
        "num": n,
        "slug": f"l{n}",
        "summary_file": f"l{n}.file.js",
        "summary_token": f"window.L{n}",
        "test_var": f"Test_L{n}",
        "test_file": f"Test_L{n}.js",
        "pdf_key": f"L{n}",
        "id_token": f"L{n}",
        "bundle_name": f"L{n}",
        "append_index": False,
    }


def config_test_name(ids, week, topic):
    """Label shown in config.js. Cardio uses a 'Cardio-' prefix so
    getTestSection() routes it to Section V regardless of week."""
    if ids["block"] == "cardio":
        return f"Cardio-{topic} ({ids['id_token']})"
    return f"{week}-{topic} ({ids['id_token']})"


def extract_pdf_text_plain(pdf_path):
    """Extract running text from a PDF transcript (no slide markers)."""
    try:
        import pdfplumber

        with pdfplumber.open(pdf_path) as pdf:
            return "\n".join((p.extract_text() or "") for p in pdf.pages).strip()
    except Exception:
        pass
    try:
        import fitz

        doc = fitz.open(pdf_path)
        return "\n".join(p.get_text() for p in doc).strip()
    except Exception as e:
        die(f"Could not extract PDF text from {pdf_path}: {e}")


def find_cardio_inputs(n):
    """Cardio raw files live in Summary/_incoming with their original (1-41)
    numbers, so they can't share the numbered transcripts/ + pdfs/ folders with
    Neuro. Distinguish the transcript PDF from the slide PDF by filename."""
    incoming = SUMMARY_REPO / "_incoming"
    pat = lecture_num_regex(n)
    transcript = slides = None
    if incoming.exists():
        for f in sorted(incoming.iterdir()):
            if not f.is_file() or not pat.search(f.name):
                continue
            low = f.name.lower()
            if f.suffix.lower() == ".pdf" and "tran" in low:      # transcript / trancript
                transcript = transcript or f
            elif "ppt" in low or f.suffix.lower() in {".pdf", ".pptx"}:
                slides = slides or f
    return transcript, slides


# --------------------------------------------------------------------------- #
# ingest (new-semester renumbering)
# --------------------------------------------------------------------------- #
# Each semester's lectures restart at #1, but this pipeline needs globally unique
# numbers (filenames, window.L<N>, index/config registrations all key on it).
# Semester s gets a +(s-1)*200 offset: semester 2 lecture #1 -> Lecture #201.
SEMESTER_BLOCK = 200

def cmd_ingest(args):
    offset = (args.semester - 1) * SEMESTER_BLOCK
    print(f"\n=== INGEST semester {args.semester} (lecture #N -> #{offset}+N) ===")

    # Summary/_incoming is the one you normally use -- created on demand. The
    # Problems repo mirrors transcripts/ + pdfs/ too (prep searches both), so if
    # you keep an _incoming/ there it is scanned as well and its files route into
    # that repo's own folders. Never created for you: if it isn't there, you don't
    # want it.
    summary_incoming = SUMMARY_REPO / "_incoming"
    summary_incoming.mkdir(exist_ok=True)
    incomings = [summary_incoming]
    problems_incoming = PROBLEMS_REPO / "_incoming"
    if problems_incoming.is_dir():
        incomings.append(problems_incoming)

    # First lecture-number token in the name: '#1', '# 1', or 'L1' (not 'L19' inside 'L190').
    num_pat = re.compile(r"(#\s*|\bL)(\d+)(?!\d)")
    moved, skipped, ingested_numbers = [], [], []
    for incoming in incomings:
        repo = incoming.parent
        for f in sorted(incoming.iterdir()):
            if not f.is_file():
                continue
            if f.suffix.lower() in {".srt", ".txt"}:
                dest_dir = repo / "transcripts"
            elif f.suffix.lower() == ".pdf":
                dest_dir = repo / "pdfs"
            else:
                skipped.append((repo.name, f.name, "not a transcript (.srt/.txt) or slide PDF"))
                continue
            m = num_pat.search(f.name)
            if not m:
                skipped.append((repo.name, f.name, "no lecture number ('#N' or 'LN') in filename"))
                continue
            n = int(m.group(2))
            if n >= SEMESTER_BLOCK:
                skipped.append((repo.name, f.name, f"number {n} looks already offset -- move it manually if intended"))
                continue
            new_n = n + offset
            new_name = f.name[: m.start(2)] + str(new_n) + f.name[m.end(2):]
            dest_dir.mkdir(exist_ok=True)
            dest = dest_dir / new_name
            if dest.exists():
                skipped.append((repo.name, f.name, f"{dest_dir.name}/{new_name} already exists"))
                continue
            shutil.move(str(f), str(dest))
            moved.append((repo.name, f.name, f"{dest_dir.name}/{new_name}"))
            ingested_numbers.append(new_n)

    if not moved and not skipped:
        print(
            "\nNothing to ingest. Drop the new semester's raw files -- transcripts\n"
            "(.srt/.txt) and slide PDFs together, named with their original numbers\n"
            "(e.g. 'Lecture #1_ ...') -- into:\n"
            + "".join(f"    {p}\n" for p in incomings)
            + f"then re-run:\n"
            f"    python lecture_pipeline.py ingest --semester {args.semester}\n"
        )
        return

    for repo_name, old, new in moved:
        info(f"[{repo_name}] {old}  ->  {new}")
    for repo_name, name, why in skipped:
        info(f"[{repo_name}] SKIPPED  {name}  ({why})")

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
    block = getattr(args, "block", "main")
    ids = block_ids(n, block)
    label = ids["id_token"]
    print(f"\n=== PREP lecture {n}  ({label}, {block} block) ===")

    if not SUMMARY_PROMPT.exists():
        die(f"Summary prompt not found: {SUMMARY_PROMPT}")
    if not QUESTION_PROMPT.exists():
        die(f"Question prompt not found: {QUESTION_PROMPT}")

    if block == "cardio":
        transcript, pdf = find_cardio_inputs(n)
        if not transcript:
            die(
                f"No transcript PDF for cardio lecture {n} in {SUMMARY_REPO / '_incoming'}\n"
                f"    (expected a file named like 'Lecture #{n}. ... (Transcript).pdf')"
            )
        if not pdf:
            die(f"No slide PDF for cardio lecture {n} in {SUMMARY_REPO / '_incoming'}")
        if pdf.suffix.lower() != ".pdf":
            die(f"Slide file for lecture {n} is {pdf.suffix} ({pdf.name}); convert to PDF first.")
        info(f"transcript: {transcript.name}  (PDF)")
        info(f"slides:     {pdf.name}")
        transcript_text = extract_pdf_text_plain(transcript)
    else:
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

    bundle = WORK_DIR / ids["bundle_name"]
    bundle.mkdir(parents=True, exist_ok=True)
    (bundle / "transcript.txt").write_text(transcript_text, encoding="utf-8")
    (bundle / "slides.txt").write_text(slides_text, encoding="utf-8")

    # Record where the source PDF lives so install can render the high-yield PDF.
    (bundle / "sources.json").write_text(
        json.dumps(
            {
                "lecture": n,
                "block": block,
                "transcript_file": str(transcript),
                "pdf_file": str(pdf),
                "title_hint": title_hint,
                "lecturer_hint": lecturer_hint,
            },
            indent=2,
        ),
        encoding="utf-8",
    )

    generate_md = build_generate_instructions(n, title_hint, lecturer_hint, ids)
    (bundle / "GENERATE.md").write_text(generate_md, encoding="utf-8")

    install_flag = " --block cardio" if block == "cardio" else ""
    tword = len(transcript_text.split())
    print(
        f"\n[OK] Bundle ready: {bundle}\n"
        f"     transcript.txt ({tword:,} words)  slides.txt  GENERATE.md  sources.json\n\n"
        f"NEXT -- in Claude Code, generate the 3 files per {bundle.name}/GENERATE.md.\n\n"
        f"THEN:\n"
        f"     python lecture_pipeline.py install {n}{install_flag} --commit\n"
    )


def build_generate_instructions(n, title_hint, lecturer_hint, ids=None):
    ids = ids or block_ids(n, "main")
    rel_summary_prompt = SUMMARY_PROMPT
    rel_question_prompt = QUESTION_PROMPT
    bundle = WORK_DIR / ids["bundle_name"]

    if ids["block"] == "cardio":
        return f"""# Generate cardiovascular lecture {n}  ({ids['id_token']})

You (Claude Code) are producing the summary + question files for **Cardiovascular
Lecture {n}** (displayed as **{ids['id_token']}**). Inputs are in: `{bundle}`

## Inputs (read these)
- `transcript.txt`  -- cleaned lecture transcript (PRIMARY source of truth)
- `slides.txt`      -- slide text, marked `--- SLIDE n ---` (use for slide #s + spellings)

Filename hints (verify against content -- the transcript wins):
- Title hint:    {title_hint or "(unknown -- derive from content)"}
- Lecturer hint: {lecturer_hint or "(unknown -- derive from content)"}

## What to produce -- write EXACTLY these 3 files into this folder

### 1. `{ids['summary_file']}`  -- the high-yield summary
Follow the full spec in:
    {rel_summary_prompt}
CARDIO id scheme -- use the `receiveLectureContent` loader format with a "cv" id
(NOT `window.L{n}`, which would collide with Neuro's l{n}):
    window.receiveLectureContent({{
      "id": "{ids['slug']}",
      "title": "Lecture #{n}: <Title>",
      "lecturer": "<Name, credentials>",
      "pdf": "content/{ids['id_token']}_HighYield_Render.pdf",
      "content": `<markdown summary per the prompt>`,
      "flashcards": [ ... ],
      "questions": [ ... ],   // 5 review MCQs (structured array)
      "anking": [ ... ],
      "ankingResource": {{ ... }},
      "pearls": [ ... ],
      "mindmap": `<markdown outline>`
    }});
Use backtick template strings for `content` and `mindmap`. Escape any backticks/${{}}
inside them. Keep clinical-correlate titles plain (no ** or ###).

### 2. `{ids['test_file']}`  -- the board questions
Follow the full spec in:
    {rel_question_prompt}
Output ONLY the JS array, named for the cardio scheme:
    const {ids['test_var']} = [ {{ "id": 1, "category": ..., "questionText": ...,
      "options": [{{"text":...,"explanation":...}}, ...],
      "correctAnswerIndex": <int>, "clinicalPearl": ...,
      "pdfPage": <slide number from slides.txt>, "pdfQuote": "<short slide quote>" }}, ... ];

    window.{ids['test_var']} = {ids['test_var']};   // REQUIRED final line

The trailing `window.` assignment is mandatory -- config.js reads `window.{ids['test_var']}`,
and without it the test silently loads as empty on the Problems site.
30 questions, distribution + rules per the prompt. `pdfPage` must match a real
`--- SLIDE n ---` from slides.txt. Every question needs `clinicalPearl` + `pdfPage`.
Answer-position rules are enforced at install: ~6 each of A-E, no run >2, and the
correct answer must NOT be the longest option in at least 75% of questions.

### 3. `meta.json`  -- registration metadata
    {{
      "lecture": {n},
      "block": "cardio",
      "module": "<e.g. Physiology, Pharmacology, Pathology, Anatomy, DPR, ...>",
      "week": 1,
      "topic": "<Module: Short Topic>  e.g. 'Physiology: Cardiac Cycle'",
      "readingTime": <estimate: summary words / {WORDS_PER_MINUTE}, min 2>
    }}
`topic` becomes the config.js label: "Cardio-<topic> ({ids['id_token']})".

## When done
Tell the user to run:
    python lecture_pipeline.py install {n} --block cardio --commit
"""

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


def validate_question_quality(text, name):
    """Warn on the answer-key giveaways the question prompt explicitly bans:
    uneven A-E distribution, long runs of one letter, and the 'correct answer is
    the longest option' tell. Warnings only -- these are quality, not validity."""
    idx = [int(m) for m in re.findall(r'"correctAnswerIndex":\s*(\d+)', text)]
    if not idx:
        return
    counts = {i: idx.count(i) for i in range(5)}
    spread = max(counts.values()) - min(counts.values())
    if spread > 3:
        info(f"[warn] {name}: uneven answer distribution {counts} (prompt wants ~even A-E).")
    run = mx = 1
    for a, b in zip(idx, idx[1:]):
        run = run + 1 if a == b else 1
        mx = max(mx, run)
    if mx > 2:
        info(f"[warn] {name}: {mx} consecutive questions share the same answer letter.")
    # 'correct is longest option' tell
    blocks = re.findall(r'"options":\s*\[(.*?)\]\s*,\s*"correctAnswerIndex":\s*(\d+)', text, re.DOTALL)
    longest = total = 0
    for opts_blob, ci in blocks:
        lens = [len(t) for t in re.findall(r'"text":\s*"((?:[^"\\]|\\.)*)"', opts_blob)]
        if len(lens) < 2:
            continue
        total += 1
        if lens.index(max(lens)) == int(ci):
            longest += 1
    if total and longest / total > 0.25:
        info(
            f"[warn] {name}: correct answer is the longest option in "
            f"{longest}/{total} ({longest/total*100:.0f}%) -- prompt allows <=25%."
        )


def summary_index_entry(ids, title, module, reading_time):
    return (
        "  {\n"
        f'    "id": "{ids["slug"]}",\n'
        f'    "title": {json.dumps(title)},\n'
        f'    "module": {json.dumps(module)},\n'
        f'    "tags": "Lecture #{ids["num"]}",\n'
        f'    "path": "content/json/{ids["summary_file"]}",\n'
        f'    "readingTime": {reading_time}\n'
        "  }"
    )


def insert_into_lectures_index(index_path, ids, entry_block):
    n, slug = ids["num"], ids["slug"]
    text = index_path.read_text(encoding="utf-8")
    if f'"id": "{slug}"' in text:
        info(f"lectures_index.js already has {slug} -- skipping.")
        return
    # Cardio lectures (cv-prefixed) always append at the end of the index.
    nums = [(int(m.group(1)), m.start()) for m in re.finditer(r'"id":\s*"l(\d+)[a-z]?"', text)]
    target = None if ids["append_index"] else next((pos for num, pos in nums if num > n), None)
    if target is not None:
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
    info(f"registered {slug} in lectures_index.js")


def insert_into_config(config_path, ids, week, topic):
    n, test_var = ids["num"], ids["test_var"]
    text = config_path.read_text(encoding="utf-8")
    start = text.find("const testsToLoad = [")
    if start == -1:
        die("config.js: 'const testsToLoad = [' not found.")
    end = text.find("\n];", start)
    if end == -1:
        die("config.js: end of testsToLoad array not found.")
    block = text[start:end]
    if f"window.{test_var} " in block or f"window.{test_var}," in block or f"window.{test_var}}}" in block:
        info(f"config.js already registers {test_var} -- skipping.")
        return
    entry = f'    {{ name: "{config_test_name(ids, week, topic)}", data: window.{test_var} }},'
    # Main lectures insert in numeric order; cardio (append_index) go at the end
    # alongside the other non-numbered entries (e.g. the Pathoma block).
    nums = [
        (int(m.group(1)), m.start() + start)
        for m in re.finditer(r"window\.Test_L(\d+)\b", block)
    ]
    target = None if ids["append_index"] else next((pos for num, pos in nums if num > n), None)
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
    info(f"registered {test_var} in config.js")


def insert_script_tag(index_html, ids):
    n, test_file = ids["num"], ids["test_file"]
    text = index_html.read_text(encoding="utf-8")
    if f'src="{test_file}"' in text:
        info(f"index.html already includes {test_file} -- skipping.")
        return
    tag = f'    <script src="{test_file}"></script>\n'
    nums = [
        (int(m.group(1)), m.start())
        for m in re.finditer(r'<script src="Test_L(\d+)\.js"></script>', text)
    ]
    target = None if ids["append_index"] else next((pos for num, pos in nums if num > n), None)
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
    info(f"added <script> include for {test_file} in Problems/index.html")


def register_pdf_source(ids, bundle):
    """Copy the slide PDF into Problems/pdfs (if missing) and register it in
    scripts/pdf_mapping.js under the block's pdf key (L<n> or CV<n>), so the
    Problems site can show the 'Lecture source PDF -- page X' link for each
    question's pdfPage."""
    n = ids["num"]
    pdf_key = ids["pdf_key"]
    sources_file = bundle / "sources.json"
    if not sources_file.exists():
        info("sources.json missing (dupe/manual bundle) -- skipping PDF source mapping.")
        return None
    sources = json.loads(sources_file.read_text(encoding="utf-8"))
    pdf_src = Path(sources["pdf_file"])
    if not pdf_src.exists():
        info(f"slide PDF not found ({pdf_src.name}) -- skipping PDF source mapping.")
        return None

    # Ensure the slide PDF is present in the Problems repo's pdfs/ folder.
    pdf_dst = PROBLEMS_REPO / "pdfs" / pdf_src.name
    if not pdf_dst.exists():
        shutil.copyfile(pdf_src, pdf_dst)
        info(f"copied slide PDF -> Problems/pdfs/{pdf_src.name}")
    mapping_value = f"pdfs/{pdf_src.name}"

    mapping_path = PROBLEMS_REPO / "scripts" / "pdf_mapping.js"
    text = mapping_path.read_text(encoding="utf-8")
    if re.search(rf'"{pdf_key}"\s*:', text):
        info(f"pdf_mapping.js already maps {pdf_key} -- skipping.")
        return mapping_value
    start = text.find("PDF_MAPPING = {")
    end = text.find("\n};", start)
    if start == -1 or end == -1:
        info("pdf_mapping.js: could not locate PDF_MAPPING object -- skipping.")
        return None
    entry = f'    "{pdf_key}": {json.dumps(mapping_value)},'
    head = text[:end].rstrip()
    if not head.endswith(","):
        head += ","
    text = head + "\n" + entry + text[end:]
    mapping_path.write_text(text, encoding="utf-8")
    info(f'registered "{pdf_key}" in Problems/scripts/pdf_mapping.js')
    return mapping_value


def render_high_yield_pdf(ids, bundle):
    sources = json.loads((bundle / "sources.json").read_text(encoding="utf-8"))
    pdf_src = Path(sources["pdf_file"])
    transcript_src = Path(sources["transcript_file"])
    out_pdf = SUMMARY_REPO / "content" / f"{ids['id_token']}_HighYield_Render.pdf"
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
    block = getattr(args, "block", "main")
    ids = block_ids(n, block)
    # If the bundle recorded its block, trust that (prevents a main/cardio mismatch).
    bundle = WORK_DIR / ids["bundle_name"]
    src_json = bundle / "sources.json"
    if src_json.exists():
        recorded = json.loads(src_json.read_text(encoding="utf-8")).get("block", "main")
        if recorded != block:
            die(f"Bundle {bundle.name} was prepped as '{recorded}', but install got --block {block}.")
    print(f"\n=== INSTALL lecture {n}  ({ids['id_token']}, {block} block) ===")

    summary_src = bundle / ids["summary_file"]
    quest_src = bundle / ids["test_file"]
    meta_src = bundle / "meta.json"

    for f in (summary_src, quest_src, meta_src):
        if not f.exists():
            die(
                f"Missing {f.name} in {bundle}.\n"
                f"Generate the 3 files per {bundle.name}/GENERATE.md first."
            )

    # Validate generated JS + metadata
    summary_text = validate_js(summary_src, ids["summary_token"])
    quest_text = validate_js(quest_src, f"const {ids['test_var']}")
    # config.js reads window.<var>; without this assignment the test loads empty.
    if f"window.{ids['test_var']}" not in quest_text:
        die(
            f"{quest_src.name} is missing the required final line:\n"
            f"    window.{ids['test_var']} = {ids['test_var']};\n"
            f"Without it the Problems site loads this test as empty."
        )
    validate_question_quality(quest_text, quest_src.name)
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
    summary_dst = SUMMARY_REPO / "content" / "json" / ids["summary_file"]
    quest_dst = PROBLEMS_REPO / ids["test_file"]
    shutil.copyfile(summary_src, summary_dst)
    info(f"copied -> {summary_dst.relative_to(SUMMARY_REPO)}")
    shutil.copyfile(quest_src, quest_dst)
    info(f"copied -> PPOM-UNO-Problems/{quest_dst.name}")

    # --- Register in both sites ---
    insert_into_lectures_index(
        SUMMARY_REPO / "lectures_index.js", ids,
        summary_index_entry(ids, title, module, reading_time),
    )
    insert_into_config(PROBLEMS_REPO / "config.js", ids, week, topic)
    insert_script_tag(PROBLEMS_REPO / "index.html", ids)
    pdf_rel = register_pdf_source(ids, bundle)

    # --- Optional high-yield PDF render ---
    if not args.no_pdf:
        render_high_yield_pdf(ids, bundle)

    # --- Git ---
    if args.commit or args.push:
        commit_and_push(ids, title, args.push, pdf_rel)

    print(
        f"\n[OK] Lecture {n} ({ids['id_token']}) installed into both sites.\n"
        f"     Summary:  content/json/{ids['summary_file']}  (+ lectures_index.js)\n"
        f"     Problems: {ids['test_file']}  (+ config.js, index.html)\n"
        + ("" if (args.commit or args.push) else
           "\n     Not committed. Re-run with --commit (and --push to upload) when ready.\n")
    )


def commit_and_push(ids, title, push, pdf_rel=None):
    msg_summary = f"Add {ids['id_token']} high-yield summary\n\n{title}"
    msg_problems = f"Add {ids['id_token']} question set\n\n{title}"

    problems_paths = [ids["test_file"], "config.js", "index.html", "scripts/pdf_mapping.js"]
    if pdf_rel:  # the copied slide PDF, e.g. "pdfs/Lecture # 22. ... .pdf"
        problems_paths.append(pdf_rel)

    for repo, paths, msg in (
        (SUMMARY_REPO, [f"content/json/{ids['summary_file']}", "lectures_index.js",
                        f"content/{ids['id_token']}_HighYield_Render.pdf"], msg_summary),
        (PROBLEMS_REPO, problems_paths, msg_problems),
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
    p_prep.add_argument(
        "--block", choices=["main", "cardio"], default="main",
        help="cardio: read raw files from _incoming/ and emit the cv/CV slug "
             "(Cardiovascular block, numbers kept 1-41). Default: main.",
    )
    p_prep.set_defaults(func=cmd_prep)

    p_inst = sub.add_parser("install", help="Place + register generated files in both sites")
    p_inst.add_argument("number", type=int, help="Lecture number, e.g. 193")
    p_inst.add_argument(
        "--block", choices=["main", "cardio"], default="main",
        help="Must match how the bundle was prepped (recorded in sources.json).",
    )
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
