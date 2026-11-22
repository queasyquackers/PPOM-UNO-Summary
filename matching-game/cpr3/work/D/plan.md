# Author D plan - correlates CV127-132, CV136-141, CV150 (COVID/flu cases)

Output key: `correlates`. Parts: part01.json ... (~5 items each). Join: join.py -> fragments/D.json.

Order of work: TB block (127/128/131/132/138) -> viruses (129/150) -> bacteria (130/131) ->
pneumonia settings (132/139/140/141) -> fungi (136/137) -> nosocomial (140/138) -> emerging (138) -> URIs (141).

## Items (name | lectures | nearest differential -> separating feature)
| Latent TB infection | CV127,CV128,CV131 | primary TB / active TB -> no symptoms, clear film, sputum negative, test positive |
| Primary pulmonary TB | CV132,CV127,CV131 | latent TB, secondary TB -> child/new contact, hilar node + mid/lower zone infiltrate, no cavity |
| Secondary (reactivation) TB (merged with "Active TB" treatment case CV128) | CV132,CV127,CV128,CV131 | MDR-TB -> first episode, apical cavity; lung abscess -> apical, months, night sweats, AFB |
| Miliary TB | CV127,CV132,CV131 | MAC (CD4<50, alk phos, no nodules), histo -> innumerable 1-2 mm nodules both lungs |
| Tuberculous lymphadenitis | CV127 | sarcoidosis (bilateral hilar, noncaseating) / lymphoma -> posterior cervical/supraclavicular node, caseating + AFB |
| MDR/XDR TB | CV138,CV128,CV131 | reactivation TB -> prior incomplete treatment, resistance on susceptibility, BPaL |
| Disseminated MAC in advanced HIV | CV128 | miliary TB -> CD4<50, alk phos up, anemia, no miliary nodules; macrolide + ethambutol |
| Hansen disease | CV128 | (no skin neighbour) -> slow nodules/plaques, eyebrow loss, weakness; dapsone/rifampin/clofazimine |
| Hand-foot-mouth disease | CV129 | herpangina -> palm/sole rash + anterior oral ulcers; low fever <101 F |
| Herpangina | CV129,CV141 | HFMD -> posterior palate/pillars only, high fever, no rash |
| Common cold | CV129,CV141 | influenza -> afebrile adult, gradual, clear rhinorrhea, no myalgia |
| Pharyngoconjunctival fever | CV129,CV141 | strep pharyngitis -> conjunctivitis + pool/camp |
| Croup | CV141,CV129 | epiglottitis -> 3 mo-5 y, gradual, URI prodrome, no drooling, subglottic narrowing |
| RSV bronchiolitis | CV129 | asthma (C) -> infant <1 y, winter, wheeze + crackles, URI prodrome |
| Uncomplicated seasonal influenza | CV150,CV129 | common cold -> abrupt high fever, myalgia; COVID outpatient -> no comorbidity, oseltamivir |
| Primary influenza viral pneumonia | CV132,CV129 | secondary bacterial -> continuous progression day 3, no purulent sputum, diffuse not lobar |
| Secondary bacterial pneumonia after influenza | CV141,CV132 | primary viral -> improvement then relapse with purulent sputum, lobar, GPC clusters |
| Severe COVID-19 with ARDS | CV129,CV126,CV138 | ARDS from sepsis (F) -> viral prodrome day 7-10, home antigen +, dexamethasone |
| COVID-19 high risk outpatient | CV150 | influenza -> home antigen test, comorbidities, 5-day window; nirmatrelvir-ritonavir |
| Hospitalized COVID-19 not ventilated | CV150 | severe COVID ARDS -> 2 L nasal cannula, not intubated; remdesivir |
| COVID-19 rebound | CV150 | outpatient COVID -> symptoms return after course + negative test |
| Pneumococcal pneumonia | CV130,CV132,CV141 | typical CAP / Klebsiella -> asplenia, sudden, one whole lobe, lancet diplococci |
| Streptococcal pharyngitis | CV141,CV130 | PCF/herpangina/diphtheria -> FACE 4, exudate, no cough, no conjunctivitis |
| Epiglottitis | CV141,CV130 | croup -> unvaccinated, hours, toxic, drooling, head forward |
| Pertussis | CV130,CV138,CV128 | asthma/croup -> vaccinated child (waning), catarrhal then paroxysmal, lymphocytosis |
| Legionella pneumonia | CV130,CV141,CV138 | mycoplasma -> older smoker/drinker, hotel water, diarrhea, confusion, Na 126 |
| Mycoplasma pneumonia | CV132,CV130,CV141,CV128 | Legionella -> young, barracks, gradual, no chills, cold agglutinins; CAP -> film worse than patient |
| Klebsiella pneumonia | CV130,CV139,CV141 | aspiration / pneumococcal -> heavy drinker + diabetes, upper lobe, bloody sticky sputum, encapsulated GNR |
| Typical CAP (outpatient, treatment case) | CV141,CV132 | pneumococcal -> avoid (cannot be separated: pneumococcus is the usual cause); healthy outpatient, amoxicillin/doxy/macrolide |
| Aspiration pneumonia | CV139,CV132,CV141 | lung abscess -> days after a witnessed event, RLL infiltrate, no cavity; Klebsiella -> stroke/dysphagia |
| Lung abscess | CV132,CV139,CV141 | reactivation TB -> foul sputum, bad teeth, AFB negative; aspiration -> weeks, cavity |
| C. difficile colitis | CV140,CV138 | (no neighbour in D; cholera -> no antibiotics/hospital, rice stool) -> inpatient on antibiotics, WBC 24k, toxin PCR |
| MRSA infection | CV140,CV138,CV139 | secondary bacterial pneumonia -> skin abscess in athlete; GPC clusters + cefoxitin resistance |
| VRE infection | CV140,CV138,CV128 | candidemia -> GPC chains bile-esculin, vanc failure; linezolid |
| Pseudomonas nosocomial infection | CV140,CV131,CV132,CV139 | VAP/HAP -> burn unit, oxidase+ non-fermenter, blue-green pigment |
| Candidemia | CV140,CV137 | VRE -> TPN, abdominal surgery, yeast in blood, retina |
| VAP | CV139,CV140,CV132 | HAP -> intubated, 72 h, ET secretions; prevention bundle |
| HAP not ventilated | CV139,CV132,CV140 | VAP -> never intubated, 56 h after admission, IV abx within 90 d -> triple cover |
| Empyema | CV139 | lung abscess -> pleural collection with air-fluid line reaching chest wall, pus on tap |
| PCP in HIV | CV137,CV132,CV128 | MAC/crypto -> CD4 140, exertional desaturation, cysts on silver stain, TMP-SMX |
| Chronic mucocutaneous candidiasis | CV137 | candidemia -> child, recurrent superficial only, IL-17 |
| Primary pulmonary coccidioidomycosis (split) | CV136,CV141 | histo -> SW desert dust, shin nodules, spherules |
| Disseminated coccidioidomycosis (split) | CV136 | blasto -> Filipino, 3rd-trimester pregnancy, SW, spherules in skin, meninges |
| Histoplasmosis | CV136,CV141 | blasto -> bat caves Ohio/Mississippi valley, tiny yeasts inside macrophages |
| Blastomycosis | CV136 | histo -> riverbanks, wart-like skin plaques + bone, broad-based bud; no management (same as histo) |
| Paracoccidioidomycosis | CV136 | blasto -> Brazilian farmer, oral/lip/nasal ulcers, multiple narrow buds |
| Talaromycosis | CV136 | disseminated histo / crypto / MAC -> SE Asia + HIV, skin lesions, septate elongated yeast |
| ABPA | CV137 | asthma / eosinophilic pneumonia (C) -> asthmatic with brown plugs, IgE 2,800, mold-specific IgE, hyphae in plugs |
| Aspergilloma | CV137 | reactivation TB -> old cavity, hemoptysis only, mobile mass with air rim |
| Invasive aspergillosis in neutropenia | CV137 | mucormycosis -> ANC 80 after chemo, galactomannan, septate acute-angle hyphae |
| Cryptococcal meningitis in HIV | CV137,CV132 | PCP/talaromycosis -> pigeons, headache/confusion, capsule, CRAg |
| Rhino-orbital-cerebral mucormycosis | CV137,CV141 | invasive aspergillosis -> DKA, sinus->orbit, black palate, nonseptate right-angle hyphae |
| Q fever | CV131,CV141 | tularemia/anthrax -> sheep birthing, headache, hepatitis, Gram stain empty; doxycycline |
| Inhalational anthrax | CV131,CV138 | plague -> wool sorter, widened mediastinum, large GPR with spores; cipro |
| Pneumonic tularemia | CV131,CV141,CV138 | plague -> rabbit skinning, coccobacilli, agglutination; streptomycin |
| Pneumonic plague | CV131 | tularemia -> prairie dogs/fleas, contact with coughing patient, bipolar GNR, fulminant |
| Pulmonary nocardiosis | CV131 | actinomycosis -> transplant, soil, brain lesion, weakly acid-fast aerobic filaments; sulfonamide |
| Actinomycosis | CV131 | nocardiosis -> dental extraction, draining jaw tract, yellow grains, anaerobic; penicillin |
| Cholera | CV138 | C diff -> disaster camp, painless liters/hour, no fever; rehydration |
| Measles | CV138,CV140 | dengue -> unvaccinated, 3 Cs, face-down rash, buccal spots; airborne |
| Dengue | CV138 | measles/Ebola -> SE Asia, retro-orbital + bone pain; supportive, second serotype shock |
| Ebola/Marburg | CV138 | dengue/hantavirus -> African outbreak exposure, GI then bleeding, body-fluid spread |
| Hantavirus pulmonary syndrome | CV138,CV141 | severe COVID ARDS / plague -> rodent droppings in closed cabin, myalgia then edema, no bleeding |
| Lemierre syndrome | CV141 | peritonsillar/strep -> sore throat then septic, IJ clot, anaerobic GNR |
| Diphtheria | CV141,CV128 | strep pharyngitis -> unvaccinated, exudate spreading within minutes |
| Acute bacterial sinusitis | CV141 | common cold -> >10 days/2 weeks, facial pain bending forward; mucor -> no diabetes/necrosis |
| Mumps (ADDED) | CV138 | measles -> parotid swelling, orchitis; IgM |
| Acute viral laryngitis (ADDED) | CV141 | croup/epiglottitis/vocal cord paralysis (C) -> adult, acute hoarseness after URI, no stridor, red swollen cords moving normally |
