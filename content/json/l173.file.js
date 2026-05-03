window.receiveLectureContent({
  id: "l173",
  module: "Pharmacology",
  metadata: {
    title: "Lecture #173: Chemotherapy of Protozoal Infections",
    lecturer: "L. Goldstein, Pharm.D. (Session 173)",
    readingTime: "13-16 min",
    difficulty: "Advanced",
    tags: ["Pharmacology", "Protozoa", "Metronidazole", "Trypanosomiasis", "Leishmaniasis", "Chagas", "Toxoplasmosis", "Amebiasis", "Giardiasis"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyMicro",
      chapter: "Parasites > Protozoa (Entamoeba, Giardia, Trichomonas, Trypanosoma, Leishmania, Toxoplasma)",
      alternatives: [
        { resource: "BandB", chapter: "Microbiology > Parasitology > Protozoa" },
        { resource: "SketchyPharm", chapter: "Antimicrobials > Antiprotozoal Drugs" },
        { resource: "FirstAid", chapter: "Microbiology > Parasitology" },
        { resource: "Pathoma", chapter: "Inflammatory & Infectious Disorders" }
      ]
    },
    anking: [
      { match: "Metronidazole mechanism (nitroreductase → reactive radicals in anaerobes)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Metronidazole" },
      { match: "Metronidazole disulfiram-like reaction", resources: "AnKing Step 1 v11: #FirstAid::Pharmacology::Antibiotics::Metronidazole" },
      { match: "Entamoeba histolytica (amebiasis, liver abscess)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Entamoeba" },
      { match: "Giardia lamblia (giardiasis, foul-smelling diarrhea)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Giardia" },
      { match: "Trichomonas vaginalis (strawberry cervix, motile)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Trichomonas" },
      { match: "Trypanosoma brucei (African sleeping sickness, tsetse fly)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Trypanosoma_brucei" },
      { match: "Trypanosoma cruzi (Chagas disease, kissing bug)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Trypanosoma_cruzi" },
      { match: "Leishmania (sandfly, visceral kala-azar, cutaneous)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Leishmania" },
      { match: "Toxoplasma gondii (cats, ring-enhancing brain lesions in AIDS, congenital triad)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Toxoplasma" },
      { match: "Pyrimethamine + sulfadiazine + leucovorin (toxoplasmosis treatment)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Treatment_of_Toxoplasmosis" }
    ]
  },
  summary: `
# Story Mode: A Tour of the Protozoal Drug Cabinet

The previous lecture covered malaria; this one covers the rest of the medically relevant protozoa—a strange cast of organisms transmitted by mosquitoes, sandflies, tsetse flies, kissing bugs, sexual contact, contaminated water, and cat feces. Despite the diversity, the drugs cluster around three repeating mechanisms: **(1) prodrugs activated by parasite nitroreductase to free radicals** that damage anaerobic organisms (the "metronidazole family"), **(2) heavy metal compounds** (arsenicals, antimonials) that bind sulfhydryl groups and poison parasite enzymes, and **(3) folate-pathway inhibitors** (pyrimethamine + sulfadiazine combinations). Recognize the mechanism, and the drug list becomes much shorter than it looks.

This lecture is organized by infection. For each, the goal is the same: name the bug, name the first-line drug, and remember the one weird thing the lecturer flagged.

---

## 1. Amebiasis, Giardiasis, Trichomoniasis (Slides 6–18)

Three infections, three different bugs, **one anchor drug: metronidazole.**

| Infection | Organism | First-line treatment |
| :--- | :--- | :--- |
| **Amebiasis** | *Entamoeba histolytica* | **Metronidazole** (tissue) **+ Paromomycin** (luminal) |
| **Giardiasis** | *Giardia lamblia* | **Metronidazole** (paromomycin alternative) |
| **Trichomoniasis** | *Trichomonas vaginalis* | **Metronidazole** (treat sexual partners) |

### Metronidazole (Slides 8–14)

- **Class:** Nitroimidazole. Tinidazole and secnidazole share the same mechanism with longer half-lives and less frequent dosing—but the lecturer focuses on metronidazole as the prototype.
- **Mechanism:** A **prodrug**. The parasite's anaerobic **nitroreductase** reduces the nitro group to a **reactive nitroso radical**, which generates reactive oxygen species that damage parasite DNA, proteins, and membranes.
- **Selectivity:** Only works in **anaerobic or microaerophilic organisms**—the activating reduction does not happen efficiently in oxygen-rich environments. Therefore aerobes are intrinsically resistant.
- **Pharmacokinetics:** Oral 100% bioavailability. Penetrates tissues and fluids well (including CSF, abscesses, breast milk). Hepatic metabolism via **CYP2A6** (an unusual route → relatively few CYP-mediated drug interactions). Half-life ~8 hours → TID dosing.
- **Adverse effects:** Headache, GI upset, **metallic taste, dry mouth, dark urine** (cosmetic, not concerning). Rare neuropathy with prolonged use. Carcinogenic in rodents (use only when indicated).
- **Drug interactions:** Warfarin (INR may rise). The classic **disulfiram-like reaction with alcohol** has been somewhat reappraised in recent literature—but the lecturer still recommends abstaining from alcohol while on the drug.
- **Pregnancy:** Crosses placenta but considered low-risk; safe in all trimesters by current data. Tinidazole/secnidazole are avoided in pregnancy due to less data.
- **Bonus uses:** **Anaerobic bacterial infections** including *C. difficile* colitis (the rare antibiotic that treats C. diff rather than causing it), bacterial vaginosis, dental abscesses.

:::correlate
Amebic Liver Abscess

- **Pathophysiology:** *Entamoeba histolytica* trophozoites ingested as cysts in contaminated water/food → invade colonic mucosa → portal vein → liver, where they cause necrotic abscesses (most commonly right lobe, "anchovy paste" pus).
- **Presentation:** Right upper quadrant pain, fever, tender hepatomegaly. Often history of recent travel or residence in endemic regions (Mexico, Central/South America, India, Africa). Mild leukocytosis, elevated ALP, +/- positive serology.
- **Diagnosis:** Ultrasound or CT showing solitary hepatic lesion; serology (anti-amebic antibodies); stool ova and parasites typically negative by the time the abscess presents (the trophozoites have left the bowel).
- **Treatment:** **Metronidazole 750 mg TID × 7–10 days** (kills tissue trophozoites) **followed by paromomycin** (luminal aminoglycoside, eradicates intestinal cysts to prevent recurrence and transmission). Drainage rarely needed unless impending rupture.
- **Risk Factors:** Travel/residence in endemic areas, immunocompromise, malnutrition, alcoholism.
- **Complications:** Rupture into peritoneum, pleural space, or pericardium; secondary bacterial infection.
- **Lecturer's Point:** [Lecturer Emphasis] Always follow tissue-acting therapy (metronidazole) with a **luminal agent** for amebiasis—otherwise residual cysts in the colon will reinfect and the patient will relapse.
:::

### Paromomycin (Slides 15–18)

- **Class:** Aminoglycoside (aminocyclitol).
- **Mechanism:** Binds **16S rRNA on the 30S ribosomal subunit**, inhibiting protein synthesis—same as other aminoglycosides.
- **Pharmacokinetics:** **Not absorbed orally.** Stays in the gut lumen → "**luminal agent**." Fecal excretion.
- **Uses:**
  - **Eradication of intestinal cysts** after metronidazole treatment of amebiasis.
  - **Cryptosporidiosis** (especially in HIV/AIDS patients with chronic diarrhea).
  - **Giardiasis alternative** (pregnancy or metronidazole intolerance).
  - **Hepatic encephalopathy:** Like neomycin, kills urease-producing colonic bacteria → **lower ammonia production** → lower systemic ammonia (alongside lactulose).
  - **Cutaneous leishmaniasis** (topical).
- **Adverse effects:** Oral → GI upset only (not absorbed → no systemic toxicity). Parenteral → **classic aminoglycoside toxicity**: nephrotoxicity, ototoxicity, neuromuscular blockade.

---

## 2. Human African Trypanosomiasis (HAT, "Sleeping Sickness") (Slides 19–34)

Two clinical entities, transmitted by the **tsetse fly**:

| Form | Subspecies | Region | Course |
| :--- | :--- | :--- | :--- |
| **West African (Gambiense) HAT** | *T. brucei gambiense* | West & Central Africa | **Chronic**, slowly progressive |
| **East African (Rhodesiense) HAT** | *T. brucei rhodesiense* | East & Southern Africa (Tanzania, Uganda, Malawi, Zambia, Zimbabwe) | **Acute, rapidly fatal** if untreated |

Both progress through two clinical stages:
- **Stage 1 — Hemolymphatic:** parasites in blood/lymph; fever, lymphadenopathy, **Winterbottom's sign** (posterior cervical adenopathy).
- **Stage 2 — Meningoencephalitic (CNS):** parasites cross the blood-brain barrier; somnolence, behavioral changes, coma, death.

**The decision tree:**

| | Gambiense (West) | Rhodesiense (East) |
| :--- | :--- | :--- |
| **Early stage, ≥6 yo** | **Fexinidazole** (oral) | **Fexinidazole** (oral) |
| **Early stage, young child** | **Pentamidine** | **Suramin** (pentamidine inadequate here) |
| **Late stage, non-severe** | **Fexinidazole** | **Melarsoprol** |
| **Late stage, severe (CNS)** | **NECT (Nifurtimox + Eflornithine)** | **Melarsoprol + prednisolone** |

### Fexinidazole (Slides 23–26)

- **Class:** Nitroimidazole (same family as metronidazole).
- **Mechanism:** Activated by parasite nitroreductase → reactive nitroso radicals → DNA/protein damage.
- **Crucial features:** **Oral.** Crosses **blood-brain barrier**. Given as a 10-day course (loading + maintenance).
- **Big caveat:** Use **only when long-term follow-up (up to 24 months) is feasible**, because adherence-related relapse is well-documented. If the patient cannot return for monitoring, choose a parenteral alternative.

### Pentamidine (Slides 27–28)

- **Mechanism:** Binds parasite **kinetoplast DNA** (the trypanosome's mitochondrial DNA) → inhibits RNA, ribosome, nucleic acid synthesis.
- **Pharmacokinetics:** **IV/IM only** (not absorbed orally). Sequesters in tissues; **poor CNS penetration** → cannot treat late-stage CNS disease.
- **Adverse effects:** Hypoglycemia (then hyperglycemia), nephrotoxicity, electrolyte abnormalities, hypotension during infusion.

### Suramin (Slide 29)

- **Class:** Polyanionic compound; very long half-life (drug detectable up to 3 months post-dose).
- **Mechanism:** Inhibits parasite glycolytic enzymes, NADH oxidation, purinergic signaling.
- **Use:** Early-stage **Rhodesiense** HAT, particularly in young children (where pentamidine is inadequate).
- **Adverse effects:** Immediate hypersensitivity with shock; nephrotoxicity, peripheral neuropathy, exfoliative dermatitis, bone marrow toxicity.
- **Avoid:** In patients with co-infection by *Onchocerca volvulus* (river blindness)—suramin's powerful anti-onchocercal activity will trigger a massive inflammatory reaction from dying worms.

### Eflornithine + Nifurtimox (NECT) (Slide 30)

- **NECT = Nifurtimox-Eflornithine Combination Therapy.**
- **Eflornithine:** **Suicide inhibitor of ornithine decarboxylase**, halting polyamine synthesis. IV only. 7-day course.
- **Nifurtimox:** Oral nitroreductase-activated radical generator. 10-day course.
- **Use:** Severe **late-stage Gambiense** HAT (the better-tolerated alternative to melarsoprol).

### Melarsoprol (Slides 31–34)

- **Class:** **Trivalent arsenical**—yes, arsenic.
- **Mechanism:** Binds parasite trypanothione (a thiol critical for redox defense), inhibits trypanothione reductase. Also **inactivates many enzymes in the host**, hence the toxicity.
- **Use:** First-line for **late-stage Rhodesiense** HAT only (because of its toxicity, used elsewhere only when no alternative exists).
- **Adverse effects:** **Reactive encephalopathy** (sometimes fatal) from inflammatory response to dying parasites + arsenic toxicity → coadministered with **prednisolone** to blunt inflammation. Toxicity to virtually every organ system.

:::highyield
**Decision shortcut for HAT:**
1. Which subspecies (Gambiense vs. Rhodesiense)?
2. Has it crossed the BBB (CSF exam)?
3. **Fexinidazole oral** when adherence is reliable; **NECT** for severe Gambiense CNS; **melarsoprol + prednisolone** for severe Rhodesiense CNS.
:::

---

## 3. American Trypanosomiasis (Chagas Disease) (Slides 35–37)

- **Organism:** *Trypanosoma cruzi*.
- **Vector:** Triatomine bug ("**kissing bug**"), defecates near the bite, parasites enter through scratched skin or mucosa. Endemic in Mexico, Central, and South America.
- **Phases:** **Acute** (often asymptomatic; **Romaña sign**—periorbital swelling—is classic), then a long **latent** period, then **chronic** complications: **dilated cardiomyopathy, megaesophagus, megacolon.**
- **Drugs:**
  - **Benznidazole** (preferred—better tolerated, BID dosing). Nitroreductase-activated radical generator.
  - **Nifurtimox** (alternative—TID, less tolerable, 60–90-day course).
- **Cure rates:** Excellent in acute disease; modest in chronic disease (the cardiac damage is already done).
- **Adverse effects (benznidazole):** Photosensitive dermatitis (cover up), peripheral neuropathy, bone marrow suppression. Avoid in pregnancy.

:::correlate
Chagas Cardiomyopathy

- **Pathophysiology:** *T. cruzi* persists in cardiomyocytes for decades after acute infection; chronic immunologic damage → **dilated cardiomyopathy with apical aneurysm**, conduction system disease, and biventricular failure.
- **Presentation:** Decades after the original bug bite—heart failure, atrial and ventricular arrhythmias, sudden cardiac death; megaesophagus (dysphagia) and megacolon (constipation) from autonomic ganglion destruction.
- **Diagnosis:** Serology (two different IgG assays); EKG (RBBB, left anterior fascicular block); echo (apical aneurysm, hypokinesis).
- **Treatment:** **Benznidazole** in early/seropositive disease; supportive heart failure / antiarrhythmic management for established cardiomyopathy; transplant for end-stage.
- **Risk Factors:** Birth or long residence in endemic Latin America; lower socioeconomic housing.
- **Lecturer's Point:** [Lecturer Emphasis] Treat early. Once dilated cardiomyopathy is established, antiparasitic therapy will not reverse the structural damage.
:::

---

## 4. Leishmaniasis (Slides 38–48)

- **Vector:** **Sandfly** (Phlebotomus, Lutzomyia).
- **Organism:** *Leishmania* species, **obligate intracellular parasites** that infect macrophages and other phagocytes.
- **Three clinical forms:**
  - **Cutaneous:** painless slow-healing skin ulcers.
  - **Mucocutaneous (espundia):** disfiguring nasal/oropharyngeal destruction (mostly *L. braziliensis*).
  - **Visceral (kala-azar):** *L. donovani*; fever, weight loss, hepatosplenomegaly, pancytopenia, **fatal if untreated**.

| Form | Drug of Choice |
| :--- | :--- |
| **Cutaneous** | Pentavalent antimonials (sodium stibogluconate); paromomycin topical; miltefosine; amphotericin B if extensive |
| **Mucocutaneous** | Liposomal amphotericin B; pentavalent antimonials; miltefosine |
| **Visceral (kala-azar)** | **Liposomal amphotericin B** (selective uptake by macrophages = where the parasite lives); pentavalent antimonials in some regions; miltefosine |

### Pentavalent Antimonials

- Sodium stibogluconate, meglumine antimoniate.
- Pentavalent → reduced to active **trivalent antimony**, which binds parasite sulfhydryl groups, disrupts trypanothione system, ATP/GTP synthesis.
- Parenteral; cumulative toxicity (cardiac, pancreas, kidney, liver, marrow). Reversible after withdrawal.
- Resistance is widespread in **India** for visceral leishmaniasis—use amphotericin B there.

### Miltefosine

- **First and only oral drug for leishmaniasis.** Disrupts parasite phospholipid metabolism and mitochondrial function.
- Used for cutaneous, mucocutaneous, and visceral forms.
- Teratogenic—**absolute contraindication in pregnancy**, and women of childbearing age must use contraception during treatment and for 5 months after.

### Liposomal Amphotericin B

- Liposomal formulation concentrates in **macrophages** (where Leishmania amastigotes live).
- First-line for visceral leishmaniasis worldwide; preferred in pregnancy (no good alternatives).

---

## 5. Toxoplasmosis (Slides 49–53)

- **Organism:** *Toxoplasma gondii*.
- **Reservoir:** **Cats** (definitive host). Humans acquire from oocysts in cat feces or undercooked meat containing tissue cysts.
- **Clinical relevance:**
  - **Immunocompetent adults:** asymptomatic or self-limiting mononucleosis-like illness; **no treatment needed.**
  - **Pregnancy:** treat to prevent **vertical transmission** and **congenital toxoplasmosis** (chorioretinitis, hydrocephalus, intracranial calcifications—the classic congenital triad).
  - **AIDS / immunocompromised:** **toxoplasmic encephalitis** with ring-enhancing brain lesions.

| Setting | First-line treatment |
| :--- | :--- |
| **Pregnancy, 1st trimester** | **Spiramycin** (a macrolide; concentrates in placenta, prevents transmission, minimal fetal exposure) |
| **Pregnancy, 2nd/3rd trimester (fetal infection confirmed/suspected)** | **Pyrimethamine + sulfadiazine + leucovorin** |
| **AIDS encephalitis** | **Pyrimethamine + sulfadiazine + leucovorin**; alternative: IV TMP-SMX |
| **AIDS prophylaxis (CD4 < 100, IgG positive)** | **TMP-SMX** |

### Why the Pyrimethamine + Sulfadiazine + Leucovorin Combo?

- **Pyrimethamine:** inhibits parasite **dihydrofolate reductase (DHFR)**.
- **Sulfadiazine:** sulfonamide; inhibits parasite **dihydropteroate synthase (DHPS)**.
- Synergistic folate inhibition at two sequential enzymes.
- **Leucovorin (folinic acid)**: bypasses the human DHFR block (parasites can't use leucovorin) → **prevents host bone marrow toxicity** (megaloblastic anemia, neutropenia, thrombocytopenia) without protecting the parasite.

:::highyield
**Spiramycin = first trimester only** (prevents transmission, doesn't cross placenta well). **Pyrimethamine-sulfadiazine-leucovorin = second/third trimester or any AIDS toxoplasmosis** (treats established fetal infection or CNS disease).
:::

---

## 6. The Common Thread (Slide 54)

Across this catalog of seemingly unrelated parasites, the antiprotozoal mechanisms collapse into a small number of repeating ideas:

1. **Free radical generation from prodrug activation** — metronidazole, tinidazole, fexinidazole, nifurtimox, benznidazole. All require parasite nitroreductase; therefore selective for anaerobic/microaerophilic environments.
2. **Sulfhydryl / trypanothione inhibition by heavy metals** — melarsoprol (arsenic), pentavalent antimonials (antimony). Toxic by design.
3. **Folate-pathway inhibition** — pyrimethamine + sulfadiazine (with leucovorin rescue) for toxoplasmosis; same logic as malaria's sulfadoxine-pyrimethamine.
4. **Protein synthesis inhibition (ribosomal binding)** — paromomycin (luminal aminoglycoside).
5. **Polyamine synthesis inhibition** — eflornithine (suicide inhibitor of ornithine decarboxylase).
6. **Membrane / lipid disruption** — miltefosine, amphotericin B.

[Lecturer Emphasis] Whenever you see a new antiparasitic drug, ask: which of these six mechanisms is it using? The list of memorizable names becomes much shorter when the mechanisms repeat.
`,
  questions: [
    {
      question: "A 36-year-old man returns from a 4-month trip to rural India with 2 weeks of right upper quadrant pain, low-grade fever, and tender hepatomegaly. Imaging shows a single 7 cm hypoechoic lesion in the right hepatic lobe, and serologic testing for Entamoeba histolytica is positive. Which is the most appropriate management strategy?",
      options: [
        "Metronidazole alone for 10 days",
        "Paromomycin alone for 10 days",
        "Metronidazole for 10 days, followed by paromomycin to eradicate intestinal cysts",
        "Surgical drainage followed by ciprofloxacin",
        "Pyrimethamine plus sulfadiazine plus leucovorin"
      ],
      correctAnswer: 2,
      rationale: "Amebic liver abscess is treated with a tissue-acting agent (metronidazole) followed by a luminal agent (paromomycin). The metronidazole eradicates the invasive trophozoites in the abscess; the paromomycin clears residual intestinal cysts to prevent recurrence and ongoing transmission. Metronidazole alone leads to relapse from persistent colonic carriers. Drainage is reserved for impending rupture."
    },
    {
      question: "A 30-year-old woman is started on metronidazole for bacterial vaginosis. Two days into therapy she attends a wedding and consumes alcohol. She develops sudden flushing, palpitations, headache, nausea, and tachycardia. Which is the underlying mechanism most likely responsible for this reaction?",
      options: [
        "QT prolongation from a CYP3A4-mediated drug interaction",
        "Acetaldehyde accumulation from inhibition of aldehyde dehydrogenase, producing a disulfiram-like reaction",
        "Histamine release from anaphylactoid hypersensitivity",
        "Catecholamine surge from MAO inhibition",
        "Hyperammonemia from hepatic decompensation"
      ],
      correctAnswer: 1,
      rationale: "Metronidazole has been classically associated with a disulfiram-like reaction when combined with alcohol—inhibition of aldehyde dehydrogenase causes acetaldehyde to accumulate, producing flushing, nausea, palpitations, and headache. Recent literature has questioned the strength of this interaction, but the lecturer still recommends counseling patients to avoid alcohol while on the drug."
    },
    {
      question: "A 28-year-old woman in West Africa is diagnosed with early-stage T. brucei gambiense infection. Which oral drug is now first-line for early-stage Gambiense HAT in patients aged 6 years or older, provided long-term follow-up is feasible?",
      options: [
        "Pentamidine",
        "Suramin",
        "Melarsoprol",
        "Fexinidazole",
        "Eflornithine"
      ],
      correctAnswer: 3,
      rationale: "Fexinidazole is an oral nitroimidazole that crosses the blood-brain barrier and is now first-line for both stages of Gambiense HAT (early and non-severe late) in patients ≥6 years and ≥20 kg, provided 24-month follow-up is achievable to detect relapse. Pentamidine is the early-stage Gambiense alternative for younger children; suramin is for early-stage Rhodesiense in young children; melarsoprol is reserved for late-stage Rhodesiense due to its arsenic-related toxicity; eflornithine is part of NECT for severe late-stage Gambiense."
    },
    {
      question: "A 4-year-old child in Sudan is diagnosed with visceral leishmaniasis (kala-azar). Which is the most appropriate first-line treatment?",
      options: [
        "Sodium stibogluconate (pentavalent antimonial)",
        "Liposomal amphotericin B",
        "Topical paromomycin",
        "Oral fluconazole",
        "Pyrimethamine plus sulfadiazine plus leucovorin"
      ],
      correctAnswer: 1,
      rationale: "Liposomal amphotericin B is first-line worldwide for visceral leishmaniasis because the liposomal formulation is selectively concentrated in macrophages—the very cells the Leishmania amastigotes live inside. Pentavalent antimonials remain second-line in many regions but are losing ground to resistance (especially in India). Topical paromomycin is for cutaneous disease only. Pyrimethamine-sulfadiazine is for toxoplasmosis."
    },
    {
      question: "A 28-year-old woman at 12 weeks gestation has a positive Toxoplasma IgM screen. Amniotic fluid PCR is pending. Which medication should be initiated empirically while awaiting results?",
      options: [
        "Pyrimethamine + sulfadiazine + leucovorin",
        "Spiramycin",
        "TMP-SMX",
        "Atovaquone",
        "Fluconazole"
      ],
      correctAnswer: 1,
      rationale: "Spiramycin is the first-line agent in the FIRST TRIMESTER—it concentrates in the placenta and reduces vertical transmission risk while avoiding the teratogenic concerns of pyrimethamine (folate antagonist with risk of neural tube defects). If amniotic fluid PCR confirms fetal infection or once the patient enters the 2nd/3rd trimester, the regimen escalates to pyrimethamine + sulfadiazine + leucovorin, which actively treats established fetal infection."
    }
  ],
  flashcards: [
    { front: "What is the **mechanism of metronidazole**?", back: "**Prodrug** activated by parasite **nitroreductase** to a reactive **nitroso radical**, which damages DNA and macromolecules. **Only active in anaerobes and microaerophiles.**", tag: "Pharmacology" },
    { front: "Why must amebiasis treatment be **two-drug** (metronidazole + paromomycin)?", back: "**Metronidazole** kills tissue trophozoites (invasive). **Paromomycin** eradicates intestinal cysts in the lumen → prevents relapse and ongoing transmission. Tissue-acting drug alone leaves a colonic reservoir.", tag: "Pharmacology" },
    { front: "What is **paromomycin** and how does it work?", back: "**Luminal aminoglycoside** — not absorbed orally, stays in the gut. Binds **16S rRNA on the 30S ribosome** → inhibits parasite protein synthesis. Also used in hepatic encephalopathy to lower ammonia.", tag: "Pharmacology" },
    { front: "What is the classic adverse-effect warning for metronidazole + alcohol?", back: "**Disulfiram-like reaction** (flushing, palpitations, nausea, headache) from acetaldehyde accumulation. Counsel patients to avoid alcohol during therapy.", tag: "Pharmacology" },
    { front: "Which two infections are caused by **T. brucei gambiense** and **T. brucei rhodesiense**?", back: "Both cause **Human African Trypanosomiasis (sleeping sickness)** transmitted by **tsetse fly**. Gambiense = West African, chronic. Rhodesiense = East African, acute and rapidly fatal.", tag: "Pharmacology" },
    { front: "What is the **first-line oral agent for HAT** in patients ≥6 years and ≥20 kg with reliable follow-up?", back: "**Fexinidazole** — oral, crosses BBB, treats early Gambiense, early Rhodesiense, and non-severe late Gambiense. Requires 24-month relapse monitoring.", tag: "Pharmacology" },
    { front: "What is the treatment for **severe late-stage Rhodesiense HAT**?", back: "**Melarsoprol + prednisolone** — melarsoprol is an arsenical (very toxic, can cause reactive encephalopathy); prednisolone reduces post-treatment inflammation.", tag: "Pharmacology" },
    { front: "What does **NECT** stand for and when is it used?", back: "**N**ifurtimox + **E**flornithine **C**ombination **T**herapy — for severe late-stage **Gambiense** HAT. Better tolerated than melarsoprol.", tag: "Pharmacology" },
    { front: "What is the mechanism of **eflornithine**?", back: "**Suicide inhibitor of ornithine decarboxylase** → blocks polyamine synthesis → trypanosome cannot grow or differentiate.", tag: "Pharmacology" },
    { front: "Which organism causes **Chagas disease** and how is it transmitted?", back: "**Trypanosoma cruzi**, transmitted by the **triatomine ('kissing') bug** in Latin America.", tag: "Pharmacology" },
    { front: "What is the **first-line treatment for acute Chagas disease**?", back: "**Benznidazole** (preferred — BID dosing, better tolerated). Nifurtimox is the alternative.", tag: "Pharmacology" },
    { front: "What chronic complications follow untreated Chagas disease?", back: "**Dilated cardiomyopathy** with apical aneurysm and conduction disease; **megaesophagus** and **megacolon** from autonomic ganglion destruction.", tag: "Pharmacology" },
    { front: "Which form of leishmaniasis is **fatal if untreated**?", back: "**Visceral leishmaniasis (kala-azar)**, caused mainly by *L. donovani*. Hepatosplenomegaly, fever, pancytopenia.", tag: "Pharmacology" },
    { front: "What is the **first-line drug for visceral leishmaniasis**?", back: "**Liposomal amphotericin B** — selectively concentrates in macrophages (where Leishmania amastigotes hide).", tag: "Pharmacology" },
    { front: "What is the only **oral drug** for leishmaniasis, and what is its main contraindication?", back: "**Miltefosine.** **Teratogenic** — contraindicated in pregnancy and women must use contraception during therapy and for 5 months after.", tag: "Pharmacology" },
    { front: "What is the toxoplasmosis regimen for **the 1st trimester of pregnancy**?", back: "**Spiramycin** — concentrates in placenta, prevents vertical transmission, avoids the folate-antagonist teratogenicity of pyrimethamine.", tag: "Pharmacology" },
    { front: "What is the toxoplasmosis regimen for **2nd/3rd trimester or AIDS encephalitis**?", back: "**Pyrimethamine + sulfadiazine + leucovorin** (folinic acid) — synergistic folate inhibition at DHFR + DHPS; leucovorin rescues host bone marrow without protecting the parasite.", tag: "Pharmacology" },
    { front: "What is the role of **leucovorin** in pyrimethamine-sulfadiazine therapy?", back: "**Folinic acid** bypasses the host DHFR block → prevents megaloblastic anemia and bone marrow suppression. The parasite cannot use leucovorin and remains inhibited.", tag: "Pharmacology" }
  ],
  pearls: [
    { title: "Two-Drug Amebiasis or Bust", content: "Treating an amebic liver abscess with metronidazole alone is a setup for relapse. Always follow with paromomycin (or another luminal agent) to clear residual cysts." },
    { title: "Metronidazole = Anaerobes Only", content: "The parasite or bacterium needs nitroreductase activity (i.e., must be anaerobic or microaerophilic) for the prodrug to activate. Aerobes are intrinsically resistant—this is why metronidazole works against C. difficile, anaerobic bacteroides, and protozoa, but not against streptococci or pseudomonas." },
    { title: "Adherence Is Half of HAT Treatment", content: "Fexinidazole's effectiveness assumes the patient takes every dose and returns for 24 months of follow-up. If the practice setting can't ensure that, choose a parenteral alternative even if it's harder to administer." },
    { title: "Treat Chagas Early, Not Late", content: "Acute Chagas has excellent cure rates with benznidazole. Once chronic dilated cardiomyopathy develops, antiparasitics will not reverse the structural heart damage—the management pivots to standard HF/arrhythmia care." },
    { title: "Liposomes Find Macrophages", content: "Liposomal amphotericin B works for visceral leishmaniasis precisely because the liposomal formulation is taken up by macrophages—where the parasite lives. The drug ends up exactly where the bug is." },
    { title: "Leucovorin Saves the Bone Marrow, Not the Parasite", content: "When prescribing pyrimethamine + sulfadiazine for toxoplasmosis, never forget the leucovorin. The parasite cannot use it; the human bone marrow can. Skip leucovorin and the patient develops megaloblastic anemia, neutropenia, and thrombocytopenia." },
    { title: "Six Mechanisms, Many Drugs", content: "The protozoal drug list looks long but the mechanisms collapse to: (1) prodrug → free radicals, (2) heavy-metal sulfhydryl binding, (3) folate inhibition, (4) ribosomal protein synthesis blockade, (5) polyamine inhibition, (6) membrane disruption. Recognize the mechanism, recognize the drug." }
  ]
});
