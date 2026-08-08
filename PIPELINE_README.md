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
`install 201`. (`_incoming/` is tracked by git so raw drops sync between machines —
commit + push after dropping files, and pull on the other machine before running `prep`.)

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

## The answer-key gate (why `install` can refuse)

`question_generation_prompt_v5.txt` bans three answer-key giveaways. They're **invisible when
you read questions one at a time** — each looks fine, and the tell only appears in aggregate —
so `install` checks them mechanically and **blocks** rather than warning:

| Rule | Limit |
|------|-------|
| Even A–E spread | max−min count ≤ 3 |
| Same letter in a row | ≤ 2 consecutive |
| Correct answer is the longest option | ≤ 25% of questions |

```
python lecture_pipeline.py install 193 --fix   # auto-even the key, then install
```

`--fix` **reorders the options** within a question and updates `correctAnswerIndex`. It never
edits text, so every stem, distractor and explanation stays exactly as written. It fixes the
spread and run problems.

It deliberately **cannot** fix the longest-answer tell — that needs a distractor actually
lengthened, which is writing, not permutation. When that check fails the error names the
specific questions to fix. `--no-verify` downgrades any failure to a warning.

> Worth knowing: the first generated draft of CV22 failed two of these (17/30 answers on "B",
> longest-answer 60%). Expect the gate to fire on real drafts — that's it working.

## Cardiovascular block

Cardio lectures are a separate semester whose numbers restart at 1, so they use a `cv` slug
(`cv22` → displays **CV22**) to stay clear of Neuro's `l1`–`l41`:

```
python lecture_pipeline.py prep 22 --block cardio
python lecture_pipeline.py install 22 --block cardio --fix --commit
```

Raw cardio files are read straight from `_incoming/` (no `ingest` step, no +200 offset), and
the transcript may be a PDF. `--block` must match between `prep` and `install`; the bundle
records it in `sources.json` and `install` refuses on a mismatch.

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
- `.claude/settings.json` (both repos) pre-approves the pipeline commands so runs aren't
  interrupted by permission prompts. `git push` is in `deny` on purpose — uploads stay a
  deliberate, manual step. Also git-ignored, so it's per-machine.
- **Batching:** one lecture is ~28k output tokens (a 30-question set is 150 written
  rationales). Quality degrades on the *aggregate* answer-key properties long before the
  medical content suffers, which is what the gate above catches. To do several at once,
  generate each lecture in its **own** subagent so each starts with a clean context —
  that's better than several in one long session, not just faster.
