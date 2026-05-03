window.receiveLectureContent({
  id: "l172",
  module: "Pharmacology",
  metadata: {
    title: "Lecture #172: Chemotherapy of Malaria",
    lecturer: "L. Goldstein, Pharm.D. (Session 172)",
    readingTime: "13-17 min",
    difficulty: "Advanced",
    tags: ["Pharmacology", "Malaria", "Plasmodium", "Antimalarials", "Chloroquine", "Artemisinin", "Primaquine", "G6PD", "Travel Medicine"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyMicro",
      chapter: "Parasites > Plasmodium / Malaria",
      alternatives: [
        { resource: "BandB", chapter: "Microbiology > Parasitology > Plasmodium" },
        { resource: "SketchyPharm", chapter: "Antimicrobials > Antimalarials" },
        { resource: "FirstAid", chapter: "Microbiology > Parasitology > Plasmodium" },
        { resource: "Pathoma", chapter: "Red Blood Cell Disorders > Hemolytic Anemias (relevant for G6PD)" }
      ]
    },
    anking: [
      { match: "Plasmodium species (falciparum, vivax, ovale, malariae, knowlesi)", resources: "AnKing Step 1 v11: #FirstAid::Microbiology::Parasitology::Plasmodium" },
      { match: "Plasmodium life cycle (mosquito → liver → blood)", resources: "AnKing Step 1 v11: #SketchyMicro::Parasites::Plasmodium::LifeCycle" },
      { match: "Chloroquine mechanism (heme polymerization)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antimalarials::Chloroquine" },
      { match: "Chloroquine resistance (PfCRT mutation)", resources: "AnKing Step 1 v11: #FirstAid::Pharmacology::Antimalarials::Resistance" },
      { match: "Primaquine + hypnozoites (P. vivax/ovale)", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antimalarials::Primaquine" },
      { match: "G6PD deficiency precipitants (primaquine, sulfa drugs)", resources: "AnKing Step 1 v11: #FirstAid::Hematology::Hemolytic_Anemias::G6PD_Deficiency" },
      { match: "Mefloquine neuropsychiatric side effects", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Antimalarials::Mefloquine" },
      { match: "Artemisinin combination therapy (ACT) for falciparum", resources: "AnKing Step 1 v11: #FirstAid::Pharmacology::Antimalarials::Artemisinins" },
      { match: "Quinine cinchonism (tinnitus, headache, vertigo)", resources: "AnKing Step 1 v11: #FirstAid::Pharmacology::Antimalarials::Quinine" },
      { match: "Doxycycline for malaria prophylaxis", resources: "AnKing Step 1 v11: #SketchyPharm::Antimicrobials::Tetracyclines" }
    ]
  },
  summary: `
# Story Mode: Killing the Parasite Without Killing the Patient

Malaria has been killing humans for thousands of years and still kills hundreds of thousands every year, mostly children under five in sub-Saharan Africa. The challenge for medicine is that the malaria parasite—Plasmodium—lives a complicated double life that includes a stage in the human liver, a stage inside red blood cells, and a sexual stage that gets back into a mosquito to start the cycle over. **No single antimalarial drug hits every stage,** which is why this lecture is essentially a tour of which drug to pull off the shelf for which job: prophylaxis for a traveler, eradication of the dormant liver form, treatment of an acutely febrile patient, or rescue of someone with severe parasitemia and seizures. Layer on top of that the geography problem: drug resistance has marched across the world for decades, so the right drug in Honduras is the wrong drug in Cambodia. Throughout this lecture, **always think in three axes: which species, which life-cycle stage, and which region of the world.**

---

## 1. The Parasite and Its Life Cycle (Slides 6–9)

The Anopheles mosquito takes a blood meal from a human and injects **sporozoites**. The sporozoites travel to the liver and mature into a **schizont**, which ruptures and releases hundreds of **merozoites** into the bloodstream. The merozoites invade red blood cells, mature through a **ring-stage trophozoite**, and become a new **erythrocytic schizont** which ruptures—releasing more merozoites that re-infect more red cells. This is what produces the cyclical fevers of clinical malaria. Some intra-erythrocytic parasites take a different path and become **gametocytes**—the sexual form, which a mosquito picks up on its next blood meal to continue the cycle.

Two species, **P. vivax and P. ovale**, have an extra trick: a subset of liver-stage sporozoites become **dormant hypnozoites** that can reactivate weeks-to-months later and cause relapse. Drugs that work in the blood do nothing to hypnozoites; you need a separate, hypnozoite-active drug to achieve **radical cure** (eradication of the liver reservoir).

:::highyield
**Five Plasmodium species cause human malaria, but only three matter for high-yield purposes:**
- **P. falciparum** — most lethal, most widespread, most resistance, no hypnozoites.
- **P. vivax** and **P. ovale** — milder acute illness, **but have hypnozoites** → require radical cure (primaquine or tafenoquine).
- (P. malariae and P. knowlesi exist but are clinical bit players.)
:::

---

## 2. Clinical Features and Diagnostics (Slides 12–14)

**Uncomplicated malaria** presents with fever, malaise, anemia from hemolysis, and sometimes a palpable spleen. These patients can take oral therapy.

**Severe malaria** (almost always *P. falciparum*) is an emergency. Hyperparasitemia drives massive hemolysis and a systemic inflammatory cascade leading to seizures, hypotension and shock, hypoglycemia (the parasites consume glucose), acute kidney injury, metabolic acidosis, ARDS, coma, and death. **Treatment requires parenteral therapy** (IV artesunate is first line worldwide).

Diagnosis is made on **Giemsa-stained blood smears**:
- **Thick smear:** higher sensitivity for detecting parasites (more blood per field) but cannot speciate.
- **Thin smear:** allows species identification and staging (ring trophozoites, mature schizonts, male/female gametocytes).

:::correlate
Severe (Cerebral) Falciparum Malaria

- **Pathophysiology:** P. falciparum-infected erythrocytes adhere to vascular endothelium throughout the brain, causing microvascular obstruction; hyperparasitemia (>5%) drives hemolysis, hypoglycemia, and metabolic acidosis.
- **Presentation:** High fever, altered mental status, seizures, hypotension, jaundice, hemoglobinuria, acute kidney injury, ARDS, coma.
- **Diagnosis:** Giemsa-stained thick and thin blood smears; parasite density quantified to guide therapy.
- **Treatment:** **IV artesunate** is first-line worldwide (0, 12, 24, 48 hours, then once daily until parasitemia <1%, then transition to oral ACT). If artesunate is unavailable, **oral artemether-lumefantrine** can be given by NG tube as a bridge; **IV quinidine** is no longer stocked in the US due to safety profile.
- **Risk Factors:** Travel to falciparum-endemic regions, age <5 years, pregnancy, no prior immunity (the non-immune traveler).
- **Complications:** Coma, AKI, ARDS, hypoglycemia, black-water fever (massive intravascular hemolysis with hemoglobinuria), death.
- **Lecturer's Point:** [Lecturer Emphasis] Most deaths from falciparum in endemic regions are in **children under five**; pregnant patients are also at sharply elevated risk for severe disease. The non-immune traveler is essentially in the same boat as a five-year-old.
:::

---

## 3. The Map of the Drugs: Which Drug Hits Which Stage (Slides 15–18)

Antimalarials sort cleanly into three buckets by where in the life cycle they act.

| Class / Drug | Erythrocytic stage | Liver hypnozoites | Gametocytes |
| :--- | :---: | :---: | :---: |
| **Chloroquine, Hydroxychloroquine** | ✓ | — | — |
| **Mefloquine** | ✓ | — | — |
| **Atovaquone-Proguanil** | ✓ (also primary liver stage) | — | — |
| **Quinine** | ✓ | — | — |
| **Sulfadoxine-Pyrimethamine** | ✓ | — | — |
| **Lumefantrine** (paired w/ artemether) | ✓ | — | — |
| **Doxycycline / Clindamycin** | ✓ (slow) | — | — |
| **Artemisinins** (artemether, artesunate) | ✓ (rapid) | — | ✓ |
| **Primaquine** | weak | ✓ | ✓ |
| **Tafenoquine** | ✓ | ✓ | ✓ |

:::highyield
Only three drugs reliably kill **gametocytes** (which break the transmission cycle): **artemisinins, primaquine, and tafenoquine**. Only two drugs eradicate **hypnozoites** in the liver: **primaquine and tafenoquine**. Both of those are 8-aminoquinolines and both require G6PD screening before use.
:::

---

## 4. Chemoprophylaxis for the Traveler (Slides 19–22)

The choice of prophylaxis depends on **destination resistance pattern**, **patient comorbidities**, and **dosing convenience**.

| Drug | Schedule | Start before travel | Continue after return | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Chloroquine** | Weekly | 1–2 weeks | 4 weeks | Only for chloroquine-sensitive areas (Central America west of Panama Canal, Dominican Republic, parts of Middle East). Safe in pregnancy. |
| **Mefloquine** | Weekly | 2–3 weeks | 4 weeks | Avoid with psychiatric disease, seizure disorder, cardiac conduction disease. Safe in pregnancy. |
| **Atovaquone-proguanil** | Daily, with fatty food | 1–2 days | 1 week | Well tolerated; expensive; avoid in pregnancy (insufficient safety data). |
| **Doxycycline** | Daily | 1–2 days | **4 weeks** (it is slow-acting) | Avoid in pregnancy and children <8 (tooth discoloration). |
| **Tafenoquine** | Loading dose, then weekly | 3-day loading dose | n/a (long half-life covers this) | **G6PD activity must be ≥70%** before use. Expensive. |
| **Primaquine** | Daily | 1–2 days | 7 days | Only useful against P. vivax / P. ovale — cannot be used as sole agent in falciparum-endemic areas. **G6PD screening required.** |

For **radical cure** (preventing P. vivax / P. ovale relapse): **primaquine 14 days** or **single-dose tafenoquine** after returning home.

---

## 5. Treatment: Uncomplicated and Severe (Slides 23–26)

### Uncomplicated Falciparum

**Artemether-lumefantrine (Co-Artem) is first-line worldwide and in the US.** Dosing: 4 tablets twice daily for 3 days (first two doses 8 hours apart). The artemisinin gives rapid parasite clearance; the long-acting lumefantrine partner prevents recrudescence.

### Severe Falciparum

**IV artesunate** is first-line. Dosing: bolus at 0, 12, 24, and 48 hours, then once daily until **parasitemia <1%**. Transition to oral ACT as soon as the patient can tolerate it (must begin within 4 hours of last IV dose due to artesunate's short half-life).

In the US, artesunate is expensive and most hospital pharmacies do not stock it. The **interim bridge** while artesunate is being acquired: oral artemether-lumefantrine, crushed and given via NG tube if the patient cannot swallow. (IV quinidine, the old workhorse, is no longer available in the US.)

### Pregnancy Treatment

- **Artemether-lumefantrine:** all trimesters.
- **Quinine + clindamycin:** all trimesters (alternative when ACT unavailable).
- Other ACTs: 2nd and 3rd trimesters only.
- **IV artesunate:** severe malaria in any trimester (do not withhold).
- Avoid: primaquine, tafenoquine (G6PD risk to fetus), doxycycline (tooth/bone effects), atovaquone-proguanil (insufficient safety data).

### Pediatric and Endemic-Region Programs

- **Seasonal Malaria Chemoprevention (SMC):** intermittent dosing during high-transmission rainy seasons in children <5.
- **Perennial Malaria Chemoprevention:** for year-round endemic regions.
- **Intermittent Preventive Treatment in Pregnancy (IPTp):** **sulfadoxine-pyrimethamine (SP)** monthly from 13 weeks through 38 weeks gestation, in HIV-negative pregnant patients in endemic regions.
- **Vaccines:** Mosquirix and R21/Matrix-M, both 4-dose pediatric regimens given before high-transmission season; cost-effective and being rolled out in 28+ African countries.

---

## 6. Drug Pharmacology: The Need-to-Know (Slides 28–46)

### Chloroquine / Hydroxychloroquine (Slides 28–31)

- **Mechanism:** Enters the parasite's food vacuole and **prevents polymerization of free heme into nontoxic hemozoin**. Free heme accumulates and oxidatively damages parasite membranes and proteins.
- **Resistance:** **PfCRT (chloroquine resistance transporter) point mutation K76T** prevents drug entry into the food vacuole. Worldwide for *P. falciparum*; chloroquine-sensitive regions are now few.
- **Pharmacokinetics:** Massive volume of distribution (sequesters in melanocytes, retina, liver, spleen, lung, brain) → **half-life 3–5 days initially, terminal 1–2 months.** Hence weekly dosing for prophylaxis. CYP3A4 metabolism, renal excretion of unchanged drug + metabolites.
- **Adverse effects (low prophylactic dose):** Generally well tolerated; GI upset, rash, pruritus.
- **Adverse effects (chronic high dose, e.g. RA/SLE as a DMARD):** **Retinopathy** (pigment in retina), cardiotoxicity (AV block, arrhythmia), blue-gray skin pigmentation, ototoxicity, myopathy, neuropsychiatric effects.

### Mefloquine (Slide 32)

- **Mechanism:** Blood schizonticide; mechanism unclear.
- **Pharmacokinetics:** CYP3A4 → inactive metabolites; long half-life (weekly dosing).
- **Resistance:** Amplification of **P-glycoprotein (PfMDR1)**; high-level resistance in mainland Southeast Asia.
- **The big takeaway — neuropsychiatric toxicity:** Can cause anxiety, depression, vivid dreams, and rarely **frank psychosis** (even in patients with no prior psychiatric history). **Contraindicated in patients with major psychiatric disorders, seizure disorder, cardiac conduction disease, and people whose work requires sharp mental alertness** (pilots, drivers, surgeons).

### Atovaquone-Proguanil (Slides 33–35)

- **Mechanism:** **Atovaquone** binds cytochrome bc1 on the inner mitochondrial membrane of the parasite, collapsing membrane potential. **Cycloguanil** (active metabolite of proguanil via CYP2C19) inhibits dihydrofolate reductase / thymidylate synthase, blocking folate synthesis. **Proguanil itself synergizes with atovaquone** in collapsing the mitochondrial membrane.
- **Pharmacokinetics:** Take with **fatty food** to improve bioavailability. Atovaquone half-life 3 days; proguanil 20 hours → daily dosing.
- **Adverse effects:** Generally well tolerated; GI upset, headache, transaminitis.

### Sulfadoxine-Pyrimethamine (SP) (Slides 36–37)

- **Mechanism:** Synergistic folate inhibition. **Sulfadoxine** (a sulfonamide) blocks dihydropteroate synthase; **pyrimethamine** blocks dihydrofolate reductase. The one-two punch on folate synthesis halts purine/DNA/RNA synthesis in the parasite.
- **Pharmacokinetics:** Both drugs have very long half-lives (sulfadoxine ~8 days), which is why this combination is dosed as a **single dose** for IPTp.
- **Resistance:** Point mutations in both DHFR and DHPS targets; widespread resistance has retired SP from US use.
- **Use today:** **IPTp (intermittent preventive therapy in pregnancy)** in endemic regions, monthly from 13–38 weeks.
- **Adverse effects:** Sulfa reactions including **Stevens-Johnson syndrome and TEN**; megaloblastic anemia from folate inhibition.

### Artemisinins (Artemether, Artesunate) (Slides 38–42)

- **Source:** Artemisia annua (sweet wormwood); a Chinese herbal remedy isolated as a drug in 1972 (Tu Youyou, Nobel 2015).
- **Mechanism:** The **endoperoxide bridge** in the artemisinin scaffold is cleaved by free heme in the parasite food vacuole, generating **reactive carbon-centered radicals** that damage parasite membranes, proteases, and nucleic acids.
- **Pharmacokinetics:** **Very short half-lives** (~2 hours; dihydroartemisinin ~1 hour), which is why they are always paired with a long-acting partner (lumefantrine, mefloquine, amodiaquine) in **artemisinin combination therapy (ACT)**. CYP3A4 metabolism. Take with fatty food.
- **Resistance:** **PfK13 propeller domain mutations** cause partial resistance (delayed parasite clearance) — emerging in the **Greater Mekong Subregion**. WHO mandates artemisinins be used **only in combination** to slow further resistance.
- **Activity:** Erythrocytic asexual stages of all species, **plus gametocytes**. **No activity against hypnozoites.**
- **Adverse effects:** Generally well tolerated. Can cause **black-water fever** (massive hemolysis with hemoglobinuria, AKI) in patients with high parasite burdens treated with IV artesunate.

### Quinine (Slide 43)

- **Source:** Cinchona tree bark (South America). The OG antimalarial.
- **Mechanism:** Blood schizonticide, mechanism poorly understood.
- **Pharmacokinetics:** Binds **alpha-1 acid glycoprotein** (a heat-shock acute-phase reactant elevated in severe illness) → effectively higher protein binding in sick patients. CYP3A4 inhibitor. Half-life ~11 h healthy, ~18 h in severe malaria.
- **Adverse effects — Cinchonism:** Tinnitus is the **earliest** symptom; also headache, dizziness, vertigo, vasodilation, sweating, nausea, visual disturbances. Severe cinchonism mandates stopping the drug.
- **Other toxicities:** **Hypoglycemia** (insulin sensitization + parasite glucose consumption) — particularly dangerous in pregnancy. **Black-water fever** (originally described with quinine). Cardiotoxicity (QT prolongation, AV block, arrhythmias) when given IV — quinidine is its stereoisomer and is no longer stocked in the US for this reason.

### Primaquine and Tafenoquine (Slides 44–48)

These are the only two drugs that reach the **dormant liver hypnozoites** of P. vivax and P. ovale, and the only practical answer to "how do I prevent relapse?"

- **Class:** 8-aminoquinolines.
- **Mechanism:** Generate reactive oxygen species in the parasite mitochondrion.
- **Activity:** Hypnozoites + gametocytes; tafenoquine also has erythrocytic activity.
- **Pharmacokinetics:** Primaquine half-life ~7 hours (daily dosing for 14 days); **tafenoquine half-life ~15 days** (single-dose for radical cure; weekly for prophylaxis).
- **The G6PD problem (cardinal rule):** Both drugs are **oxidative stressors** that cause **acute hemolytic anemia and methemoglobinemia in G6PD-deficient patients.** Therefore:
  - **Always test G6PD activity before administration.**
  - **Primaquine:** OK at full dose if activity ≥70%; **dose reduce** if 30–70%; do not use if <30%.
  - **Tafenoquine:** Requires **≥70% activity**; absolute contraindication if below.
  - **Both contraindicated in pregnancy** (the fetus may itself be G6PD-deficient and cannot be tested in utero).

:::correlate
G6PD Deficiency

- **Pathophysiology:** X-linked recessive deficiency of glucose-6-phosphate dehydrogenase, the rate-limiting enzyme of the pentose phosphate pathway. Without G6PD, red cells cannot generate NADPH, glutathione is not regenerated, and oxidative stress destroys hemoglobin (forming Heinz bodies that are removed by the spleen, leaving "bite cells").
- **Presentation:** Episodic acute hemolytic anemia triggered by oxidative stress: fava beans, sulfa drugs, primaquine/tafenoquine, dapsone, nitrofurantoin, infection, DKA. Patients present with jaundice, dark urine, back pain, anemia within hours-to-days of exposure.
- **Diagnosis:** G6PD activity assay (must be measured **between** episodes — during acute hemolysis the deficient cells have already lysed and the measured activity may falsely normalize).
- **Treatment:** Remove the trigger; supportive care; transfuse if severe.
- **Risk Factors:** Mediterranean, African, Southeast Asian descent (high prevalence in malaria-endemic regions — selection pressure, since G6PD deficiency is partially protective against malaria).
- **Complications:** Acute kidney injury from hemoglobinuria, severe anemia.
- **Lecturer's Point:** [Lecturer Emphasis] G6PD prevalence is highest exactly where malaria is most endemic. This is not a coincidence — it is one of the textbook examples of a balanced polymorphism. But it means the very populations needing primaquine for radical cure are the ones at highest risk from it. Test before treating.
:::

### Doxycycline and Clindamycin (Slides 49–50)

- **Mechanism:** Inhibit the **apicoplast** (a chloroplast-derived organelle in apicomplexan parasites). The "delayed death" mechanism — the current generation of parasites limps along, but their progeny cannot produce required apicoplast proteins and die.
- **Use in malaria:** **Slow-acting, never as monotherapy** in acute illness. Doxycycline = primary partner with quinine for chloroquine-resistant treatment, and an alternative for prophylaxis (daily; continue 4 weeks after return). Clindamycin = pediatric and pregnancy alternative when doxycycline is contraindicated.
- **Adverse effects:** Doxycycline → photosensitivity, GI upset, esophagitis, **tooth enamel staining in children <8 and in pregnancy**. Clindamycin → diarrhea, **C. difficile pseudomembranous colitis** (the textbook association).

---

## 7. Putting It Together — Case Selection Logic (Slide 51)

[Lecturer Emphasis] Five quick scenarios from the lecture worth memorizing as cognitive shortcuts:

| Patient | Decision | Why |
| :--- | :--- | :--- |
| Healthy 22F → 2-week mission to West Africa | **Atovaquone-proguanil** daily | Standard for chloroquine-resistant Africa; well-tolerated; short post-travel tail (1 week). |
| 50M w/ depression hx → Central Africa | **Atovaquone-proguanil** OR **doxycycline** | **Avoid mefloquine** (depression/psychosis risk). Chloroquine inappropriate (resistance). |
| Healthy 38F → Asia, P. vivax-predominant | **Chloroquine** weekly; on return, **tafenoquine** for radical cure | Asia P. vivax is still chloroquine-sensitive; tafenoquine eradicates hypnozoites — but requires G6PD ≥70% screen. |
| 25F at 23-week gestation → wedding in West Bengal | **Don't go.** If she must, **chloroquine or mefloquine** | Pregnancy = highest risk for severe malaria; placental sequestration of falciparum; severe maternal/fetal outcomes. |
| 4F w/ acute fever, recent travel to Haiti, P. falciparum smear, can take POs | **Artemether-lumefantrine (oral ACT)** | Resistance reports from Haiti make chloroquine unreliable; quinine causes hypoglycemia; doxycycline contraindicated <8 yo. |

:::highyield
**The five decision questions you must run on every malaria patient:**
1. Which species? (Falciparum severity vs. vivax/ovale relapse risk)
2. Which region? (Resistance pattern)
3. Severity? (Oral ACT vs. IV artesunate)
4. Pregnancy? (Limits options; never withhold severe-malaria treatment)
5. G6PD status? (Required before primaquine or tafenoquine)
:::
`,
  questions: [
    {
      question: "A 22-year-old healthy woman with no drug allergies is preparing for a 2-week mission trip to Senegal (West Africa, chloroquine-resistant). Which of the following prophylactic regimens is most appropriate, and why?",
      options: [
        "Chloroquine 500 mg weekly, starting 1 week before travel and continuing 4 weeks after",
        "Mefloquine 250 mg weekly, starting 2 weeks before travel and continuing 4 weeks after",
        "Atovaquone-proguanil daily with a fatty meal, starting 2 days before travel and continuing 7 days after return",
        "Primaquine 30 mg daily, starting 1 day before travel and continuing 7 days after return",
        "Doxycycline 100 mg daily, starting 1 day before travel and continuing 1 week after return"
      ],
      correctAnswer: 2,
      rationale: "Atovaquone-proguanil is well tolerated, effective in chloroquine-resistant Africa, taken with food, and has a short post-travel tail (1 week). Chloroquine is wrong because of resistance throughout sub-Saharan Africa. Mefloquine is appropriate but has a longer post-travel requirement and a worse adverse-effect profile (neuropsychiatric). Primaquine alone is not adequate against P. falciparum. Doxycycline is acceptable but the post-travel duration listed (1 week) is wrong—it must be continued for 4 weeks because doxycycline is slow-acting."
    },
    {
      question: "A 50-year-old man with a history of major depression is being sent by his employer to Central Africa. Which prophylactic agent is most contraindicated, and why?",
      options: [
        "Doxycycline — risk of esophagitis",
        "Mefloquine — risk of precipitating psychosis or worsening depression",
        "Atovaquone-proguanil — risk of bone marrow suppression",
        "Chloroquine — retinal toxicity at prophylactic doses",
        "Primaquine — black water fever"
      ],
      correctAnswer: 1,
      rationale: "Mefloquine has a well-documented association with neuropsychiatric adverse effects including anxiety, vivid dreams, depression worsening, and frank psychosis—even in patients without prior psychiatric history. It is contraindicated in patients with major psychiatric disorders. Atovaquone-proguanil or doxycycline are the appropriate alternatives. Retinal toxicity from chloroquine occurs only with chronic high cumulative doses (e.g., for autoimmune disease), not at antimalarial prophylactic doses."
    },
    {
      question: "A 28-year-old man is being treated with primaquine for radical cure following P. vivax infection acquired in Asia. Two days after starting therapy he develops jaundice, dark urine, fatigue, and a rapid drop in hemoglobin. What enzyme deficiency most likely underlies this reaction, and what is the molecular consequence?",
      options: [
        "Pyruvate kinase deficiency — impaired ATP generation in red cells",
        "Glucose-6-phosphate dehydrogenase deficiency — inability to regenerate NADPH and reduced glutathione, leading to oxidative red cell destruction",
        "Hexokinase deficiency — failure of glycolysis",
        "Methemoglobin reductase deficiency — failure to reduce methemoglobin",
        "Glutathione synthetase deficiency — failure to synthesize glutathione de novo"
      ],
      correctAnswer: 1,
      rationale: "Primaquine is an oxidative stressor. In G6PD-deficient red cells, NADPH cannot be regenerated, so glutathione cannot be reduced, and oxidative damage destroys hemoglobin and the red cell membrane (forming Heinz bodies and bite cells). G6PD activity must be measured BEFORE administration—greater than or equal to 70% allows full-dose primaquine, 30–70% allows dose reduction, below 30% precludes its use entirely. Tafenoquine requires ≥70% activity and has no dose-reduction option."
    },
    {
      question: "A 4-year-old previously healthy girl returns from a family visit to Haiti with 24 hours of fever, chills, headache, and fatigue. Blood smear confirms P. falciparum at low parasitemia. She is hemodynamically stable, alert, and tolerating oral fluids. Which is the most appropriate first-line therapy?",
      options: [
        "IV artesunate, 0/12/24/48 h",
        "Oral artemether-lumefantrine BID for 3 days",
        "Oral chloroquine for 3 days",
        "Oral doxycycline plus quinine for 7 days",
        "Oral primaquine plus chloroquine for 14 days"
      ],
      correctAnswer: 1,
      rationale: "Oral artemether-lumefantrine is first-line for uncomplicated falciparum malaria in any patient who can tolerate oral therapy. IV artesunate is reserved for severe disease (which she does not have). Chloroquine cannot be used—Haiti was historically chloroquine-sensitive but resistance has now been reported, and treating empirically as resistant is the safer call. Quinine + doxycycline is an alternative, but doxycycline is contraindicated under age 8 due to tooth enamel staining (clindamycin would replace it). Primaquine is for hypnozoite eradication in P. vivax/ovale—not relevant in falciparum."
    },
    {
      question: "Which of the following statements about the artemisinin class of antimalarials is most accurate?",
      options: [
        "Artemisinins are first-line for radical cure of P. vivax because they eradicate hypnozoites.",
        "Artemisinins act via the endoperoxide bridge generating reactive radicals after activation by free heme; they have very short half-lives and must be paired with a longer-acting partner drug.",
        "Artemisinin resistance is now widespread globally and the class has been retired from WHO guidelines.",
        "IV artesunate is contraindicated in pregnancy in all trimesters due to teratogenicity.",
        "Artemisinins are highly active against the gametocyte stage but inactive against erythrocytic asexual forms."
      ],
      correctAnswer: 1,
      rationale: "The endoperoxide bridge is essential for activity; once cleaved by free heme in the food vacuole, it generates reactive carbon radicals that damage parasite proteins and membranes. Half-lives are ~2 hours (artemether) and ~1 hour (dihydroartemisinin), which is why ACTs always pair the artemisinin with a long-acting partner. Artemisinins do NOT touch hypnozoites. Resistance is partial (PfK13 mutations causing delayed clearance) and limited to the Greater Mekong Subregion—the class remains first-line. IV artesunate is the treatment of severe malaria in pregnancy and should not be withheld. Artemisinins are active against erythrocytic asexual stages AND gametocytes."
    }
  ],
  flashcards: [
    { front: "Which two Plasmodium species form **dormant hypnozoites** that cause relapse?", back: "**P. vivax** and **P. ovale**.", tag: "Pharmacology" },
    { front: "Which Plasmodium species is responsible for the great majority of **severe malaria** and **resistance**?", back: "**P. falciparum** — most widespread, most lethal, most resistant.", tag: "Pharmacology" },
    { front: "What is the **first-line treatment for uncomplicated falciparum malaria** in the US?", back: "**Artemether-lumefantrine (Co-Artem)**, BID for 3 days.", tag: "Pharmacology" },
    { front: "What is the **first-line treatment for severe falciparum malaria** worldwide?", back: "**IV artesunate** at 0, 12, 24, and 48 hours, then once daily until parasitemia <1%, then transition to oral ACT.", tag: "Pharmacology" },
    { front: "What is the molecular **mechanism of chloroquine**?", back: "Enters parasite food vacuole and **prevents polymerization of free heme into nontoxic hemozoin**; free heme then oxidatively damages the parasite.", tag: "Pharmacology" },
    { front: "What is the **most common chloroquine resistance mechanism**?", back: "**PfCRT (chloroquine resistance transporter) point mutation, K76T**, blocking drug entry into the food vacuole.", tag: "Pharmacology" },
    { front: "What is the **cardinal adverse effect of mefloquine**?", back: "**Neuropsychiatric effects** — anxiety, depression, vivid dreams, frank psychosis. Contraindicated in major psychiatric disorders.", tag: "Pharmacology" },
    { front: "What activates the **artemisinin endoperoxide bridge**, and what does it produce?", back: "**Free heme** in the parasite food vacuole cleaves the bridge, generating **reactive carbon radicals** that damage parasite membranes, proteases, and nucleic acids.", tag: "Pharmacology" },
    { front: "Why are artemisinins always paired with a long-acting partner drug (ACT)?", back: "Artemisinins have very short half-lives (~2 hours) → rapid kill but high recrudescence risk if used alone. Partner drugs (lumefantrine, mefloquine) cover the post-artemisinin window and reduce resistance emergence.", tag: "Pharmacology" },
    { front: "What is the **emerging artemisinin resistance mechanism**?", back: "**PfK13 propeller domain mutations** causing **delayed parasite clearance** — currently in the Greater Mekong Subregion.", tag: "Pharmacology" },
    { front: "What two drugs eradicate **hypnozoites** for radical cure of P. vivax/ovale?", back: "**Primaquine** (daily x 14 days) or **tafenoquine** (single dose).", tag: "Pharmacology" },
    { front: "What enzyme activity must be checked before primaquine or tafenoquine?", back: "**G6PD activity.** Tafenoquine requires ≥70%; primaquine ≥70% full dose, 30-70% dose-reduced, <30% contraindicated.", tag: "Pharmacology" },
    { front: "Why is G6PD deficiency particularly common in malaria-endemic regions?", back: "**Balanced polymorphism**: G6PD deficiency confers partial protection against falciparum malaria, so the deficient allele was selected for in those populations.", tag: "Pharmacology" },
    { front: "What is **cinchonism**, and which symptom appears earliest?", back: "Cluster of quinine adverse effects: **tinnitus (earliest)**, headache, vertigo, vasodilation, sweating, nausea, visual changes. Severe cinchonism → stop drug.", tag: "Pharmacology" },
    { front: "What is **black-water fever**?", back: "**Massive intravascular hemolysis** with hemoglobinemia, hemoglobinuria, and AKI seen in severe malaria treated with quinine or IV artesunate at high parasite burdens. Urine appears dark red-to-black.", tag: "Pharmacology" },
    { front: "What is the **mechanism of atovaquone-proguanil**?", back: "**Atovaquone** binds parasite cytochrome bc1 → mitochondrial membrane potential collapse. **Cycloguanil** (active metabolite of proguanil via CYP2C19) inhibits **DHFR/thymidylate synthase** → folate inhibition. Synergy.", tag: "Pharmacology" },
    { front: "What is the **mechanism of sulfadoxine-pyrimethamine**?", back: "**Sulfadoxine** blocks **dihydropteroate synthase**; **pyrimethamine** blocks **dihydrofolate reductase** — synergistic folate inhibition.", tag: "Pharmacology" },
    { front: "What is the role of **doxycycline** in malaria?", back: "**Slow-acting** prophylaxis (daily, continue 4 weeks after return) AND adjunct to quinine for treatment. Avoid in pregnancy and children <8 (tooth enamel). Mechanism: inhibits parasite **apicoplast** (delayed death).", tag: "Pharmacology" },
    { front: "What is **IPTp** and which drug is used?", back: "**Intermittent Preventive Treatment in Pregnancy** — **sulfadoxine-pyrimethamine (SP)** monthly from 13 weeks through 38 weeks gestation, in HIV-negative pregnant patients in malaria-endemic regions.", tag: "Pharmacology" }
  ],
  pearls: [
    { title: "Three-Axis Decision Framework", content: "For every malaria patient, ask three questions: (1) Which species? (2) Which region/resistance pattern? (3) Which life-cycle stage are we trying to kill? Get those three right and the drug choice is mechanical." },
    { title: "ACT Always", content: "Artemisinins are short-acting and resistance-prone. They are NEVER used as monotherapy outside of severe-disease IV bolus protocols. The 'C' in ACT (combination therapy) is non-negotiable per WHO." },
    { title: "Hypnozoites Need 8-Aminoquinolines", content: "Only primaquine and tafenoquine reach the dormant liver hypnozoites. ACT, chloroquine, and the rest will treat the active blood infection but the patient WILL relapse from P. vivax/ovale unless you add radical-cure therapy." },
    { title: "Test G6PD Before Primaquine", content: "G6PD prevalence is highest in the same populations needing radical cure. Test activity before administration—≥70% for tafenoquine, ≥70% full or 30–70% reduced for primaquine. Skip the test and you cause an iatrogenic hemolytic crisis." },
    { title: "Pregnancy = Severe Disease Risk", content: "P. falciparum-infected red cells sequester in the placenta. Pregnant women have sharply elevated risks of severe malaria, miscarriage, preterm labor, fetal growth restriction, stillbirth, and maternal death. The lecturer's first answer for 'should this pregnant woman travel to West Bengal?' was: don't go." },
    { title: "Tinnitus Is the Quinine Canary", content: "Cinchonism's earliest symptom is tinnitus. If a patient on quinine starts hearing ringing, that's the warning—catch it before headache, vertigo, and visual disturbance set in." },
    { title: "IV Artesunate Beats IV Quinidine — Both Beat Doing Nothing", content: "If artesunate is delayed at your hospital pharmacy, do NOT wait. Crush oral artemether-lumefantrine and give it via NG tube as a bridge. IV quinidine is no longer stocked in the US." }
  ]
});
