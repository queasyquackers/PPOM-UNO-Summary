const L11_CONTENT = {
    id: 'l11',
    title: 'Lecture #11: Hypothalamus',
    lecturer: 'V. Grubisic, M.D., Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #11',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Hypothalamus & Limbic'
    },
    prev: 'l10',
    next: 'l12',
    pdf: 'pdfs/Lecture # 11. V. Grubisic, M.D., Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #11_ Hypothalamus - Neuroanatomy, Neuroendocrine and Regional Function Faculty_ V. Grubisic, M.D., Ph.D..srt',
    summary: `
# Lecture #11: Hypothalamus

**Lecturer:** V. Grubisic, M.D., Ph.D.
**Session:** Neuroanatomy

## 1. General Functions (TAN HATS)
**T**hirst, **A**denohypophysis, **N**eurohypophysis, **H**unger, **A**utonomic, **T**emperature, **S**exual/Sleep.

## 2. Major Nuclei and Functions
### Feeding and Arousal
*   **Lateral Hypothalamus:** **Hunger** Center. ("Lateral makes you Lean").
    *   *Lesion:* Anorexia (Starvation).
    *   Contains Orexin (Hypocretin) for arousal (Deficiency = Narcolepsy).
*   **Ventromedial Nucleus:** **Satiety** Center. ("VentroMedial = Very Massive").
    *   *Lesion:* Hyperphagia (Obesity).
*   **Arcuate Nucleus:** Master regulator.
    *   *Orexigenic (Hunger):* NPY / AgRP. (Stimulated by Ghrelin).
    *   *Anorexigenic (Satiety):* POMC / CART. (Stimulated by Leptin).

### Temperature Regulation
*   **Anterior Hypothalamus:** **Cooling** (Parasympathetic). ("**A**nterior = **A**/C").
    *   *Lesion:* Hyperthermia.
*   **Posterior Hypothalamus:** **Heating** (Sympathetic). ("Posterior = Poikilotherm").
    *   *Lesion:* Hypothermia (Unable to conserve heat).

### Endocrine / Water Balance
*   **Supraoptic (SON) & Paraventricular (PVN):**
    *   Make **ADH** (Vasopressin) and **Oxytocin**.
    *   Project to Posterior Pituitary.
    *   *Pathology:*
        *   **Diabetes Insipidus (Central):** Low ADH. Polyuria/Polydipsia.
        *   **SIADH:** High ADH. Hyponatremia.

### Circadian Rhythm
*   **Suprachiasmatic Nucleus (SCN):** "Master Clock". Input from Retina.

### Memory
*   **Mammillary Bodies:** Part of Papez Circuit.
*   **Wernicke-Korsakoff Syndrome:** Thiamine (B1) deficiency (Alcoholics).
    *   *Triad:* Confusion, Ataxia, Ophthalmoplegia.
    *   *Sequelae:* Anterograde Amnesia + Confabulation (Damage to Mammillary bodies).

## 3. Feeding Regulation Hormones (Slide 21)
*   **Leptin:** From Adipose tissue. Signals Satiety (Long-term). Activates POMC.
*   **Ghrelin:** From Stomach. Signals Hunger (Short-term). Activates NPY.
`,
    questions: [
        {
            question: "**1. A patient presents with uncontrolled hyperphagia (overeating) and rapid weight gain (obesity). MRI reveals a tumor compressing a specific hypothalamic nucleus. Which nucleus is most likely affected, leading to a loss of satiety?**",
            options: [
                "Lateral Hypothalamus",
                "Ventromedial Nucleus",
                "Suprachiasmatic Nucleus",
                "Mammillary Bodies",
                "Anterior Hypothalamus"
            ],
            correctAnswer: 1,
            rationale: "From Slide 19/20: The **Ventromedial Nucleus (VMN)** is the Satiety Center. Lesions here cause **Hyperphagia** and Obesity ('Very Massive'). Lesions of the Lateral Hypothalamus cause Anorexia."
        },
        {
            question: "**2. A 55-year-old chronic alcoholic presents with confusion, ataxia, and ophthalmoplegia. MRI shows atrophy of the Mammillary Bodies. What is the underlying nutritional deficiency?**",
            options: [
                "Vitamin B12 (Cobalamin)",
                "Vitamin B1 (Thiamine)",
                "Vitamin B3 (Niacin)",
                "Vitamin C (Ascorbic Acid)",
                "Vitamin D"
            ],
            correctAnswer: 1,
            rationale: "From Slide 16: **Wernicke-Korsakoff Syndrome** is caused by **Thiamine (Vitamin B1)** deficiency, common in alcoholics. It damages the **Mammillary Bodies**, leading to amnesia and the classic triad."
        },
        {
            question: "**3. Which hypothalamic nucleus is considered the 'Master Clock' for circadian rhythms and receives direct input from the retina?**",
            options: [
                "Supraoptic Nucleus",
                "Paraventricular Nucleus",
                "Suprachiasmatic Nucleus",
                "Arcuate Nucleus",
                "Preoptic Nucleus"
            ],
            correctAnswer: 2,
            rationale: "From Slide 17: The **Suprachiasmatic Nucleus (SCN)** regulates circadian rhythms and receives light/dark information directly from the retina."
        },
        {
            question: "**4. A lesion of the Anterior Hypothalamus would most likely result in:**",
            options: [
                "Hypothermia (Inability to generate heat)",
                "Hyperthermia (Inability to dissipate heat)",
                "Polyuria (Diabetes Insipidus)",
                "Narcolepsy",
                "Hyperphagia"
            ],
            correctAnswer: 1,
            rationale: "From Slide 10: The **Anterior** Hypothalamus controls **Cooling** (A/C). Lesions result in **Hyperthermia** because the body cannot dissipate heat. The Posterior Hypothalamus controls Heating."
        },
        {
            question: "**5. Which hormone is secreted by adipose tissue, crosses the blood-brain barrier, and acts on the Arcuate Nucleus to inhibit feeding (anorexigenic)?**",
            options: [
                "Ghrelin",
                "Leptin",
                "Insulin",
                "Cortisol",
                "Neuropeptide Y"
            ],
            correctAnswer: 1,
            rationale: "From Slide 21/22: **Leptin** is produced by fat cells (adipose) and signals long-term energy stores to the brain, inhibiting appetite (Anorexigenic) via the POMC pathway."
        }
    ],
    flashcards: [
        { "front": "Function of Lateral Hypothalamus?", "back": "Hunger Center (Lateral = Lean)", "tag": "Physiology" },
        { "front": "Function of Ventromedial Nucleus?", "back": "Satiety Center (VM = Very Massive)", "tag": "Physiology" },
        { "front": "Function of Anterior Hypothalamus?", "back": "Cooling (A/C)", "tag": "Physiology" },
        { "front": "Function of Posterior Hypothalamus?", "back": "Heating (Poikilothermia)", "tag": "Physiology" },
        { "front": "Nucleus for Circadian Rhythm?", "back": "Suprachiasmatic Nucleus (SCN)", "tag": "Physiology" },
        { "front": "Nuclei producing ADH/Oxytocin?", "back": "Supraoptic (SON) & Paraventricular (PVN)", "tag": "Physiology" },
        { "front": "Structure damaged in Wernicke-Korsakoff?", "back": "Mammillary Bodies", "tag": "Pathology" },
        { "front": "Deficiency causing Wernicke-Korsakoff?", "back": "Thiamine (Vitamin B1)", "tag": "Pathology" },
        { "front": "Hormone from stomach stimulating hunger?", "back": "Ghrelin ('Growling')", "tag": "Physiology" },
        { "front": "Hormone from fat inhibiting hunger?", "back": "Leptin", "tag": "Physiology" }
    ],
    mindmap: `
## Hypothalamic Nuclei
### Feeding
*   **Lateral**: Hunger (Orexin)
*   **Ventromedial**: Satiety
*   **Arcuate**: Regulator (NPY vs POMC)
### Temperature
*   **Anterior**: Cooling (P-Symp)
*   **Posterior**: Heating (Symp)
### Endocrine
*   **SON/PVN**: ADH/Oxytocin (Posterior Pituitary)
*   **Arcuate/Preoptic**: Releasing Factors (Anterior Pituitary)
### Other
*   **SCN**: Circadian Rhythm
*   **Mammillary**: Memory (Papez)
`
};

if (typeof window !== 'undefined') {
    window.L11_CONTENT = L11_CONTENT;
}
