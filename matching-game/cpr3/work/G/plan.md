# G plan (CV144 + CV145)

Name tokens are banned on cards by qa.py, so cards for items named "... sleep apnea" never
say "sleep"/"apnea"/"obstructive" (use "asleep", "overnight study", "pauses", "drowsy").

## Correlates - CV145

| # | Item | Nearest differential | Separating feature |
|---|------|----------------------|--------------------|
| 1 | Severe obstructive sleep apnea with obesity | Mild OSA in a slim adult; CSA | BMI ~39, AHI >30, effort belts keep moving; CPAP |
| 2 | Mild obstructive sleep apnea in a slim adult with a small jaw | Severe OSA with obesity | BMI 21, retrognathic jaw, AHI 5-15; mandibular advancement device |
| 3 | Obstructive sleep apnea in a child | Adult OSA items | age 6, school focus/behavior, huge tonsils, not obese; ENT/tonsils out |
| 4 | Central sleep apnea | Cheyne-Stokes; OSA | brainstem infarct; pauses with flat chest/abdomen belts, no hyperpnea runs; treat cause, CPAP ~20% |
| 5 | Cheyne-Stokes breathing | Central sleep apnea; cardiogenic edema | EF ~12% on transplant list; runs of hyperpnea alternating with no-effort pauses |
| 6 | Restless legs syndrome | Insomnia; RBD | urge to move calves at rest/evening, relieved by walking; dopamine agonist |
| 7 | Narcolepsy | OSA; RBD | teen onset, emotion-triggered collapse, waking paralysis, hypnagogic images; MSLT >=2 SOREMPs |
| 8 | Insomnia | RLS; normal aging | >=1 month with daytime consequences, hyperarousal habits; CBT not drugs |
| 9 | REM sleep behavior disorder | Narcolepsy; RLS | acts out dreams late in the night, hits bed partner; REM with chin tone kept |
| 10 | Normal sleep changes of aging | Insomnia | no daytime consequences; efficiency ~79%, more N1, less SWS, 15 arousals/h; reassure |

## Correlates - CV144 (only what C's CV142 items lack)

| # | Item | Nearest differential | Separating feature |
|---|------|----------------------|--------------------|
| 11 | Solitary pulmonary nodule, high probability (>8 mm) | Pulmonary hamartoma (C); AIS (C); low-prob nodule | smoker, 16 mm spiculated, no calcification, new vs old film; tissue (CT-guided biopsy) |
| 12 | Solitary pulmonary nodule, low probability (<4 mm) | Pulmonary hamartoma (C); high-prob nodule | 3 mm, never smoker, no FHx/exposure; no follow-up CT |
| 13 | Lung cancer screening candidate | (none - no disease) | 57, 27 pack-years, quit 10 y, asymptomatic; LDCT |
| 14 | Non-small cell lung cancer, stage I-IIIA (resectable) | SCLC limited; high-prob nodule | NSCLC on biopsy, N0 M0, FEV1 >1.5 L, DLCO >60%; lobectomy |
| 15 | Non-small cell lung cancer, stage IV | Lung adenocarcinoma (C - adrenal mass) -> avoid | brain lesions at gray-white junction, adrenal, bone; palliative + targeted |
| 16 | Small cell lung cancer, limited disease | C's SCLC ACTH/SIADH; NSCLC I-IIIA | normal Na/Ca/cortisol, confined to one hemithorax; chemo+RT+PCI |
| 17 | Hypertrophic osteoarthropathy from lung adenocarcinoma | Lung adenocarcinoma (C) -> avoid; lung abscess (D, clubbing) | clubbing + periosteal new bone on long bones, no fever/sputum |
| 18 | Non-resolving pneumonia from an endobronchial carcinoma | D CAP items; C lobar atelectasis; carcinoid | smoker, third same-lobe pneumonia, film unchanged at 8 wk, tumor at bronchoscopy |

## Drugs

| Item | Group | Cards | Separation |
|------|-------|-------|-----------|
| Pramipexole / ropinirole | Sleep | mechanism, use | RLS; direct dopamine receptor agonist |
| Sodium oxybate (GHB) | Sleep | use, adverseEffects | narcolepsy sleepiness + cataplexy; illicit drug, special training |
| Tirzepatide | Sleep | mechanism, use | OSA with obesity; incretin agonist, weight loss |
| EGFR inhibitors | Oncology | mechanism, use | marker-positive NSCLC (activating mutation ~15% of adenocarcinoma) |

## Genes

| Narcolepsy | HLA-DQB1*0602 | role: genetic test listed with low CSF hypocretin |

## Considered and skipped

- Lambert-Eaton (CV144 one table line; CV142 "I don't emphasize"); no symptoms taught anywhere -> vignette would be board content.
- Dermatomyositis/polymyositis (CV144 "muscle weakness", no cell type).
- Broncho-alveolar carcinoma with bronchorrhea (one bolded line; C's AIS item is the entity, asymptomatic).
- Intermediate-probability >8 mm nodule -> PET (cannot be told from high-probability on a card).
- Extensive-stage SCLC (palliative only; collides with C's SCLC with SIADH, which has liver deposits).
- Cisplatin/etoposide, ALK TKIs, modafinil, methylphenidate, levodopa, gabapentin, benzodiazepines, cataplexy antidepressants: one-card mentions only.
- CPAP: a device, not a drug.
- Sleep stages / EEG waves (K complexes = N2): physiology, no category in the schema.
- Obesity hypoventilation syndrome: lecturer says "we're not talking about that". Mixed apnea: named only.
