const L7_CONTENT = {
    id: 'l7',
    title: 'Lecture #7: Internal Anatomy of Brain Stem I',
    lecturer: 'Isaac Kurtzer, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #7',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Somatosensory Systems'
    },
    prev: 'l6',
    next: 'l8',
    pdf: 'pdfs/Lecture # 7. I. Kurtzer, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #7_ Internal Anatomy of Brain Stem I - General Layout and Major Nuclei; Presenter_ I. Kurtzer, PhD.srt',
    summary: `
# Lecture #7: Internal Anatomy of Brain Stem I

**Lecturer:** Isaac Kurtzer, Ph.D.
**Session:** Neuroanatomy

## 1. General Organization (Slide 10)
The Brainstem is divided into three longitudinal zones (A-P):
1.  **Tectum ("Roof"):** Dorsal-most. Only distinct in the **Midbrain** (Superior/Inferior Colliculi).
2.  **Tegmentum ("Covering"):** The core. Contains **Cranial Nerve Nuclei**, Reticular Formation, and Sensory Tracts. Anterior to the ventricular system.
3.  **Basilar ("Base"):** Ventral-most. Contains descending **Motor Tracts** (Corticospinal, Corticobulbar, Corticopontine).

## 2. External Anatomy
### Ventral Surface
*   **Midbrain:** Cerebral Peduncles (Crus Cerebri).
*   **Pons:** Basilar Pons (Bulbous protrusion).
*   **Medulla:**
    *   **Pyramids:** Medial. Contain Corticospinal Tract.
    *   **Olives:** Lateral to pyramids. Contain Inferior Olivary Nucleus.

### Dorsal Surface
*   **Midbrain:** Superior Colliculi (Vision), Inferior Colliculi (Hearing).
*   **Pons/Medulla:** Floor of the **4th Ventricle**.
*   **Cerebellar Peduncles:** Connect brainstem to cerebellum.
    *   SCP (Midbrain), MCP (Pons), ICP (Medulla).

## 3. Internal Anatomy: Key Nuclei (Slide 15)
### Midbrain
*   **Substantia Nigra:** Dopaminergic. Parkinson's Disease. Ventral tegmentum.
*   **Red Nucleus:** Motor coordination (Rubrospinal tract).
*   **Superior Colliculus:** Visual reflexes (Saccades).
*   **Inferior Colliculus:** Auditory pathway.
*   **Periaqueductal Gray (PAG):** Pain modulation. Surrounds Cerebral Aqueduct.

### Pons
*   **Pontine Nuclei:** Relay station from Cortex to Cerebellum (via MCP). "Copy of the motor plan".

### Medulla
*   **Inferior Olivary Nucleus:** Motor coordination/Learning. Project to Cerebellum (Climbing Fibers).
*   **Gracile & Cuneate Nuclei:** Dorsal Column nuclei (Touch/Proprioception).
*   **Pyramids:** Descending motor fibers. Site of **Decussation**.

## 4. Cranial Nerves Rule (Slide 29)
*   **Cranial Nerves:** Always innervate **IPSILATERAL** structures (Input and Output).
*   *Contrast with Tracts:* Long tracts (DCML, STT, CST) cross over and often represent the contralateral side.
`,
    questions: [
        {
            question: "**1. Which longitudinal division of the brainstem is found ONLY in the midbrain and contains structure involved in visual and auditory reflexes?**",
            options: [
                "Tegmentum",
                "Basilar Region",
                "Tectum",
                "Pyramid",
                "Olive"
            ],
            correctAnswer: 2,
            rationale: "From Slide 10: The **Tectum** (Roof) consists of the Superior and Inferior Colliculi and is only a distinct region in the **Midbrain**. The Tegmentum and Basilar regions exist throughout the brainstem."
        },
        {
            question: "**2. A lesion in the ventral part of the midbrain (Crus Cerebri/Substantia Nigra) would most likely result in which clinical deficit?**",
            options: [
                "Loss of pain sensation from the face",
                "Contralateral Motor Deficits (Parkinsonism or Hemiparesis)",
                "Hearing loss",
                "Loss of taste",
                "Loss of balance"
            ],
            correctAnswer: 1,
            rationale: "From Slide 6/15: The ventral midbrain contains the **Substantia Nigra** (Motor/Basal Ganglia) and the **Cerebral Peduncles** (Descending Corticospinal Tract). Damage here causes motor deficits."
        },
        {
            question: "**3. The Inferior Olivary Nucleus, visible as the 'Olive' on the ventral medulla, is primarily involved in which function?**",
            options: [
                "Pain Modulation",
                "Auditory Processing",
                "Motor Learning and Coordination",
                "Conscious Proprioception",
                "Visual Saccades"
            ],
            correctAnswer: 2,
            rationale: "From Slide 15: The **Inferior Olivary Nucleus** is involved in **motor coordination** and acts as a relay to the cerebellum (via Climbing Fibers)."
        },
        {
            question: "**4. Which rule correctly describes the lateralization of Cranial Nerves?**",
            options: [
                "They innervate Contralateral tissue",
                "They innervate Ipsilateral tissue",
                "Sensory are Ipsilateral, Motor are Contralateral",
                "Motor are Ipsilateral, Sensory are Contralateral",
                "They are Bilateral"
            ],
            correctAnswer: 1,
            rationale: "From Slide 29: **'Ipsilateral. Ipsilateral. Ipsilateral.'** All cranial nerves innervate ipsilateral tissue (e.g., Right CN V feels the Right face)."
        },
        {
            question: "**5. Which structure serves as a massive relay station, receiving input from the cortex and sending it to the cerebellum via the Middle Cerebellar Peduncle?**",
            options: [
                "Red Nucleus",
                "Pontine Nuclei",
                "Substantia Nigra",
                "Cuneate Nucleus",
                "Vestibular Nuclei"
            ],
            correctAnswer: 1,
            rationale: "From Slide 15/19: The **Pontine Nuclei** in the basilar pons receive cortical input and project to the contralateral cerebellum, ensuring smooth motor control."
        }
    ],
    flashcards: [
        { "front": "Function of Superior Colliculus?", "back": "Visual Reflexes (Saccades)", "tag": "Neuro" },
        { "front": "Function of Inferior Colliculus?", "back": "Hearing (Auditory)", "tag": "Neuro" },
        { "front": "Function of Substantia Nigra?", "back": "Dopamine production (Motor Control)", "tag": "Neuro" },
        { "front": "Function of Red Nucleus?", "back": "Motor Coordination (Rubrospinal)", "tag": "Neuro" },
        { "front": "Function of Periaqueductal Gray (PAG)?", "back": "Pain Modulation", "tag": "Neuro" },
        { "front": "Function of Pontine Nuclei?", "back": "Cortex -> Cerebellum Relay", "tag": "Neuro" },
        { "front": "Three zones of Brainstem (A-P)?", "back": "Tectum (Dorsal), Tegmentum (Core), Basilar (Ventral)", "tag": "Anatomy" },
        { "front": "What does the Tectum consist of?", "back": "Superior and Inferior Colliculi (Midbrain only)", "tag": "Anatomy" },
        { "front": "Are Cranial Nerves Ipsilateral or Contralateral?", "back": "Ipsilateral", "tag": "Clinical" },
        { "front": "Where are the Pyramids located?", "back": "Ventral Medulla", "tag": "Anatomy" }
    ],
    mindmap: `
## Brainstem Divisions
### Midbrain
*   **Tectum**: Sup (Vision)/Inf (Hearing) Colliculi
*   **Tegmentum**: Red Nucleus, CN III/IV, PAG
*   **Basilar**: Crus Cerebri (CST), Substantia Nigra
### Pons
*   **Tegmentum**: CN V, VI, VII, VIII
*   **Basilar**: Pontine Nuclei (Relay to Cerebellum)
### Medulla
*   **Tegmentum**: CN IX, X, XII, Dorsal Column Nuclei
*   **Basilar**: Pyramids (CST), Olives (Motor Learning)
`
};

if (typeof window !== 'undefined') {
    window.L7_CONTENT = L7_CONTENT;
}
