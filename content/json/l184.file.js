window.receiveLectureContent({
  id: "l184",
  module: "Pharmacology",
  metadata: {
    title: "Lecture #184: Pharmacology of Antiretroviral Drugs — Part 1 (NRTIs and INSTIs)",
    lecturer: "L. Goldstein, Pharm.D. (Session 184)",
    readingTime: "12-15 min",
    difficulty: "Advanced",
    tags: ["Pharmacology", "HIV", "Antiretrovirals", "NRTI", "INSTI", "Tenofovir", "Abacavir", "Dolutegravir", "Bictegravir", "Cabotegravir"]
  },
  resources: {
    ankingResource: {
      primarySource: "BandB",
      chapter: "Pharmacology > Antiretroviral Therapy",
      alternatives: [
        { resource: "SketchyPharm", chapter: "Antimicrobials > Antivirals > HIV Drugs" },
        { resource: "FirstAid", chapter: "Microbiology > Antimicrobials > Antivirals (HIV)" },
        { resource: "Pixorize", chapter: "Pharmacology > Antiretrovirals" }
      ]
    },
    anking: [
      { match: "HIV replication cycle and drug targets (fusion, RT, integrase, protease, capsid)", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::Antimicrobials::HIV_Lifecycle" },
      { match: "Nucleoside reverse transcriptase inhibitors — chain termination via missing 3' OH", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::NRTI_MOA" },
      { match: "Tenofovir DF vs TAF — pharmacology, kidney and bone toxicity profile", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Tenofovir" },
      { match: "Abacavir — HLA-B*5701 hypersensitivity screening", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Abacavir" },
      { match: "Lamivudine / emtricitabine — cytidine analogs, HBV co-treatment, M184V resistance", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Lamivudine_Emtricitabine" },
      { match: "Zidovudine (AZT) — perinatal vertical transmission prevention; bone marrow suppression", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Zidovudine" },
      { match: "NRTI mitochondrial toxicity (DNA polymerase γ inhibition) — lactic acidosis, hepatic steatosis, lipoatrophy, neuropathy", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::NRTI_Mitochondrial_Toxicity" },
      { match: "M184V resistance — high level to 3TC/FTC; restores tenofovir/AZT susceptibility", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::HIV_Resistance_Mutations" },
      { match: "Integrase strand transfer inhibitors (INSTIs) — block viral DNA integration into host chromosome", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::INSTIs" },
      { match: "Dolutegravir and bictegravir — high resistance barrier, first-line backbone", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Dolutegravir_Bictegravir" },
      { match: "Cabotegravir + rilpivirine — long-acting IM injection for selected stable patients", resources: "AnKing Step 1 v12: #SketchyPharm::Antimicrobials::Cabotegravir" },
      { match: "Immune reconstitution inflammatory syndrome (IRIS) on starting ART", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::IRIS" },
      { match: "HBV-HIV co-infection — withdrawal of tenofovir / lamivudine / emtricitabine causes flare", resources: "AnKing Step 1 v12: #FirstAid::Microbiology::HBV_HIV_Coinfection" }
    ]
  },
  summary: `
# Story Mode: How Modern HIV Therapy Stops the Virus at Three Different Doors

HIV-1 is a small, error-prone retrovirus that uses **gp120** to grab the host CD4 receptor, **gp41** to fuse with the cell membrane, and then unleashes **reverse transcriptase** to copy its RNA into DNA, **integrase** to splice that DNA into the host chromosome, and **protease** to cleave its polyprotein into functional pieces during budding. Each step is a drug target, and modern combination antiretroviral therapy (ART) targets at least **two non-overlapping steps simultaneously** because the virus's high mutation rate generates resistance within days to any single drug.

The lecturer's core message: the **standard initial regimen is two NRTIs ("the backbone") plus a third agent**, where the third agent is now almost always an **integrase strand transfer inhibitor (INSTI)** — typically **dolutegravir or bictegravir**. The reason is that INSTIs are well-tolerated, highly potent, and carry a **high genetic barrier to resistance**. Two NRTIs anchor the regimen by attacking reverse transcriptase from a different mechanism (chain-terminating nucleoside analogs).

Two themes run through Part 1: **the M184V mutation** (a single amino-acid change that confers high-level resistance to lamivudine/emtricitabine but **resensitizes** the virus to tenofovir and zidovudine — a paradox you must know), and **mitochondrial toxicity** (NRTI inhibition of host DNA polymerase γ causing lactic acidosis, hepatic steatosis, lipoatrophy, myopathy, and neuropathy — a class effect that is mostly historical with second-generation drugs but still tested heavily on boards). Layered on top are drug-specific landmines: **abacavir hypersensitivity in HLA-B*5701 carriers** (always screen), **tenofovir nephrotoxicity and bone loss**, and **HBV flares when tenofovir/lamivudine/emtricitabine are withdrawn from a co-infected patient.**

---

## 1. Why Antiretroviral Therapy Looks the Way It Does (Slides 2–10)

- **Care has shifted from ID specialists to primary care.** The CDC and DHHS recommend that PCPs be trained in HIV management because patients are now living to older ages on stable regimens.
- **HIV virion anatomy** (Slide 6):
  - **gp120** — the outer fluffy spike that docks on **CD4**.
  - **gp41** — the transmembrane stalk that drives fusion after gp120 engages CD4 and a co-receptor (CCR5 or CXCR4).
  - **Capsid** containing two RNA strands and two reverse transcriptase enzymes.
- **Replication cycle drug targets** (Slide 8):
  - **Fusion inhibitors** (enfuvirtide)
  - **Capsid inhibitors** (lenacapavir — recent)
  - **NRTIs and NNRTIs** — reverse transcriptase
  - **INSTIs** — viral DNA integration
  - **Protease inhibitors** — polyprotein cleavage
- **Fixed-dose combinations** (often one pill once daily) are the standard for adherence — the single biggest predictor of long-term success.
- **Viral resistance**:
  - HIV reverse transcriptase is **error-prone** with no proofreading function.
  - **Virologic failure** = inability to suppress to **<200 copies/mL**.
  - **Transmitted resistance** — most untreated patients harbor virus with at least one single–amino acid mutation that confers some resistance.
- **Goals of therapy**:
  - **Maximally and durably suppress plasma HIV RNA**
  - **Restore and preserve CD4 count** (target: gain of 50–150 cells/µL in year 1)
  - Reduce morbidity/mortality, extend lifespan, **prevent transmission**
- **Standard regimen**: 3–4 antiretrovirals for life. **Two NRTIs + an INSTI** is preferred; alternatives use an NNRTI or boosted protease inhibitor as the third agent.
- **Outcome target**: undetectable viral load within 24 weeks of starting treatment.

[Lecturer Emphasis] "Treatment failure is usually a result of **non-adherence**" — not pharmacology. Choosing a once-daily fixed-dose combination is itself a clinical intervention.

---

## 2. Class Adverse Effect: Immune Reconstitution Inflammatory Syndrome (IRIS) (Slide 11)

:::correlate
Immune Reconstitution Inflammatory Syndrome (IRIS)

- **Pathophysiology:** A patient with AIDS and a very low CD4 count starts effective ART. As viral load drops, CD4 rebounds, and the reconstituted immune system suddenly recognizes **subclinical opportunistic infections** (TB, cryptococcus, CMV, MAC) or malignancies it had been ignoring. The result is a paradoxical inflammatory worsening — fevers, lymphadenopathy, worsening of the underlying infection — even as virologic control improves.
- **Presentation:** Fevers, lymphadenopathy, worsening of an opportunistic infection (e.g., new MAC adenitis), or unmasking of a previously unrecognized infection — typically within the first weeks to months of ART.
- **Diagnosis:** Clinical — viral load is falling, CD4 is rising, but symptoms paradoxically worsen.
- **Treatment:** Continue ART. Treat the underlying opportunistic infection. Steroids for severe inflammatory manifestations.
- **Risk Factors:** Very low baseline CD4 (<100), rapid viral load suppression, untreated opportunistic infections.
- **Complications:** Severe inflammation can cause organ damage; CNS IRIS (cryptococcus, PML) can be fatal.
- **Lecturer's Point:** [Lecturer Emphasis] IRIS is a **class effect of ART** — it isn't caused by a specific drug, but by restoring immunity.
:::

---

## 3. Nucleoside / Nucleotide Reverse Transcriptase Inhibitors (NRTIs) (Slides 13–25)

### Mechanism

- **NRTIs are prodrugs** — they require **intracellular phosphorylation by host kinases** to the active triphosphate form.
- The triphosphate is incorporated into nascent proviral DNA by reverse transcriptase but **lacks the 3' hydroxyl** group needed to add the next nucleotide → **chain termination**.
- They are also competitive inhibitors of native nucleotide incorporation.
- **Tenofovir is special**: it's already a nucleo**tide** (has one phosphate), so host kinases add only two more phosphates to reach the active diphosphate (which actually carries three phosphates).

### The Five NRTIs in Current Use

| Drug | Base Class | Half-life (intracellular) | Key Use |
| :--- | :--- | :--- | :--- |
| **Tenofovir DF / TAF (TDF, TAF)** | Adenosine (nucleotide) | 10-50 h | Backbone for HIV-1; also treats **HBV**; PrEP/PEP |
| **Lamivudine (3TC)** | Cytidine | 10-15 h | Backbone partner; also HBV (mostly resistant) |
| **Emtricitabine (FTC)** | Cytidine (fluorinated 3TC) | Long | Backbone partner; suppresses HBV (not FDA-approved for it) |
| **Abacavir (ABC)** | Guanosine | 12-26 h | Backbone partner with 3TC; requires HLA-B*5701 screen |
| **Zidovudine (AZT)** | Thymidine | 7 h | **Vertical-transmission prevention in pregnancy / neonates** |

### NRTI Resistance — The M184V Paradox (Slide 18)

- **M184V or M184I** (methionine → valine or isoleucine at codon 184): single mutation confers **high-level resistance to 3TC and FTC**.
- **Paradox:** M184V actually **restores susceptibility to tenofovir and zidovudine**, so it can be left in the regimen as a "resistance trap."
- **K65R**: cross-resistance across multiple NRTIs after prolonged therapy — clinically important.

### NRTI Mitochondrial Toxicity (Slides 19–20)

- NRTIs inhibit reverse transcriptase but also inhibit **host DNA polymerase γ** in the mitochondria.
- **Manifestations**:
  - **Myopathy**
  - **Peripheral neuropathy**
  - **Lipoatrophy** (loss of subcutaneous fat — face, limbs, buttocks)
  - **Lactic acidosis with hepatic steatosis** — potentially fatal
  - Pancreatitis, bone marrow suppression, cardiomyopathy
- Mitochondrial toxicity is mostly a **first-generation NRTI** problem (zalcitabine, didanosine, stavudine, and to a lesser extent zidovudine). Second-generation drugs (tenofovir, lamivudine, emtricitabine, abacavir) have **low potential** for it.
- **Action when suspected**: stop the drug and evaluate.

:::correlate
Lactic Acidosis with Hepatic Steatosis (NRTI Mitochondrial Toxicity)

- **Pathophysiology:** Inhibition of mitochondrial DNA polymerase γ depletes mitochondrial DNA in hepatocytes and other tissues → impaired oxidative phosphorylation → anaerobic metabolism → lactate accumulation; hepatic mitochondrial failure causes fatty infiltration.
- **Presentation:** Nausea, vomiting, abdominal pain, fatigue, dyspnea (Kussmaul breathing) — gradual onset over weeks. Hepatomegaly. Severe anion-gap metabolic acidosis with elevated lactate; transaminitis; hepatic steatosis on imaging.
- **Diagnosis:** Clinical + elevated serum lactate + elevated AST/ALT + hepatic steatosis on imaging or biopsy.
- **Treatment:** **Discontinue NRTI immediately**. Supportive care; lactate clearance; consider riboflavin, thiamine, L-carnitine. Mortality is high once full syndrome develops.
- **Risk Factors:** Female sex, obesity, pregnancy, first-generation NRTIs (especially stavudine, didanosine).
- **Complications:** Hepatic failure, death.
- **Lecturer's Point:** [Lecturer Emphasis] This is the most serious NRTI adverse effect and the reason first-generation drugs were largely retired.
:::

### Drug-Specific Toxicities

- **Tenofovir** (especially TDF): **kidney and bone toxicity**.
  - **Renal**: rising creatinine, proteinuria, glycosuria, hypophosphatemia, **proximal tubular dysfunction → Fanconi syndrome**, acute tubular necrosis, nephrogenic DI. **Monitor renal function on every patient.**
  - **Bone**: decreased mineral density.
  - **TAF** (tenofovir alafenamide) is dosed lower, achieves **lower plasma but higher intracellular** active drug concentration, and has **less renal/bone toxicity** than TDF.
- **Abacavir — the HLA-B*5701 rule** [Lecturer Emphasis]:
  - **Always screen for HLA-B*5701** before initiating abacavir.
  - In carriers, abacavir causes a **severe, potentially fatal multi-organ hypersensitivity reaction**.
  - Once a hypersensitivity reaction occurs, **never restart** abacavir.
  - Don't combine **tenofovir + abacavir** — high rate of virologic failure.
  - Alcohol can raise abacavir levels (competition for alcohol dehydrogenase).
- **Emtricitabine** can cause **palmoplantar hyperpigmentation**.
- **Zidovudine**: bone marrow suppression (anemia, neutropenia). Used **IV perinatally** to prevent vertical transmission and **orally in neonates**.

:::correlate
Abacavir Hypersensitivity Syndrome

- **Pathophysiology:** A drug-allele interaction in which abacavir binds the HLA-B*5701 class I MHC molecule, displacing the normal peptide repertoire and creating a "neo-self-antigen" recognized by cytotoxic T cells.
- **Presentation:** Fever, rash, GI symptoms, malaise, dyspnea, hypotension — typically within 6 weeks of initiation. Can mimic sepsis. **Multi-organ involvement** distinguishes it from a routine drug rash.
- **Diagnosis:** Clinical + history of recent abacavir initiation. **Pre-treatment HLA-B*5701 genotyping** identifies at-risk patients.
- **Treatment:** **Stop abacavir immediately and permanently.** Rechallenge can be **fatal**. Supportive care.
- **Risk Factors:** HLA-B*5701 carriage (≈5–8% of Caucasians, lower in other populations).
- **Complications:** Death on rechallenge.
- **Lecturer's Point:** Always screen for HLA-B*5701 before starting abacavir. This is one of the cleanest examples of pharmacogenomics in clinical practice.
:::

### HBV Co-infection Booby-Trap (Slides 23, 25)

- **TDF, TAF, lamivudine, and emtricitabine all suppress hepatitis B.**
- In a patient co-infected with HIV and HBV who is taking one of these drugs, **withdrawal of the drug can cause a severe HBV flare** — fulminant hepatitis from rebound viral replication.
- Always check HBV status before starting or switching ART, and never abruptly discontinue an anti-HBV-active NRTI in a co-infected patient without bridging to another HBV-active agent.

### Drug Interactions

- **Tenofovir DDIs**: P-glycoprotein **inhibitors** (ritonavir, cobicistat) **raise** levels → toxicity. P-glycoprotein **inducers** (rifampin, carbamazepine, phenytoin, phenobarbital) **lower** levels → loss of efficacy and are **contraindicated with TAF**.
- **Don't combine 3TC + FTC** — they're the same drug; they compete for phosphorylation.
- **Don't combine tenofovir + abacavir** — high virologic failure rate.

---

## 4. Integrase Strand Transfer Inhibitors (INSTIs) (Slides 26–34)

### Mechanism

- **Block the catalytic activity of HIV integrase**, preventing insertion of proviral DNA into the host chromosome.
- **Humans don't have integrase** → INSTIs are completely selective for the virus and very well tolerated.

### The Five Clinical INSTIs

| Drug | Generation | Dosing | Notes |
| :--- | :--- | :--- | :--- |
| **Dolutegravir (DTG)** | 2nd | Daily | **First-line.** High resistance barrier. |
| **Bictegravir (BIC)** | 2nd | Daily | **First-line.** Available only in fixed-dose combo (Biktarvy). |
| **Elvitegravir (EVG/c)** | 1st | Daily | Must be boosted with **cobicistat** (CYP3A4 inhibitor). Lower resistance barrier. |
| **Raltegravir (RAL)** | 1st | BID (or QD at higher dose) | Lower resistance barrier; not in fixed-dose combos. |
| **Cabotegravir (CAB)** | 2nd | Monthly or every-2-months IM | Long-acting injectable; paired with rilpivirine. |

### Why INSTIs Are First-Line

- **Well-tolerated**: weight gain, nausea, diarrhea, headache, insomnia are common but mild. Depression/suicidality are rare and limited to patients with prior psychiatric history.
- **Highly effective** against HIV-1 and HIV-2.
- **High barrier to resistance** for dolutegravir and bictegravir (the second-generation drugs).
- **Available in once-daily fixed-dose combinations** with the NRTI backbone → adherence-friendly.

### Drug Interactions

- **Bictegravir, dolutegravir, elvitegravir** are **CYP3A4 substrates** (elvitegravir requires boosting).
- **Raltegravir** is metabolized by **UGT1A1** glucuronidation — **no CYP**, so no CYP-based DDIs.
- **Bictegravir** is also a **P-gp and UGT1A1 substrate**.
- **Polyvalent cations** (antacids, calcium, iron, magnesium) reduce oral absorption of INSTIs — **separate dosing by at least 2 hours**.

### Cabotegravir + Rilpivirine — Long-Acting Injectable ART (Slide 31–33)

- The first **complete two-drug regimen** that does not contain an NRTI.
- Administered as **gluteal IM injection every 4 or every 8 weeks** after a 1-month oral lead-in.
- **Strict eligibility** [Lecturer Emphasis]:
  - Already virologically suppressed on standard 3-drug ART
  - **No baseline resistance** to either agent
  - **No prior virologic failure**
  - **No active HBV** (unless on a separate HBV drug)
  - **Not pregnant or planning pregnancy**
  - No drugs with significant interactions
- May **not be an option** for patients with buttocks implants or fillers (only gluteal injection site).
- Oral cabotegravir/rilpivirine can be used as **bridging therapy** if a scheduled injection will be missed.
- **Cabotegravir alone** (without rilpivirine) is also approved for **pre-exposure prophylaxis (PrEP)** in HIV-negative individuals, dosed every 2 months IM.

---

## 5. Putting Part 1 Together — Building the First-Line Regimen

1. **Pick two NRTIs** (the backbone): **tenofovir (TDF or TAF) + emtricitabine** is the most common pairing. **Abacavir + lamivudine** is the alternative (requires HLA-B*5701 screen).
2. **Pick a third agent**: an **INSTI** (dolutegravir or bictegravir).
3. **Single-pill combinations** like Biktarvy (BIC/FTC/TAF) or Triumeq (DTG/ABC/3TC) deliver the full regimen as one tablet once a day.
4. **Before starting**:
   - **HLA-B*5701** if abacavir is on the menu.
   - **HBV serology** — to anticipate HBV implications and pick tenofovir if co-infected.
   - **Baseline resistance testing** (genotype).
   - **Renal function, bone health** if tenofovir.
5. **Monitor**: viral load (target undetectable at 24 weeks), CD4 trend, renal function, lipids, weight, mental health.

[Lecturer Emphasis] The combination of two NRTIs plus dolutegravir or bictegravir is the modern default. Memorize the M184V paradox, the abacavir HLA screen, the tenofovir kidney/bone profile, the IRIS class effect, and the HBV-flare booby-trap.
`,
  questions: [
    {
      question: "A 32-year-old man is being started on antiretroviral therapy for newly diagnosed HIV. His provider considers a regimen of abacavir, lamivudine, and dolutegravir. Which of the following pre-treatment tests is most important to perform before initiating this regimen?",
      options: [
        "G6PD activity",
        "HLA-B*5701 genotype",
        "Serum tenofovir trough",
        "Cytochrome P450 2D6 activity",
        "Coombs test"
      ],
      correctAnswer: 1,
      rationale: "Abacavir causes a severe, potentially fatal multi-organ hypersensitivity reaction in patients carrying HLA-B*5701 (≈5–8% of Caucasians). HLA-B*5701 genotyping must be performed before initiating abacavir; positive patients should never receive the drug. This is one of the strongest pharmacogenomic-screening recommendations in clinical practice. G6PD is relevant for primaquine and dapsone; CYP2D6 for codeine/tramadol; Coombs and tenofovir trough are not relevant pre-treatment tests."
    },
    {
      question: "A 45-year-old woman has been adherent to her HIV regimen of tenofovir, emtricitabine, and dolutegravir for two years. She is also chronically infected with hepatitis B (HBeAg-positive, normal LFTs, low HBV DNA on therapy). She moves abroad, runs out of her HIV medications, and stops therapy abruptly. Two weeks later she develops jaundice, RUQ pain, and AST/ALT in the thousands. Which of the following best explains her presentation?",
      options: [
        "Acute hepatitis A from contaminated water",
        "Drug-induced hepatitis from antimalarial prophylaxis",
        "Hepatitis B reactivation flare due to withdrawal of HBV-active antiretrovirals (tenofovir/emtricitabine)",
        "Autoimmune hepatitis precipitated by stress",
        "Lactic acidosis with hepatic steatosis from NRTI mitochondrial toxicity"
      ],
      correctAnswer: 2,
      rationale: "Tenofovir, emtricitabine, and lamivudine all suppress HBV. Abrupt withdrawal of these agents in a co-infected patient releases HBV from suppression and causes a fulminant reactivation flare — fevers, jaundice, transaminitis in the thousands. This is why HBV serology is always checked before changing ART in a co-infected patient and why anti-HBV–active drugs should never be stopped without bridging to another HBV agent. Mitochondrial toxicity develops gradually with current drug exposure, not after withdrawal."
    },
    {
      question: "Which of the following best explains why NRTIs cause mitochondrial toxicity?",
      options: [
        "Direct inhibition of cytochrome P450 enzymes in the liver",
        "Inhibition of mitochondrial DNA polymerase γ (the only host polymerase NRTIs inhibit)",
        "Cross-reactive antibodies against mitochondrial membrane proteins",
        "Competitive inhibition of carnitine palmitoyltransferase",
        "Triggering of intrinsic apoptosis through caspase-9 activation"
      ],
      correctAnswer: 1,
      rationale: "NRTI triphosphates terminate HIV reverse transcriptase, but they also inhibit host DNA polymerase γ — the polymerase responsible for replicating mitochondrial DNA. Depletion of mitochondrial DNA impairs oxidative phosphorylation, causing lactic acidosis, hepatic steatosis, lipoatrophy, peripheral neuropathy, and myopathy. Other host polymerases (α, β, δ, ε) are not inhibited. This is largely a first-generation NRTI problem; second-generation drugs (tenofovir, lamivudine, emtricitabine, abacavir) have a low potential for it."
    },
    {
      question: "A patient on a regimen of two NRTIs plus dolutegravir undergoes routine resistance genotyping and is found to have an M184V mutation in reverse transcriptase. Which of the following is the expected effect of this mutation?",
      options: [
        "High-level resistance to lamivudine and emtricitabine with restored susceptibility to tenofovir and zidovudine",
        "High-level resistance to all NRTIs simultaneously",
        "High-level resistance to integrase inhibitors",
        "Reduced susceptibility to non-nucleoside reverse transcriptase inhibitors only",
        "No clinically meaningful effect on susceptibility"
      ],
      correctAnswer: 0,
      rationale: "The M184V (or M184I) mutation — methionine to valine or isoleucine at codon 184 of reverse transcriptase — confers high-level resistance to lamivudine (3TC) and emtricitabine (FTC), but paradoxically restores susceptibility to tenofovir and zidovudine. This is why M184V can be left in the regimen as a 'resistance trap' — it traps the virus into a state that is more sensitive to the other NRTIs. The K65R mutation confers broader cross-resistance to multiple NRTIs but does not affect integrase inhibitors."
    },
    {
      question: "A 38-year-old man on stable ART (Biktarvy: bictegravir/emtricitabine/tenofovir alafenamide) for three years has an undetectable viral load and CD4 of 720. He works internationally and asks whether he can switch to long-acting injectable therapy. Which of the following is the most appropriate response regarding cabotegravir + rilpivirine?",
      options: [
        "He must first have a documented virologic failure on his current regimen",
        "He should switch only if he has active hepatitis B co-infection",
        "He is potentially a candidate, provided he has no baseline resistance to either drug, no prior virologic failures, no active HBV, no pregnancy plans, and no significant drug interactions — and he understands the injections are gluteal IM every 4 or 8 weeks",
        "Long-acting cabotegravir/rilpivirine is contraindicated in any patient on a stable INSTI-containing regimen",
        "He should receive cabotegravir monotherapy with no oral lead-in"
      ],
      correctAnswer: 2,
      rationale: "Cabotegravir + rilpivirine is the first complete two-drug regimen approved for HIV maintenance. It is administered as gluteal IM injection every 4 or 8 weeks after a 1-month oral lead-in. Strict eligibility requires no baseline resistance to either drug, no prior virologic failure, no active HBV (unless on a separate HBV drug), no pregnancy plans, and no significant drug interactions — exactly because losing one drug's activity functionally collapses the regimen to monotherapy. Virologic failure on current therapy is a contraindication, not a prerequisite. Cabotegravir alone is also used for PrEP."
    }
  ],
  flashcards: [
    { front: "What is the first-line initial ART regimen for HIV?", back: "Two NRTIs (typically tenofovir + emtricitabine, or abacavir + lamivudine) plus an INSTI (dolutegravir or bictegravir).", tag: "Regimen" },
    { front: "How do NRTIs work?", back: "They are prodrugs phosphorylated intracellularly to the active triphosphate, which is incorporated into proviral DNA by HIV reverse transcriptase. They lack the 3' OH group, so the DNA chain terminates. They also competitively inhibit incorporation of the native nucleotide.", tag: "Mechanism" },
    { front: "What is special about tenofovir's chemistry?", back: "Tenofovir is a nucleotide (already has one phosphate), so host kinases add only two more phosphates to reach the active form (which carries three phosphates in total).", tag: "Pharmacology" },
    { front: "What is the M184V mutation and why is it clinically paradoxical?", back: "M184V (or M184I) in reverse transcriptase confers high-level resistance to lamivudine and emtricitabine BUT restores susceptibility to tenofovir and zidovudine — it can be left in the regimen as a 'resistance trap.'", tag: "Resistance" },
    { front: "Why must HLA-B*5701 be screened before starting abacavir?", back: "HLA-B*5701 carriers develop a severe, potentially fatal multi-organ hypersensitivity reaction to abacavir. Rechallenge after a reaction can be fatal — never restart abacavir in someone who has had hypersensitivity.", tag: "Pharmacogenomics" },
    { front: "What are the main toxicities of tenofovir DF (TDF)?", back: "Kidney injury (proximal tubular dysfunction, Fanconi syndrome, acute or chronic kidney disease, nephrogenic DI) and decreased bone mineral density. Tenofovir alafenamide (TAF) has less renal and bone toxicity.", tag: "Toxicity" },
    { front: "How does TAF differ pharmacokinetically from TDF?", back: "TAF is administered at lower doses and produces lower plasma but higher intracellular active drug concentrations because TAF (unlike TDF) is taken into cells before being metabolized to tenofovir. This gives equal efficacy with less renal and bone toxicity.", tag: "Pharmacology" },
    { front: "Which NRTI is used to prevent vertical transmission of HIV?", back: "Zidovudine (AZT) — given IV perinatally and orally to neonates. This is its main remaining indication; otherwise it has been largely replaced by second-generation NRTIs.", tag: "Pharmacology" },
    { front: "What is the molecular mechanism of NRTI mitochondrial toxicity?", back: "NRTIs inhibit host DNA polymerase γ (the only host polymerase they affect), which replicates mitochondrial DNA. Mitochondrial DNA depletion → impaired oxidative phosphorylation → lactic acidosis, hepatic steatosis, lipoatrophy, myopathy, peripheral neuropathy.", tag: "Toxicity" },
    { front: "Which NRTIs are HBV-active, and why does this matter?", back: "Tenofovir (TDF and TAF), lamivudine (3TC), and emtricitabine (FTC) all suppress HBV. In an HIV/HBV co-infected patient, withdrawing these drugs can precipitate a fulminant HBV reactivation flare — always check HBV status before starting or changing ART.", tag: "Clinical" },
    { front: "How do INSTIs work?", back: "They block the catalytic activity of HIV integrase, preventing the strand-transfer step that inserts proviral DNA into the host chromosome. Humans don't have integrase, so INSTIs are completely selective for HIV.", tag: "Mechanism" },
    { front: "Which two INSTIs are first-line, and why?", back: "Dolutegravir (DTG) and bictegravir (BIC) — second-generation INSTIs with a high genetic barrier to resistance, once-daily dosing, and availability in fixed-dose combinations.", tag: "Pharmacology" },
    { front: "Which INSTI is not metabolized by CYP enzymes?", back: "Raltegravir — metabolized by UGT1A1 (glucuronidation). This means no CYP-based drug interactions but susceptibility to UGT1A1 inducers/inhibitors.", tag: "Pharmacology" },
    { front: "Why must INSTIs be separated from antacids?", back: "Polyvalent cations (calcium, magnesium, iron in antacids and supplements) chelate INSTIs and reduce their oral absorption. Separate dosing by at least 2 hours.", tag: "Pharmacology" },
    { front: "What is cabotegravir + rilpivirine, and how is it dosed?", back: "The first complete two-drug ART regimen — long-acting IM injection given gluteally every 4 or every 8 weeks after a 1-month oral lead-in. Used as MAINTENANCE in already-suppressed patients without baseline resistance, prior virologic failure, active HBV, or pregnancy plans.", tag: "Pharmacology" },
    { front: "What is IRIS, and when does it occur?", back: "Immune Reconstitution Inflammatory Syndrome — paradoxical inflammatory worsening (fevers, lymphadenopathy, worsening of opportunistic infection) that develops in the weeks-to-months after starting effective ART because the reconstituted immune system attacks subclinical opportunistic infections or malignancies. Continue ART; treat the underlying infection; steroids if severe.", tag: "Clinical" }
  ],
  pearls: [
    { title: "Two NRTIs Plus an INSTI", content: "The modern first-line ART regimen is two NRTIs (typically tenofovir/emtricitabine) plus an integrase strand-transfer inhibitor (dolutegravir or bictegravir). One pill once daily — adherence is the single best predictor of durable success." },
    { title: "Always Screen for HLA-B*5701 Before Abacavir", content: "Abacavir hypersensitivity is a fatal, multi-organ reaction in HLA-B*5701 carriers. Never start the drug without testing, and never rechallenge after a reaction. This is one of the cleanest pharmacogenomic indications in medicine." },
    { title: "M184V — The Useful Mutation", content: "M184V confers high-level resistance to lamivudine and emtricitabine but resensitizes the virus to tenofovir and zidovudine. The mutation can intentionally be left in the regimen as a 'resistance trap' that keeps the other NRTIs effective." },
    { title: "Watch the Kidneys and Bones on Tenofovir", content: "Tenofovir DF causes proximal tubular dysfunction (Fanconi syndrome), acute kidney injury, and decreased bone mineral density. Monitor creatinine, urine protein, and phosphate. TAF has a milder kidney and bone profile and is preferred when renal function or bone health is a concern." },
    { title: "Don't Pull Tenofovir/3TC/FTC From an HBV Co-infected Patient", content: "These drugs are dual-active against HIV and HBV. Stopping them abruptly in a co-infected patient causes a fulminant HBV flare — bridge to another HBV-active agent before any change." },
    { title: "Mitochondrial Toxicity Is the NRTI Class Curse", content: "NRTI inhibition of host DNA polymerase γ depletes mitochondrial DNA → lactic acidosis, hepatic steatosis, lipoatrophy, myopathy, neuropathy. Mostly a first-generation problem (stavudine, didanosine, zidovudine), but always on board exams." },
    { title: "Cabotegravir + Rilpivirine Is Maintenance, Not Initiation", content: "Long-acting IM cabotegravir + rilpivirine is for stable, virologically suppressed patients with no resistance, no prior failures, no active HBV, no pregnancy plans. It is not for initial therapy and not for patients with adherence problems on oral regimens." },
    { title: "IRIS Is a Sign Things Are Working", content: "Paradoxical worsening after starting ART — fevers, lymph nodes, an opportunistic infection getting louder — is immune reconstitution. Don't stop ART; treat the underlying infection and consider steroids for severe inflammation." }
  ]
});
