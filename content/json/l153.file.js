window.receiveLectureContent({
    title: "Lecture 153: Pharmacology of Anemias",
    date: "11/06",
    time: "9:00am - 10:00am",
    presenters: ["L. Goldstein, Pharm.D."],
    module: "Pharmacology",
    summary: `
        <div class="summary-section">
            <p><strong>Iron Physiology and Absorption</strong></p>
            <p>Iron is a critical component of hemoglobin, and its balance is primarily regulated through intestinal absorption. The body has no active mechanism for iron excretion, so absorption in the duodenum is tightly controlled. Dietary iron exists in two forms: **heme iron** (found in animal products) and **non-heme iron** (found in plants). Heme iron is highly soluble and readily absorbed, while non-heme iron (Fe3+, ferric) requires an acidic environment or a reducing agent like **Vitamin C** to be converted to the absorbable **Fe2+ (ferrous)** form (Slide 65-103).</p>
            <ul>
                <li><strong>Transporters:</strong> Iron enters enterocytes via the **Divalent Metal Transporter 1 (DMT1)**. It is then either stored as **ferritin** or exported into the bloodstream via **ferroportin**. Once in the blood, it is transported by **transferrin** to the bone marrow for RBC production (Slide 113-134).</li>
                <li><strong>Inhibitors:</strong> Absorption is inhibited by polyphenols/tannins (found in coffee and tea) and calcium (found in dairy). High gastric pH (e.g., from proton pump inhibitors) also impairs the absorption of non-heme iron (Slide 104-111).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Hepcidin and Anemia of Chronic Disease</h3>
            <p><strong>Hepcidin</strong> is a key peptide hormone produced by the liver that acts as the primary regulator of systemic iron homeostasis. In states of chronic inflammation (e.g., infection, cancer, autoimmune disease), inflammatory cytokines stimulate the liver to overproduce hepcidin (Slide 140-143).</p>
            <ul>
                <li><strong>Mechanism:</strong> Hepcidin binds to and triggers the degradation of **ferroportin**. This prevents iron from being exported out of enterocytes and macrophages, effectively sequestering iron in storage. This leads to low serum iron despite adequate total body iron stores (Slide 140-143).</li>
            </ul>
        </div>

        <div class="summary-section">
            <h3>Pharmacotherapy of Anemias</h3>
            <p>The goal of therapy is to replace iron stores and address the underlying cause of the deficiency. Oral supplementation is the first-line treatment for iron deficiency due to its safety and low cost. Intravenous iron is reserved for patients with severe malabsorption, ongoing significant blood loss, or intolerance to oral therapy (Slide 145-163).</p>
            <ul>
                <li><strong>Oral Iron:</strong> Best taken on an **empty stomach** to maximize absorption. Patients should be counseled about common side effects, including metallic taste, nausea, constipation, and black/tarry stools.</li>
                <li><strong>Erythropoiesis Stimulating Agents (ESAs):</strong> Drugs like epoetin alfa mimic natural EPO. They are primarily used in patients with chronic kidney disease or chemotherapy-induced anemia.</li>
                <li><strong>Hydroxyurea:</strong> Used in sickle cell disease to increase the production of **fetal hemoglobin (HbF)**, which reduces the polymerization of sickle hemoglobin (HbS) and prevents vaso-occlusive crises.</li>
            </ul>
        </div>
    `,
    anking: [
        {
            resource: "Sketchy Pharm",
            title: "Iron, B12, and Folate",
            tags: ["#AK_Step1_v11::#SketchyPharm::05_Hematology_&_Oncology::01_Anemias::01_Iron_B12_and_Folate"]
        },
        {
            resource: "Boards and Beyond",
            title: "Iron Absorption",
            tags: ["#B&B::10_Hematology::01_Basic_Concepts::03_Iron_Absorption"]
        },
        {
            resource: "Pathoma",
            title: "Microcytic Anemia",
            tags: ["#Pathoma::Chapter_12_Hematology_Anemia::Microcytic_Anemia"]
        }
    ],
    pearls: [
        {
            title: "Vitamin C and Iron",
            content: "Taking Vitamin C (ascorbic acid) with iron supplements enhances absorption by maintaining iron in its reduced **ferrous (Fe2+)** state."
        },
        {
            title: "Hepcidin's Role",
            content: "Hepcidin is the body's 'iron lock'. In chronic inflammation, it 'locks' iron inside macrophages and enterocytes by destroying the ferroportin 'gate'."
        },
        {
            title: "Stool Changes with Iron",
            content: "Patients should be warned that iron supplements will turn their stool black or dark green. This is harmless but can be mistaken for a GI bleed (melena)."
        }
    ],
    flashcards: [
        {
            question: "Which form of iron is absorbed by the intestinal DMT1 transporter?",
            answer: "Ferrous iron (Fe2+)."
        },
        {
            question: "What is the primary export protein for iron on the basal surface of enterocytes?",
            answer: "Ferroportin."
        },
        {
            question: "How does hepcidin regulate iron levels?",
            answer: "It binds to ferroportin and causes its internalization and degradation, trapping iron inside cells."
        },
        {
            question: "What is the primary dietary source of highly absorbable heme iron?",
            answer: "Animal products (meat, poultry, fish)."
        },
        {
            question: "Why is oral iron often poorly tolerated by patients?",
            answer: "It commonly causes gastrointestinal side effects like nausea, constipation, and abdominal pain."
        }
    ]
});