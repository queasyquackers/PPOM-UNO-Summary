# Lecture Pipeline — one lecture → both sites

Turns a single lecture (transcript + slide PDF) into:
- a **high-yield summary** for **PPOM-UNO-Summary** (`content/json/l<N>.file.js`)
- a **board-question set** for **PPOM-UNO-Problems** (`Test_L<N>.js`)

…and registers + optionally uploads both. The *thinking* step (writing the summary and
the 30 questions) is done by **Claude Code** using your two existing prompt files, so there
is no API key and no extra cost.

## Requirements
- The two repos are sibling folders: `PPOM-UNO-Summary/` and `PPOM-UNO-Problems/`
  (override with `--summary-repo` / `--problems-repo`).
- The lecture's transcript (`.srt`) lives in either repo's `transcripts/`, and its slide
  PDF in either repo's `pdfs/`. (Both repos already mirror these.)
- Python packages already installed here: `pdfplumber` (or `pymupdf`), `pypdf`.

## New semester? Ingest first (numbering restarts at #1 each semester)

Lecture numbers must be globally unique (filenames, `window.L<N>`, and all registrations
key on them), so each semester gets a +200 block: **semester 2 lecture #1 → L201**,
semester 3 → L401, etc.

```
# Drop the new semester's raw files (transcripts .srt/.txt + slide PDFs, with their
# original numbers like "Lecture #1_ ...") into _incoming/, then:
python lecture_pipeline.py ingest                 # semester 2 (default): #1 -> L201
python lecture_pipeline.py ingest --semester 3    # semester 3: #1 -> L401
```

Put **everything in one place** — `PPOM-UNO-Summary/_incoming/`, transcripts and slide PDFs
together. There's no need to copy anything into the Problems repo: `prep` searches both
repos for inputs, and `install` copies the slide PDF into `PPOM-UNO-Problems/pdfs/` itself.
(If you *do* keep a `PPOM-UNO-Problems/_incoming/` folder it will also be scanned, with its
files routed into that repo's own `transcripts/`/`pdfs/` — but it's never created for you.)

From then on use the **new** numbers everywhere: `prep 201`, `/generate-lecture 201`,
`install 201`. (`_incoming/` is git-ignored, like `_pipeline/`.)

## The 3-step flow

```
# 1. Prep — find + extract the transcript and slides, build a generation bundle
python lecture_pipeline.py prep 193

# 2. Generate — inside Claude Code (this app), run the slash command:
/generate-lecture 193
#    (or just say: "generate lecture 193")
#    Claude writes 3 files into _pipeline/L193/:
#        l193.file.js   Test_L193.js   meta.json

# 3. Install — place + register in both sites, render the high-yield PDF, git commit
python lecture_pipeline.py install 193 --commit          # local commit only
python lecture_pipeline.py install 193 --commit --push   # + push to GitHub (uploads)
```

`--push` publishes to whatever branch each repo is currently on. Leave it off to review the
diff first, then `git push` yourself. Add `--no-pdf` to skip the high-yield PDF render.

## What `install` edits
| Site | File written | Registrations updated |
|------|--------------|-----------------------|
| Summary | `content/json/l<N>.file.js` + `content/L<N>_HighYield_Render.pdf` | `lectures_index.js` |
| Problems | `Test_L<N>.js` + `pdfs/<slides>.pdf` | `config.js` (`testsToLoad`) + `index.html` (`<script>` include) + `scripts/pdf_mapping.js` (`"L<N>"` → slide PDF, powers each question's "Lecture source PDF — page X" link) |

Each question's `clinicalPearl`, `pdfPage`, and `pdfQuote` are produced during generation; the Problems site renders the pearl on submit and turns `pdfPage` into a source-PDF link via the `pdf_mapping.js` entry above.

Registrations are inserted in numeric lecture order, and re-running `install` for a lecture
that's already registered is a safe no-op.

## Notes
- `_pipeline/` (working bundles) is git-ignored — nothing there is deployed until `install`.
- The `week` and `module` used for the Problems label come from `meta.json`, which Claude
  fills during generation. If a label needs tweaking, edit the one line in `config.js`.
- The generation slash command lives in `.claude/commands/generate-lecture.md`. `.claude/`
  is git-ignored, so it's local to this machine (copy it to another machine if needed).
