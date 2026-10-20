# Verification brief (CPR Block 2 matching game)

You are the second pair of eyes on ONE author's fragment,
`C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\<ID>.json`.
The author followed `AUTHORING_BRIEF.md` (same folder) - read it first, all of it, then
`ASSIGNMENTS.md` for the neighbouring items. You fix what is wrong directly in the fragment
and log every change. The mechanical checker (`qa.py`) already passes; your job is the
three things it cannot judge.

## 1. Is it true? (highest priority)

For every card, confirm each fact against the lecture: the summary
`C:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json\cvN.file.js` first, then
`_pipeline\CVN\slides.txt` / `transcript.txt` (grep them for the drug, value or term).
Wrong values, wrong first-line drug, wrong mechanism detail, an adverse effect that belongs
to a classmate, a lab pattern that is backwards (urine Ca high vs low), a management step
the lecture contradicts - fix them. If a fact is standard but the lecture is silent, keep it
only if you are certain it is correct and uncontroversial. If the lecture says something
outdated, phrase the card so it is true both ways and log it.

## 2. Is it a buzzword card? (the student's main request)

The student wants to recognise conditions WITHOUT the telltale buzzword or sign. For each
Presentation / Labs & Workup card (and bug Presentation), cover the answer and ask:
- Is there a single phrase that gives it away by itself - a named sign, a stock metaphor,
  or a plain-language paraphrase of one that is just as famous ("blood pressure drops more
  than 10 on inspiration" + muffled sounds + JVD is Beck's triad in disguise)? A
  paraphrase is fine as ONE piece of a constellation; it is not fine if the card is
  otherwise empty, or if it stacks two or three famous signs together.
- Does it have the three layers (who/context, symptoms + timeline, findings with numbers)?
- Does it name the answer, an abbreviation of it, or the confirmatory test as a label?
Rewrite failing cards toward what a modern NBME/COMLEX stem would give.

## 3. Could it be anything else?

For each card, find the nearest other item in the WHOLE dataset - read the other
fragments in `fragments\` (and `ASSIGNMENTS.md` for ones not written yet). If a card fits
two answers equally well, sharpen it with the separating feature, or add an `avoid` entry
when the pair genuinely cannot be separated on that attribute. For drugs, the pool is every
item that shares a group; for bugs, the same organism legitimately repeats its micro card.

## How to work

- Work folder: `C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\work\<ID>\`.
  Write `verify_log.md` there as you go (append every ~5 items): item, field, before,
  after, reason, source checked.
- Go lecture by lecture, ~5 items at a time; never think about more than ~5 items before
  writing to the log or the fragment. Runs are killed after 10 silent minutes.
- Edit the fragment in place with small targeted edits (python json load/modify/dump from a
  script in your work folder is fine; keep indent=2 and ensure_ascii=False).
- When done, run `python C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\qa.py <fragment>`
  and fix every FAIL.
- Touch only your fragment and your work folder. No git, no build.py/merge.py.

Final reply (short, read by the orchestrator): your ID; counts of items checked and
changed per category; the factual errors you fixed (one line each); buzzword rewrites
(count + 2-3 examples); new `avoid` pairs; anything you were unsure about.
