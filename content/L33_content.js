export const L33_CONTENT = {
    id: "l33",
    summary: `
# Lecture 33: Sympathomimetics I - Direct Agonists

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 33

## 1. Receptors & Physiology
* **$\\alpha_1$ (Gq)**:**Vasoconstriction** (Skin/Splanchnic), **Mydriasis** (Pupil Dilation), Urinary Sphincter Contraction.
* **$\\alpha_2$ (Gi)**:** Presynaptic **Inhibition** (Decreases NE release).
* **$\\beta_1$ (Gs)**:**Heart** ($\\uparrow$ HR, $\\uparrow$ Contractility), Kidney ($\\uparrow$ Renin).
* **$\\beta_2$ (Gs)**:**Bronchodilation**, **Vasodilation** (Skeletal Muscle), Uterine Relaxation (Tocolysis).
* **$\\beta_3$ (Gs)**:** Bladder Detrusor Relaxation.

## 2. Direct-Acting Sympathomimetics


| Drug | Receptors | Action | Clinical Use |
| :--- | :--- | :--- | :--- |
| **Epinephrine** | $\\alpha, \\beta$ | Low Dose: $\\beta_2$ (Hypotension). High Dose: $\\alpha_1$ (Hyperstension). | **Anaphylaxis (DOC)**, Cardiac Arrest. |
| **Norepinephrine** | $\\alpha_1 = \\alpha_2 > \\beta_1$ | Potent Vasoconstriction. Reflex Bradycardia. | **Septic Shock (DOC)**. |
| **Dopamine** | D1 > $\\beta_1$ > $\\alpha_1$ | Low: Renal Vasodilation. Med: Inotropy. High: Vasoconstriction. | Shock (Renal sparing theoretically), Heart Failure. |
| **Dobutamine** | $\\beta_1 > \\beta_2$ | $\\uparrow$ Inotropy > Chronotropy. | **Heart Failure** (Decompensated), Stress Testing. |
| **Phenylephrine** | $\\alpha_1$ | Vasoconstriction. | Nasal Decongestant, Hypotension, Mydriasis. |
| **Isoproterenol** | $\\beta_1 = \\beta_2$ | $\\uparrow$ HR, Vasodilation ($\\downarrow$ DBP). | Bradycardia, Heart block (Rarely used). |

## 3. Hemodynamics (Key Concepts)
* **Mean Arterial Pressure (MAP)**:** $\\text{CO} \\times \\text{TPR}$.
* **Pulse Pressure**:** $\\text{Systolic} - \\text{Diastolic}$.
* **Epinephrine Reversal**:** Giving an $\\alpha$-blocker before Epinephrine converts its pressor effect ($\\alpha_1$) to a depressor effect ($\\beta_2$ unmasked) → Hypotension.
* **Reflex Bradycardia**:** Pure $\\alpha_1$ agonists (Phenylephrine/Norepinephrine) cause massive vasoconstriction → $\\uparrow$ BP → Baroreceptors fire → Reflex $\\downarrow$ HR.

## 4. Clinical Pearls
* **Anaphylaxis**:** Epinephrine is the ONLY first-line drug. Prevents shock ($\\alpha_1$), opens airway ($\\beta_2$), stops mast cells.
* **Septic Shock**:** Norepinephrine is first-line to restore MAP.
* **Tachyphylaxis**:** Rapidly diminishing response to successive doses (seen with Indirect agonists like Tyramine/Ephedrine, less so with direct).
`,
    pearls: [
        {
            title: "Epinephrine Dosage Effects",
            content: "**Low** Dose = **Beta-2** Dominant (Vasodilation/Hypotension).\\n**High** Dose = **Alpha-1** Dominant (Vasoconstriction/Hypertension)."
        },
        {
            title: "Norepinephrine vs Epinephrine",
            content: "Norepinephrine has **NO** Beta-2 activity. It causes pure vasoconstriction and reflex bradycardia. Epinephrine has Beta-2 activity (Bronchodilation)."
        },
        {
            title: "Dopamine Dosing",
            content: "**Low** (Renal): D1.\\n**Medium** (Cardiac): Beta-1.\\n**High** (Pressor): Alpha-1."
        },
        {
            title: "Phenylephrine Reflex",
            content: "A pure **Alpha-1** agonist (Phenylephrine) increases BP but causes **Reflex Bradycardia** (lowers HR)."
        },
        {
            title: "Beta-1 Selectivity",
            content: "**Dobutamine** is a Beta-1 agonist used for **Heart Failure** to increase contractility without massively increasing Heart Rate (Chronotropy)."
        }
    ],
    questions: [
        {
            question: "A patient in septic shock requires a vasopressor to maintain Mean Arterial Pressure (MAP). Which agent is the first-line choice due to its potent alpha-1 and beta-1 activity with minimal beta-2 effects?",
            options: [
                "Epinephrine",
                "Dopamine",
                "Norepinephrine",
                "Phenylephrine",
                "Isoproterenol"
            ],
            correctAnswer: 2,
            rationale: "**Norepinephrine** is the Drug of Choice (DOC) for Septic Shock. It provides strong vasoconstriction (alpha-1) and some inotropy (beta-1) without the hypotension associated with beta-2 stimulation."
        },
        {
            question: "A patient is given a drug that increases Systolic BP, decreases Diastolic BP, and increases Heart Rate. Which drug fits this profile?",
            options: [
                "Phenylephrine",
                "Norepinephrine",
                "Isoproterenol",
                "Clonidine",
                "Propranolol"
            ],
            correctAnswer: 2,
            rationale: "**Isoproterenol** is a non-selective **Beta agonist** (Beta-1 and Beta-2). Beta-1 increases SBP and HR. Beta-2 causes vasodilation, dropping DBP. "
        },
        {
            question: "Phenylephrine is administered intravenously. What represents the expected cardiovascular response?",
            options: [
                "Increased BP, Increased HR",
                "Increased BP, Decreased HR",
                "Decreased BP, Increased HR",
                "Decreased BP, Decreased HR",
                "No change in BP, Increased HR"
            ],
            correctAnswer: 1,
            rationale: "Phenylephrine is a pure **Alpha-1** agonist. It increases TPR and BP. The body responds with **Reflex Bradycardia** (Decreased HR)."
        },
        {
            question: "Which receptor subtype is primarily responsible for the bronchodilatory effects of Epinephrine used in anaphylaxis?",
            options: [
                "Alpha-1",
                "Alpha-2",
                "Beta-1",
                "Beta-2",
                "Dopamine-1"
            ],
            correctAnswer: 3,
            rationale: "**Beta-2** receptors mediate bronchodilation (and skeletal muscle vasodilation). Alpha-1 mediates the vasoconstriction that supports BP."
        },
        {
            question: "Dobutamine is primarily used in the setting of:",
            options: [
                "Anaphylactic Shock",
                "Septic Shock",
                "Decompensated Heart Failure",
                "Hypertension",
                "Asthma"
            ],
            correctAnswer: 2,
            rationale: "**Dobutamine** (Beta-1 > Beta-2) is an inotrope used to increase cardiac output in **Decompensated Heart Failure** or cardiogenic shock."
        }
    ],
    flashcards: [
        {
            front: "Epinephrine Receptor Profile",
            back: "Alpha-1, Alpha-2, Beta-1, Beta-2",
            tag: "Pharmacology"
        },
        {
            front: "Norepinephrine Receptor Profile",
            back: "Alpha-1 > Alpha-2 > Beta-1 (NO Beta-2)",
            tag: "Pharmacology"
        },
        {
            front: "Phenylephrine Receptor Profile",
            back: "Pure Alpha-1 Agonist",
            tag: "Pharmacology"
        },
        {
            front: "Isoproterenol Receptor Profile",
            back: "Beta-1 = Beta-2 (Non-selective Beta)",
            tag: "Pharmacology"
        },
        {
            front: "Dobutamine Use",
            back: "Heart Failure (Inotropy)",
            tag: "Pharmacology"
        },
        {
            front: "Drug of Choice for Anaphylaxis",
            back: "Epinephrine",
            tag: "Pharmacology"
        },
        {
            front: "Drug of Choice for Septic Shock",
            back: "Norepinephrine",
            tag: "Pharmacology"
        },
        {
            front: "Reflex response to Phenylephrine",
            back: "Bradycardia (Decreased HR)",
            tag: "Pharmacology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Pharmacology > Autonomic Drugs > Sympathomimetics",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" }
        ]
    },
    mindmap: `
## Sympathomimetics

### Direct Agonists
* **Epinephrine**: Anaphylaxis. A/B non-selective.
* **Norepinephrine**: Septic Shock. A1 > B1. No B2.
* **Dopamine**: Dose dependent (Renal → Heart → Pressor).
* **Dobutamine**: Heart Failure. B1 > B2.
* **Phenylephrine**: Pressor / Decongestant. A1.
* **Isoproterenol**: Bradycardia. B1 = B2.

### Receptors
* **Alpha-1**: Vasoconstrict.
* **Beta-1**: Heart (+Inotropy).
* **Beta-2**: Lungs (Open), Vessels (Dilate).
\`
};

if (typeof window !== 'undefined') {
    window.L33_CONTENT = L33_CONTENT;
}
