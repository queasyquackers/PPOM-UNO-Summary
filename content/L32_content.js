export const L32_CONTENT = {
    id: "l32",
    summary: `
# Lecture 32: Cerebellum

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture 32

## 1. Neuroanatomy
*   **Organization:** Cortex (3 layers) covering Deep Nuclei.
*   **Deep Nuclei (Lateral to Medial):** "**D**on't **E**at **G**reasy **F**ood".
    *   **D**entate.
    *   **E**mboliform.
    *   **G**lobose.
    *   **F**astigial.
*   **Circuits:**
    *   **Inputs:**
        *   **Mossy Fibers:** From Spinal cord/Brainstem. Excitatory (**Glutamate**).
        *   **Climbing Fibers:** From **Inferior Olive**. Excitatory (**Glutamate**).
    *   **Processing:**
        *   **Purkinje Cells:** The sole *output* of the cerebellar cortex. Releases **GABA** (Inhibitory) onto Deep Nuclei.
    *   **Output:**
        *   Deep Nuclei send final signal to Thalamus/Brainstem.

## 2. Functional Divisions & Pathology
| Division | Anatomy | Function | Lesion Symptoms |
| :--- | :--- | :--- | :--- |
| **Vestibulo-cerebellum** | Flocculonodular Lobe | Balance, Eye movements | Vertigo, **Nystagmus**, Wide-based gait (Truncal Ataxia). |
| **Spino-cerebellum** | Vermis & Paravermis | Posture, Trunk/Limb Gait | **Ataxic Gait** ("Drunk walk"). **Alcoholism** damages Anterior Lobe (Vermis). |
| **Cerebro-cerebellum** | Lateral Hemispheres | Fine motor planning | **Intention Tremor**, Dysmetria, **Dysdiadochokinesia**. |

## 3. Clinical Syndromes
*   **Essential Tremor:**
    *   Most common movement disorder. Familial (Autosomal Dominant).
    *   **Postural/Action Tremor** (worse when holding a cup).
    *   *Note:* Improves with **Alcohol**. (Often self-medicated).
*   **Intention Tremor:**
    *   Cerebellar lesion. Tremor worsens *as you approach target*.
*   **Resting Tremor:**
    *   Basal Ganglia (Parkinson's).

## 4. DANISH Mnemonic (Cerebellar Signs)
*   **D**ysdiadochokinesia (Can't do rapid alternating movements).
*   **A**taxia.
*   **N**ystagmus.
*   **I**ntention Tremor.
*   **S**peech (Slurred/Scanning).
*   **H**ypotonia.
`,
    pearls: [
        {
            title: "Deep Nuclei Mnemonic",
            content: "**D**on't **E**at **G**reasy **F**ood (Lateral to Medial):\\n**D**entate, **E**mboliform, **G**lobose, **F**astigial."
        },
        {
            title: "Cerebellar Hemisphere vs Vermis",
            content: "**Lateral** lesions affect **Limbs** (fall Toward side of lesion).\\n**Medial (Vermis)** lesions affect **Trunk** (Truncal Ataxia, fall anywhere)."
        },
        {
            title: "Alcoholic Cerebellar Degeneration",
            content: "Chronic alcohol use specifically damages the **Anterior Lobe (Vermis)**, causing a wide-based ataxic gait."
        },
        {
            title: "Essential Tremor",
            content: "Action tremor (eating/writing). Improves with Alcohol. Tx: Beta-blockers."
        },
        {
            title: "Output of Cerebellar Cortex",
            content: "**Purkinje Cells** are the ONLY output of the cortex. They are **Inhibitory (GABA)**."
        }
    ],
    questions: [
        {
            question: "A chronic alcoholic presents with a wide-based, staggering gait but normal arm coordination. Which region of the cerebellum is most likely degenerated?",
            options: [
                "Flocculonodular Lobe",
                "Anterior Lobe (Vermis)",
                "Lateral Hemisphere",
                "Dentate Nucleus",
                "Inferior Olive"
            ],
            answer: 1,
            explanation: "Chronic alcoholism typically causes atrophy of the **Anterior Lobe (Vermis)**, leading to **Truncal Ataxia** and gait issues while sparing the limbs (Lateral Hemispheres)."
        },
        {
            question: "Which of the following describes the output of Purkinje cells?",
            options: [
                "Excitatory (Glutamate) to Deep Nuclei",
                "Inhibitory (GABA) to Deep Nuclei",
                "Excitatory (Glutamate) to Thalamus",
                "Inhibitory (GABA) to Thalamus",
                "Excitatory (Acetylcholine) to Spinal Cord"
            ],
            answer: 1,
            explanation: "**Purkinje Cells** provide **Inhibitory (GABA)** input to the Deep Cerebellar Nuclei, modulating the final output."
        },
        {
            question: "A patient cannot rapidly supinate and pronate their hand (Dysdiadochokinesia) on the left side. Where is the lesion?",
            options: [
                "Right Cerebellar Hemisphere",
                "Left Cerebellar Hemisphere",
                "Vermis",
                "Right Motor Cortex",
                "Right Basal Ganglia"
            ],
            answer: 1,
            explanation: "Cerebellar symptoms are **Ipsilateral**. Dysdiadochokinesia (limb coordination) maps to the **Lateral Hemisphere**. So Left hand issue = **Left Cerebellar Hemisphere**."
        },
        {
            question: "A child presents with frequent falls, nystagmus, and vomiting. An MRI reveals a tumor in the roof of the 4th ventricle compressing the flocculonodular lobe. What is the most likely diagnosis?",
            options: [
                "Glioblastoma Multiforme",
                "Meningioma",
                "Medulloblastoma",
                "Schwannoma",
                "Pituitary Adenoma"
            ],
            answer: 2,
            explanation: "**Medulloblastoma** is a common pediatric tumor that often arises in the **Vermis/Flocculonodular lobe**, causing truncal ataxia and hydrocephalus (vomiting)."
        },
        {
            question: "Climbing fibers, which provide powerful excitatory input to Purkinje cells, originate from which structure?",
            options: [
                "Spinal Cord",
                "Pontine Nuclei",
                "Inferior Olive",
                "Red Nucleus",
                "Vestibular Nuclei"
            ],
            answer: 2,
            explanation: "**Climbing Fibers** originate exclusively from the **Inferior Olive** (Medulla)."
        }
    ],
    flashcards: [
        {
            front: "Deep Cerebellar Nuclei (Lat to Med)",
            back: "Dentate, Emboliform, Globose, Fastigial",
            tag: "Neuroanatomy"
        },
        {
            front: "Purkinje Cell Neurotransmitter",
            back: "GABA (Inhibitory)",
            tag: "Neuroscience"
        },
        {
            front: "Climbing Fibers Origin",
            back: "Inferior Olive",
            tag: "Neuroanatomy"
        },
        {
            front: "Lesion causing Dysdiadochokinesia",
            back: "Ipsilateral Lateral Cerebellar Hemisphere",
            tag: "Neurology"
        },
        {
            front: "Classic sign of Cerebrocerebellar lesion",
            back: "Intention Tremor",
            tag: "Neurology"
        },
        {
            front: "Sign of Vermis Lesion",
            back: "Truncal Ataxia (Drunk Walk)",
            tag: "Neurology"
        },
        {
            front: "Essential Tremor characteristics",
            back: "Action/Postural. Improves w/ Alcohol.",
            tag: "Neurology"
        },
        {
            front: "DANISH meaning",
            back: "Dysdiadochokinesia, Ataxia, Nystagmus, Intention Tremor, Slurred Speech, Hypotonia",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Neuroanatomy > Cerebellum",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Cerebellum" }
        ]
    },
    mindmap: `
## Cerebellum

### Anatomy
*   **Deep Nuclei**: DEGF (Lat->Med).
*   **Input**: Mossy (Pons/Cord), Climbing (Olive).
*   **Output**: Purkinje (GABA) -> Deep Nuclei.

### Functional Zones
*   **Vestibulo (Flocculus)**: Balance, Eyes (Nystagmus).
*   **Spino (Vermis)**: Trunk/Gait (Ataxia). Alcohol damage.
*   **Cerebro (Hemispheres)**: Limbs (Intention Tremor).

### Signs
*   **DANISH**: Dysmetria, Ataxia, Nystagmus, Intention Tremor.
*   **Ipsilateral** deficits.
\`
};
