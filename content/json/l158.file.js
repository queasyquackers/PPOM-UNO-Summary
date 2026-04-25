window.receiveLectureContent({
    title: "Lecture 158: Hemostasis",
    date: "11/08",
    time: "9:00am - 10:00am",
    presenters: ["Kaylee Bressler OMS III, Academic Medicine Scholar", "E. Petcu, M.D."],
    module: "Hematology",
    summary: `
        <div class="summary-section">
            <p><strong>Overview of Hemostasis</strong></p>
            <p>Hemostasis is the physiological process that stops bleeding at the site of vascular injury while maintaining blood in a fluid state within the rest of the circulation. It is broadly divided into primary hemostasis (formation of the platelet plug) and secondary hemostasis (the coagulation cascade). Under normal conditions, the endothelium is antithrombotic, releasing nitric oxide and prostacyclin to prevent platelet adhesion (Slide 15-85).</p>
        </div>

        <div class="summary-section">
            <h3>Primary Hemostasis: The Platelet Plug</h3>
            <p>Primary hemostasis involves the rapid formation of a platelet plug. This process occurs in four distinct steps: transient vasoconstriction, platelet adhesion, platelet activation, and platelet aggregation (Slide 86-148).</p>
            <ul>
                <li><strong>Adhesion:</strong> Injury exposes subendothelial collagen. **von Willebrand Factor (vWF)**, released from **Weibel-Palade bodies** (endothelium) and alpha granules (platelets), binds to the collagen. Platelets then adhere to vWF via the **GpIb** receptor (Slide 98-113).</li>
                <li><strong>Activation and Secretion:</strong> Adhered platelets change shape and release granules. **Dense granules** release ADP and calcium, while **alpha granules** release vWF and fibrinogen (Slide 114-139).</li>
                <li><strong>Aggregation:</strong> ADP binds to the **P2Y12** receptor, which triggers the expression of the **GpIIb/IIIa** receptor on the platelet surface. GpIIb/IIIa then binds **fibrinogen**, acting as a bridge to link multiple platelets together (Slide 140-161).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Secondary Hemostasis and Fibrinolysis</h3>
            <p>Secondary hemostasis involves the sequential activation of clotting factors (the coagulation cascade), ultimately converting soluble fibrinogen into an insoluble **fibrin** mesh that stabilizes the primary platelet plug (Slide 33-51).</p>
            <ul>
                <li><strong>Coagulation Pathways:</strong> The extrinsic pathway is triggered by **Tissue Factor**, while the intrinsic pathway involves factors XII, XI, IX, and VIII. Both pathways converge on the common pathway (X, V, II, I). **Thrombin (Factor IIa)** is the central enzyme that converts fibrinogen to fibrin and activates many other factors.</li>
                <li><strong>Regulation:</strong> The process is tightly controlled by natural anticoagulants. **Antithrombin III** inhibits thrombin and other factors, while **Protein C and S** (activated by the thrombin-thrombomodulin complex) inactivate factors Va and VIIIa (Slide 71-77).</li>
                <li><strong>Fibrinolysis:</strong> Once the vessel is repaired, the clot is dissolved. **tPA** (tissue plasminogen activator) converts plasminogen to **plasmin**, which then cleaves fibrin into degradation products (e.g., D-dimers) (Slide 78-82).</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Pathoma",
            title: "Hemostasis Overview",
            tags: ["#Pathoma::Chapter_12_Hematology_Anemia::Hemostasis"]
        },
        {
            resource: "Boards and Beyond",
            title: "Coagulation Cascade",
            tags: ["#B&B::10_Hematology::01_Basic_Concepts::04_Coagulation_Cascade"]
        },
        {
            resource: "First Aid",
            title: "Coagulation Cascade",
            tags: ["#FirstAid::Hematology::Pathology::Coagulation_Cascade"]
        }
    ],
    pearls: [
        {
            title: "GpIb vs GpIIb/IIIa",
            content: "Remember: **GpIb** is for **Adhesion** (Platelet-to-vWF). **GpIIb/IIIa** is for **Aggregation** (Platelet-to-Platelet via Fibrinogen)."
        },
        {
            title: "vWF Storage",
            content: "von Willebrand Factor is stored in **Weibel-Palade bodies** within endothelial cells and **Alpha-granules** within platelets."
        },
        {
            title: "The Role of Calcium",
            content: "Calcium (Factor IV) is a required cofactor for almost every step of the coagulation cascade. It is released from platelet **dense granules**."
        }
    ],
    flashcards: [
        {
            question: "Which receptor on platelets is responsible for binding to von Willebrand Factor?",
            answer: "GpIb."
        },
        {
            question: "What is the primary ligand that bridges platelets during aggregation?",
            answer: "Fibrinogen (binding to GpIIb/IIIa)."
        },
        {
            question: "Which factor is the primary initiator of the extrinsic coagulation pathway?",
            answer: "Tissue Factor (Factor III)."
        },
        {
            question: "How do Protein C and S inhibit the coagulation cascade?",
            answer: "They inactivate factors Va and VIIIa."
        },
        {
            question: "What enzyme is responsible for the degradation of a fibrin clot during fibrinolysis?",
            answer: "Plasmin."
        }
    ]
});