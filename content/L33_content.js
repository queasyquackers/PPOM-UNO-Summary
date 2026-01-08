const L33_CONTENT = {
    id: 'l33',
    title: 'Lecture #33: Sympathomimetics Part 1',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #33',
    prev: 'l32',
    next: 'l34',
    pdf: 'pdfs/Lecture # 33. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #33_ Pharmacology_ Sympathomimetics Part 1 Faculty_ L. Goldstein, Pharm.D..srt',
    summary: `
# Lecture #33: Sympathomimetics Part 1

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #33

## 1. Classification (Slide 7)
**Direct-Acting:** Bind and activate adrenergic receptors.
**Indirect-Acting:** Increase synaptic NE (release, block reuptake, block degradation).
**Mixed-Acting:** Both mechanisms.

## 2. Structure-Activity (Slide 23)
*   **Catecholamines** (DA, NE, Epi): 3,4-dihydroxy on benzene ring.
    *   **Metabolized by COMT** (breaks down catechols).
    *   **Not orally active** (first-pass metabolism).
*   **Non-Catecholamines:** Resistant to COMT. Longer duration. Oral bioavailability.
*   **Alpha Substitution:** ↑ CNS penetration (Amphetamine, Ephedrine).
*   **Beta Substitution:** ↑ Beta-2 selectivity (Albuterol).

## 3. Cardiovascular Physiology (Slides 13-15)
*   **CO = HR × SV**
*   **MAP = CO × TPR**
*   **Baroreceptor Reflex:** ↑ BP → ↑ Vagal tone → ↓ HR (Bradycardia). ↓ BP → ↑ Sympathetic → ↑ HR (Tachycardia).

## 4. Vasopressors (Slides 25-38)

:::highyield
**Epinephrine (Epi)**
*   **Receptors:** α1 = α2 = β1 = β2 (Non-selective).
*   **Cardiovascular:**
    *   **Low Dose:** β2 vasodilation (skeletal muscle) → ↓ DBP. β1 → ↑ HR, ↑ SV, ↑ CO.
    *   **High Dose:** α1 vasoconstriction dominates → ↑ SBP, ↑ DBP, ↑ MAP → Reflex Bradycardia.
*   **Respiratory:** β2 → Bronchodilation.
*   **Metabolic:** ↑ Glucose, ↑ FFA, ↓ K⁺.
*   **Uses:**
    *   **Anaphylaxis (DOC):** IM/Intranasal. Never contraindicated.
    *   Cardiac arrest (IV).
    *   Asthma (nebulizer).
*   **Adverse Effects:** Tachycardia, Arrhythmias, Angina (↑ O₂ demand), Cerebral hemorrhage (if high dose).
:::

:::highyield
**Norepinephrine (NE)**
*   **Receptors:** α1 = α2 > β1 >>> β2.
*   **Cardiovascular:**
    *   **Vasoconstriction** (α1) → ↑ TPR → ↑ Afterload → ↑ SBP, ↑ DBP, ↑ MAP.
    *   **Venoconstriction** → ↑ Preload.
    *   **Modest ↑ CO** (β1 inotropy, but reflex bradycardia limits HR).
*   **Uses:**
    *   **Septic Shock (DOC):** First-line for circulatory shock with low peripheral resistance.
*   **Adverse Effects:** Organ ischemia, Digital gangrene, Arrhythmias, Extravasation necrosis.
:::

:::highyield
**Dopamine**
*   **Dose-Dependent:**
    *   **Low (1-5 mcg/kg/min):** D1 → Renal/Mesenteric vasodilation.
    *   **Intermediate (5-10):** β1 → ↑ Contractility. Releases NE.
    *   **High (>10):** α1 → Vasoconstriction.
*   **Uses:** Alternative to NE in select shock patients.
*   **Adverse Effects:** Tachycardia, Arrhythmias.
:::

:::drug
**Phenylephrine**
*   **Receptor:** Selective α1 agonist.
*   **Effect:** Pure vasoconstriction → ↑ SBP, ↑ DBP. **Reflex Bradycardia** (no direct cardiac effect).
*   **Uses:**
    *   Shock refractory to other vasopressors.
    *   Nasal decongestant (topical).
:::

## 5. Other Direct Agonists (Slides 24)

:::drug
**Dobutamine (β1 Agonist)**
*   **Effect:** ↑ Inotropy, ↑ CO. Minimal chronotropy.
*   **Uses:**
    *   Acute decompensated heart failure (short-term).
    *   Pharmacologic stress test.
*   **Caution:** ↑ O₂ demand (risk in CAD).
:::

:::drug
**Isoproterenol (Non-selective β)**
*   **Receptors:** β1 = β2.
*   **Effect:** ↑ HR, ↑ CO, Vasodilation (β2) → ↓ DBP.
*   **Rarely used** (replaced by safer alternatives).
:::

`,
    questions: [
        {
            question: "**1. Which vasopressor is the drug of choice for anaphylactic shock?**",
            options: [
                "Norepinephrine",
                "Epinephrine",
                "Dopamine",
                "Phenylephrine",
                "Dobutamine"
            ],
            correctAnswer: 1,
            rationale: "**Epinephrine** is the drug of choice for anaphylaxis. It causes bronchodilation (β2), increases cardiac output (β1), causes vasoconstriction (α1/α2) to reverse hypotension, and stabilizes mast cells. It is **never contraindicated** in anaphylaxis. (Slide 32, 34)"
        },
        {
            question: "**2. A patient in septic shock is started on norepinephrine. Which cardiovascular parameter will DECREASE?**",
            options: [
                "Heart Rate",
                "Systolic Blood Pressure",
                "Diastolic Blood Pressure",
                "Cardiac Output",
                "Total Peripheral Resistance"
            ],
            correctAnswer: 0,
            rationale: "Norepinephrine causes profound vasoconstriction (α1) → ↑ MAP. This triggers a **baroreceptor reflex** → ↑ Vagal tone → **↓ Heart Rate** (reflex bradycardia), even though NE has β1 effects. The reflex overcomes the direct chronotropic effect. (Slide 36)"
        },
        {
            question: "**3. Low-dose dopamine (2 mcg/kg/min) primarily acts on which receptor?**",
            options: [
                "D1 receptors",
                "β1 receptors",
                "α1 receptors",
                "β2 receptors",
                "α2 receptors"
            ],
            correctAnswer: 0,
            rationale: "At low doses (1-5 mcg/kg/min), dopamine selectively activates **D1 receptors** in the renal and mesenteric vasculature, causing vasodilation and increased renal blood flow. (Slide 40)"
        },
        {
            question: "**4. Epinephrine at LOW doses causes a decrease in diastolic blood pressure due to:**",
            options: [
                "α1-mediated vasoconstriction",
                "β2-mediated vasodilation in skeletal muscle",
                "β1-mediated increase in heart rate",
                "Reflex vagal activation",
                "D1-mediated renal vasodilation"
            ],
            correctAnswer: 1,
            rationale: "At low doses, epinephrine preferentially activates **β2 receptors** in skeletal muscle vasculature → vasodilation → ↓ peripheral resistance → ↓ diastolic blood pressure. At high doses, α1 vasoconstriction dominates. (Slide 29)"
        },
        {
            question: "**5. A patient is given phenylephrine IV for hypotension. What change in heart rate is expected?**",
            options: [
                "Marked increase (direct β1 effect)",
                "No change",
                "Decrease (reflex bradycardia)",
                "Biphasic (initial increase, then decrease)",
                "Depends on the dose"
            ],
            correctAnswer: 2,
            rationale: "Phenylephrine is a **pure α1 agonist** with no direct cardiac effects. It causes vasoconstriction → ↑ BP → **baroreceptor reflex** → ↑ vagal tone → **reflex bradycardia** (decreased heart rate). (Slide 24, implied)"
        }
    ],
    flashcards: [
        { "front": "Epinephrine receptor affinity?", "back": "α1 = α2 = β1 = β2 (Non-selective)", "tag": "Pharm" },
        { "front": "Norepinephrine receptor affinity?", "back": "α1 = α2 > β1 >>> β2", "tag": "Pharm" },
        { "front": "Drug of choice for Anaphylaxis?", "back": "Epinephrine (IM/Intranasal)", "tag": "Pharm" },
        { "front": "Drug of choice for Septic Shock?", "back": "Norepinephrine", "tag": "Pharm" },
        { "front": "Phenylephrine selectivity?", "back": "Selective α1 agonist", "tag": "Pharm" },
        { "front": "Dobutamine selectivity?", "back": "β1 agonist (inotrope)", "tag": "Pharm" },
        { "front": "Low-dose Dopamine effect?", "back": "D1 activation → Renal vasodilation", "tag": "Pharm" },
        { "front": "Why does NE cause bradycardia?", "back": "Reflex response to ↑ MAP (baroreceptor)", "tag": "Pharm" },
        { "front": "Catecholamine metabolized by?", "back": "COMT (and MAO)", "tag": "Pharm" },
        { "front": "Epinephrine low dose effect on DBP?", "back": "Decreases (β2 vasodilation)", "tag": "Pharm" }
    ],
    mindmap: `
## Sympathomimetics Part 1
### Classification
*   **Direct**: Bind receptors
*   **Indirect**: ↑ NE release/block reuptake
*   **Mixed**: Both
### Vasopressors
*   **Epinephrine**: Anaphylaxis. α=β.
*   **Norepinephrine**: Septic shock. α>β.
*   **Dopamine**: Dose-dependent (D1/β1/α1).
*   **Phenylephrine**: α1 only. Reflex brady.
### Inotropes
*   **Dobutamine**: β1. Heart failure.
*   **Isoproterenol**: β1=β2. Rarely used.
`
,
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Sympathomimetics",
        alternatives: [
            { "resource": "BandB", "chapter": "Pharmacology > Autonomic > Sympathetics" },
            { "resource": "FirstAid", "chapter": "Pharmacology > Autonomic Drugs" }
        ]
    }
,
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Sympathomimetics",
        alternatives: [
            { "resource": "BandB", "chapter": "Pharmacology > Autonomic > Sympathetics" },
            { "resource": "FirstAid", "chapter": "Pharmacology > Autonomic Drugs" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L33_CONTENT = L33_CONTENT;
}
