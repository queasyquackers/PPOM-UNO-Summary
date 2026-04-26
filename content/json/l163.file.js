const lectureData = {
    metadata: {
        title: "Lecture 163: Pediatric Considerations in Hematology and Oncology",
        presenter: "Dr. T. Chan, D.O.",
        date: "2024-04-26",
        tags: ["Pediatrics", "Hematology", "Oncology", "Anemia", "Sickle Cell", "Leukemia", "Wilms Tumor", "Neuroblastoma"],
        description: "A comprehensive overview of common and high-yield pediatric hematologic and oncologic conditions, focusing on clinical red flags, unique pediatric presentations, and board-relevant diagnostic markers."
    },
    ankingResources: [
        {
            category: "AnKing Step 1",
            resources: [
                { name: "Pathoma", topic: "Chapter 13: Anemia" },
                { name: "Pathoma", topic: "Chapter 14: Hemostasis and Related Disorders" },
                { name: "Pathoma", topic: "Chapter 5: Hematopoietic and Lymphoid Neoplasms" },
                { name: "Boards and Beyond", topic: "Pediatrics: Pediatric Hematology" },
                { name: "Boards and Beyond", topic: "Hematology: Anemia, Coagulation" },
                { name: "First Aid 2024", topic: "Hematology & Oncology" },
                { name: "Sketchy Medical", topic: "Hematology/Oncology" }
            ],
            tags: [
                "#AK_Step1_v12::Pathoma::Hematology::Anemia",
                "#AK_Step1_v12::Pathoma::Hematology::Hemostasis",
                "#AK_Step1_v12::Pathoma::Pediatrics::Wilms_Tumor",
                "#AK_Step1_v12::Pathoma::Pediatrics::Neuroblastoma",
                "#AK_Step1_v12::Boards_and_Beyond::Hematology::Sickle_Cell",
                "#AK_Step1_v12::Sketchy_Pathology::Hematology::Anemia"
            ]
        }
    ],
    summary: `
        ## Overview of Pediatric Anemias
        Pediatric anemia is often suspected based on clinical features such as pallor, tachycardia (flow murmurs), and fatigue when Hemoglobin (Hb) drops below 8-9 g/dL. Key "red flags" that warrant an extensive workup beyond simple iron deficiency include bone pain, jaundice (hemolysis), hepatosplenomegaly, and persistent systemic symptoms like fever or weight loss.

        ### Physiologic Nadir (Anemia of Infancy)
        This is a **normal, self-limited** drop in Hb (to ~10-11 g/dL) occurring around **6-8 weeks** of life. It results from the postnatal transition: high oxygen levels at birth downregulate erythropoietin (EPO), leading to a transient suppression of red cell production until the infant's own bone marrow "wakes up" (usually by 3-4 months). No treatment is required.

        ### Transient Erythroblastopenia of Childhood (TEC)
        TEC is a relatively common, **acquired normocytic anemia** in children (medially 6 months to 3 years) that often follows a **viral illness** 2-3 months prior. It presents with a low reticulocyte count (reticulocytopenia) but normal white cell and platelet counts. Like physiologic nadir, it is self-limited and typically resolves within 1-2 months.

        ### Iron Deficiency Anemia (IDA)
        The most common pediatric anemia. In toddlers, it is frequently caused by **excessive intake of cow's milk** (>24 oz/day), which leads to occult GI micro-bleeding and displaces iron-rich solid foods (the "chubby baby" syndrome). 
        *   **Analogy (The Pantry):** Hb is like the **refrigerator** (current supply), while ferritin is the **pantry** (stores). Treatment with iron must continue for **2-3 months** after Hb normalizes to "refill the pantry."
        *   **Labs:** Low Hb, **low MCV** (microcytic), **high RDW**, and **low Ferritin** (which can be falsely normal/high as an acute phase reactant during illness). 
        *   **Differential:** **Thalassemia trait** (asymptomatic but microcytic; usually normal RDW) and **Lead poisoning** (screened for alongside anemia).

        ## Sickle Cell Disease (SCD)
        SCD results from an **autosomal recessive** point mutation (Glutamine/Glutamic Acid → Valine at position 6 of the β-chain). Symptoms emerge at **3-6 months** as protective HbF levels decline.
        *   **Dactylitis:** (Hand-foot syndrome) Swollen, red, hot, and painful hands/feet; often the **most common first symptom** in infants.
        *   **Acute Chest Syndrome:** New pulmonary infiltrate + fever. Leading cause of death; requires aggressive ICU management and possible exchange transfusion.
        *   **Sepsis:** Functional asplenia (auto-infarction) starts by ~6 months. High risk for **encapsulated bacteria**: ***S. pneumoniae, H. influenzae, Neisseria, and Salmonella*** (especially osteomyelitis). Prophylactic **Penicillin** is mandatory till age 5.
        *   **Splenic Sequestration:** A "stuck drain" where blood pools in the spleen, leading to hypovolemic shock. **Clinical Tip:** Palpate from the bottom-up to avoid missing an extremely enlarged spleen.
        *   **Aplastic Crisis:** Triggered by **Parvovirus B19**; the "factory" shuts down. In SCD, the factory is usually working at 200% overtime to keep up with hemolysis; when it stops, Hb drops precipitously with a **low reticulocyte count**.
        *   **Strokes:** Sickled cells can infarct the brain; requires chronic exchange transfusion to lower HbS levels below 30%.

        ## Pediatric Coagulation & Bleeding
        ### Hemorrhagic Disease of the Newborn
        Caused by **Vitamin K deficiency** (low placental transfer, sterile gut, immature liver). Presents in the first week with bleeding from the **umbilicus**, circumcision, or GI tract (stool). 
        *   **Labs:** Prolonged **PT**. 
        *   **Prevention:** Standard **Vitamin K injection at birth**.

        ### Immune Thrombocytopenic Purpura (ITP)
        Autoimmune destruction (anti-GP2b/3a) following a viral illness. 
        *   **Presentation:** Sudden onset of non-blanching **petechiae and purpura** in an otherwise healthy kid. 
        *   **Management:** Usually transient/self-limited. Refer to hematology but warn parents about head trauma (jumping off sofas).
        *   **Splenectomy:** A last resort; removes the site of destruction but risks lifelong sepsis (encapsulated bacteria).

        ### Hemophilia A and B
        X-linked recessive Factor VIII (A) or IX (B) deficiency. 
        *   **Presentation:** Bleeding after circumcision or **hemarthrosis** (joint swelling). 
        *   **Iliopsoas Bleed:** High-volume internal bleed manifesting as vague **groin pain**; can lead to hemorrhagic shock.
        *   **Labs:** Prolonged **PTT** (intrinsic pathway).

        ### Von Willebrand Disease (vWD)
        The most common inherited bleeding disorder. Defect in vWF (platelet-to-vessel bridge).
        *   **Treatment:** **Desmopressin (DDAVP)** promotes the release of stored **vWF AND Factor VIII**.

        ## Pediatric Oncology
        ### Acute Lymphoblastic Leukemia (ALL)
        Most common pediatric cancer. Peak age <5.
        *   **Oncologic Emergencies:** 
            *   **Hyperleukocytosis:** WBC > 100,000; risks leukostasis/sludging in lungs and brain.
            *   **Tumor Lysis Syndrome (TLS):** Rapid cell breakdown leads to **Hyper-K, Hyper-Phos, Hyper-Uricemia** and **Hypo-Ca**.
        ### Abdominal Masses: Neuroblastoma vs. Wilms Tumor
        *   **Neuroblastoma:** Neural crest cells (adrenals). **Crosses midline**.
            *   **Classic Signs:** **Raccoon eyes** (retro-orbital mets), **Horner's Syndrome** (cervical involvement), and **Opsoclonus-Myoclonus** (Dancing eyes/feet).
        *   **Wilms Tumor:** Renal mass. **Does NOT cross midline**.
            *   **Associations:** **WAGR Syndrome** (Wilms, Aniridia, Genital anomalies, Retardation) and **Beckwith-Wiedemann** (Macroglossia, hemihypertrophy, omphalocele).

        ### Bone Tumors
        *   **Ewing Sarcoma:** Diaphysis. **Onion skinning** (periosteal reaction). Look for **t(11;22)** translocation.
        *   **Osteosarcoma:** Metaphysis (knee). **Sunburst pattern** or **Codman's Triangle**. High risk as a **secondary malignancy** later in life for patients who received radiation/chemotherapy for other pediatric malignancies.
    `,
    questions: [
        {
            question: "A child with Sickle Cell Disease presents with a precipitous drop in Hemoglobin from a baseline of 9 to 4, along with a reticulocyte count of 0.1%. What is the most likely trigger?",
            options: [
                { text: "Salmonella infection" },
                { text: "Parvovirus B19" },
                { text: "Splenic sequestration" },
                { text: "Iron deficiency" }
            ],
            answer: 1,
            explanation: "In SCD, the 'factory' (bone marrow) works overtime to keep up with hemolysis. Parvovirus B19 shuts down the factory, leading to an aplastic crisis characterized by severe anemia and a low reticulocyte count."
        },
        {
            question: "A child presents with an abdominal mass that crosses the midline, periorbital ecchymosis, and 'dancing' eye movements. What is the most likely diagnosis?",
            options: [
                { text: "Wilms Tumor" },
                { text: "Neuroblastoma" },
                { text: "Retinoblastoma" },
                { text: "Osteosarcoma" }
            ],
            answer: 1,
            explanation: "Neuroblastoma is derived from neural crest cells, often crosses the midline, and is associated with raccoon eyes and opsoclonus-myoclonus paraneoplastic syndrome."
        },
        {
            question: "Which of the following organisms is the most common cause of life-threatening sepsis and osteomyelitis in children with Sickle Cell Disease?",
            options: [
                { text: "Staphylococcus aureus" },
                { text: "Salmonella species" },
                { text: "Eschericia coli" },
                { text: "Group B Strep" }
            ],
            answer: 1,
            explanation: "While S. pneumoniae is a common cause of sepsis in the functionally asplenic, Salmonella is specifically high-yield for causing osteomyelitis in SCD patients."
        }
    ],
    flashcards: [
        {
            front: "SCD: Analogy for Splenic Sequestration",
            back: "A **'Stuck Drain'** where blood pools in the spleen, leading to hypovolemic shock. Palpate from the bottom-up to avoid missing it."
        },
        {
            front: "ITP: Warning for parents of toddlers",
            back: "Warn about **head trauma** (e.g. jumping off sofas) due to the risk of intracranial hemorrhage when platelets are severely low."
        },
        {
            front: "What syndrome combines Wilms Tumor, macroglossia, and hemihypertrophy?",
            back: "**Beckwith-Wiedemann Syndrome**."
        },
        {
            front: "What translocation is associated with Ewing Sarcoma?",
            back: "**t(11;22)**."
        }
    ],
    pearls: [
        "**'Pantry vs Refrigerator'**: Iron treatment must refill the stores (ferritin) long after Hb recovers.",
        "**'Stuck Drain'**: Spleen sequestration or iliopsoas bleeds can hold liters of blood, causing silent shock.",
        "**'Factory working overtime'**: SCD baseline retic count is high; a 'normal' or 'low' retic count is an emergency (Aplastic Crisis).",
        "**'ABC' of Neuroblastoma**: Adrenals, Blue (Raccoon) eyes, Crosses midline.",
        "**'D' of Ewing**: Diaphysis, Eleven (t11:22), and Dogs (get it too/onion skinning logic)."
    ]
};

export default lectureData;
