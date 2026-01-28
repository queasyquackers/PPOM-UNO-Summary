export const L11_CONTENT = {
    id: "l11",
    summary: `
# Lecture 11: Hypothalamus

**Lecturer:** V. Grubisic, M.D., Ph.D.
**Session:** Lecture 11

## 1. Hypothalamus Overview (Slide 6-8)

The Hypothalamus is the master control center for **Homeostasis**, regulating the Autonomic Nervous System, Endocrine System, and Limbic System.
Mnemonic for Functions: **TAN HATS**
*   **T**hirst and Water Balance
*   **A**denohypophysis Control
*   **N**eurohypophysis Control
*   **H**unger
*   **A**utonomic Regulation
*   **T**emperature Regulation
*   **S**exual urges / **S**leep

## 2. Major Nuclei and Functions (Slide 9-16)

* **Paraventricular Nucleus (PVN)**:** Produces Oxytocin, ADH, TRH, CRH. Projects to autonomic centers.
* **Supraoptic Nucleus (SON)**:** Produces mainly **ADH** (Vasopressin) and Oxytocin.
* **Suprachiasmatic Nucleus (SCN)**:** Master **Circadian Clock**. Regulated by light input from retina.
* **Anterior Hypothalamus**:** Cooling (Parasympathetic). Lesion → Hyperthermia. "A/C = Anterior Cooling".
* **Posterior Hypothalamus**:** Heating (Sympathetic). Lesion → Hypothermia (Poikilothermia).
* **Mammillary Bodies**:** Episodic Memory. Input from Hippocampus (Fornix).

:::correlate
**Wernicke-Korsakoff Syndrome**
* **Cause**:**Thiamine (Vitamin B1)** deficiency, often due to chronic alcoholism.
* **Pathology**:** Degeneration of the **Mammillary Bodies** and Medial Dorsal Thalamus.
* **Triad**:** Confusion, Ataxia, Ophthalmoplegia (Wernicke's Encephalopathy).
* **Sequelae**:** Korsakoff's Psychosis (Anterograde/Retrograde Amnesia + Confabulation) if untreated.
:::

## 3. Feeding Regulation (Slide 19-22)

* **Lateral Hypothalamus**:**Hunger Center**. Lesion → **Anorexia** ("Lateral makes you Lean").
* **Ventromedial Nucleus**:**Satiety Center**. Lesion → **Hyperphagia** and Obesity ("Ventromedial makes you Very Massive").
* **Hormones**:**
    * **Leptin**:** From adipose tissue. Signals satiety (inhibits Lateral, stimulates Ventromedial).
    * **Ghrelin**:** From stomach. Signals hunger.

## 4. Water Balance Disorders (Slide 12)

* **Diabetes Insipidus (DI)**:**
    * **  *Neurogenic**:* Lack of **ADH** secretion (Hypothalamic/Posterior Pituitary damage).
    * **  *Sxs**:* Polyuria, Polydipsia, Dilute Urine.
* **SIADH (Syndrome of Inappropriate ADH)**:**
    * **  *Cause**:* Ectopic production (Small Cell Lung Cancer), CNS disorders, Drugs.
    * **  *Sxs**:* Water retention, **Hyponatremia**, Cerebral Edema.

:::highyield
**Mnemonic: Feeding Centers**
*   **L**ateral = **L**ean (Hunger Center; lesion causes starvation).
*   **V**entromedial = **V**ery **M**assive (Satiety Center; lesion causes obesity).
:::
`,
    pearls: [
        {
            title: "Hypothalamic Feeding Centers",
            content: "**Lateral Hypothalamus (LH):** Hunger Center. Lesion = Starvation (Lateral makes you Lean).\\n**Ventromedial Nucleus (VMN):** Satiety Center. Lesion = Obesity (VMN makes you Very Massive)."
        },
        {
            title: "Temperature Regulation",
            content: "**Anterior Hypothalamus:** Cooling (Parasympathetic). Lesion = Hyperthermia.\\n**Posterior Hypothalamus:** Heating (Sympathetic). Lesion = Hypothermia."
        },
        {
            title: "Wernicke-Korsakoff Anatomy",
            content: "Caused by **Thiamine (B1)** deficiency leading to necrosis of the **Mammillary Bodies**."
        },
        {
            title: "Circadian Rhythm",
            content: "Controlled by the **Suprachiasmatic Nucleus (SCN)**, which receives direct input from the retina."
        },
        {
            title: "ADH Production",
            content: "ADH is synthesized in the **Supraoptic** and **Paraventricular** nuclei and released from the **Posterior Pituitary**."
        }
    ],
    questions: [
        {
            question: "A chronic alcoholic presents with confusion, ataxia, and nystagmus. MRI reveals atrophy of the Mammillary Bodies. What is the most likely diagnosis?",
            options: [
                "Alzheimer's Disease",
                "Parkinson's Disease",
                "Wernicke's Encephalopathy",
                "Huntington's Disease",
                "Vascular Dementia"
            ],
            correctAnswer: 2,
            rationale: "This is the classic presentation of **Wernicke's Encephalopathy** due to Thiamine deficiency, which damages the mammillary bodies."
        },
        {
            question: "A patient develops hyperphagia and significant obesity after a brain tumor resection. Which hypothalamic nucleus was most likely damaged?",
            options: [
                "Lateral Hypothalamus",
                "Supraoptic Nucleus",
                "Ventromedial Nucleus",
                "Suprachiasmatic Nucleus",
                "Anterior Hypothalamus"
            ],
            correctAnswer: 2,
            rationale: "The **Ventromedial Nucleus** is the Satiety Center. Damage leads to unchecked hunger and obesity ('Very Massive')."
        },
        {
            question: "Which hypothalamic nucleus is responsible for circadian rhythms?",
            options: [
                "Arcuate Nucleus",
                "Suprachiasmatic Nucleus",
                "Paraventricular Nucleus",
                "Posterior Hypothalamus",
                "Mammillary Nucleus"
            ],
            correctAnswer: 1,
            rationale: "The **Suprachiasmatic Nucleus (SCN)** regulates sleep-wake cycles and circadian rhythms."
        },
        {
            question: "Damage to the Anterior Hypothalamus would result in:",
            options: [
                "Hypothermia",
                "Hyperthermia",
                "Diabetes Insipidus",
                "Amnesia",
                "Insomnia"
            ],
            correctAnswer: 1,
            rationale: "The **Anterior** Hypothalamus regulates **Cooling**. Damage prevents cooling, resulting in **Hyperthermia**."
        },
        {
            question: "In neurogenic Diabetes Insipidus, there is a lack of which hormone?",
            options: [
                "Oxytocin",
                "Prolactin",
                "ADH (Vasopressin)",
                "TSH",
                "GH"
            ],
            correctAnswer: 2,
            rationale: "Neurogenic Diabetes Insipidus causes polyuria due to a failure to secrete **ADH (Vasopressin)** from the posterior pituitary/hypothalamus."
        }
    ],
    flashcards: [
        {
            front: "Function of Lateral Hypothalamus",
            back: "Hunger (Feeding Center)",
            tag: "Physiology"
        },
        {
            front: "Function of Ventromedial Hypothalamus",
            back: "Satiety",
            tag: "Physiology"
        },
        {
            front: "Function of Anterior Hypothalamus",
            back: "Cooling (Parasympathetic)",
            tag: "Physiology"
        },
        {
            front: "Function of Posterior Hypothalamus",
            back: "Heating (Sympathetic/Shivering)",
            tag: "Physiology"
        },
        {
            front: "Function of Suprachiasmatic Nucleus (SCN)",
            back: "Circadian Rhythms",
            tag: "Physiology"
        },
        {
            front: "Function of Mammillary Bodies",
            back: "Episodic Memory (Papez Circuit)",
            tag: "Physiology"
        },
        {
            front: "Lesion of Mammillary Bodies causes",
            back: "Wernicke-Korsakoff Syndrome (Amnesia/Confabulation)",
            tag: "Pathology"
        },
        {
            front: "Lesion of Lateral Hypothalamus causes",
            back: "Anorexia (Failure to eat)",
            tag: "Pathology"
        },
        {
            front: "Lesion of Ventromedial Hypothalamus causes",
            back: "Hyperphagia (Obesity)",
            tag: "Pathology"
        },
        {
            front: "Major hormones of Posterior Pituitary",
            back: "ADH (Vasopressin) and Oxytocin",
            tag: "Physiology"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Endermo > Hypothalamus",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Hypothalamus" },
            { resource: "Pathoma", chapter: "CNS" }
        ]
    },
    mindmap: `
## Hypothalamus

### Nuclei
* **Anterior**: Cooling
* **Posterior**: Heating
* **Lateral**: Hunger
* **Ventromedial**: Satiety
* **SCN**: Circadian Rhythm
* **Mammillary**: Memory

### Hormones (PVN/SON)
* **ADH**: Water Retention
    * **  Deficiency**: Diabetes Insipidus
    * **  Excess**: SIADH
* **Oxytocin**: Uterine Contraction

### Clinical
* **Wernicke-Korsakoff**: Thiamine Deficiency, Mammillary Bodies
* **Obesity**: Leptin Resistance, VMN damage
* **Craniopharyngioma**: Compression causes Hypopituitarism
\`
};

if (typeof window !== 'undefined') {
    window.L11_CONTENT = L11_CONTENT;
}
