window.receiveLectureContent({
  id: "l178",
  module: "Pharmacology",
  metadata: {
    title: "Lecture #178: Pharmacology of Antifungal Agents",
    lecturer: "L. Goldstein, Pharm.D. (Session 178)",
    readingTime: "13-16 min",
    difficulty: "Advanced",
    tags: ["Pharmacology", "Antifungals", "Amphotericin B", "Azoles", "Echinocandins", "Terbinafine", "Flucytosine", "Candida", "Aspergillus", "Cryptococcus"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyPharm",
      chapter: "Antimicrobials > Antifungals",
      alternatives: [
        { resource: "BandB", chapter: "Microbiology > Antifungal Pharmacology" },
        { resource: "FirstAid", chapter: "Microbiology > Pharmacology > Antifungal Therapy" },
        { resource: "Pathoma", chapter: "Inflammatory & Infectious Disorders" }
      ]
    },
    anking: [
      { match: "Amphotericin B (binds ergosterol, forms pores, nephrotoxicity)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antifungals::Amphotericin_B" },
      { match: "Nystatin (topical polyene, oral thrush, vaginal candidiasis)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antifungals::Nystatin" },
      { match: "Flucytosine (pyrimidine analog → 5-FU; cryptococcal meningitis)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antifungals::Flucytosine" },
      { match: "Azoles - 14-alpha-demethylase inhibition; CYP interactions", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antifungals::Azoles" },
      { match: "Fluconazole (cryptococcal consolidation, candidiasis, CYP interactions)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Fluconazole" },
      { match: "Voriconazole (first-line invasive aspergillosis, visual disturbances)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Voriconazole" },
      { match: "Itraconazole (dimorphic fungi, onychomycosis)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Itraconazole" },
      { match: "Ketoconazole (anti-androgen, gynecomastia, hepatotoxicity)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Ketoconazole" },
      { match: "Echinocandins (caspofungin - inhibit beta-1,3-glucan synthase)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Echinocandins" },
      { match: "Terbinafine (squalene epoxidase, dermatophytes, onychomycosis)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Terbinafine" },
      { match: "Griseofulvin (microtubule disruption, tinea capitis)", resources: "AnKing Step 1 v11: #SketchyPharm::Antifungals::Griseofulvin" },
      { match: "Cryptococcal meningitis treatment (Amphotericin B + Flucytosine then fluconazole)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Treatment::Cryptococcal_meningitis" }
    ]
  },
  summary: `
# Story Mode: Killing the Fungus Without Killing the Patient

Antifungal pharmacology is constrained by a single uncomfortable fact: **fungi are eukaryotes, like us.** They share most of our cellular machinery — protein synthesis, nucleic acid synthesis, mitochondrial function — so most strategies that kill fungi also kill humans. The few targets that ARE selective become the basis for the entire antifungal armamentarium:

1. **Ergosterol** — the fungal version of cholesterol. Targeted by **polyenes** (binding) and **azoles** (synthesis blockade) and **terbinafine** (precursor blockade).
2. **β-1,3-glucan** — a fungal cell wall polysaccharide humans don't make. Targeted by **echinocandins**.
3. **Fungal-selective uptake of pyrimidines** — exploited by **flucytosine**, which only fungi efficiently import and convert into a toxic metabolite.
4. **Microtubule disruption in dermatophyte hyphae** — targeted by **griseofulvin**.

The clinical lecture pivots on three categories of disease and the drugs we use against each:
- **Superficial / cutaneous infections** (dermatophytes, oral thrush, vaginal candida) — topical azoles, terbinafine, nystatin.
- **Mucosal / moderate systemic infections** (esophageal candida, mild cryptococcal disease) — fluconazole.
- **Serious invasive infections** (invasive aspergillosis, cryptococcal meningitis, mucormycosis, candidemia) — amphotericin B, voriconazole, echinocandins, sometimes combinations.

---

## 1. Where the Drugs Hit (Slide 6)

| Target | Drug class | Mechanism |
| :--- | :--- | :--- |
| **Ergosterol** (membrane sterol) | **Polyenes** (amphotericin B, nystatin) | Bind ergosterol → form aqueous pores → leak K+ and other ions → cell death |
| **Lanosterol → ergosterol** (14α-demethylase) | **Azoles** (-azole drugs) | Block CYP enzyme that converts lanosterol to ergosterol → ergosterol depletion + toxic intermediate accumulation |
| **Squalene → squalene epoxide** (squalene epoxidase) | **Allylamines** (terbinafine, naftifine) | Block early step in ergosterol synthesis → squalene accumulation (directly toxic) + ergosterol depletion |
| **β-1,3-glucan synthase** (cell wall) | **Echinocandins** (-fungin drugs) | Block synthesis of β-1,3-glucan in fungal cell wall → osmotic rupture |
| **Pyrimidine metabolism** | **Flucytosine (5-FC)** | Imported by fungal cytosine permease, converted by cytosine deaminase to 5-FU → DNA/RNA synthesis inhibition. Humans lack cytosine deaminase. |
| **Microtubules in dermatophytes** | **Griseofulvin** | Binds to fungal microtubules, blocks mitosis. Deposits in keratin (skin, nails, hair). |

---

## 2. Polyenes: Amphotericin B and Nystatin (Slides 7–18)

### Amphotericin B

The original broad-spectrum **fungicidal** drug — and still the workhorse for serious systemic mycoses.

**Mechanism:** Binds **ergosterol** in the fungal membrane and forms aqueous pores; potassium and other ions leak out → cell death. Selective because amphotericin B has higher affinity for ergosterol than for human cholesterol (but the affinity for cholesterol is non-zero — hence the toxicity).

**Spectrum (broad):** Most yeasts and molds — Candida, Cryptococcus, Aspergillus, Mucorales (mucormycosis), endemic dimorphic fungi (Histoplasma, Blastomyces, Coccidioides, Paracoccidioides). Notable resistance: **Aspergillus terreus, Pseudallescheria, Fusarium, Trichosporon.**

**Pharmacokinetics:** **IV only** (negligible oral absorption); highly protein-bound; sequesters in tissues with **poor CNS penetration** (despite which it works for cryptococcal meningitis when paired with flucytosine); slow renal clearance; very long half-life.

**Formulations** (knowing the difference is testable):
- **Amphotericin B deoxycholate** (conventional) — older, cheaper, **most nephrotoxic**, most infusion-related toxicity.
- **Liposomal amphotericin B (L-AmB / AmBisome)** — encapsulated in true liposomes; **less nephrotoxic**, allows higher dosing, preferred for most serious infections (and for renal-vulnerable patients).
- **Lipid complex (ABLC)** and **colloidal dispersion (ABCD)** — alternative lipid formulations.

**Toxicity:**
- **Nephrotoxicity** (the dose-limiting toxicity): renal vasoconstriction → ↓GFR; tubular damage → **K+, Mg2+, HCO3- wasting** (renal tubular acidosis), normocytic anemia (↓erythropoietin from damaged kidneys). **Hydrate with normal saline before infusion** to mitigate.
- **Infusion-related reactions** ("**shake and bake**"): fever, chills, rigors, headache, nausea, hypotension, dyspnea. Pre-medicate with acetaminophen ± diphenhydramine ± low-dose hydrocortisone; meperidine for severe rigors.
- **Phlebitis** at IV site.

:::correlate
Cryptococcal Meningitis (HIV-Associated)

- **Pathophysiology:** *Cryptococcus neoformans* is an encapsulated yeast inhaled from soil contaminated with bird droppings (especially pigeons). In immunocompromised patients (especially HIV with CD4 <100), it disseminates from lungs to the **CNS** where it causes a chronic granulomatous meningitis.
- **Presentation:** **Subacute** headache, fever, meningismus, altered mental status, cranial nerve palsies. Symptoms often progress over weeks.
- **Diagnosis:** **CSF India ink stain** (shows the encapsulated yeast — classic clear "halo" around the organism); **CSF cryptococcal antigen (CrAg) latex agglutination** (more sensitive); CSF culture; elevated opening pressure on lumbar puncture is common.
- **Treatment (3 phases):**
  - **Induction:** Liposomal amphotericin B IV daily + flucytosine PO every 6 hours × 2 weeks.
  - **Consolidation:** Fluconazole high-dose × 8 weeks.
  - **Maintenance (suppression):** Lower-dose fluconazole continued indefinitely until CD4 >100 (in HIV) for at least 6 months.
- **Risk Factors:** **HIV/AIDS with CD4 <100**, organ transplant, chronic corticosteroids, hematologic malignancy.
- **Complications:** Increased intracranial pressure (often requires serial therapeutic LPs), permanent neurologic deficits, death (mortality 10-20% even with treatment).
- **Lecturer's Point:** [Lecturer Emphasis] The induction-consolidation-maintenance framework for cryptococcal meningitis is conceptually identical to how we approach many serious chronic infections: hit hard early with the most potent (and most toxic) regimen, then consolidate with safer drugs, then suppress to prevent relapse.
:::

### Nystatin

Same mechanism as amphotericin B (binds ergosterol, forms pores). **Far too toxic for systemic use** — restricted to **topical and oral non-absorbed** therapy.

**Uses:**
- **Oral candidiasis (thrush):** swish-and-swallow oral suspension.
- **Cutaneous candida:** topical cream or powder for diaper rash, intertrigo.
- **Vaginal candida:** vaginal tablets or cream.

Not used for invasive disease because oral nystatin is not absorbed.

---

## 3. Flucytosine (5-FC) (Slides 19–22)

A clever exploit of fungal-selective metabolism.

**Mechanism:** Flucytosine is taken up into fungal cells by **cytosine permease** (which humans don't have at meaningful levels). Inside the fungus, **cytosine deaminase** (also fungal) converts 5-FC into **5-fluorouracil (5-FU)**, which then incorporates into RNA (disrupting protein synthesis) and inhibits thymidylate synthase (disrupting DNA synthesis).

The selectivity is real but imperfect: gut bacteria can also deaminate small amounts of 5-FC to 5-FU, which then crosses into the host bloodstream and produces bone marrow toxicity.

**Pharmacokinetics:** Oral; **excellent CNS penetration**; renal clearance.

**Spectrum (narrow):** **Cryptococcus** (key indication), **Candida**.

**Use:** **Always in combination** (resistance develops rapidly with monotherapy). Classic regimen: **amphotericin B + flucytosine** for cryptococcal meningitis induction. Synergy is real — flucytosine penetrates the CNS better than ampho B and the two have different mechanisms.

**Toxicity:**
- **Bone marrow suppression** (dose-related; due to gut-bacterial conversion to 5-FU): leukopenia, thrombocytopenia, anemia.
- **Hepatotoxicity** (transaminitis).
- **Renal dose adjustment required.**

---

## 4. Azoles (Slides 23–35)

The largest, most-used antifungal class. All share the same mechanism: inhibition of **fungal cytochrome P450 14α-demethylase** (encoded by ERG11), which converts lanosterol to ergosterol. Loss of ergosterol + accumulation of toxic intermediates → cell membrane dysfunction. Generally **fungistatic** (versus the fungicidal polyenes and echinocandins).

A defining problem: azoles also inhibit **human CYP enzymes** (especially CYP3A4) → **major drug-drug interactions** with statins, calcineurin inhibitors, warfarin, opioids, benzodiazepines, etc.

| Azole | Spectrum highlights | Notes |
| :--- | :--- | :--- |
| **Fluconazole** | Candida (most), Cryptococcus | **Best CNS penetration.** Workhorse for candidemia, esophageal candidiasis, vaginal candidiasis, cryptococcal consolidation/maintenance. NO activity against molds. |
| **Itraconazole** | Dimorphic fungi (Histoplasma, Blastomyces, Sporothrix, Coccidioides), dermatophytes (onychomycosis) | Variable absorption (capsules need acidic gastric pH → take with cola; solution is better absorbed); negative inotrope (avoid in CHF) |
| **Voriconazole** | **Invasive aspergillosis (FIRST-LINE)**, Scedosporium, Fusarium | Major drug interactions; **visual disturbances** ("photopsia") in 30% — bright lights, blurry vision; phototoxicity → SCC of skin |
| **Posaconazole** | Same as vori PLUS **Mucorales** (mucormycosis) | Used for prophylaxis in prolonged neutropenia (post-transplant, AML induction) |
| **Isavuconazole** | Aspergillus + Mucorales | Better tolerated than vori/posa; **shortens** rather than prolongs QT (unique among azoles) |
| **Ketoconazole** | Largely retired from systemic use | **Severe hepatotoxicity** + **anti-androgen effects** (gynecomastia, ↓libido, ↓testosterone, ↓cortisol). Now used mostly topically (shampoo for tinea versicolor, seborrheic dermatitis) |
| **Clotrimazole, Miconazole** | Topical only | Cream, powder, troche for vaginal/oral candida and tinea |

**Class adverse effects (systemic azoles):**
- **GI upset** (universal).
- **Hepatotoxicity** — monitor LFTs.
- **QT prolongation** (except isavuconazole).
- **Drug interactions via CYP3A4 inhibition** (most), CYP2C9 (fluconazole), CYP2C19 (vori).
- **Teratogenic** in 1st trimester at high systemic doses.

:::highyield
**Azole spectrum mnemonic — "Yeast vs Mold":**
- **Fluconazole = yeasts only** (Candida, Cryptococcus). NO molds.
- **Itraconazole = yeasts + dimorphic fungi** + dermatophytes. Limited mold activity.
- **Voriconazole = yeasts + dimorphic + Aspergillus** (first-line for invasive aspergillosis). NO Mucor.
- **Posaconazole / Isavuconazole = everything above + Mucorales** (mucormycosis).

The pattern: as you ascend the azole hierarchy, you gain mold activity. The price is more interactions, more toxicity, and more cost.
:::

---

## 5. Echinocandins (Slides 36–40)

The newest mainstream antifungal class. Three drugs, all with the **-fungin** suffix: **caspofungin, micafungin, anidulafungin.**

**Mechanism:** Inhibit **β-1,3-glucan synthase**, blocking synthesis of β-1,3-glucan — a major fungal cell wall polysaccharide that humans don't make. The cell wall weakens, water rushes in, and the fungal cell undergoes osmotic rupture. **Fungicidal against Candida, fungistatic against Aspergillus.**

**Spectrum:**
- **Candida (all species, including azole-resistant glabrata and krusei)** — first-line for candidemia and invasive candidiasis.
- **Aspergillus** — salvage therapy (voriconazole is first-line).
- **NO activity** against Cryptococcus, Mucorales, dimorphic fungi.

**Pharmacokinetics:** **IV only** (large molecules, no oral absorption). Hepatic metabolism (no renal dose adjustment needed — useful in renal failure).

**Toxicity:** **Excellent safety profile** — minimal toxicity, minimal drug interactions. The most common adverse effects are mild GI upset and infusion-related histamine release (flushing). Very rare hepatic transaminitis.

[Lecturer Emphasis] Echinocandins are now first-line for **invasive candidiasis and candidemia** in most adults. Fluconazole is used for de-escalation if the isolate is azole-susceptible.

---

## 6. Terbinafine and Other Allylamines (Slides 41–42)

**Mechanism:** Inhibit **squalene epoxidase**, an enzyme early in the ergosterol synthesis pathway. **Two effects**: depletion of ergosterol AND accumulation of squalene (which is **directly toxic** to fungal cells). Fungicidal.

**Spectrum:** Highly active against **dermatophytes** (Trichophyton, Microsporum, Epidermophyton). Less active against yeasts.

**Use:** Drug of choice for **onychomycosis** (nail fungal infection) and tinea pedis/cruris/corporis when topical therapy fails. Oral terbinafine for 6 weeks (fingernails) or 12 weeks (toenails).

**Pharmacokinetics:** Oral; deposits in keratin (skin, nail, hair) — persists at therapeutic concentrations for weeks after the course is finished.

**Toxicity:**
- **Hepatotoxicity** (rare but can be severe — check baseline LFTs).
- **Taste disturbance** (dysgeusia) — distinctive and reversible.
- GI upset, headache.

---

## 7. Griseofulvin (Slide 43)

The oldest oral antidermatophyte drug, now largely supplanted by terbinafine but still used for some pediatric tinea capitis.

**Mechanism:** Binds **fungal microtubules**, disrupting mitosis. Deposits in **keratin** of newly-formed skin/hair/nail; older infected keratin is shed and replaced with drug-impregnated keratin → fungal infection cleared.

**Use:** **Tinea capitis** in children (terbinafine is now generally preferred), tinea unguium when terbinafine is contraindicated.

**Pharmacokinetics:** Take with **fatty meal** for improved absorption.

**Toxicity:**
- **CYP450 induction** → drug interactions (warfarin, OCPs, alcohol).
- Disulfiram-like reaction with alcohol.
- Photosensitivity.
- Bone marrow suppression (rare).

---

## 8. Topical Antifungals (Brief)

For superficial fungal infections — dermatophytes (tinea), candidiasis, seborrheic dermatitis, tinea versicolor.

| Drug | Common uses |
| :--- | :--- |
| **Clotrimazole, miconazole** (topical azoles) | Tinea, candida, vaginal candidiasis |
| **Ketoconazole shampoo** | Seborrheic dermatitis, tinea versicolor |
| **Selenium sulfide, zinc pyrithione** | Tinea versicolor, seborrheic dermatitis |
| **Nystatin** | Cutaneous and mucosal Candida (NOT dermatophytes) |
| **Terbinafine cream** | Dermatophyte infections (tinea pedis/cruris/corporis) |
| **Ciclopirox** | Onychomycosis (mild cases) |

:::highyield
Quick algorithm for picking an antifungal:
- **Topical infection (skin, mucosa):** topical azole, terbinafine, or nystatin.
- **Onychomycosis:** oral terbinafine.
- **Esophageal / vaginal candidiasis:** oral fluconazole (single or short course).
- **Candidemia / invasive candidiasis:** echinocandin (caspofungin, micafungin, anidulafungin).
- **Cryptococcal meningitis:** liposomal ampho B + flucytosine (induction) → fluconazole (consolidation/maintenance).
- **Invasive aspergillosis:** voriconazole.
- **Mucormycosis:** liposomal ampho B (or posaconazole/isavuconazole) + emergent surgical debridement of infected tissue.
- **Histoplasmosis, blastomycosis, sporotrichosis (mild):** itraconazole.
:::

---

## 9. Pulling It All Together

[Lecturer Emphasis] The four exam-relevant frameworks:

1. **Mechanism mapping:** Polyenes punch holes (binding ergosterol), azoles starve the cell of ergosterol (blocking 14α-demethylase), allylamines starve it earlier (blocking squalene epoxidase) AND poison it (squalene accumulation), echinocandins crack the wall (blocking β-glucan synthase), flucytosine sneaks in as a pyrimidine analog and gets converted to 5-FU.
2. **Yeast versus mold spectrum:** the azole hierarchy expands as you go fluconazole → itraconazole → voriconazole → posa/isavuconazole. Fluconazole has no mold activity; voriconazole is the aspergillus drug; the latter two cover Mucor.
3. **Toxicity by class:** ampho B is renal + infusion; azoles are CYP interactions + LFTs + QT; echinocandins are remarkably safe; flucytosine is bone marrow; terbinafine is hepatic + dysgeusia; griseofulvin is CYP-inducing + disulfiram-like.
4. **Combination logic for cryptococcal meningitis:** ampho B (broad killing) + flucytosine (CNS penetration + different mechanism) for induction; fluconazole (well-tolerated) for consolidation and maintenance.
`,
  questions: [
    {
      question: "A 38-year-old man with HIV (CD4 = 65) presents with 2 weeks of progressive headache, low-grade fever, and confusion. Lumbar puncture shows opening pressure 32 cmH₂O, lymphocyte-predominant pleocytosis, and CSF cryptococcal antigen positive at 1:512. Which is the most appropriate initial therapy?",
      options: [
        "Oral fluconazole monotherapy for 2 weeks, then maintenance",
        "IV amphotericin B alone for 4 weeks",
        "Liposomal amphotericin B IV + flucytosine PO for 2 weeks (induction)",
        "Caspofungin IV for 4 weeks",
        "Voriconazole IV for 6 weeks"
      ],
      correctAnswer: 2,
      rationale: "Cryptococcal meningitis in an immunocompromised patient requires the three-phase regimen: liposomal amphotericin B + flucytosine for induction (2 weeks), high-dose fluconazole for consolidation (8 weeks), then lower-dose fluconazole maintenance (until CD4 >100 sustained for 6 months in HIV). Fluconazole monotherapy is insufficient for induction. Echinocandins like caspofungin have NO activity against Cryptococcus. Voriconazole, while it has some activity, is not the standard."
    },
    {
      question: "A 62-year-old neutropenic patient develops persistent fever despite broad-spectrum antibiotics. Chest CT shows a halo sign with adjacent ground-glass opacity in the right upper lobe. Galactomannan antigen is positive. Which is the most appropriate first-line therapy?",
      options: [
        "Fluconazole",
        "Caspofungin",
        "Voriconazole",
        "Liposomal amphotericin B",
        "Nystatin"
      ],
      correctAnswer: 2,
      rationale: "This is invasive aspergillosis (the halo sign + galactomannan positivity in a neutropenic patient is classic). Voriconazole is first-line; clinical trials have shown superior survival vs. amphotericin B. Fluconazole has NO activity against Aspergillus. Caspofungin is salvage therapy. Liposomal ampho B is an alternative if vori cannot be used (contraindications, pregnancy, severe hepatic dysfunction). Nystatin is topical only."
    },
    {
      question: "Which of the following adverse effects is most characteristic of voriconazole therapy and should be discussed with the patient before initiation?",
      options: [
        "Tendon rupture",
        "Visual disturbances and photopsia",
        "Renal tubular acidosis",
        "Bone marrow suppression",
        "Disulfiram-like reaction with alcohol"
      ],
      correctAnswer: 1,
      rationale: "Voriconazole causes characteristic visual disturbances ('photopsia' — bright spots, blurred vision, color perception changes) in approximately 30% of patients during the first week of therapy, typically reversible upon discontinuation. The mechanism is direct effect on the retina. Voriconazole also causes phototoxicity and increases risk of cutaneous squamous cell carcinoma with long-term use. Renal acidosis is amphotericin B; bone marrow suppression is flucytosine; disulfiram-like reaction is griseofulvin (and metronidazole)."
    },
    {
      question: "A 68-year-old woman in the ICU with septic shock and indwelling central venous catheter has blood cultures positive for Candida glabrata. Which agent is the most appropriate first-line empiric therapy?",
      options: [
        "Fluconazole",
        "Caspofungin",
        "Amphotericin B deoxycholate",
        "Itraconazole",
        "Topical clotrimazole"
      ],
      correctAnswer: 1,
      rationale: "Echinocandins (caspofungin, micafungin, anidulafungin) are first-line for invasive candidiasis and candidemia in most adult patients, especially those who are critically ill or who have a non-albicans Candida species. C. glabrata is frequently fluconazole-resistant; the echinocandins remain reliably active against virtually all Candida species. Amphotericin B was historically first-line but has been displaced by echinocandins because of better tolerability."
    },
    {
      question: "Which of the following best describes the mechanism of flucytosine (5-FC)?",
      options: [
        "Binds ergosterol in the fungal cell membrane and forms transmembrane pores",
        "Inhibits 14-α-demethylase, blocking ergosterol synthesis",
        "Imported by fungal cytosine permease and converted by fungal cytosine deaminase to 5-fluorouracil, which inhibits DNA/RNA synthesis",
        "Inhibits β-1,3-glucan synthase in the fungal cell wall",
        "Inhibits squalene epoxidase, an early enzyme in ergosterol synthesis"
      ],
      correctAnswer: 2,
      rationale: "Flucytosine exploits a fungal-selective metabolic pathway: cytosine permease imports it into the fungal cell, then cytosine deaminase (which humans lack at meaningful levels) converts it to 5-FU. The 5-FU then inhibits thymidylate synthase (DNA synthesis blockade) and incorporates into RNA (protein synthesis blockade). This selectivity is why a chemotherapy molecule (5-FU is anti-cancer) can be safely used systemically as an antifungal. Toxicity comes from gut bacterial conversion of 5-FC to 5-FU, which causes bone marrow suppression."
    }
  ],
  flashcards: [
    { front: "What is the **mechanism of amphotericin B**?", back: "Binds **ergosterol** in the fungal cell membrane → forms aqueous **pores** → leak of K+ and other ions → cell death. **Fungicidal**.", tag: "Pharmacology" },
    { front: "Why does liposomal amphotericin B have less nephrotoxicity than the conventional formulation?", back: "The liposomal carrier sequesters the drug away from kidney epithelium and allows higher tissue concentrations at infected sites without proportional kidney exposure.", tag: "Pharmacology" },
    { front: "What are the major adverse effects of amphotericin B?", back: "**Nephrotoxicity** (renal vasoconstriction, K+/Mg2+/HCO3- wasting, anemia from ↓erythropoietin) and **infusion reactions** ('shake and bake': fever, chills, rigors, hypotension).", tag: "Pharmacology" },
    { front: "When and how is **nystatin** used?", back: "**Topical or oral non-absorbed** therapy only — too toxic for systemic use. Oral suspension (swish and swallow) for thrush; topical cream for cutaneous candida; vaginal cream/tablets for vaginal candidiasis.", tag: "Pharmacology" },
    { front: "What is the **mechanism of flucytosine (5-FC)**?", back: "Imported by fungal **cytosine permease** → converted by fungal **cytosine deaminase** to **5-fluorouracil (5-FU)** → inhibits thymidylate synthase + incorporates into RNA. Humans lack cytosine deaminase, hence selectivity.", tag: "Pharmacology" },
    { front: "What is the **dose-limiting toxicity of flucytosine**?", back: "**Bone marrow suppression** (leukopenia, thrombocytopenia, anemia) — caused by gut bacterial conversion of 5-FC to 5-FU which is then absorbed systemically.", tag: "Pharmacology" },
    { front: "What is the **mechanism of all azole antifungals**?", back: "Inhibit fungal **CYP450 14α-demethylase** (encoded by ERG11), which converts lanosterol to ergosterol. Result: ergosterol depletion + accumulation of toxic intermediates → membrane dysfunction. **Fungistatic**.", tag: "Pharmacology" },
    { front: "Which azole has the **best CNS penetration**?", back: "**Fluconazole** — used for cryptococcal meningitis consolidation and maintenance after amphotericin B + flucytosine induction.", tag: "Pharmacology" },
    { front: "Which azole is **first-line for invasive aspergillosis**?", back: "**Voriconazole.**", tag: "Pharmacology" },
    { front: "Which azoles cover **Mucorales (mucormycosis)**?", back: "**Posaconazole** and **isavuconazole** (and amphotericin B). Voriconazole and fluconazole do NOT cover Mucor.", tag: "Pharmacology" },
    { front: "What is the most characteristic adverse effect of **voriconazole**?", back: "**Visual disturbances / photopsia** (~30%) — bright lights, blurred vision, color perception changes; usually reversible. Also phototoxicity and increased SCC risk with chronic use.", tag: "Pharmacology" },
    { front: "Which azole has anti-androgen effects (gynecomastia, ↓testosterone)?", back: "**Ketoconazole** — also causes severe hepatotoxicity. Largely retired from systemic use; now mostly topical.", tag: "Pharmacology" },
    { front: "What is the **mechanism of echinocandins** (caspofungin, micafungin, anidulafungin)?", back: "Inhibit **β-1,3-glucan synthase** → block synthesis of fungal cell wall β-1,3-glucan → osmotic rupture. **Fungicidal against Candida, fungistatic against Aspergillus**.", tag: "Pharmacology" },
    { front: "When are echinocandins first-line?", back: "**Invasive candidiasis and candidemia** in adults — especially those critically ill or with non-albicans (e.g., C. glabrata, C. krusei) species that may be fluconazole-resistant.", tag: "Pharmacology" },
    { front: "What organisms do echinocandins NOT cover?", back: "**Cryptococcus, Mucorales, and the dimorphic fungi** (Histoplasma, Blastomyces, Coccidioides). They cover Candida and Aspergillus only.", tag: "Pharmacology" },
    { front: "What is the **mechanism of terbinafine**?", back: "Inhibits **squalene epoxidase** (early in ergosterol synthesis) → ergosterol depletion + accumulation of toxic squalene. **Fungicidal**.", tag: "Pharmacology" },
    { front: "What is the drug of choice for **onychomycosis**?", back: "**Oral terbinafine** for 6 weeks (fingernails) or 12 weeks (toenails). Highly active against dermatophytes; deposits in keratin.", tag: "Pharmacology" },
    { front: "What is the unique adverse effect of terbinafine?", back: "**Taste disturbance (dysgeusia)** — distinctive and reversible. Also hepatotoxicity (rare but can be severe).", tag: "Pharmacology" },
    { front: "How is **griseofulvin** used and what is its mechanism?", back: "Tinea capitis in children (now largely replaced by terbinafine). Mechanism: binds **fungal microtubules** → disrupts mitosis. Deposits in **keratin** as it grows in. Take with **fatty meal**. CYP inducer + disulfiram-like reaction with alcohol.", tag: "Pharmacology" },
    { front: "Three-phase treatment of cryptococcal meningitis?", back: "**Induction:** Liposomal amphotericin B + flucytosine × 2 weeks. **Consolidation:** Fluconazole high-dose × 8 weeks. **Maintenance:** Lower-dose fluconazole until CD4 >100 (in HIV) sustained × 6 months.", tag: "Pharmacology" }
  ],
  pearls: [
    { title: "Two Targets, Most of the Drugs", content: "Almost the entire antifungal armamentarium aims at one of two unique fungal structures: ergosterol (polyenes, azoles, allylamines) or β-glucan (echinocandins). Understand those two and the mechanism map collapses to manageable size." },
    { title: "Fluconazole Has No Molds", content: "Fluconazole covers Candida and Cryptococcus — that's it. No Aspergillus, no Mucor, no dimorphic. If you need mold coverage, climb the azole ladder (vori for Aspergillus, posa/isavu for Mucor) or jump to amphotericin B." },
    { title: "Echinocandins for Candidemia", content: "Adult candidemia goes to an echinocandin first, with de-escalation to fluconazole if the species is susceptible. They are remarkably safe (no renal dose adjustment, minimal interactions) and cover azole-resistant species like glabrata and krusei." },
    { title: "Voriconazole's Visual Disturbances Are Real", content: "About 30% of patients on voriconazole report bright lights, photopsia, or visual blurring in the first week. It's usually reversible but can be alarming if you don't warn the patient. Long-term voriconazole also raises SCC risk via phototoxicity — sun protection counseling matters." },
    { title: "Pre-medicate Before Amphotericin", content: "The 'shake and bake' infusion reaction (fever, chills, rigors, hypotension) hits 50%+ of patients. Acetaminophen + diphenhydramine ± low-dose hydrocortisone before infusion blunts it. IV meperidine treats severe rigors mid-infusion. Pre-hydrating with normal saline reduces the nephrotoxicity." },
    { title: "Mucor Needs a Knife", content: "Mucormycosis (rhino-orbital-cerebral or pulmonary) is treated with liposomal amphotericin B (or posa/isavu) plus emergent surgical debridement. Antifungal monotherapy without source control fails. Diabetics in DKA and post-transplant patients are the classic populations." },
    { title: "The Cryptococcal Three-Phase Logic Is Universal", content: "Hit hard early with the most potent (and toxic) drugs (induction); switch to a tolerable suppressive drug once cultures clear (consolidation); continue suppression until host immunity recovers (maintenance). The same three-phase logic applies to many serious chronic infections." }
  ]
});
