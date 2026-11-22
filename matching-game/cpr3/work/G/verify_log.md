# G verify log (CV144 + CV145)

Sources read in full: VERIFY_BRIEF, AUTHORING_BRIEF, ASSIGNMENTS (A/C/G sections), work/G plan.md + notes.md,
G.json, content/json/cv144.file.js, src/CV144_slides.txt, src/CV145_slides.txt, src/CV145_transcript.txt.
CV144 has no transcript: every CV144 fact must be on a slide (image slides 23, 53-54, 57-59 checked in the PDF where used).

Format: item | field | before -> after | reason | source

## Progress
- [start] Read sources. Next: cross-check fragments A and C, then CV145 correlates 1-5.
- PDF checks done: CV144 slide 23 (nodule algorithm: <4 mm low -> no CT, high -> CT 12 mo; >8 mm intermediate -> PET, high -> biopsy;
  biopsy peripheral -> CT-guided transthoracic, central -> bronchoscopy), slides 53-54 (Temel NEJM early palliative care in metastatic
  NSCLC, KM curve favours it), slide 58 (NLST: 20.0% relative reduction in lung-cancer deaths, LDCT vs chest radiography). All match the cards.
- Cross-fragment pool read: C (all CV142/CV144 lung tumour items, IPF, cor pulmonale, carcinoid, central airway tumour, fixed airway,
  cardiogenic edema, lobar atelectasis), D (aspiration pneumonia, lung abscess), A genes (EGFR/KRAS/ALK, SCLC, squamous) and all A drugs
  (no Sleep or Oncology drug in A, so G's 4 drugs compete only with each other). C.json already carries the CV144 lectures_patch.
- Other lectures mentioning sleep topics (cv121 pulsus in sleep apnea, cv150 amantadine insomnia, cv159 uremic restless legs) are one-word
  mentions; lectures [CV145] stays correct for every CV145 item.

## CV145 correlates 1-5 (OSA x3, CSA, Cheyne-Stokes)
| item | field | change | reason / source |
|---|---|---|---|
| Severe OSA with obesity | all | none | every fact in transcript: "Doc I slept 8 hours", wife brings husband, snoring/witnessed pauses/gasp, resistant HTN on 3-4 drugs, resistant AF, big neck/tongue, stoplight anecdote; >30/h severe; belts move while flow stops; sat 96->90; pre-CPAP hypnogram no SWS, little REM; room air not O2, splints, REM rebound; tirzepatide 2024 NEJM |
| Mild OSA, slim, small jaw | all | none | transcript: thin women with narrow retrognathic jaws; 5-15 mild; mandibular advancement device by dentists, good for mild symptomatic + small jaw, poor if severe/450 lb |
| OSA in a child | all | none | transcript: kids have big tonsils, school focus/behavior, ENT, not obesity-related. No PSG data for children -> no workup card (correct) |
| Central sleep apnea | all | none | slides 51-53, 57: no effort, brainstem infarction cause, desaturation; treat underlying problem, O2 prn, CPAP/BiPAP ~20%. Avoids with Cheyne-Stokes on workup + management kept (CS is a CSA subtype, so CS's workup/management cards genuinely fit CSA too) |
| Cheyne-Stokes breathing | all | none | transcript: EF 10-15, status 1A on transplant list in CCU, hyperpnea then apnea from slow circulation, CO2 driven low; CPAP/BiPAP ~20%, treat the underlying issue |

## CV145 correlates 6-10 + the RLS drug (RLS, narcolepsy, insomnia, RBD, aging)
| item | field | before -> after | reason / source |
|---|---|---|---|
| Restless legs syndrome | presentation | recital of all four URGE criteria ("an urge to move them", rest, walking relief, evening) -> same story told as behaviour ("makes her get up and pace; settles while she walks and returns when she stops"), "pulses normal" added | buzzword: card stacked the whole diagnostic mnemonic in textbook wording; pulses separate it from claudication (worse with walking). Slides 61-62 |
| Restless legs syndrome | management | "dopamine agonist is the treatment of choice; levodopa, gabapentin or a benzodiazepine are alternatives. Opioids are now largely avoided" -> "dopamine agonist, long the drug of choice; gabapentin also eases symptoms, benzodiazepine for sleep quality. Opioids are not a routine choice" | true both ways: lecturer's answer is dopamine agonist (slide 63 + "treatment of choice... really it's dopamine agonist"), but current AASM (2024) advises against routine dopamine agonists/levodopa (augmentation) and allows opioids for refractory cases. Levodopa dropped (transcript also says "we try to avoid dopaminergic these days", ambiguous), opioid line softened to stay true under both. Lecturer: "Opioids, not really" |
| Pramipexole / ropinirole (drug) | use | "Treatment of choice ...; preferred now that opioids are avoided" -> "Long-standing drug of choice for ... ; gabapentin is a listed alternative" | same dating issue; the opioid clause was an unsupported causal claim. Mechanism card fine (slide 63 "dopaminergic agonists" vs levodopa "dopaminergic medication") |
| Narcolepsy | presentation | 19-y-o with sleep attacks + laughter collapse + waking paralysis + hypnagogic figures -> sleep attacks since ~15, BMI 22, no snoring, laughter collapse while awake; paralysis and hallucinations removed | buzzword: stacked all four tetrad features; one paraphrase (cataplexy) kept inside age-of-onset (slide 66 puberty, peak 15-25), 8 h in bed, no snoring (separates OSA) |
| Narcolepsy | workup | removed "CSF hypocretin very low; HLA-DQB1*0602 present" | three confirmatory results stacked; one allowed (MSLT result kept, slides 67-68). HLA also duplicated the gene card word for word; lecturer: "nobody's really sure yet how these things correlate" |
| Insomnia | all | none | slide 72 criteria, >=1 month, opportunity; hyperarousal phone/coffee from transcript; CBT-I components from slide 78 + transcript (fixed 5 AM rise = sleep restriction) |
| REM sleep behavior disorder | all | none | transcript: loss of REM atonia, act out dreams, hurt bedmate; "early-morning hours" follows slide 16 (REM in last third); PSG card = slide 13 stage R with chin tone retained, certain and uncontroversial. No management taught -> none |
| Normal sleep changes of aging | workup | "much less slow-wave" -> "less slow-wave" | slide 15: SWS decline is "less so in women" (patient is a woman). Rest matches slide 19 (79%, more N1, 15 arousals/h) |

## Drugs (4) and gene (1)
| item | field | before -> after | reason / source |
|---|---|---|---|
| Sodium oxybate (GHB) | all | none | slide 70 lists GHB under both sleepiness and cataplexy; transcript "often an illicit drug... special prescribing training... only specialists". No mechanism taught -> none (2 cards OK) |
| Tirzepatide | mechanism | "Incretin (GLP-1-pathway) receptor agonist..." -> "Agonist at incretin receptors, the GLP-1 receptor among them, that produces weight loss; ..." | true both ways: lecturer calls it "our GLP-1s"/"GLP-1 agonist"; it is a dual GIP/GLP-1 agonist. Old wording "GLP-1-pathway" was vague. Use card (2024 NEJM: AHI, weight, hypoxic burden, CRP, SBP; first FDA drug for OSA) matches transcript |
| EGFR inhibitors | mechanism | "Small-molecule blockers of a receptor tyrosine kinase..." -> "Block a receptor tyrosine kinase..." | "small-molecule" not in CV142/CV144 and not true of the whole class (anti-EGFR antibodies exist); rest = CV142 slide 7 (activating EGFR ~15%, kinase inhibitors prolong survival). Use card OK (CV144 slide 55 marker-positive; CV142 KRAS 30% worse). Only Oncology drug in the dataset |
| Pramipexole / ropinirole | use | see CV145 6-10 table | |
| Gene: Narcolepsy HLA-DQB1*0602 | all | none | slide 69 + transcript ("nobody's really sure yet how these things correlate"); role does not name the disease |

## CV144 correlates 11-18
| item | field | before -> after | reason / source |
|---|---|---|---|
| SPN high probability (>8 mm) | all | none | slides 18 (prior films), 21 (new nodule -> CT through liver/adrenals), 22 (spicules, absent calcification, risk factors), 23 image (>8 mm high -> biopsy; intermediate -> PET), 25 (peripheral CT-guided, central bronchoscopy; pneumonia/PTX/bleeding). Workup avoid with NSCLC I-IIIA kept |
| SPN low probability (<4 mm) | management | "would get a repeat CT at 12 months" -> "may get" | true both ways: slide 23 (older algorithm) gives CT at 12 mo for <4 mm high-risk; Fleischner 2017 makes it optional for <6 mm high-risk. Low-risk "no follow-up" agrees under both |
| Lung cancer screening candidate | all | none | slide 60 (50-80, >=20 pack-yr, quit within 15 y; risk halves 5-10 y after quitting) + slide 58 image (NLST 20% fewer lung-cancer deaths vs radiography). 57 y / 27 pack-yr qualifies under the slide's main line, current USPSTF 2021, and the slide's dated "USPSTF 55-80" age parenthetical |
| NSCLC stage I-IIIA | presentation | "biopsy ...: non-small cell carcinoma" -> "malignant cells with ample cytoplasm and no nuclear molding"; "alkaline phosphatase" -> "ALP" (length) | rule 5: the card named its own answer (qa.py treats "non/small/cell" as generic so it passed). Histology described as the mirror of the SCLC card ("scant cytoplasm, nuclear molding", CV142); stage data unchanged (slides 46, 51, 52, 55) |
| NSCLC stage IV | workup | same "non-small cell carcinoma" label -> described histology; trimmed to 240 | rule 5, as above |
| NSCLC stage IV | lectures | [CV144] -> [CV144, CV142] | CV142 transcript teaches the item's core: "as soon as you get any metastatic... you are already stage four by definition"; CV142 also teaches EGFR TKI for marker-positive adenocarcinoma |
| SCLC limited disease | management | "Curative intent though not resectable" -> "Curative intent, usually without surgery" | true both ways: slide 40 "not amenable to surgical resection"; current practice resects the rare node-negative peripheral SCLC. Rest = slides 52, 55 (cisplatin/etoposide, chemo + RT, PCI in responders) |
| HOA from lung adenocarcinoma | all | none | slide 39 only (clubbing + periosteal proliferation of tubular bones; adenoCa). Clubbing described, not named; "lungs clear" separates IPF, "no fever/sputum" separates lung abscess. Avoid with C's Lung adenocarcinoma kept. Lectures CV144 only (CV142 lists HPOA as "of any type", "I don't emphasize") |
| Non-resolving pneumonia, endobronchial carcinoma | all | none | slide 8 (persistent/post-obstructive infection, failure to resolve, recurring colds in smokers >=40), slide 25 (bronchoscopy washings/brushings/biopsy for central), slide 46 (staging CT). Separate from C's squamous-with-hypercalcemia (no Ca, no keratin), D's aspiration pneumonia (no stroke/dysphagia), C's lobar atelectasis (tumour, not mucus plug) |
| SCLC limited disease | presentation | "Biopsy: sheets of small cells, scant cytoplasm, nuclear molding" -> "sheets of cells with scant cytoplasm and nuclear molding" | rule 5 consistency with the NSCLC fix: "small cells" is the answer's own label; the description alone still identifies the histology and mirrors the NSCLC cards ("ample cytoplasm, no nuclear molding") |

## Uniqueness scan (Jaccard top-3 against the A-G merge, work/G/merged_verify.json)
- Highest cross-item overlaps: CSA ~ Cheyne-Stokes workup 0.43 (avoid exists), NSCLC I-IIIA ~ SCLC limited presentation/workup 0.35-0.36
  (separated by histology mirror + central vs peripheral; SCLC workup avoid with NSCLC I-IIIA exists), SPN high ~ SCLC limited workup 0.33
  (16-mm node-negative peripheral nodule vs hilar mass with mediastinal nodes). Everything else < 0.30.
- Read the nearest non-G cards: C Asthma with obesity, Chronic respiratory acidosis in COPD (CPAP/BiPAP line differs), F nocturnal
  enuresis/incontinence (caffeine/bedtime advice differs from CBT-I), D Empyema and typical CAP (fevers persist / single episode vs third
  same-lobe pneumonia with tumour), C Lobar atelectasis (mucus plug vs tumour). No new avoid needed.
- Drugs: Sleep group = pramipexole/ropinirole, sodium oxybate, tirzepatide (distinct indications); Oncology = EGFR inhibitors alone.

## Final
- qa.py fragments/G.json: 0 FAIL, 0 WARN. A-G merge (temporary, deleted): 0 FAIL, 0 WARN.
- Checked 23 items (18 correlates, 4 drugs, 1 gene); changed 10 items (7 correlates, 3 drugs, 0 genes): RLS, Narcolepsy, Normal aging,
  SPN low probability, NSCLC I-IIIA, NSCLC IV (+CV142 in lectures), SCLC limited; drugs pramipexole/ropinirole, tirzepatide, EGFR inhibitors.
- No facts found that are absent from the slides/transcript except where logged (histology descriptions of the slide labels
  "non-small cell"/"small cell"; RBD PSG card derived from slide 13). No new avoid pairs.
- Edit inputs kept as e01-e06.json; helper vedit.py.
