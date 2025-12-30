const L15_CONTENT = {
    id: 'l15',
    title: 'Lecture #15: General Sensory System',
    lecturer: 'J. Xie, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #15',
    prev: 'l14',
    next: 'l16',
    pdf: 'pdfs/Lecture # 15. J. Xie, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #15_ General Sensory System Faculty_ J. Xie, Ph.D..srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Somatosensory Systems'
    },
    summary: `
# Lecture #15: General Sensory System

**Lecturer:** J. Xie, Ph.D.
**Session:** Neuroanatomy

## 1. Sensory Receptors & Fibers
### Fiber Types (Slides 6-8)
*   **A-beta:** Large, Myelinated, Fast. Touch/Proprioception.
*   **A-delta:** Small, Myelinated. Sharp Pain/Temp (First pain).
*   **C-fibers:** Unmyelinated, Slow. Dull/Aching Pain (Second pain), Itch.

### Receptors (Slides 11-16)
*   **Meissner's:** Light touch, Fast adapting (Slip/Grip). Glabrous skin.
*   **Merkel's:** Static pressure, Slow adapting (Textured/Shapes).
*   **Pacinian:** Vibration, Fast adapting.
*   **Ruffini:** Stretch, Slow adapting.
*   **Proprioceptors:**
    *   *Muscle Spindle:* Muscle length.
    *   *Golgi Tendon Organ:* Muscle tension (Force).

## 2. Ascending Pathways
### Dorsal Column-Medial Lemniscus (DCML) (Slide 30)
*   **Function:** Vibration, Proprioception, Discriminative Touch.
*   **1st Order:** DRG. Ascend in Dorsal Columns (Gracilis=Legs, Cuneatus=Arms).
*   **2nd Order:** Nucleus Gracilis/Cuneatus (Medulla). **Decussate** as Internal Arcuate Fibers -> Medial Lemniscus.
*   **3rd Order:** VPL (Thalamus) -> Cortex.

### Spinothalamic Tract (STT) (Slide 29)
*   **Function:** Pain, Temperature, Crude Touch.
*   **1st Order:** DRG. Synapse immediately in Dorsal Horn (Lissauer's tract).
*   **2nd Order:** Dorsal Horn (Nucleus Proprius). **Decussate** immediately via Anterior White Commissure -> Ascend in Anterolateral system.
*   **3rd Order:** VPL (Thalamus) -> Cortex.

### Trigeminal System (Slides 31-33)
*   **Main Sensory Nucleus:** Touch/Proprioception (Face) -> VPM.
*   **Spinal Trigeminal Nucleus:** Pain/Temp (Face) -> VPM.
*   **Mesencephalic Nucleus:** Proprioception (Jaw Jerk).

## 3. Clinical Correlates
:::correlate
**Brown-Séquard Syndrome**
*   **Lesion:** Hemisection of Spinal Cord.
*   **Presentation:**
    *   *Ipsilateral:* Loss of Motor (Corticospinal) & Vibration/Proprioception (DCML) below lesion.
    *   *Contralateral:* Loss of Pain/Temp (Spinothalamic) starting 1-2 levels below lesion.
:::

:::correlate
**Thalamic Pain Syndrome**
*   **Lesion:** VPL/VPM of Thalamus (usually PCA stroke).
*   **Presentation:** Contralateral hemianesthesia followed by severe, burning pain (hyperalgesia) on the affected side.
:::

:::correlate
**Phantom Limb Pain (Slide 38)**
*   **Mechanism:** Cortical reorganization (neuroplasticity). Face area of homunculus invades the hand area after amputation.
*   **Clinical:** Sensation/Pain in missing limb.
:::
`,
    questions: [
        {
            question: "**1. A patient presents with loss of pain and temperature sensation in the right leg and loss of vibration and proprioception in the left leg. Where is the most likely lesion?**",
            options: [
                "Right Spinal Cord",
                "Left Spinal Cord",
                "Right Medulla",
                "Left Medulla",
                "Midbrain"
            ],
            correctAnswer: 1,
            rationale: "This is **Brown-Séquard Syndrome** (Hemicord lesion). DCML (Vib/Prop) stays ipsilateral until Medulla. STT (Pain/Temp) crosses immediately. Therefore, a **Left** spinal cord lesion causes Ipsilateral (Left) DCML loss and Contralateral (Right) STT loss."
        },
        {
            question: "**2. Which receptor type is primarily responsible for detecting deep vibration and high-frequency stimuli?**",
            options: [
                "Merkel Discs",
                "Meissner Corpuscles",
                "Pacinian Corpuscles",
                "Ruffini Endings",
                "Free Nerve Endings"
            ],
            correctAnswer: 2,
            rationale: "**Pacinian Corpuscles** are fast-adapting receptors located deep in the dermis/subQ responding to high-frequency vibration."
        },
        {
            question: "**3. A lesion of the Medial Lemniscus in the midbrain would result in which sensory deficit?**",
            options: [
                "Contralateral Pain/Temp",
                "Ipsilateral Pain/Temp",
                "Contralateral Vibration/Proprioception",
                "Ipsilateral Vibration/Proprioception",
                "Bilateral Touch loss"
            ],
            correctAnswer: 2,
            rationale: "The **Medial Lemniscus** carries DCML fibers *after* they have decussated in the medulla. Thus, a midbrain lesion affects the **Contralateral** side of the body."
        },
        {
            question: "**4. The cell bodies for the first-order neurons conveying proprioception from the masseter muscle (Jaw Jerk Reflex) are located in the:**",
            options: [
                "Trigeminal Ganglion",
                "Mesencephalic Nucleus",
                "Chief Sensory Nucleus",
                "Spinal Trigeminal Nucleus",
                "Motor Nucleus of V"
            ],
            correctAnswer: 1,
            rationale: "Unique exception: First-order proprioceptive neurons for the jaw are located inside the CNS in the **Mesencephalic Nucleus**, not in a peripheral ganglion."
        },
        {
            question: "**5. Which fibers are unmyelinated and responsible for slow, burning pain?**",
            options: [
                "A-alpha",
                "A-beta",
                "A-delta",
                "C fibers",
                "Ia fibers"
            ],
            correctAnswer: 3,
            rationale: "**C fibers** are small, unmyelinated, and conduct slowly transmitting dull, aching, or burning pain."
        }
    ],
    flashcards: [
        { "front": "Pathway for Vibration/Proprioception?", "back": "Dorsal Column-Medial Lemniscus (DCML)", "tag": "Neuro" },
        { "front": "Pathway for Pain/Temperature?", "back": "Spinothalamic Tract (STT)", "tag": "Neuro" },
        { "front": "Where does DCML decussate?", "back": "Lower Medulla (Internal Arcuate Fibers)", "tag": "Neuro" },
        { "front": "Where does STT decussate?", "back": "Spinal Cord (Anterior White Commissure)", "tag": "Neuro" },
        { "front": "Thalamic nucleus for Body sensation?", "back": "VPL", "tag": "Neuro" },
        { "front": "Thalamic nucleus for Face sensation?", "back": "VPM", "tag": "Neuro" },
        { "front": "Brown-Sequard: Motor deficit side?", "back": "Ipsilateral", "tag": "Clinical" },
        { "front": "Brown-Sequard: Pain/Temp deficit side?", "back": "Contralateral", "tag": "Clinical" },
        { "front": "Receptor for Vibration?", "back": "Pacinian Corpuscle", "tag": "Neuro" },
        { "front": "Primary cortex for somatosensation?", "back": "Postcentral Gyrus (Parietal Lobe)", "tag": "Neuro" }
    ],
    mindmap: `
## Somatosensory System
### Receptors
*   **Meissner**: Light Touch (Fast)
*   **Merkel**: Pressure (Slow)
*   **Pacinian**: Vibration
*   **Ruffini**: Stretch
*   **Free Nerve**: Pain/Temp
### DCML (Touch/Vib)
*   **1st**: DRG (Gracilis/Cuneatus)
*   **2nd**: Nucleus Gracilis/Cuneatus (Medulla) -> Decussate
*   **3rd**: VPL -> Cortex
### Spinothalamic (Pain/Temp)
*   **1st**: DRG -> Lissauer
*   **2nd**: Dorsal Horn -> Decussate (AWC)
*   **3rd**: VPL -> Cortex
### Trigeminal (Face)
*   **Touch**: Chief Nucleus -> VPM
*   **Pain**: Spinal Nucleus -> VPM
### Lesions
*   **Brown-Sequard**: Hemicord (Ipsi Motor/Touch, Contra Pain)
*   **Tabes Dorsalis**: Dorsal Columns (Loss of Vib/Prop)
`
};

if (typeof window !== 'undefined') {
    window.L15_CONTENT = L15_CONTENT;
}
