window.receiveLectureContent({
  id: "l157",
  module: "Pharmacology",
  metadata: {
    title: "Pharmacology of Antineoplastic Agents 2",
    lecturer: "L. Goldstein, Pharm.D. (Session 157)",
    readingTime: "10-15 min",
    difficulty: "Advanced",
    tags: ["Oncology", "Pharmacology", "Targeted Therapy", "Immunotherapy", "Monoclonal Antibodies"]
  },
  resources: {
    ankingResource: {
      primarySource: "Sketchy Pharm",
      chapter: "Hematology & Oncology > Targeted Therapy",
      alternatives: [
        { resource: "Boards and Beyond", chapter: "Hematology > Pharmacology > Targeted Therapies" },
        { resource: "First Aid", chapter: "Hematology/Oncology > Pharmacology" }
      ]
    },
    anking: [
      { match: "Imatinib (BCR-ABL)", resources: "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { match: "Trastuzumab (HER2)", resources: "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { match: "Bevacizumab (VEGF)", resources: "AnKing Step 1 v11: #SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastics::05_Targeted_Therapies" },
      { match: "Checkpoint Inhibitors", resources: "AnKing Step 1 v11: #FirstAid::Hematology_Oncology::Pharmacology::Immune_Checkpoint_Inhibitors" }
    ]
  },
  summary: `
# Story Mode: The Precision Strike

In the previous session, we used "hammers" to smash cancer cells. Today, we look at the "scalpels"—targeted therapies and immunotherapy. These drugs don't just attack any cell that divides; they are designed to hit specific molecular targets, the "oncogenic drivers" that make a cancer cell unique.

## Phase I: The Tyrosine Kinase Inhibitors (The -tinibs)
Tyrosine kinases are the "on-off switches" for cell growth. In cancer, these switches are often jammed in the "ON" position. Small molecule inhibitors (ending in **-tinib**) are small enough to enter the cell and block the **ATP-binding site** of these kinases, cutting the power to the growth engine.

### Imatinib: The First Magic Bullet
Imatinib was the drug that changed everything. It targets the **BCR-ABL** tyrosine kinase created by the Philadelphia Chromosome t(9;22) in **Chronic Myeloid Leukemia (CML)**.
*   **The Glitch**: Over time, the kinase can mutate. The most famous is the **T315I mutation**, which makes Imatinib useless. In this case, we have to use a newer-generation drug like **Ponatinib**.
*   **The Toxicity**: Watch for **Periorbital Edema** (puffy eyes) and skin desquamation.

### Other TKIs to Know:
*   **Erlotinib / Gefitinib**: Target the **EGFR** (Epidermal Growth Factor Receptor). Used in Lung Cancer. Signature side effect: **Acneiform Rash**.
*   **Lapatinib**: Targets both EGFR and **HER2**. Used in breast cancer.

---

## Phase II: The Monoclonal Antibodies (The -mabs)
While TKIs work *inside* the cell, MABs work *outside*. They are massive proteins that bind to receptors or circulating factors, blocking them from signaling.

### Trastuzumab (Herceptin): The HER2 Specialist
Trastuzumab targets the **HER2/neu** receptor in breast cancer. 
*   **The ADC**: **Trastuzumab Emtansine (T-DM1)** is an Antibody-Drug Conjugate. It acts like a "guided missile," carrying a cytotoxic payload (DM1) specifically to HER2-expressing cells.
*   **The Danger**: Trastuzumab is associated with **Cardiotoxicity** (decreased LVEF). 
    *   **Crucial Difference**: Unlike the "Red Devil" (Doxorubicin), Trastuzumab's heart damage is usually **reversible** and not dose-dependent.

### Bevacizumab: The Angiogenesis Saboteur
Tumors need blood to grow. They release **VEGF** to trigger new blood vessel growth. Bevacizumab binds to VEGF, "mopping it up" before it can reach the vessel walls.
*   **The Risks**: Because it interferes with blood vessels, it causes **Hypertension**, **Hemorrhage**, and **Impaired Wound Healing**. You must stop this drug weeks before any surgery, or the surgical wound may literally pull apart (**Dehiscence**).

### Cetuximab: The KRAS Gatekeeper
Cetuximab targets the EGFR on colon cancer cells. 
*   **The KRAS Rule**: This drug **only** works if the downstream signaling molecule, **KRAS**, is NOT mutated (wild-type). If KRAS is mutated, the cell keeps growing even if you block the receptor above it.

---

## Phase III: The Multiple Myeloma Arsenal
Multiple Myeloma (plasma cell cancer) has its own unique set of "scalpels."

### 1. The Proteasome Inhibitors: Bortezomib
Think of the proteasome as the cell's "trash compactor." Bortezomib jams the compactor. Misfolded proteins build up, "clogging" the cell until it triggers apoptosis.
*   **Clinical Pearl**: It blocks **NF-kappa-B** signaling.
*   **The Risk**: It can reactivate **Shingles** (VZV). Patients need antiviral prophylaxis.

### 2. The IMiDs: Lenalidomide
Lenalidomide binds to a protein called **Cereblon**, leading to the destruction of transcription factors that the cancer cell needs to survive.
*   **WARNING**: These are descendants of **Thalidomide**. They are extremely **teratogenic**, causing **Phocomelia** (stunted limbs). 

---

## Phase IV: Releasing the Brakes – Immunotherapy

### Immune Checkpoint Inhibitors
Cancer cells often "hide" from the immune system by engaging "brakes" on T-cells. Drugs like **Pembrolizumab** (PD-1 inhibitor) and **Ipilimumab** (CTLA-4 inhibitor) cut these brakes, allowing the patient's own T-cells to attack the cancer.
*   **The Cost**: By activating the immune system, you can trigger "autoimmune" attacks on healthy organs. These are called **irAEs (Immune-Related Adverse Events)**:
    *   Colitis (diarrhea)
    *   Pneumonitis (shortness of breath)
    *   Hypophysitis (pituitary inflammation)

### CAR T-Cell Therapy: The Designer Soldiers
In CAR T-cell therapy, we harvest a patient's T-cells, genetically engineer them to recognize a specific tumor antigen (like **CD19** on B-cells), and put them back in.
*   **The Storm**: When these "designer soldiers" start killing the tumor, they release a massive wave of cytokines. This causes **Cytokine Release Syndrome (CRS)**—a dangerous, high-fever, multi-organ failure state.

---

## The Big Picture Table: Targeted Therapy Pearls

| Target | Drug | Key Feature |
| :--- | :--- | :--- |
| **BCR-ABL** | Imatinib | CML "Magic Bullet"; T315I = Resistance |
| **HER2** | Trastuzumab | Breast cancer; Reversible Cardiotoxicity |
| **VEGF** | Bevacizumab | Blocks angiogenesis; Wound dehiscence |
| **CD20** | Rituximab | B-cell lymphoma; Infusion reactions |
| **PD-1** | Pembrolizumab | "Releases the brakes"; Autoimmune side effects |
| **Proteasome** | Bortezomib | Multiple Myeloma; Shingles risk |
| **Cereblon** | Lenalidomide | Multiple Myeloma; Severe Teratogen |

Targeted therapy is a balancing act: more precision, but often entirely new and strange toxicities.
`,
  questions: [
    {
      question: "Which of the following mutations confers resistance to Imatinib in patients with Chronic Myeloid Leukemia?",
      options: [
        { text: "KRAS mutation" },
        { text: "BRAF V600E" },
        { text: "T315I mutation", isCorrect: true },
        { text: "HER2 overexpression" }
      ],
      explanation: "The T315I mutation in the BCR-ABL kinase domain changes a threonine to an isoleucine, physically blocking the binding of imatinib."
    },
    {
      question: "A patient on Pembrolizumab (a PD-1 inhibitor) for metastatic melanoma develops severe diarrhea and abdominal pain. What is the most likely cause of these symptoms?",
      options: [
        { text: "Cytokine Release Syndrome" },
        { text: "Immune-Related Colitis", isCorrect: true },
        { text: "Hemorrhagic Cystitis" },
        { text: "Direct cytotoxic damage to the gut lining" }
      ],
      explanation: "Checkpoint inhibitors 'release the brakes' on the immune system, which can lead to autoimmune-like attacks on healthy tissues, such as the colon (colitis)."
    },
    {
      question: "Why must Bevacizumab be discontinued several weeks before a patient undergoes elective surgery?",
      options: [
        { text: "It increases the risk of anesthetic complications" },
        { text: "It inhibits angiogenesis, leading to impaired wound healing", isCorrect: true },
        { text: "It causes severe bone marrow suppression" },
        { text: "It induces CYP3A4, which metabolizes surgical drugs too quickly" }
      ],
      explanation: "By blocking VEGF, Bevacizumab prevents the formation of new blood vessels necessary for wound repair, leading to a high risk of wound dehiscence."
    },
    {
      question: "Which agent used in the treatment of Multiple Myeloma is a proteasome inhibitor that requires antiviral prophylaxis against shingles?",
      options: [
        { text: "Lenalidomide" },
        { text: "Daratumumab" },
        { text: "Bortezomib", isCorrect: true },
        { text: "Dexamethasone" }
      ],
      explanation: "Bortezomib is a proteasome inhibitor associated with a significantly increased risk of Herpes Zoster (shingles) reactivation."
    },
    {
      question: "A patient with HER2+ breast cancer is receiving Trastuzumab. How does its cardiotoxicity differ from that of Doxorubicin?",
      options: [
        { text: "It is dose-dependent and irreversible" },
        { text: "It is usually reversible and not cumulative", isCorrect: true },
        { text: "It only occurs when combined with taxanes" },
        { text: "Trastuzumab does not cause cardiotoxicity" }
      ],
      explanation: "Trastuzumab-induced cardiotoxicity (Type II) involves impaired myocyte signaling rather than cell death, making it typically reversible upon stopping the drug, unlike Doxorubicin (Type I)."
    }
  ],
  flashcards: [
    { front: "What is the target of **Rituximab**?", back: "**CD20** on B-cells.", tag: "Pharmacology" },
    { front: "What is the specific target of **Imatinib**?", back: "**BCR-ABL** tyrosine kinase (and c-kit).", tag: "Pharmacology" },
    { front: "What is the mechanism of **Bevacizumab**?", back: "Monoclonal antibody against **VEGF**; inhibits angiogenesis.", tag: "Pharmacology" },
    { front: "What is the major toxicity of **Checkpoint Inhibitors**?", back: "**Immune-Related Adverse Events (irAEs)**; treated with corticosteroids.", tag: "Toxicity" },
    { front: "Which drug binds **Cereblon** and is a potent teratogen?", back: "**Lenalidomide** (or Thalidomide).", tag: "Pharmacology" }
  ],
  pearls: [
    { title: "Mab vs Nib", content: "-mab = Monoclonal Antibody (extracellular). -nib = Small molecule inhibitor (intracellular kinase)." },
    { title: "The KRAS rule", content: "EGFR inhibitors (Cetuximab) only work in colorectal cancer if **KRAS is wild-type**. If KRAS is mutated, the engine is running even without the key." },
    { title: "VEGF and Wounds", content: "Bevacizumab stops new vessels. If you cut someone open, they won't make new vessels to heal the wound. Stop it weeks before surgery." },
    { title: "Trastuzumab Heart Safety", content: "Monitor LVEF. If the ejection fraction drops, stop the drug. Usually, the heart recovers." }
  ]
});