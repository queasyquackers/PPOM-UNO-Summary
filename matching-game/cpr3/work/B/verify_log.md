# Verify log - fragment B (bugs, 104 items)

Verifier pass started. B.json checked against the author's last write (6:03 PM): no verifier
edits had been made before this log was started. Baseline qa.py: 0 FAIL, 0 WARN.
Rule applied: slides.txt + transcript.txt of an in-scope lecture are the authority; facts
found only in a summary are removed and listed under "Summary-only claims".

Format: #index item - field: before -> after (reason; source).

## CV129 (items 0-3, 5-9)
- #0 Coxsackievirus A / Hand-foot-mouth disease - **presentation**
  - before: "3-year-old at daycare in late August: 2 days of T 38.1 C, refusing to drink because of painful shallow ulcers on the tongue and inner cheeks. Tender, non-itchy red macules and 3-mm grey vesicles with red rims on palms and soles; they fade within a week without crusting."
  - after: "3-year-old at daycare in late August: 2 days of T 38.1 C, refusing to drink because of painful shallow ulcers on the tongue and inner cheeks. Tender, non-itchy red macules and 3-mm grey vesicles with red rims on palms and soles; they heal over 7-10 days without crusting."
  - reason: course aligned to slide 7 (self-limited, resolves 7-10 days); was 'within a week' (source: CV129 slide 7)
- #2 Rhinovirus / Common cold - **presentation**
  - before: "34-year-old kindergarten teacher in October: 2 days of sneezing, clear watery nasal discharge, blocked nose, scratchy throat and a dry cough. T 37.2 C, no chills or muscle aches; swollen pale nasal mucosa, no tonsillar exudate, eyes not red, lungs clear."
  - after: "34-year-old kindergarten teacher in October: 2 days of sneezing, clear watery nasal discharge, blocked nose, scratchy throat and a dry cough. T 37.2 C, mild body aches but no chills; red, swollen nasal mucosa, no tonsillar exudate, eyes not red, lungs clear."
  - reason: 'pale' swollen mucosa points to allergic rhinitis, not a cold; CV141 slide 28 lists myalgias among cold symptoms, so 'no muscle aches' replaced with 'mild body aches but no chills' (source: CV141 slides 28-29; CV129 slide 9)
- #3 Adenovirus / Pharyngoconjunctival fever - **micro**
  - before: "Naked icosahedral linear dsDNA; fiber knob binds the CAR receptor, penton base binds integrins; early proteins block apoptosis and lower MHC I; over 60 serotypes (3, 4, 7 airway and eye); hardy capsid survives in pool water; PCR or DFA"
  - after: "Naked icosahedral linear dsDNA; fiber binds the CAR receptor, penton base binds integrins for entry; early proteins block apoptosis and lower IFN-alpha and MHC I; over 60 serotypes (low numbers respiratory, 40/41 enteric); hardy capsid; PCR or immunofluorescence"
  - reason: serotypes '3, 4, 7 airway and eye' are summary-only (lecturer: low-numbered 1-3 respiratory, 40/41 enteric); 'DFA' replaced with the slide's immunofluorescence; IFN-alpha added from slide 11 (source: CV129 slides 10-12 + transcript)
- #5 Influenza A virus / Seasonal flu, uncomplicated - **lectures**
  - before: ["CV129", "CV150", "CV138", "CV140"]
  - after: ["CV129", "CV150", "CV138"]
  - reason: CV140 only names influenza as a droplet-precaution example; it does not teach the disease (source: CV140 slides 163, 219)
- #7 Parainfluenza virus / Croup (laryngotracheobronchitis) - **presentation**
  - before: "2-year-old boy in November: 2 days of nasal congestion and T 38.0 C, then a hoarse voice and a loud harsh cough, worse at night, with a high-pitched noise on breathing in when he cries. RR 36, SpO2 97%, no drooling. AP neck film: tapered narrowing just below the cords."
  - after: "2-year-old boy in November: 2 days of nasal congestion and T 38.0 C, then a hoarse voice and a loud harsh cough, worse at night, with a high-pitched noise on breathing in when he cries. RR 36, SpO2 97%, mild suprasternal retractions, no drooling; lungs clear."
  - reason: buzzword stacking: removed the AP-neck-film paraphrase of the steeple sign (card already carries the cough and stridor paraphrases) (source: CV141 slide 46; CV129 slide 15)
- #8 Respiratory syncytial virus / Bronchiolitis in an infant - **micro**
  - before: "Enveloped, nonsegmented (-) ssRNA pneumovirus; fusion (F) protein merges cells into multinucleated giant cells that shield it from antibody; survives 6 h on surfaces; antigen test or RT-PCR; anti-F monoclonals protect preterm infants"
  - after: "Enveloped, nonsegmented (-) ssRNA pneumovirus; fusion (F) protein spreads it cell to cell, merging cells into multinucleated syncytia; survives 6 h on surfaces; rapid antigen test or PCR; monoclonal antibodies and maternal vaccination protect infants"
  - reason: 'syncytia shield it from antibody' and 'anti-F' are summary-only; replaced with what the lecturer says (cell-to-cell spread, monoclonals for high-risk infants, maternal vaccination) (source: CV129 slides 18-19 + transcript)
- #8 Respiratory syncytial virus / Bronchiolitis in an infant - **lectures**
  - before: ["CV129", "CV141"]
  - after: ["CV129"]
  - reason: CV141 names bronchiolitis and RSV separately (croup remainder, antigen test) but never teaches RSV bronchiolitis (source: CV141 slides 3, 46, 65, 71)
- #9 SARS-CoV-2 / Viral pneumonia progressing to ARDS in the second week - **micro**
  - before: "Enveloped (+) ssRNA betacoronavirus, ~30 kb (largest RNA genome); spike binds ACE2 and needs host TMPRSS2/furin cleavage to fuse; bat reservoir, pangolin intermediate; spreads before symptoms; RT-PCR or antigen test"
  - after: "Enveloped (+) ssRNA betacoronavirus with the largest RNA genome; spike binds ACE2, then host TMPRSS2 cleaves it for membrane fusion; bat reservoir, pangolin intermediate host; 20-40% of infections asymptomatic; RT-PCR or home antigen test"
  - reason: '~30 kb' and 'furin' are summary-only; 'spreads before symptoms' restated as the slide's 20-40% asymptomatic; TMPRSS2 kept (CV150 slide 32), bat/pangolin kept (CV138 slide 42) (source: CV129 slides 20-22; CV150 slide 32; CV138 slide 42)
- #9 SARS-CoV-2 / Viral pneumonia progressing to ARDS in the second week - **presentation**
  - before: "67-year-old unvaccinated man with diabetes and obesity: 8 days of fever, cough and loss of smell and taste, then worsening breathlessness. RR 34, SpO2 84% on 6 L/min, PaO2/FiO2 140, bilateral crackles; CT: bilateral peripheral ground-glass opacities; echo: normal LV function."
  - after: "67-year-old unvaccinated man with diabetes and obesity: 8 days of fever, chills, sore throat and dry cough, then worsening breathlessness. RR 34, SpO2 84% on 6 L/min, PaO2/FiO2 140, bilateral crackles; CT: bilateral peripheral ground-glass opacities; echo: normal LV function."
  - reason: loss of smell and taste is summary-only (not on any slide or transcript) and a giveaway; replaced with slide-22 symptoms (chills, sore throat) (source: CV129 slide 22; CV150 slides 734-744 (obesity, diabetes risk))
- #3 Adenovirus / Pharyngoconjunctival fever - **micro**
  - before: "Naked icosahedral linear dsDNA; fiber binds the CAR receptor, penton base binds integrins for entry; early proteins block apoptosis and lower IFN-alpha and MHC I; over 60 serotypes (low numbers respiratory, 40/41 enteric); hardy capsid; PCR or immunofluorescence"
  - after: "Naked icosahedral linear dsDNA; fiber binds CAR, penton base binds integrins; early proteins block apoptosis, lower IFN-alpha and MHC I; over 60 serotypes (low numbers respiratory, 40/41 enteric); hardy capsid; PCR or immunofluorescence"
  - reason: shortened to the 240-char micro limit (same content) (source: -)
- #8 Respiratory syncytial virus / Bronchiolitis in an infant - **micro**
  - before: "Enveloped, nonsegmented (-) ssRNA pneumovirus; fusion (F) protein spreads it cell to cell, merging cells into multinucleated syncytia; survives 6 h on surfaces; rapid antigen test or PCR; monoclonal antibodies and maternal vaccination protect infants"
  - after: "Enveloped nonsegmented (-) ssRNA pneumovirus; F protein spreads it cell to cell, fusing cells into multinucleated syncytia; survives 6 h on surfaces; antigen test or PCR; monoclonals and maternal vaccination protect infants"
  - reason: shortened to the 240-char micro limit (same content) (source: -)
- #1 Herpangina, #6 primary influenza pneumonia: checked, no change (herpangina = CV129 transcript 'sores in the back of the mouth and throat with fever', CV141 lists Coxsackie A pharyngitis; influenza pneumonia: CV132 slides 15-16 superinfection/ARDS; pregnancy risk standard and in CV150 risk list). Influenza micro '8 segments' kept (standard; slide says segmented).


## CV130 / CV141 respiratory bacteria (items 10, 12, 18-20, 22-26)
- #18 Haemophilus influenzae / Epiglottitis in an unvaccinated child - **presentation**
  - before: "3-year-old girl whose parents declined all vaccines: well at dinner, then within 6 hours T 39.8 C, severe sore throat, muffled voice, soft high-pitched noise on breathing in. Sits leaning forward with chin thrust out, saliva running from her mouth, no cough; HR 168, SpO2 93%."
  - after: "3-year-old girl whose parents declined all vaccines: well at dinner, then within 6 hours T 39.8 C, severe sore throat, muffled voice and a soft high-pitched noise on breathing in. Sits upright and very still, saliva running from her mouth, no cough; HR 168, SpO2 93%."
  - reason: buzzword stacking: 'leaning forward with chin thrust out' is the tripod-position paraphrase on top of drooling; posture reduced to a plain observation (source: CV141 slide 50; CV130 slide 14)
- #20 Klebsiella pneumoniae / Cavitating upper-lobe lung infection in heavy drinking - **presentation**
  - before: "58-year-old man who drinks a pint of vodka daily, found asleep in a chair: 3 days of T 39.1 C and coughing thick, sticky, blood-streaked sputum. Film: dense right upper-lobe consolidation, the fissure sagging downward, with a 3-cm cavity; sputum: plump gram-negative rods."
  - after: "58-year-old man who drinks a pint of vodka daily, found asleep in a chair: 3 days of T 39.1 C and coughing thick, sticky, blood-streaked sputum. Film: dense right upper-lobe consolidation with a 3-cm cavity; sputum: plump gram-negative rods."
  - reason: buzzword stacking: removed 'fissure sagging downward' (the lecturer's named S sign / bulging fissure) - the sputum paraphrase, alcohol and cavity remain (source: CV140 slide 34 + transcript; CV130 slide 15)
- #22 Bordetella pertussis / Paroxysmal cough illness in an unimmunized infant - **micro**
  - before: "Small gram-negative aerobic coccobacillus; fastidious, grown on a charcoal or high-blood selective medium; PCR of a nasopharyngeal swab; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; three toxins, one raising cAMP"
  - after: "Small encapsulated gram-negative aerobic coccobacillus; fastidious, grows only on high-blood Bordet-Gengou medium; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; pertussis and adenylate cyclase toxins raise cAMP"
  - reason: 'charcoal' medium is not taught (slide: grows only on Bordet-Gengou); 'three toxins, one raising cAMP' was wrong - both pertussis toxin and adenylate cyclase toxin raise cAMP; PCR of NP swab not taught for pertussis (source: CV130 slide 16 + transcript; CV138 slide 16 + transcript)
- #22 Bordetella pertussis / Paroxysmal cough illness in an unimmunized infant - **lectures**
  - before: ["CV130", "CV138", "CV140"]
  - after: ["CV130", "CV138"]
  - reason: CV140 names pertussis only as a droplet-precaution example (source: CV140 slide 219)
- #25 Chlamydia psittaci / Lung infection acquired from pet birds - **micro**
  - before: "Obligate intracellular energy parasite with an elementary body and reticulate body cycle; wall low in muramic acid, so Gram stain is useless; birds are the reservoir; humans inhale dried droppings; serology or PCR, not culture"
  - after: "Obligate intracellular energy parasite with an elementary body and reticulate body cycle; wall low in muramic acid; too small and intracellular to Gram stain; birds are the reservoir, humans inhale dried droppings; PCR or serology"
  - reason: causal error: Gram stain fails because the cells are tiny and intracellular (lecturer), not because of the low-muramic-acid wall; 'not culture' dropped (not taught) (source: CV130 transcript (Chlamydophila section))
- #26 Legionella pneumophila / Severe lung infection with diarrhea, confusion, low sodium - **lectures**
  - before: ["CV130", "CV138", "CV140", "CV141"]
  - after: ["CV130", "CV141"]
  - reason: CV138 never mentions Legionella; CV140 lists it once as a non-ventilator nosocomial pneumonia, not this community/hotel disease (source: CV138 slides + transcript grep; CV140 slide 658)
- #10 S. pneumoniae sinusitis, #12 S. pyogenes pharyngitis, #19 H. influenzae COPD pneumonia, #23 Mycoplasma, #24 C. pneumoniae: checked against CV130 slides 8-20 + transcript and CV141 slides 33-41, 61; no change. Klebsiella micro 'VP and citrate positive' kept (CV152 teaches IMViC --++). Mycoplasma vs C. pneumoniae presentation kept apart by age (<30 per slide 18) and hemolysis; no avoid added.


## CV131 / CV140 nosocomial and zoonotic bacteria (items 14, 27-29, 31-34, 45-51)
- #14 Staphylococcus aureus / Necrotizing pneumonia after influenza - **lectures**
  - before: ["CV131", "CV132", "CV129", "CV130", "CV138", "CV141"]
  - after: ["CV131", "CV132", "CV130", "CV141"]
  - reason: CV129 never names S. aureus (flu complications listed generically); CV138 teaches MRSA as skin/nosocomial, not post-influenza pneumonia (source: CV129 transcript; CV138 slides 6-8; CV131 transcript (S. aureus with viral flu); CV141 slide 63)
- #27 Pseudomonas aeruginosa / Ventilator-associated pneumonia - **presentation**
  - before: "61-year-old man intubated 9 days for a head injury: new T 39.0 C, copious thick green secretions suctioned from the tube, SpO2 falling on rising FiO2. Film: new left lower-lobe infiltrate; tracheal aspirate grows 10^6 CFU/mL of a non-lactose-fermenting gram-negative rod."
  - after: "61-year-old man intubated 9 days for a head injury: new T 39.0 C, copious thick green secretions suctioned from the tube, SpO2 falling on rising FiO2. Film: new left lower-lobe infiltrate; tracheal aspirate grows 10^6 CFU/mL of an oxidase-positive, non-lactose-fermenting gram-negative rod."
  - reason: uniqueness: Acinetobacter and Klebsiella are also ventilator pathogens (CV140 slide 43); oxidase-positive separates it from Acinetobacter (oxidase-negative) (source: CV131 slide 5; CV140 slides 30, 36, 43)
- #28 Pseudomonas aeruginosa / Invasive wound sepsis in a burn unit - **presentation**
  - before: "29-year-old man 8 days after 40% body-surface flame burns: T 39.4 C, BP 84/50, and the graft edges now ooze a blue-green discharge with darkening of the surrounding skin. WBC 2,100/uL; blood cultures positive; the dressings smell sweet and fruity."
  - after: "29-year-old man 8 days after 40% body-surface flame burns: T 39.4 C, BP 84/50, and the graft edges now ooze a blue-green discharge with darkening of the surrounding skin. WBC 2,100/uL; blood cultures grow an oxidase-positive gram-negative rod."
  - reason: buzzword stacking: blue-green pus plus the 'sweet and fruity' (grape-like) odor paraphrase; odor removed, an oxidase result added (source: CV140 slides 30-31 + transcript (burn units))
- #31 Acinetobacter baumannii / Blast-wound and bone infection in a combat casualty - **micro**
  - before: "Gram-negative coccobacillus; strictly aerobic, non-motile, oxidase-negative and non-fermenting; catalase-positive; forms biofilm and survives up to 5 months on dry surfaces; resists quaternary ammonium disinfectants; often pan-resistant"
  - after: "Gram-negative coccobacillus; strictly aerobic, non-motile, oxidase-negative and non-fermenting; catalase-positive; forms biofilm and survives up to 5 months on dry surfaces; hard to clear with routine hospital disinfectants; often pan-resistant"
  - reason: 'resists quaternary ammonium disinfectants' is summary-only (lecturer: difficult to eradicate with the normal hospital disinfectants) (source: CV140 slides 36-37 + transcript)
- #29, #32, #33, #34, #45-#51: checked against CV131 slides 5-25 + transcript, CV140 slides 30-37; no change. #32 B. cepacia patient-to-patient spread on a CF ward is lecture-silent but standard; kept (avoid vs Pseudomonas already declared). #45 platelets 120,000 lecture-silent, standard for Q fever; kept. S. aureus 'ferments mannitol' confirmed CV140 slide 24.

- #27 Pseudomonas aeruginosa / Ventilator-associated pneumonia - **presentation**
  - before: "61-year-old man intubated 9 days for a head injury: new T 39.0 C, copious thick green secretions suctioned from the tube, SpO2 falling on rising FiO2. Film: new left lower-lobe infiltrate; tracheal aspirate grows 10^6 CFU/mL of an oxidase-positive, non-lactose-fermenting gram-negative rod."
  - after: "61-year-old man intubated 9 days for a head injury: T 39.0 C, thick green secretions suctioned from the tube, SpO2 falling on rising FiO2. Film: new left lower-lobe infiltrate; tracheal aspirate grows 10^6 CFU/mL of an oxidase-positive, non-lactose-fermenting gram-negative rod."
  - reason: shortened to the 280-char limit (source: -)
- #31 Acinetobacter baumannii / Blast-wound and bone infection in a combat casualty - **micro**
  - before: "Gram-negative coccobacillus; strictly aerobic, non-motile, oxidase-negative and non-fermenting; catalase-positive; forms biofilm and survives up to 5 months on dry surfaces; hard to clear with routine hospital disinfectants; often pan-resistant"
  - after: "Gram-negative coccobacillus; strictly aerobic, non-motile, oxidase-negative and non-fermenting; catalase-positive; forms biofilm and survives up to 5 months on dry surfaces; hard to clear with routine disinfectants; often pan-resistant"
  - reason: shortened to the 240-char limit (source: -)

## CV127 / CV128 / CV138 mycobacteria (items 35-40, 42-44)
- #35 Mycobacterium tuberculosis / Dormant infection with a positive blood test, clear film - **presentation**
  - before: "28-year-old medical student born in the Philippines, screened before clinical rotations: no cough, fever, night sweats or weight loss, weight stable. The blood assay is positive, the chest film is clear, and 3 induced sputum smears and cultures are negative."
  - after: "28-year-old medical student born in the Philippines, screened before clinical rotations: no cough, fever, night sweats or weight loss, weight stable, lungs clear on exam. The blood assay is positive, the chest film is clear, and an HIV test is negative."
  - reason: realism: three induced sputum samples are not part of the workup of an asymptomatic person with a clear film (CV127: latent = abnormal blood/skin test, normal chest film); replaced with exam and HIV status (source: CV127 slides 4, 27 + transcript (latent TB))
- #36 Mycobacterium tuberculosis / First infection in a child, with an enlarged hilar node - **presentation**
  - before: "4-year-old girl whose grandfather was hospitalized last month with a chronic cough: 3 weeks of low-grade fever and mild cough, weight down 1 kg. Film: a small peripheral opacity with a markedly enlarged node at the right hilum; biopsy of the node: necrotic granulomas."
  - after: "4-year-old girl whose grandfather was hospitalized last month with a chronic cough: 3 weeks of low-grade fever and mild cough, weight down 1 kg. Film: a small peripheral opacity with a markedly enlarged node at the right hilum; skin test 15 mm; early-morning gastric aspirate grows acid-fast rods."
  - reason: realism: a hilar node is not biopsied in a 4-year-old; lecture's pediatric route is gastric aspiration (CV127 slide 31) and the skin test is preferred under 5 years (slide 44) (source: CV127 slides 30-31, 44)
- #37 Mycobacterium tuberculosis / Reactivated apical lung disease with a cavity - **presentation**
  - before: "54-year-old man starting infliximab for rheumatoid arthritis, who had a positive skin test 20 years ago: 2 months of drenching night sweats, 7 kg weight loss and cough with blood-streaked sputum. Film: upper-lobe infiltrate with a 4-cm cavity; sputum smear positive."
  - after: "54-year-old man on infliximab for 4 months for rheumatoid arthritis, who had a positive skin test 20 years ago: 2 months of drenching night sweats, 7 kg weight loss and cough with blood-streaked sputum. Film: upper-lobe infiltrate with a 4-cm cavity; sputum smear positive."
  - reason: timeline: reactivation develops after months of TNF blockade, not at the start (source: CV127 transcript (immunosuppressive therapy); slide 30)
- #40 Mycobacterium tuberculosis / Destroyed vertebral bodies with focal back pain - **presentation**
  - before: "47-year-old man who spent 2 years in prison: 4 months of worsening mid-back pain, night sweats and 6 kg weight loss, now tingling in both legs. MRI: collapse of two adjacent thoracic vertebral bodies with the disc destroyed and a paraspinal fluid collection."
  - after: "47-year-old man who spent 2 years in prison: 4 months of worsening mid-back pain, night sweats and 6 kg weight loss, now tingling in both legs. MRI: collapse of two adjacent thoracic vertebral bodies with a large paraspinal fluid collection; tender over T8."
  - reason: accuracy: 'disc destroyed' points to pyogenic spondylodiscitis (TB relatively spares the disc early); added the lecturer's focal spinal tenderness (source: CV127 slide 18 + transcript (focal spinal pain))
- #42 Mycobacterium tuberculosis / Relapse resistant to the two key first-line drugs - **micro**
  - before: "Acid-fast rod; smear by Ziehl-Neelsen or auramine fluorescence, culture on Lowenstein-Jensen in weeks; rapid PCR detects its DNA plus the rpoB mutation within 2 hours; katG or inhA mutations block activation of the other key first-line drug"
  - after: "Acid-fast rod; smear by Ziehl-Neelsen or auramine fluorescence, culture on Lowenstein-Jensen in weeks; NAAT detects its DNA within hours; RNA polymerase (rpoB) and catalase-peroxidase (katG) mutations confer the resistance"
  - reason: error: inhA mutations alter the drug target, they do not block activation; '2 hours' not taught (CV127: NAAT in hours); lecture names RNA polymerase and katG mutations (source: CV138 transcript (MDR-TB); CV128 slide (katG activation); CV127 slide 34)
- #42 Mycobacterium tuberculosis / Relapse resistant to the two key first-line drugs - **lectures**
  - before: ["CV138", "CV128", "CV127"]
  - after: ["CV138", "CV128"]
  - reason: CV127 does not teach drug-resistant TB (source: CV127 transcript grep)
- #43 Mycobacterium avium complex / Fever, wasting and high alkaline phosphatase at CD4 30 - **lectures**
  - before: ["CV128", "CV127", "CV132"]
  - after: ["CV128"]
  - reason: CV127 names MAC once in a differential list; CV132 does not mention it (source: CV127 transcript line 535; CV132 slides/transcript grep)
- #44 Mycobacterium leprae / Numb skin patches with thickened peripheral nerves - **presentation**
  - before: "31-year-old man who grew up in rural Brazil: 2 years of pale, dry, slightly raised patches on the arms and back that he cannot feel pinprick or temperature in, loss of the outer eyebrows, and a painless burn on a finger. The ulnar nerves are thickened and tender."
  - after: "31-year-old man who grew up in rural Brazil: 2 years of pale, dry, slightly raised patches on the arms and back where he cannot feel pinprick or heat, a painless burn on a finger, and a weak grip with wasting of the small hand muscles. Both ulnar nerves are thickened."
  - reason: lecturer's picture is skin patches, ulcers and muscle weakness; outer-eyebrow loss (lepromatous) mixed with anesthetic patches (tuberculoid) dropped; weakness added (source: CV128 transcript (Hansen disease))
- #38 miliary, #39 lymphadenitis (posterior cervical/supraclavicular = CV127 transcript): checked, no change. #43 MAC presentation matches CV128 slide 34 (fever, sweats, weight loss, high ALP, anemia, CD4<50). #44 micro 'will not grow on lab media' lecture-silent but certain; kept.

- #36 Mycobacterium tuberculosis / First infection in a child, with an enlarged hilar node - **presentation**
  - before: "4-year-old girl whose grandfather was hospitalized last month with a chronic cough: 3 weeks of low-grade fever and mild cough, weight down 1 kg. Film: a small peripheral opacity with a markedly enlarged node at the right hilum; skin test 15 mm; early-morning gastric aspirate grows acid-fast rods."
  - after: "4-year-old girl whose grandfather was hospitalized last month with a chronic cough: 3 weeks of low-grade fever and mild cough, weight down 1 kg. Film: small peripheral opacity, markedly enlarged right hilar node; skin test 15 mm; morning gastric aspirate grows acid-fast rods."
  - reason: shortened to the 280-char limit (source: -)

## CV132 / CV139 / CV141 (items 16, 52-56)
- #52 Oral anaerobes (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) / Right lower-lobe infection days after a choking episode - **micro**
  - before: "Mixed flora from the gingival crevices of anyone with teeth; killed by oxygen, so it needs an oxygen-free transport tube and a sealed jar; culture reports several species at once, as mixed growth; full dental extraction clears it"
  - after: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need anaerobic transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - reason: 'full dental extraction clears it' is unsupported and overstated; transport wording simplified; polymicrobial growth with aerobes and foul odor are what CV132/CV139 teach (source: CV132 slides 20-21; CV141 slide 16 (oral anaerobes))
- #53 Oral anaerobes (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) / Single cavity with putrid sputum weeks after passing out - **micro**
  - before: "Mixed flora from the gingival crevices of anyone with teeth; killed by oxygen, so it needs an oxygen-free transport tube and a sealed jar; culture reports several species at once, as mixed growth; full dental extraction clears it"
  - after: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need anaerobic transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - reason: kept identical to #52 (same organism group) (source: CV132 slides 20-21)
- #52 Oral anaerobes (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) / Right lower-lobe infection days after a choking episode - **presentation**
  - before: "71-year-old man 5 days after a stroke left him coughing on thin liquids: T 38.5 C, cough with foul-smelling sputum, RR 26, SpO2 90%. Right basal crackles and dullness; film: patchy right lower-lobe opacity; he was at home, never in hospital before this illness."
  - after: "71-year-old man living at home with dysphagia from a stroke 3 months ago, who choked on his dinner 4 days ago: T 38.5 C, cough with foul-smelling sputum, RR 26, SpO2 90%. Right basal crackles and dullness; film: patchy right lower-lobe opacity; sputum: mixed flora."
  - reason: internal contradiction ('5 days after a stroke' yet 'never in hospital') and the card did not show the choking episode its disease label names (source: CV139 transcript (aspiration risk factors, right lower lobe))
- #56 Cytomegalovirus / Pneumonitis with giant cells in profound immunosuppression - **disease**
  - before: "Pneumonitis with giant cells in profound immunosuppression"
  - after: "Pneumonitis with enlarged inclusion-bearing cells after transplant"
  - reason: 'giant cells' mislabels the finding (the slide shows large cytomegalic cells with intranuclear inclusions, not multinucleated giant cells) and could point to RSV or measles (source: CV132 slide 35)
- #16 S. aureus HAP (nasal carriage CV140 transcript; MRSA bronchopneumonia CV132 slide 19), #53 lung abscess (CV132 slides 21-22), #54 Fusobacterium (CV141 slide 42), #55 diphtheria (presentation = CV141 lecturer's clue; micro lecture-silent but standard, EF-2 from CV131): checked, no other change. #56 CMV micro 'quantitative blood PCR' lecture-silent, standard; kept.


## CV136 endemic fungi (items 57-63)
- #57 Coccidioides immitis / Fever, chest pain and tender shin nodules after a dust storm - **micro**
  - before: "Thermally dimorphic fungus; mold in arid alkaline soil sheds windborne arthrospores after rain then drought; in tissue, thick-walled spherules 20-100 micrometers packed with endospores, not budding yeast; culturing it is a lab biohazard"
  - after: "Thermally dimorphic; soil mold of hot semi-arid regions fragments into light windborne arthrospores, dispersed by rain-then-drought cycles; in tissue, thick-walled spherules packed with endospores, not budding yeast; culture is dangerous"
  - reason: 'alkaline' soil and '20-100 micrometers' are summary-only (source: CV136 slides 7-9 + transcript)
- #58 Coccidioides immitis / Skin, bone and basilar meningeal spread in a Filipino man - **micro**
  - before: "Thermally dimorphic fungus; mold in arid alkaline soil sheds windborne arthrospores after rain then drought; in tissue, thick-walled spherules 20-100 micrometers packed with endospores, not budding yeast; culturing it is a lab biohazard"
  - after: "Thermally dimorphic; soil mold of hot semi-arid regions fragments into light windborne arthrospores, dispersed by rain-then-drought cycles; in tissue, thick-walled spherules packed with endospores, not budding yeast; culture is dangerous"
  - reason: kept identical to #57; summary-only details removed (source: CV136 slides 7-9)
- #57 Coccidioides immitis / Fever, chest pain and tender shin nodules after a dust storm - **presentation**
  - before: "31-year-old woman who drove through a dust storm near Phoenix 3 weeks ago: 10 days of T 38.6 C, dry cough, pleuritic pain and aching joints, plus tender red shin nodules. Film: left lower-lobe infiltrate with hilar nodes; sputum: thick-walled structures full of small bodies."
  - after: "31-year-old woman who drove through a dust storm near Phoenix 3 weeks ago: 10 days of T 38.6 C, dry cough, pleuritic pain and aching joints, plus tender red nodules on both shins. Film: left lower-lobe infiltrate with enlarged hilar nodes; WBC 10,800/uL; HIV negative."
  - reason: buzzword stacking: sputum 'thick-walled structures full of small bodies' (spherules) duplicates the micro card on top of the dust-storm, joint-pain and shin-nodule picture; replaced with neutral labs (source: CV136 slide 8 + transcript; CV141 transcript (dust storm))
- #58 Coccidioides immitis / Skin, bone and basilar meningeal spread in a Filipino man - **disease**
  - before: "Skin, bone and basilar meningeal spread in a Filipino man"
  - after: "Skin, bone and meningeal spread in a Filipino man"
  - reason: 'basilar' not taught; the lecture lists skin, bones, joints and meninges (source: CV136 slide 8 + transcript)
- #59 Histoplasma capsulatum / Lung infection weeks after exploring a bat cave - **micro**
  - before: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with microconidia at 25 C; at 37 C small oval yeasts pack inside macrophages and raise phagolysosome pH to survive; urine or serum antigen test; H and M precipitin bands"
  - after: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts sit inside macrophages and raise phagolysosome pH; urine or blood antigen; immunodiffusion shows two precipitin bands"
  - reason: 'H and M' band labels replaced by the lecturer's 'two bands' (his phase-antigen explanation differs from board convention, so the card stays true both ways); macroconidia added from slide 10 (source: CV136 slides 10-12 + transcript)
- #60 Histoplasma capsulatum / Wasting with pancytopenia and mouth ulcers in AIDS - **micro**
  - before: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with microconidia at 25 C; at 37 C small oval yeasts pack inside macrophages and raise phagolysosome pH to survive; urine or serum antigen test; H and M precipitin bands"
  - after: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts sit inside macrophages and raise phagolysosome pH; urine or blood antigen; immunodiffusion shows two precipitin bands"
  - reason: kept identical to #59 (source: CV136 slides 10-12)
- #61 Blastomyces dermatitidis / Lung disease with wart-like skin plaques after clearing timber - **micro**
  - before: "Dimorphic fungus of moist acidic riverbank soil and rotting wood; at 37 C a large 8-15 micrometer yeast with a thick double-contoured wall, several nuclei and one bud joined across a broad neck; KOH or silver stain; serology useless"
  - after: "Dimorphic fungus of moist soil along rural riverbanks; mold makes pear-shaped conidia; at 37 C a large thick-walled multinucleate yeast with a single broad-based bud, seen on a sputum KOH prep; PCR or culture; serology not useful"
  - reason: 'acidic' soil, 'rotting wood', '8-15 micrometer' and 'double-contoured' are summary-only; silver stain not taught (source: CV136 slides 13-15 + transcript)
- #62 Paracoccidioides brasiliensis / Chronic cavitary lung disease with painful mouth ulcers - **micro**
  - before: "Dimorphic fungus of rural Central and South American soil; at 37 C a large parent yeast ringed by many narrow-based buds radiating outward; estrogen blocks the mold-to-yeast switch, so men outnumber women about 13 to 1; biopsy or scraping"
  - after: "Dimorphic fungus of rural Central and South American soil; at 37 C a large central mother yeast ringed by many small narrow-based daughter buds; acquired in farm work, far more often by men; diagnosed by microscopy of scrapings or biopsy"
  - reason: estrogen blocking the yeast switch and the 13:1 male ratio are summary-only (lecturer: much more prevalent among males, farm work) (source: CV136 slide 16 + transcript)
- #63 Talaromyces marneffei / Fever and umbilicated skin papules in AIDS in Southeast Asia - **micro**
  - before: "Dimorphic soil fungus of Southeast Asia, formerly in the genus Penicillium; at 37 C elongated sausage-shaped cells divide by fission across a dark central transverse septum rather than budding; culture produces a soluble red pigment"
  - after: "Dimorphic soil fungus of Southeast Asia, formerly in the genus Penicillium; at 37 C elongated yeast cells with a dark, clearly defined central transverse septum (they split by fission, not budding); culture is definitive"
  - reason: 'soluble red pigment' is summary-only; lecture gives the septate elongated yeast and culture (source: CV136 slide 17 + transcript)
- #58-#63 presentations checked against CV136 slides 7-17 + transcript; no further change (geography/activities are single pieces; Filipino risk, AIDS in central US, oral-mucosal spread, SE Asia HIV skin lesions all lecture-backed).

- #59 Histoplasma capsulatum / Lung infection weeks after exploring a bat cave - **micro**
  - before: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts sit inside macrophages and raise phagolysosome pH; urine or blood antigen; immunodiffusion shows two precipitin bands"
  - after: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts inside macrophages raise phagolysosome pH; urine or blood antigen; immunodiffusion gives two precipitin bands"
  - reason: shortened to the 240-char limit (source: -)
- #60 Histoplasma capsulatum / Wasting with pancytopenia and mouth ulcers in AIDS - **micro**
  - before: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts sit inside macrophages and raise phagolysosome pH; urine or blood antigen; immunodiffusion shows two precipitin bands"
  - after: "Dimorphic fungus of soil enriched by bird or bat droppings; mold with macro- and microconidia at 25 C; at 37 C small oval yeasts inside macrophages raise phagolysosome pH; urine or blood antigen; immunodiffusion gives two precipitin bands"
  - reason: shortened to the 240-char limit (source: -)

## CV137 opportunistic fungi (items 64-69, 71-76)
- #64 Candida albicans / White mouth plaques scraped off a red base - **presentation**
  - before: "63-year-old man using a high-dose inhaled steroid for asthma and rinsing poorly: 2 weeks of a sore mouth and altered taste. Creamy white patches coat the tongue and inner cheeks and wipe off to leave red, slightly bleeding mucosa; he swallows without pain. HIV test negative."
  - after: "63-year-old man using a high-dose inhaled steroid for asthma and rinsing poorly: 2 weeks of a cottony feeling in the mouth and altered taste. Creamy white patches coat the tongue and inner cheeks and come off with firm scraping, leaving red, slightly bleeding mucosa; swallowing is painless. HIV negative."
  - reason: lecture describes the plaques as adherent and painless; 'sore mouth' and 'wipe off' changed so the card is true both to the slide and to the standard scrape-off finding (source: CV137 slide 5)
- #71 Aspergillus fumigatus / New wheeze and brown mucus plugs in long-standing asthma - **micro**
  - before: "Mold only, never a yeast; septate hyphae with cross-walls, branching at acute angles off conidiophores that bear chains of conidia; ubiquitous in air, so culture may mean colonization; serum galactomannan; specific IgE and precipitins"
  - after: "Mold only, never a yeast; septate hyphae with V-shaped acute-angle branches; conidiophores end in radiating chains of conidia; inhaled everywhere, so a positive culture may be colonization; serum galactomannan; specific IgE"
  - reason: garbled morphology (hyphae do not branch off conidiophores); 'precipitins' not taught (source: CV137 slides 8, 12 + transcript)
- #72 Aspergillus fumigatus / Mobile mass inside an old upper-lobe cavity - **micro**
  - before: "Mold only, never a yeast; septate hyphae with cross-walls, branching at acute angles off conidiophores that bear chains of conidia; ubiquitous in air, so culture may mean colonization; serum galactomannan; specific IgE and precipitins"
  - after: "Mold only, never a yeast; septate hyphae with V-shaped acute-angle branches; conidiophores end in radiating chains of conidia; inhaled everywhere, so a positive culture may be colonization; serum galactomannan; specific IgE"
  - reason: kept identical to #71 (source: CV137 slides 8, 12)
- #73 Aspergillus fumigatus / Nodules and vessel invasion during prolonged neutropenia - **micro**
  - before: "Mold only, never a yeast; septate hyphae with cross-walls, branching at acute angles off conidiophores that bear chains of conidia; ubiquitous in air, so culture may mean colonization; serum galactomannan; specific IgE and precipitins"
  - after: "Mold only, never a yeast; septate hyphae with V-shaped acute-angle branches; conidiophores end in radiating chains of conidia; inhaled everywhere, so a positive culture may be colonization; serum galactomannan; specific IgE"
  - reason: kept identical to #71 (source: CV137 slides 8, 12)
- #72 Aspergillus fumigatus / Mobile mass inside an old upper-lobe cavity - **presentation**
  - before: "62-year-old man treated for a cavitary lung infection 20 years ago: 4 months of intermittent coughing of small amounts of blood, no fever or weight loss; eosinophils and IgE normal. CT: a rounded soft-tissue ball lying free in the old cavity, shifting when he turns."
  - after: "62-year-old man treated for a cavitary lung infection 20 years ago: 4 months of intermittent coughing of small amounts of blood, no fever or weight loss; eosinophils and IgE normal. CT: a rounded soft-tissue mass lying free in the old cavity, moving when he changes position."
  - reason: 'ball' in a cavity is the fungus-ball metaphor; described as a mass (source: CV137 slide 10 + transcript; CV127 slide 36)
- #65-#69, #73-#76 checked against CV137 slides 4-21 + transcript; no change (esophageal extension, antibiotics/lactobacillus, satellite lesions, IL-17, disseminated risk factors, angioinvasion + galactomannan, capsule/latex agglutination/pigeons, PCP stains/not culturable/person-to-person, Mucor enzyme/free iron/fragile hyphae all lecture-backed).

- #64 Candida albicans / White mouth plaques scraped off a red base - **presentation**
  - before: "63-year-old man using a high-dose inhaled steroid for asthma and rinsing poorly: 2 weeks of a cottony feeling in the mouth and altered taste. Creamy white patches coat the tongue and inner cheeks and come off with firm scraping, leaving red, slightly bleeding mucosa; swallowing is painless. HIV negative."
  - after: "63-year-old man on a high-dose inhaled steroid for asthma who rinses poorly: 2 weeks of a cottony feeling in the mouth and altered taste. Creamy white patches on the tongue and cheeks come off with firm scraping, leaving red, slightly bleeding mucosa; swallowing painless; HIV negative."
  - reason: shortened to the 280-char limit (source: -)

## CV138 / CV140 emerging and nosocomial (items 15, 21, 77-84, 88, 89)
- #21 Klebsiella pneumoniae / Carbapenem-resistant bloodstream infection in the ICU - **presentation**
  - before: "72-year-old woman transferred from another hospital's ICU, 3 weeks of meropenem and a central line: T 39.3 C, BP 78/44, lactate 4.2 mmol/L. Blood cultures grow a lactose-fermenting gram-negative rod resistant to every beta-lactam; only colistin is active."
  - after: "72-year-old woman transferred from another hospital's ICU, 3 weeks of meropenem and a central line: T 39.3 C, BP 78/44, lactate 4.2 mmol/L. Blood cultures grow a mucoid, indole-negative lactose fermenter resistant to every beta-lactam; only colistin is active."
  - reason: uniqueness: 'lactose-fermenting gram-negative rod' also fits carbapenem-resistant E. coli (CV138 lists Klebsiella, E. coli, Pseudomonas); mucoid + indole-negative separates it (source: CV138 slides 14-15; CV140 slides 29, 32)
- #77 Clostridioides difficile / Watery diarrhea with raised yellow plaques in the colon - **lectures**
  - before: ["CV140", "CV138", "CV153"]
  - after: ["CV140", "CV138"]
  - reason: CV153 names C. difficile only as a nursing-home overgrowth concern (source: CV153 slide 556)
- #78 Vibrio cholerae / Painless flooding watery stools after a flood - **micro**
  - before: "Curved gram-negative rod with one polar flagellum and darting motility; oxidase-positive; alkali-tolerant but acid-intolerant, so a large dose is needed; yellow colonies on TCBS agar; its toxin locks Gs on, raising cAMP and chloride loss"
  - after: "Curved gram-negative rod; oxidase-positive; grows on TCBS agar; alkali-tolerant but acid-labile, so a huge dose is needed in water, fewer in food; serotypes O1 and O139; its toxin stimulates Gs, raising cAMP and chloride and water loss"
  - reason: 'one polar flagellum, darting motility' and 'yellow colonies' not taught; serotypes and inoculum from slide 18 added (source: CV138 slides 18-19 + transcript)
- #79 Measles virus / High fever, red eyes and a rash spreading down from the hairline - **micro**
  - before: "Enveloped, nonsegmented (-) ssRNA paramyxovirus; H protein attaches, F protein fuses cells into multinucleated giant cells; the most contagious human pathogen, lingering in room air 2 hours; IgM serology or RT-PCR of a throat swab"
  - after: "Enveloped nonsegmented (-) ssRNA paramyxovirus; a single antigenic type (strains differ only genetically); droplet spread and survives on surfaces up to 2 hours; IgM/IgG serology, culture of a nasal or throat swab, or RT-PCR"
  - reason: error: slide says the virus survives on SURFACES up to 2 hours, not in room air; 'most contagious human pathogen' and H/F giant-cell detail not taught (source: CV138 slides 20-23 + transcript)
- #79 Measles virus / High fever, red eyes and a rash spreading down from the hairline - **presentation**
  - before: "5-year-old unvaccinated girl back from Romania: 4 days of T 40.1 C, hacking cough, streaming nose and red watery eyes that hurt in the light; tiny white-centered spots inside the cheeks. Today a blotchy red rash began at the hairline and behind the ears and is moving down."
  - after: "5-year-old unvaccinated girl back from Romania, the third child in her class to fall ill: 4 days of T 40.1 C, hacking cough, streaming nose and red watery eyes that hurt in the light. Today a blotchy red rash began at the hairline and behind the ears and is moving down her body."
  - reason: buzzword stacking: removed the Koplik-spot paraphrase ('tiny white-centered spots inside the cheeks') - the descending rash, conjunctivitis and coryza remain (source: CV138 slide 22 + transcript)
- #79 Measles virus / High fever, red eyes and a rash spreading down from the hairline - **lectures**
  - before: ["CV138", "CV140"]
  - after: ["CV138"]
  - reason: CV140 names measles only as an airborne-precaution example (source: CV140 slide 232)
- #81 Dengue virus / Fever with retro-orbital and deep bone pain in a traveler - **micro**
  - before: "Enveloped (+) ssRNA flavivirus spread by day-biting Aedes aegypti mosquitoes; 4 serotypes with no useful cross-protection, so a second infection with another serotype runs worse; serum RT-PCR or NS1 antigen early, IgM after day 5"
  - after: "Enveloped (+) ssRNA flavivirus spread by the Aedes aegypti mosquito; infects bone marrow; 4 serotypes without cross-protection, so a later infection with a different serotype runs worse; diagnosed by RT-PCR"
  - reason: 'day-biting', NS1 antigen and 'IgM after day 5' are not taught; bone-marrow tropism added from the transcript (source: CV138 slides 28-29 + transcript)
- #82 Dengue virus / Plasma leak and shock as a second infection's fever breaks - **micro**
  - before: "Enveloped (+) ssRNA flavivirus spread by day-biting Aedes aegypti mosquitoes; non-neutralizing antibody left by a different serotype carries the particles into Fc-receptor-bearing monocytes, amplifying replication and cytokine release"
  - after: "Enveloped (+) ssRNA flavivirus spread by the Aedes aegypti mosquito; non-neutralizing antibody left by an earlier serotype enhances the new infection and the release of vasoactive cytokines that leak plasma; RT-PCR"
  - reason: trimmed the Fc-receptor/monocyte detail to what slide 29 teaches (non-neutralizing antibodies, vasoactive cytokines, shock) (source: CV138 slide 29)
- #83 Filoviruses (Ebola and Marburg viruses) / Fever, vomiting and bleeding after a funeral in West Africa - **micro**
  - before: "Filamentous, nonsegmented (-) ssRNA particles; reservoir is cave-dwelling fruit bats; spread by direct contact with blood, secretions or a corpse, not by air; surface glycoprotein enters monocytes and dendritic cells; ELISA or RT-PCR"
  - after: "Filamentous (-) ssRNA viruses; African fruit bats are reservoir and vector; spread person to person by blood and body fluids; infect reticuloendothelial cells and suppress immunity; handled at BSL-4; ELISA or RT-PCR"
  - reason: 'cave-dwelling', 'not by air' and glycoprotein entry into monocytes/dendritic cells are not taught; reticuloendothelial tropism and BSL-4 from slides 31-32 (source: CV138 slides 30-32 + transcript)
- #84 Hantavirus (Sin Nombre virus) / Abrupt lung flooding after cleaning a rodent-infested shed - **micro**
  - before: "Enveloped, three-segmented (-) ssRNA bunyavirus; deer mice carry it without illness and shed it in urine, droppings and saliva, which people inhale as dust; IgM or a fourfold IgG rise, RT-PCR of blood cells; ribavirin is of little use"
  - after: "Enveloped segmented (-) ssRNA virus; deer mice are the reservoir and shed it in urine and droppings that people inhale as dust; causes no hemorrhage; fourfold rise in IgG or RT-PCR; ribavirin gives some benefit"
  - reason: error: 'ribavirin is of little use' contradicts slide 33 ('some benefit'); 'three-segmented bunyavirus', saliva and IgM not taught (source: CV138 slide 33 + transcript)
- #84 Hantavirus (Sin Nombre virus) / Abrupt lung flooding after cleaning a rodent-infested shed - **disease**
  - before: "Abrupt lung flooding after cleaning a rodent-infested shed"
  - after: "Abrupt lung flooding after sweeping out a rodent-infested barn"
  - reason: label said 'shed', card says barn; aligned (source: -)
- #88 Staphylococcus epidermidis / Indolent central-line bloodstream infection - **micro**
  - before: "Gram-positive cocci in clusters; catalase-positive but coagulase-negative, non-hemolytic, does not ferment mannitol, novobiocin-sensitive; a skin commensal of everyone; builds a slimy biofilm on hardware, which usually must be removed"
  - after: "Gram-positive cocci in clusters; catalase-positive but coagulase-negative; a skin commensal of everyone; builds a gooey biofilm on catheters and implanted hardware that shields it from antibiotics, so the device usually must come out"
  - reason: 'non-hemolytic', 'does not ferment mannitol' and 'novobiocin-sensitive' are summary-only (source: CV140 slide 23 + transcript)
- #88 Staphylococcus epidermidis / Indolent central-line bloodstream infection - **presentation**
  - before: "59-year-old woman on home parenteral nutrition through a tunnelled line for 8 months: 5 days of low-grade fever to 38.2 C and malaise, feeling worse during each infusion; the exit site looks clean. Two of four bottles drawn from the line grow the same organism at 36 hours."
  - after: "59-year-old woman on home parenteral nutrition through a tunnelled line for 8 months: 5 days of low-grade fever to 38.2 C and malaise, worse during each infusion; exit site clean. Two of four bottles drawn through the line grow gram-positive cocci in clusters; coagulase negative."
  - reason: uniqueness: 'grow the same organism' on a TPN line fits candidemia (#69) and S. aureus equally; organism class added (source: CV140 transcript (coagulase test))
- #89 Enterococcus faecium / Vancomycin-resistant bacteremia in a long-stay ICU patient - **micro**
  - before: "Gram-positive cocci in pairs and short chains; catalase-negative; blackens bile esculin agar, grows in 6.5% NaCl, PYR-positive, optochin-resistant; intrinsically resistant to cephalosporins; vanA/vanB swap D-Ala-D-Ala for D-Ala-D-Lac"
  - after: "Gram-positive cocci in chains; catalase-negative; Lancefield group D; turns bile esculin agar black, grows in 6.5% NaCl and at 10-45 C; intrinsically resistant to cephalosporins; ampicillin only inhibits it, never kills"
  - reason: PYR, optochin-resistance and vanA/vanB D-Ala-D-Lac are not taught; replaced with the slide's group D, temperature range and ampicillin-static points (source: CV140 slides 25-27 + transcript)
- #89 Enterococcus faecium / Vancomycin-resistant bacteremia in a long-stay ICU patient - **presentation**
  - before: "66-year-old man in his fifth ICU week after bowel surgery, treated with cefepime and then vancomycin: T 38.8 C, BP 92/58. Blood cultures grow catalase-negative cocci in chains that blacken bile esculin agar, grow in 6.5% salt, and are resistant to vancomycin and ampicillin."
  - after: "66-year-old man in his fifth ICU week after bowel surgery, treated with cefepime and then vancomycin: T 38.8 C, BP 92/58, central line in place. Blood cultures grow gram-positive cocci in chains resistant to vancomycin and to ampicillin."
  - reason: presentation repeated the micro card (bile esculin, 6.5% salt); trimmed to the stem-style culture result (source: CV140 slides 25-27)
- #89 Enterococcus faecium / Vancomycin-resistant bacteremia in a long-stay ICU patient - **lectures**
  - before: ["CV140", "CV138"]
  - after: ["CV140"]
  - reason: CV138 does not teach VRE (only VRSA) (source: CV138 slides/transcript grep)
- #15 MRSA abscess, #80 mumps, #81-#83 dengue/Ebola presentations: checked against CV138 slides 6-33 + transcript; no change. #77 C. difficile micro (alcohol rub vs soap, toxins A/B) confirmed CV140 slides 19-21, 145-150.


## CV152 / CV153 / CV157 urinary organisms (items 4, 17, 30, 41, 70, 85-87, 90-92, 98-100, 102, 103)
- #4 Adenovirus / Hemorrhagic cystitis in a kidney transplant recipient - **micro**
  - before: "Naked icosahedral linear dsDNA; fiber knob binds the CAR receptor, penton base binds integrins; early proteins block apoptosis and lower MHC I; over 60 serotypes (3, 4, 7 airway and eye); hardy capsid survives in pool water; PCR or DFA"
  - after: "Naked icosahedral linear dsDNA; fiber binds CAR, penton base binds integrins; early proteins block apoptosis, lower IFN-alpha and MHC I; over 60 serotypes (low numbers respiratory, 40/41 enteric); hardy capsid; PCR or immunofluorescence"
  - reason: synced with the corrected adenovirus micro (#3): '3, 4, 7' serotypes summary-only, DFA not taught (source: CV129 slides 10-12)
- #4 Adenovirus / Hemorrhagic cystitis in a kidney transplant recipient - **lectures**
  - before: ["CV152"]
  - after: ["CV152", "CV129", "CV157"]
  - reason: CV129 slide 10 lists hemorrhagic cystitis among adenovirus syndromes; CV157 slide 14 lists adenovirus among cystitis causes (source: CV129 slide 10; CV157 slide 14)
- #30 Pseudomonas aeruginosa / Catheter-associated urinary infection after 10 days - **presentation**
  - before: "74-year-old man in his third hospital week after a stroke, indwelling catheter for 10 days: T 38.7 C, confusion and suprapubic tenderness, no dysuria. Urine: 60 WBC/hpf, leukocyte esterase positive, nitrite negative; culture 10^5 CFU/mL; the drainage bag fluid looks green."
  - after: "74-year-old man in his third hospital week after a stroke, indwelling catheter for 10 days: T 38.7 C, confusion and suprapubic tenderness, no dysuria. Urine: 60 WBC/hpf, nitrite negative; culture 10^5 CFU/mL of an oxidase-positive non-fermenter; the bag looks green."
  - reason: uniqueness: added the oxidase-positive non-fermenter so the card does not rest on the green-pigment paraphrase alone (source: CV152 slide 12 + transcript)
- #70 Candida albicans / Yeast in the urine of a catheterized diabetic patient - **micro**
  - before: "Polymorphic commensal yeast of skin, gut and genital tract; oval budding cells, pseudohyphae and true hyphae; germ tubes in serum at 37 C; grows on Sabouraud dextrose agar; biofilms on silicone and latex; glucose in urine feeds it"
  - after: "Polymorphic commensal yeast of skin, gut and genital tract; switches between oval budding cells, pseudohyphae (elongated cells still joined) and true hyphae; forms germ tubes in serum at 37 C; sugar fermentation or PCR names the species"
  - reason: 'biofilms on silicone and latex' and 'glucose in urine feeds it' are not taught; synced with the other Candida items (source: CV152 slide 15; CV137 slides 4-7)
- #86 Chlamydia trachomatis / Scant watery urethral discharge with sterile pyuria - **micro**
  - before: "Obligate intracellular organism that cannot make its own ATP; wall lacks muramic acid; an inert infectious body enters by endocytosis, then a reticulate body divides in a vacuole; glycogen inclusions stain brown with iodine; urine NAAT"
  - after: "Obligate intracellular organism that cannot make enough of its own ATP; wall low in muramic acid; an inert infectious body enters by endocytosis, then a reticulate body divides in a vacuole; glycogen inclusions stain brown with iodine; urine NAAT"
  - reason: error: the chlamydial wall has a reduced amount of muramic acid, it does not lack it (source: CV130 transcript (Chlamydophila wall); CV152 transcript (iodine-stained inclusions))
- #87 Trichomonas vaginalis / Frothy yellow-green discharge with pinpoint cervical bleeding - **presentation**
  - before: "31-year-old woman with 2 weeks of itching, soreness, burning on urination and a copious frothy yellow-green discharge with a foul smell. Speculum exam shows pinpoint areas of bleeding on the cervix; a wet mount of the discharge shows pear-shaped organisms darting about."
  - after: "31-year-old woman with a new partner: 2 weeks of vulvar itching and soreness, burning on urination and a copious thin, foul-smelling discharge. Vaginal pH 6.0; routine urine culture sterile; wet mount: many neutrophils and motile pear-shaped organisms."
  - reason: buzzword stacking: removed the strawberry-cervix paraphrase ('pinpoint areas of bleeding on the cervix') and the frothy yellow-green stock description; the wet mount carries the card with the history (source: CV152 transcript (trichomoniasis mimics UTI, urethritis and discharge))
- #98 Proteus mirabilis / Branched stone filling the renal pelvis with alkaline urine - **presentation**
  - before: "68-year-old woman with a neurogenic bladder and repeated urinary infections: months of dull right flank ache and visible blood in the urine. Urine pH 8.4 with rectangular crystals; CT: a dense branched stone filling the right renal pelvis and all the calyces."
  - after: "68-year-old woman with a neurogenic bladder and repeated urinary infections: months of dull right flank ache and visible blood in the urine. Urine pH 8.4, 30 WBC/hpf; culture grows a non-lactose fermenter; CT: a dense branched stone filling the right renal pelvis and calyces."
  - reason: buzzword stacking: removed the coffin-lid crystal paraphrase ('rectangular crystals') on top of the plainly described staghorn stone (source: CV152 slide 11 + transcript; CV162 slide 8)
- #98 Proteus mirabilis / Branched stone filling the renal pelvis with alkaline urine - **lectures**
  - before: ["CV152", "CV162", "CV157"]
  - after: ["CV152", "CV162"]
  - reason: CV157 names Proteus only as a cystitis/malakoplakia organism, not for stones (source: CV157 slides 14, 18)
- #99 Staphylococcus saprophyticus / Burning and frequency 2 days after intercourse - **lectures**
  - before: ["CV152", "CV153", "CV162"]
  - after: ["CV152", "CV162"]
  - reason: CV153 does not name S. saprophyticus (source: CV153 slides/transcript grep)
- #103 Klebsiella pneumoniae / Urinary infection in a hospitalized diabetic, mucoid colonies - **lectures**
  - before: ["CV152", "CV153", "CV140", "CV162"]
  - after: ["CV152", "CV153", "CV140", "CV157"]
  - reason: CV162 teaches Klebsiella only as a urease-positive stone former (card has no stone); CV157 lists Klebsiella among cystitis coliforms (source: CV162 slide 8; CV157 slide 14)
- #17, #41, #85, #90-#92, #99, #100, #102, #103 presentations and micro checked against CV152 slides 3-17 + transcript, CV157 slides 14-30, CV155 slide 13, CV153 slides 20-36; no further change. Klebsiella 'opposite IMViC' (VP/citrate +) confirmed in CV152 transcript. S. saprophyticus urease+ = CV162 slide 8 (not spoken).

- #86 Chlamydia trachomatis / Scant watery urethral discharge with sterile pyuria - **micro**
  - before: "Obligate intracellular organism that cannot make enough of its own ATP; wall low in muramic acid; an inert infectious body enters by endocytosis, then a reticulate body divides in a vacuole; glycogen inclusions stain brown with iodine; urine NAAT"
  - after: "Obligate intracellular; cannot make enough of its own ATP; wall low in muramic acid; an inert infectious body enters by endocytosis, a reticulate body divides in a vacuole; glycogen inclusions stain brown with iodine; urine NAAT"
  - reason: shortened to the 240-char limit (source: -)

## CV149 / CV151 / CV153 / CV157 / CV160 / CV161 (items 11, 13, 93-97, 101)
- #11 Streptococcus pneumoniae / Peritonitis of ascites in a child with nephrotic syndrome - **presentation**
  - before: "6-year-old boy with relapsing nephrotic syndrome (albumin 1.6 g/dL, urine protein 4+, IgG 250 mg/dL, tense ascites): 1 day of T 39.4 C and diffuse abdominal pain with rebound. Paracentesis: 1,800 neutrophils/uL; blood culture grows the same organism as the fluid."
  - after: "6-year-old boy with relapsing, steroid-treated edema and heavy proteinuria (albumin 1.6 g/dL, urine protein 4+, IgG 250 mg/dL) and tense ascites: 1 day of T 39.4 C and diffuse abdominal pain with rebound. Paracentesis: 1,800 neutrophils/uL, gram-positive diplococci."
  - reason: rule 5: the card named a different diagnosis ('nephrotic syndrome') as a finding; replaced by its numbers; fluid Gram stain added so it cannot be read as E. coli peritonitis (source: CV161 slide 10 + transcript (peritonitis usually S. pneumoniae))
- #93 Escherichia coli / Fever, chills and a boggy tender prostate at age 63 - **presentation**
  - before: "63-year-old man in the emergency department: 2 days of T 38.5 C, chills, frequency, burning, a hesitant stream and deep perineal pain. The prostate is warm, swollen and exquisitely tender on gentle rectal exam; urine culture grows 10^5 CFU/mL of a lactose fermenter."
  - after: "63-year-old man in the emergency department: 2 days of T 38.5 C, chills, frequency, burning, a hesitant stream and deep perineal pain. The prostate is warm, swollen and exquisitely tender on gentle rectal exam; urine grows 10^5 CFU/mL of an indole-positive lactose fermenter."
  - reason: uniqueness: CV153 gives E. coli OR Klebsiella for acute prostatitis; indole-positive separates E. coli from Klebsiella (source: CV153 slide 30; CV140 slide 29)
- #94 Escherichia coli / Fever without a source in a 3-month-old infant - **presentation**
  - before: "3-month-old girl: 2 days of T 39.4 C, poor feeding and irritability, with a normal ear, throat and chest exam and no rash. Catheter urine: leukocyte esterase positive, 50 WBC/hpf, 10^5 CFU/mL; ultrasound later shows urine refluxing up the right ureter."
  - after: "3-month-old girl: 2 days of T 39.4 C, poor feeding and irritability, with a normal ear, throat and chest exam and no rash. Catheter urine: leukocyte esterase positive, 50 WBC/hpf, 10^5 CFU/mL of a lactose fermenter; a later voiding study shows urine refluxing up the right ureter."
  - reason: error: an ultrasound does not show reflux (a voiding cystourethrogram does); organism class added (source: CV160 slides 5-8)
- #13 PSGN (matches CV161 case slide 11 and CV149 slide 172), #95 malakoplakia (CV157 slide 18), #96 STEC HUS (CV151 slide 15, CV161 case), #97 Shigella HUS (CV151 slide 15), #101 bladder SCC (CV157 slide 21: 70% squamous): checked, no change.


## qa.py fixes after the verification pass
- #8 Respiratory syncytial virus / Bronchiolitis in an infant - **micro**
  - before: "Enveloped nonsegmented (-) ssRNA pneumovirus; F protein spreads it cell to cell, fusing cells into multinucleated syncytia; survives 6 h on surfaces; antigen test or PCR; monoclonals and maternal vaccination protect infants"
  - after: "Enveloped nonsegmented (-) ssRNA pneumovirus; F protein spreads it cell to cell, fusing cells into multinucleated giant cells; survives 6 h on surfaces; antigen test or PCR; monoclonals and maternal vaccination protect infants"
  - reason: qa FAIL: 'syncytia' leaks the answer's name (source: CV129 transcript)
- #22 Bordetella pertussis / Paroxysmal cough illness in an unimmunized infant - **micro**
  - before: "Small encapsulated gram-negative aerobic coccobacillus; fastidious, grows only on high-blood Bordet-Gengou medium; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; pertussis and adenylate cyclase toxins raise cAMP"
  - after: "Small encapsulated gram-negative aerobic coccobacillus; fastidious, grows only on a selective medium very rich in blood; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; its A-B toxin and adenylate cyclase toxin raise cAMP"
  - reason: qa FAIL: medium and toxin names contain the genus/species; same content without the names (source: CV130 slide 16 + transcript)
- #52 Oral anaerobes (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) / Right lower-lobe infection days after a choking episode - **micro**
  - before: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need anaerobic transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - after: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need oxygen-free transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - reason: qa FAIL: 'anaerobic' leaks the item name (source: -)
- #53 Oral anaerobes (Bacteroides, Fusobacterium, Peptostreptococcus, Prevotella) / Single cavity with putrid sputum weeks after passing out - **micro**
  - before: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need anaerobic transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - after: "Mixed normal flora of the gingival crevices and dental plaque; killed by oxygen, so specimens need oxygen-free transport and culture; growth is polymicrobial, often alongside aerobes; their metabolism makes pus and sputum smell foul"
  - reason: kept identical to #52 (source: -)
- #64 Candida albicans / White mouth plaques scraped off a red base - **presentation**
  - before: "63-year-old man on a high-dose inhaled steroid for asthma who rinses poorly: 2 weeks of a cottony feeling in the mouth and altered taste. Creamy white patches on the tongue and cheeks come off with firm scraping, leaving red, slightly bleeding mucosa; swallowing painless; HIV negative."
  - after: "63-year-old man on a high-dose inhaled steroid for asthma who rinses poorly: 2 weeks of a cottony feeling in the mouth and altered taste. Creamy white patches on tongue and cheeks come off with firm scraping, leaving red, bleeding mucosa; swallowing painless; HIV negative."
  - reason: qa FAIL: over 280 chars (source: -)
- #83 Filoviruses (Ebola and Marburg viruses) / Fever, vomiting and bleeding after a funeral in West Africa - **micro**
  - before: "Filamentous (-) ssRNA viruses; African fruit bats are reservoir and vector; spread person to person by blood and body fluids; infect reticuloendothelial cells and suppress immunity; handled at BSL-4; ELISA or RT-PCR"
  - after: "Filamentous (-) ssRNA particles; African fruit bats are reservoir and vector; spread person to person by blood and body fluids; infect reticuloendothelial cells and suppress immunity; handled at BSL-4; ELISA or RT-PCR"
  - reason: qa FAIL: 'viruses' leaks the item name (source: -)
- #84 Hantavirus (Sin Nombre virus) / Abrupt lung flooding after sweeping out a rodent-infested barn - **micro**
  - before: "Enveloped segmented (-) ssRNA virus; deer mice are the reservoir and shed it in urine and droppings that people inhale as dust; causes no hemorrhage; fourfold rise in IgG or RT-PCR; ribavirin gives some benefit"
  - after: "Enveloped, segmented (-) ssRNA agent; deer mice are the reservoir and shed it in urine and droppings that people inhale as dust; causes no hemorrhage; fourfold rise in IgG or RT-PCR; ribavirin gives some benefit"
  - reason: qa FAIL: 'virus' leaks the item name (source: -)
- #87 Trichomonas vaginalis / Frothy yellow-green discharge with pinpoint cervical bleeding - **presentation**
  - before: "31-year-old woman with a new partner: 2 weeks of vulvar itching and soreness, burning on urination and a copious thin, foul-smelling discharge. Vaginal pH 6.0; routine urine culture sterile; wet mount: many neutrophils and motile pear-shaped organisms."
  - after: "31-year-old woman with a new partner: 2 weeks of vulvar itching and soreness, burning on urination and a copious thin, foul-smelling discharge. Discharge pH 6.0; routine urine culture sterile; wet mount: many neutrophils and motile pear-shaped organisms."
  - reason: qa FAIL: 'vaginal' leaks the species name (source: -)
- #22 Bordetella pertussis / Paroxysmal cough illness in an unimmunized infant - **micro**
  - before: "Small encapsulated gram-negative aerobic coccobacillus; fastidious, grows only on a selective medium very rich in blood; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; its A-B toxin and adenylate cyclase toxin raise cAMP"
  - after: "Encapsulated gram-negative aerobic coccobacillus; fastidious, grows only on a selective medium very rich in blood; fimbriae and filamentous hemagglutinin anchor it to ciliated cells; its A-B toxin and adenylate cyclase toxin raise cAMP"
  - reason: qa FAIL: 241 chars (source: -)

## Disease labels as an answer column
- #91 Escherichia coli / Burning, frequency and urgency without fever in a young woman - **disease**
  - before: "Burning, frequency and urgency without fever in a young woman"
  - after: "Nitrite-positive cystitis without fever in a young woman"
  - reason: label uniqueness: 'burning, frequency and urgency without fever in a young woman' fits S. saprophyticus equally (CV152: most frequent in young sexually active women) (source: CV143 transcript (nitrite = gram-negatives, esp. E. coli); CV152 slide 13)
- #99 Staphylococcus saprophyticus / Burning and frequency 2 days after intercourse - **disease**
  - before: "Burning and frequency 2 days after intercourse"
  - after: "Nitrite-negative cystitis after intercourse, cocci in clusters"
  - reason: label uniqueness: 'burning and frequency 2 days after intercourse' fits E. coli equally (source: CV152 slide 13 + transcript)
- #94 Escherichia coli / Fever without a source in a 3-month-old infant - **disease**
  - before: "Fever without a source in a 3-month-old infant"
  - after: "Febrile urinary infection in a 3-month-old infant"
  - reason: 'fever without a source' did not say urinary and could fit other infant infections (source: CV160 slide 5)
- #27 Pseudomonas aeruginosa / Ventilator-associated pneumonia - **disease**
  - before: "Ventilator-associated pneumonia"
  - after: "Late ventilator-associated pneumonia with green secretions"
  - reason: label uniqueness: CV139 gives S. aureus and Pseudomonas as the two common VAP organisms; S. aureus is on the same answer column (source: CV139 slide 52; CV140 slide 31 (hospitalized >1 week))
- #30 Pseudomonas aeruginosa / Catheter-associated urinary infection after 10 days - **disease**
  - before: "Catheter-associated urinary infection after 10 days"
  - after: "Catheter-associated urinary infection by an oxidase-positive rod"
  - reason: label uniqueness: 'catheter-associated urinary infection after 10 days' fits Candida, Klebsiella and Enterococcus items too (source: CV152 slide 12)
- #6 Influenza A virus / Primary viral pneumonia during a winter epidemic - **disease**
  - before: "Primary viral pneumonia during a winter epidemic"
  - after: "Primary viral pneumonia by day 3 of seasonal flu in pregnancy"
  - reason: label uniqueness: 'primary viral pneumonia during a winter epidemic' also fits SARS-CoV-2 (now seasonal per CV129) (source: CV129 slides 14-15, 21)
- #78 Vibrio cholerae / Painless flooding watery stools after a flood - **disease**
  - before: "Painless flooding watery stools after a flood"
  - after: "Painless torrential watery stools after a disaster"
  - reason: label said 'after a flood' but the card (and lecture: Haiti earthquake, Yemen war) is a disaster with broken water supply (source: CV138 slide 19)
- #21 Klebsiella pneumoniae / Carbapenem-resistant bloodstream infection in the ICU - **disease**
  - before: "Carbapenem-resistant bloodstream infection in the ICU"
  - after: "Carbapenem-resistant mucoid enteric rod bacteremia in the ICU"
  - reason: label uniqueness: CV138 lists Pseudomonas and E. coli among carbapenem-resistant organisms; mucoid enteric rod points to one (source: CV138 slide 14; CV140 slide 32)
- #10 Streptococcus pneumoniae / Acute bacterial sinusitis after a cold - **avoid**
  - before: {"presentation": ["Haemophilus influenzae"]}
  - after: {"presentation": ["Haemophilus influenzae"], "disease": ["Haemophilus influenzae"]}
  - reason: the label 'Acute bacterial sinusitis after a cold' fits H. influenzae equally (CV141: the two bacterial causes); avoid extended to the disease attribute (source: CV141 slide 33)

## Summary of the verification pass

Checked: all 104 items (micro, presentation, disease label, lectures). Changed: 61 items
(30 micro, 27 presentation, 11 disease labels, 14 lectures lists, 1 avoid). No items added or
removed. Final qa.py: 0 FAIL, 0 WARN. Labels: 104 unique, longest 66 chars.

Design note: an organism's micro card varies across its items only where the variant points to
that item's disease (E. coli fimbriae vs P-pili vs prostate vs infant vs malakoplakia; TB latent
IGRA and MDR mutations; severe-dengue antibody enhancement; schistosome cancer; Klebsiella UTI;
tularemia tick cycle). All other same-organism micros are identical so the engine dedups them.

### Summary-only claims removed (on the summary, not on slides/transcript)
- CV129: adenovirus serotypes 3/4/7; RSV syncytia shield it from antibody; SARS-CoV-2 ~30 kb genome,
  furin cleavage, loss of smell and taste.
- CV136: Coccidioides alkaline soil and 20-100 um spherules; Blastomyces acidic soil, rotting wood,
  8-15 um, double-contoured wall; Paracoccidioides estrogen block and 13:1 male ratio;
  Talaromyces soluble red pigment.
- CV140: Acinetobacter resists quaternary ammonium disinfectants; S. epidermidis non-hemolytic,
  mannitol-negative, novobiocin-sensitive.
- Not from a summary but not taught either (removed): pertussis charcoal medium and NP-swab PCR,
  measles "most contagious, lingers in room air", dengue NS1/day-biting/IgM timing, filovirus
  cave bats and cell-entry detail, hantavirus three segments/IgM, VRE PYR/optochin/vanA,
  cholera polar flagellum and yellow colonies, Candida urine biofilm/glucose claim,
  oral anaerobes "dental extraction clears it", Aspergillus precipitins.

### Unsure / left as is
- #32 B. cepacia: patient-to-patient spread on a CF ward is standard but lecture-silent.
- #55 C. diphtheriae micro (tellurite, Loeffler, Elek, granules) is standard but no lecture
  teaches diphtheria micro; kept because a micro card is required.
- #59/#60 Histoplasma "two precipitin bands": lecturer's phase-antigen explanation differs from
  the H/M board convention; card names only the two bands.
- #17 S. aureus renal abscess keeps CV155 (teaches hematogenous pyelonephritis/abscess without
  naming the organism).

## Orchestrator edits (after verification)
- C. diphtheriae micro: tellurite/Loeffler/Elek/club-shaped palisades are not taught in any CPR 3 lecture. Trimmed to what is taught: toxin inactivates EF-2 (CV131 transcript), rare in the US from vaccination (CV141 slide). CV131 added to lectures.
- B. cepacia presentation: ward-to-ward spread is not taught; replaced with CV131's teaching (CF patients susceptible, resistant to many antibiotics; slide: gram-negative aerobic rod, catalase+ oxidase+).
