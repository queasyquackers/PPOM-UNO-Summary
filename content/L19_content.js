export const L19_CONTENT = {
    id: "l19",
    summary: `
# Lecture 19: Pharmacology of Direct-Acting Cholinomimetics

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 19

## 1. Cholinergic Receptors (Slide 9-11)
*   **Muscarinic (GPCRs):** Located on effector organs (Heart, Smooth Muscle, Glands).
    *   **M1, M3, M5 (Gq):** Increase Ca2+ (Contraction/Secretion).
    *   **M2, M4 (Gi):** Decrease cAMP (Inhibition/Bradycardia).
*   **Nicotinic (Ion Channels):** Located at Ganglia (Nn) and Neuromuscular Junction (Nm).
    *   Ligand-gated Na+/K+ channels.

## 2. Muscarinic Agonists (Slide 30-33)
"Direct-Acting" means they bind directly to the receptor (unlike AChE inhibitors).

### Choline Esters (Quaternary Amines)
*Poorly absorbed, do not cross BBB.*
*   **Acetylcholine (ACh):** Rapidly hydrolyzed. Used only for **Ophthalmic Surgery** (Miosis).
*   **Methacholine:**
    *   *use:* **Bronchoprovocation Test** to diagnose Asthma. Induces bronchospasm in hyperreactive airways.
*   **Bethanechol:**
    *   *Use:* **Urinary Retention** (Post-op, Post-partum, Neurogenic bladder).
    *   *Mnemonic:* "Bethany, call (chol) me if you want to pee."
*   **Carbachol:** Glaucoma (rarely used). Mixed M and N activity.

### Alkaloids (Tertiary Amines)
*Well absorbed, Cross BBB.*
*   **Pilocarpine:**
    *   *Use:* **Glaucoma** (Opens meshwork via miosis), **Xerostomia** (Sjogren's, Radiation).
    *   *Mnemonic:* "Pile on the sweat and tears."
*   **Cevimeline:** Synthetic M3 agonist. Used for **Sjogren's Syndrome** (Dry mouth).

## 3. Nicotinic Agonists (Slide 36-39)
*   **Nicotine:**
    *   *Action:* Biphasic. Low dose = Stimulation. High dose = Depolarizing Blockade (Paralysis).
    *   *Use:* Smoking Cessation (NRT).
*   **Varenicline (Chantix):**
    *   *Action:* **Partial Agonist** at $\\alpha_4\\beta_2$ neuronal receptors.
    *   *Benefit:* Reduces cravings (agonist effect) AND blocks nicotine from bindings (antagonist effect), reducing reward.

## 4. Adverse Effects & Contraindications (Slide 34)
*   **Muscarinic Toxicity (SLUDGE):**
    *   **S**alivation, **L**acrimation, **U**rination, **D**efecation, **G**I Upset, **E**mesis.
    *   **DANGER:** **Bradycardia** and **Bronchoconstriction**.
*   **Contraindications:**
    *   **Asthma/COPD** (Bronchoconstriction).
    *   **Peptic Ulcer Disease** (Increased Acid).
    *   **GI/Urinary Obstruction** (Risk of rupture).

## 5. Clinical Correlates (Slide 33)

:::correlate
**Sjögren's Syndrome**
*   **Pathology:** Autoimmune destruction of exocrine glands (Salivary, Lacrimal).
*   **Presentation:** Xerostomia (Dry mouth), Keratoconjunctivitis Sicca (Dry eyes).
*   **Treatment:** **Pilocarpine** or **Cevimeline** (Muscarinic Agonists) to stimulate secretion.
:::

:::correlate
**Asthma Diagnosis**
*   **Drug:** **Methacholine**.
*   **Test:** Inhaled methacholine challenge.
*   **Result:** A patient with asthma will bronchoconstrict at a much **lower dose** than a healthy person.
:::
`,
    pearls: [
        {
            title: "Bethanechol Use",
            content: "Non-obstructive **Urinary Retention**. 'Bethany, call me to pee'."
        },
        {
            title: "Pilocarpine Use",
            content: "**Open Angle Glaucoma** and **Sjogren's Syndrome** (Sweat/Saliva)."
        },
        {
            title: "Methacholine Challenge",
            content: "Used to diagnose **Asthma** via induced bronchoconstriction."
        },
        {
            title: "Varenicline Mechanism",
            content: "**Partial Agonist** at $\\alpha_4\\beta_2$ Nicotinic receptors. Reduces withdrawal + Blocks reward."
        },
        {
            title: "Cholinomimetic Contraindications",
            content: "**Asthma** (causes bronchospasm), **Peptic Ulcers** (causes acid), **Obstruction** (causes rupture)."
        }
    ],
    questions: [
        {
            question: "A 55-year-old male with post-operative urinary retention needs medication to help void. Examination confirms no obstruction. Which drug is most appropriate?",
            options: [
                "Methacholine",
                "Atropine",
                "Bethanechol",
                "Pilocarpine",
                "Nicotine"
            ],
            answer: 2,
            explanation: "**Bethanechol** is a direct muscarinic agonist with selectivity for the bladder/GI, used to treat non-obstructive urinary retention."
        },
        {
            question: "A patient being treated for Sjogren's syndrome complains of excessive sweating and diarrhea. This is likely due to which medication?",
            options: [
                "Pilocarpine",
                "Atropine",
                "Scopolamine",
                "Ipratropium",
                "Varenicline"
            ],
            answer: 0,
            explanation: "**Pilocarpine** is used to increase salivation in Sjogren's but is non-selective, causing systemic muscarinic side effects like **sweating** (diaphoresis) and diarrhea."
        },
        {
            question: "Which drug acts as a partial agonist at nicotinic receptors to aid in smoking cessation?",
            options: [
                "Bupropion",
                "Varenicline",
                "Nicotine Patch",
                "Methacholine",
                "Carbachol"
            ],
            answer: 1,
            explanation: "**Varenicline** is a partial agonist at $\\alpha_4\\beta_2$ nicotinic receptors, reducing cravings and withdrawal symptoms."
        },
        {
            question: "Methacholine is primarily used clinically for:",
            options: [
                "Treating Glaucoma",
                "Diagnosing Asthma",
                "Treating Urinary Retention",
                "Smoking Cessation",
                "Treating Alzheimer's"
            ],
            answer: 1,
            explanation: "**Methacholine** is used in the bronchoprovocation challenge test to **diagnose asthma**."
        },
        {
            question: "Direct-acting cholinomimetics should be avoided in patients with which condition?",
            options: [
                "Glaucoma",
                "Xerostomia",
                "Peptic Ulcer Disease",
                "Constipation",
                "Hypertension"
            ],
            answer: 2,
            explanation: "Muscarinic agonists increase gastric acid secretion, which can exacerbate **Peptic Ulcer Disease**."
        }
    ],
    flashcards: [
        {
            front: "Drug for Post-op Urinary Retention",
            back: "Bethanechol",
            tag: "Pharmacology"
        },
        {
            front: "Drug for Diagnosis of Asthma",
            back: "Methacholine",
            tag: "Pharmacology"
        },
        {
            front: "Drug for Sjogren's Syndrome",
            back: "Pilocarpine or Cevimeline",
            tag: "Pharmacology"
        },
        {
            front: "Mechanism of Varenicline",
            back: "Partial Agonist at Nicotinic Receptors",
            tag: "Pharmacology"
        },
        {
            front: "Contraindication for Muscarinic Agonists (Lung)",
            back: "Asthma/COPD",
            tag: "Pharmacology"
        },
        {
            front: "Contraindication for Muscarinic Agonists (GI)",
            back: "Peptic Ulcer Disease or Obstruction",
            tag: "Pharmacology"
        },
        {
            front: "SLUDGE Mnemonic",
            back: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis",
            tag: "Toxicology"
        },
        {
            front: "Pilocarpine Class",
            back: "Muscarinic Agonist (Tertiary Amine)",
            tag: "Pharmacology"
        },
        {
            front: "Bethanechol Class",
            back: "Muscarinic Agonist (Quaternary Amine - No CNS)",
            tag: "Pharmacology"
        },
        {
            front: "Receptors on Sweat Glands",
            back: "Muscarinic (Sympathetic Cholinergic)",
            tag: "Physiology"
        }
    ],
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Parasympathetics > Cholinomimetics",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" },
            { resource: "BandB", chapter: "Pharmacology > ANS > Cholinergic Agonists" }
        ]
    },
    mindmap: `
## Cholinomimetics (Direct)

### Muscarinic Agonists
*   **Esters (No CNS)**
    *   **Bethanechol**: Urinary Retention
    *   **Methacholine**: Asthma Dx
*   **Alkaloids (CNS Entry)**
    *   **Pilocarpine**: Glaucoma, Sjogren's (Sweat/Saliva)
    *   **Cevimeline**: Sjogren's

### Nicotinic Agonists
*   **Nicotine**: Smoking Cessation
*   **Varenicline**: Partial Agonist (Cravings)

### Toxicity (SLUDGE)
*   Salivation, Lacrimation, Urination, Diarrhea
*   **Killer Side Effects**: Bronchospasm, Bradycardia

### Contraindications
*   Asthma, Ulcers, Obstruction
\`
};
