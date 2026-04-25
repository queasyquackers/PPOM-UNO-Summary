window.receiveLectureContent({
    title: "Lecture 157: Pharmacology: Antineoplastic Drugs Part 2",
    date: "11/07",
    time: "10:00am - 11:00am",
    presenters: ["L. Goldstein, Pharm.D."],
    module: "Pharmacology",
    summary: `
        <div class="summary-section">
            <p><strong>Introduction to Targeted Therapeutics</strong></p>
            <p>Targeted anti-cancer therapies represent a shift from non-selective cytotoxic poisons to agents that specifically interrupt oncogenic signaling pathways. These drugs target well-defined intracellular or extracellular molecules that drive cancer growth, survival, and proliferation. They are often used in combination with conventional chemotherapy to maximize efficacy (Slide 3-23).</p>
            <ul>
                <li><strong>Oncogenic Drivers:</strong> Targets include growth factor receptors, signaling kinases (e.g., Ras/Raf/MEK/ERK), and molecules involved in evading immune surveillance (Slide 13-17).</li>
                <li><strong>Drug Formulations:</strong> 
                    <ul>
                        <li>**Small Molecule Inhibitors (-tinibs):** Typically oral drugs that enter cells to block intracellular domains (e.g., ATP binding sites) of tyrosine kinases. They are major substrates of **CYP3A4** and P-glycoprotein (Slide 115-127).</li>
                        <li>**Monoclonal Antibodies (-mabs):** Large proteins that bind to extracellular domains of receptors or ligands. They must be injected (IV or Sub-q) and have long half-lives (days to weeks) (Slide 147-164).</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Key Targets: Tyrosine Kinases and Angiogenesis</h3>
            <p>Tyrosine kinases are central regulators of cell growth. Receptors (like EGFR and HER2) dimerize and autophosphorylate upon ligand binding, while non-receptors (like BCR-ABL) are often constitutively active due to mutations (Slide 60-103).</p>
            <ul>
                <li><strong>BCR-ABL (Imatinib):</strong> Specifically targets the fusion protein in **CML**. It was the first 'designer' drug for a specific molecular defect.</li>
                <li><strong>HER2 (Trastuzumab):</strong> A monoclonal antibody used in HER2-positive breast cancer. A notable side effect is **cardiotoxicity** (decreased LVEF).</li>
                <li><strong>Angiogenesis (VEGF):</strong> Tumors stimulate the growth of new, leaky blood vessels to supply oxygen and nutrients. Drugs like **Bevacizumab** (binds VEGF ligand) or small molecules targeting the VEGF receptor inhibit this process. Common toxicities include **hypertension** and impaired wound healing (Slide 104-114).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Immunotherapy and Checkpoint Inhibition</h3>
            <p>Malignant cells often escape the immune system by activating 'brakes' on T-cells. Immunotherapies aim to release these brakes or engineer the immune system to recognize the tumor (Slide 46-51).</p>
            <ul>
                <li><strong>Immune Checkpoint Inhibitors:</strong> Monoclonal antibodies against **PD-1**, **PD-L1**, or **CTLA-4** prevent the tumor from 'turning off' T-cells. These can cause 'immune-related' adverse effects (e.g., colitis, pneumonitis, endocrinopathies) due to excessive immune activation.</li>
                <li><strong>CAR T-Cells:</strong> A patient's T-cells are genetically engineered to express a **Chimeric Antigen Receptor** targeted against a specific tumor antigen (e.g., CD19 in B-cell malignancies). This is a highly potent but complex therapy often associated with **Cytokine Release Syndrome (CRS)**.</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Sketchy Pharm",
            title: "Targeted Cancer Therapy",
            tags: ["#AK_Step1_v11::#SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastic_Agents::02_Targeted_Therapies"]
        },
        {
            resource: "Boards and Beyond",
            title: "Tyrosine Kinase Inhibitors",
            tags: ["#B&B::10_Hematology::04_Pharmacology::02_Targeted_Therapies"]
        },
        {
            resource: "First Aid",
            title: "Targeted Cancer Drugs",
            tags: ["#FirstAid::Hematology::Pharmacology::Targeted_Cancer_Drugs"]
        }
    ],
    pearls: [
        {
            title: "EGFR and Skin Rash",
            content: "The development of an **acneiform rash** is a common side effect of EGFR inhibitors (like Erlotinib) and actually correlates with a better clinical response."
        },
        {
            title: "VEGF and Wound Healing",
            content: "VEGF inhibitors (like Bevacizumab) must be discontinued several weeks before and after surgery because they severely impair the body's ability to heal wounds."
        },
        {
            title: "Checkpoint Toxicity",
            content: "Adverse effects from checkpoint inhibitors are 'autoimmune-like'. Treat severe cases with high-dose **corticosteroids**."
        }
    ],
    flashcards: [
        {
            question: "What is the common suffix for small molecule tyrosine kinase inhibitors?",
            answer: "-tinib."
        },
        {
            question: "Which targeted agent is specifically used for CML with the t(9;22) translocation?",
            answer: "Imatinib (Gleevec)."
        },
        {
            question: "What is the primary mechanism of action of Bevacizumab?",
            answer: "Binds to and neutralizes **VEGF** ligand, preventing angiogenesis."
        },
        {
            question: "Which antibody targets the HER2/neu receptor in breast cancer?",
            answer: "Trastuzumab."
        },
        {
            question: "What are the common immune-related side effects of checkpoint inhibitors?",
            answer: "Colitis, hepatitis, pneumonitis, and endocrinopathies (e.g., thyroiditis)."
        }
    ]
});