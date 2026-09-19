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

                     install also enforces the rules from
                     question_generation_prompt_v6.txt: exactly 6 keys per letter,
                     no run of 3+, no A-E cycle, key longest in 4-8 and shortest in
                     4-8 of 30, plus the per-question format rules (5 options,
                     Correct./Incorrect. explanations, Key takeaway pearl, ASCII).
                     The key tells are invisible when reading questions one at a
                     time -- they only show in aggregate -- so a failure BLOCKS the
                     install.
                         --fix        even out the key by reordering options
                                      (never edits text, so content is untouched)
                         --no-verify  downgrade the failure to a warning

Usage:
    python lecture_pipeline.py ingest                      # semester 2 (+200): #1 -> L201
    python lecture_pipeline.py ingest --semester 3         # semester 3 (+400): #1 -> L401
    python lecture_pipeline.py prep 193
    python lecture_pipeline.py prep 22 --block cardio      # Cardiovascular block (CV22)
    python lecture_pipeline.py install 193                 # place + register, no git
    python lecture_pipeline.py install 193 --fix           # + auto-even the answer key
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
QUESTION_PROMPT = PROBLEMS_REPO / "question_generation_prompt_v6.txt"

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
    if path.suffix.lower() == ".dfxp":
        return " ".join(text for _, text in timed_cues(path))
    return raw.strip()  # already-cleaned .txt


def _seconds(stamp):
    h, m, sec = stamp.replace(",", ".").split(":")
    return int(h) * 3600 + int(m) * 60 + float(sec)


def timed_cues(path):
    """[(start_seconds, text)] for a timestamped transcript (.srt or .dfxp);
    [] for plain .txt, which carries no timing."""
    import html

    raw = path.read_text(encoding="utf-8", errors="ignore")
    cues = []
    if path.suffix.lower() == ".srt":
        for block in re.split(r"\n\s*\n", raw):
            m = re.search(r"(\d{2}:\d{2}:\d{2}[,.]\d+)\s*-->", block)
            if not m:
                continue
            text = " ".join(ln.strip() for ln in block[m.end():].splitlines()[1:] if ln.strip())
            cues.append((_seconds(m.group(1)), re.sub(r"<[^>]+>", "", text)))
    elif path.suffix.lower() == ".dfxp":
        for m in re.finditer(r'<p[^>]*\bbegin="([\d:.]+)"[^>]*>(.*?)</p>', raw, re.S):
            text = html.unescape(re.sub(r"<[^>]+>", " ", m.group(2)))
            cues.append((_seconds(m.group(1)), re.sub(r"\s+", " ", text).strip()))
    return [(t, x) for t, x in cues if x]


def timed_transcript(path, every=30):
    """The transcript in ~30-second paragraphs, each prefixed [mm:ss], so the
    time spent per slide (v6's DWELL signal) is readable without the raw file."""
    cues = timed_cues(path)
    if not cues:
        return f"(no timestamps in {path.name})\n" + extract_transcript(path)
    out, chunk, chunk_start = [], [], cues[0][0]
    for start, text in cues:
        if chunk and start - chunk_start >= every:
            out.append(f"[{int(chunk_start // 60):02d}:{int(chunk_start % 60):02d}] " + " ".join(chunk))
            chunk, chunk_start = [], start
        chunk.append(text)
    if chunk:
        out.append(f"[{int(chunk_start // 60):02d}:{int(chunk_start % 60):02d}] " + " ".join(chunk))
    return "\n".join(out)


def slide_emphasis(pdf_path):
    """Per-slide bold phrases and the deck's bold share, for v6's BOLD signal.
    Text extraction drops font weight, so this reads the PDF's span flags."""
    import fitz

    doc = fitz.open(pdf_path)
    total = bold = 0
    lines = []
    for i, page in enumerate(doc, start=1):
        phrases, chars = [], 0
        for block in page.get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                for span in line["spans"]:
                    t = span["text"].strip()
                    if not t:
                        continue
                    chars += len(t)
                    if span["flags"] & 16 or "bold" in span["font"].lower():
                        bold += len(t)
                        phrases.append(t)
        total += chars
        tag = "IMAGE-ONLY (no extractable text - view the PDF page)" if chars == 0 else f"{chars} chars"
        lines.append(f"--- SLIDE {i} --- {tag}" + (f"\n  bold: {' | '.join(phrases)}" if phrases else ""))
    share = 100 * bold / total if total else 0
    verdict = ("bold is the deck's body style - drop S4" if share > 40
               else "bold is usable as the S4 emphasis signal")
    return f"Deck bold share: {share:.0f}% ({verdict})\n\n" + "\n".join(lines)


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

# CPR Block 1 curriculum weeks, keyed by lecture number. The boundaries are
# uneven (week 3 spans 11 lectures, week 5 spans 13, the others 10), so they are
# listed rather than computed. Derived at install time so a hand-written
# meta.json cannot record the wrong week -- generators guess this badly (the
# week-5 batch variously self-reported 1, 5 and 6).
CARDIO_WEEKS = ((1, 10, 1), (11, 20, 2), (21, 31, 3), (32, 41, 4), (42, 54, 5),
                # CPR Block 2 (week 6 is the comp week)
                (55, 67, 7), (68, 78, 8), (79, 89, 9), (90, 99, 10), (100, 112, 11))

CARDIO_MAX = max(hi for _, hi, _ in CARDIO_WEEKS)


def cardio_week(n):
    """Curriculum week for cardio lecture n, or None if outside the mapped range."""
    for lo, hi, week in CARDIO_WEEKS:
        if lo <= n <= hi:
            return week
    return None


def block_ids(n, block):
    if block == "cardio":
        return {
            "block": "cardio",
            "num": n,
            "slug": f"cv{n}",                 # Summary lecture id + file stem
            "summary_file": f"cv{n}.file.js",
            "summary_token": f'"id": "cv{n}"',  # validation token (receiveLectureContent format)
            "test_var": f"Test_CV{n}",        # stem; v6 ships _Recall + _Boards
            "pdf_key": f"CV{n}",              # key in Problems/scripts/pdf_mapping.js
            "id_token": f"CV{n}",            # "(CV22)" token in the config test name
            "bundle_name": f"CV{n}",
            "separate_numbering": True,      # cv1-41 is its own number space; sort among cv entries
        }
    return {
        "block": "main",
        "num": n,
        "slug": f"l{n}",
        "summary_file": f"l{n}.file.js",
        "summary_token": f"window.L{n}",
        "test_var": f"Test_L{n}",
        "pdf_key": f"L{n}",
        "id_token": f"L{n}",
        "bundle_name": f"L{n}",
        "separate_numbering": False,
    }


# v6 question sets: (file suffix, config.js tag). One lecture ships both files.
QUESTION_SETS = (("Recall", "[Recall]"), ("Boards", "[Boards]"))


def question_files(ids):
    """[(set name, var name, file name)] for a lecture's two v6 question files."""
    return [(name, f"{ids['test_var']}_{name}", f"{ids['test_var']}_{name}.js")
            for name, _ in QUESTION_SETS]


def config_test_name(ids, week, topic, tag):
    """Label shown in config.js. Cardio uses a 'Cardio-' prefix so
    getTestSection() routes it to CPR Block 1 or 2 by lecture number regardless
    of week. The set tag sits in square brackets BEFORE the "(CVn)" id, because
    app.js reads the last parenthetical as the lecture id."""
    if ids["block"] == "cardio":
        return f"Cardio-{topic} {tag} ({ids['id_token']})"
    return f"{week}-{topic} {tag} ({ids['id_token']})"


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
    Neuro. Transcripts are .srt/.txt files or PDFs named '(Transcript)';
    slides are the '(PPT)' PDFs.

    Matching is anchored to the leading 'Lecture #N' because lecture titles can
    contain their own numbers (e.g. L2's SRT is titled 'OMM Lab #31 Prep') and
    an unanchored search would let those hijack another lecture's prep. '0*'
    accepts zero-padded downloads like 'Lecture #01_'."""
    incoming = SUMMARY_REPO / "_incoming"
    pat = re.compile(rf"^Lecture[\s_]*#\s*0*{n}(?!\d)", re.IGNORECASE)
    transcripts, slides = [], None
    if incoming.exists():
        for f in sorted(incoming.iterdir()):
            if not f.is_file() or not pat.search(f.name):
                continue
            low = f.name.lower()
            if f.suffix.lower() in {".srt", ".txt", ".dfxp"} or (
                f.suffix.lower() == ".pdf" and "tran" in low   # transcript / trancript
            ):
                transcripts.append(f)
            elif "ppt" in low or f.suffix.lower() in {".pdf", ".pptx"}:
                slides = slides or f
    # Some lectures ship extra recordings (Part 2, Question Review, Rapid Pharm
    # Concept Review). Keep them all, main recording first.
    extra = re.compile(r"question review|concept review|supplement|summary", re.IGNORECASE)
    transcripts.sort(key=lambda f: (bool(extra.search(f.name)), f.name))
    return transcripts, slides


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
        transcripts, pdf = find_cardio_inputs(n)
        if not transcripts:
            die(
                f"No transcript for cardio lecture {n} in {SUMMARY_REPO / '_incoming'}\n"
                f"    (expected .srt/.dfxp/.txt, or a PDF named '(Transcript)')"
            )
        if not pdf:
            die(f"No slide PDF for cardio lecture {n} in {SUMMARY_REPO / '_incoming'}")
        if pdf.suffix.lower() != ".pdf":
            die(f"Slide file for lecture {n} is {pdf.suffix} ({pdf.name}); convert to PDF first.")
        for t in transcripts:
            info(f"transcript: {t.name}  ({t.suffix.lstrip('.').upper()})")
        info(f"slides:     {pdf.name}")
        transcript = transcripts[0]
        texts, timed = [], []
        for t in transcripts:
            body = extract_pdf_text_plain(t) if t.suffix.lower() == ".pdf" else extract_transcript(t)
            head = f"===== {t.name} =====\n" if len(transcripts) > 1 else ""
            texts.append(head + body)
            if t.suffix.lower() != ".pdf":
                timed.append(f"===== {t.name} =====\n" + timed_transcript(t))
        transcript_text = "\n\n".join(texts)
        extra_files = {"transcript_timed.txt": "\n\n".join(timed) or "(no timed transcript)",
                       "slides_emphasis.txt": slide_emphasis(pdf)}
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
        transcripts, extra_files = [transcript], {}

    slides_text = extract_slides(pdf)
    title_hint, lecturer_hint = parse_meta_hint(transcript.name)

    bundle = WORK_DIR / ids["bundle_name"]
    bundle.mkdir(parents=True, exist_ok=True)
    (bundle / "transcript.txt").write_text(transcript_text, encoding="utf-8")
    (bundle / "slides.txt").write_text(slides_text, encoding="utf-8")
    for name, text in extra_files.items():
        (bundle / name).write_text(text, encoding="utf-8")

    # Record where the source PDF lives so install can render the high-yield PDF.
    (bundle / "sources.json").write_text(
        json.dumps(
            {
                "lecture": n,
                "block": block,
                "transcript_file": str(transcript),
                "transcript_files": [str(t) for t in transcripts],
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


def diagram_instructions(ids):
    """The animated-diagram deliverable, identical for both blocks.

    Kept as its own section so the rules live in exactly one place: the
    generating agent reads them here, and check_diagrams.py enforces the same
    list mechanically at install."""
    slug = ids["slug"]
    return f"""### 4. `{slug}.diagrams.js`  -- animated concept diagrams (skip only if nothing warrants one)

Some concepts do not survive being written down: anything with sequence,
direction, a gradient, a feedback loop, or timing. For those, add a small
animated SVG. Anatomy and physiology (especially renal) are the usual
candidates; drug tables and classifications are not.

Judgement first: pick only concepts where MOTION teaches something a static
picture cannot. Aim for 1-4 per lecture. Zero is a legitimate answer for a
lecture that is all lists and classification -- write no file in that case.
Do not pad; a diagram should mean "this one is worth stopping at".

Write the file into this bundle folder as `{slug}.diagrams.js`:

    window.LECTURE_DIAGRAMS = window.LECTURE_DIAGRAMS || {{}};
    window.LECTURE_DIAGRAMS["{slug}-<slug>"] = {{
      title:   "<short label>",
      caption: "<2-3 sentences: what it shows and what to take away>",
      svg:     `<svg viewBox="0 0 620 260" role="img" aria-label="<plain-language description>"> ... </svg>`
    }};

Then place each one in the summary by adding a line

    :::diagram {slug}-<slug>:::

on its own line (blank line above and below) immediately after the section it
illustrates. The summary renderer swaps that directive for the diagram.

RULES -- `python scripts/check_diagrams.py` enforces these and the install fails if they break:
1. CSS keyframes ONLY. No <animate>/SMIL, no JS timers. Target is Safari on iPad.
2. Colors ONLY via the shared variables -- var(--dg-ink), --dg-muted, --dg-surface,
   --dg-panel, --dg-line, --dg-accent, --dg-warm, --dg-cool, --dg-good. Never a hex
   literal: the site has a dark mode and hardcoded colors break it.
3. Every <svg> needs a viewBox, NO width/height attributes, plus role and aria-label.
4. Nothing essential may be hover-only -- a touch screen has no hover.
5. It must still teach when frozen (reduced-motion stops all animation).
6. Prefix every CSS class per diagram (.dg{ids['num']}a-, .dg{ids['num']}b-, ...) so diagrams cannot style each other.
7. NO CSS comments inside the diagram's <style> -- the summary renderer turns the
   asterisks into <em> tags and shreds the stylesheet. Explain in `caption` instead.
8. Keep the viewBox ~600-660 wide and <= ~320 tall so it stays legible in a narrow column.
9. Every number, label and arrow direction must match THIS lecture's stated values.
   If the lecture's numbers differ from the standard teaching, follow the lecture
   and say so in the caption. Never invent values.

`lecture_diagrams.js` (repo root, same folder as this pipeline) holds the shared
stylesheet and a worked reference example ("cv7-filtration-forces") -- read it
before writing your own."""


def question_set_instructions(ids):
    tv, lec = ids["test_var"], ids["id_token"]
    return f"""Follow the full spec in:
    {QUESTION_PROMPT}
It produces TWO files for this lecture -- write both into this folder:
    {tv}_Recall.js   SET A: first-order recall, in lecture order (min(30, 2 x content slides) items)
    {tv}_Boards.js   SET B: 15 board-style items on the same content
Each file is exactly: an optional `// SET A ...` comment line, then
    const {tv}_Recall = [ ...strict JSON array... ];

    window.{tv}_Recall = {tv}_Recall;   // REQUIRED final line (same pattern for _Boards)
Every item carries id, category, questionText, options, correctAnswerIndex,
clinicalPearl, lectureSource ("{lec}: <Lecture Title>", constant per file),
pdfLecture ("{lec}"), pdfPage and pdfQuote, per the prompt's SCHEMA.

Inputs for the high-yield gate (the prompt asks for the PDF and a timed transcript):
- `slides.txt` has the slide text; `slides_emphasis.txt` has the deck's bold share
  and the bold phrases on each slide (the S4 signal) and flags image-only slides.
  Open the PDF itself (path in sources.json) for any image-only slide you need.
- `transcript_timed.txt` is the transcript in ~30 s paragraphs stamped [mm:ss]
  (the S6 dwell signal). Several recordings are separated by ===== headers; a
  Question Review or Rapid Concept Review recording counts only where it covers
  this deck's content (intersection rule).

Put the prompt's Part 1 (planning, tallies, scope report) in your reply, not in a
file, and skip Part 3 -- `install` writes the config.js, index.html and
pdf_mapping.js registrations itself. Before finishing, run
    python "{PROBLEMS_REPO / 'scripts' / 'check_question_set.py'}" {tv}_Recall.js {tv}_Boards.js --repo "{PROBLEMS_REPO}" --only-fails
from this folder and fix every FAIL. `install` re-runs it and BLOCKS on any FAIL.
(pdf_mapping.js gains the "{lec}" key at install, so a FAIL on that key alone is expected now.)"""


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

## What to produce -- write EXACTLY these files into this folder

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

### 2. `{ids['test_var']}_Recall.js` + `{ids['test_var']}_Boards.js`  -- the two question sets
{question_set_instructions(ids)}

### 3. `meta.json`  -- registration metadata
    {{
      "lecture": {n},
      "block": "cardio",
      "module": "<e.g. Physiology, Pharmacology, Pathology, Anatomy, DPR, ...>",
      "week": 1,
      "topic": "<Module: Short Topic>  e.g. 'Physiology: Cardiac Cycle'",
      "readingTime": <estimate: summary words / {WORDS_PER_MINUTE}, min 2>
    }}
`topic` is "<Discipline>: <Lecture Title>" and becomes the two config.js labels
"Cardio-<topic> [Recall] ({ids['id_token']})" and "Cardio-<topic> [Boards] ({ids['id_token']})".
Those names are permanent progress keys, so keep the title short and plain.
`week` is derived from the lecture number at install; any value here is overwritten.

{diagram_instructions(ids)}

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

## What to produce -- write EXACTLY these files into this folder

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
      "flashcards": [ {{ "front": ..., "back": ..., "tag": "Concept|Clinical|Glossary" }}, ... ],
      "questions": [ {{ "question": ..., "options": ["A. ...","B. ...","C. ...","D. ...","E. ..."],
                      "answer": "C", "rationale": ..., "hidden": true }}, ... ],  // 5 review MCQs (structured array, NOT markdown)
      "anking": [ ... ],
      "ankingResource": {{ ... }},
      "pearls": [ ... ],
      "mindmap": `<markdown outline>`
    }};
Use backtick template strings for `content` and `mindmap`. Escape any backticks/${{}}
inside them. Keep clinical-correlate titles plain (no ** or ###).

### 2. `Test_L{n}_Recall.js` + `Test_L{n}_Boards.js`  -- the two question sets
{question_set_instructions(ids)}

### 3. `meta.json`  -- registration metadata
    {{
      "lecture": {n},
      "module": "<one of the existing modules, e.g. Pharmacology, Pathology, Hematology, DPR, ...>",
      "week": <curriculum week number as used in config.js, e.g. 21>,
      "topic": "<Module: Short Topic>  e.g. 'Pharmacology: Antifungal Agents'>",
      "readingTime": <estimate: summary words / {WORDS_PER_MINUTE}, min 2>
    }}
`topic` becomes the two config.js labels "<week>-<topic> [Recall] (L{n})" and "... [Boards] (L{n})".

{diagram_instructions(ids)}

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


# Answer-key position rules shared by both v6 sets, used by --fix to choose a
# layout. The full v6 tallies are verified by PPOM-UNO-Problems/scripts/
# check_question_set.py, which install runs on both files.
MAX_SAME_LETTER_RUN = 2    # consecutive questions sharing an answer letter
MIN_CYCLE_RUN = 6          # e.g. A,B,C,D,E,A -- a learnable pattern


def parse_question_array(text):
    """Return the question list from a Test_*.js file, or None if it isn't
    plain-JSON-compatible (hand-edited files may not be)."""
    try:
        start, end = text.index("["), text.rindex("]")
    except ValueError:
        return None
    try:
        data = json.loads(text[start : end + 1])
    except json.JSONDecodeError:
        return None
    return data if isinstance(data, list) and data else None


def _key_sequence_problems(idx):
    """Position problems in a sequence of answer indexes (0-4)."""
    problems = []
    n = len(idx)
    counts = [idx.count(i) for i in range(5)]
    if (any(c != n // 5 for c in counts) if n % 5 == 0 else max(counts) - min(counts) > 1):
        problems.append("uneven answer distribution")
    run = 1
    for a, b in zip(idx, idx[1:]):
        run = run + 1 if a == b else 1
        if run > MAX_SAME_LETTER_RUN:
            problems.append("same letter keyed 3+ times in a row")
            break
    for step in (1, 4):  # +1 (A,B,C...) or -1 (E,D,C...) mod 5
        run = 1
        for a, b in zip(idx, idx[1:]):
            run = run + 1 if (b - a) % 5 == step else 1
            if run >= MIN_CYCLE_RUN:
                problems.append("answer letters cycle through A-E")
                break
    return problems


def run_question_checker(paths):
    """Run check_question_set.py on the lecture's files. Returns (ok, report)."""
    checker = PROBLEMS_REPO / "scripts" / "check_question_set.py"
    if not checker.exists():
        die(f"Question checker not found: {checker}")
    result = subprocess.run(
        [sys.executable, str(checker), *map(str, paths), "--repo", str(PROBLEMS_REPO), "--only-fails"],
        capture_output=True, text=True, encoding="utf-8", errors="replace",
    )
    return result.returncode == 0, result.stdout.strip()


def _is_ordered_set(q):
    """Numeric options and sets of findings keep their written (ascending)
    order under v6, so --fix must not move them."""
    return all(re.search(r"\d", o.get("text", "")) for o in q.get("options", []))


def _balanced_positions(data, seed=1729):
    """Target key positions: exactly n/5 per letter, no run longer than
    MAX_SAME_LETTER_RUN, no A-E cycle. Questions whose options must keep their
    order stay where they are. Deterministic (fixed seed) so a re-run
    reproduces the same layout. Returns None if no valid layout was found."""
    import random

    n = len(data)
    fixed = {i: q["correctAnswerIndex"] for i, q in enumerate(data) if _is_ordered_set(q)}
    quota = [n // 5 + (1 if i < n % 5 else 0) for i in range(5)]
    for v in fixed.values():
        quota[v] -= 1
    if min(quota) < 0:
        return None
    pool = [i for i, c in enumerate(quota) for _ in range(c)]
    free = [i for i in range(n) if i not in fixed]
    rnd = random.Random(seed)
    for _ in range(5000):
        rnd.shuffle(pool)
        seq = [0] * n
        for i, v in fixed.items():
            seq[i] = v
        for i, v in zip(free, pool):
            seq[i] = v
        if not _key_sequence_problems(seq):
            return seq
    return None


def rebalance_answers(data):
    """Even out the answer key by REORDERING options within each question.
    Only option order changes -- no text is edited, so the medical content and
    every explanation stay exactly as written. Returns the number of questions
    whose answer position moved, or None if no valid layout exists.

    This cannot fix the longest/shortest-key tell: that needs options
    rephrased, which is a writing task, not a permutation."""
    targets = _balanced_positions(data)
    if targets is None:
        return None
    moved = 0
    for q, target in zip(data, targets):
        ci = q["correctAnswerIndex"]
        if ci == target:
            continue
        opts = q["options"]
        opts[ci], opts[target] = opts[target], opts[ci]
        q["correctAnswerIndex"] = target
        moved += 1
    return moved


def write_question_file(path, var_name, data):
    body = json.dumps(data, indent=2, ensure_ascii=False)
    path.write_text(
        f"const {var_name} = {body};\n\nwindow.{var_name} = {var_name};\n",
        encoding="utf-8",
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
    # Cardio lectures live in their own 1-41 number space, so they sort among the
    # other cv entries (which sit after the main block) rather than among l ones.
    pat = r'"id":\s*"cv(\d+)"' if ids["separate_numbering"] else r'"id":\s*"l(\d+)[a-z]?"'
    nums = [(int(m.group(1)), m.start()) for m in re.finditer(pat, text)]
    target = next((pos for num, pos in nums if num > n), None)
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
    n = ids["num"]
    text = config_path.read_text(encoding="utf-8")
    start = text.find("const testsToLoad = [")
    if start == -1:
        die("config.js: 'const testsToLoad = [' not found.")
    end = text.find("\n];", start)
    if end == -1:
        die("config.js: end of testsToLoad array not found.")
    block = text[start:end]
    first_var = question_files(ids)[0][1]
    if re.search(rf"window\.{first_var}\b", block):
        info(f"config.js already registers {ids['test_var']} sets -- skipping.")
        return
    # The two sets sit adjacent, Recall first; the name is the progress key.
    entry = "\n".join(
        f'    {{ name: "{config_test_name(ids, week, topic, tag)}", data: window.{var} }},'
        for (_, var, _), (_, tag) in zip(question_files(ids), QUESTION_SETS))
    # Each numbering space sorts within itself: main lectures among Test_L*, cardio
    # among Test_CV* (which sit after the main entries and the Pathoma block).
    pat = (r"window\.Test_CV(\d+)(?:_[A-Za-z]+)?\b" if ids["separate_numbering"]
           else r"window\.Test_L(\d+)(?:_[A-Za-z]+)?\b")
    nums = [
        (int(m.group(1)), m.start() + start)
        for m in re.finditer(pat, block)
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
    info(f"registered {ids['test_var']} Recall + Boards in config.js")


def insert_script_tag(index_html, ids):
    n = ids["num"]
    files = [f for _, _, f in question_files(ids)]
    text = index_html.read_text(encoding="utf-8")
    if f'src="{files[0]}"' in text:
        info(f"index.html already includes {files[0]} -- skipping.")
        return
    tag = "".join(f'    <script src="{f}"></script>\n' for f in files)
    # Load order is functionally irrelevant here, but keep each number space in
    # numeric order so the tag list stays readable alongside config.js.
    pat = (r'<script src="Test_CV(\d+)(?:_[A-Za-z]+)?\.js"></script>' if ids["separate_numbering"]
           else r'<script src="Test_L(\d+)(?:_[A-Za-z]+)?\.js"></script>')
    nums = [(int(m.group(1)), m.start()) for m in re.finditer(pat, text)]
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
    info(f"added <script> includes for {' + '.join(files)} in Problems/index.html")


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
    # Lecture numbers restart each semester, so a different deck can already own
    # this filename (Problems/pdfs holds "Lecture # 84. A. Patel" from semester 1).
    # Never map onto a file that is not byte-identical to our source.
    import filecmp
    if pdf_dst.exists() and not filecmp.cmp(pdf_dst, pdf_src, shallow=False):
        pdf_dst = pdf_dst.with_name(f"{pdf_src.stem} ({pdf_key}){pdf_src.suffix}")
    if not pdf_dst.exists():
        shutil.copyfile(pdf_src, pdf_dst)
        info(f"copied slide PDF -> Problems/pdfs/{pdf_src.name}")
    mapping_value = f"pdfs/{pdf_dst.name}"

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


def install_diagrams(ids, bundle, summary_text, no_verify=False):
    """Copy the lecture's animated diagrams into content/diagrams/ and validate.

    The file is optional: a lecture of pure classification legitimately has no
    diagram. But if the summary references one, the file has to be there --
    otherwise the reader gets a "Diagram not found" box where a picture should
    be, which is exactly the sort of thing nobody notices until a student does.

    No registration step is needed: app.js loads content/diagrams/<slug>.diagrams.js
    on demand when the lecture opens.
    """
    src = bundle / f"{ids['slug']}.diagrams.js"
    referenced = set(re.findall(r":::diagram\s+([a-z0-9\-]+)\s*:::", summary_text, re.I))

    if not src.exists():
        if referenced:
            die(
                f"The summary references {len(referenced)} diagram(s) "
                f"({', '.join(sorted(referenced))}) but {src.name} is missing from the bundle."
            )
        info("no diagrams for this lecture (none authored).")
        return

    dst_dir = SUMMARY_REPO / "content" / "diagrams"
    dst_dir.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, dst_dir / src.name)
    info(f"copied -> content/diagrams/{src.name}")

    defined = set(re.findall(r'window\.LECTURE_DIAGRAMS\["([^"]+)"\]', src.read_text(encoding="utf-8")))
    dangling = referenced - defined
    unused = defined - referenced
    if dangling:
        die(f"summary references undefined diagram(s): {', '.join(sorted(dangling))}")
    if unused:
        info(f"[warn] defined but never placed in the summary: {', '.join(sorted(unused))}")

    checker = SUMMARY_REPO / "scripts" / "check_diagrams.py"
    if not checker.exists():
        return
    result = subprocess.run(
        [sys.executable, str(checker)], capture_output=True, text=True, cwd=str(SUMMARY_REPO)
    )
    mine = [ln for ln in result.stdout.splitlines()
            if ln.strip().startswith("-") and f"{ids['slug']}-" in ln]
    if mine:
        msg = "\n".join(f"    {ln.strip()}" for ln in mine)
        if no_verify:
            info(f"[warn] diagram issues (--no-verify):\n{msg}")
        else:
            die(f"{src.name} breaks the diagram rules:\n{msg}\n\n"
                f"     Fix them in the bundle and re-run install, or use --no-verify.")
    else:
        info(f"diagram checks passed ({len(defined)} diagram(s)).")


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
    quest_srcs = [(var, bundle / fname) for _, var, fname in question_files(ids)]
    meta_src = bundle / "meta.json"

    for f in [summary_src, meta_src] + [q for _, q in quest_srcs]:
        if not f.exists():
            die(
                f"Missing {f.name} in {bundle}.\n"
                f"Generate the files per {bundle.name}/GENERATE.md first."
            )

    # Validate generated JS + metadata
    summary_text = validate_js(summary_src, ids["summary_token"])
    for var, src in quest_srcs:
        text = validate_js(src, f"const {var}")
        # config.js reads window.<var>; without this assignment the test loads empty.
        if f"window.{var}" not in text:
            die(
                f"{src.name} is missing the required final line:\n"
                f"    window.{var} = {var};\n"
                f"Without it the Problems site loads this test as empty."
            )

    # --- v6 question gate ------------------------------------------------ #
    # The answer-key tells are invisible on read-through (each question looks
    # fine; the tell is only in the aggregate), so check_question_set.py
    # re-verifies every v6 tally and a FAIL blocks the install. The PDF key is
    # registered first because the checker confirms pdfLecture is mapped.
    pdf_rel = register_pdf_source(ids, bundle)
    ok, report = run_question_checker([q for _, q in quest_srcs])
    if not ok and args.fix:
        moved = 0
        for var, src in quest_srcs:
            data = parse_question_array(src.read_text(encoding="utf-8"))
            if data is None:
                continue
            m = rebalance_answers(data)
            if m:
                write_question_file(src, var, data)
                moved += m
        info(f"--fix: reordered options in {moved} question(s) to even out the answer keys.")
        ok, report = run_question_checker([q for _, q in quest_srcs])
    if not ok:
        if args.no_verify:
            info(f"[warn] question-set FAILs (--no-verify):\n{report}")
        else:
            die(
                f"The question sets fail {QUESTION_PROMPT.name} "
                f"(scripts/check_question_set.py):\n{report}\n\n"
                f"     --fix repairs letter spread, runs and cycles (reorders options only,\n"
                f"     never edits text; numeric/findings-set questions stay put).\n"
                f"     Everything else needs the items rewritten. --no-verify installs anyway."
            )
    else:
        info("question checks passed (check_question_set.py: Recall + Boards).")

    meta = json.loads(meta_src.read_text(encoding="utf-8"))
    module = meta.get("module") or "Clinical Medicine"
    week = meta.get("week")
    topic = meta.get("topic")
    if week is None or not topic:
        die("meta.json must include numeric 'week' and string 'topic'.")
    if block == "cardio":
        # The curriculum week follows from the lecture number, so trust the map
        # over whatever the generator guessed.
        derived = cardio_week(n)
        if derived is None:
            die(
                f"cardio lecture {n} is outside the 1-{CARDIO_MAX} week map.\n"
                f"     Add its range to CARDIO_WEEKS in lecture_pipeline.py."
            )
        if derived != week:
            info(f"meta.json week {week} -> {derived} (CPR week map for lecture {n})")
        week = derived

    # Match a whole JSON string, so a title containing escaped quotes survives.
    # The old r'"title":\s*"([^"]+)"' stopped at the first inner quote: cv33's
    # 'Lecture #33: \"Short Leg Syndrome\" and Heel Lift Therapy' registered in
    # lectures_index.js as the literal 'Lecture #33: \'.
    title_match = re.search(r'"title":\s*("(?:[^"\\]|\\.)*")', summary_text)
    title = json.loads(title_match.group(1)) if title_match else f"Lecture #{n}"
    reading_time = meta.get("readingTime")
    if not reading_time:
        content_match = re.search(r'"content":\s*`(.*?)`,\n\s*"flashcards"', summary_text, re.DOTALL)
        words = len(content_match.group(1).split()) if content_match else 2000
        reading_time = max(2, round(words / WORDS_PER_MINUTE))

    # --- Copy files into both repos ---
    summary_dst = SUMMARY_REPO / "content" / "json" / ids["summary_file"]
    shutil.copyfile(summary_src, summary_dst)
    info(f"copied -> {summary_dst.relative_to(SUMMARY_REPO)}")
    for _, src in quest_srcs:
        shutil.copyfile(src, PROBLEMS_REPO / src.name)
        info(f"copied -> PPOM-UNO-Problems/{src.name}")

    # --- Animated diagrams (optional deliverable) ---
    install_diagrams(ids, bundle, summary_text, no_verify=args.no_verify)

    # --- Register in both sites ---
    insert_into_lectures_index(
        SUMMARY_REPO / "lectures_index.js", ids,
        summary_index_entry(ids, title, module, reading_time),
    )
    insert_into_config(PROBLEMS_REPO / "config.js", ids, week, topic)
    insert_script_tag(PROBLEMS_REPO / "index.html", ids)

    # --- Optional high-yield PDF render ---
    if not args.no_pdf:
        render_high_yield_pdf(ids, bundle)

    # --- Git ---
    if args.commit or args.push:
        commit_and_push(ids, title, args.push, pdf_rel)

    print(
        f"\n[OK] Lecture {n} ({ids['id_token']}) installed into both sites.\n"
        f"     Summary:  content/json/{ids['summary_file']}  (+ lectures_index.js)\n"
        f"     Problems: {' + '.join(f for _, _, f in question_files(ids))}  (+ config.js, index.html)\n"
        + ("" if (args.commit or args.push) else
           "\n     Not committed. Re-run with --commit (and --push to upload) when ready.\n")
    )


def commit_and_push(ids, title, push, pdf_rel=None):
    msg_summary = f"Add {ids['id_token']} high-yield summary\n\n{title}"
    msg_problems = f"Add {ids['id_token']} question set\n\n{title}"

    problems_paths = [f for _, _, f in question_files(ids)] + ["config.js", "index.html", "scripts/pdf_mapping.js"]
    if pdf_rel:  # the copied slide PDF, e.g. "pdfs/Lecture # 22. ... .pdf"
        problems_paths.append(pdf_rel)

    for repo, paths, msg in (
        (SUMMARY_REPO, [f"content/json/{ids['summary_file']}", "lectures_index.js",
                        f"content/diagrams/{ids['slug']}.diagrams.js",
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
    p_inst.add_argument(
        "--fix", action="store_true",
        help="Auto-even the answer key by reordering options (never edits text)",
    )
    p_inst.add_argument(
        "--no-verify", action="store_true",
        help="Downgrade answer-key failures to warnings instead of blocking",
    )
    p_inst.set_defaults(func=cmd_install)

    args = parser.parse_args()

    if args.summary_repo:
        SUMMARY_REPO = args.summary_repo.resolve()
        WORK_DIR = SUMMARY_REPO / "_pipeline"
        SUMMARY_PROMPT = SUMMARY_REPO / "lecture_summary_prompt.md"
    if args.problems_repo:
        PROBLEMS_REPO = args.problems_repo.resolve()
        QUESTION_PROMPT = PROBLEMS_REPO / "question_generation_prompt_v6.txt"

    args.func(args)


if __name__ == "__main__":
    main()
