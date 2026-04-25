window.receiveLectureContent({
    title: "Lecture 154: Study Sheet: Leukemias, Lymphomas, Hemorrhage, and Thrombosis",
    date: "11/06",
    time: "1:00pm - 2:00pm",
    presenters: ["M. Plummer, M.D."],
    module: "Pathology",
    summary: `
        <div class="summary-section">
            <p><strong>Overview of Hematologic Malignancies</strong></p>
            <p>Hematologic malignancies are broadly divided into leukemias and lymphomas based on their primary site of origin and the cell lines involved. **Leukemias** are malignant diseases of myeloid or lymphoid cells that typically begin in the bone marrow and involve the peripheral blood. **Lymphomas** are malignant diseases of lymphoid cells (not myeloid) that typically originate in the lymph nodes. Acute leukemias are defined by the presence of more than 20% blasts in the bone marrow or peripheral blood, leading to marrow failure as malignant cells outcrowd normal hematopoietic precursors (Study Sheet Page 1-2).</p>
            <ul>
                <li><strong>Common Presentation:</strong> Anemia (pallor, fatigue), petechiae (due to thrombocytopenia), and frequent infections (due to lack of mature WBCs).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Acute and Chronic Leukemias</h3>
            <p>Leukemias are classified by the cell lineage (myeloid vs. lymphoid) and the rate of progression (acute vs. chronic). Chromosomal translocations and specific immunophenotypic markers are essential for definitive diagnosis and prognosis (Study Sheet Page 2-3).</p>
            
            ::::correlate
            Acute Promyelocytic Leukemia (APL)
            - **Pathophysiology:** A subtype of AML characterized by the **t(15;17)** translocation, which involves the retinoic acid receptor.
            - **Key Feature:** Presence of **Auer rods** in the cytoplasm of blasts.
            - **Complication:** High risk of **Disseminated Intravascular Coagulation (DIC)** due to the release of procoagulants from granules.
            - **Treatment:** Highly responsive to **All-Trans Retinoic Acid (ATRA)**.
            - **Markers:** Esterase positive, Tdt negative.
            ::::

            <ul>
                <li><strong>Chronic Myelogenous Leukemia (CML):</strong> A myeloproliferative disorder characterized by the **Philadelphia chromosome t(9;22)**. It presents with a hypercellular marrow and increased neutrophils and basophils.</li>
                <li><strong>Acute Lymphoblastic Leukemia (ALL):</strong> Primarily a pediatric malignancy. Lymphoblasts are **Tdt positive**. T-cell ALL often presents as a mediastinal mass in adolescent males.</li>
                <li><strong>Chronic Lymphocytic Leukemia (CLL):</strong> Typically affects older adults (>50-60). Characterized by **smudge cells** on peripheral smear and markers CD5, CD19, and CD20.</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Lymphomas and Plasma Cell Neoplasms</h3>
            <p>Lymphomas are divided into Hodgkin and Non-Hodgkin types. Non-Hodgkin Lymphomas (NHL) are mostly B-cell in origin and often have characteristic translocations (Study Sheet Page 3-5).</p>
            
            ::::highyield
            **Multiple Myeloma (MM)**:
            A plasma cell neoplasm characterized by the production of a monoclonal protein (**M-spike** on SPEP). Diagnosis requires >10% plasma cells in the marrow. Key features follow the **CRAB** mnemonic:
            - **C**: Hyper**C**alcemia
            - **R**: **R**enal dysfunction
            - **A**: **A**nemia
            - **B**: **B**one lesions (lytic 'punched-out' lesions)
            ::::

            <ul>
                <li><strong>Follicular Lymphoma:</strong> B-cell origin from germinal centers. Associated with **t(14;18)** and overexpression of **Bcl-2** (anti-apoptotic).</li>
                <li><strong>Burkitt's Lymphoma:</strong> High-grade B-cell lymphoma with a **"starry sky"** appearance. Associated with **t(8;14)** and **MYC** overexpression. Often linked to **EBV** (especially the endemic African form).</li>
                <li><strong>Hodgkin Lymphoma (HL):</strong> Diagnostic feature is the **Reed-Sternberg (RS) cell**. RS cells are typically CD15+ and CD30+. Nodular sclerosis is the most common subtype and generally has a good prognosis.</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Pathoma",
            title: "WBC Disorders",
            tags: ["#Pathoma::Chapter_13_Hematology::WBC_Disorders"]
        },
        {
            resource: "Boards and Beyond",
            title: "Leukemia and Lymphoma",
            tags: ["#B&B::10_Hematology::03_Leukemia_&_Lymphoma"]
        },
        {
            resource: "Sketchy Path",
            title: "Leukemias and Lymphomas",
            tags: ["#AK_Step1_v11::#SketchyPath::05_Hematology::02_WBC_Disorders"]
        }
    ],
    pearls: [
        {
            title: "Blast Percentage",
            content: "A blast count of **>20%** in the marrow or peripheral blood is the diagnostic threshold for **acute** leukemia."
        },
        {
            title: "Mnemonic: CRAB",
            content: "Used for **Multiple Myeloma**: **C**alcemia (high), **R**enal failure, **A**nemia, **B**one lesions."
        },
        {
            title: "Philadelphia Chromosome",
            content: "The **t(9;22)** translocation creates the BCR-ABL fusion protein, which is the hallmark of **CML**."
        }
    ],
    flashcards: [
        {
            question: "What chromosomal translocation is diagnostic for Acute Promyelocytic Leukemia (APL)?",
            answer: "t(15;17)."
        },
        {
            question: "Which marker is found in lymphoblasts but not myeloblasts?",
            answer: "Tdt (Terminal deoxynucleotidyl transferase)."
        },
        {
            question: "What is the characteristic 'look' of Burkitt's lymphoma on histology?",
            answer: "'Starry sky' appearance (macrophages in a sea of tumor cells)."
        },
        {
            question: "Which cell is the diagnostic 'owl-eye' cell seen in Hodgkin Lymphoma?",
            answer: "Reed-Sternberg (RS) cell."
        },
        {
            question: "What is the treatment for APL to prevent DIC?",
            answer: "All-Trans Retinoic Acid (ATRA)."
        }
    ]
});