export const L15_CONTENT = {
    id: "l15",
    summary: `
# Lecture 15: General Sensory Systems

**Lecturer:** J. Xie, Ph.D.
**Session:** Lecture 15

## 1. Sensory Receptors & Fibers (Slide 5-13)

### Fiber Types
*   **A-beta (Aβ):** Large, Myelinated. Fast (30-70 m/s). Carries **Touch, Vibration, Proprioception**.
*   **A-delta (Aδ):** Small, Myelinated. Medium speed. Carries **Sharp Pain (First Pain), Cold**.
*   **C fibers:** Unmyelinated. Slow (0.5-2 m/s). Carries **Dull/Burning Pain (Second Pain), Warmth, Itch**.

### Mechanoreceptors (Touch)
*   **Meissner's Corpuscle:** Fast adapting, Small field. **Light Touch/Grip**. Glabrous skin.
*   **Merkel Disc:** Slow adapting, Small field. **Static Pressure/Texture** (Braille).
*   **Pacinian Corpuscle:** Fast adapting, Large field. **Vibration**.
*   **Ruffini Ending:** Slow adapting, Large field. **Skin Stretch** (Grip shape).

## 2. Ascending Pathways (Slide 26-30)

### Dorsal Column-Medial Lemniscus (DCML)
Carries **Fine Touch, Vibration, Proprioception** from the body.
1.  **1st Order:** DRG. Ascend in **Dorsal Columns** (Gracilis=Lower, Cuneatus=Upper).
2.  **2nd Order:** Nucleus Gracilis/Cuneatus (Medulla). **Decussate** as Internal Arcuate Fibers to form **Medial Lemniscus**.
3.  **3rd Order:** VPL Nucleus (Thalamus) → Primary Somatosensory Cortex (S1).

### Spinothalamic Tract (Anterolateral System)
Carries **Pain, Temperature, Crude Touch**.
1.  **1st Order:** DRG. Synapse in Dorsal Horn (Substantia Gelatinosa).
2.  **2nd Order:** Dorsal Horn. **Decussate immediately** in Anterior White Commissure. Ascend in anterolateral funiculus.
3.  **3rd Order:** VPL Nucleus (Thalamus) → S1 Cortex.

## 3. Trigeminal System (Face) (Slide 31-33)
*   **Touch/Proprioception:** Trigeminal Ganglion → **Principal Sensory Nucleus** (Pons) → Decussate → VPM.
*   **Pain/Temp:** Trigeminal Ganglion → Descend to **Spinal Trigeminal Nucleus** (Medulla) → Decussate → VPM.
*   **Proprioception (Jaw):** **Mesencephalic Nucleus** (Midbrain) - UNIQUE (Cell bodies inside CNS).

## 4. Clinical Correlates (Slide 38-43)

:::correlate
**Brown-Séquard Syndrome**
*   **Pathology:** Hemisection of the spinal cord (e.g., stabbing/trauma).
*   **Presentation:**
    *   **Ipsilateral:** Loss of **Motor** (Corticospinal) and **Touch/Vibration/Proprioception** (DCML) below lesion.
    *   **Contralateral:** Loss of **Pain/Temperature** (Spinothalamic) 1-2 segments below lesion (due to Lissanuer's tract ascent before crossing).
:::

:::correlate
**Phantom Limb Pain**
*   **Pathology:** Cortical reorganization after amputation.
*   **Mechanism:** The cortical area for the amputated limb (e.g., arm) loses input and is invaded by adjacent areas (e.g., Face). Touching the face is perceived as touching the missing arm.
*   **Nature:** Often burning/painful, resistant to meds.
:::

:::correlate
**Thalamic Lesion (Dejerine-Roussy)**
*   **Lesion:** VPL/VPM.
*   **Presentation:** Contralateral Hemianesthesia (loss of all sensation). Later develops into severe, burning pain (**Thalamic Pain Syndrome**).
:::

## 5. Pain Modulation (Slide 18-20)
*   **Gate Control Theory:** Aβ fibers (rubbing) activate inhibitory interneurons in the dorsal horn, blocking C fiber (pain) transmission.
*   **Descending Pathway:** PAG → RVM → Dorsal Horn (Inhibits pain via Serotonin/NE).
`,
    pearls: [
        {
            title: "DCML vs STT Decussation",
            content: "**DCML** crosses in the **Medulla** (Internal Arcuate Fibers).\\n**Spinothalamic** crosses in the **Spinal Cord** (Anterior White Commissure)."
        },
        {
            title: "VPL vs VPM",
            content: "**VPL** = **L**egs/Body (Body sensation).\\n**VPM** = **M**akeup/Face (Face sensation)."
        },
        {
            title: "Fiber Speed Rule",
            content: "**A-beta (Touch)** > **A-delta (Fast Pain)** > **C (Slow Pain)**. Myelination and diameter determine speed."
        },
        {
            title: "Brown-Séquard Deficits",
            content: "Ipsilateral Motor & Touch. Contralateral Pain & Temp."
        },
        {
            title: "Phantom Limb Mechanism",
            content: "Maladaptive **Cortical Reorganization** (Neuroplasticity) where face area invades hand area."
        }
    ],
    questions: [
        {
            question: "A patient cannot feel temperature or sharp pain in their right leg, but vibration sense is intact. Where is the lesion most likely located?",
            options: [
                "Right Fasciculus Gracilis",
                "Left Spinothalamic Tract",
                "Right Spinothalamic Tract",
                "Left Medial Lemniscus",
                "Right Dorsal Horn"
            ],
            correctAnswer: 1,
            rationale: "Pain/Temp from the **Right** leg travels to the left side of the spinal cord immediately. A lesion in the **Left Spinothalamic Tract** causes loss of pain/temp on the **Right** side."
        },
        {
            question: "Which receptor is responsible for sensing vibration?",
            options: [
                "Merkel Disc",
                "Meissner Corpuscle",
                "Pacinian Corpuscle",
                "Ruffini Ending",
                "Free Nerve Ending"
            ],
            correctAnswer: 2,
            rationale: "**Pacinian Corpuscles** are rapidly adapting and specialized for sensing **Vibration**."
        },
        {
            question: "A hemisection of the spinal cord at T10 on the left side (Brown-Séquard) would result in:",
            options: [
                "Loss of pain/temp on the left leg",
                "Loss of vibration/proprioception on the right leg",
                "Loss of motor function on the right leg",
                "Loss of pain/temp on the right leg",
                "Bilateral loss of all sensation"
            ],
            correctAnswer: 3,
            rationale: "Hemisection on the **Left** causes **Contralateral (Right)** loss of Pain/Temp (STT crosses immediately) and **Ipsilateral (Left)** loss of Touch/Motor."
        },
        {
            question: "The cell bodies of the primary afferent neurons for the face (Trigeminal) are located in the:",
            options: [
                "Dorsal Root Ganglion",
                "Trigeminal Ganglion",
                "Principal Sensory Nucleus",
                "Spinal Trigeminal Nucleus",
                "VPM Nucleus"
            ],
            correctAnswer: 1,
            rationale: "Primary sensory neurons for the face are in the **Trigeminal (Gasserian) Ganglion**."
        },
        {
            question: "Which fibers carry 'slow, burning' pain?",
            options: [
                "A-alpha",
                "A-beta",
                "A-delta",
                "B fibers",
                "C fibers"
            ],
            correctAnswer: 4,
            rationale: "**C fibers** are unmyelinated and slow conducting, responsible for the delayed, dull, burning 'second pain'."
        }
    ],
    flashcards: [
        {
            front: "Pathway for Fine Touch and Proprioception",
            back: "Dorsal Column-Medial Lemniscus (DCML)",
            tag: "Neuroanatomy"
        },
        {
            front: "Pathway for Pain and Temperature",
            back: "Spinothalamic Tract (Anterolateral System)",
            tag: "Neuroanatomy"
        },
        {
            front: "Where does DCML decussate?",
            back: "Medulla (Internal Arcuate Fibers)",
            tag: "Neuroanatomy"
        },
        {
            front: "Where does Spinothalamic Tract decussate?",
            back: "Spinal Cord (Anterior White Commissure)",
            tag: "Neuroanatomy"
        },
        {
            front: "Function of Pacinian Corpuscle",
            back: "Vibration",
            tag: "Physiology"
        },
        {
            front: "Function of A-delta fibers",
            back: "Fast, Sharp Pain (Cold)",
            tag: "Physiology"
        },
        {
            front: "Function of C fibers",
            back: "Slow, Dull Pain (Warmth/Itch)",
            tag: "Physiology"
        },
        {
            front: "Brown-Séquard: Contralateral Deficit",
            back: "Pain and Temperature (STT)",
            tag: "Pathology"
        },
        {
            front: "Brown-Séquard: Ipsilateral Deficit",
            back: "Motor (CS) & Vibration/Proprioception (DCML)",
            tag: "Pathology"
        },
        {
            front: "Thalamic Nucleus for Body Sensation",
            back: "VPL",
            tag: "Neuroanatomy"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Spinal Cord > Spinal Cord Tracts",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Spinal Cord" },
            { resource: "Pathoma", chapter: "CNS" }
        ]
    },
    mindmap: `
## General Sensory Systems

### Receptors
*   **Mechanoreceptors**
    *   **Meissner**: Light Touch (Grip)
    *   **Merkel**: Pressure (Texture)
    *   **Pacinian**: Vibration
    *   **Ruffini**: Stretch
*   **Nociceptors**
    *   **A-delta**: Fast pain
    *   **C fibers**: Slow pain

### Pathways
*   **DCML** (Touch/Proprio)
    *   DRG → Dorsal Cols → Medulla (Cross) → ML → VPL
*   **Spinothalamic** (Pain/Temp)
    *   DRG → Dorsal Horn → Cord (Cross) → ALS → VPL

### Clinical
*   **Brown-Sequard**: Hemicord lesion
*   **Phantom Limb**: Cortical reorganization
*   **Thalamic Syndrome**: VPL stroke (Pain)
\`
};

if (typeof window !== 'undefined') {
    window.L15_CONTENT = L15_CONTENT;
}
