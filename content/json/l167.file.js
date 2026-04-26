window.receiveLectureContent({
  "metadata": {
    "id": "l167",
    "title": "Microbiology: HIV and Human Retroviruses",
    "lecturer": "C. Abraham, M.D.",
    "session": "Lecture #167",
    "module": "Hematology",
    "readingTime": "25-30 min"
  },
  "resources": {
    "ankingResource": {
      "primarySource": "SketchyMicro",
      "chapter": "Viruses > Retroviridae",
      "alternatives": [
        { "resource": "Physeo", topic: "Microbiology" },
        { "resource": "SketchyPharm", topic: "HIV Antivirals" }
      ]
    },
    "anking": [
      { "match": "HIV structure and life cycle", "resources": "AnKing Step 1 v11: #SketchyMicro::04_Viruses::06_Retroviridae::01_HIV" },
      { "match": "ART medications", "resources": "AnKing Step 1 v11: #SketchyPharm::06_Antimicrobials::04_Antivirals::02_HIV_Antivirals" },
      { "match": "AIDS defining illnesses", "resources": "AnKing Step 1 v11: #FirstAid::Microbiology::Virology::HIV" },
      { "match": "HTLV-1", "resources": "AnKing Step 1 v11: #FirstAid::Microbiology::Virology::HTLV-1" }
    ]
  },
  "summary": `
# Lecture #167: HIV, AIDS, and Human Retroviruses

**Lecturer:** C. Abraham, M.D.

## 1. HIV Structure and Genes
HIV is a diploid (two identical copies), single-stranded, positive-sense, enveloped RNA virus.
*   **env (gp160):** Cleaved into **gp120** (attachment to CD4) and **gp41** (fusion and entry).
*   **gag (p24):** Capsid protein (used in early screening tests).
*   **pol:** Encodes Reverse Transcriptase, Integrase, and Protease.

## 2. The HIV Life Cycle and Drug Targets
1.  **Attachment:** gp120 binds CD4 and co-receptor (**CCR5** on macrophages early; **CXCR4** on T-cells late). *Maraviroc* blocks CCR5.
2.  **Fusion:** gp41 mediates entry. *Enfuvirtide* blocks this.
3.  **Reverse Transcription:** RNA $\rightarrow$ DNA. *NRTIs* (Tenofovir, Zidovudine) and *NNRTIs* (Efavirenz).
4.  **Integration:** Viral DNA into host genome. *Integrase Inhibitors* (-tegravir).
5.  **Cleavage:** Protease cleaves polyproteins into functional units. *Protease Inhibitors* (-navir).

## 3. Clinical Progression
*   **Acute Infection:** Mononucleosis-like symptoms, high viral load, negative antibody test (Window period).
*   **Latent Phase:** Asymptomatic, virus replicates in lymph nodes.
*   **AIDS:** CD4 < 200 or presence of an AIDS-defining illness.
    *   **Defining Illnesses:** PCP, Esophageal Candidiasis, Kaposi Sarcoma, Toxoplasmosis, CMV Retinitis, Cryptococcal meningitis.

## 4. Opportunistic Infections and Prophylaxis
| CD4 Count | Infection | Prophylaxis |
| :--- | :--- | :--- |
| **< 200** | *Pneumocystis jirovecii* (PJP) | **TMP-SMX** |
| **< 100** | *Toxoplasma gondii* | **TMP-SMX** |
| **< 50** | *Mycobacterium avium* complex (MAC) | **Azithromycin** |

## 5. Antiretroviral Therapy (ART) Toxicity
*   **NRTIs:** Lactic acidosis, Peripheral neuropathy. **Zidovudine** causes anemia. **Abacavir** causes hypersensitivity (check **HLA-B*5701**).
*   **NNRTIs:** Rash, CNS symptoms (**Efavirenz** causes vivid dreams/psychosis).
*   **Protease Inhibitors:** Metabolic syndrome (Hyperglycemia, Insulin resistance, **Lipodystrophy**).
*   **Integrase Inhibitors:** Increased Creatine Kinase (CK).

## 6. HTLV-1
Associated with **Adult T-cell Leukemia/Lymphoma (ATLL)** and Tropical Spastic Paraparesis. Look for "Flower cells" (lymphocytes with cloverleaf nuclei) on blood smear.
`,
  "questions": [
    {
      "id": 1,
      "question": "A 24-year-old male presents with fever, sore throat, and generalized lymphadenopathy two weeks after high-risk sexual exposure. An HIV-1/2 antibody/antigen screen is negative. What is the most appropriate next step to diagnose acute HIV infection?",
      "options": [
        "Repeat the antibody screen in 3 months",
        "Perform an HIV viral load (RNA PCR)",
        "Perform a Western Blot",
        "Perform a CD4 count",
        "Reassure the patient it is likely infectious mononucleosis"
      ],
      "correctAnswer": 2,
      "rationale": "During the 'window period' of acute HIV infection, the viral load is extremely high, but the body has not yet produced detectable levels of antibodies. An HIV RNA PCR (viral load) is the most sensitive test during this phase."
    },
    {
      "id": 2,
      "question": "A patient with HIV is started on a new antiretroviral regimen. Two weeks later, he presents with a severe rash, fever, and respiratory symptoms. You suspect a hypersensitivity reaction. Which genetic marker should have been tested before starting this patient's medication?",
      "options": ["HLA-B27", "HLA-B57:01", "HLA-DR4", "CCR5", "CXCR4"],
      "correctAnswer": 2,
      "rationale": "Abacavir (an NRTI) is associated with a severe, potentially fatal hypersensitivity reaction in patients who carry the HLA-B*57:01 allele. Screening for this allele is mandatory before starting abacavir."
    },
    {
      "id": 3,
      "question": "An HIV-positive patient with a CD4 count of 150 cells/mm³ should be started on prophylaxis for which of the following opportunistic infections?",
      "options": [
        "Pneumocystis jirovecii",
        "Toxoplasma gondii",
        "Mycobacterium avium complex",
        "Cytomegalovirus",
        "Cryptococcus neoformans"
      ],
      "correctAnswer": 1,
      "rationale": "Prophylaxis for PJP (with TMP-SMX) is indicated when the CD4 count drops below 200. Prophylaxis for Toxoplasma starts at < 100, and MAC at < 50."
    },
    {
      "id": 4,
      "question": "Which HIV viral protein is responsible for the initial attachment to the host CD4 receptor?",
      "options": ["gp41", "gp120", "p24", "Reverse Transcriptase", "Integrase"],
      "correctAnswer": 2,
      "rationale": "The envelope protein gp160 is cleaved into gp120 and gp41. **gp120** mediates the initial attachment to the CD4 receptor and co-receptors (CCR5/CXCR4). **gp41** mediates the subsequent fusion and entry."
    },
    {
      "id": 5,
      "question": "A patient on HIV therapy complains of a change in his body shape, with increased fat in his neck and abdomen but thinning of his arms and legs. He is also found to have a new-onset fasting glucose of 140 mg/dL. Which class of HIV medications is most likely responsible?",
      "options": [
        "NRTIs",
        "NNRTIs",
        "Protease Inhibitors",
        "Integrase Inhibitors",
        "Fusion Inhibitors"
      ],
      "correctAnswer": 3,
      "rationale": "Protease inhibitors (the '-navirs') are classically associated with metabolic side effects, including lipodystrophy (fat redistribution), hyperglycemia, and hyperlipidemia."
    },
    {
      "id": 6,
      "question": "A patient with HIV presents with a CD4 count of 30. He has persistent fever, night sweats, and weight loss. A biopsy of a lymph node shows acid-fast bacilli that grow poorly at 37°C but well at 42°C. What is the most likely pathogen?",
      "options": [
        "Mycobacterium tuberculosis",
        "Mycobacterium avium complex (MAC)",
        "Pneumocystis jirovecii",
        "Histoplasma capsulatum",
        "CMV"
      ],
      "correctAnswer": 2,
      "rationale": "MAC is a common opportunistic infection when CD4 < 50. It presents with systemic 'B-symptoms' and can be distinguished from TB by its lack of person-to-person transmission and specific growth characteristics."
    },
    {
      "id": 7,
      "question": "Which of the following drugs is an NNRTI that is well-known for causing psychiatric side effects, such as vivid dreams and psychosis?",
      "options": ["Tenofovir", "Zidovudine", "Efavirenz", "Ritonavir", "Dolutegravir"],
      "correctAnswer": 3,
      "rationale": "Efavirenz is a Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI) that commonly causes CNS side effects including dizziness, insomnia, and disturbing vivid dreams."
    },
    {
      "id": 8,
      "question": "A 30-year-old male from Japan presents with skin lesions and a high WBC count. Blood smear shows lymphocytes with cloverleaf-shaped nuclei ('flower cells'). What virus is the most likely cause?",
      "options": ["HIV-1", "HIV-2", "HTLV-1", "EBV", "HHV-8"],
      "correctAnswer": 3,
      "rationale": "HTLV-1 is endemic in Japan and the Caribbean. It causes Adult T-cell Leukemia/Lymphoma (ATLL), characterized by the classic 'flower cells' on peripheral smear."
    },
    {
      "id": 9,
      "question": "In the 'coreceptor switch' that occurs in late-stage HIV, the virus changes its tropism. What is the shift in coreceptor usage?",
      "options": [
        "From CD4 to CD8",
        "From CXCR4 to CCR5",
        "From CCR5 to CXCR4",
        "From p24 to gp120",
        "From RNA to DNA"
      ],
      "correctAnswer": 3,
      "rationale": "Early in infection, HIV is typically 'M-tropic' and uses the **CCR5** co-receptor (found on macrophages). In late-stage disease, the virus can mutate to become 'T-tropic,' using the **CXCR4** co-receptor found on T-cells, which correlates with a more rapid decline in CD4 count."
    },
    {
      "id": 10,
      "question": "Which NRTI was the first HIV drug developed and is still used today to prevent vertical transmission from mother to fetus, but is limited by significant bone marrow suppression?",
      "options": ["Tenofovir", "Emtricitabine", "Zidovudine (AZT)", "Abacavir", "Lamivudine"],
      "correctAnswer": 3,
      "rationale": "Zidovudine (AZT) is the classic NRTI. It is used in pregnancy to reduce transmission to the fetus but is notorious for causing macrocytic anemia and neutropenia due to bone marrow suppression."
    }
  ],
  "flashcards": [
    { "front": "What gene encodes the HIV envelope proteins (gp120/gp41)?", "back": "**env**.", "tag": "Microbiology" },
    { "front": "Which co-receptor is used by HIV early in the disease?", "back": "**CCR5**.", "tag": "Microbiology" },
    { "front": "What is the specific prophylaxis for **Toxoplasma** when CD4 < 100?", "back": "**TMP-SMX**.", "tag": "Pharmacology" },
    { "front": "Which drug is an entry inhibitor that binds to **CCR5**?", "back": "**Maraviroc**.", "tag": "Pharmacology" },
    { "front": "What is the hallmark morphological finding of **HTLV-1** ATLL?", "back": "**Flower cells** (cloverleaf nuclei).", "tag": "Pathology" },
    { "front": "Which genetic allele is associated with Abacavir hypersensitivity?", "back": "**HLA-B*57:01**.", "tag": "Pharmacology" }
  ],
  "pearls": [
    { "title": "The Window Period", "content": "If you suspect acute HIV but the test is negative, order the viral load. The antibodies take weeks; the virus takes days." },
    { "title": "Navir tease", "content": "Protease inhibitors end in **-navir**. Remember: 'Never (navir) tease (protease) a pro (protease).'" },
    { "title": "AZT Anemia", "content": "Zidovudine (AZT) 'zaps' the bone marrow. Expect a high MCV but low Hb." },
    | title: "CCR5 vs CXCR4", content: "CCR5 = Macrophage tropic (Early). CXCR4 = T-cell tropic (Late/Bad)." }
  ]
});
