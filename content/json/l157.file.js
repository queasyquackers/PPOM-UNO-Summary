window.receiveLectureContent({
  "metadata": {
    "id": "l157",
    "title": "Pharmacology of Antineoplastic Agents 2",
    "lecturer": "L. Goldstein, Pharm.D.",
    "session": "Lecture #157",
    "module": "Pharmacology",
    "readingTime": "25-30 min"
  },
  "resources": {
    "ankingResource": {
      "primarySource": "Sketchy Pharm",
      "chapter": "Hematology & Oncology > Targeted Therapy",
      "alternatives": [
        { "resource": "Boards and Beyond", "chapter": "Hematology > Pharmacology > Targeted Therapies" },
        { "resource": "First Aid", "chapter": "Hematology/Oncology > Pharmacology" }
      ]
    },
    "anking": [
      { "match": "Imatinib (BCR-ABL)", "resources": "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { "match": "Trastuzumab (HER2)", "resources": "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { "match": "Bevacizumab (VEGF)", "resources": "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { "match": "Checkpoint Inhibitors", "resources": "AnKing Step 1 v11: #FirstAid::Hematology_Oncology::Pharmacology::Immune_Checkpoint_Inhibitors" }
    ]
  },
  "summary": `
# Lecture #157: Pharmacology of Antineoplastic Agents 2

**Lecturer:** L. Goldstein, Pharm.D.

## 1. Small Molecule Tyrosine Kinase Inhibitors (TKIs)
Intracellular inhibitors that usually block the ATP-binding site of a kinase. Suffix: **-tinib**.
*   **Imatinib:** Blocks **BCR-ABL** (CML) and **c-kit** (GIST).
*   **Erlotinib / Gefitinib:** Blocks **EGFR** (Epidermal Growth Factor Receptor). Used in Non-Small Cell Lung Cancer (NSCLC). Side effect: Acneiform rash.
*   **Vemurafenib:** Blocks **BRAF V600E** kinase. Used in metastatic melanoma.
*   **Sunitinib / Sorafenib:** Multi-kinase inhibitors (including VEGF receptor). Used in Renal Cell Carcinoma (RCC).

## 2. Monoclonal Antibodies (mAbs)
Extracellular inhibitors targeting receptors or ligands. Suffix: **-mab**.
*   **Trastuzumab (Herceptin):** Targets **HER2/neu** (ErbB2). Used in HER2+ breast cancer and gastric cancer.
    *   **Toxicity:** **Cardiotoxicity**. Unlike Doxorubicin, this is usually **reversible** and not dose-dependent, but still requires monitoring of LVEF.
*   **Rituximab:** Targets **CD20** on B-cells. Used in Non-Hodgkin Lymphoma, CLL, and RA.
    *   **Toxicity:** Infusion reaction. Risk of **PML** (Progressive Multifocal Leukoencephalopathy) due to JC virus reactivation.
*   **Cetuximab:** Targets **EGFR**. Used in colorectal cancer and head/neck cancer.
*   **Bevacizumab:** Binds circulating **VEGF**. Inhibits angiogenesis.
    *   **Toxicity:** Hemorrhage, blood clots, and **impaired wound healing**.

## 3. Immune Checkpoint Inhibitors
Releasing the "brakes" of the immune system to allow T-cells to attack tumor cells.
*   **PD-1 Inhibitors (Nivolumab, Pembrolizumab):** Blocks the PD-1 receptor on T-cells.
*   **CTLA-4 Inhibitor (Ipilimumab):** Blocks CTLA-4 on T-cells.
*   **Toxicity:** **Immune-Related Adverse Events (irAEs)**. Can cause "autoimmune" inflammation in any organ (colitis, pneumonitis, hepatitis, endocrinopathy). Managed with **high-dose corticosteroids**.

## 4. Other Targeted Agents
*   **Bortezomib / Carfilzomib:** **Proteasome inhibitors**. Induce apoptosis by causing a buildup of misfolded proteins. Used in **Multiple Myeloma**.
*   **Tamoxifen / Raloxifene:** **SERMs** (Selective Estrogen Receptor Modulators). Tamoxifen is an antagonist in the breast but an **agonist in the bone and uterus** (risk of endometrial cancer).
*   **Anastrozole / Letrozole:** **Aromatase inhibitors**. Prevent peripheral conversion of androgens to estrogen. Used in postmenopausal breast cancer.
`,
  "questions": [
    {
      "id": 1,
      "question": "A 55-year-old male with metastatic melanoma is found to have a V600E mutation in the BRAF gene. Which of the following drugs is specifically designed to target this mutation?",
      "options": ["Imatinib", "Vemurafenib", "Erlotinib", "Sunitinib", "Rituximab"],
      "correctAnswer": 2,
      "rationale": "Vemurafenib is a small molecule inhibitor of the V600E mutated BRAF kinase. It is highly effective in melanoma patients harboring this specific mutation."
    },
    {
      "id": 2,
      "question": "A 40-year-old female with HER2-positive breast cancer is being treated with Trastuzumab. Which of the following is the most important monitoring parameter for this patient?",
      "options": [
        "Serum creatinine",
        "Pulmonary function tests",
        "Echocardiogram (LVEF)",
        "Hearing test",
        "Liver function tests"
      ],
      "correctAnswer": 3,
      "rationale": "Trastuzumab is associated with cardiotoxicity, specifically a decrease in left ventricular ejection fraction. Periodic echocardiograms are required to monitor for heart failure."
    },
    {
      "id": 3,
      "question": "A patient with metastatic colorectal cancer is found to have a 'Wild-type KRAS' gene. Which of the following EGFR inhibitors would be most effective in this patient?",
      "options": ["Tamoxifen", "Cetuximab", "Bevacizumab", "Imatinib", "Rituximab"],
      "correctAnswer": 2,
      "rationale": "Cetuximab (and Panitumumab) target the EGFR receptor. However, they only work if the downstream signaling molecule KRAS is NOT mutated (wild-type). If KRAS is mutated, the growth signal continues even if the receptor is blocked."
    },
    {
      "id": 4,
      "question": "A patient on Nivolumab (a PD-1 inhibitor) develops severe cough and shortness of breath. A CT scan shows diffuse ground-glass opacities in the lungs. After excluding infection, what is the most appropriate next step in management?",
      "options": [
        "Stop Nivolumab and start high-dose corticosteroids",
        "Increase the dose of Nivolumab",
        "Add a broad-spectrum antibiotic",
        "Switch to an alkylating agent",
        "Wait and watch for 2 weeks"
      ],
      "correctAnswer": 1,
      "rationale": "The patient has immune-mediated pneumonitis, a serious immune-related adverse event (irAE). The standard management is to discontinue the checkpoint inhibitor and initiate systemic immunosuppression with corticosteroids."
    },
    {
      "id": 5,
      "question": "Which of the following drugs acts by binding to and neutralizing circulating VEGF, thereby inhibiting tumor angiogenesis?",
      "options": ["Rituximab", "Trastuzumab", "Bevacizumab", "Ipilimumab", "Bortezomib"],
      "correctAnswer": 3,
      "rationale": "Bevacizumab is a monoclonal antibody against VEGF. By 'mopping up' circulating VEGF, it prevents the growth of new blood vessels into the tumor."
    },
    {
      "id": 6,
      "question": "A 65-year-old male with Multiple Myeloma is started on Bortezomib. What is the mechanism of action of this drug?",
      "options": [
        "Inhibition of the 26S proteasome",
        "Cross-linking of DNA",
        "Inhibition of the BCR-ABL kinase",
        "Binding to the CD20 receptor",
        "Inhibition of aromatase"
      ],
      "correctAnswer": 1,
      "rationale": "Bortezomib is a proteasome inhibitor. It prevents the breakdown of proteins within the cell, leading to the accumulation of pro-apoptotic factors and misfolded proteins, which is particularly toxic to plasma cells."
    },
    {
      "id": 7,
      "question": "A postmenopausal woman with ER-positive breast cancer is prescribed Anastrozole. How does this drug differ from Tamoxifen in its mechanism of reducing estrogen effect?",
      "options": [
        "It blocks the estrogen receptor directly",
        "It prevents the conversion of androgens to estrogen in peripheral tissues",
        "It acts as an agonist in the uterus",
        "It induces the degradation of the estrogen receptor",
        "It inhibits the release of GnRH from the hypothalamus"
      ],
      "correctAnswer": 2,
      "rationale": "Anastrozole is an aromatase inhibitor. It works by blocking the enzyme aromatase, which converts androgens to estrogens in peripheral fat and other tissues. This is the primary source of estrogen in postmenopausal women."
    },
    {
      "id": 8,
      "question": "What is the primary risk of using Tamoxifen for breast cancer prevention in women with an intact uterus?",
      "options": [
        "Pulmonary fibrosis",
        "Endometrial hyperplasia and cancer",
        "Osteoporosis",
        "Ototoxicity",
        "Cardiac failure"
      ],
      "correctAnswer": 2,
      "rationale": "Tamoxifen is a SERM. While it is an antagonist in the breast, it acts as an **agonist** in the uterus. This estrogenic stimulation can lead to endometrial hyperplasia and an increased risk of endometrial carcinoma."
    },
    {
      "id": 9,
      "question": "A patient with non-Hodgkin lymphoma receives Rituximab. He later develops a severe neurological decline with confusion and ataxia. An MRI shows white matter lesions. What latent virus reactivation is most likely responsible?",
      "options": ["EBV", "HSV-1", "JC Virus", "CMV", "VZV"],
      "correctAnswer": 3,
      "rationale": "Rituximab depletes B-cells. This can lead to the reactivation of the JC virus, which causes Progressive Multifocal Leukoencephalopathy (PML), a devastating demyelinating disease of the CNS."
    },
    {
      "id": 10,
      "question": "How does the cardiotoxicity of Trastuzumab typically differ from that of Doxorubicin?",
      "options": [
        "Trastuzumab is irreversible; Doxorubicin is reversible",
        "Trastuzumab is usually reversible and not dose-dependent; Doxorubicin is irreversible and dose-dependent",
        "Trastuzumab causes hypertrophic cardiomyopathy; Doxorubicin causes dilated",
        "There is no difference in their cardiotoxicity",
        "Doxorubicin only affects the right heart; Trastuzumab only the left"
      ],
      "correctAnswer": 2,
      "rationale": "Doxorubicin causes cumulative, irreversible damage via free radicals (Type 1 cardiotoxicity). Trastuzumab causes 'Type 2' cardiotoxicity, which involves impaired signaling in myocytes but is generally not associated with permanent cell death and is often reversible upon discontinuation."
    }
  ],
  "flashcards": [
    { "front": "What is the target of **Rituximab**?", "back": "**CD20** on B-cells.", "tag": "Pharmacology" },
    { "front": "What is the specific target of **Imatinib**?", "back": "**BCR-ABL** tyrosine kinase (and c-kit).", "tag": "Pharmacology" },
    { "front": "What is the mechanism of **Bevacizumab**?", "back": "Monoclonal antibody against **VEGF**; inhibits angiogenesis.", "tag": "Pharmacology" },
    { "front": "Which drug is a **BRAF V600E** inhibitor?", "back": "**Vemurafenib**.", "tag": "Pharmacology" },
    { "front": "What is the common toxicity of **Checkpoint Inhibitors**?", "back": "**Immune-Related Adverse Events (irAEs)**; treated with corticosteroids.", "tag": "Toxicity" },
    { "front": "What is the difference between **Tamoxifen** and **Raloxifene** in the uterus?", "back": "Tamoxifen is an **agonist** (risk of cancer); Raloxifene is an **antagonist** (no risk).", "tag": "Pharmacology" }
  ],
  "pearls": [
    { "title": "Mab vs Nib", "content": "-mab = Monoclonal Antibody (extracellular). -nib = Small molecule inhibitor (intracellular kinase)." },
    { "title": "The KRAS rule", "content": "EGFR inhibitors (Cetuximab) only work in colorectal cancer if **KRAS is wild-type**. If KRAS is mutated, the engine is running even without the key." },
    { "title": "VEGF and Wounds", "content": "Bevacizumab stops new vessels. If you cut someone open, they won't make new vessels to heal the wound. Stop it weeks before surgery." },
    { "title": "Tamoxifen: Agonist vs Antagonist", "content": "Tamoxifen is 'selective.' It's like a key that works in some locks (bone/uterus) but jams in others (breast)." }
  ]
});