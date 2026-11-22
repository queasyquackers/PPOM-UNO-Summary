# Matching-game authoring brief (CPR Block 3, lectures 116-163, no OMM)

This is the prompt for writing matching-game data. Each agent owns a slice listed in
`ASSIGNMENTS.md` and writes ONE fragment file. The game shows a column of answers
(condition, bug, drug or gene names) and a column of cards (a vignette, a lab pattern, a
mechanism...) and the student pairs them. Every card you write is one of those cards.

Root folder: `E:\PPOM-UNO-Summary`. Everything below is relative to it.

## The one rule that matters: no buzzwords

Boards have moved away from buzzwords. The student wants to practise recognising a
condition from the kind of data a modern NBME/COMLEX stem actually gives - demographics,
timeline, vitals, exam findings in plain words, numbers - **not** from a stock phrase that
only one disease ever gets. A card that can be solved by spotting one famous phrase has
failed even if it is accurate.

On every **Presentation** and **Labs & Workup** card (correlates), every bug
**Presentation** card, and every glomerular biopsy card:

1. **No named signs, eponyms or labels for a finding.** Describe the raw observation.
   - not "Horner syndrome" -> "left ptosis, a small left pupil and a dry left forehead"
   - not "pulsus paradoxus" -> "systolic pressure falls 16 mmHg during inspiration"
   - not "Kerley B lines / bat-wing" -> "short horizontal lines at the lung bases; hazy
     opacities fanning out from both hila"
   - not "Curschmann spirals / Charcot-Leyden crystals" -> leave them out, or "sputum with
     eosinophils and coiled mucus plugs"
   - not "spike-and-dome / lumpy-bumpy / wire loop / tram-track" -> describe what the
     stain shows: "silver stain: GBM projections between subepithelial deposits"
   - not "Ghon complex" -> "calcified subpleural nodule in the lower lobe with a
     calcified hilar node"
   - not "Kimmelstiel-Wilson nodules" -> "round PAS-positive mesangial nodules"
2. **No stock metaphors.** No pink puffer/blue bloater, barrel chest, honeycombing, eggshell
   calcification, tree-in-bud, crazy paving, fungus ball/air crescent, currant-jelly or rusty
   sputum, whooping, steeple, thumbprint, barking cough, bull neck, rice-water, coffin-lid or
   envelope crystals, cola- or tea-colored urine, staghorn, string of beads, cannonball,
   bag of worms, bell-clapper, blue dot, flea-bitten, onion-skin, starry sky, "classic",
   "pathognomonic".
3. **Describe the job, not the agent.** For occupational and environmental exposures give
   the occupation or activity as a stem would ("shipyard pipefitter for 30 years",
   "sandblaster", "makes aerospace alloys", "exploring caves in Kentucky", "skinned a rabbit
   last week") - never the agent itself (asbestos, silica, beryllium). Geography and
   exposures are legitimate stem content; use them as ONE piece of the card.
4. **Never let one finding carry the card.** Build each vignette from at least three
   independent pieces: who (age, sex, setting, risk factor or exposure), what and when
   (symptoms with a timeline), and what you find (vitals with numbers, exam in plain words,
   one or two labs). The famous sign may be *omitted* entirely - the constellation should
   still point to one answer, the way a well-written board stem does.
5. **Never name the answer.** The condition's name, its eponym, its abbreviation, or the
   drug/bug in its name must not appear on its own cards. "Biopsy shows membranous
   nephropathy" names it; "diffuse GBM thickening, granular IgG and C3 along the capillary
   loops, subepithelial deposits on EM" does not. Do not name a *different* diagnosis as a
   finding either ("has SIADH" -> "Na+ 122, urine osm 480, euvolemic").
6. **Prefer numbers to adjectives.** "pH 7.25, PaCO2 60, HCO3- 26" beats "acute respiratory
   acidosis". "FEV1/FVC 0.58, TLC 125% predicted, DLCO 45%" beats "obstructive pattern with
   low diffusion". Use realistic values with units.
7. **Labs & Workup** = the result pattern: CBC/BMP/ABG/UA/PFTs/cultures, imaging described
   as what is seen, biopsy/histology described rather than labelled. One specific
   confirmatory result is allowed if phrased as the result ("IgG against the
   phospholipase A2 receptor"; "IGRA positive, chest film clear"), never as the label that
   names the disease. Leave the field out if the lecture gives no workup for that condition.
8. **Management** = concrete next steps in order, with the discriminating step first
   (e.g. "Needle decompression at once, then chest tube; do not wait for imaging").
   Procedure and drug names are fine here. Do not name the condition. Leave it out if the
   lecture does not cover management and no standard step is clear.

The checker (`matching-game\cpr3\qa.py`) blocks a long list of these phrases automatically.
It cannot judge rules 3, 4 or 7 - you must.

## Uniqueness: one card, one answer

A round draws 4-10 items at random from everything the student has selected, so any card
must point to exactly ONE answer in the whole category - not just among your own items.
Before writing a card, name its nearest differential (another item in `ASSIGNMENTS.md`)
and include the feature that separates them. Examples for this block: IPF vs NSIP (age,
pattern, steroid response), silicosis vs coal workers' disease (occupation, lobe, TB risk),
emphysema vs chronic bronchitis (DLCO, cough/sputum history, PaCO2), typical vs atypical
HUS (prodromal bloody diarrhea), MCD vs FSGS (age, steroid response, hypertension/hematuria),
cystitis vs pyelonephritis (fever, flank pain, WBC casts), histoplasmosis vs blastomycosis
(skin/bone lesions, exposure), primary vs secondary TB (lobe, cavitation, prior exposure).
If two items genuinely cannot be separated on one attribute, say so in `"avoid"` (below) so
the game never puts them on the same board. The game already refuses to deal two cards with
identical text onto one board, so exact repeats are safe but waste a card - keep them rare.

## Schemas (exact field names)

Correlate (the answer is the condition):
```json
{"name": "Idiopathic pulmonary fibrosis",
 "presentation": "...", "workup": "...", "management": "...",
 "lecture": "CV116", "lectures": ["CV116", "CV119", "CV120"],
 "avoid": {"management": ["Nonspecific interstitial pneumonia"]}}
```
- `name`: the diagnosis as a student would write it, <= 60 chars, no "Case 3" etc.
- `presentation` required (<= 280 chars). `workup`, `management` when applicable (<= 240).
- `lecture`: the primary lecture (badge on the card). `lectures`: every non-OMM CPR 3
  lecture that teaches it (include the primary). The student filters by lecture, so list
  them all - check `ASSIGNMENTS.md`, which gives the known overlaps.
- `avoid` (optional): names of items in the SAME category this one must never share a board
  with - a list (all attributes) or `{"attr": [names]}`. Use sparingly.

Bug (the answer is the organism; each item is ONE organism-disease pairing):
```json
{"name": "Streptococcus pneumoniae",
 "disease": "Lobar pneumonia in an older adult",
 "micro": "Gram-positive lancet-shaped diplococci; alpha-hemolytic; optochin-sensitive; bile-soluble; polysaccharide capsule (quellung positive)",
 "presentation": "...", "lecture": "CV130", "lectures": ["CV130", "CV132", "CV141"]}
```
- The same organism may appear in several items with different `disease` values; its
  `micro` card may repeat word for word. `disease` must be unique across ALL bug items,
  <= 70 chars, and should not contain the organism's name.
- `micro` = microbiology/lab ID: Gram stain and shape, arrangement, key biochemical tests,
  culture medium and colony appearance, acid-fast/modified acid-fast, fungal form at 25 C vs
  37 C and tissue form, viral genome/envelope/segmentation/family, serology, antigen tests,
  PCR, toxin and its action, vector or reservoir. Specific lab names (BCYE, Bordet-Gengou,
  Loeffler, tellurite, Sabouraud, India ink, quellung, KOH) are allowed here - this is the
  lab card. Never the genus/species/virus name.
- `presentation` follows the no-buzzword rules above.

Drug (the answer is the drug, or a tight class like "Neuraminidase inhibitors (oseltamivir, zanamivir, peramivir)"):
```json
{"name": "Isoniazid", "groups": ["Antimycobacterials"],
 "mechanism": "...", "adverseEffects": "...", "use": "...",
 "lecture": "CV128", "lectures": ["CV128", "CV127"]}
```
- `groups`: any of "Antimycobacterials", "Antivirals", "Antimicrobials" (antibacterials and
  antifungals taught for a specific infection in this block), "Airway" (asthma/COPD
  drugs), "Kidney & bladder" (CKD, stone, incontinence and BPH drugs). The student filters
  drugs by these, not by lecture. A drug taught in two contexts is ONE item with both groups.
- At least TWO of the three cards: `mechanism` (target and downstream effect, plus the
  detail that separates it from classmates - activation, resistance mechanism, kinetics),
  `adverseEffects` (2-4 effects, the most distinctive first, plus a key interaction or
  contraindication the lecture stresses), `use` (the indication or setting the lecture
  teaches it for - "first-line for ...", "added when ...", "avoid in ..."; <= 200 chars).
  Each card must be attributable to ONE drug among every item that shares a group with it.
  Never the drug's name, stem or brand on its own cards.
- Only drugs a lecture actually teaches (mechanism, AE or a specific indication). A drug
  mentioned once in a list does not get an item.

Glomerular disease (a biopsy matrix; the answer is the disease):
```json
{"name": "Membranous nephropathy",
 "lightMicro": "Diffuse GBM thickening without hypercellularity; silver stain shows GBM projections between deposits",
 "immunofluor": "Granular IgG and C3 along capillary loops",
 "electronMicro": "Subepithelial deposits with new basement membrane laid down around them",
 "clue": "Adult with nephrotic syndrome; antibody to the phospholipase A2 receptor; secondary to hepatitis B, lupus, solid tumors, NSAIDs",
 "lecture": "CV148", "lectures": ["CV148", "CV147"]}
```
- `lightMicro` required (<= 200), `immunofluor` and `electronMicro` (<= 160) and `clue`
  (<= 220: demographics, serology, complement, associations, course) when the lecture gives
  them. Same no-label rule: describe the stain, do not use its nickname.

Gene (the answer is the disease; each item is ONE disease-gene pairing):
```json
{"name": "Clear cell renal cell carcinoma", "gene": "VHL loss (3p deletion)",
 "chromosome": "3p", "role": "Tumor suppressor lost -> HIF accumulates -> VEGF-driven, vascular tumor",
 "lecture": "CV156", "lectures": ["CV156"]}
```
- `gene` (<= 70) is the card text; `chromosome` only when the lecture gives a locus (the card
  then reads "VHL loss (3p deletion) · chromosome 3p", so do not repeat it inside `gene` -
  write `"gene": "VHL loss"` in that case). `role` (<= 160, optional) = what the gene does or
  why it matters in this disease (targetable driver, screening, inheritance). `role` must not
  name the disease.

## Accuracy

- Sources per lecture N: `content\json\cvN.file.js` (the curated summary - start here; its
  `:::correlate` blocks are your seed list), then `_pipeline\CVN\slides.txt` and
  `_pipeline\CVN\transcript.txt` to confirm specifics (values, first-line drugs, what the
  lecturer stressed).
- **The lecture is the authority, not board review sources.** Where the lecturer simplifies
  or departs from board convention, write what the lecture teaches if it is not plainly
  wrong; if it is wrong or dated, phrase the card so both agree, and log it in `notes.md`.
  Do not add content the lectures do not teach.
- Use standard US units; mEq/L, mg/dL, mmHg.

## How to work (agents die after 10 silent minutes)

- Your work folder is `matching-game\cpr3\work\<ID>\` (ID is in your task). Keep every
  scratch file and helper script there.
- Plan on disk first: `plan.md` lists each item you will write with its nearest
  differential and the separating feature. Append ~10 rows at a time.
- Write items ~5 at a time into `part01.json`, `part02.json`, ... in your work folder, each
  a JSON object like `{"correlates": [...]}`. Never more than ~6 items per tool call, never
  think about more than ~5 items before writing.
- Join the parts into `matching-game\cpr3\fragments\<ID>.json` with a small python script
  in your work folder (one object; keys `bugs` / `drugs` / `correlates` / `glomerular` /
  `genes`, only the ones you own).
- Run `python matching-game\cpr3\qa.py matching-game\cpr3\fragments\<ID>.json` and fix every
  FAIL. Read every WARN: a near-duplicate pair is either fine (they differ in the separating
  feature) or needs rewording / an `avoid`. Re-run until 0 FAIL.
- Then do a self-review pass: re-read every card as if you were the student, cover the
  answer column, and ask "could this card be any other item in ASSIGNMENTS.md?" and "is
  there a single phrase here that gives it away?" Fix what fails.
- Do not touch any other file, do not run build.py or merge.py, do not use git.

Final reply (read by the orchestrator, keep it short): your ID, item counts per category,
qa.py's final FAIL/WARN counts, items you added or dropped versus `ASSIGNMENTS.md` and why,
and any lecture conflicts from notes.md.
