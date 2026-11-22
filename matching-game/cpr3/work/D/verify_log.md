# Verify log - fragment D (verifier)

Format: item | field | before -> after | reason | source checked

Started. 66 correlates in D.json. Working TB block first (CV127/128/131/132/138).


## Batch 1 - TB block (CV127/128/131/132/138), CV129 viruses, pertussis

- **Hansen disease (leprosy)** | `management`
  - before: "with two forms of contraception."
  - after: "with pregnancy tests and contraception."
  - reason: 'two forms' is not in the lecture; CV128 says pregnancy tests plus adequate contraception
  - source: CV128 transcript l.1991-2006
- **Herpangina** | `lectures`
  - before: ["CV129", "CV141"]
  - after: ["CV129"]
  - reason: CV141 never mentions herpangina (only 'Coxsackie A can also cause pharyngitis')
  - source: CV141 slides 39, transcript l.516-517
- **RSV bronchiolitis in an infant** | `management`
  - before: "Supportive: oxygen, nasal suction, fluids and feeding support. Specific options for severe or high-risk infants: ribavirin and antiviral monoclonal antibodies."
  - after: "Supportive: oxygen, nasal suction, fluids and feeding support; ribavirin only in select severe cases. Prevention for high-risk infants: a monoclonal antibody shot in the first RSV season, or vaccinating the mother in pregnancy."
  - reason: Monoclonals are preventive, not treatment (lecture lumps them as 'antiviral treatments'); ribavirin is on the CV129 slide but now rarely used - phrased so both are true. Maternal vaccine + first-season antibody are in the transcript.
  - source: CV129 slide 19, transcript l.738-753
- **Pertussis** | `presentation`
  - before: "9-year-old fully vaccinated as an infant. Two weeks of runny nose and low fever, then 3 weeks of coughing fits: 15-20 rapid coughs in one breath, then a loud high-pitched gasp on breathing in and often vomiting. T 37.2 C, RR 18, SpO2 98%; lungs clear between fits."
  - after: "9-year-old fully vaccinated as an infant. Two weeks of runny nose and low fever, then 3 weeks of violent coughing fits that leave her red-faced and breathless, sometimes ending in vomiting; well between fits. T 37.2 C, RR 18, SpO2 98%; lungs clear."
  - reason: Buzzword stack: '15-20 rapid coughs then a loud high-pitched gasp on breathing in' (the whoop paraphrase) plus post-tussive vomiting. Kept the paroxysms + vomiting + catarrhal-then-paroxysmal timeline + waning immunity in a vaccinated school-age child; workup card carries the lymphocytosis.
  - source: CV138 slide 16-17, transcript l.479-546

### Batch 1 - items checked with no change (sources)
- Latent TB infection: sputum-negative + normal film = CV128 slide 6; regimen phrased so CV128 slide 9 (INH+RIF 3 mo) and CV131 slide 17 (INH 9 mo / RIF 4 mo) both agree - OK. Lectures CV127/128/131 OK.
- Primary pulmonary TB: hilar node + lower-zone infiltrate in a child (CV127 slide 30, transcript l.648-653; CV132 slide 24 lower lobe); gastric aspirate (CV127 slide 31). OK.
- Secondary TB: apical cavity + air-fluid level (CV127 l.654-661), RIPE 2+4 + B6 (CV128 slides 7-8, 12), DOT, airborne room (CV127 slide 38). OK.
- Miliary TB: 1-2 mm nodules, hematogenous (CV127 slide 20, CV131 slide 15-16, CV132 slide 27). OK.
- TB lymphadenitis: posterior cervical/supraclavicular (CV127 l.413-419); node biopsy for suspected lymphoma in immigrant (CV127 l.690-699). OK.
- MDR/XDR TB: definitions CV138 slides 11-12; BPaL / BPaLM 6-mo all-oral, longer tailored 18 mo (CV138 l.325-348); QT/LFT (CV128 slide 32-33, l.1575-1582); non-adherence risk (CV138 l.293-308). OK.
- Disseminated MAC: CV128 slide 34 + l.1583-1616 (rifabutin as 3rd agent if sicker; spares HAART). OK. (Primary MAC prophylaxis at CD4<50 is the lecture's teaching; current guidance skips it if ART starts at once - card patient is off ART, so true both ways.)
- Hansen disease presentation = CV128's own question vignette (l.2708-2730). OK apart from the contraception edit.
- HFMD: fever <101 F, non-pruritic hand/foot rash, painful oral ulcers, 7-10 d, shedding <4 wk throat / 6 wk stool (CV129 slides 6-7). OK.
- Common cold: CV129 slides 8-9 (fall/spring, 5-7 d adults, 10 d kids, supportive); OTC decongestants (CV141 slide 37). OK.
- Pharyngoconjunctival fever: camp pool outbreak (CV129 l.388-395), adenoviral pharyngitis + conjunctivitis (CV141 slide 39, l.494-501). OK.
- Croup: 3 mo-5 y, worse at night, stridor, supportive (CV141 slide 46); soft-tissue neck film abnormal 40-50%, subglottic narrowing (CV141 l.658-667). No management card - correct (lecture: supportive only; dexamethasone/racemic epinephrine are summary-only). OK.
- Interpretation for CV129/138/140 strict rule: disease claims (symptoms specific to the disease, tests, drugs, numbers given as disease facts) must be in some in-scope lecture; vignette scaffolding (age, setting, vital-sign numbers, generic lab values that follow from the lecture's physiology) is kept.

## Batch 2 - CV138 (strict), CV140 (strict), CV139/130/141/137/136 fixes and lecture lists

- **Cholera** | `presentation`
  - before: "Relief worker, 34, in a post-earthquake camp drinking river water. Since yesterday: sudden painless, profuse watery diarrhea, pale gray with mucus flecks, a liter an hour; vomiting, leg cramps; no fever or blood. T 36.9 C, HR 128, BP 78/44; sunken eyes, skin tenting."
  - after: "Relief worker, 34, in a post-earthquake camp drinking untreated river water. Since yesterday: sudden painless, profuse watery diarrhea, pale gray with mucus flecks; no fever, no blood. T 36.9 C, HR 128, BP 78/44; sunken eyes, skin tenting."
  - reason: Summary-only details removed: 'a liter an hour', vomiting, leg cramps (not on CV138 slides/transcript).
  - source: CV138 slides 18-19, transcript l.553-600
- **Cholera** | `workup`
  - before: "Stool: no white cells or blood; culture on thiosulfate-citrate-bile salts-sucrose agar grows yellow colonies. K+ 2.8 mEq/L, HCO3- 14 mEq/L, creatinine 2.1 mg/dL."
  - after: "Stool: no white cells or blood; curved, oxidase-positive gram-negative rods grow on thiosulfate-citrate-bile salts-sucrose agar. K+ 2.8 mEq/L, HCO3- 14 mEq/L, creatinine 2.1 mg/dL."
  - reason: 'yellow colonies' is not in CV138; replaced with the lecture's own ID (curved, oxidase+, TCBS).
  - source: CV138 slide 18, transcript l.553-557
- **Cholera** | `management`
  - before: "Replace fluid and electrolytes fast (oral rehydration solution, IV if in shock): with it, deaths fall from 25-50% to few. Reportable to the CDC."
  - after: "Oral rehydration with electrolyte replacement - very treatable this way, against 25-50% mortality untreated. Reportable to the CDC."
  - reason: 'IV if in shock' and 'deaths fall to few' are not in CV138; lecture: oral rehydration + electrolytes, mortality 25-50% without Tx, 'very treatable', reportable.
  - source: CV138 slide 19, transcript l.585-604
- **Measles** | `presentation`
  - before: "Unvaccinated 4-year-old, 10 days after a crowded indoor party: 3 days of fever to 40.5 C, cough, runny nose, red watery eyes, light sensitivity, then a dense red rash spreading from the face to trunk and limbs. Small red spots with bluish-white centers inside the cheeks."
  - after: "Unvaccinated 4-year-old, 10 days after a crowded indoor party: 3 days of fever to 40.5 C, cough, runny nose, sore throat, red watery eyes and light sensitivity, then a dense red rash that starts on the face and spreads to the trunk, arms and legs."
  - reason: Buzzword stack: the buccal-spot description (Koplik paraphrase) on top of the 3 Cs and the face-down rash. Dropped the spots; constellation still points only to measles.
  - source: CV138 slide 22, transcript l.669-692
- **Measles** | `management`
  - before: "Airborne isolation (negative pressure, N95), since the virus lingers up to 2 hours; it is reportable."
  - after: "Airborne isolation (negative pressure, N95); the virus also survives on surfaces up to 2 hours. Reportable."
  - reason: Slide says the virus survives on SURFACES up to 2 h, not in air. Airborne precautions are from CV140 slide 17 (CV138 itself says droplet). Vitamin A kept: it IS in the CV138 transcript ('possibly vitamin A').
  - source: CV138 slide 22-23, transcript l.708-715; CV140 slide 17, transcript l.328-337
- **Dengue** | `presentation`
  - before: "27-year-old back 5 days from a month in Thailand, many mosquito bites. Sudden high fever, chills, severe headache, pain behind the eyes and intense pain in the back, joints, muscles and bones; a red blotchy rash on the trunk. T 39.8 C, HR 104, BP 118/72."
  - after: "27-year-old back 5 days from a month in the Philippines, many mosquito bites. Sudden high fever, chills, malaise, severe headache, pain behind the eyes and intense pain in the back, joints, muscles and bones; a red rash. T 39.8 C, HR 104, BP 118/72."
  - reason: Rash site ('blotchy, trunk') is not in CV138; travel moved to an endemic area the lecture names.
  - source: CV138 slide 28, transcript l.847-915
- **Dengue** | `management`
  - before: "Supportive only: there is no antiviral and no vaccine. Watch for leaky vessels and shock, mainly with a second infection by another serotype (15% mortality untreated, about 1% with supportive care)."
  - after: "Supportive only: there is no antiviral. Watch for the severe hemorrhagic form with shock and kidney failure, mainly on reinfection with a different serotype (15% mortality untreated, about 1% with supportive care)."
  - reason: 'No vaccine' is dated (lecture: 'no vaccine yet'; vaccines now licensed) - claim dropped so the card is true both ways. Shock/renal failure and reinfection risk are the lecture's words.
  - source: CV138 slide 29, transcript l.873-931
- **Ebola / Marburg virus disease** | `management`
  - before: "IV fluids and electrolytes, oxygen, blood-pressure support, antiemetics, fever and pain control, treat other infections; anti-glycoprotein monoclonal antibodies."
  - after: "IV fluids, electrolytes, oxygen, pressure support, antiemetics, fever and pain control, treat other infections; antibodies protect (monoclonals REGN-EB3, mAb114)."
  - reason: 'anti-glycoprotein' is not in CV138. Lecture names REGN-EB3/mAb114 as not approved/experimental (dated: both now FDA-approved) - card names them without calling them approved or experimental.
  - source: CV138 slide 32, transcript l.984-1013
- **Hantavirus pulmonary syndrome** | `presentation`
  - before: "fever, headache and aching thighs and back,"
  - after: "fever, headache and muscle aches,"
  - reason: Muscle groups not in CV138 (lecture: fever, headache, myalgias).
  - source: CV138 slide 33, transcript l.1035-1036
- **Hantavirus pulmonary syndrome** | `management`
  - before: "ICU support: oxygen, mechanical ventilation and careful fluids; about 30% die. Prevent by avoiding rodent droppings in closed buildings."
  - after: "Supportive care, usually in the ICU (oxygen, ventilatory support); up to 30% die. Caught by inhaling dust from deer mouse urine and droppings."
  - reason: 'careful fluids' and 'avoid droppings in closed buildings' are not in CV138. Ribavirin still left out: lecture says 'some benefit', current evidence says no benefit - omitted so the card is true both ways.
  - source: CV138 slide 33, transcript l.1014-1045
- **Mumps** | `workup`
  - before: "PCR or viral culture of saliva can confirm."
  - after: "RT-PCR, viral culture or a 4-fold rise in IgG can confirm."
  - reason: 'of saliva' is not in CV138; 4-fold IgG rise is on the slide.
  - source: CV138 slide 25, transcript l.755-762
- **Inhalational anthrax** | `lectures`
  - before: ["CV131", "CV138"]
  - after: ["CV131"]
  - reason: CV138 only lists it in the EID table (slide 5); transcript never mentions it - not taught.
  - source: CV138 slide 5, transcript grep
- **Pneumonic tularemia** | `lectures`
  - before: ["CV131", "CV141", "CV138"]
  - after: ["CV131", "CV141"]
  - reason: CV138 only lists it in the EID table (slide 5); transcript never mentions it - not taught.
  - source: CV138 slide 5, transcript grep
- **Legionella pneumonia** | `lectures`
  - before: ["CV130", "CV141", "CV138"]
  - after: ["CV130", "CV141"]
  - reason: CV138 only lists it in the EID table (slide 5); transcript never mentions it - not taught.
  - source: CV138 slide 5, transcript grep
- **VRE infection** | `lectures`
  - before: ["CV140", "CV138", "CV128"]
  - after: ["CV140", "CV128"]
  - reason: CV138 never mentions enterococci/VRE (only VRSA).
  - source: CV138 slides + transcript grep
- **Clostridioides difficile colitis** | `workup`
  - before: "Colonoscopy: raised yellow-white plaques of fibrin and debris stuck to inflamed colonic mucosa."
  - after: "Colonoscopy: a membrane-like coat of plaques over inflamed colonic mucosa."
  - reason: Plaque color/composition not in CV140/138 (lecture: toxins cause necrosis and pseudomembranes covering the colon wall).
  - source: CV140 slide 19, transcript l.358-373
- **Candidemia (invasive candidiasis)** | `workup`
  - before: "germ tube forms at 37 C (no germ tube: suspect a fluconazole-resistant species)."
  - after: "germ tubes form at 37 C."
  - reason: FACTUAL: 'no germ tube = fluconazole-resistant' is wrong (C. parapsilosis/tropicalis lack germ tubes and are usually fluconazole-susceptible). Lecture: albicans forms germ tubes at 37 C; glabrata azole-resistant.
  - source: CV137 slide 7, CV140 slide 40
- **Pseudomonas nosocomial infection** | `management`
  - before: "Resistance can emerge during about 10% of courses, so repeat cultures."
  - after: "It turns resistant during about 10% of courses."
  - reason: 'so repeat cultures' is an inference not in CV140.
  - source: CV140 transcript l.717-724; CV139 l.499-534
- **MRSA infection** | `lectures`
  - before: ["CV140", "CV138", "CV139"]
  - after: ["CV140", "CV138", "CV139", "CV131"]
  - reason: CV131 teaches MRSA (slide 9: mecA, PVL, HAP/VAP organism).
  - source: CV131 slides 4, 9, 30
- **Klebsiella pneumonia** | `lectures`
  - before: ["CV130", "CV139", "CV141"]
  - after: ["CV130", "CV139", "CV141", "CV140"]
  - reason: CV140 teaches Klebsiella pneumonia (upper lobe, thick bloody mucus, cavitation, mucoid capsule).
  - source: CV140 slides 32-34, transcript l.745-804
- **Epiglottitis** | `workup`
  - before: "Direct view in the OR: bright red, edematous supraglottic tissue. Blood culture: gram-negative coccobacilli growing on chocolate agar."
  - after: "Blood culture: gram-negative coccobacilli that grow on chocolate agar (need factors V and X)."
  - reason: Buzzword stack: 'bright red' epiglottis (cherry-red paraphrase) on top of the thumb-sign paraphrase. Kept the film description + organism ID.
  - source: CV130 slides 13-14; CV141 slide 50
- **Pneumococcal pneumonia** | `management`
  - before: "Vaccinate against the encapsulated organism (no spleen); repeat in 5 years or at 65."
  - after: "Vaccinate against the encapsulated organism (no spleen)."
  - reason: Revaccination schedule is not in any lecture (CV141 only names PPV23/PCV13) and is dated under current conjugate-vaccine schedules.
  - source: CV141 slide 69
- **Aspergilloma** | `workup`
  - before: " with a thin rim of air between mass and wall; the mass shifts when he lies prone."
  - after: " with a thin rim of air between mass and wall."
  - reason: Two famous signs stacked (air-crescent paraphrase + mobile ball). Kept one; mobility is not in CV137.
  - source: CV137 slide 10
- **Histoplasmosis** | `lectures`
  - before: ["CV136", "CV141"]
  - after: ["CV136", "CV141", "CV132"]
  - reason: CV132 teaches the endemic mycoses (geography, yeast in macrophages, broad-based thick-walled yeast / suppurative granulomas, spherules; <1% disseminate to skin and meninges).
  - source: CV132 slides 23, 28-31
- **Blastomycosis** | `lectures`
  - before: ["CV136"]
  - after: ["CV136", "CV132"]
  - reason: CV132 teaches the endemic mycoses (geography, yeast in macrophages, broad-based thick-walled yeast / suppurative granulomas, spherules; <1% disseminate to skin and meninges).
  - source: CV132 slides 23, 28-31
- **Primary pulmonary coccidioidomycosis** | `lectures`
  - before: ["CV136", "CV141"]
  - after: ["CV136", "CV141", "CV132"]
  - reason: CV132 teaches the endemic mycoses (geography, yeast in macrophages, broad-based thick-walled yeast / suppurative granulomas, spherules; <1% disseminate to skin and meninges).
  - source: CV132 slides 23, 28-31
- **Disseminated coccidioidomycosis** | `lectures`
  - before: ["CV136"]
  - after: ["CV136", "CV132"]
  - reason: CV132 teaches the endemic mycoses (geography, yeast in macrophages, broad-based thick-walled yeast / suppurative granulomas, spherules; <1% disseminate to skin and meninges).
  - source: CV132 slides 23, 28-31

### Batch 2 - items checked with no change (sources)
- RSV bronchiolitis presentation/workup: winter, infant LRI wheeze, rapid antigen + multiplex PCR (CV129 slides 18-19, l.708-737). OK.
- Herpangina card: CV129 gives only "sores in the back of the mouth and throat with fever" (l.160-164); card is consistent; posterior-only + no hand/foot rash separates it from HFMD. Vitals = scaffolding. OK.
- MDR/XDR, C. difficile presentation/management: oral fidaxomicin/vancomycin 1st, metronidazole 2nd, surgery for toxic megacolon, FMT (CV138 l.196-209); soap and water for spores (CV140 l.202-221); contact + enteric precautions (CV140 slide 15). OK.
- MRSA card: wrestlers/shared equipment (CV138 slide 8), cefoxitin disk, oxacillin-salt agar, mecA PCR (CV138 slide 7), contact precautions (CV140 slide 15); vancomycin (CV138 l.88-90) or linezolid (CV128 slide 31, CV139 l.529-530). OK.
- VRE card: chains, catalase-neg, bile esculin, 6.5% NaCl, cephalosporins select (CV140 slides 25-26, l.566-614); contact isolation (CV140 l.592-597); linezolid 100% bioavailable, MAOI/SSRI, marrow (CV128 slide 31). OK.
- Pseudomonas: burn units, oxidase+, non-fermenter, pigment (CV140 slides 30-31, l.701-737); lung gross/micro (CV132 slide 19); pip-tazo/cefepime/imipenem, 2 agents for structural lung disease or resistance (CV139 l.499-534). OK after edit.
- Candidemia: TPN, abdominal surgery, CVC, steroids, broad antibiotics (CV140 l.884-901); eye dissemination (CV137 slide 22); amphotericin B + azole or caspofungin (CV137 slide 7); fluconazole overuse -> resistance (CV140 l.908-922). OK after the germ-tube fix.
- Ebola presentation: headache/fever/sore throat/myalgia then GI + rash then bleeding (CV138 slide 30); Uganda outbreak (l.959-962); ELISA + RT-PCR with special care (slide 32). OK.
- Mumps presentation/management: parotid + orchitis + late meningitis, contagious 1-2 d before to 5 d after swelling, droplets/fomites, reportable (CV138 slides 24-25, l.716-766). OK after the workup edit.
- Cholera/measles/dengue/Ebola/hantavirus: summary-only claims removed (see edits above). Vitamin A for measles is NOT summary-only - it is in the CV138 transcript.
- VAP: CV139 Case 1 (asthma, intubated, 72 h, 101.5 F, WBC 20,000 80% PMN, bilateral infiltrate; viral excluded by neutrophilia); vanc/linezolid + antipseudomonal, de-escalate, HOB 30-45, less sedation, early extubation (CV139 slides 31-34, l.491-540). OK.
- HAP not ventilated: CV139 Case 2 (COPD, IV antibiotics for UTI, 56 h) + Case 5 (imipenem + aminoglycoside + vancomycin in shock); IV antibiotics within 90 d = MDR risk (slide 52). OK.
- Aspiration pneumonia: post-endoscopy/vomiting (CV139 slide 13), right side steeper, aerobes > anaerobes, chemical then bacterial (CV132 slide 20); clindamycin / amox-clav / metronidazole + beta-lactam (CV139 l.535-540); prevention bundle (CV139 slide 34). OK.
- Empyema: pus in pleural space, air-fluid level on film (CV139 slide 33, l.549-568). OK.
- Lung abscess: foul copious sputum, fever, chest pain, weight loss, clubbing, rule out carcinoma 10-15% in elderly, fibrosis = chronic (CV132 slides 21-22); anaerobe coverage (CV139). OK.
- Klebsiella pneumonia: alcohol + diabetes, upper lobe, thick bloody sputum, capsule, lactose fermenter on MacConkey, lung and liver abscess (CV130 slide 15; CV140 slides 32-34). OK.

## Batch 3 - CV126/CV150 COVID, buzzword trims (Mycoplasma, Hansen)

- **Severe COVID-19 with ARDS** | `management`
  - before: "with PEEP of at least 5 cm H2O,"
  - after: "with high PEEP,"
  - reason: CV126 slide 48 teaches 'low tidal volume and high PEEP' (PEEP <5 raised mortality vs >16); >=5 is only the Berlin minimum.
  - source: CV126 slides 37, 46-48
- **COVID-19 at high risk of progression (outpatient)** | `lectures`
  - before: ["CV150"]
  - after: ["CV150", "CV138"]
  - reason: CV138 teaches SARS-CoV-2 treatment: remdesivir, Paxlovid, molnupiravir (slide 42, 45).
  - source: CV138 slides 42/45, transcript l.1238-1242
- **Hospitalized COVID-19, not mechanically ventilated** | `lectures`
  - before: ["CV150"]
  - after: ["CV150", "CV138"]
  - reason: CV138 teaches SARS-CoV-2 treatment: remdesivir, Paxlovid, molnupiravir (slide 42, 45).
  - source: CV138 slides 42/45, transcript l.1238-1242
- **Mycoplasma pneumonia** | `workup`
  - before: "patchy bilateral interstitial infiltrates that look worse than the patient."
  - after: "patchy bilateral interstitial infiltrates."
  - reason: Stock phrase ('CXR looks worse than the patient') stacked with cold agglutinins on one card; kept the lab result, dropped the stock phrase.
  - source: CV141 slide 72; CV130 slide 19
- **Hansen disease (leprosy)** | `presentation`
  - before: "thick skin on cheeks and feet, sparse eyebrows, skin ulcers,"
  - after: "thickened skin on the cheeks and feet, skin ulcers,"
  - reason: Two classic signs stacked (thickened facial skin + eyebrow loss). Dropped the eyebrow loss; the slow skin nodules/plaques + ulcers + weakness after South America still point to one answer.
  - source: CV128 transcript l.1717-1727, l.2708-2730

### Batch 3 - items checked with no change (sources)
- Uncomplicated seasonal influenza: oseltamivir within 48 h, preferred incl. pregnancy, shortens 1-2 d, less shedding; zanamivir inhaled (avoid asthma/COPD), peramivir IV x1, baloxavir single oral dose (CV150 slides 5-7). Presentation: abrupt fever, dry cough, myalgia, Jan-April (CV129 slides 14-15). OK.
- Primary influenza viral pneumonia: gross/micro (heavy red firm lungs, thick alveolar walls, lymphocytes/monocytes, hyaline membranes) CV132 slides 13, 16; flu complications include pneumonia (CV129 l.530-533). OK.
- Secondary bacterial pneumonia after influenza: local influenza activity -> S. pneumoniae, S. aureus (CV141 slide 63); inpatient beta-lactam + macrolide or FQ, add MRSA cover if at risk (CV141 slide 67); superinfection (CV132 slide 12). OK.
- Severe COVID-19 with ARDS: Berlin criteria (CV126 slide 37), COVID autopsy = hyaline membranes + microvessel thrombosis, anticoagulation in severe cases, dexamethasone, iNO better SpO2 same mortality (CV126 slide 48); 4-8 mL/kg, judicious fluid, prone (CV126 slides 46-47). Anticoagulation phrased without a dose -> true both ways (current guidance: prophylactic dose in critically ill). OK after PEEP edit.
- COVID-19 high risk outpatient: risk factors (CV150 slide 37), nirmatrelvir-ritonavir q12h x5 d within 5 d, renal dosing, CYP3A4 boxed warning (CV150 slide 29, transcript l.1150-1168), remdesivir 3 d IV outpatient, molnupiravir alternative (slides 30, 36). OK.
- Hospitalized COVID-19 not ventilated: remdesivir IV daily ~5 d, only where infusion reactions can be treated, bradycardia, aminotransferases, chloroquine/HCQ interaction (CV150 slides 30, 36, 40). OK.
- COVID-19 rebound: CV150 slide 38 note. OK.
- Pneumococcal pneumonia: asplenia, sudden onset, lobar, lancet diplococci, optochin, urine antigen (CV130 slides 8-9); afebrile 48-72 h (CV132 slide 5); inpatient beta-lactam + macrolide, blood cultures in all admitted (CV141 slides 65, 67). OK after vaccine edit.
- Typical CAP (outpatient): CV141 slides 65, 67 (amox/doxy/macrolide; comorbidities -> amox-clav or cephalosporin + macrolide, or FQ; sputum Gram stain rarely done; blood cultures for inpatients). OK.
- Streptococcal pharyngitis: FACE (CV141 slide 41, l.544-571), bacitracin-sensitive beta-hemolytic on blood agar (CV130 slides 10-11), complications + do not treat asymptomatic carriers (CV141 l.518-543). OK.
- Epiglottitis: CV141 slide 50, l.668-697; H. flu chocolate agar factors V and X (CV130 slide 13). OK after workup edit.
- Legionella: CV130 slide 21/25 (hotel convention, diarrhea, confusion, Na 126, patchy infiltrates, urine antigen, BCYE + iron/cysteine, macrolide or quinolone, no person-to-person). OK.
- Mycoplasma: CV132 slide 17 (fever without chills, dry cough, diffuse crackles, closed communities, hemolysis) + transcript l.683-688 (effusion 10-20%); CV130 slide 18-19 (cold agglutinins, macrolide/doxy/FQ); CV128 (macrolides in pregnancy/peds). OK after workup edit.
- Q fever, inhalational anthrax, pneumonic tularemia, pneumonic plague, nocardiosis, actinomycosis: CV131 slides 10, 12, 20-25, 27-29 and transcript l.800-1083 (culture-negative endocarditis wording is standard; pleural effusions in inhalational anthrax standard). OK.
- Fungi (CV136/137): all management/ID facts matched to CV136 slides 7-17 + transcript l.410-929 and CV137 slides 4-22. OK apart from the aspergilloma trim and the CV132 lecture adds.
- PCP: CD4 <200 (CV132 slide 33), plasma-cell interstitial pneumonia with foamy exudate (CV132 slide 34), cysts on silver/FA stain, not culturable, TMP-SMX or pentamidine (CV137 slides 16-18), dapsone prophylaxis (CV128 slide 38). OK.
- URIs (CV141): Lemierre (slide 42, l.575-586), diphtheria (l.594-605; macrolide CV128 slide 36), sinusitis (slides 34-37), laryngitis (slide 45, l.606-622). OK.

## Batch 4 - corrections after re-reading Question Review / later transcript sections

- **Hansen disease (leprosy)** | `management`
  - before: "Dapsone (check G6PD; avoid with sulfa allergy) with rifampin and clofazimine (pink skin, QT; supplied through a national program). Thalidomide for a severe painful nodular inflammatory reaction, with pregnancy tests and contraception."
  - after: "Dapsone (check G6PD; avoid with sulfa allergy) with rifampin and clofazimine (pink skin, QT; from a national program). Thalidomide for a severe painful nodular inflammatory reaction: pregnancy tests and two forms of birth control."
  - reason: CORRECTION of batch 1: 'two forms of birth control' IS in the CV128 Question Review transcript (l.2424-2431), with pregnancy tests at start and during therapy - restored; trimmed 'supplied through' to fit 240.
  - source: CV128 transcript l.1991-2006, l.2424-2431; slide 42
- **Aspergilloma** | `workup`
  - before: "Chest CT: round solid mass inside an old right upper lobe cavity, with a thin rim of air between mass and wall. Culture: septate hyphae branching at acute angles; spores in radiating chains."
  - after: "Chest CT: round solid mass inside an old right upper lobe cavity; the mass shifts when he lies prone. Culture: septate hyphae branching at acute angles; spores in radiating chains."
  - reason: CORRECTION of batch 2: mobility IS in CV137 (transcript l.384-385 'shift position in the cavity when a patient is moved'); the air-rim phrase is the banned air-crescent metaphor paraphrased. Kept the lecture's point, dropped the air rim - still one sign, not two.
  - source: CV137 slide 10, transcript l.380-386

### Correction note on the pneumococcal edit (batch 2)
- Pneumococcal pneumonia `management`: the revaccination rule ("before 65, repeat 5 years later or at 65") IS taught by the CV141 lecturer (transcript l.1028-1047), not summary-only as logged. It is dated (current schedule: one conjugate dose, PCV20/PCV21, no 5-year repeat), so the removal stands under the "outdated -> true both ways" rule. Source: CV141 transcript l.1028-1047, slide 69.

## Batch 5 - strict-rule sweep of remaining CV129/138/140 vignettes

- **Herpangina** | `presentation`
  - before: "4-year-old at a summer day camp with 1 day of sudden fever and a sore throat; drinks little as swallowing hurts. T 39.4 C, HR 132; a dozen painful vesicles and shallow ulcers with red rims on the soft palate, uvula and tonsillar pillars; gums, lips, palms and soles normal."
  - after: "4-year-old at a summer day camp with 1 day of fever and a sore throat; drinks little as swallowing hurts. T 39.4 C, HR 132; a dozen painful sores at the back of the mouth and throat only; gums, lips, palms and soles normal."
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: lesion morphology (vesicles with red rims) and the soft palate/uvula/pillars map are summary-only; CV129 says only 'sores in the back of the mouth and the throat along with a fever'. Posterior-only + no hand/foot rash still separates it from HFMD.
  - source: CV129 transcript l.157-164; cv129.file.js
- **Hand-foot-mouth disease** | `presentation`
  - before: "shallow painful ulcers on the tongue and buccal mucosa; tender, non-itchy red macules and small vesicles on the palms and soles."
  - after: "painful ulcers inside the mouth; non-itchy red spots and small blisters on the palms and soles."
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: 'tender' and the tongue/buccal map are not in CV129 (slide: non-pruritic rash of hands and feet, painful oral ulcers; transcript: vesicular rash).
  - source: CV129 slide 7, transcript l.176-187
- **Pharyngoconjunctival fever** | `presentation`
  - before: "both conjunctivae injected with small follicles;"
  - after: "both conjunctivae red;"
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: follicles not in CV129/CV141.
  - source: CV129 slides 10-12, l.382-395; CV141 l.494-501
- **Mumps** | `presentation`
  - before: "painful swelling in front of and below both ears that lifts the earlobes;"
  - after: "painful swelling in front of and below both ears;"
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: earlobe lift not in CV138 (slide: swollen parotid, maybe submaxillary/sublingual glands).
  - source: CV138 slide 24, transcript l.716-738
- **Clostridioides difficile colitis** | `presentation`
  - before: "79-year-old woman, hospital day 9, on a broad-spectrum antibiotic for pneumonia. Three days of 8-10 watery, non-bloody stools a day with crampy lower abdominal pain. T 38.3 C, HR 106, BP 108/64; abdomen mildly distended and diffusely tender; WBC 24,000/uL."
  - after: "79-year-old woman, hospital day 9, on a broad-spectrum antibiotic for pneumonia. Three days of 8-10 watery, non-bloody stools a day. T 38.3 C, HR 106, BP 108/64; abdomen mildly distended and diffusely tender."
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: crampy lower abdominal pain and marked leukocytosis (WBC 24,000) are summary-only (cv138.file.js 'lower abdominal crampy pain... leukocytosis 15,000-50,000'); CV138/CV140 teach antibiotic-associated secretory diarrhea/colitis in inpatients.
  - source: CV138 l.148-209; CV140 slides 19-21, l.358-431
- **RSV bronchiolitis in an infant** | `management`
  - before: "Supportive: oxygen, nasal suction, fluids and feeding support; ribavirin only in select severe cases. Prevention for high-risk infants: a monoclonal antibody shot in the first RSV season, or vaccinating the mother in pregnancy."
  - after: "Supportive care; ribavirin only in select severe cases. Prevention for high-risk infants: a monoclonal antibody shot in the first RSV season, or vaccinating the mother in pregnancy."
  - reason: Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture: oxygen / nasal suction / feeding support are not in CV129 (slide: 'supportive').
  - source: CV129 slide 19, transcript l.738-753

## Batch 6 - qa fix

- **Hand-foot-mouth disease** | `presentation`
  - before: "painful ulcers inside the mouth;"
  - after: "painful oral ulcers;"
  - reason: qa leak rule: 'mouth' is in the answer's name; slide wording 'painful oral ulcers' used instead.
  - source: CV129 slide 7

## Final status
- 68 correlates checked; 32 items changed (45 field edits incl. 2 corrections). qa.py: 0 FAIL, 0 WARN; crosscheck.py (D vs 192 correlates in A/C/E/F): no near-duplicate hits.
- Factual: candidemia "no germ tube = fluconazole-resistant" removed (wrong); measles "lingers 2 h" -> survives on surfaces 2 h; severe COVID "PEEP >=5" -> high PEEP (lecture); dengue "no vaccine" and pneumococcal 5-year revaccination dropped as dated (true both ways); Ebola monoclonals named without approved/experimental status.
- Lecture lists: CV141 off herpangina; CV138 off anthrax, tularemia, Legionella, VRE; CV131 onto MRSA; CV140 onto Klebsiella; CV132 onto histo, blasto, both cocci items; CV138 onto outpatient + hospitalized COVID.
- Latent-TB regimen: INH+RIF x3 mo with RIF x4 mo / INH x9 mo as alternatives - agrees with CV128 slide 9, CV131 slide 17 and CV138 l.244-246. No change.
- Cross-fragment avoid entries naming C/F items (Acute respiratory distress syndrome) left alone. No new avoid pairs added (C's lobar-pneumonia items already avoid Pneumococcal / Aspiration / Typical CAP; C's silicosis+TB already avoids Secondary TB).
