const L39_CONTENT = {
    id: 'l39',
    title: 'Lecture #39: Adrenergic Antagonists',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #39',
    prev: 'l38',
    next: 'l40',
    pdf: 'pdfs/Lecture # 39. L. Goldstein, Pharm.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #39_ Pharmacology_ Adrenergic Antagonists; Presenter_ L.Goldstein.srt',
    summary: `
# Lecture #39: Adrenergic Antagonists

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #39

## 1. Alpha Blockers

### Non-Selective (α1 + α2)

:::drug
**Phenoxybenzamine**
*   **Mechanism:** **Irreversible** α-antagonist (covalent bond).
*   **Uses:** Pheochromocytoma (presurgical management).
*   **PK:** Oral. t½ ~24h. Duration 3-4 days.
*   **Adverse Effects:** Marked orthostatic hypotension, Tachycardia (α2 block → ↑ NE release).
:::

:::drug
**Phentolamine**
*   **Mechanism:** **Competitive** (reversible) non-selective α-antagonist.
*   **Uses:**
    *   Intraoperative hypertension (pheochromocytoma).
    *   Extravasation of vasopressor (infiltration).
    *   Reversal of dental local anesthetic (infiltration).
*   **PK:** IV/IM. Short-acting (t½ ~20 min).
:::

:::highyield
**Epinephrine Reversal**
*   **Concept:** After α-blockade, epinephrine's pressor effect (α1 vasoconstriction) is blocked → Unopposed β2 vasodilation → **Depressor response** (↓ BP).
*   **Phenylephrine (α1 only):** Response is suppressed but **not reversed** (no β activity).
:::

### Selective α1 Blockers

:::highyield
**Quinazolines: Prazosin, Terazosin, Doxazosin**
*   **Mechanism:** Selective α1 antagonists.
*   **Uses:**
    *   **Hypertension** (add-on, not first-line).
    *   **BPH** (Benign Prostatic Hyperplasia): Relax smooth muscle in prostate/bladder neck → Improve urine flow.
*   **Adverse Effects:**
    *   **First-Dose Effect:** Marked orthostatic hypotension (1st dose or first few doses). **Advise bedtime dosing**.
    *   **Intraoperative Floppy Iris Syndrome (IFIS):** Relaxation of iris dilator muscle during cataract surgery.
    *   Nasal stuffiness, Impaired ejaculation.
:::

:::drug
**Tamsulosin / Silodosin**
*   **Mechanism:** Selective **α1A** antagonists.
*   **Use:** **BPH only** (not for hypertension).
*   **Advantage:** Less pronounced effect on standing BP.
*   **Note:** Tamsulosin has sulfonamide moiety → Avoid in sulfa allergy.
:::

### α2 Antagonist

:::drug
**Yohimbine**
*   **Mechanism:** Competitive α2 antagonist (opposite of Clonidine).
*   **Effects:** ↑ BP, ↑ HR, Tremors, Anxiety.
*   **Use:** Herbal product for erectile dysfunction (efficacy not clearly demonstrated).
:::

## 2. Beta Blockers

### Classification
*   **Non-selective (β1 + β2):** Propranolol, Nadolol.
*   **β1-Selective:** Metoprolol, Atenolol, Esmolol, Bisoprolol.
*   **Non-selective + α1 block:** Labetalol, Carvedilol.

:::highyield
**Cardiovascular Effects**
*   **β1 Blockade (Heart):**
    *   ↓ HR (Chronotropy).
    *   ↓ Contractility (Inotropy).
    *   ↓ AV node conduction.
    *   **↓ Renin release** (kidney β1) → ↓ Angiotensin II → ↓ BP.
*   **β2 Blockade (Lungs, Vessels):**
    *   **Bronchoconstriction** (avoid in asthma/COPD).
    *   Prevents β2 vasodilation → ↑ peripheral resistance (short-term).
:::

### Therapeutic Uses

:::highyield
**Hypertension**
*   ↓ CO, ↓ Renin release.

**Angina Pectoris**
*   ↓ O₂ demand (↓ HR, ↓ contractility).

**Acute MI**
*   ↓ Sympathetic input → Improves morbidity/mortality.

**Heart Failure (CHF)**
*   Compensated heart failure with reduced ejection fraction. ↓ Sympathetic drive.

**Arrhythmias**
*   Slow AV conduction. Treat SVT, ventricular arrhythmias.

**Hyperthyroidism**
*   ↓ Tachycardia, palpitations, tremor (β-receptor upregulation).

**Glaucoma**
*   ↓ Aqueous humor production.

**Migraine Prophylaxis**
*   Mechanism unclear.

**Performance Anxiety**
*   ↓ Somatic symptoms (tremor, tachycardia).

**Esophageal Varices**
*   ↓ Portal hypertension (non-selective β-blockers).
:::

### Adverse Effects

:::warning
**Bradycardia**
*   Direct effect.

**Bronchoconstriction**
*   β2 block. **Avoid in asthma/COPD**.

**Masking Hypoglycemia**
*   β2 block masks tachycardia, tremor, sweating. **Caution in diabetics**.

**Lipid Abnormalities**
*   Modest ↑ triglycerides, ↓ HDL.

**CNS Effects**
*   Fatigue, depression, insomnia (lipophilic: Propranolol, Metoprolol).
:::

:::warning
**Abrupt Withdrawal → Severe Rebound**
*   **Mechanism:** Upregulation of β-receptors (supersensitivity).
*   **Result:** Severe hypertension, Angina, MI, Arrhythmia, Sudden death.
*   **Management:** **Taper slowly** over several weeks.
:::

### Special Beta Blockers

:::drug
**Propranolol**
*   Non-selective (β1 = β2).
*   **Lipophilic** → CNS penetration (fatigue, depression).
*   **Membrane stabilizing** effect (high dose).
:::

:::drug
**Metoprolol**
*   **β1-Selective** (at therapeutic doses).
*   **Lipophilic** → CNS effects.
*   Loses selectivity at high doses.
:::

:::drug
**Labetalol / Carvedilol**
*   **Non-selective β + α1 blockade**.
*   **Use:** Acute hypertension (including pregnancy).
*   **Advantage:** Vasodilation (α1) + ↓ CO (β).
:::

`,
    questions: [
        {
            question: "**1. A patient with pheochromocytoma is given an alpha blocker followed by epinephrine. What happens to blood pressure?**",
            options: [
                "Increases (pressor response)",
                "Decreases (depressor response)",
                "No change",
                "Increases then decreases",
                "Depends on the dose"
            ],
            correctAnswer: 1,
            rationale: "This is **Epinephrine Reversal**. Alpha blockade prevents EPI's α1 vasoconstriction → Unopposed **β2 vasodilation** → Blood pressure **decreases** (depressor response). (Slide 13, 14, 15)"
        },
        {
            question: "**2. A patient is started on Prazosin for hypertension. What instruction is most important?**",
            options: [
                "Take with food",
                "Avoid grapefruit juice",
                "Take the first dose at bedtime",
                "Monitor blood glucose",
                "Increase salt intake"
            ],
            correctAnswer: 2,
            rationale: "Prazosin causes **first-dose effect** (marked orthostatic hypotension). Patients should **take the first dose at bedtime** to avoid syncope during peak drug levels. (Slide 26)"
        },
        {
            question: "**3. Which beta blocker is MOST appropriate for a patient with asthma and hypertension?**",
            options: [
                "Propranolol",
                "Nadolol",
                "Metoprolol",
                "None - beta blockers are contraindicated",
                "Labetalol"
            ],
            correctAnswer: 2,
            rationale: "**Metoprolol** is **β1-selective** (at therapeutic doses), minimizing β2 blockade and thus reducing bronchoconstriction risk. Non-selective β-blockers (Propranolol, Nadolol) are contraindicated in asthma/COPD. Even β1-selective agents should be used with caution. (Slide 29, 35)"
        },
        {
            question: "**4. A diabetic patient on insulin is started on propranolol. What adverse effect should be monitored?**",
            options: [
                "Hyperglycemia",
                "Masking of hypoglycemia symptoms",
                "Increased insulin sensitivity",
                "Diabetic ketoacidosis",
                "Weight loss"
            ],
            correctAnswer: 1,
            rationale: "Beta blockers (β2 block) **mask symptoms of hypoglycemia** (tachycardia, tremor, sweating). Patients may not recognize hypoglycemia → Dangerous for insulin-dependent diabetics. (Slide 35)"
        },
        {
            question: "**5. What is the mechanism of rebound hypertension after abrupt beta blocker withdrawal?**",
            options: [
                "Increased renin release",
                "Beta-receptor upregulation (supersensitivity)",
                "Alpha-receptor downregulation",
                "Sodium retention",
                "Increased sympathetic tone"
            ],
            correctAnswer: 1,
            rationale: "Chronic β-blockade → **Upregulation of β-receptors** (adaptive response). Abrupt withdrawal → Receptors are supersensitive to endogenous catecholamines → **Severe rebound hypertension**, angina, MI, arrhythmia. **Taper slowly**. (Slide 35)"
        }
    ],
    flashcards: [
        { "front": "Phenoxybenzamine mechanism?", "back": "Irreversible α-antagonist (covalent)", "tag": "Pharm" },
        { "front": "Phenoxybenzamine use?", "back": "Pheochromocytoma (presurgical)", "tag": "Pharm" },
        { "front": "Epinephrine reversal?", "back": "α-block → Unopposed β2 vasodilation → ↓ BP", "tag": "Pharm" },
        { "front": "Prazosin first-dose effect?", "back": "Marked orthostatic hypotension (take at bedtime)", "tag": "Pharm" },
        { "front": "Tamsulosin use?", "back": "BPH only (α1A blocker, not for HTN)", "tag": "Pharm" },
        { "front": "Beta blockers cardiac effects?", "back": "↓ HR, ↓ Contractility, ↓ AV conduction, ↓ Renin", "tag": "Pharm" },
        { "front": "Beta blockers in asthma?", "back": "Avoid (β2 block → Bronchoconstriction)", "tag": "Pharm" },
        { "front": "Beta blockers mask hypoglycemia?", "back": "Yes (β2 block masks tachycardia, tremor)", "tag": "Pharm" },
        { "front": "Beta blocker withdrawal risk?", "back": "Rebound HTN (β-receptor upregulation). Taper slowly", "tag": "Pharm" },
        { "front": "Labetalol mechanism?", "back": "Non-selective β + α1 block", "tag": "Pharm" }
    ],
    mindmap: `
## Adrenergic Antagonists
### Alpha Blockers
*   **Non-selective**: Phenoxybenzamine (irreversible), Phentolamine
*   **α1 Selective**: Prazosin, Terazosin, Doxazosin (HTN, BPH)
*   **α1A**: Tamsulosin (BPH only)
*   **First-dose effect**: Orthostatic hypotension
### Beta Blockers
*   **Non-selective**: Propranolol
*   **β1-Selective**: Metoprolol
*   **β + α1**: Labetalol, Carvedilol
### Uses
*   **HTN, Angina, MI, CHF, Arrhythmias**
*   **Glaucoma, Migraine, Performance anxiety**
### Adverse Effects
*   **Bronchoconstriction** (avoid asthma)
*   **Mask hypoglycemia**
*   **Rebound on withdrawal** (taper!)
`
};

if (typeof window !== 'undefined') {
    window.L39_CONTENT = L39_CONTENT;
}
