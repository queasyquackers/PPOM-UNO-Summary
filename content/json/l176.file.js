window.receiveLectureContent({
  id: "l176",
  module: "Microbiology",
  metadata: {
    title: "Lecture #176: Microbiology of Skin and Mucous Membrane Infections",
    lecturer: "C. Abraham, M.D. (Session 176)",
    readingTime: "11-13 min",
    difficulty: "Intermediate",
    tags: ["Microbiology", "Skin Infections", "Staphylococcus aureus", "MRSA", "Streptococcus pyogenes", "Necrotizing Fasciitis", "Impetigo", "Cellulitis", "Pseudomonas", "Parvovirus B19"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyMicro",
      chapter: "Bacteria > Gram Positive > Staphylococci and Streptococci",
      alternatives: [
        { resource: "BandB", chapter: "Microbiology > Gram Positive Cocci; Dermatology > Bacterial Skin Infections" },
        { resource: "FirstAid", chapter: "Microbiology > Bacteriology > Skin Pathogens" },
        { resource: "Pathoma", chapter: "Inflammatory & Infectious Skin Disorders" },
        { resource: "SketchyPath", chapter: "Dermatology > Bacterial and Viral Skin Infections" }
      ]
    },
    anking: [
      { match: "Staphylococcus aureus (coagulase+, beta-hemolytic, MRSA)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Staphylococcus_aureus" },
      { match: "Staphylococcus epidermidis (coag-, novobiocin sensitive, prosthetic device infections)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Staphylococcus_epidermidis" },
      { match: "Staphylococcus saprophyticus (coag-, novobiocin resistant, UTI in young women)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Staphylococcus_saprophyticus" },
      { match: "Streptococcus pyogenes / Group A Strep", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Streptococcus_pyogenes" },
      { match: "Scalded skin syndrome (exfoliative toxin, Nikolsky sign)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Staph_aureus::Scalded_Skin" },
      { match: "Toxic shock syndrome (TSST-1 superantigen)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Toxic_Shock_Syndrome" },
      { match: "Necrotizing fasciitis (Group A Strep, polymicrobial, gas)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Necrotizing_Fasciitis" },
      { match: "Erysipelas vs cellulitis", resources: "AnKing Step 1 v11: #FirstAid::Dermatology::Bacterial::Erysipelas_vs_Cellulitis" },
      { match: "Pseudomonas aeruginosa (oxidase+, non-lactose fermenter, ecthyma gangrenosum)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Negative::Pseudomonas" },
      { match: "Cutibacterium (Propionibacterium) acnes", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Cutibacterium_acnes" },
      { match: "Actinomyces israelii (sulfur granules, lumpy jaw)", resources: "AnKing Step 1 v11: #SketchyMicro::Bacteria::Gram_Positive::Actinomyces_israelii" },
      { match: "Parvovirus B19 (erythema infectiosum / fifth disease, slapped cheek)", resources: "AnKing Step 1 v11: #SketchyMicro::Viruses::DNA::Parvovirus_B19" }
    ]
  },
  summary: `
# Story Mode: Who Lives on the Skin, and When Do They Misbehave?

The skin is not sterile. At any moment, between **10 billion and a trillion** bacteria are living on every adult's surface — most of them gram-positive cocci that cohabitate peacefully with the host. The same bacteria that quietly colonize the axilla can, given the right opening (a cut, a puncture, an indwelling catheter), produce a furuncle, a cellulitis, an endocarditis, or a fatal toxic shock. **The whole field of skin microbiology is the study of which organisms make this transition from commensal to pathogen, and what virulence factors they use to do it.**

This lecture builds a mental map: first the normal flora; then the two big gram-positive workhorses (staphylococci and streptococci) with their virulence factors and disease catalogs; then a short list of other clinically important skin pathogens; and finally one viral exanthem (parvovirus B19) that classically presents on the cheek.

---

## 1. Normal Skin and Mucous Membrane Flora (Slides 4–5)

The skin is **predominantly gram-positive.** Mucous membranes (oropharynx → anus) have their own flora dominated by streptococci and anaerobes.

| Organism | Prevalence | Notes |
| :--- | :--- | :--- |
| **Staphylococcus aureus** | **30–60%** of population colonized; ~half permanent, ~half transient | Most carry it on anterior nares; nasal swab is the screening site |
| **Staphylococcus epidermidis** | **Universal** — everyone is colonized | Major skin commensal; opportunistic on indwelling devices |
| **Streptococcus pyogenes** (Group A Strep) | Common oropharynx colonizer | Source of strep throat |
| **Diphtheroids** (Corynebacterium, **Propionibacterium [Cutibacterium]**) | Universal | C. acnes implicated in acne |
| **Candida albicans** | Mucous membranes | Yeast |
| **Dermatophytes** | Skin (especially groin, feet) | Trichophyton, Microsporum, Epidermophyton |

[Lecturer Emphasis] **Gram-negatives normally do NOT colonize healthy intact skin** of the upper torso and face. They appear transiently in **moist areas** (axillae) and increase in:
- The **waist and lower extremities** (especially with chronic illness)
- **Diabetics** (much higher gram-negative load on the legs)

---

## 2. The Staphylococci (Slides 6–11)

**General properties:** Gram-positive cocci in **clusters** ("grape-bunch"). Catalase-positive (distinguishes from streptococci). Non-motile. Grow well on blood agar at high salt — the basis for **mannitol salt agar** as a selective medium. Do **not** grow on MacConkey agar.

### Speciation by two simple tests:

| Test | S. aureus | S. epidermidis | S. saprophyticus |
| :--- | :---: | :---: | :---: |
| **Coagulase** | **+** | – | – |
| **Hemolysis on blood agar** | **β** (clear) | γ (none) | γ (none) |
| **Novobiocin** | n/a | **Sensitive** | **Resistant** |

### Staphylococcus aureus

The most pathogenic staphylococcus.

**Virulence factors (memorize these):**

- **Coagulase** — converts fibrinogen to fibrin, producing a fibrin shield around the bacteria that **inhibits phagocytosis.** The defining test for *S. aureus*.
- **Capsule (polysaccharide)** — antiphagocytic, blocks complement-mediated lysis.
- **Protein A** — binds the **Fc portion of IgG** (the wrong end for opsonization). This blocks opsonophagocytosis and depletes complement.
- **Catalase** — degrades H₂O₂, defeating the oxidative killing mechanism inside neutrophils.
- **Penicillinase (β-lactamase)** — produced by **~100%** of clinical isolates → opens the β-lactam ring, inactivating penicillin. This is why we use β-lactamase-stable agents (e.g., nafcillin, oxacillin).
- **Exotoxins** — superantigens (TSST-1, enterotoxins), exfoliative toxins (scalded skin), Panton-Valentine leukocidin (necrotizing pneumonia in MRSA).

**Disease catalog (skin-focused):**

| Disease | Lesion | Notes |
| :--- | :--- | :--- |
| **Furuncle ("boil")** | Single infected hair follicle | Localized abscess |
| **Carbuncle** | Coalesced cluster of furuncles | Larger, deeper, worse |
| **Impetigo (bullous)** | Flaccid bullae from epidermolytic toxin | Compare with strep impetigo (golden crust, more tense) |
| **Pyogenic wound infection** | Pus-producing wound | "Pyogenic" = pus-producing |
| **Staphylococcal Scalded Skin Syndrome (SSSS)** | Diffuse erythema + epidermal sloughing | **Positive Nikolsky sign**; mostly **young children**; toxin-mediated; usually recovers |
| **Toxic Shock Syndrome (TSS)** | Diffuse erythema + **strawberry tongue** | Superantigen TSST-1; classically tampon-associated |

Beyond skin: bacteremia/sepsis, **acute (left-sided) endocarditis**, pneumonia, empyema, **osteomyelitis** (#1 cause), septic arthritis, food poisoning (preformed toxin → rapid onset vomiting, often in mayo/cream-based foods).

:::correlate
Staphylococcal Scalded Skin Syndrome (SSSS)

- **Pathophysiology:** *S. aureus* produces **exfoliative toxins A and B** that cleave **desmoglein-1** in the granular layer of the epidermis, causing intraepidermal separation. Toxin spreads hematogenously from a localized infection (often nasopharyngeal) to distant skin.
- **Presentation:** **Children under 5 years old.** Initial fever and irritability, then diffuse erythematous rash, then **flaccid bullae** that rupture leaving moist denuded skin. **Nikolsky sign positive** — light lateral pressure on intact-appearing skin causes superficial epidermal sloughing.
- **Diagnosis:** Clinical; *S. aureus* may not be isolated from the skin lesions themselves (toxin-mediated, distal source). **Frozen section shows a superficial split** (versus deep junctional split in TEN) — useful for differentiating from toxic epidermal necrolysis.
- **Treatment:** **Anti-staphylococcal IV antibiotics** (nafcillin, oxacillin, vancomycin if MRSA). Supportive care for fluid losses; usually full recovery without scarring (the split is intraepidermal, above the basement membrane).
- **Risk Factors:** Age <5 years (low protective antibody titers; immature renal clearance of toxin), immunocompromise.
- **Complications:** Fluid loss, secondary infection, sepsis. Mortality is low in children; significantly higher in adults (when SSSS does occur).
- **Lecturer's Point:** [Lecturer Emphasis] Always think SSSS in a febrile young child with peeling skin and a positive Nikolsky sign. Adult patients with the same Nikolsky-positive picture are far more likely to have toxic epidermal necrolysis (TEN) — different pathophysiology, different management.
:::

### Staphylococcus epidermidis

- **Coagulase-negative**, **novobiocin-sensitive**.
- Lives on everyone's skin.
- Becomes pathogenic when **introduced into the body via a foreign body**: prosthetic joints, prosthetic heart valves, central venous catheters, CSF shunts.
- Forms a **biofilm (slime layer)** that physically blocks antibiotics and immune effectors.
- Treatment requires **device removal** in addition to antibiotics.

### Staphylococcus saprophyticus

- Coagulase-negative, **novobiocin-resistant** (the testable distinction from S. epidermidis).
- **#2 cause of UTI in young, sexually-active women** (after E. coli).

---

## 3. The Streptococci (Slides 12–17)

**General properties:** Gram-positive cocci in **pairs and chains** (vs. clusters for staph). **Catalase-negative** (the simplest way to separate them from staph). Facultative anaerobes (some strict anaerobes / capnophiles).

Speciation uses **Lancefield grouping** (carbohydrate antigen) and **hemolysis pattern**:

| Group | Species | Hemolysis | Lancefield |
| :--- | :--- | :--- | :--- |
| **Group A Strep** | *Streptococcus pyogenes* | β | A |
| **Group B Strep** | *S. agalactiae* | β | B |
| **S. pneumoniae** | (no Lancefield group) | α | – |
| **Viridans group** | *S. mitis, S. mutans, S. sanguinis*, etc. | α | – |
| **Group D / Enterococci** | *Enterococcus faecalis, E. faecium* | γ (typically) | D |

### Streptococcus pyogenes (Group A Strep, GAS)

The single most clinically important streptococcus for skin and mucous membrane disease.

**Virulence factors:**

- **Hyaluronic acid capsule** — antiphagocytic; chemically identical to host hyaluronic acid → poor immunogen.
- **M protein** — antiphagocytic, can act as a **superantigen**. Antibodies to M protein cross-react with cardiac myosin → rheumatic carditis.
- **Pyrogenic exotoxins (Spe)** — superantigens; cause fever and **scarlet fever**'s erythrogenic effects. Encoded by **lysogenic bacteriophage** (so only certain strains carry it — same biology as diphtheria and cholera toxin gene transfer).
- **Streptolysin O** — pore-forming toxin; lyses RBCs (hence β-hemolysis on blood agar). Anti-streptolysin O (**ASO**) antibody titers help diagnose **post-strep sequelae** (rheumatic fever, glomerulonephritis).
- **Streptokinase** — converts plasminogen to plasmin → tissue invasion. Therapeutic use as a thrombolytic.
- **DNase, hyaluronidase** — tissue spread.

**Disease catalog:**

| Disease | Notes |
| :--- | :--- |
| **Exudative pharyngitis ("strep throat")** | Rapid antigen test → culture if negative & high suspicion. **Treat to prevent rheumatic fever.** |
| **Scarlet fever** | High fever + sore throat + **sandpaper rash** + strawberry tongue. Erythrogenic toxin (lysogenic phage). |
| **Impetigo** | Honey-gold crust, more tense bullae than staph (which tend to be flaccid). |
| **Erysipelas** | **Bright red, well-demarcated, raised borders.** Superficial (upper dermis + lymphatics). Face/lower legs. Medical urgency. |
| **Cellulitis** | Deeper than erysipelas (deeper dermis + subQ). Warm, painful, ill-defined erythema. Often after skin breach. Risk of bacteremia. |
| **Necrotizing fasciitis** | "**Pain out of proportion**" to exam, dusky skin, **crepitus** (gas in tissues), rapid spread. **Surgical emergency** — emergent debridement + IV antibiotics; high mortality. |
| **Streptococcal Toxic Shock Syndrome** | Less classic strawberry tongue than staph TSS; otherwise similar superantigen-driven shock. |

**Post-streptococcal sequelae (immune-mediated, occur 1–6 weeks post-infection):**

- **Acute Rheumatic Fever** — only after **pharyngitis**; cardiac valve damage (mitral > aortic), arthritis, chorea, erythema marginatum, subQ nodules. Treat strep throat with antibiotics to **prevent** this.
- **Post-streptococcal Glomerulonephritis** — after pharyngitis OR skin infection (impetigo). Hematuria, hypertension, "cola-colored urine," edema. Usually self-limited in children. Antibiotics do **not** prevent PSGN.

:::correlate
Necrotizing Fasciitis

- **Pathophysiology:** Rapid bacterial invasion of the deep fascial planes, often by **Group A Streptococcus** alone ("type II" — "flesh-eating bacteria") or as polymicrobial mixed aerobic-anaerobic infection ("type I"). Bacteria release proteases and gas (in polymicrobial cases), causing fulminant tissue necrosis with thrombosis of perforating vessels.
- **Presentation:** **Pain out of proportion** to physical findings is the textbook clue (because subcutaneous nerves are destroyed before the surface looks dramatic). Erythema → dusky discoloration → bullae → crepitus from subcutaneous gas → necrosis. Fever, tachycardia, signs of sepsis, often shock.
- **Diagnosis:** Clinical urgency — do NOT wait for imaging. Imaging may show subcutaneous gas (CT/plain film). Definitive diagnosis is surgical exploration.
- **Treatment:** **Emergent surgical debridement** (often repeated) + broad-spectrum IV antibiotics covering Strep, Staph (including MRSA), gram-negatives, and anaerobes (e.g., vancomycin + piperacillin-tazobactam + clindamycin for its antitoxin effect against streptococcal exotoxins).
- **Risk Factors:** Diabetes, alcoholism, IVDU, immunosuppression, recent surgery or trauma, peripheral vascular disease.
- **Complications:** **High mortality (~25-30%)** even with prompt treatment. Limb amputation, multi-organ failure, death.
- **Lecturer's Point:** [Lecturer Emphasis] If the patient's pain is out of proportion to what you can see, the skin is dusky, and you can feel crepitus — call surgery now. This is a true emergency; minutes matter.
:::

### Other Clinically Important Streptococci

- **Group B Strep (S. agalactiae):** Colonizes the birth canal in 10–30% of women → **neonatal sepsis and meningitis**. Universal screen at 35–37 weeks and intrapartum prophylaxis with penicillin if positive.
- **S. pneumoniae:** **#1 cause of community-acquired pneumonia, otitis media, sinusitis, and adult bacterial meningitis.** α-hemolytic, optochin-sensitive, bile-soluble, lancet-shaped diplococci.
- **Viridans group (S. mutans, S. sanguinis):** Dental flora; classic cause of **subacute bacterial endocarditis**, especially of previously damaged valves; dental extractions release them into the bloodstream.

---

## 4. Other Notable Skin Pathogens (Slides 18–21)

### Pseudomonas aeruginosa

- **Gram-negative rod**, motile, **oxidase-positive**, **non-lactose fermenting** → **colorless colonies on MacConkey agar** (lactose fermenters are pink).
- **Ubiquitous in moist environments** (sinks, tap water, hot tubs, hospital equipment).
- **Distinctive features:** Blue-green pyocyanin pigment, fruity grape-like odor.
- **Skin diseases:**
  - **Hot tub folliculitis** — papular/pustular eruption in distribution covered by bathing suit.
  - **Burn wound infection** — classic colonizer of burn wounds; can produce systemic toxicity.
  - **Ecthyma gangrenosum** — necrotic ulcer with central black eschar; occurs in **neutropenic patients (post-chemo)** with Pseudomonas bacteremia. **Pathognomonic** for Pseudomonas in this setting.
- **Other diseases:** Hospital-acquired pneumonia (especially CF patients), UTI, endocarditis (IV drug users), malignant otitis externa (diabetics).

### Cutibacterium acnes (formerly Propionibacterium acnes)

- Gram-positive **aerotolerant rod**, lives in pilosebaceous units.
- Combines with sebum to drive the inflammation of **acne vulgaris** in adolescents.
- Also: **shoulder prosthetic joint infections** (slowly indolent course; easy to mistake for non-infection).

### Actinomyces israelii

- **Gram-positive filamentous rod** — looks like fungi on Gram stain (long branching forms) but is bacterial.
- Normal oropharyngeal flora; opportunistic.
- **Forms "sulfur granules"** in tissue and pus (yellow grain-like aggregates of organisms — pathognomonic).
- **Diseases:**
  - **Cervicofacial actinomycosis ("lumpy jaw")** — often after dental procedure or trauma.
  - **Pelvic actinomycosis** — associated with **IUDs** — endometrial / pelvic abscesses.
  - **Thoracic actinomycosis**, **abdominal actinomycosis**.
- Treatment: **Penicillin G**, prolonged course (months).

### Mycobacterium ulcerans (Buruli Ulcer)

- Acid-fast bacillus, related to TB.
- Endemic in tropical Africa and Asia; associated with **aquatic environments**.
- Causes painless slowly enlarging skin ulcers with undermined edges.
- Treatment: combination antimycobacterial therapy (rifampin + streptomycin or clarithromycin).

---

## 5. Parvovirus B19 — Erythema Infectiosum / Fifth Disease (Slides 22–24)

The lecture's lone viral exanthem.

- **Virology:** Non-enveloped, single-stranded **linear DNA** virus. Smallest DNA virus.
- **Epidemiology:** Children **5–15 years old**; respiratory droplet transmission.
- **Clinical course:**
  - Prodrome: low-grade fever (99–101°F), headache, malaise, runny nose.
  - Then the classic **"slapped cheek" rash** appears on the cheeks and may spread as a lacy reticular rash on the trunk and extremities.
  - **Adults** more often present with **arthralgias / arthritis** (immune-complex mediated; symmetric small joint involvement).
- **Self-limited** in immunocompetent hosts.
- **Important complications in special populations:**
  - **Pregnancy** — transplacental infection causes **hydrops fetalis** (parvovirus infects fetal erythroid precursors → severe anemia → high-output cardiac failure).
  - **Sickle cell / hereditary hemolytic anemia patients** — **transient aplastic crisis** (parvovirus infects bone marrow erythroid precursors via P antigen → red cell production halts for 2 weeks; in patients dependent on rapid red cell turnover, hemoglobin crashes).
  - **Immunocompromised** — chronic anemia from persistent infection.
- **Diagnosis:** Clinical for fifth disease; serology (IgM) or PCR for at-risk groups.
- **Treatment:** Supportive in healthy children. **IVIG** for chronic infection in immunocompromised; **intrauterine transfusion** for hydrops fetalis.

The "fifth" in **fifth disease** comes from being the fifth in a historical numbering of childhood exanthems: (1) measles, (2) scarlet fever, (3) rubella, (4) Duke's disease (no longer recognized as distinct), (5) erythema infectiosum, (6) roseola.

---

## 6. The Punchline (Slide 25)

[Lecturer Emphasis] Keep in mind the framework:

- **Normal skin flora is mostly gram-positive cocci** — Staph and Strep — that become pathogens when given an entry route.
- **Coagulase + S. aureus** is the most virulent skin pathogen; its disease spectrum runs from a single boil to fatal toxic shock.
- **Coagulase – staphylococci** are device-related and UTI-related, not directly aggressive.
- **Group A Strep** rivals S. aureus in skin disease breadth and uniquely causes the **post-strep sequelae** (rheumatic fever, glomerulonephritis).
- **Necrotizing fasciitis is a surgical emergency** — pain out of proportion + crepitus + dusky skin = call surgery.
- **Pseudomonas, Cutibacterium, Actinomyces, Mycobacterium ulcerans, parvovirus B19** round out the differential.
`,
  questions: [
    {
      question: "A 4-year-old previously healthy girl is brought in with 2 days of fever, irritability, and a diffuse erythematous rash that has begun to peel. Light lateral pressure on intact-appearing skin produces superficial sloughing. Frozen section of the affected skin shows separation just below the granular layer. Which of the following is the most likely organism and toxin involved?",
      options: [
        "Streptococcus pyogenes — pyrogenic exotoxin (erythrogenic toxin)",
        "Staphylococcus aureus — exfoliative toxin cleaving desmoglein-1",
        "Treponema pallidum — congenital syphilis",
        "Parvovirus B19 — viral exanthem",
        "Pseudomonas aeruginosa — exotoxin A"
      ],
      correctAnswer: 1,
      rationale: "Staphylococcal scalded skin syndrome (SSSS) is caused by S. aureus exfoliative toxins (ETA, ETB) that cleave desmoglein-1 in the granular layer of the epidermis. Classic presentation: young child, fever, diffuse erythema, peeling, positive Nikolsky sign, and a superficial intraepidermal split on biopsy. The split being above the basement membrane (vs. below in TEN) is the key histologic distinction—and explains why SSSS heals without scarring."
    },
    {
      question: "A 50-year-old man with poorly controlled diabetes presents with severe pain in his left leg. Examination shows dusky discoloration of the skin with erythema spreading rapidly proximally. He reports the pain is far worse than the visible findings would suggest. On palpation you feel crepitus. Vital signs: T 39°C, HR 130, BP 92/55. Which of the following is the most appropriate next step?",
      options: [
        "Elevate the leg, ice, and re-evaluate in 6 hours",
        "Order an MRI to confirm the diagnosis before any intervention",
        "Empiric oral cephalexin and outpatient follow-up",
        "Emergent surgical debridement and broad-spectrum IV antibiotics including coverage for Group A Strep, MRSA, gram-negatives, and anaerobes",
        "Topical mupirocin and tetanus immunization"
      ],
      correctAnswer: 3,
      rationale: "This is necrotizing fasciitis—the constellation of pain out of proportion, dusky skin, rapidly spreading erythema, crepitus (subcutaneous gas), and signs of sepsis. It is a surgical emergency. Treatment is emergent surgical debridement plus broad-spectrum IV antibiotics (typically vancomycin + piperacillin-tazobactam + clindamycin for its antitoxin effect against streptococcal superantigens). Imaging delays definitive treatment and should not precede surgery in a clinically obvious case. Mortality remains 25-30% even with prompt management."
    },
    {
      question: "A 19-year-old college student presents with 3 days of sore throat and high fever. Examination shows tonsillar exudate and tender anterior cervical lymphadenopathy. Rapid antigen test for Group A Streptococcus is positive. Which of the following best explains why we treat strep throat with antibiotics?",
      options: [
        "Antibiotics significantly shorten the duration of the pharyngitis itself",
        "Antibiotics prevent post-streptococcal glomerulonephritis",
        "Antibiotics primarily prevent acute rheumatic fever",
        "Antibiotics eradicate persistent Group A Strep colonization to prevent transmission",
        "Antibiotics prevent the development of toxic shock syndrome"
      ],
      correctAnswer: 2,
      rationale: "The cardinal reason for treating strep pharyngitis is to prevent acute rheumatic fever (which causes irreversible cardiac valve damage). Antibiotic effects on the pharyngitis itself are real but modest (1-2 day shortening). Crucially, antibiotics do NOT prevent post-streptococcal glomerulonephritis—PSGN is an immune-complex disease driven by certain strep strains and the antibiotic does not interrupt that immunology. The transmission/colonization angle is secondary."
    },
    {
      question: "A 65-year-old man recovering from chemotherapy for AML develops fever, chills, and a 4 cm necrotic ulcer with a black eschar on his left thigh. His ANC is 200/µL. Blood cultures grow a gram-negative oxidase-positive non-lactose-fermenting rod that produces a blue-green pigment. Which of the following organisms is most likely responsible?",
      options: [
        "Escherichia coli",
        "Klebsiella pneumoniae",
        "Pseudomonas aeruginosa",
        "Acinetobacter baumannii",
        "Salmonella typhi"
      ],
      correctAnswer: 2,
      rationale: "Ecthyma gangrenosum—a necrotic skin ulcer with a black eschar in a neutropenic patient—is essentially pathognomonic for Pseudomonas aeruginosa bacteremia. The microbiologic clues all fit: gram-negative rod, oxidase-positive (vs. Enterobacterales which are oxidase-negative), non-lactose fermenting (so colorless on MacConkey), blue-green pyocyanin pigment. E. coli and Klebsiella are lactose fermenters; Acinetobacter is oxidase-negative; Salmonella does not produce pyocyanin and is not a typical cause of ecthyma gangrenosum."
    },
    {
      question: "A 9-year-old girl is brought to clinic with a 2-day history of fever, headache, and runny nose. Today her parents noticed prominent erythema of both cheeks with relative pallor of the nasolabial folds, giving a 'slapped cheek' appearance, and she has begun to develop a faint lacy reticular rash on her arms. She is otherwise well. Which of the following is most accurate about this illness?",
      options: [
        "She should be isolated immediately because she is highly contagious now that the rash has appeared",
        "She is at significant risk for bacterial superinfection requiring empiric antibiotics",
        "If her mother is pregnant, the fetus is at risk for hydrops fetalis",
        "If she has hereditary spherocytosis, she is at risk for transient aplastic crisis",
        "Both C and D are correct"
      ],
      correctAnswer: 4,
      rationale: "This is erythema infectiosum (fifth disease) caused by parvovirus B19. Both C and D are correct. Parvovirus B19 infects erythroid precursors via the P antigen receptor. In pregnancy, transplacental infection of fetal erythroid precursors causes severe fetal anemia → hydrops fetalis. In patients with hereditary hemolytic anemia (sickle cell, hereditary spherocytosis, etc.), the temporary halt in erythropoiesis causes a transient aplastic crisis—a sudden hemoglobin drop. Importantly, by the time the rash appears, the child is no longer contagious (the rash is post-viremic and immune-mediated)—option A is incorrect."
    }
  ],
  flashcards: [
    { front: "What is the predominant gram type of normal skin flora?", back: "**Gram-positive** — primarily staphylococci, streptococci, and diphtheroids (Corynebacterium, Cutibacterium).", tag: "Microbiology" },
    { front: "What percentage of the population is colonized with **Staphylococcus aureus**?", back: "**30–60%**, roughly half of those persistently and half transiently. The anterior nares are the primary screening site.", tag: "Microbiology" },
    { front: "How do you distinguish staphylococci from streptococci?", back: "**Catalase** test. Staph = catalase positive (bubbles when H₂O₂ added). Strep = catalase negative.", tag: "Microbiology" },
    { front: "How do you distinguish **S. aureus** from other staphylococci?", back: "**Coagulase test** (S. aureus is coagulase positive). S. aureus is also β-hemolytic on blood agar.", tag: "Microbiology" },
    { front: "What test distinguishes S. epidermidis from S. saprophyticus?", back: "**Novobiocin** sensitivity. S. epidermidis is **sensitive**; S. saprophyticus is **resistant**.", tag: "Microbiology" },
    { front: "What is the function of **Protein A** on S. aureus?", back: "Binds the **Fc portion of IgG** (the wrong end for opsonization), blocking opsonophagocytosis and depleting complement.", tag: "Microbiology" },
    { front: "What toxin causes **Staphylococcal Scalded Skin Syndrome**?", back: "**Exfoliative toxins (ETA, ETB)** — cleave **desmoglein-1** in the granular layer, causing intraepidermal separation and a positive Nikolsky sign.", tag: "Microbiology" },
    { front: "What toxin causes **Staphylococcal Toxic Shock Syndrome**?", back: "**TSST-1** (toxic shock syndrome toxin-1), a **superantigen** that nonspecifically activates massive T-cell cytokine release. Strawberry tongue + diffuse erythematous rash + multi-organ failure.", tag: "Microbiology" },
    { front: "What organism causes infections of **prosthetic devices and indwelling catheters**?", back: "**Staphylococcus epidermidis** — produces a **biofilm** that physically blocks antibiotics and immune cells. Treatment usually requires device removal.", tag: "Microbiology" },
    { front: "What does **erysipelas** look like, and what causes it?", back: "**Bright red, sharply demarcated, raised borders**; superficial dermal involvement. Caused by **Group A Streptococcus**. Often face or lower legs.", tag: "Microbiology" },
    { front: "What is the **classic clinical clue** for necrotizing fasciitis?", back: "**Pain out of proportion** to physical findings, plus dusky skin, **crepitus** (subcutaneous gas), and rapid progression. Treatment: emergent surgical debridement + broad-spectrum IV antibiotics.", tag: "Microbiology" },
    { front: "What virulence factor on Group A Strep can cross-react with human cardiac myosin?", back: "**M protein** — antibodies against it can cross-react with cardiac myosin, causing the carditis of **acute rheumatic fever**.", tag: "Microbiology" },
    { front: "What is the difference between **rheumatic fever** and **post-strep glomerulonephritis** in terms of antibiotic prevention?", back: "Antibiotics for strep pharyngitis **PREVENT acute rheumatic fever** but **do NOT prevent post-strep glomerulonephritis** (PSGN is immune-complex mediated and antibiotics don't interrupt it). PSGN can also follow skin infection (impetigo); ARF only follows pharyngitis.", tag: "Microbiology" },
    { front: "What organism causes **ecthyma gangrenosum**, and in which patient population?", back: "**Pseudomonas aeruginosa** in **neutropenic patients** (typically post-chemotherapy). Classic necrotic ulcer with black central eschar — pathognomonic for Pseudomonas bacteremia in this setting.", tag: "Microbiology" },
    { front: "What is the gram stain and key biochemical features of **Pseudomonas aeruginosa**?", back: "**Gram-negative rod, oxidase-positive, non-lactose fermenter** (colorless colonies on MacConkey). Produces **pyocyanin** (blue-green pigment) and pyoverdine (yellow-green); fruity grape-like odor.", tag: "Microbiology" },
    { front: "What virus causes **fifth disease (erythema infectiosum)** and what are its key complications?", back: "**Parvovirus B19** (single-stranded linear DNA, non-enveloped). Slapped cheek rash in children; arthritis in adults; **hydrops fetalis** in pregnancy; **transient aplastic crisis** in patients with hereditary hemolytic anemia.", tag: "Microbiology" },
    { front: "What organism causes 'lumpy jaw' with **sulfur granules** in tissue?", back: "**Actinomyces israelii** — gram-positive filamentous rod (looks fungal but is bacterial); normal oral flora; opportunistic after dental procedures or trauma. Treatment: **prolonged penicillin G**.", tag: "Microbiology" },
    { front: "What organism causes the **Buruli ulcer**?", back: "**Mycobacterium ulcerans** — acid-fast bacillus endemic in tropical Africa and Asia, associated with aquatic environments. Causes painless chronic skin ulcers with undermined edges.", tag: "Microbiology" }
  ],
  pearls: [
    { title: "Pain Out of Proportion = Surgical Consult", content: "If a patient with a skin infection complains of pain that seems disproportionate to what you can see on the surface, suspect necrotizing fasciitis and call surgery immediately. The subcutaneous nerves are destroyed early, so by the time the surface looks dramatic the disease is far advanced." },
    { title: "Coagulase + Beta-hemolysis = S. aureus", content: "Two simple tests reliably identify S. aureus among the staphylococci: coagulase (clots fibrin) and β-hemolysis (clear zone on blood agar). Coagulase-negative staphylococci are the device infections (epidermidis) and the young-women UTI (saprophyticus, novobiocin-resistant)." },
    { title: "Treat Strep Throat to Prevent ARF, Not PSGN", content: "Antibiotics for strep pharyngitis primarily prevent acute rheumatic fever. They do NOT prevent post-streptococcal glomerulonephritis. Patients can get PSGN even after fully treated strep impetigo or pharyngitis." },
    { title: "Ecthyma Gangrenosum = Pseudomonas in a Neutropenic Patient", content: "Necrotic skin ulcer with a black eschar in a post-chemotherapy patient is essentially pathognomonic for Pseudomonas aeruginosa bacteremia. Treat with anti-pseudomonal coverage (cefepime, piperacillin-tazobactam, or carbapenem) plus an aminoglycoside for synergy in severe sepsis." },
    { title: "SSSS vs TEN — Same Picture, Different Pathology", content: "Both produce diffuse epidermal sloughing with positive Nikolsky sign. SSSS is a child with toxin-mediated intraepidermal split (heals without scarring). TEN is an adult with drug-induced full-thickness epidermal necrosis (basement membrane separation; high mortality). Frozen section of the sloughed skin distinguishes them." },
    { title: "Parvovirus and the Pregnant Patient", content: "When parvovirus B19 is suspected in a child, screen exposed pregnant contacts. Maternal infection can cause severe fetal anemia and hydrops fetalis. Manage with serial fetal ultrasound and intrauterine transfusion if needed." },
    { title: "S. epidermidis Biofilms Need Hardware Removal", content: "Antibiotics alone almost never cure prosthetic joint, prosthetic valve, or central line infections caused by S. epidermidis. The biofilm is mechanically protective. Plan on removing the device as part of definitive treatment." }
  ]
});
