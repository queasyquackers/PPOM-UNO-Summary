window.receiveLectureContent({
  id: "l185",
  module: "Pharmacology",
  metadata: {
    title: "Lecture #185: Pharmacology of Antiretroviral Drugs — Part 2 (NNRTIs, PIs, Entry & Capsid Inhibitors, Special Populations)",
    lecturer: "L. Goldstein, Pharm.D. (Session 185)",
    readingTime: "13-15 min",
    difficulty: "Advanced",
    tags: ["Pharmacology", "HIV", "NNRTI", "Protease Inhibitor", "Entry Inhibitor", "Fusion Inhibitor", "Capsid Inhibitor", "Pregnancy", "PrEP", "PEP"]
  },
  resources: {
    ankingResource: {
      primarySource: "BandB",
      chapter: "Pharmacology > Antiretroviral Therapy",
      alternatives: [
        { resource: "SketchyPharm", chapter: "Antimicrobials > Antivirals > HIV (NNRTIs, PIs, Entry Inhibitors)" },
        { resource: "FirstAid", chapter: "Microbiology > Antimicrobials > Antivirals (HIV)" },
        { resource: "Pixorize", chapter: "Pharmacology > Antiretrovirals" }
      ]
    },
    anking: [
      { match: "Non-nucleoside reverse transcriptase inhibitors — allosteric site, no activation needed, low resistance barrier", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::NNRTIs" },
      { match: "Efavirenz — neuropsychiatric effects, vivid dreams, QT prolongation, CYP induction/inhibition", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Efavirenz" },
      { match: "Rilpivirine — needs acid for absorption; restricted to viral load <100,000 and CD4 ≥200", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Rilpivirine" },
      { match: "Nevirapine hepatotoxicity — avoid in females CD4 >250 / males CD4 >400", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Nevirapine" },
      { match: "Protease inhibitors — block gag/gag-pol cleavage → immature non-infectious virions", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Protease_Inhibitors" },
      { match: "Ritonavir / cobicistat — pharmacokinetic boosters via CYP3A4 inhibition", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Boosters" },
      { match: "Atazanavir — indirect hyperbilirubinemia, jaundice, kidney/gallstones", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Atazanavir" },
      { match: "Darunavir — sulfa moiety; avoid in sulfa allergy; hepatotoxicity", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Darunavir" },
      { match: "PI class metabolic effects — Cushingoid lipodystrophy, hyperlipidemia, insulin resistance", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::PI_Adverse_Effects" },
      { match: "Maraviroc — CCR5 antagonist; tropism testing required", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Maraviroc" },
      { match: "Enfuvirtide — gp41 fusion inhibitor; injection-site reactions", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Enfuvirtide" },
      { match: "Lenacapavir — capsid inhibitor; long-acting SQ every 6 months", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Lenacapavir" },
      { match: "Pre-exposure prophylaxis (PrEP) — TDF/FTC or TAF/FTC; cabotegravir IM q2mo", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::HIV_PrEP" },
      { match: "Post-exposure prophylaxis (PEP) — TDF/FTC + dolutegravir or raltegravir; 4 weeks; start ASAP", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::HIV_PEP" },
      { match: "HIV in pregnancy — 2 NRTIs + dolutegravir; intrapartum IV zidovudine if VL detectable; neonatal AZT", resources: "AnKing Step 1 v12: #FirstAid::Reproductive::HIV_Pregnancy" }
    ]
  },
  summary: `
# Story Mode: Stopping HIV After Entry, Before Maturation, and at the Front Door

Part 1 covered the **NRTI backbone** and the **integrase inhibitor** that anchors most modern regimens. Part 2 fills out the rest of the antiretroviral arsenal: the **non-nucleoside reverse transcriptase inhibitors (NNRTIs)**, the **protease inhibitors (PIs)**, the **entry inhibitors** (CCR5 antagonists, fusion inhibitors, post-attachment inhibitors), and the newest class — the **capsid inhibitor** lenacapavir. Each class targets a different step in the viral lifecycle, and each carries a distinctive toxicity, drug-interaction, and patient-selection profile that the lecturer drilled aggressively.

The unifying take-home: **two NRTIs plus an INSTI is first-line for everyone except neonates**. NNRTIs, PIs, and the entry-inhibitor classes are second-tier choices reserved for situations where the first-line drugs are contraindicated, where the patient has resistance, or where the patient is heavily treatment-experienced. The capsid inhibitor lenacapavir is reserved for heavily treatment-experienced patients but is interesting because of its **6-month dosing interval**.

The clinical hooks to memorize: **efavirenz neuropsychiatric effects**, **rilpivirine's viral-load and CD4 restrictions**, **nevirapine hepatotoxicity in immunocompetent patients (females CD4 >250, males CD4 >400)**, **atazanavir indirect hyperbilirubinemia**, **darunavir's sulfa moiety**, **maraviroc tropism testing**, **enfuvirtide injection-site reactions**, and **the special-population playbook** — pregnancy, PrEP, PEP, pediatrics, and the older patient.

---

## 1. Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs) (Slides 4–13)

### Mechanism

- **Noncompetitive allosteric inhibitors** of reverse transcriptase — they bind a hydrophobic pocket near the active site (the "palm domain") and cause a conformational change that disables the enzyme.
- **Not prodrugs** — already active small molecules. **No intracellular activation required.**

### The Five NNRTIs

| Drug | Generation | Notes |
| :--- | :--- | :--- |
| **Doravirine** | Newer | Generally well tolerated; CYP3A4 substrate. Preferred. |
| **Rilpivirine** | Newer | Combined with TAF/FTC or with cabotegravir; needs acid stomach. Neuropsych and QT effects. |
| **Efavirenz** | Older | Famous for neuropsychiatric effects; QT prolongation; mixed CYP inducer/inhibitor. |
| **Nevirapine** | Older | Low resistance barrier; severe hepatotoxicity; mostly used now in neonates. |
| **Etravirine** | Older | Higher resistance barrier; option for treatment-experienced patients. |

### Class Properties

- **Oral, once-daily** (most), extensively protein-bound, extensively CYP-metabolized.
- **Low barrier to resistance** — a single mutation in the binding pocket confers high-level resistance and there is broad **cross-resistance within the class**.
- **Transmitted NNRTI resistance is common** — perform resistance testing before starting an NNRTI in a treatment-naive patient.
- **Class adverse effects**: **rash** (especially within the first 4 weeks; discontinue at the first sign of a serious rash) and GI symptoms.
- **High potential for CYP-based drug interactions.**

### Drug-Specific Pearls

- **Efavirenz neuropsychiatric effects** [Lecturer Emphasis]: dizziness, vivid/abnormal dreams, depression, insomnia, headache. Also QT prolongation. **Efavirenz–methadone interaction**: efavirenz induces CYP2B6 and 3A4 → lower methadone levels → **opioid withdrawal**.
- **Rilpivirine viral-load and CD4 restriction**: only for treatment-naive adults with **HIV RNA <100,000 copies/mL AND CD4 ≥200/µL**. Higher viral loads → virologic failure. Requires an acid stomach for absorption.
- **Nevirapine hepatotoxicity** [Lecturer Emphasis]: severe, potentially fatal hepatotoxicity. **Avoid in women with CD4 >250/µL and men with CD4 >400/µL** — these are the higher-risk groups. Main remaining clinical use: **presumptive therapy in high-risk neonates** (combined with zidovudine and emtricitabine).
- **Etravirine**: higher resistance barrier than other NNRTIs → useful in treatment-experienced patients.

:::correlate
Nevirapine Hepatotoxicity

- **Pathophysiology:** Hypersensitivity-mediated, potentially fatal hepatocellular injury. Higher CD4 counts predict greater immune-mediated injury risk.
- **Presentation:** Hepatitis (transaminitis, jaundice) often preceded by a rash and systemic allergic features within the first 6–18 weeks of therapy.
- **Diagnosis:** Clinical + LFTs + drug history.
- **Treatment:** **Stop nevirapine immediately and permanently.** Supportive care; transplant if fulminant.
- **Risk Factors:** Female with CD4 >250/µL; male with CD4 >400/µL; concurrent rash.
- **Complications:** Fulminant hepatic failure, death.
- **Lecturer's Point:** [Lecturer Emphasis] Memorize the CD4 thresholds — these are board-favorite cutoffs.
:::

---

## 2. Protease Inhibitors (PIs) (Slides 15–25)

### Mechanism

- The **gag and gag-pol polyproteins** are large precursors that must be **cleaved by HIV protease** during viral maturation to generate the structural proteins, the enzymes (reverse transcriptase, integrase, protease itself), and the mature infectious virion.
- **PIs reversibly bind the protease active site**, blocking polyprotein cleavage → **release of immature, non-infectious virions**.

### The Two PIs in Current Use

- **Atazanavir (ATV)** — must be **boosted** with ritonavir or cobicistat. Once daily.
- **Darunavir (DRV)** — must be **boosted** with ritonavir or cobicistat. Once daily in treatment-naive; twice daily in treatment-experienced.

Older PIs (lopinavir, indinavir, saquinavir, nelfinavir, etc.) are no longer used in first-line therapy because of lower efficacy, pill burden, or toxicity, but they still appear on board exams.

### Pharmacokinetic Boosting [Lecturer Emphasis]

- **Ritonavir** was originally a PI but is now used only as a **booster** because its **strong inhibition of CYP3A4** at low doses dramatically raises the partner PI's plasma concentration and prolongs its half-life.
- **Cobicistat** is a **dedicated booster** — no antiviral activity itself, only CYP3A4 (and P-gp) inhibition.
- Boosting → **higher AUC**, **longer duration of action**, **once-daily dosing**, **higher genetic barrier to resistance**.

### Class Adverse Effects

- GI: **nausea, vomiting, diarrhea** — very common.
- **Cardiac conduction abnormalities** (QT/PR prolongation).
- **Metabolic syndrome**: hyperglycemia, insulin resistance, hyperlipidemia (↑LDL, ↑triglycerides), **Cushingoid lipodystrophy** with buffalo hump, moon face, slender arms/legs, protuberant abdomen.

### Drug-Specific Toxicities

- **Atazanavir**: **indirect (unconjugated) hyperbilirubinemia and jaundice** (UGT1A1 inhibition — analogous to Gilbert syndrome physiology; benign but cosmetic). **Gallstones and kidney stones.** Requires **acid stomach** for absorption (no proton-pump inhibitors).
- **Darunavir**: **skin rash** (sulfonamide moiety → **avoid in patients with sulfa allergy**), transaminitis, severe hepatitis (contraindicated in severe liver disease).

### Resistance

- **Multiple point mutations in the pol gene** are required for high-level PI resistance — high genetic barrier.
- **Transmitted PI resistance is uncommon** → PIs are useful when initiating ART quickly before genotype results are back.

### CYP3A4 and P-gp Drug Interactions (Many)

- PIs themselves inhibit CYP3A4, and boosters (ritonavir, cobicistat) are even stronger inhibitors.
- **Statins** that are CYP3A4 substrates (simvastatin, lovastatin) → toxic accumulation → **rhabdomyolysis and AKI**. Use rosuvastatin, pravastatin, or atorvastatin at low dose instead.
- **Midazolam** (narrow therapeutic index CYP3A4 substrate) — accumulates → respiratory depression.
- **Digoxin** (P-gp substrate) — accumulates → toxicity.
- **Hormonal contraceptives** — induction of UGT enzymes by ritonavir/PI reduces estrogen levels → **contraceptive failure**.
- **Methadone** — accelerated clearance → **opioid withdrawal**.

:::correlate
Protease Inhibitor Metabolic Syndrome / Lipodystrophy

- **Pathophysiology:** PIs (especially older ones) inhibit GLUT4-mediated glucose uptake, alter adipocyte differentiation via interference with sterol regulatory element-binding protein (SREBP), and disturb lipid handling — producing peripheral lipoatrophy, central lipohypertrophy, dyslipidemia, and insulin resistance.
- **Presentation:** Cushingoid fat redistribution (buffalo hump, moon face, peripheral wasting, central adiposity), hypertriglyceridemia, hypercholesterolemia, hyperglycemia/insulin resistance.
- **Diagnosis:** Clinical exam + fasting lipid panel + fasting glucose / HbA1c.
- **Treatment:** Switch to non-PI regimen when possible; statins (CYP-safe choices); diet, exercise; metformin for insulin resistance.
- **Risk Factors:** Older PIs; longer duration of therapy; pre-existing metabolic syndrome.
- **Complications:** ASCVD, diabetes, body-image effects on adherence.
- **Lecturer's Point:** [Lecturer Emphasis] Monitor lipids and glucose at baseline and routinely; choose CYP-safe statins to avoid drug interactions.
:::

---

## 3. Entry Inhibitors (Slides 27–34)

The viral lifecycle starts when gp120 binds CD4, recruits a chemokine co-receptor (CCR5 or CXCR4), and triggers gp41-mediated fusion. Drugs target each of these steps.

### Maraviroc — CCR5 Antagonist

- **Oral, BID** (half-life 14–18 h).
- **Blocks CCR5** so gp120 cannot engage it → fusion is prevented.
- **Active only against CCR5-tropic virus** — **tropism testing required before initiating**. CXCR4-tropic or dual-tropic virus will not respond.
- **Adverse effects**: **hepatotoxicity** (can be preceded by severe rash and systemic allergic features), upper respiratory infections.
- **CYP3A4 substrate** → many drug interactions.

### Enfuvirtide (T-20) — Fusion Inhibitor

- **Synthetic 36-amino-acid peptide** derived from gp41.
- **Subcutaneous, twice daily** — protein, can't be given orally.
- **Binds gp41** and prevents the conformational change needed for fusion of the viral and host membranes.
- **Reserved for treatment-experienced patients.**
- **Adverse effects**: **injection-site reactions** (pain, erythema, induration, nodules) are the dose-limiting toxicity. **No CYP interactions** (it's a peptide).

### Fostemsavir — Attachment Inhibitor

- Oral **prodrug** of temsavir.
- **Binds gp120 adjacent to the CD4-binding site**, preventing the conformational change required for attachment.
- For **heavily treatment-experienced** patients.
- **Strong CYP3A4 inducers are contraindicated** (will drop levels). QT prolongation, transaminitis in HBV/HCV co-infection.

### Ibalizumab — Post-Attachment Inhibitor

- **Humanized monoclonal antibody** that binds **CD4 domain 2** (not the gp120-binding site), allowing CD4 engagement but blocking the downstream conformational changes required for fusion.
- **IV** infusion every 2 weeks.
- For **heavily treatment-experienced** patients.

---

## 4. Capsid Inhibitor — Lenacapavir (Slides 35–37)

Newest class (approved 2022).

- **Mechanism**: Binds the interface between **capsid (p24) subunits**, locking the capsid in a stable conformation. This causes **multi-step interference**:
  - Prevents **viral uncoating** after entry
  - Blocks **capsid-mediated nuclear import** of proviral DNA
  - Disrupts **capsid assembly and release** of new virions
- **Dosing**: **Oral lead-in then subcutaneous injection every 6 months** — the longest-acting antiretroviral.
- For **heavily treatment-experienced** patients in combination with other ARVs.
- **Generally well tolerated**; injection-site reactions are the main complaint.
- **Complex hepatic metabolism** (CYP3A4 and others) → **strong CYP3A4 inducers contraindicated**.

---

## 5. Treatment Guidelines Across Special Populations (Slides 38–46)

### Adults — Universal Principles

- **ART recommended for everyone with HIV**, regardless of CD4, to improve survival and prevent transmission.
- **Two NRTIs + an INSTI** is the preferred initial regimen in **all populations except neonates**.
- **Resistance testing** should guide selection in both treatment-naive and treatment-experienced patients.
- **Adherence is everything.** Treatment-experienced patients should be evaluated for barriers to adherence before regimen changes.

### Two-Drug Maintenance Regimens

| Regimen | Notes |
| :--- | :--- |
| **Dolutegravir + rilpivirine** | Oral once daily; for suppressed patients with no resistance |
| **Cabotegravir + rilpivirine** | Long-acting IM every 4 or 8 weeks |
| **Dolutegravir + lamivudine** | Oral once daily |

All require: no baseline resistance, no prior virologic failure, no active HBV (unless on a separate HBV-active agent), no pregnancy plans.

### Pre-Exposure Prophylaxis (PrEP)

- **TDF/FTC or TAF/FTC** orally for HIV-negative individuals at risk.
- **Cabotegravir IM every 2 months** is now also approved (adolescents and adults).
- Adherence is critical — PrEP only works if it's actually taken/injected on schedule.
- Part of a comprehensive prevention strategy with behavioral counseling.

### Post-Exposure Prophylaxis (PEP)

- **Preferred regimen**: **TDF/FTC + dolutegravir or raltegravir** for **28 days**, started **as soon as possible** after exposure (needle stick, sexual assault, etc.).
- Alternative: boosted PI.
- Follow-up testing, counseling, and medical evaluation are part of the package.

### Pregnancy [Lecturer Emphasis]

- **Goal**: maintain viral load **below detection** throughout pregnancy to prevent vertical transmission.
- **Preferred antepartum regimen**: 2 NRTIs + **dolutegravir** (safe across all trimesters based on accumulated data — historic concerns about neural tube defects from peri-conception exposure have not been borne out).
- **Alternatives**: bictegravir, raltegravir, boosted atazanavir, boosted darunavir, efavirenz, rilpivirine.
- Drugs must have: extensive safety data, good tolerability, stable PK across pregnancy, **high placental transfer**, **no teratogenicity**.

### Intrapartum (Labor & Delivery)

- **IV zidovudine continuous infusion during labor** if maternal viral load is detectable or unknown near delivery.
- Not needed if patient has been adherent with low viral load late in pregnancy.
- For unknown HIV status: **rapid screening**; if positive, start mother and infant on therapy pending confirmation.

### Neonatal ARV Therapy

- **Low-risk newborns** (mother adherent with suppressed VL, neonate ≥37 weeks): **zidovudine ×4 weeks**.
- **Higher-risk newborns** (mother poorly suppressed, preterm): **presumptive multi-drug therapy** for 2–6 weeks: **zidovudine + emtricitabine + nevirapine** OR **zidovudine + emtricitabine + raltegravir**.

### Pediatric Patients

- Same concept: 2 NRTIs + INSTI.
- Children's growth requires **frequent dose adjustment**.
- **Not recommended for children**: efavirenz, etravirine, maraviroc, cabotegravir (insufficient data or low efficacy in pediatrics).

### Breastfeeding

- Patients with **acute or primary HIV should not breastfeed.**
- **No consensus** on infant ARV prophylaxis for fully suppressed mothers who choose to breastfeed.

### Transgender Patients

- ART recommended same as for all HIV patients.
- **Watch hormone-therapy drug interactions** — gender-affirming hormones interact with several antiretrovirals.

### Women of Reproductive Age

- Consider **hormonal contraceptive interactions** — boosted PIs and some NNRTIs reduce contraceptive efficacy.

### Older Patients

- Comorbidities and polypharmacy → high drug-interaction burden.
- Watch neurocognitive function and access to medical/social services.

---

## 6. Putting Part 2 Together — When to Reach for Each Class

1. **First-line everyone**: two NRTIs + dolutegravir or bictegravir.
2. **Need to start before genotype**: a **boosted PI** (low transmitted resistance).
3. **Hyperlipidemia, cardiac risk** → avoid older PIs; use INSTI-based regimens.
4. **High pill burden concern, stable patient** → consider **cabotegravir/rilpivirine** long-acting IM.
5. **Treatment-experienced with multidrug resistance** → reach for **etravirine, fostemsavir, ibalizumab, enfuvirtide, lenacapavir** with ID-expert involvement.
6. **Pregnancy** → 2 NRTIs + **dolutegravir**, IV zidovudine intrapartum if VL detectable, 4-week neonatal zidovudine.
7. **PrEP** → TDF/FTC or TAF/FTC orally, or cabotegravir IM q2mo.
8. **PEP** → TDF/FTC + dolutegravir/raltegravir × 28 days, start ASAP.

[Lecturer Emphasis] The thread running through both parts: **CYP3A4 drug-drug interactions are pervasive** — once you know the patterns, you can predict the interactions for almost every ARV in the table.
`,
  questions: [
    {
      question: "A 34-year-old woman with HIV is being started on antiretroviral therapy. Her baseline CD4 count is 280 cells/µL and viral load is 24,000 copies/mL. The physician considers a regimen containing nevirapine. Which of the following is the most appropriate response?",
      options: [
        "Nevirapine is preferred because of its excellent tolerability",
        "Nevirapine should be avoided because of severe hepatotoxicity risk in women with CD4 >250 cells/µL",
        "Nevirapine is contraindicated in any patient with viral load >10,000 copies/mL",
        "Nevirapine is the drug of choice for all newly diagnosed HIV patients",
        "Nevirapine is appropriate because the patient's CD4 is below 350"
      ],
      correctAnswer: 1,
      rationale: "Nevirapine causes severe, potentially fatal hepatotoxicity, with the highest risk in women with CD4 >250 cells/µL and men with CD4 >400 cells/µL. This patient's CD4 of 280 puts her in the higher-risk category. Nevirapine is no longer recommended for initial ART — its main remaining use is presumptive therapy in high-risk neonates. The first-line regimen would be 2 NRTIs + dolutegravir or bictegravir."
    },
    {
      question: "A 42-year-old man with HIV on ritonavir-boosted darunavir, tenofovir, and emtricitabine develops new-onset proximal muscle pain and weakness, dark urine, and a creatine kinase of 18,000 U/L. He was recently started on simvastatin 40 mg daily by his PCP for hyperlipidemia. Which of the following best explains his presentation?",
      options: [
        "Hereditary muscular dystrophy unmasked by ART",
        "Direct tenofovir myopathy through mitochondrial toxicity",
        "Ritonavir inhibition of CYP3A4 causing simvastatin accumulation and rhabdomyolysis",
        "An autoimmune myositis triggered by HIV reconstitution",
        "Statin-induced autoimmune necrotizing myopathy"
      ],
      correctAnswer: 2,
      rationale: "Ritonavir (and to a lesser extent darunavir itself) is a potent CYP3A4 inhibitor. Simvastatin is a CYP3A4 substrate; when CYP3A4 is inhibited, plasma simvastatin levels rise massively → skeletal muscle accumulation → rhabdomyolysis with risk of acute kidney injury. Simvastatin and lovastatin are contraindicated with boosted PIs. Pravastatin, rosuvastatin, or low-dose atorvastatin are safer alternatives. Tenofovir mitochondrial toxicity is minimal compared with first-generation NRTIs and would not cause acute rhabdomyolysis."
    },
    {
      question: "A 28-year-old woman who is 30 weeks pregnant and HIV-positive on a stable regimen of TDF/emtricitabine/dolutegravir presents in labor at 39 weeks. Her viral load 2 weeks ago was undetectable. Which of the following best describes intrapartum and neonatal management?",
      options: [
        "Stop all maternal ART during labor; give neonate 6 weeks of triple-drug therapy",
        "Continue maternal oral ART; IV zidovudine is not indicated because viral load is undetectable; give the newborn 4 weeks of oral zidovudine",
        "Switch to intravenous nevirapine for both mother and infant",
        "Perform an emergency cesarean section regardless of viral load",
        "Withhold all neonatal antiretroviral therapy until HIV testing is positive"
      ],
      correctAnswer: 1,
      rationale: "When a pregnant patient has been adherent with an undetectable viral load late in pregnancy, intrapartum IV zidovudine is NOT routinely required — transmission risk is minimal. Maternal oral ART continues. The newborn at low risk (mother suppressed, term gestation) receives 4 weeks of oral zidovudine as standard neonatal prophylaxis. Higher-risk newborns (detectable maternal VL, preterm) get presumptive triple therapy (zidovudine + emtricitabine + nevirapine or raltegravir) for 2–6 weeks."
    },
    {
      question: "A 36-year-old man at high ongoing risk of HIV acquisition asks about pre-exposure prophylaxis. He has normal renal function, no hepatitis B, and confirmed HIV-negative status. Which of the following is the preferred regimen?",
      options: [
        "Lifelong daily dolutegravir monotherapy",
        "Once-daily oral tenofovir disoproxil fumarate plus emtricitabine (TDF/FTC), or once-daily TAF/FTC, with the option of cabotegravir IM every 2 months",
        "Daily oral nevirapine",
        "Monthly IV zidovudine",
        "Weekly oral lenacapavir"
      ],
      correctAnswer: 1,
      rationale: "PrEP is administered as daily oral TDF/FTC or TAF/FTC, with cabotegravir IM every 2 months now also approved. All require adherence to be effective and are part of a comprehensive prevention strategy with behavioral counseling. PrEP requires confirmed HIV-negative status before initiation and ongoing HIV testing during use. Monotherapy with any drug is not PrEP — it would select for resistance if the patient becomes infected."
    },
    {
      question: "A 50-year-old man on a regimen of boosted atazanavir, tenofovir, and emtricitabine develops yellowing of his sclera. Direct (conjugated) bilirubin is normal; indirect (unconjugated) bilirubin is elevated; AST, ALT, alkaline phosphatase, and INR are normal. He feels well otherwise. Which of the following is the most likely cause?",
      options: [
        "Acute hepatitis from emtricitabine",
        "Bile duct obstruction from a gallstone",
        "Atazanavir-induced unconjugated hyperbilirubinemia from UGT1A1 inhibition (Gilbert-like physiology) — benign",
        "Tenofovir-induced hepatic steatosis",
        "Hemolytic anemia from drug-induced antibodies"
      ],
      correctAnswer: 2,
      rationale: "Atazanavir inhibits UGT1A1 (the enzyme also affected in Gilbert syndrome) → unconjugated hyperbilirubinemia and jaundice without true hepatotoxicity. LFTs and synthetic function remain normal. The condition is benign but cosmetically concerning, and patients should be counseled. Atazanavir can also cause gallstones and kidney stones. True drug-induced hepatitis would show transaminitis (which fits darunavir or nevirapine more than atazanavir)."
    }
  ],
  flashcards: [
    { front: "How do NNRTIs work?", back: "Noncompetitive allosteric inhibitors of HIV reverse transcriptase. They bind a hydrophobic pocket near the active site (palm domain) and cause a conformational change that disables the enzyme. They do NOT require intracellular activation.", tag: "Mechanism" },
    { front: "Why is the resistance barrier for NNRTIs so low?", back: "A single point mutation in the binding pocket confers high-level resistance, and there is broad cross-resistance within the class. Transmitted NNRTI resistance is common, so resistance testing is required before starting an NNRTI in a treatment-naive patient.", tag: "Resistance" },
    { front: "What are the classic adverse effects of efavirenz?", back: "Neuropsychiatric effects (vivid/abnormal dreams, dizziness, depression, insomnia, headache), rash, QT interval prolongation, and CYP-based drug interactions (mixed inducer/inhibitor). The efavirenz–methadone interaction causes opioid withdrawal via CYP2B6/3A4 induction.", tag: "Toxicity" },
    { front: "What pre-treatment criteria must be met for rilpivirine in treatment-naive patients?", back: "Viral load <100,000 copies/mL AND CD4 ≥200 cells/µL. Higher viral loads predict virologic failure. Rilpivirine also requires an acid stomach for absorption (no PPIs).", tag: "Pharmacology" },
    { front: "In which patients is nevirapine contraindicated due to hepatotoxicity?", back: "Women with CD4 >250 cells/µL and men with CD4 >400 cells/µL. Higher CD4 counts predict greater immune-mediated injury risk. Nevirapine's main current use is presumptive ART in high-risk neonates.", tag: "Toxicity" },
    { front: "How do protease inhibitors work?", back: "They reversibly bind the HIV protease active site and prevent cleavage of the gag and gag-pol polyproteins. The result is release of immature, non-infectious virions.", tag: "Mechanism" },
    { front: "Why are ritonavir and cobicistat given with other PIs?", back: "They are pharmacokinetic boosters — potent CYP3A4 inhibitors that raise plasma concentrations of the partner PI, prolong its half-life, allow once-daily dosing, and raise the genetic barrier to resistance. Ritonavir was originally a PI; cobicistat has no antiviral activity.", tag: "Pharmacology" },
    { front: "What metabolic adverse effects characterize the PI class?", back: "Cushingoid lipodystrophy (buffalo hump, moon face, peripheral wasting, central adiposity), hyperlipidemia (↑LDL, ↑triglycerides), hyperglycemia, insulin resistance. Monitor lipids and glucose at baseline and during therapy.", tag: "Toxicity" },
    { front: "What is the classic drug-specific toxicity of atazanavir?", back: "Indirect (unconjugated) hyperbilirubinemia and jaundice via UGT1A1 inhibition — physiologically similar to Gilbert syndrome. LFTs are normal; the effect is benign but visible. Also gallstones, kidney stones, and a requirement for acid stomach (no PPIs).", tag: "Toxicity" },
    { front: "What is the major adverse-effect concern with darunavir?", back: "Skin rash (darunavir contains a sulfonamide moiety — avoid in patients with sulfa allergy), transaminitis, and severe hepatotoxicity. Contraindicated in severe liver disease.", tag: "Toxicity" },
    { front: "Why must tropism testing be performed before starting maraviroc?", back: "Maraviroc is a CCR5 antagonist and only works against CCR5-tropic HIV-1. If the virus is CXCR4-tropic or dual-tropic, maraviroc will be ineffective. Tropism is detected by genotypic or phenotypic assays.", tag: "Pharmacology" },
    { front: "How is enfuvirtide administered, and what is its main adverse effect?", back: "Enfuvirtide is a 36-amino-acid synthetic peptide (derived from gp41) given subcutaneously twice daily. The main adverse effect is injection-site reactions (pain, erythema, induration, nodules) — the dose-limiting toxicity for long-term use.", tag: "Pharmacology" },
    { front: "What is lenacapavir and how is it dosed?", back: "A capsid inhibitor — binds the interface between p24 (capsid) subunits to disrupt uncoating, nuclear import, assembly, and release. Oral lead-in followed by subcutaneous injection every 6 MONTHS. For heavily treatment-experienced patients.", tag: "Pharmacology" },
    { front: "What is the preferred regimen for HIV PrEP?", back: "Daily oral TDF/FTC or TAF/FTC; cabotegravir IM every 2 months is also approved. PrEP must be paired with adherence counseling and periodic HIV testing.", tag: "Clinical" },
    { front: "What is the preferred regimen for HIV PEP, and how long is it given?", back: "Tenofovir/emtricitabine PLUS dolutegravir or raltegravir for 28 days, started as soon as possible after exposure (needle stick, sexual assault, etc.). Boosted PI is an alternative.", tag: "Clinical" },
    { front: "What is the preferred antepartum regimen in HIV-positive pregnant patients?", back: "Two NRTIs (typically tenofovir + emtricitabine) plus dolutegravir. Safe across all trimesters based on accumulated data. Goal: maintain viral load below detection throughout pregnancy to prevent vertical transmission.", tag: "Pregnancy" },
    { front: "When is intrapartum IV zidovudine indicated?", back: "When the maternal viral load is detectable or unknown near delivery. Not needed if the patient has been adherent with low/undetectable viral load late in pregnancy.", tag: "Pregnancy" },
    { front: "What is the difference between low-risk and high-risk neonatal ARV prophylaxis?", back: "Low-risk newborn (mother adherent and suppressed, neonate ≥37 weeks): 4 weeks of zidovudine. High-risk newborn (mother poorly suppressed, preterm): 2–6 weeks of presumptive triple therapy (zidovudine + emtricitabine + nevirapine OR zidovudine + emtricitabine + raltegravir).", tag: "Pregnancy" }
  ],
  pearls: [
    { title: "NNRTIs Have a Low Resistance Barrier", content: "One point mutation in the binding pocket confers high-level resistance and broad cross-resistance within the class. Always perform resistance testing before starting an NNRTI — transmitted NNRTI resistance is common." },
    { title: "Rilpivirine Has Strict Criteria", content: "Only use rilpivirine in treatment-naive adults with VL <100,000 and CD4 ≥200. Higher viral loads → virologic failure. Also requires an acid stomach (no PPIs)." },
    { title: "Nevirapine and CD4 Thresholds", content: "Nevirapine hepatotoxicity is severe and potentially fatal. Avoid in women with CD4 >250 or men with CD4 >400. Memorize these thresholds — they are heavily tested." },
    { title: "PIs Block Viral Maturation, Not Viral Entry", content: "Protease inhibitors block gag/gag-pol cleavage and result in immature, non-infectious virions — the virus still buds, but it can't infect new cells. This is mechanistically distinct from NRTIs (chain termination), INSTIs (integration block), and entry inhibitors." },
    { title: "Atazanavir Jaundice Is Cosmetic, Not Hepatic", content: "Atazanavir inhibits UGT1A1, raising unconjugated bilirubin without true liver injury. Counsel the patient — the yellow sclera is alarming but benign. Darunavir rash and transaminitis, on the other hand, can be serious." },
    { title: "Statins + Boosted PIs = Rhabdomyolysis", content: "Boosted PI regimens (ritonavir/cobicistat) inhibit CYP3A4, and simvastatin and lovastatin are CYP3A4 substrates. Co-administration causes statin accumulation and rhabdomyolysis. Use pravastatin or rosuvastatin instead; low-dose atorvastatin is acceptable." },
    { title: "Maraviroc Only Works Against CCR5-Tropic Virus", content: "Always perform tropism testing before initiating maraviroc. If the virus uses CXCR4 or is dual-tropic, maraviroc will fail. Enfuvirtide (gp41 fusion) and ibalizumab (CD4 domain 2) act independently of tropism." },
    { title: "Lenacapavir Lasts Six Months", content: "Subcutaneous lenacapavir is the longest-acting antiretroviral — once every 6 months after an oral lead-in. Reserved for heavily treatment-experienced patients but a potential game-changer for adherence." },
    { title: "Pregnancy Regimen: Two NRTIs + Dolutegravir", content: "Dolutegravir is now considered safe across all trimesters. Historic concerns about neural tube defects with peri-conception exposure have not been borne out in long-term data. Continue oral ART intrapartum; reserve IV zidovudine for cases with detectable or unknown viral load near delivery." },
    { title: "PEP Starts Within Hours, Lasts 28 Days", content: "TDF/FTC plus dolutegravir or raltegravir for 28 days, started as soon as possible after exposure. Add follow-up counseling, baseline and follow-up HIV testing, and a medical evaluation. Time is everything." }
  ]
});
