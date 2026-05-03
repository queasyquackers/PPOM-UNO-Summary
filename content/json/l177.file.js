window.receiveLectureContent({
  id: "l177",
  module: "Microbiology",
  metadata: {
    title: "Lecture #177: Microbiology of Zoonotic Infections",
    lecturer: "T. Slieman, Ph.D. (Session 177)",
    readingTime: "13-16 min",
    difficulty: "Advanced",
    tags: ["Microbiology", "Zoonosis", "Yersinia", "Anthrax", "Lyme", "Leptospirosis", "Rickettsia", "Ehrlichia", "Q Fever", "Tularemia", "Brucellosis"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyMicro",
      chapter: "Bacteria > Zoonotic and Vector-Borne Pathogens",
      alternatives: [
        { resource: "BandB", chapter: "Microbiology > Zoonotic and Tick-borne Diseases" },
        { resource: "FirstAid", chapter: "Microbiology > Zoonotic Bacteria; Vector-Borne Diseases" },
        { resource: "Pathoma", chapter: "Inflammatory and Infectious Disorders" }
      ]
    },
    anking: [
      { match: "Yersinia pestis (plague — bubonic, pneumonic, septicemic; flea vector)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Negative::Yersinia_pestis" },
      { match: "Yersinia enterocolitica (pseudoappendicitis, mesenteric adenitis)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Negative::Yersinia_enterocolitica" },
      { match: "Bacillus anthracis (cutaneous, inhalation/woolsorter, GI; black eschar; protective antigen + edema + lethal toxin)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Bacillus_anthracis" },
      { match: "Borrelia burgdorferi (Lyme disease — Ixodes, erythema migrans, stages)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Spirochetes::Borrelia_burgdorferi" },
      { match: "Borrelia recurrentis (relapsing fever — louse, antigenic variation)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Spirochetes::Borrelia_recurrentis" },
      { match: "Leptospira interrogans (Weil disease — rat urine, jaundice, AKI)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Spirochetes::Leptospira" },
      { match: "Rickettsia rickettsii (Rocky Mountain spotted fever — Dermacentor tick, palm/sole rash)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Rickettsia::R_rickettsii" },
      { match: "Rickettsia prowazekii (epidemic typhus — louse; Brill-Zinsser recrudescence)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Rickettsia::R_prowazekii" },
      { match: "Ehrlichia chaffeensis (monocytic ehrlichiosis — Lone Star tick, morulae)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Rickettsia::Ehrlichia" },
      { match: "Anaplasma phagocytophilum (granulocytic anaplasmosis — Ixodes, morulae in neutrophils)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Rickettsia::Anaplasma" },
      { match: "Coxiella burnetii (Q fever — livestock parturition, atypical pneumonia, culture-negative endocarditis)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Rickettsia::Coxiella_burnetii" },
      { match: "Francisella tularensis (tularemia / rabbit fever — low infectious dose, bioterror agent)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Negative::Francisella_tularensis" },
      { match: "Brucella (undulant fever, unpasteurized dairy, intracellular)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Negative::Brucella" },
      { match: "Doxycycline as treatment for tick-borne disease", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Tetracyclines" }
    ]
  },
  summary: `
# Story Mode: Diseases We Caught from Animals

A **zoonosis** is an infection acquired from an animal — usually accidentally, often from a vector (tick, flea, louse, mosquito) but sometimes from direct contact, ingestion, or inhalation. Humans are typically **dead-end hosts**: most zoonotic infections cannot then spread person-to-person. The historical importance is enormous (the Black Death killed 25 million Europeans), and the current importance is steady — Lyme disease alone causes ~30,000 reported US cases per year and is the leading vector-borne illness in the United States.

This lecture covers nine classical zoonotic bacteria: **Yersinia, Bacillus anthracis, Borrelia, Leptospira, Rickettsia, Anaplasma, Ehrlichia, Coxiella, Francisella, and Brucella.** They group neatly into a few categories:
- **Vector-borne tick / flea / louse infections** (Yersinia pestis, Borrelia, Rickettsia, Anaplasma, Ehrlichia, Francisella)
- **Direct-contact / occupational exposures** (Bacillus anthracis, Brucella, Coxiella, Leptospira)
- **Bioterror potential** (Bacillus anthracis, Yersinia pestis, Francisella tularensis — the CDC Category A trio)

The unifying treatment theme is **doxycycline**, which covers most tick-borne and rickettsial illness. Memorize the exceptions (the antibiotic that doesn't fit the pattern) and the diseases — the rest is pattern recognition.

---

## 1. Yersinia (Slides 8–13)

Two species cause human disease.

| Species | Disease | Vector / Source | Hallmark |
| :--- | :--- | :--- | :--- |
| **Y. pestis** | **Plague** (bubonic, pneumonic, septicemic) | **Flea bite** (sylvatic: prairie dogs, rodents in SW US; urban: rats) | Painful inguinal lymphadenopathy ("**buboes**") |
| **Y. enterocolitica** | **Mesenteric adenitis / pseudoappendicitis** | Contaminated meat, milk, water | RLQ pain mimicking appendicitis in a young child |

**Microbiology:** Both are **gram-negative facultative anaerobic rods**. Famously **cold-tolerant** (grow at 4°C) — Y. enterocolitica can be selected for by **cold enrichment** of cultures.

**Y. pestis virulence:**
- **Type III secretion system** that injects effector proteins into host cells, suppressing cytokine production and phagocytosis.
- Capsule and **plasminogen activator protease (Pla)** — degrades complement and prevents opsonization.
- Coagulase, fibrinolysin.

**Plague clinical syndromes:**
- **Bubonic plague:** flea bite → fever and painful inguinal lymphadenopathy (buboes) at 7 days. Untreated mortality ~50–60%.
- **Pneumonic plague:** inhalation or hematogenous spread to lung. **Person-to-person transmission via respiratory droplets** (the only plague form with this risk). **~100% mortality untreated.**
- **Septicemic plague:** Y. pestis bacteremia with multi-organ failure, DIC, gangrene of digits ("**Black Death**").

**Treatment:** Streptomycin, gentamicin, doxycycline, ciprofloxacin (early empiric is critical — bedside diagnosis on a high-risk traveler should not wait for confirmation).

---

## 2. Bacillus anthracis (Slides 14–18)

**Microbiology:** Large gram-positive **spore-forming** rod, **obligate aerobe**, **non-motile**. Grows in long chains on Gram stain — "boxcar" appearance. On blood agar, **non-hemolytic** colonies with a distinctive "**Medusa head**" branching morphology.

**Capsule:** **Polypeptide capsule of D-glutamic acid** — unique among bacteria (most capsules are polysaccharide). Antiphagocytic.

**Anthrax toxin (tripartite, A-B model):**
- **Protective antigen (PA):** the B subunit; binds host receptor and translocates the active subunits into the cell.
- **Edema factor (EF):** an **adenylate cyclase** that raises intracellular cAMP → fluid efflux and edema.
- **Lethal factor (LF):** a **zinc metalloprotease** that cleaves MAPK kinases → macrophage apoptosis and tissue necrosis.

(EF + PA = "edema toxin"; LF + PA = "lethal toxin.")

**Three clinical forms** based on route of entry:

| Form | Route | Presentation | Mortality |
| :--- | :--- | :--- | :--- |
| **Cutaneous** (95% of cases) | Spore inoculation through broken skin | Painless papule → vesicle → **black eschar with surrounding edema**; "anthrax" = Greek for *coal* | ~20% untreated, <1% with antibiotics |
| **Gastrointestinal** | Ingestion of contaminated meat | Severe abdominal pain, hematemesis, bloody diarrhea, mesenteric lymphadenopathy | ~50% |
| **Inhalation ("Woolsorter's disease")** | Spore inhalation; classically from sorting contaminated wool | Initial flu-like illness → mediastinal widening on chest X-ray (hemorrhagic mediastinitis) → shock and death within 3 days | **~100%** untreated |

**No person-to-person transmission.**

**Treatment:** Empiric **ciprofloxacin or doxycycline + 1–2 additional agents** (e.g., clindamycin, rifampin) for systemic anthrax. **Amoxicillin** is acceptable for cutaneous anthrax in non-bioterror settings.

[Lecturer Emphasis] Anthrax is a **CDC Category A bioterrorism agent**. The 2001 US postal anthrax letters infected 22 and killed 5 — the spores' environmental persistence and high lethality of the inhalation form make weaponization a real concern.

:::correlate
Inhalation Anthrax (Woolsorter's Disease)

- **Pathophysiology:** Inhaled spores phagocytosed by alveolar macrophages → transported to mediastinal lymph nodes → spores germinate → vegetative bacilli release tripartite toxin → **hemorrhagic mediastinitis**, septicemia, and shock.
- **Presentation:** **Two-phase illness.** Phase 1 (1–6 days): flu-like prodrome with fever, malaise, dry cough, mild chest discomfort — easily missed. Phase 2 (abrupt onset): high fever, severe dyspnea, **mediastinal widening on chest X-ray** (the radiologic hallmark), shock, and death within 24–48 hours.
- **Diagnosis:** Blood cultures grow *B. anthracis*; rapid PCR; Gram stain shows large gram-positive rods. Chest imaging shows widened mediastinum, pleural effusions, NO infiltrate (it is not pneumonia — it is mediastinitis).
- **Treatment:** **Ciprofloxacin or doxycycline + clindamycin + (penicillin or other agent)** intravenously; raxibacumab (monoclonal antibody against PA) for adjunctive therapy.
- **Risk Factors:** Occupational exposure to animal hides/wool (textile workers, taxidermists, ranchers); intentional bioterrorism release; veterinarians and lab workers handling cultures.
- **Complications:** Hemorrhagic meningitis (rapidly fatal), shock, multi-organ failure.
- **Lecturer's Point:** [Lecturer Emphasis] **Mortality approaches 100% untreated.** Even with maximal modern therapy, mortality is around 45-50%. Always think anthrax in a previously healthy patient with abrupt mediastinal widening + shock + relevant exposure history (postal worker, wool handler, suspicious powder).
:::

---

## 3. Borrelia (Slides 19–22)

**Microbiology:** **Spirochetes** — long, thin, motile, helical bacteria. Visualized poorly on Gram stain; use **dark-field microscopy** or **silver stain**.

### Borrelia burgdorferi → Lyme Disease

- **Vector:** **Ixodes scapularis** (deer tick / black-legged tick).
- **Reservoir:** **White-footed mouse** is the bacterial reservoir; **white-tailed deer** is required for the tick's adult life cycle (but is NOT a reservoir).
- **Geography:** **Northeast and upper Midwest US** (Maine to Virginia; Wisconsin/Minnesota). Single most common vector-borne illness in the US (~30,000 reported, true count ~470,000/yr).

**Three clinical stages:**

| Stage | Timing | Manifestations |
| :--- | :--- | :--- |
| **Early localized** | Days–weeks | **Erythema migrans** (the "bull's-eye rash") — pathognomonic when present (~70% of cases). Mild flu-like symptoms. |
| **Early disseminated** | Weeks–months | Multiple secondary EM lesions; **AV block** (especially first-degree); cranial neuropathy (**Bell's palsy**); meningitis; carditis |
| **Late** | Months–years | **Lyme arthritis** (large joints, especially knee, monoarticular or oligoarticular); chronic encephalopathy |

**Diagnosis:** Clinical when EM is present. Two-tier serology: **ELISA** screen → **Western blot** confirmation. PCR rarely needed.

**Treatment:** **Doxycycline** (early Lyme); **ceftriaxone** for neurologic, cardiac, or arthritic Lyme.

:::highyield
**Lyme disease pearls:**
- The **white-tailed deer is NOT a reservoir** — only required for the tick's adult phase. The reservoir is the white-footed mouse (and other small rodents).
- **Doxycycline** is first-line for early Lyme even in children >8 — short course (10–14 days), the dental discoloration risk is negligible.
- **Erythema migrans** alone is enough for clinical diagnosis — do not wait for serology, which is often falsely negative early on.
:::

### Borrelia recurrentis → Relapsing Fever

- **Vector:** **Body louse** (*Pediculus humanus*) — not a tick.
- **Geography:** Refugee camps, war zones, areas of poor sanitation (Ethiopia, Sudan, Somalia historically).
- **Mechanism of "relapsing":** **Antigenic variation** of surface lipoproteins — each immune response clears one variant, but a new antigenic variant emerges from a small persisting population, producing a new febrile episode. Cycle repeats.
- **Untreated mortality 30–70%.**
- Treatment: tetracycline (often complicated by Jarisch-Herxheimer reaction).

---

## 4. Leptospira interrogans → Leptospirosis (Slides 23–26)

**Microbiology:** Tightly coiled spirochete with characteristic **hooked ends** ("question-mark" shape — hence "interrogans"). Obligate aerobe; grows in special media (**EMJH** = Ellinghausen-McCullough-Johnson-Harris). Visualized by **dark-field microscopy**.

**Reservoir:** Mainly **rats and rodents** (also dogs, livestock). Bacteria colonize the renal tubules and are **shed continuously in urine**, contaminating water sources.

**Transmission:** Skin contact or mucous membrane exposure to **water contaminated by infected animal urine.**

**Geography:** Tropical/subtropical regions worldwide; in the US, **Hawaii** has the highest incidence (warm + abundant freshwater + rats).

**Clinical phases:**
1. **Bacteremic phase** (1 wk): fever, severe muscle aches (especially calves), headache, **conjunctival suffusion** (red eyes without exudate — characteristic).
2. Brief defervescence.
3. **Immune phase**: meningitis, uveitis. Most patients recover.

**Severe form: Weil disease** (5–10%):
- **Jaundice** (hepatic involvement)
- **Acute kidney injury**
- Hemorrhagic pneumonitis
- Multi-organ failure
- Mortality 5–15%

**Diagnosis:** Serology (microscopic agglutination test); PCR; culture is slow (>2 weeks).

**Treatment:** Mild — **doxycycline**. Severe — **IV penicillin**. Doxycycline weekly is also used for prophylaxis in high-risk exposures (e.g., disaster relief workers wading through floodwater).

---

## 5. Rickettsiae and Their Cousins (Slides 27–34)

A family of **obligate intracellular gram-negative coccobacilli**. **Stain poorly on Gram stain** — visualized with **Giemsa** or **Gimenez** stain. Most are **vector-transmitted** (ticks, lice, fleas, mites) and most are **doxycycline-treated.**

### Rickettsia rickettsii → Rocky Mountain Spotted Fever (RMSF)

- **Vector:** **Dermacentor tick** (American dog tick or Rocky Mountain wood tick).
- **Geography (a counterintuitive lecturer point):** Despite the name, most cases are in the **southeast US** — **North Carolina, Tennessee, Arkansas, Missouri, Virginia, Oklahoma**.
- **Mechanism:** Outer membrane protein A (**OmpA**) binds vascular endothelium → invasion and replication → **vasculitis** with vascular leak, hypotension, thrombocytopenia.
- **Clinical:**
  - Fever, headache, myalgia 2–14 days after tick bite.
  - **Rash starts on wrists and ankles** (palms/soles), then spreads centripetally to trunk. Initially macular, becoming **petechial** as vasculitis progresses (a bad prognostic sign).
  - Without treatment: 10–25% mortality.
- **Diagnosis:** Clinical/empiric. Serology (indirect immunofluorescence) confirms in retrospect. **The old Weil-Felix test** (cross-reaction with Proteus) is cheap but insensitive.
- **Treatment:** **Doxycycline empirically, do not wait for confirmation.** This is one of the few absolute indications for doxycycline in young children.

### Rickettsia prowazekii → Epidemic Typhus

- **Vector:** **Body louse** (*Pediculus humanus*) — same as B. recurrentis.
- **Setting:** Crowding, war, refugees, poor hygiene; cluster outbreaks.
- **Reservoir:** Humans and **flying squirrels** (in the US).
- **Brill-Zinsser disease:** **Late recrudescence** of latent infection years after primary epidemic typhus, typically triggered by stress or immunosuppression. The patient is older now, the disease is milder, but it can serve as a source for new epidemic outbreaks.

### Anaplasma phagocytophilum and Ehrlichia chaffeensis (Slides 31–33)

Both are **obligate intracellular** gram-negative organisms that infect **leukocytes** and form characteristic intracellular inclusions called **morulae** ("mulberry-like" clusters).

| | Ehrlichia chaffeensis | Anaplasma phagocytophilum |
| :--- | :--- | :--- |
| **Disease** | Human Monocytic Ehrlichiosis (HME) | Human Granulocytic Anaplasmosis (HGA) |
| **Cell infected** | **Monocytes** | **Granulocytes (neutrophils)** |
| **Tick** | **Lone Star tick** (Amblyomma americanum) | **Ixodes scapularis** (same as Lyme — coinfection possible) |
| **Reservoir** | White-tailed deer | Small rodents |
| **Geography** | Southeastern and south-central US | Northeast and upper Midwest US (Lyme range) |

**Clinical:** Fever, headache, myalgia, leukopenia, thrombocytopenia, elevated transaminases. Rash uncommon ("**Rocky Mountain spotless fever**" sometimes used for HME). Severe cases: respiratory failure, sepsis-like syndrome.

**Treatment:** **Doxycycline.**

### Coxiella burnetii → Q Fever (Slide 34)

**Q for "query" — the disease's name from when its etiology was unknown.**

- **Microbiology:** Obligate intracellular gram-negative; weakly Gram-staining; forms a **spore-like resistant form** that survives in the environment.
- **Reservoir:** **Cattle, sheep, goats** — bacteria concentrated in **placenta and birth fluids**. (Coxiella has tropism for placental tissue.)
- **Transmission:** **Inhalation of aerosolized particles from livestock parturition fluids or contaminated dust.** No vector required. **Occupational exposure** — farmers, veterinarians, slaughterhouse workers, abattoir staff.
- **Highly infectious** — single organism can cause infection.
- **Clinical:**
  - **Acute Q fever:** flu-like syndrome with **atypical pneumonia** and **granulomatous hepatitis** ("doughnut" granulomas with central fibrin ring on biopsy — pathognomonic).
  - **Chronic Q fever:** **Culture-negative endocarditis** (think Q fever in any culture-negative endocarditis case with relevant exposure); arises months-to-years after initial infection, especially in patients with valvular disease or immunosuppression.
- **Diagnosis:** Serology.
- **Treatment:** Acute — doxycycline. Chronic endocarditis — **doxycycline + hydroxychloroquine** for 18 months minimum.

---

## 6. Francisella tularensis → Tularemia / "Rabbit Fever" (Slides 35–37)

- **Microbiology:** **Tiny gram-negative pleomorphic coccobacillus**; intracellular; **fastidious** — requires cysteine-supplemented media (e.g., **buffered charcoal yeast extract** — the same medium used for *Legionella*).
- **Reservoir:** **Rabbits** and other small mammals; ticks.
- **Transmission:** Skin contact with infected animals (skinning a rabbit is the classic exposure); tick bite (Dermacentor, Amblyomma); ingestion of contaminated water; **inhalation**.
- **Extremely low infectious dose: <10 organisms.** Combined with environmental persistence, this makes Francisella a **CDC Category A bioterrorism agent**.
- **Geography:** Worldwide; in the US, most cases are in **Arkansas, Oklahoma, Missouri** (south-central states).

**Clinical forms** (depend on inoculation route):

| Form | Route | Hallmark |
| :--- | :--- | :--- |
| **Ulceroglandular** (most common, ~80%) | Skin contact / tick bite | Painful skin **ulcer** at bite site + regional **lymphadenopathy** |
| **Glandular** | Skin contact (no obvious ulcer) | Lymphadenopathy without skin lesion |
| **Oculoglandular** | Eye contact | Conjunctivitis + preauricular adenopathy |
| **Oropharyngeal** | Ingestion | Pharyngitis, cervical adenopathy |
| **Pneumonic** | Inhalation | Atypical pneumonia (most lethal form; concerning for bioterror release) |
| **Typhoidal** | Hematogenous | Septic syndrome without localizing signs |

**Diagnosis:** **Serology preferred** (culturing requires BSL-3 facility — high lab-acquired infection risk). PCR available.

**Treatment:** **Streptomycin** (first-line) or **gentamicin**. **Doxycycline or ciprofloxacin** as alternatives.

---

## 7. Brucella → Brucellosis / Undulant Fever / Malta Fever (Slides 38–40)

- **Microbiology:** Small gram-negative coccobacilli; aerobic; intracellular (lives in **macrophages**); slow-growing — cultures must be held **2 weeks** before declaring negative.
- **Species and animal reservoirs:**
  - **B. abortus** → cattle
  - **B. melitensis** → goats and sheep (most pathogenic for humans)
  - **B. suis** → pigs
  - **B. canis** → dogs
- **Transmission:** **Unpasteurized dairy** (cheese, milk) is the dominant route; direct contact in occupational settings (farmers, veterinarians, slaughterhouse workers).
- **Geography:** Endemic in Mediterranean, Middle East, Latin America, sub-Saharan Africa. Most US cases are imported via dairy products.

**Clinical: "undulant fever"** — fevers cycle in waves over weeks. Fever, sweats, malaise, **back pain** (Brucella has tropism for **bone and joints** — sacroiliitis, vertebral osteomyelitis are characteristic), **hepatosplenomegaly**, lymphadenopathy. Untreated → **chronic infection with vertebral osteomyelitis or endocarditis**.

[Lecturer Emphasis] Brucella has affinity for **erythritol** — concentrated in placenta, uterus, breast tissue, epididymis. This explains the localization in animal reservoirs (cattle abortion) and human complications (orchitis, abortion).

**Diagnosis:** Blood cultures (held 2 weeks); fourfold rise in serology titers.

**Treatment:** **Doxycycline + rifampin** (or doxycycline + streptomycin) for **6 weeks minimum** — long course because of intracellular persistence and slow growth.

---

## 8. Treatment Cheat Sheet

The single most testable shortcut: **doxycycline covers most tick-borne and rickettsial illness.** Memorize the exceptions.

| Organism | First-line treatment |
| :--- | :--- |
| Y. pestis | Streptomycin or gentamicin |
| Y. enterocolitica | Often self-limited; severe → doxycycline / TMP-SMX |
| B. anthracis (cutaneous) | Amoxicillin |
| B. anthracis (systemic) | Cipro/doxy + clinda + 2nd agent |
| B. burgdorferi (Lyme) | **Doxycycline**; ceftriaxone for cardiac/neuro/arthritis |
| B. recurrentis | Tetracycline |
| Leptospira | **Doxycycline** (mild); IV penicillin (severe) |
| Rickettsia (RMSF, typhus) | **Doxycycline** |
| Anaplasma, Ehrlichia | **Doxycycline** |
| Coxiella (Q fever, acute) | **Doxycycline** |
| Coxiella (Q fever, chronic endocarditis) | Doxycycline + hydroxychloroquine ×18 months |
| Francisella | **Streptomycin** or gentamicin |
| Brucella | **Doxycycline + rifampin** ×6 weeks |
`,
  questions: [
    {
      question: "A 7-year-old boy in central Arkansas is brought to clinic with 5 days of fever, severe headache, and a 1-day history of a maculopapular rash that started on his wrists and ankles and has now spread to his trunk. His mother removed a tick from his leg about a week before symptoms began. Which is the most appropriate next step?",
      options: [
        "Await IgG seroconversion before initiating any therapy",
        "Begin empiric doxycycline immediately for suspected Rocky Mountain spotted fever",
        "Start IV ceftriaxone for suspected Lyme disease",
        "Reassure and recheck in 48 hours",
        "Begin amoxicillin for cutaneous anthrax"
      ],
      correctAnswer: 1,
      rationale: "Rocky Mountain spotted fever — caused by Rickettsia rickettsii from Dermacentor tick bite — classically presents with fever + headache + a rash that begins on the wrists and ankles and spreads centripetally. The geographic clue (Arkansas) and timing (a week post-tick) fit. Empiric doxycycline is the standard of care and must not wait for serologic confirmation; mortality without treatment is 10-25%. Doxycycline is appropriate even in young children for RMSF — the brief course's dental discoloration risk is far outweighed by the disease's lethality."
    },
    {
      question: "A 28-year-old woman in Maine presents with a 6 cm expanding red ring with central clearing on her thigh, low-grade fever, malaise, and arthralgias. She recalls hiking in the woods 3 weeks ago. Which of the following best characterizes the reservoir and vector for the responsible pathogen?",
      options: [
        "Reservoir = white-tailed deer; vector = Dermacentor tick",
        "Reservoir = white-tailed deer; vector = Lone Star tick",
        "Reservoir = white-footed mouse; vector = Ixodes scapularis tick (deer tick)",
        "Reservoir = body louse; vector = body louse",
        "Reservoir = rabbit; vector = Dermacentor tick"
      ],
      correctAnswer: 2,
      rationale: "This is early localized Lyme disease — erythema migrans is pathognomonic. Borrelia burgdorferi's reservoir is the white-footed mouse (and other small rodents); the white-tailed deer is required for the tick's adult life cycle but is NOT a reservoir for the bacterium. The tick vector is Ixodes scapularis (deer tick / black-legged tick) in the northeast and upper Midwest. Treatment is doxycycline (or amoxicillin in pregnancy or children <8 by traditional guidance, though current guidelines support short-course doxy in younger kids too)."
    },
    {
      question: "A 50-year-old farmer in central California presents with 3 weeks of recurrent fevers, drenching night sweats, low back pain, and a 10-pound weight loss. He drinks raw goat milk from his own herd. Lab workup shows mildly elevated transaminases and a normal CBC. Blood cultures held for >2 weeks finally grow a small gram-negative coccobacillus. Which of the following is the most likely diagnosis and treatment?",
      options: [
        "Tularemia — treat with streptomycin",
        "Q fever — treat with doxycycline",
        "Brucellosis — treat with doxycycline + rifampin for 6 weeks",
        "Leptospirosis — treat with IV penicillin",
        "Lyme disease — treat with doxycycline"
      ],
      correctAnswer: 2,
      rationale: "Brucellosis from unpasteurized dairy. The clinical clues all fit: undulant fevers, drenching night sweats, back pain (Brucella's tropism for vertebrae causes vertebral osteomyelitis and sacroiliitis), occupational/dietary exposure (raw goat milk → B. melitensis is the most pathogenic species), and slow-growing gram-negative coccobacillus on blood culture (the lab held cultures >2 weeks because Brucella is notoriously slow). Treatment requires DOUBLE coverage with doxycycline + rifampin (or + streptomycin) for at least 6 weeks because of intracellular persistence."
    },
    {
      question: "A 35-year-old veterinarian who specializes in livestock develops fever, severe headache, and atypical pneumonia after attending a sheep birthing on a farm. Liver biopsy obtained 2 weeks later shows 'doughnut' granulomas with a central fibrin ring. Which of the following organisms is most likely responsible?",
      options: [
        "Mycobacterium tuberculosis",
        "Coxiella burnetii",
        "Pneumocystis jirovecii",
        "Streptococcus pneumoniae",
        "Histoplasma capsulatum"
      ],
      correctAnswer: 1,
      rationale: "Coxiella burnetii (Q fever) is acquired through inhalation of aerosolized particles from livestock parturition fluids or contaminated dust. Acute Q fever presents with atypical pneumonia and granulomatous hepatitis; the 'doughnut' granuloma with a central fibrin ring is classic. Veterinarians, farmers, and slaughterhouse workers are at highest occupational risk. Diagnosis is by serology (culture is dangerous — Coxiella is BSL-3). Treatment is doxycycline; chronic forms (culture-negative endocarditis) require doxycycline + hydroxychloroquine for 18 months."
    },
    {
      question: "Which of the following organisms is NOT considered a CDC Category A bioterrorism agent?",
      options: [
        "Bacillus anthracis",
        "Yersinia pestis",
        "Francisella tularensis",
        "Borrelia burgdorferi",
        "Variola virus (smallpox)"
      ],
      correctAnswer: 3,
      rationale: "Borrelia burgdorferi (Lyme disease) is NOT a Category A bioterrorism agent — it requires a tick vector and does not spread person-to-person. The CDC Category A agents are organisms with high mortality, ease of dissemination, and major public health impact: Bacillus anthracis (anthrax), Yersinia pestis (plague), Francisella tularensis (tularemia), Variola major (smallpox), Clostridium botulinum toxin (botulism), and viral hemorrhagic fevers (Ebola, Marburg, Lassa, Machupo)."
    }
  ],
  flashcards: [
    { front: "What is a **zoonosis**?", back: "An infection acquired from animals — typically with humans as accidental dead-end hosts that do not transmit the infection to other people. Common routes: vector bite (tick, flea, louse, mosquito), direct contact, ingestion, inhalation.", tag: "Microbiology" },
    { front: "Three forms of **plague** caused by Yersinia pestis?", back: "**Bubonic** (flea bite → painful inguinal buboes), **pneumonic** (inhalation → 100% mortality untreated, only person-to-person form), **septicemic** (bacteremia → DIC + digital gangrene = Black Death).", tag: "Microbiology" },
    { front: "What is the vector for plague?", back: "**Flea** (Xenopsylla cheopis from rats; in US sylvatic plague from prairie dog fleas in southwestern states).", tag: "Microbiology" },
    { front: "What is **Y. enterocolitica's** most testable clinical presentation?", back: "**Pseudoappendicitis / mesenteric adenitis** in a young child with bloody diarrhea — RLQ pain mimics appendicitis. Ingested from contaminated meat/milk.", tag: "Microbiology" },
    { front: "Three components of **anthrax toxin**?", back: "**Protective antigen (PA)** — binding/translocation; **Edema factor (EF)** — adenylate cyclase, raises cAMP; **Lethal factor (LF)** — zinc metalloprotease, cleaves MAPK kinases.", tag: "Microbiology" },
    { front: "Three forms of **anthrax**?", back: "**Cutaneous** (95%, painless papule → black eschar), **gastrointestinal** (severe abdominal pain, hematemesis), **inhalation/woolsorter's** (mediastinal widening, ~100% mortality untreated).", tag: "Microbiology" },
    { front: "What is the **vector for Lyme disease** in the US?", back: "**Ixodes scapularis** (black-legged tick / deer tick) in the northeast and upper Midwest; **I. pacificus** on the West Coast.", tag: "Microbiology" },
    { front: "What is the **reservoir** for Borrelia burgdorferi?", back: "**White-footed mouse** (and other small rodents). White-tailed deer is required for the tick's adult life cycle but is NOT a reservoir for the bacterium.", tag: "Microbiology" },
    { front: "What is **erythema migrans**?", back: "The expanding bull's-eye rash of early Lyme disease — **pathognomonic** when present (~70% of cases). Treatment can begin on clinical grounds without waiting for serology.", tag: "Microbiology" },
    { front: "What causes **Weil disease**?", back: "**Severe leptospirosis** — jaundice + acute kidney injury + hemorrhagic pneumonitis + multi-organ failure. From contact with rat urine-contaminated water (Hawaii is the US hotspot).", tag: "Microbiology" },
    { front: "Where does **Rocky Mountain spotted fever rash** start?", back: "**Wrists and ankles** (palms and soles), then spreads centripetally to the trunk. Fever + headache + tick bite + this rash distribution = empiric doxycycline.", tag: "Microbiology" },
    { front: "What is the vector for RMSF?", back: "**Dermacentor tick** (American dog tick or Rocky Mountain wood tick). Despite the name, most cases are in the **southeastern US** (NC, TN, AR, MO, VA).", tag: "Microbiology" },
    { front: "What is **Brill-Zinsser disease**?", back: "**Late recrudescence of epidemic typhus** (R. prowazekii) years after primary infection, triggered by stress or immunosuppression. Milder than the original infection but can seed new outbreaks.", tag: "Microbiology" },
    { front: "What are **morulae**, and which infections produce them?", back: "Mulberry-shaped intracellular bacterial inclusions seen on Giemsa stain. **Ehrlichia chaffeensis** in monocytes (Lone Star tick); **Anaplasma phagocytophilum** in granulocytes/neutrophils (Ixodes tick).", tag: "Microbiology" },
    { front: "What is **Q fever** and its key occupational exposure?", back: "**Coxiella burnetii** infection acquired by inhalation of aerosols from **livestock parturition fluids** (placenta, birthing dust). Risk: veterinarians, farmers, slaughterhouse workers. Atypical pneumonia + granulomatous hepatitis (doughnut granulomas) acutely; **culture-negative endocarditis** chronically.", tag: "Microbiology" },
    { front: "Why is **Francisella tularensis** considered a bioterror threat?", back: "**Extremely low infectious dose (<10 organisms)** + environmental persistence + high lethality (especially pneumonic form) = Category A agent. Acquired from rabbits (skinning), tick bites, or aerosol release.", tag: "Microbiology" },
    { front: "First-line treatment for **tularemia**?", back: "**Streptomycin** (or gentamicin). NOT doxycycline-first like other tick-borne diseases — this is one of the major exceptions.", tag: "Microbiology" },
    { front: "What is **brucellosis**, and what is its classic exposure?", back: "**Undulant fever** from Brucella species. Classic exposure is **unpasteurized dairy** (especially goat cheese — B. melitensis is most pathogenic). Tropism for bone (vertebral osteomyelitis), placenta, breast.", tag: "Microbiology" },
    { front: "Treatment for brucellosis?", back: "**Doxycycline + rifampin** (or + streptomycin) for **6 weeks minimum**. Long because the organism is intracellular (lives in macrophages) and slow-growing.", tag: "Microbiology" },
    { front: "What is the single most testable shortcut for treatment of tick-borne diseases?", back: "**Doxycycline covers almost everything** — Lyme, RMSF, ehrlichiosis, anaplasmosis, Q fever (acute), leptospirosis (mild). The major exceptions are: **plague (streptomycin/gentamicin)**, **tularemia (streptomycin)**, and **brucellosis (doxy + rifampin combo)**.", tag: "Microbiology" }
  ],
  pearls: [
    { title: "Pneumonic Plague Spreads Person-to-Person", content: "Plague is normally flea-borne and not contagious between humans, but the pneumonic form is transmitted by respiratory droplets. A confirmed case mandates respiratory isolation and post-exposure prophylaxis for contacts." },
    { title: "Mediastinal Widening = Anthrax Until Proven Otherwise (in Context)", content: "A previously healthy patient with relevant exposure (postal worker, wool handler, suspicious powder envelope) presenting with abrupt mediastinal widening on chest X-ray is inhalation anthrax until ruled out. Time to antibiotics correlates inversely with mortality." },
    { title: "Erythema Migrans Alone Is Diagnostic for Lyme", content: "Do not wait for two-tier serology if the bull's-eye rash is present and exposure is plausible. Early serology is frequently negative because antibodies have not yet developed. Treat clinically with doxycycline." },
    { title: "Doxycycline in Children for RMSF", content: "RMSF kills 10–25% untreated. The historical concern about doxycycline staining children's teeth applies to prolonged courses; a brief course for RMSF is far safer than untreated rickettsial disease. CDC and AAP both endorse doxycycline as first-line in children with suspected RMSF." },
    { title: "Q Fever Causes Culture-Negative Endocarditis", content: "Add Coxiella burnetii to the short list of culture-negative endocarditis pathogens (HACEK organisms, Bartonella, Q fever, Whipple disease). Get serology in any culture-negative endocarditis with relevant exposure (livestock, raw milk)." },
    { title: "Tularemia Hates Doxycycline, Loves Streptomycin", content: "The exception to the 'doxycycline for everything tick-borne' rule. Streptomycin or gentamicin is first-line for Francisella; ciprofloxacin and doxycycline are alternatives." },
    { title: "Brucellosis Is the 6-Week Disease", content: "Single-agent therapy and short courses fail. The intracellular niche (macrophages) and slow growth require dual therapy (doxycycline + rifampin) for 6 weeks. Patients often relapse if therapy is shortened." }
  ]
});
