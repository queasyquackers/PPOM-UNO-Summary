export const L39_CONTENT = {
    id: "l39",
    summary: `
# Lecture 39: Pharmacology - Adrenergic Antagonists

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 39

## 1. Alpha-Adrenergic Antagonists (Alpha Blockers)
*   **Non-Selective (Alpha-1 & Alpha-2):**
    *   **Phenoxybenzamine:** **Irreversible** (Covalent bond). Long duration. Used pre-op for **Pheochromocytoma** (prevents hypertensive crisis).
    *   **Phentolamine:** Competitive (Reversible). Used for **Epinephrine Reversal** (local anesthetic overdose) and Pheochromocytoma diagnosis/surgery.
    *   *Side Effects:* Severe Orthostatic Hypotension, **Reflex Tachycardia** (due to Alpha-2 block increasing NE release).
*   **Selective Alpha-1 Blockers (-zosins):**
    *   **Prazosin, Terazosin, Doxazosin:** Used for HTN (add-on) and BPH.
    *   **Tamsulosin (Flomax):** Alpha-1A selective ( Prostate specific). Used for **BPH** (less hypotension).
    *   *Adverse Effects:* **First-Dose Effect** (Syncope/Severe Orthostatis) $\\to$ Take at bedtime! **Floppy Iris Syndrome** (Cataract surgery risk).
*   **Selective Alpha-2 Antagonist:**
    *   **Yohimbine:** Increases NE release (blocks feedback). "Aphrodisiac". Causes anxiety/tremor.

## 2. Beta-Adrenergic Antagonists (Beta Blockers)
*   **Non-Selective (Beta-1 & Beta-2):**
    *   **Propranolol:** Lipophilic (CNS effects: nightmares/sedation). Used for Migraine prophylaxis, Performance Anxiety (Stage fright), Thyroid Storm.
    *   *Contraindication:* **Asthma/COPD** (Bronchoconstriction via B2).
*   **Beta-1 Selective (Cardioselective):** ("A-M" - Atenolol, Metoprolol, Esmolol).
    *   Safer in lung disease.
*   **Combined Alpha/Beta Blockers:**
    *   **Labetalol, Carvedilol:** Block Alpha-1 (Vasodilation) + Beta-1/2.
    *   *Use:* **CHF** (Carvedilol decreases mortality), Hypertensive Emergencies (Labetalol).

## 3. Key Pharmacology Concepts
*   **Epinephrine Reversal:**
    *   Normal Epi: Increases BP (Alpha-1 vasoconstriction > Beta-2 dilation).
    *   Epi + Alpha Blocker: **Decreases BP** (Alpha blocked, unmasks Beta-2 vasodilation).
*   **Diabetes & Beta Blockers:**
    *   Beta blockers **MASK** symptoms of hypoglycemia (tachycardia, tremors).
    *   Non-selectives delay recovery from hypoglycemia (block liver gluconeogenesis).
*   **Withdrawal:**
    *   **NEVER** stop abruptly. Chronic use UPREGULATES receptors.
    *   Sudden stop $\\to$ Rebound HTN, Angina, MI, Sudden Death.

## 4. Therapeutic Uses Summary
| Indication | Preferred Agents | Mechanism |
| :--- | :--- | :--- |
| **Hypertension** | Metoprolol, Atenolol | Decrease CO, Renin inhibition. |
| **Angina/MI** | Metoprolol, Carvedilol | Decrease O2 demand (HR/Contractility). |
| **CHF** | **Carvedilol**, Metoprolol Succinate, Bisoprolol | Block sympathetic remodeling. Increase survival. |
| **BPH** | Tamsulosin, Doxazosin | Relax prostate smooth muscle (Alpha-1). |
| **Pheochromocytoma** | Phenoxybenzamine | Irreversible Alpha block before surgery. |
| **Glaucoma** | Timolol | Decrease aqueous production. |
`,
    pearls: [
        {
            title: "Epinephrine Reversal",
            content: "Giving an Alpha Blocker (Phentolamine) *before* Epinephrine turns Epi's Pressor effect into a **Depressor** effect (BP drops due to unopposed Beta-2 vasodilation)."
        },
        {
            title: "First Dose Effect",
            content: "Alpha-1 blockers (Prazosin/Terazosin) cause severe orthostatic hypotension on the first dose. **Counseling:** Take the first dose at **Bedtime**."
        },
        {
            title: "Beta Blocker Withdrawal",
            content: "Chronic beta blockade causes receptor **Upregulation**. Abrupt withdrawal leads to supersensitivity = **Rebound Hypertension / MI**. Always TAPER."
        },
        {
            title: "Diabetes & Beta Blockers",
            content: "Beta blockers mask the 'warning signs' of hypoglycemia (palpitations, tremors, anxiety). Sweating (Cholinergic) is the only sign that remains."
        },
        {
            title: "Pheochromocytoma Rule",
            content: "Always give **Alpha** blockers BEFORE Beta blockers. (A before B). Giving Beta first leaves Alpha unopposed $\\to$ Hypertensive Crisis."
        }
    ],
    questions: [
        {
            question: "A patient with Pheochromocytoma is scheduled for surgery. Which drug is most appropriate for preoperative management to prevent hypertensive crisis?",
            options: [
                "Propranolol",
                "Phenoxybenzamine",
                "Atenolol",
                "Prazosin",
                "Yohimbine"
            ],
            answer: 1,
            explanation: "**Phenoxybenzamine** is an **Irreversible** alpha blocker. It is the gold standard for pheochromocytoma pre-op to prevent catecholamine surges."
        },
        {
            question: "A 65-year-old male is started on Terazosin for BPH. What important counseling point must be provided?",
            options: [
                "Take on an empty stomach because food reduces absorption.",
                "Take with grapefruit juice to enhance effect.",
                "Take the first dose at bedtime to avoid syncope.",
                "Discontinue immediately if nasal congestion occurs.",
                "Expect heart rate to decrease significantly."
            ],
            answer: 2,
            explanation: "**First-Dose Effect:** Alpha-1 blockers cause significant orthostatic hypotension/syncope initially. Taking it at **bedtime** mitigates the risk of falling."
        },
        {
            question: "Which of the following beta blockers also possesses Alpha-1 blocking activity, providing additional vasodilation?",
            options: [
                "Metoprolol",
                "Atenolol",
                "Carvedilol",
                "Timolol",
                "Esmolol"
            ],
            answer: 2,
            explanation: "**Carvedilol** and **Labetalol** trigger 'Combined' blockade (Beta-1, Beta-2, and Alpha-1). This provides vasodilation + heart rate control."
        },
        {
            question: "A diabetic patient taking insulin is prescribed a beta blocker. They should be warned that the drug might mask which symptom of hypoglycemia?",
            options: [
                "Sweating",
                "Hunger",
                "Tachycardia",
                "Confusion",
                "Fatigue"
            ],
            answer: 2,
            explanation: "**Tachycardia** and tremors are mediated by the sympathetic response to hypoglycemia. Beta blockers mask these. **Sweating** (cholinergic) is usually preserved."
        },
        {
            question: "The phenomenon known as 'Epinephrine Reversal' describes a drop in blood pressure when Epinephrine is administered in the presence of:",
            options: [
                "A Beta Blocker",
                "An Alpha Blocker",
                "A Muscarinic Agonist",
                "A Ganglionic Blocker",
                "A Calcium Channel Blocker"
            ],
            answer: 1,
            explanation: "An **Alpha Blocker** (like Phentolamine) blocks the vasoconstriction (Alpha-1) of Epi, leaving the vasodilation (Beta-2) unopposed $\\to$ BP drop."
        }
    ],
    flashcards: [
        {
            front: "Phenoxybenzamine Mechanism",
            back: "Irreversible Alpha Blocker",
            tag: "Pharmacology"
        },
        {
            front: "First Dose Effect Drug Class",
            back: "Alpha-1 Blockers (-zosins)",
            tag: "Pharmacology"
        },
        {
            front: "A-M Beta Blockers (Atenolol, Metoprolol)",
            back: "Beta-1 Selective (Cardioselective)",
            tag: "Pharmacology"
        },
        {
            front: "Carvedilol / Labetalol Mechanism",
            back: "Mixed Alpha-1 and Beta Blockers",
            tag: "Pharmacology"
        },
        {
            front: "Epinephrine Reversal Cause",
            back: "Epi + Alpha Blocker (Unmasks Beta-2 Vasodilation)",
            tag: "Pharmacology"
        },
        {
            front: "Hypoglycemia Signs Masked by Beta Blockers",
            back: "Tachycardia, Tremors, Anxiety",
            tag: "Pharmacology"
        },
        {
            front: "Hypoglycemia Sign SPARED by Beta Blockers",
            back: "Sweating (Cholinergic)",
            tag: "Pharmacology"
        },
        {
            front: "Pheochromocytoma Pre-op Drug",
            back: "Phenoxybenzamine",
            tag: "Pharmacology"
        }
    ],
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Adrenergic Antagonists",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" }
        ]
    },
    mindmap: `
## Adrenergic Antagonists

### Alpha Blockers
*   **Non-Selective**: Phenoxybenzamine (Irreversible, Pheo), Phentolamine (Reversible, Epi Reversal).
*   **Alpha-1 Selective**: -zosins (BPH, HTN). *First Dose Syncope*. Tamsulosin (Prostate specific).
*   **Alpha-2 Selective**: Yohimbine.

### Beta Blockers
*   **Non-Selective**: Propranolol (Migraine, Thyrotoxicosis). *Avoid in Asthma*.
*   **Beta-1 Selective**: Metoprolol, Atenolol. (Cardioselective).
*   **Mixed (Alpha/Beta)**: Carvedilol, Labetalol. (CHF, HTN Emergency).

### Concepts
*   **Epinephrine Reversal**: Alpha block leaves Beta-2 unopposed (BP Drop).
*   **Diabetes**: Masks hypoglycemia (except sweating).
*   **Withdrawal**: Rebound HTN (Upregulation).
\`
};
