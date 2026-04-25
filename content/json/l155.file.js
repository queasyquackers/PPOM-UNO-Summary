window.receiveLectureContent({
    title: "Lecture 155: Pathology of Hemorrhage and Thrombosis",
    date: "11/06",
    time: "2:00pm - 3:00pm",
    presenters: ["M. Plummer, M.D."],
    module: "Pathology",
    summary: `
        <div class="summary-section">
            <p><strong>Disorders of Platelets and Primary Hemostasis</strong></p>
            <p>Bleeding disorders are often classified into defects of primary hemostasis (platelet-related) and secondary hemostasis (coagulation factor-related). Primary hemostasis issues typically present with mucosal bleeding and petechiae, while secondary hemostasis issues present with deep tissue bleeding (Study Sheet Page 6).</p>
            <ul>
                <li><strong>Immune Thrombocytopenic Purpura (ITP):</strong> An autoimmune condition where anti-platelet antibodies lead to platelet destruction. It can be acute (often pediatric, post-viral) or chronic (often adult females).</li>
                <li><strong>Platelet Function Disorders:</strong> 
                    <ul>
                        <li><strong>Bernard-Soulier Syndrome:</strong> Deficiency of GpIb (impaired **adhesion**).</li>
                        <li><strong>Glanzmann Thrombasthenia:</strong> Deficiency of GpIIb/IIIa (impaired **aggregation**).</li>
                    </ul>
                </li>
            </ul>
            
            ::::correlate
            Thrombotic Thrombocytopenic Purpura (TTP)
            - **Pathophysiology:** Deficiency or inhibition of the **ADAMTS13** enzyme, which normally cleaves large vWF multimers. Large multimers lead to platelet microthrombi.
            - **Presentation (The Pentad):** Fever, Microangiopathic Hemolytic Anemia (MAHA), Thrombocytopenia, Renal failure, and Neurologic symptoms.
            - **Diagnosis:** Presence of **schistocytes** on peripheral smear and low ADAMTS13 activity.
            - **Lecturer's Point:** TTP is a medical emergency requiring urgent plasmapheresis.
            ::::
        </div>

        <div class="summary-section">
            <h3>Coagulation Factor Disorders (Secondary Hemostasis)</h3>
            <p>Secondary hemostasis involve the coagulation cascade, resulting in fibrin formation to stabilize the platelet plug. Deficiencies in these factors lead to characteristic bleeding patterns such as hemarthrosis (bleeding into joints) (Study Sheet Page 6).</p>
            <ul>
                <li><strong>Hemophilia A:</strong> X-linked recessive deficiency of **Factor VIII**. Presents with elevated PTT and normal PT.</li>
                <li><strong>von Willebrand Disease (vWD):</strong> The most common inherited bleeding disorder. vWF is required for platelet adhesion and stabilizes Factor VIII. Patients present with mucosal bleeding and may have a mildly elevated PTT.</li>
                <li><strong>Disseminated Intravascular Coagulation (DIC):</strong> A state of widespread activation of the coagulation cascade, leading to the consumption of factors and platelets. Results in both thrombosis and hemorrhage. Labs show low fibrinogen and elevated **D-dimer**.</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Thrombosis and Hypercoagulability</h3>
            <p>Thrombosis is the formation of a blood clot within a non-injured vessel or the occlusion of a vessel after minor injury. Factors contributing to thrombosis are summarized by Virchow's Triad: Endothelial injury, Stasis (or turbulent flow), and Hypercoagulability (Study Sheet Page 6).</p>
            
            ::::highyield
            **Factor V Leiden**:
            The most common **hereditary** cause of hypercoagulability (thrombophilia). It is a **mutation** in Factor V that makes it resistant to inactivation by Protein C. This leads to a persistent pro-coagulant state and an increased risk of Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE).
            ::::

            <ul>
                <li><strong>Lines of Zahn:</strong> Alternating layers of platelets/fibrin (light) and RBCs (dark). Their presence indicates that a thrombus formed in **flowing blood** (pre-mortem), as opposed to a post-mortem clot which is gelatinous and lacks these lines.</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Pathoma",
            title: "Hemostasis",
            tags: ["#Pathoma::Chapter_12_Hematology_Anemia::Hemostasis"]
        },
        {
            resource: "Boards and Beyond",
            title: "Coagulation Cascade",
            tags: ["#B&B::10_Hematology::01_Basic_Concepts::04_Coagulation_Cascade"]
        },
        {
            resource: "Sketchy Path",
            title: "Coagulation and Platelet Disorders",
            tags: ["#AK_Step1_v11::#SketchyPath::05_Hematology::03_Coagulation_Disorders"]
        }
    ],
    pearls: [
        {
            title: "ADAMTS13 Mnemonic",
            content: "Think of ADAMTS13 as 'Scissors' that cut vWF. No scissors = giant vWF = too many clots (TTP)."
        },
        {
            title: "PT vs PTT",
            content: "PT (Prothrombin Time) evaluates the **Extrinsic** pathway (Factor VII). PTT (Partial Thromboplastin Time) evaluates the **Intrinsic** pathway (XII, XI, IX, VIII)."
        },
        {
            title: "Lines of Zahn",
            content: "Lines of Zahn = Real Thrombus. No Lines of Zahn = Post-mortem 'currant jelly' clot."
        }
    ],
    flashcards: [
        {
            question: "What is the classic 'pentad' of symptoms in TTP?",
            answer: "Fever, MAHA (schistocytes), Thrombocytopenia, Renal failure, and Neurologic changes."
        },
        {
            question: "Which coagulation factor is deficient in Hemophilia A?",
            answer: "Factor VIII."
        },
        {
            question: "What is the mechanism of the Factor V Leiden mutation?",
            answer: "Mutation makes Factor V resistant to cleavage/inactivation by Activated Protein C."
        },
        {
            question: "Which test is used to detect the degradation of cross-linked fibrin and is elevated in DIC?",
            answer: "D-dimer."
        },
        {
            question: "What is the most common inherited bleeding disorder?",
            answer: "von Willebrand Disease (vWD)."
        }
    ]
});