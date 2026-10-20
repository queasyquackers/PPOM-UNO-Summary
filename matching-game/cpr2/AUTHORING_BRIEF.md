# Matching-game authoring brief (CPR Block 2, lectures 55-112, no OMM)

This is the prompt for writing matching-game data. Each agent owns a slice listed in
`ASSIGNMENTS.md` and writes ONE fragment file. The game shows a column of answers
(condition, bug or drug names) and a column of cards (a vignette, a lab pattern, a
mechanism...) and the student pairs them. Every card you write is one of those cards.

## The one rule that matters: no buzzwords

Boards have moved away from buzzwords. The student wants to practise recognising a
condition from the kind of data a modern NBME/COMLEX stem actually gives - demographics,
timeline, vitals, exam findings in plain words, numbers - **not** from a stock phrase that
only one disease ever gets. A card that can be solved by spotting one famous phrase has
failed even if it is accurate.

On every **Presentation** and **Labs & Workup** card (correlates) and every bug
**Presentation** card:

1. **No named signs, eponyms or labels for a finding.** Describe the raw observation.
   - not "pulsus paradoxus" -> "systolic pressure falls 18 mmHg during inspiration"
   - not "Kussmaul sign" -> "neck veins rise further when she breathes in"
   - not "fixed split S2" -> "S2 is split and the split does not change with breathing"
   - not "delta wave" -> "short PR and a slurred, widened start to the QRS"
   - not "Janeway lesions / Osler nodes / Roth spots" -> leave them out entirely or say
     "painless red macules on the soles"
2. **No stock metaphors.** No tearing/ripping pain, machinery murmur, water-hammer or
   bounding pulse, boot-shaped heart, egg on a string, snowman, barking or seal-like cough,
   steeple sign, tripod position, strawberry tongue, sawtooth, irregularly irregular,
   tombstone, pink puffer, blue bloater, barrel chest, squatting, tet spells, currant jelly,
   apple-green, tram-track, "heartbreak", "classic", "pathognomonic".
3. **Never let one finding carry the card.** Build each vignette from at least three
   independent pieces: who (age, sex, setting, risk factor or exposure), what and when
   (symptoms with a timeline), and what you find (vitals with numbers, exam in plain words,
   one or two labs). The famous sign may be *omitted* entirely - the constellation should
   still point to one answer, the way a well-written board stem does.
4. **Never name the answer.** The condition's name, its eponym, its abbreviation, or the
   drug/bug in its name must not appear on its own cards. "Echo shows tamponade" names it;
   "echo: large circumferential effusion with right atrial collapse in diastole" does not.
5. **Prefer numbers to adjectives.** "Na+ 118, serum osm 250, urine osm 480, urine Na+ 45,
   euvolemic" beats "low sodium with concentrated urine". Use realistic values with units
   where they help.
6. **Labs & Workup** = the result pattern: CBC/BMP/ABG/UA/enzymes/hormones, ECG described
   as morphology and intervals, imaging described as what is seen, biopsy/histology described
   rather than labelled. One specific confirmatory result is allowed if phrased as the result
   ("IgG antibody to the alpha-3 chain of type IV collagen"), never as the label that names
   the disease. Leave the field out if the lecture gives no workup for that condition.
7. **Management** = concrete next steps in order, with the discriminating step first
   (e.g. "Emergent pericardiocentesis; IV fluids while preparing; avoid diuretics and
   nitrates"). Procedure names are fine here. Do not name the condition. Leave it out if
   the lecture does not cover management and no standard step is clear.

The checker (`qa.py`) blocks a long list of these phrases automatically. It cannot judge
rule 3 or rule 6 - you must.

## Uniqueness: one card, one answer

A round draws 4-10 items at random from everything the student has selected, so any card
must point to exactly ONE answer in the whole category - not just among your own items.
Before writing a card, name its nearest differential (another item in `ASSIGNMENTS.md`)
and include the feature that separates them. Examples: Bartter vs Gitelman (urine
calcium), central vs nephrogenic DI (response to desmopressin), STEMI vs NSTEMI
(ECG), free-wall rupture vs papillary-muscle rupture (new murmur + pulmonary edema vs
sudden tamponade). If two items genuinely cannot be separated on one attribute, say so in
`"avoid"` (below) so the game never puts them on the same board.

## Schemas (exact field names)

Correlate (the answer is the condition):
```json
{"name": "Cardiac tamponade",
 "presentation": "...", "workup": "...", "management": "...",
 "lecture": "CV108", "lectures": ["CV108", "CV107", "CV66"],
 "avoid": {"management": ["Free wall rupture"]}}
```
- `name`: the diagnosis as a student would write it, <= 60 chars, no "Case 3" etc.
- `presentation` required (<= 280 chars). `workup`, `management` when applicable (<= 240).
- `lecture`: the primary lecture (badge on the card). `lectures`: every non-OMM lecture in
  55-112 that teaches it (include the primary). The student filters by lecture, so list
  them all.
- `avoid` (optional): names of items this one must never share a board with - a list
  (all attributes) or `{"attr": [names]}`. Use sparingly.

Bug (the answer is the organism; each item is ONE organism-disease pairing):
```json
{"name": "Staphylococcus aureus",
 "disease": "Acute endocarditis in a person who injects drugs",
 "micro": "Gram-positive cocci in clusters; catalase-positive, coagulase-positive; beta-hemolytic",
 "presentation": "...", "lecture": "CV105", "lectures": ["CV105"]}
```
- The same organism may appear in several items with different `disease` values; its
  `micro` card may repeat word for word. `disease` must be unique across ALL bug items,
  <= 70 chars, and should not contain the organism's name.
- `micro` = microbiology test results: Gram stain and shape, arrangement, key biochemical
  tests (catalase, coagulase, hemolysis, optochin, bacitracin, bile solubility, growth in
  bile/6.5% NaCl, oxidase, lactose), culture medium and colony appearance, serology, PCR,
  toxin, stain, tissue form, vector. Specific lab names (Loeffler, tellurite, Bordet-Gengou)
  are allowed here - this is the lab card. Never the genus/species name.
- `presentation` follows the no-buzzword rules above.

Drug (the answer is the drug, or a tight class like "Statins (atorvastatin, rosuvastatin)"):
```json
{"name": "Amiodarone", "groups": ["Antiarrhythmics"],
 "mechanism": "...", "adverseEffects": "...", "lecture": "CV85", "lectures": ["CV85", "CV96"]}
```
- `groups`: any of "Antiarrhythmics", "Angina", "Heart failure", "Lipid-lowering". The
  student filters drugs by these, not by lecture. A drug taught in two contexts is ONE item
  with both groups (metoprolol: Angina + Antiarrhythmics + Heart failure).
- `mechanism`: receptor/channel/enzyme and the downstream effect that matters, plus the
  detail that separates it from its classmates (kinetics, selectivity, extra actions,
  metabolite). Vaughan Williams class is fine. Never the drug's name, stem or brand.
- `adverseEffects`: 2-4 effects, the most distinctive first, plus a key interaction or
  contraindication if the lecture stresses one. Must be attributable to ONE drug among
  every item that shares a group with it. Drugs whose cards would be identical (e.g. two
  bile acid resins) should be merged into one item.

## Accuracy

- Sources per lecture N: `C:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json\cvN.file.js`
  (the curated summary - start here; its `:::correlate` blocks are your seed list), then
  `C:\Users\quazi\Downloads\PPOM-UNO-Summary\_pipeline\CVN\slides.txt` and `transcript.txt`
  to confirm specifics (values, first-line drugs, what the lecturer stressed).
- Every fact must agree with the lecture. Where the lecture is simplified or dated, do not
  contradict it but do not repeat an error either - phrase it so both agree, and note the
  conflict in your `notes.md`.
- Use standard US units; mEq/L, mg/dL, mmHg.

## How to work (agents die after 10 silent minutes)

- Your work folder is `C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\work\<ID>\`
  (ID is in your task). Keep every scratch file and helper script there.
- Plan on disk first: `plan.md` lists each item you will write with its nearest
  differential and the separating feature. Append ~10 rows at a time.
- Write items ~5 at a time into `part01.json`, `part02.json`, ... in your work folder, each
  a JSON object like `{"correlates": [...]}`. Never more than ~6 items per tool call, never
  think about more than ~5 items before writing.
- Join the parts into `C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\<ID>.json`
  with a small python script in your work folder (one object; keys `bugs` / `drugs` /
  `correlates`, only the ones you own).
- Run `python C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\qa.py <your fragment>`
  and fix every FAIL. Read every WARN: a near-duplicate pair is either fine (they differ in
  the separating feature) or needs rewording / an `avoid`. Re-run until 0 FAIL.
- Then do a self-review pass: re-read every card as if you were the student, cover the
  answer column, and ask "could this card be any other item in ASSIGNMENTS.md?" and "is
  there a single phrase here that gives it away?" Fix what fails.
- Do not touch any other file, do not run build.py or merge.py, do not use git.

Final reply (read by the orchestrator, keep it short): your ID, item counts per category,
qa.py's final FAIL/WARN counts, items you added or dropped versus `ASSIGNMENTS.md` and why,
and any lecture conflicts from notes.md.
