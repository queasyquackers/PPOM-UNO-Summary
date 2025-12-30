const L19_CONTENT = {
    id: 'l19',
    title: 'Lecture #19: Direct Cholinomimetics',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #19',
    prev: 'l18',
    next: 'l20',
    pdf: 'pdfs/Lecture # 19. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #19_ Pharmacology Direct-Acting Cholinomimetics; Presenter_ L.Goldstein.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Pharmacology > Autonomic Drugs > Cholinomimetics'
    },
    summary: `
# Lecture #19: Direct Cholinomimetics

**Lecturer:** Leslie Goldstein, Pharm.D.
**Session:** Pharmacology

## 1. Receptors & Physiology
*   **Muscarinic (GPCRs):**
    *   **M1 (Gq):** CNS, Enteric NS.
    *   **M2 (Gi):** Heart (↓HR, ↓Contractility of atria).
    *   **M3 (Gq):** Glands (Secretion), Smooth Muscle (Contraction), Endothelium (Vasodilation via NO).
*   **Nicotinic (Ionotropic - Na+/K+):**
    *   **Nn:** Ganglia, Adrenal Medulla.
    *   **Nm:** Neuromuscular Junction (Skeletal Muscle).

## 2. Direct-Acting Agonists (Choline Esters)
*   **Acetylcholine:** Rapidly hydrolyzed. Used typically for ophthalmic surgery (Miosis).
*   **Methacholine:**
    *   *Use:* **Bronchoprovocation test** for Asthma diagnosis.
    *   *Mechanism:* Induces bronchospasm in susceptible patients.
*   **Bethanechol:** (B for Bladder/Bowels)
    *   *Use:* Non-obstructive Urinary Retention (Post-op/Post-partum), Neurogenic bladder.
    *   *Action:* Activates Bowel/Bladder smooth muscle (M3).
*   **Carbachol:** (C for Carbon copy of ACh)
    *   *Use:* Glaucoma (miosis), Ophthalmic surgery.
    *   *Note:* Has Nicotinic activity too.

## 3. Direct-Acting Agonists (Alkaloids)
*   **Pilocarpine:**
    *   *Use:* **Glaucoma** (Acute angle-closure emergency), **Sjögren's Syndrome** (Xerostomia), Radiation-induced dry mouth.
    *   *Action:* Potent stimulator of sweat, tears, saliva. "You cry, drool, and sweat on your 'Pillow' (Pilocarpine)."
*   **Cevimeline:** (Synthetic)
    *   *Use:* Sjögren's Syndrome (Dry mouth).
    *   *Note:* M3 selective.

## 4. Nicotinic Agonists
*   **Nicotine:**
    *   *Action:* Ganglionic stimulation (Sympathetic & Parasympathetic).
    *   *Toxicity:* Convulsions, Coma, Respiratory arrest.
*   **Varenicline (Chantix):**
    *   *Mechanism:* Partial Agonist at α4β2 nicotinic receptors.
    *   *Use:* Smoking Cessation. Reduces cravings/withdrawal + blocks reward of nicotine.

## 5. Clinical Correlates
:::correlate
**Sjögren's Syndrome**
*   **Pathology:** Autoimmune destruction of exocrine glands.
*   **Symptoms:** Dry mouth (Xerostomia), Dry eyes (Keratoconjunctivitis sicca).
*   **Treatment:** **Pilocarpine** or **Cevimeline** (Muscarinic Agonists) to stimulate secretions.
:::

:::correlate
**Contraindications**
*   **Asthma/COPD:** Risk of bronchoconstriction.
*   **Peptic Ulcer:** Increases acid secretion.
*   **GI/Urinary Obstruction:** Risk of perforation if pushing against a blockage.
:::
`,
    questions: [
        {
            question: "**1. A patient with post-operative urinary retention (non-obstructive) would most benefit from which agent?**",
            options: [
                "Methacholine",
                "Pilocarpine",
                "Bethanechol",
                "Nicotine",
                "Atropine"
            ],
            correctAnswer: 2,
            rationale: "**Bethanechol** is the drug of choice for stimulating the atonic bladder (M3 receptors) to promote voiding in non-obstructive urinary retention."
        },
        {
            question: "**2. Which drug is used as a diagnostic challenge test for asthma?**",
            options: [
                "Carbachol",
                "Methacholine",
                "Pilocarpine",
                "Edrophonium",
                "Albuterol"
            ],
            correctAnswer: 1,
            rationale: "**Methacholine** is used in the bronchoprovocation test. It induces bronchoconstriction; a positive test at low doses indicates bronchial hyperreactivity (Asthma)."
        },
        {
            question: "**3. A patient with Sjögren's syndrome complains of severe dry mouth. Which drug stimulates salivary secretion?**",
            options: [
                "Atropine",
                "Scopolamine",
                "Pilocarpine",
                "Succinylcholine",
                "Mecamylamine"
            ],
            correctAnswer: 2,
            rationale: "**Pilocarpine** is a potent muscarinic agonist used to treat xerostomia (dry mouth) in Sjögren's syndrome."
        },
        {
            question: "**4. Varenicline helps in smoking cessation by acting as a:**",
            options: [
                "Full Agonist at Muscarinic receptors",
                "Antagonist at Nicotinic receptors",
                "Partial Agonist at α4β2 Nicotinic receptors",
                "Cholinesterase Inhibitor",
                "Dopamine Antagonist"
            ],
            correctAnswer: 2,
            rationale: "**Varenicline** is a partial agonist at α4β2 nicotinic receptors. It reduces cravings (agonist effect) while blocking the reward from smoked nicotine (antagonist effect)."
        },
        {
            question: "**5. Which of the following is a contraindication for the use of muscarinic agonists like bethanechol?**",
            options: [
                "Xerostomia",
                "Glaucoma",
                "Urinary Tract Obstruction",
                "Neurogenic Bladder",
                "Constipation"
            ],
            correctAnswer: 2,
            rationale: "Muscarinic agonists increase bladder pressure. In the presence of a **mechanical obstruction** (e.g., stones, tumor), this can cause bladder rupture or renal damage."
        }
    ],
    flashcards: [
        { "front": "Drug for Urinary Retention (Non-obstructive)?", "back": "Bethanechol", "tag": "Pharm" },
        { "front": "Drug for Asthma Challenge Test?", "back": "Methacholine", "tag": "Pharm" },
        { "front": "Drug for Glaucoma & Sjögren's?", "back": "Pilocarpine", "tag": "Pharm" },
        { "front": "MOA of Varenicline?", "back": "Partial Nicotinic Agonist (α4β2)", "tag": "Pharm" },
        { "front": "Receptor M3 location/function?", "back": "Glands (secrete), Smooth Muscle (contract), Endothelium (vasodilate)", "tag": "Pharm" },
        { "front": "Receptor M2 location/function?", "back": "Heart (Decrease HR/Contractility)", "tag": "Pharm" },
        { "front": "Contraindication for Cholinomimetics (GI/GU)?", "back": "Obstruction", "tag": "Pharm" },
        { "front": "Contraindication for Cholinomimetics (Lung)?", "back": "Asthma/COPD", "tag": "Pharm" },
        { "front": "Effect of M3 on Eye?", "back": "Miosis (Pupil constriction) + Accommodation (Ciliary muscle contraction)", "tag": "Pharm" },
        { "front": "Uses of Pilocarpine?", "back": "Glaucoma, Xerostomia (Sjogren's)", "tag": "Pharm" }
    ],
    mindmap: `
## Direct Cholinomimetics
### Choline Esters
*   **Bethanechol**: Bladder/Bowel Atony (M3)
*   **Methacholine**: Asthma Challenge
*   **Carbachol**: Glaucoma
### Alkaloids
*   **Pilocarpine**: Glaucoma (Emergency), Sjogren's (Sweat/Tears)
*   **Muscarine**: Poisonous Mushrooms
### Nicotinic
*   **Nicotine**: Ganglionic stimulant
*   **Varenicline**: Smoking Cessation (Partial Agonist)
### Receptors
*   **M1**: CNS/Enteric
*   **M2**: Heart (Inhibitory - Gi)
*   **M3**: Everywhere else (Excitatory - Gq)
`
};

if (typeof window !== 'undefined') {
    window.L19_CONTENT = L19_CONTENT;
}
