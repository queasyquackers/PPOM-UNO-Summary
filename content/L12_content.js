export const L12_CONTENT = {
    id: "l12",
    summary: `
# Lecture 12: Anatomy and Physiology of the Thalamus

**Lecturer:** J. Xie, Ph.D.
**Session:** Lecture 12

## 1. Thalamic Organization (Slide 12-18)

The Thalamus is the "Gateway to the Cortex". Most sensory information (except olfaction) must synapse here before reaching the cortex.

### Relay Nuclei (Specific)
*   **VPL (Ventral Posterolateral):**
    *   **Input:** DCML and Spinothalamic Tract (Body).
    *   **Output:** Somatosensory Cortex (Postcentral Gyrus).
    *   **Function:** Vibration, Proprioception, Pain, Temp from **Body**.
*   **VPM (Ventral Posteromedial):**
    *   **Input:** Trigeminal (Face) and Gustatory (Solitary).
    *   **Output:** Somatosensory Cortex.
    *   **Function:** Sensation from **Face** + **Taste**.
*   **LGN (Lateral Geniculate Nucleus):**
    *   **Input:** Optic Tract.
    *   **Output:** Visual Cortex (V1).
    *   **Function:** **Vision** ("**L**ight").
*   **MGN (Medial Geniculate Nucleus):**
    *   **Input:** Inferior Colliculus.
    *   **Output:** Auditory Cortex.
    *   **Function:** **Hearing** ("**M**usic").
*   **VA/VL (Ventral Anterior/Lateral):**
    *   **Input:** Basal Ganglia and Cerebellum.
    *   **Output:** Motor Cortex.
    *   **Function:** Motor planning and coordination.
*   **Anterior Nucleus:**
    *   **Input:** Mammillothalamic Tract.
    *   **Output:** Cingulate Gyrus.
    *   **Function:** Memory and Emotion (Papez Circuit).

## 2. Thalamocortical States (Slide 23-26)
*   **Tonic Mode:** Linear transmission. High fidelity. **Awake** state (depolarized by ARAS: NE, ACh, 5-HT, Histamine).
*   **Burst Mode:** Oscillatory. Low fidelity. **Sleep** state (hyperpolarized). Blocks sensory input preventing waking. Absence Seizures occur in this mode.

## 3. Internal Capsule (Slide 35-39)
White matter highway carrying fibers to/from cortex.
*   **Anterior Limb:** Thalamocortical fibers (Anterior/DM).
*   **Genu:** **Corticobulbar Tract** (Motor to face/brainstem).
*   **Posterior Limb:**
    *   **Corticospinal Tract** (Motor to body).
    *   **Somatosensory Radiations** (VPL/VPM to Cortex).
    *   **Visual/Auditory Radiations** (Retrolenticular/Sublenticular).
*   **Blood Supply:** Primarily **MCA** (Lenticulostriate) and **Anterior Choroidal**. Thalamus is **PCA**.

## 4. Clinical Syndromes (Slide 29-32)

### Dejerine-Roussy Syndrome (Thalamic Pain Syndrome)
*   **Cause:** Stroke (PCA) damaging VPL/VPM.
*   **Presentation:** Contralateral hemianesthesia followed by agonizing, burning pain (**Allodynia**) induced by touch or even emotion.

### Artery of Percheron Infarct
*   **Variant:** Single artery arising from PCA supplying **Bilateral** paramedian thalamus + midbrain.
*   **Stroke:** Bilateral thalamic infarct.
*   **Presentation:** Coma (RAS damage), Memory loss, Vertical gaze palsy.
`,
    pearls: [
        {
            title: "VPM vs VPL Mnemonic",
            content: "**VPM** = **M**akeup on the **Face** (Face sensation + Taste).\\n**VPL** = **L**egs/Body (Body sensation)."
        },
        {
            title: "Geniculate Nuclei Mnemonic",
            content: "**L**GN = **L**ight (**Visual**).\\n**M**GN = **M**usic (**Auditory**)."
        },
        {
            title: "Dejerine-Roussy Syndrome",
            content: "Central Post-Stroke Pain. Thalamic lesion causes initial numbness, followed by hypersensitivity and severe **burning pain** on the contralateral side."
        },
        {
            title: "Internal Capsule Genu",
            content: "The **Genu** (knee) contains the **Corticobulbar** tract (Face motor). A lesion here affects CN motor nuclei (e.g., UMN facial droop)."
        },
        {
            title: "Thalamic Blood Supply",
            content: "Principally the **Posterior Cerebral Artery (PCA)**. The **Artery of Percheron** is a rare variant supplying bilateral thalami."
        }
    ],
    questions: [
        {
            question: "A patient suffers a stroke and develops severe, burning pain on the right side of their body that is exacerbated by light touch. Which nucleus was most likely infarcted?",
            options: [
                "Right VPL",
                "Left VPL",
                "Right VPM",
                "Left MGN",
                "Left Anterior Nucleus"
            ],
            correctAnswer: 1,
            rationale: "Thalamic Pain Syndrome (Dejerine-Roussy) is contralateral. A **Left** VPL infarct affects the Right side of the body. VPL handles body sensation."
        },
        {
            question: "Visual information from the optic tract synapses in which thalamic nucleus?",
            options: [
                "Medial Geniculate Nucleus",
                "Lateral Geniculate Nucleus",
                "Ventral Posterolateral Nucleus",
                "Pulvinar",
                "Ventral Anterior Nucleus"
            ],
            correctAnswer: 1,
            rationale: "**LGN** = **L**ight (Vision). MGN = Music (Hearing)."
        },
        {
            question: "Which limb of the internal capsule contains the corticospinal tract?",
            options: [
                "Anterior Limb",
                "Genu",
                "Posterior Limb",
                "Retrolenticular Part",
                "Sublenticular Part"
            ],
            correctAnswer: 2,
            rationale: "The **Posterior Limb** of the Internal Capsule carries the Corticospinal tract (Motor to body) and Somatosensory radiations."
        },
        {
            question: "Which thalamic nucleus is part of the Papez circuit involved in memory?",
            options: [
                "Ventral Lateral",
                "Anterior Nucleus",
                "Pulvinar",
                "Lateral Posterior",
                "Centromedian"
            ],
            correctAnswer: 1,
            rationale: "The **Anterior Nucleus** receives input from the Mammillary Bodies and projects to the Cingulate Gyrus, forming part of the Papez circuit for memory/emotion."
        },
        {
            question: "The 'Burst Mode' of thalamocortical firing is associated with:",
            options: [
                "Focused attention",
                "REM Sleep",
                "Slow Wave Sleep",
                "Panic attacks",
                "Active learning"
            ],
            correctAnswer: 2,
            rationale: "**Burst Mode** is an oscillatory state that disconnects the cortex from sensory input, characteristic of **Slow Wave Sleep** (and Absence Seizures)."
        }
    ],
    flashcards: [
        {
            front: "Input to VPL Nucleus",
            back: "Spinothalamic & DCML (Body Sensation)",
            tag: "Neuroanatomy"
        },
        {
            front: "Input to VPM Nucleus",
            back: "Trigeminal & Solitary Tract (Face & Taste)",
            tag: "Neuroanatomy"
        },
        {
            front: "Input to LGN",
            back: "Optic Tract (Vision)",
            tag: "Neuroanatomy"
        },
        {
            front: "Input to MGN",
            back: "Inferior Colliculus (Hearing)",
            tag: "Neuroanatomy"
        },
        {
            front: "Input to VA/VL Nuclei",
            back: "Basal Ganglia & Cerebellum (Motor)",
            tag: "Neuroanatomy"
        },
        {
            front: "Contents of Internal Capsule Genu",
            back: "Corticobulbar Tract",
            tag: "Neuroanatomy"
        },
        {
            front: "Contents of Internal Capsule Posterior Limb",
            back: "Corticospinal Tract & Sensory Radiations",
            tag: "Neuroanatomy"
        },
        {
            front: "Artery supplying the Thalamus",
            back: "Posterior Cerebral Artery (PCA)",
            tag: "Neuroanatomy"
        },
        {
            front: "Cause of Thalamic Pain Syndrome",
            back: "Stroke in VPL/VPM (Dejerine-Roussy)",
            tag: "Pathology"
        },
        {
            front: "Thalamic mode during Deep Sleep",
            back: "Burst Mode",
            tag: "Physiology"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Brainstem > Thalamus",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Thalamus" },
            { resource: "Pathoma", chapter: "CNS" }
        ]
    },
    mindmap: `
## Thalamus

### Relay Nuclei
*   **Sensory**
    *   **VPL**: Body (STT/DCML)
    *   **VPM**: Face (Trigeminal/Taste)
    *   **LGN**: Vision
    *   **MGN**: Hearing
*   **Motor**: VA/VL (BG/Cerebellum)
*   **Limbic**: Anterior (Mammillary Bodies)

### Internal Capsule
*   **Genu**: Corticobulbar
*   **Posterior Limb**: Corticospinal + Sensory

### Clinical
*   **Dejerine-Roussy**: Central Pain Syndrome
*   **Stroke**: PCA
*   **Sleep**: Burst Mode (Spindles)
\`
};

if (typeof window !== 'undefined') {
    window.L12_CONTENT = L12_CONTENT;
}
