# G notes (lecture conflicts, decisions)

Sources checked: content/json/cv144.file.js, cv145.file.js; work/G/src slides + CV145 transcript;
CV144 image slides read from `_incoming/Lecture # 144. J. Golbin, D.O. (PPT).pdf` (slide 23 nodule
algorithm, slides 53-54 early palliative care trial, slide 58 NLST abstract).

## Conflicts / dated content
- CV144 slide 60: "Screening 2025: low-dose CT aged 50-80 (previously 55-74) (USPSTF recommends 55-80)
  with >=20 pack-years (previously 30), current smokers or quit within 15 years." The USPSTF
  parenthetical is the dated 2013 rule; current USPSTF (2021) is 50-80 / 20 pack-years / quit within
  15 years, which matches the slide's main line. Card uses 50-80 and 20 pack-years (57-year-old,
  27 pack-years) so both agree.
- CV144 slide 23 is the older Fleischner-style algorithm (<4 mm low: no follow-up; 4-6 low: CT 12 mo;
  6-8 low: 6-12 mo; >8 mm low: CT 3-6 mo, intermediate: PET, high: biopsy). Current Fleischner
  (2017) differs for 4-8 mm. Low-probability card uses a 3-mm nodule (no follow-up under both); the
  high-probability card uses 16 mm, high risk -> biopsy (both agree). The summary omitted the
  ">8 mm low -> CT 3-6 months" arm; checked against the image.
- CV145: lecturer calls tirzepatide "a GLP-1 agonist"; it is a dual GIP/GLP-1 receptor agonist.
  Card says "incretin (GLP-1-pathway) receptor agonist" so both agree.
- CV145 slide 63 lists opioids for RLS; the lecturer says "Opioids, not really... we try to avoid"
  them now. Card follows the lecturer.
- CV145 slide 7 says REM has "sawtooth waves"; not used on any card.
- CV144 "broncho-alveolar carcinoma" (bronchorrhea) is the retired term for AIS / mucinous
  adenocarcinoma; not built (one line; C owns AIS).

## Decisions
- OSA split three ways because the lecture separates management by phenotype: severe + obesity
  (CPAP, tirzepatide), mild + thin + small jaw (mandibular advancement device), child (big tonsils,
  school behavior -> ENT). Pediatric item has no workup card: the lecture gives no pediatric PSG data.
- RBD: lecture only says loss of REM atonia, acting out dreams, injuring the bed partner. Workup card
  (REM with preserved chin EMG tone) follows directly from the lecture's PSG teaching (REM = flat chin
  EMG). No management card (none taught; clonazepam is board content).
- "Normal sleep changes of aging" added: starred slide 19 data (efficiency 86% -> 79%, more N1, less
  SWS, ~15 arousals/h, "it's normal"). Separated from insomnia by absent daytime consequences.
- CSA vs Cheyne-Stokes: CS is a form of CSA with the same treatment logic -> avoid on workup and
  management; presentations differ (brainstem infarct vs EF 12% on transplant list).
- Stage items (CV144 slides 43-44, 52, 55): NSCLC I-IIIA, NSCLC IV, SCLC limited. NSCLC IV avoids C's
  "Lung adenocarcinoma" (whose card already has an adrenal mass and EGFR TKI). SCLC limited workup
  avoids NSCLC I-IIIA (a node-positive hemithorax could be IIIA).
- HOA: CV144 slide 39 only (clubbing + periosteal proliferation of tubular bones, adenoCa); no pain
  or management on the slide, so none on the card. Avoids C's "Lung adenocarcinoma". CV142 lists HPOA
  as "not emphasized" -> lectures [CV144] only.
- EGFR inhibitors: CV144 slide 55 (targeted therapy for marker-positive tumors) + CV142 slide 7
  (activating EGFR mutation ~15% of adenocarcinomas, kinase inhibitors prolong survival).
  ALK TKIs not built (CV144 lists the class once; CV142 names ALK only as a gene).
- Sodium oxybate: lecture gives use (sleepiness and cataplexy lists) and the restriction ("often an
  illicit drug... special prescribing training"); no mechanism taught.

## QA and self-review
- qa.py: G.json 0 FAIL / 0 WARN; temporary A-G merge (merged_tmp.json) 0 FAIL / 0 WARN.
- Looser scan (Jaccard >= 0.22) against every item: fixes made - HOA bone films moved to the workup
  card (the gland biopsy alone also fit NSCLC I-IIIA), "lungs clear" added (IPF has clubbing +
  crackles); high-probability nodule workup avoids NSCLC I-IIIA (a spiculated N0 lesion could be
  early cancer). Low-probability nodule vs C's hamartoma left without avoid (3 mm vs 1.8 cm; CT
  surveillance logic vs resected benign lesion).
- Name tokens: OSA severe management said "obesity" (its own name) -> "excess weight".
