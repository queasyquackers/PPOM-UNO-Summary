window.receiveLectureContent({
    title: "Lecture 156: Pharmacology of Antineoplastic Agents 1",
    date: "11/07",
    time: "9:00am - 10:00am",
    presenters: ["L. Goldstein, Pharm.D."],
    module: "Pharmacology",
    summary: `
        <div class="summary-section">
            <p><strong>Introduction to Conventional Chemotherapy</strong></p>
            <p>Conventional antineoplastic agents are non-selective cytotoxic drugs that primarily target rapidly proliferating cells by damaging DNA or inhibiting cell division. While the goal is to eliminate malignant cells, these drugs also affect normal tissues with high turnover rates, such as bone marrow, the gastrointestinal tract, and hair follicles. Chemotherapy can be used with curative intent or palliatively to shrink tumors and relieve symptoms (Slide 2-25).</p>
            <ul>
                <li><strong>The Cell Cycle:</strong> Most conventional agents are cell-cycle specific, acting during phases such as **S phase** (DNA synthesis) or **M phase** (mitosis). Checkpoints at G1 and G2 ensure DNA integrity before the cell proceeds (Slide 51-65).</li>
                <li><strong>Apoptosis:</strong> Successful chemotherapy relies on triggering the programmed cell death pathway. Mutations in apoptotic proteins (like p53) are a major mechanism of drug resistance (Slide 66-79).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Mechanisms of Resistance and Toxicity</h3>
            <p>Tumor cells develop various strategies to evade chemotherapy, similar to antimicrobial resistance. Understanding these mechanisms is crucial for designing multi-drug regimens that minimize the emergence of resistant clones (Slide 84-118).</p>
            <ul>
                <li><strong>Resistance Mechanisms:</strong> Increased DNA repair capacity, decreased drug accumulation (e.g., via **P-glycoprotein** efflux pumps), drug detoxification (e.g., glutathione conjugation), and evasion of immune surveillance (Slide 84-108).</li>
                <li><strong>Toxicity Profile:</strong> Adverse effects are mostly due to 'off-target' effects on normal proliferating cells. **Dose-limiting toxicities (DLTs)** are severe side effects that prevent further dose increases, such as myelosuppression (neutropenia) or neuropathy (Slide 122-160).</li>
            </ul>
            
            ::::correlate
            Tumor Lysis Syndrome (TLS)
            - **Pathophysiology:** A metabolic emergency caused by the rapid destruction of a large number of tumor cells (typically in leukemias/lymphomas), releasing intracellular contents into the bloodstream.
            - **Laboratory Findings:** Hyperuricemia, hyperkalemia, hyperphosphatemia, and **hypocalcemia**.
            - **Complications:** Acute kidney injury due to uric acid crystal deposition.
            - **Management:** Aggressive hydration, allopurinol, or rasburicase (Slide 161-164).
            ::::
        </div>

        <div class="summary-section">
            <h3>Major Classes of Cytotoxic Agents</h3>
            <p>Conventional chemotherapy is categorized by the specific mechanism of action on the DNA or the mitotic machinery (Slide 24-27).</p>
            <ul>
                <li><strong>Alkylating Agents:</strong> (e.g., Cyclophosphamide, Cisplatin). These cross-link DNA strands, preventing replication. Cyclophosphamide is known for causing **hemorrhagic cystitis** (prevented by Mesna).</li>
                <li><strong>Antimetabolites:</strong> (e.g., Methotrexate, 5-FU). These mimic natural nucleotides and inhibit DNA synthesis (S-phase specific).</li>
                <li><strong>Antitumor Antibiotics:</strong> (e.g., Doxorubicin, Bleomycin). Doxorubicin is notoriously cardiotoxic, while Bleomycin is associated with **pulmonary fibrosis**.</li>
                <li><strong>Microtubule Inhibitors:</strong> (e.g., Vincristine, Paclitaxel). These disrupt the mitotic spindle (M-phase specific). Vincristine is dose-limited by **peripheral neuropathy**.</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Sketchy Pharm",
            title: "Antineoplastic Overview",
            tags: ["#AK_Step1_v11::#SketchyPharm::05_Hematology_&_Oncology::02_Antineoplastic_Agents"]
        },
        {
            resource: "Boards and Beyond",
            title: "Chemotherapy Principles",
            tags: ["#B&B::10_Hematology::04_Pharmacology::01_Chemotherapy_Principles"]
        },
        {
            resource: "First Aid",
            title: "Cancer Drugs",
            tags: ["#FirstAid::Hematology::Pharmacology::Cancer_Drugs"]
        }
    ],
    pearls: [
        {
            title: "Cell Cycle Specificity",
            content: "Antimetabolites act in the **S phase**, while Microtubule inhibitors act in the **M phase**. Alkylating agents are generally cell-cycle non-specific."
        },
        {
            title: "Doxorubicin Cardiotoxicity",
            content: "Doxorubicin causes a dilated cardiomyopathy. **Dexrazoxane** can be used to reduce this risk."
        },
        {
            title: "Vincristine vs Vinblastine",
            content: "Vincristine is associated with **Peripheral Neuropathy** ('Vincristine crisps the nerves'). Vinblastine is associated with **Bone Marrow Suppression** ('Vinblastine blasts the marrow')."
        }
    ],
    flashcards: [
        {
            question: "What is the primary mechanism of action of alkylating agents like cyclophosphamide?",
            answer: "Cross-linking DNA strands."
        },
        {
            question: "Which phase of the cell cycle is targeted by methotrexate?",
            answer: "S phase (DNA synthesis)."
        },
        {
            question: "What unique toxicity is associated with bleomycin?",
            answer: "Pulmonary fibrosis."
        },
        {
            question: "What metabolic abnormality is seen in Tumor Lysis Syndrome?",
            answer: "Hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia."
        },
        {
            question: "How is cyclophosphamide-induced hemorrhagic cystitis prevented?",
            answer: "Aggressive hydration and administration of **Mesna**."
        }
    ]
});
