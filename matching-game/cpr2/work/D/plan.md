# D plan - bugs (all) + correlates CV105-110, CV112

Name-token rule (qa.py): every word >3 letters of the answer's name (and, for bugs, the
first 5 letters of any word >6 letters) is banned from that item's cards. Checked per row.

## Bugs (one row = one organism-disease pairing). Nearest bug-differential -> separating feature

| # | Organism | Disease label (draft) | Lectures | Nearest differential | Separator (presentation / micro) |
|---|---|---|---|---|---|
| 1 | Staphylococcus aureus | Acute tricuspid endocarditis in a person who injects drugs | CV105, CV108, CV91 | P. aeruginosa / Candida IE in PWID | days-long course, injection-site abscesses, multiple cavitating lung nodules; micro coagulase+ beta-hemolytic clusters |
| 2 | Staphylococcus aureus | Infected (mycotic) aortic aneurysm | CV78 | T. pallidum aortitis | weeks-old bacteremia, fever, rapidly growing saccular infrarenal aneurysm vs decades-later ascending dilation |
| 3 | Staphylococcus epidermidis | Early prosthetic valve endocarditis (within 2 months) | CV105, CV91, CV108 | Corynebacterium diphtheroids; viridans late PVE | 6 weeks post-op, indolent; micro coagulase-negative, novobiocin-sensitive, gamma; avoid diphtheroids |
| 4 | Viridans streptococci | Subacute endocarditis on a damaged valve after dental work | CV105, CV108, CV91 | NVS, HACEK (same portal) | cultures grow in 24-48 h; alpha-hemolytic, optochin-resistant, bile-esculin negative, dextran |
| 5 | Viridans streptococci | Late prosthetic valve endocarditis (more than 1 year) | CV91 | S. epidermidis early PVE | valve placed 3 years ago; dental cleaning |
| 6 | Streptococcus gallolyticus (S. bovis) | Endocarditis pointing to a colorectal tumor | CV105, CV108 | Enterococcus | iron-deficiency anemia, heme+ stool, no instrumentation; micro bile-esculin+, no 6.5% NaCl growth, PYR- |
| 7 | Enterococcus faecalis | Endocarditis after urinary or bowel instrumentation | CV105, CV108 | S. gallolyticus | TURP/catheter 3 weeks earlier; micro PYR+, grows 6.5% NaCl |
| 8 | Nutritionally variant streptococci | Slow-growing endocarditis after oral trauma (needs B6) | CV105, CV108 | viridans, HACEK | routine bottles no growth; micro satellites around S. aureus streak, pyridoxal; avoid HACEK on presentation |
| 9 | Corynebacterium species (diphtheroids) | Device endocarditis from skin-flora club-shaped rods | CV105 | S. epidermidis | pacemaker/valve; micro club-shaped GP rods, Loeffler; avoid S. epidermidis |
| 10 | Listeria monocytogenes | Foodborne bacteremia in a pregnant or immunosuppressed host | CV105, CV108 | GBS neonatal | soft cheese, pregnancy/prednisone; micro GP rod, tumbling motility, cold growth |
| 11 | HACEK group | Slow-growing gram-negative endocarditis in a non-drug user | CV105, CV108, CV91 | NVS, viridans | periodontitis, bottles flag only on day 10; micro GN pleomorphic bacilli, CO2-loving; avoid NVS |
| 12 | Coxiella burnetii | Culture-negative endocarditis after livestock exposure | CV105, CV108 | Bartonella quintana | sheep farm / lambing, damaged valve; micro obligate intracellular, phase I IgG, PCR |
| 13 | Bartonella quintana | Culture-negative endocarditis in a homeless person with lice | CV105 | Coxiella | homelessness, body lice, alcohol use; micro facultative intracellular in RBC/endothelium, Warthin-Starry/serology |
| 14 | Bartonella henselae | Cat scratch disease | CV105 | (none in set) | kitten scratch, papule then tender regional node |
| 15 | Legionella pneumophila | Severe atypical lung infection from contaminated water | CV105 | S. pneumoniae, Mycoplasma | older smoker, hotel/cooling tower, diarrhea, Na 127, confusion; micro BCYE, urine antigen |
| 16 | Pseudomonas aeruginosa | Gram-negative endocarditis in injection drug use | CV105 | S. aureus / Candida PWID | dissolves drug in tap water, fever persists on vancomycin; micro oxidase+ non-lactose, blue-green pigment, grape odor |
| 17 | Pseudomonas aeruginosa | Chronic mucoid airway infection in cystic fibrosis | CV109, CV112 | Aspergillus ABPA | adolescent CF, falling FEV1, green sputum, no eosinophilia |
| 18 | Candida albicans | Fungal endocarditis in heroin users (lemon juice) | CV105, CV107, CV108 | S. aureus PWID | dissolves brown heroin in lemon juice, white retinal lesions, large mass; micro yeast + pseudohyphae, germ tube |
| 19 | Aspergillus fumigatus | Endocarditis after valve surgery with sterile cultures | CV105, CV107, CV108 | Coxiella, Candida | post-op neutropenic/steroids, huge mass, femoral embolus with hyphae; micro septate acute-angle hyphae, conidiophores |
| 20 | Aspergillus fumigatus | Allergic bronchopulmonary disease in asthma or CF | CV112 | P. aeruginosa CF | eosinophils 1,600, IgE 2,800, brown plugs, central dilated bronchi |
| 21 | Streptococcus pyogenes | Acute rheumatic fever after untreated pharyngitis | CV106, CV107, CV94, CV91 | Borrelia (arthritis + PR change) | 3 weeks post sore throat, migratory large joints, apical murmur; micro beta, bacitracin-S, PYR+, ASO |
| 22 | Rickettsia rickettsii | Rocky Mountain spotted fever | CV106 | Borrelia | SE US dog tick, severe headache, rash wrists/ankles -> trunk incl palms/soles, plt 70k, Na 129; micro obligate intracellular GN, Giemsa, IFA |
| 23 | Trypanosoma cruzi | Acute Chagas disease (inoculation-site swelling) | CV106, CV107 | Chronic Chagas item | weeks after night bite, painless one-eyelid swelling, nodes, HSM; micro trypomastigotes on Giemsa blood smear |
| 24 | Trypanosoma cruzi | Chronic Chagas cardiomyopathy with megaesophagus | CV106, CV107, CV108, CV97 | Coxsackie myocarditis | decades after rural Latin America, dysphagia, RBBB, apical aneurysm; micro serology (low parasitemia), amastigote pseudocysts |
| 25 | Borrelia burgdorferi | Lyme carditis with fluctuating AV block | CV107, CV108, CV84, CV97 | S. pyogenes ARF | NE hiking, expanding rash at bite, facial palsy, block switches 1st-3rd degree in minutes; micro spirochete, Ixodes, EIA then Western blot |
| 26 | Corynebacterium diphtheriae | Toxin-mediated myocarditis after membranous pharyngitis | CV107, CV97 | Coxsackie myocarditis | unvaccinated, grey adherent tonsillar coat, neck swelling, block 10 days later; micro tellurite black colonies, metachromatic granules, Elek, EF-2 toxin |
| 27 | Coxsackievirus B | Viral myocarditis in a young adult | CV107, CV108, CV97 | Trichinella, Chagas | young man 10 days after URI/diarrhea, troponin up, LVEF 35%, normal coronaries; micro picornavirus +ssRNA, PCR |
| 28 | Coxsackievirus B | Acute viral pericarditis | CV108, CV107 | M. tuberculosis pericardial disease | positional pain, rub, diffuse ST up + PR down, normal LV; acute |
| 29 | Coxsackievirus B | Epidemic pleurodynia (paroxysmal chest-wall muscle pain) | CV107 | pericarditis item | summer outbreak, stabbing chest/upper-abdominal muscle spasms, tender intercostals, normal ECG |
| 30 | Mycobacterium tuberculosis | Tuberculous pericarditis progressing to constriction | CV108, CV107, CV112 | Coxsackie pericarditis | endemic-region immigrant, weeks of sweats/weight loss, effusion then rigid calcified pericardium; micro acid-fast rods, caseating granulomas, high ADA |
| 31 | Streptococcus pneumoniae | Lobar pneumonia in an adult | CV104, CV109, CV108 | Legionella, Mycoplasma | abrupt single rigor, rusty sputum, one-lobe consolidation; micro GP lancet diplococci, alpha, optochin-S, bile-soluble, quellung |
| 32 | Respiratory syncytial virus | Bronchiolitis in an infant | CV109 | parainfluenza croup, C. trachomatis | 4-month-old, URI then wheeze + crackles, SpO2 90%; micro F protein syncytia, nasal PCR |
| 33 | Parainfluenza virus | Croup (laryngotracheobronchitis) | CV104, CV109 | Hib epiglottitis | 2-year-old, 2-day URI then harsh cough worse at night, inspiratory noise, nontoxic, T 38.1; micro HN glycoprotein |
| 34 | Haemophilus influenzae type b | Epiglottitis in an unimmunized toddler | CV109 | parainfluenza | unvaccinated, 2-hour onset, toxic, T 39, drooling, no cough, clear lungs; micro X+V, chocolate, PRP capsule |
| 35 | Streptococcus agalactiae (group B) | Early-onset neonatal sepsis and pneumonia | CV109 | Listeria, E. coli | first 24 h, mother colonized, ROM 22 h, no intrapartum abx; micro beta, bacitracin-R, CAMP+, hippurate+ |
| 36 | Chlamydia trachomatis | Afebrile pneumonia of early infancy | CV109 | B. pertussis | 6-week-old, eye discharge at 2 weeks, repetitive short coughs, tachypnea, eosinophilia; micro obligate intracellular, NAAT, inclusions |
| 37 | Bordetella pertussis | Pertussis in an unvaccinated young infant | CV109, CV104 | C. trachomatis | 7-week-old, coughing fits then apnea/vomiting, afebrile, WBC 32k 80% lymphs; micro Regan-Lowe, PCR, toxin raises cAMP |
| 38 | Mycoplasma pneumoniae | Atypical pneumonia in a school-age child or teen | CV109 | S. pneumoniae, Legionella | 14-year-old, 1 week malaise/headache/dry cough, patchy interstitial CXR worse than exam; micro no wall, sterol membrane, cold agglutinins |
| 39 | Wuchereria bancrofti | Lymphatic filariasis (chronic limb lymphedema) | CV77 | (none) | South Asia farmer, years of firm non-pitting leg swelling not relieved by elevation; micro nocturnal microfilariae on Giemsa smear, mosquito |
| 40 | Treponema pallidum | Syphilitic aortitis (tertiary) | CV78 | S. aureus mycotic | 60s, untreated infection decades ago, ascending aortic dilation, AR murmur, linear calcification; micro spirochete, RPR + FTA-ABS |
| 41 | Trichinella spiralis | Helminthic myocarditis after undercooked meat | CV97, CV107 | Coxsackie myocarditis | bear/pork meat, myalgia, eyelid swelling, eosinophils 30%, CK up; micro encysted larvae in muscle biopsy |

Bug count planned: 41. Not done: E. coli neonatal (inseparable from GBS on presentation), nontypeable H. influenzae in bronchiectasis (no unique presentation), purulent pericarditis (S. pneumoniae vs S. aureus inseparable), parvovirus/adenovirus myocarditis (same card as Coxsackie), Toxoplasma myocarditis (named only).

## Correlates. Nearest differential (anywhere in ASSIGNMENTS) -> separating feature

| # | Name | Lectures | Nearest differential | Separator |
|---|---|---|---|---|
| 1 | Acute infective endocarditis in a person who injects drugs | CV105, CV108, CV91 | Septic embolism (D); Tricuspid regurgitation (C); Fungal endocarditis (D) | 4 days, T 39.8, tricuspid holosystolic murmur louder on inspiration, multiple cavitating peripheral lung nodules; coag+ cocci |
| 2 | Subacute infective endocarditis after a dental procedure | CV105, CV108, CV91 | Colorectal-tumor IE (D); GN complicating IE (D) | prior rheumatic/MVP valve, extraction 5 weeks ago, 6 weeks low-grade temp, splenomegaly; alpha-hemolytic chains, bile-esculin neg |
| 3 | Prosthetic valve endocarditis | CV105, CV91 | Fungal endocarditis (D) | 7 weeks after mechanical AVR, low-grade temp, new paravalvular leak, ring abscess, PR lengthening; coag-negative staph; repeat surgery |
| 4 | Endocarditis with an occult colorectal tumor | CV105, CV108 | Subacute dental IE (D) | 72-year-old, no dental work, Hb 9.4 MCV 71, ferritin 8, guaiac+; bile-esculin+, no 6.5% NaCl growth; colonoscopy |
| 5 | Culture-negative endocarditis | CV105, CV108 | NBTE (D); Libman-Sacks (C) | febrile sheep farmer with bicuspid valve; bottles sterile 7 days; phase I IgG 1:1,600 |
| 6 | Fungal endocarditis | CV105, CV107, CV108 | Prosthetic valve IE (D); Septic embolism (D) | months of TPN via central line / broad antibiotics, 2.8 cm mass, embolus to femoral artery; yeast + pseudohyphae; valve surgery + antifungal |
| 7 | Glomerulonephritis complicating endocarditis | CV105 | Goodpasture / GPA (B) | known subacute IE, cola urine, RBC casts, low C3, no lung hemorrhage, ANCA/anti-GBM negative |
| 8 | Septic embolism | CV105, CV91 | Embolic stroke from carotid (B); Acute limb ischemia (C); PWID IE (D) | mitral mass + T 38.9, sudden LUQ pain (spleen) + flank pain/hematuria (kidney), painless sole macules, nail-bed streaks |
| 9 | Nonbacterial thrombotic (marantic) endocarditis | CV105, CV91, CV108 | Libman-Sacks (C); Trousseau (B); Culture-negative IE (D) | afebrile metastatic pancreatic mucinous adenocarcinoma, small masses on closure line of normal mitral leaflets, stroke + renal infarct, cultures sterile |
| 10 | Acute rheumatic fever | CV106, CV107, CV94, CV91 | Kawasaki (E); Lyme carditis (D) | 9-year-old, 3 weeks post sore throat, migratory knee/ankle/wrist, apical murmur, ring rash, PR 0.24, ASO 800 |
| 11 | Rocky Mountain spotted fever | CV106 | Kawasaki (E); meningococcemia (not in set) | NC camping, 7 days later fever + severe headache, macules wrists/ankles spreading to trunk, plt 68k, Na 129; doxycycline at once |
| 12 | Chagas cardiomyopathy | CV106, CV107, CV108, CV97 | Dilated cardiomyopathy idiopathic (E); Alcoholic CM (E); ARVC (E) | Bolivian village childhood, dysphagia + constipation, RBBB + LAFB, apical aneurysm, serology + |
| 13 | Lyme carditis | CV107, CV84, CV108 | Mobitz II / third-degree block (C) | Connecticut summer hike, expanding rash 3 weeks ago, facial palsy, block alternating 1st -> 3rd degree within minutes; ceftriaxone, temporary pacing |
| 14 | Diphtheritic myocarditis | CV107, CV97 | Viral myocarditis (D); third-degree block (C) | unvaccinated traveller, grey adherent tonsillar coat that bleeds, marked neck swelling, AV block 10 days later, nasal voice; antitoxin |
| 15 | Viral myocarditis | CV108, CV107, CV97 | STEMI (B); Hypersensitivity / Giant cell myocarditis (E); Takotsubo (E) | 24-year-old man 10 days after URI/diarrhea, CRP very high vs troponin, LVEF 35% global, normal coronaries, lymphocytic infiltrate |
| 16 | Acute pericarditis | CV108, CV107 | Early post-MI pericarditis (B); Dressler (B); STEMI (B) | 30-year-old after cold, sharp pain worse supine/inspiration, better leaning forward, 3-part scratchy sound, diffuse ST up + PR down, normal troponin |
| 17 | Cardiac tamponade | CV108, CV107 | Free wall rupture (B); Massive PE (B); Constrictive pericarditis (D) | lung-cancer patient, BP 84/60, JVP 15, quiet heart sounds, inspiratory SBP fall 18, low-voltage alternating QRS; pericardiocentesis; avoid free wall rupture on management |
| 18 | Constrictive pericarditis | CV108, CV107 | Restrictive CM (E); Cardiac amyloidosis (E); Tamponade (D) | prior TB/mediastinal radiation, ascites + edema, neck veins rise on inspiration, early diastolic sound, CT pericardium 7 mm calcified, normal wall thickness, BNP modest; pericardiectomy |
| 19 | Cardiac myxoma | CV107, CV91, CV99 | Rheumatic mitral stenosis (C); Papillary fibroelastoma (D) | 45 F, dyspnea and lightheaded when upright, weight loss, ESR 70, low-pitched early diastolic sound; Carney: spotty pigmentation, Cushingoid -> avoid word; LA mass on fossa ovalis stalk |
| 20 | Cardiac fibroma (Gorlin syndrome) | CV107 | Rhabdomyoma (D) | child/young adult with multiple basal cell carcinomas, jaw cysts, palmar pits, single LV free-wall mass, VT; PTCH1 |
| 21 | Papillary fibroelastoma | CV107 | Myxoma (D); NBTE (D); Embolic stroke from carotid (B) | 68-year-old, TIA, afebrile, cultures sterile, 9 mm mobile frond mass on aortic leaflet with stalk, carotids clean; surgical excision (left-sided) |
| 22 | Cardiac rhabdomyoma (tuberous sclerosis) | CV107 | Fibroma (D) | fetal echo / infant with multiple ventricular masses, infantile spasms, hypopigmented macules; regress spontaneously |
| 23 | Cystic fibrosis | CV109, CV110, CV112 | Primary ciliary dyskinesia (D); A1AT (D) | 15-month-old, wet cough, 2 pneumonias, weight <3rd centile, greasy stools; sweat Cl 92; IRT up |
| 24 | Pediatric asthma exacerbation | CV109, CV104 | Bronchiolitis (D); Status asthmaticus (D) | 9-year-old with eczema/allergic family, 3 days after cold, RR 38, SpO2 90%, expiratory wheeze everywhere, responds to albuterol+ipratropium; nightly symptoms classify severity |
| 25 | Meconium aspiration syndrome | CV109 | Neonatal RDS (E); TTN | 41-week, thick green fluid, Apgar 5/6, grunting, hyperinflation with patchy streaks, preductal-postductal SpO2 gap; ventilation, surfactant, iNO, ECMO |
| 26 | Bronchiolitis | CV109 | Pediatric asthma (D); Croup (E) | 4-month-old, 3 days rhinorrhea then wheeze + crackles, T 100.2 F, SpO2 90%, first wheeze, no atopy; supportive suction/O2, no bronchodilator/steroid/abx |
| 27 | Community-acquired pneumonia in a child | CV109 | Bronchiolitis (D); Lobar pneumonia in adult (E) | 9-year-old, T 102.5 F, chills, wet cough, RLL dullness, bronchophony, crackles; lobar opacity; age-directed antibiotics |
| 28 | Epiglottitis | CV109 | Croup (E) | unimmunized 2-year-old, 2 h onset, T 102 F, toxic, muffled cry, inspiratory noise, clear lungs, no cough; airway in OR first |
| 29 | Turner syndrome | CV110 | Noonan (D); Coarctation (E) | 15 F short, no breast development, wide-spaced nipples, low hairline, BP arm 150 vs leg 100, normal school performance; FSH high; 45,X |
| 30 | Williams syndrome | CV110 | 22q11 deletion (E); Supravalvular AS? | 3-year-old overly friendly, broad forehead, full lips, Ca 12.4, systolic murmur above aortic valve; FISH 7q11.23 elastin |
| 31 | Noonan syndrome | CV110, CV97 | Turner (D); HCM (E) | boy, short, webbed neck, ptosis, undescended testes, bleeding, pulmonary valve stenosis; normal karyotype; PTPN11 |
| 32 | CHARGE syndrome | CV110 | 22q11 deletion (E) | newborn cannot pass nasal tube both sides, iris/retinal gap, cup-shaped ears, failed hearing screen, micropenis, heart defect; CHD7 |
| 33 | Alpha-1 antitrypsin deficiency | CV112 | Centriacinar emphysema (D); COPD exacerbation (E) | 45-year-old never-smoker, 6 y dyspnea, lower-lobe lucency, ALT up / cirrhosis; PiZZ, low serum level |
| 34 | Spontaneous pneumothorax from paraseptal emphysema | CV112 | Tension/other pneumothorax; Flail chest (E) | tall 20-year-old man, sudden dyspnea while jogging, absent breath sounds right, hyperresonant, shift; apical subpleural bullae; chest tube |
| 35 | Aspirin-exacerbated respiratory disease | CV112 | Status asthmaticus (D); Pediatric asthma (D); Upper airway cough (E) | 38-year-old with nasal polyps + anosmia, wheeze and hives 40 min after ibuprofen; eosinophilia; avoid NSAIDs, montelukast |
| 36 | Status asthmaticus | CV112 | Pediatric asthma exacerbation (D); COPD exacerbation (E) | 3 h of nebulizers + IV steroid no relief, can speak 2 words, quiet chest, PaCO2 rising 48, pH 7.30; intubation |
| 37 | Allergic bronchopulmonary aspergillosis | CV112, CV109 | Bronchiectasis (D); CF (D) | worsening wheeze, brown plugs, eosinophils 1,400, IgE 2,600, fleeting infiltrates, central dilated bronchi; steroids + itraconazole |
| 38 | Bronchiectasis | CV112 | CF (D); PCD (D); Chronic bronchitis (D) | 52-year-old after childhood necrotizing pneumonia/TB, daily cupfuls foul sputum, morning paroxysms, hemoptysis, coarse crackles; CT airways larger than artery out to pleura; sweat Cl normal |
| 39 | Primary ciliary dyskinesia (Kartagener syndrome) [ADD] | CV112 | CF (D); Bronchiectasis (D) | heart sounds loudest right chest, chronic sinusitis/otitis, infertile with immotile sperm, sweat Cl normal; absent dynein arms |
| 40 | Centriacinar emphysema [ADD - suggested] | CV112 | COPD exacerbation (E); A1AT (D); Chronic bronchitis (D) | thin 60-year-old 40 pack-years, progressive dyspnea, little sputum, pursed lips, upper-lobe lucency, DLCO 40%, PaCO2 34; avoid COPD exacerbation |
| 41 | Chronic bronchitis [ADD - suggested] | CV112 | Chronic respiratory acidosis (B); COPD exacerbation (E) | heavy smoker, productive cough most days for >3 months in 3 consecutive years, obese, cyanotic, ankle edema, Hct 56, DLCO normal; Reid index 0.7; avoid both |

Correlates planned: 41 (38 assigned + Kartagener + centriacinar emphysema + chronic bronchitis).
