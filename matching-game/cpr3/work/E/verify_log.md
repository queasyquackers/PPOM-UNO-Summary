# Verify log - fragment E

Verifier pass. Format: item | field | before -> after | reason | source checked.
Fragment: 52 correlates, 18 glomerular items.

## Progress
- [start] read VERIFY_BRIEF, AUTHORING_BRIEF, ASSIGNMENTS, notes.md, E.json

## CV148 items (MCD, FSGS, collapsing FSGS, membranous, diabetic, AL amyloid, MPGN I, DDD) - correlates + glomerular
Sources: content/json/cv148.file.js, _pipeline/CV148/slides.txt (+ CV147 summary, CV161 summary).
Confirmed on slides: captopril (S16 drug list), 8-10 nm fibrils (S28), Hodgkin (S7), "microvascular injuries" for collapsing (S13), Bence Jones (S33), type 1 age 15-25 + "most common cause chronic renal failure in US" (S22), MPGN stem (S42), MCD peds management + S. pneumoniae peritonitis (CV161 S9-10).
- Renal AL amyloidosis | correlate presentation | "with Bence Jones protein in her urine" -> "with free light chains in her urine" | eponymous label for a finding (rule 1) | CV148 S33
- Renal AL amyloidosis | glomerular clue | dropped "(Bence Jones protein)" | same | CV148 S33
- Renal AL amyloidosis | immunofluor (author flag) | KEPT "Immunostain of the deposits: lambda+, kappa-" | lecture gives it as IHC (S30); light-chain restriction is also exactly what renal IF for kappa/lambda shows, so true on either method and labelled honestly | CV148 S30
- MPGN I | electronMicro "mesangial cells grow into the capillary wall and split the GBM" | kept | CV147 summary (Slide 29) states mesangial cells proliferate into capillary space splitting the GBM
- No other changes: MCD, FSGS, collapsing FSGS, membranous, diabetic, MPGN I, DDD checked field by field - facts match.

## CV149 items (IgA, PSGN, anti-GBM, GPA, lupus I-II/III-IV/V/VI, Alport, TBMD)
Sources: cv149.file.js, CV149 slides (S12 IgA predictors incl. ">140/90", S13 PSGN "2-6 years", S26 NC1 domain alpha-3, S29 chest pain, S42 Alport X-linked dominant 85%, S48-50 TBMD alpha-3/alpha-4 AD + "AKA Benign Familial Hematuria").
- GPA | correlate presentation | removed "sunken nasal bridge" (kept perforated septum) | stacked two famous signs (saddle nose + septal perforation) | CV149 S32
- GPA | glomerular clue | "nasal septal perforation or a collapsed nasal bridge" -> "nasal septal ulcers or perforation" | same | CV149 S32
- Thin basement membrane disease | management | "isolated familial hematuria with normal renal function..." -> "No treatment needed: reassure ... renal function usually stays normal, outlook excellent, no progression expected" | "familial hematuria" is the disease's alias (Benign Familial Hematuria, S48) = names the answer | CV149 S48
- Thin basement membrane disease | lightMicro (author flag) | "Unremarkable glomeruli and interstitium...; no proliferation and no interstitial foam cells" -> "Normal on light microscopy: glomeruli, tubules and interstitium unremarkable, with no extra cells" | lecture gives no LM; normal LM is certain, the negative "no foam cells" inference dropped (Alport card already separates by its positive foam-cell finding); avoid MCD + lupus I-II kept | standard
- Lupus III-IV | avoid | added immunofluor: ["Lupus nephritis, class V"] | both are granular five-stain deposits along capillary loops; IF alone cannot separate them | CV149 S35, S40
- Lupus V | electronMicro | "Subepithelial electron-dense deposits along the outer GBM" -> "Many subepithelial electron-dense deposits spread evenly along the whole outer surface of the GBM" | sharpen vs PSGN EM (large discrete scattered humps); membranous avoid already present | CV149 table
- TBMD clue "alpha-3/alpha-4 collagen IV" confirmed on S48; PSGN clue "2-6" confirmed S13; anti-GBM clue NC1 confirmed S26.

## CV151 items (benign/malignant nephrosclerosis, typical/atypical HUS, TTP, athero RAS, FMD, renal infarct, atheroembolic, sickle cell)
Sources: cv151.file.js; CV151 slides (S10 papilledema, S15 hematemesis/melena stem, S18 "FFP & recombinant ADAMTS13", S22 bruit/renin/ACEi/arteriography, S26-27 atheroemboli, sickle cell); transcript (stent "cure").
- Atypical HUS | workup (author flag) | "ADAMTS13 activity normal" -> "ADAMTS13 activity not severely reduced" | lecture never states the aHUS value; "not severely reduced" is the certain contrast with TTP (some aHUS patients have mildly low activity, so "normal" over-claims) | CV151 S17-18 + standard
- TTP | management | "...recombinant ADAMTS13 is another way to supply it" -> "...recombinant ADAMTS13 can also supply the enzyme, mainly in the inherited form" | lecture lists recombinant enzyme generally; it is used/approved mainly for congenital TTP, not the autoantibody case on the card - phrased true both ways | CV151 S18
- Atherosclerotic RAS | management | "Stent ... or remove it surgically: ... can be cured" -> "BP drugs and risk-factor control, plus a stent or surgical removal of the narrowed segment when it drives the BP: ... can be fixed" | lecture (stent cures) is dated for atherosclerotic RAS (stenting not superior to medical therapy in trials); phrased true both ways | CV151 S22 + transcript
- Sickle cell nephropathy | presentation | "with HbSS disease and pain crises since childhood" -> "with lifelong anemia and repeated admissions for bone pain" | HbSS is the name of the disease in the answer (sickle) - qa token rule bypassed by abbreviation | CV151 S26
- Collapsing FSGS (HIV-associated) | presentation | "31-year-old Black man with HIV, off antiretrovirals" -> "31-year-old Black man off antiretroviral therapy (CD4 90)" | "HIV" is in the answer's name; context still carries it | CV148 S13
- Collapsing FSGS | glomerular clue | "Untreated HIV infection" -> "Untreated retroviral infection with a low CD4 count" | same
- Checked, no change: benign nephrosclerosis, malignant HTN (onion-skin described not named; BP lowering over hours S10), typical HUS (no antibiotics, CV161), FMD, renal infarction, atheroembolic (no-contrast detail separates F's contrast AKI).

## CV155 items (ischemic ATI, drug TIN, chronic pyelo, NSAID papillary necrosis, NSAID TIN+MCD, acute uric acid, chronic gouty)
Sources: cv155.file.js; CV155 slides (S4 hypovolemic shock, S6 segments, S11 drug list, S21-24 drug TIN 15 days / NSAID patterns, S25-26 urate). CV157/CV160 summaries confirm VUR -> "severe nephropathy" / cumulative kidney damage (keeps chronic pyelo lectures list).
- Ischemic ATI | presentation | "2 days after a crash with hemorrhagic shock" -> "2 days after a massive upper GI bleed with shock" | a crash invites crush injury = F's Rhabdomyolysis; GI bleed keeps pure hypovolemic ischemia (lecture S4) | CV155 S4; F.json Rhabdomyolysis
- Checked, no change: drug TIN (15 days, fever/rash/eosinophilia, medulla), chronic pyelo (U-shaped scar, tubules with colloid casts described not named, broad casts), NSAID papillary necrosis (high dose, COX-2 kidney), NSAID TIN+MCD, acute uric acid (lymphoma/chemo, collecting tubules, acid pH), chronic gouty (needle birefringent MSU, giant cells, medulla).
- Cross-check vs F: Acute pyelonephritis (fever/flank/bacteria) separates from drug TIN (no bacteria, rash, eosinophils); Uric acid stones (colic) vs gouty nephropathy (no stones); VUR (child, voiding study) vs chronic pyelo (adult with CKD, scars).

## CV156 items (AML, TS, oncocytoma, clear cell RCC, papillary RCC, VHL, Wilms, neuroblastoma, urothelial ca renal pelvis)
Sources: cv156.file.js; CV156 slides (S7 TS tumors, S8-9 AML, S12-13 oncocytoma, S16 familial table, S18 triad/varicocele/PEAR, S26 papillary, S33-38 Wilms, S39-41 pelvis, S45-48 deck stems).
- Tuberous sclerosis | presentation | removed "an infant echocardiogram had shown a heart muscle tumor" | stacked three famous TS signs (rhabdomyoma + ash-leaf + angiofibroma paraphrases); kept the two the lecture's own stem gives (S45) | CV156 S45
- Angiomyolipoma | avoid | added {"workup": ["Tuberous sclerosis"]} | AML workup (vessels/smooth muscle/fat as empty holes) is equally true of the TS kidney lesion; TS workup only adds the germline line | CV156 S9, S46
- Clear cell RCC | presentation | removed "a palpable left flank mass" (now hematuria + flank pain + weight loss + varicocele + Hb 18.9) | stacked the full triad plus two classic extras; lecture stem (S43) has no mass | CV156 S18, S43
- Clear cell RCC | avoid | added {"workup": ["Von Hippel-Lindau syndrome"]} | sporadic clear cell histology/IVC extension fits a VHL renal tumor as well | CV156 S16, S19
- Checked, no change: oncocytoma, papillary RCC (dialysis cysts, foamy macrophages, psammoma, trisomy 7), VHL (bilateral RCC + cerebellar/retinal vascular tumors + pheo described), Wilms (triphasic described, anaplasia TP53), neuroblastoma (adrenal, crosses midline, constitutional), urothelial pelvis (smoking, analgesics, 17p/p53).

## CV157 items (UPJ, SRF, patent urachus, exstrophy, malakoplakia, invasive bladder UC, low-grade papillary, CIS, SCC bladder, caruncle)
Sources: cv157.file.js; CV157 slides (S6 UPJ, S9 SRF/ergot, S12-13 exstrophy/urachus, S18 malakoplakia 3-4 cm, S21 aryl amines/Schisto 70% squamous, S22-28 papillary vs CIS pathways and histology, S31 caruncle); CV160 summary (UPJ unilateral hydronephrosis + infant pyelo); CV152 summary (terminal-spine eggs -> squamous bladder ca).
- Invasive urothelial carcinoma of the bladder | workup | "transitional-cell carcinoma invading the muscularis propria" -> "nests and cords of pleomorphic, high-grade epithelial cells invading the muscularis propria" | "transitional-cell carcinoma" is the answer's synonym (rule 5) | CV157 S20, S28
- Checked, no change: UPJ (vs F's VUR = dilated ureter, PUV = bilateral + bladder), SRF (sacral promontory -> aorta -> ureters; lymphs/plasma cells/eosinophils), patent urachus, exstrophy, malakoplakia (Michaelis-Gutmann described, not named; transplant), low-grade papillary (orderly cohesive, FGFR3), CIS (red granular flat mucosa, no mass, cytology +), SCC bladder (Nile canals = activity not agent; vs F's Urinary schistosomiasis separated by age, weight loss, ulcerated mass, carcinoma on biopsy), caruncle.

## Glomerular matrix sweep (buzzword + uniqueness)
- Lupus I-II | immunofluor | "Granular mesangial IgG, IgA, IgM, C3 and C1q - all five major stains positive" -> "Granular IgG, IgA, IgM, C3 and C1q confined to the mesangium" | "all five major stains positive" is the plain-language label for full-house; the stain list itself is the finding | CV149 S35
- Lupus V | immunofluor | "Granular IgG, IgA, IgM, C3 and C1q, all five positive, outlining the GBM" -> "Granular deposits along the GBM that stain for IgG, IgA, IgM, C3 and C1q together" | same; reworded to clear a qa near-dup WARN with membranous (they differ by IgA/IgM/C1q, the separating feature) | CV149 S35
- MCD | avoid | added {"electronMicro": ["Focal segmental glomerulosclerosis"]} | both are effacement without deposits on a normal GBM (CV148 table); EM alone cannot separate | CV148 S6
- Checked, no change: every other LM/IF/EM/clue card describes the stain rather than its nickname (KW nodules, spike, tram track, wire loop, basket-weave, crescents all described); existing avoids (MPGN I/DDD LM, anti-GBM/GPA LM+EM, IgA/lupus I-II, lupus V/membranous, TBMD/MCD/lupus I-II LM) are justified.

## Cross-fragment check
- Merged A+C+D+E+F correlates/glomerular into a temp file (deleted after) and ran qa.py: 0 FAIL, 0 WARN.
- Read F's neighbours by hand: Rhabdomyolysis (-> ATI edit), Advanced CKD (diabetic avoid left as instructed), Contrast AKI (atheroembolic card says "without contrast"), Acute pyelonephritis, VUR / PUV / infant febrile UTI (vs UPJ, chronic pyelo), IgA vasculitis (vs IgA nephropathy), Orthostatic proteinuria (vs TBMD), Uric acid stones (vs urate nephropathies), Urinary schistosomiasis (vs bladder SCC), Renal colic (vs renal infarction). C has no EGPA item; GPA's "no asthma, eosinophils normal" is harmless.

## Final
- qa.py fragments/E.json: 0 FAIL, 0 WARN.
- Correlates: 52 checked, 13 changed. Glomerular: 18 checked, 8 changed.
- New avoid pairs: Lupus III-IV ~ Lupus V (immunofluor); Angiomyolipoma ~ Tuberous sclerosis (workup); Clear cell RCC ~ Von Hippel-Lindau syndrome (workup); MCD ~ FSGS (glomerular electronMicro).
- Left for orchestrator: item name "Collapsing FSGS (HIV-associated)" keeps HIV in the answer name, so cards now imply it via antiretrovirals/CD4 instead of naming it.

## Orchestrator edit (after verification)
- "Collapsing FSGS (HIV-associated)" renamed "Collapsing FSGS" (correlates and glomerular) so the answer name no longer carries the clue the cards withhold.
