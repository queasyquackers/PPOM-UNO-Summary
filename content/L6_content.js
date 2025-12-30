const L6_CONTENT = {
    id: 'l6',
    title: 'Lecture #6: Anatomy of the Spinal Cord',
    lecturer: 'J. Xie, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #6',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Somatosensory Systems'
    },
    prev: 'l5',
    next: 'l7',
    pdf: 'pdfs/Lecture # 6. J. Xie, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #6_ External and Internal Anatomy of the Spinal Cord Faculty_ J. Xie, Ph.D..srt',
    summary: `
# Lecture #6: Anatomy of the Spinal Cord

**Lecturer:** J. Xie, Ph.D.
**Session:** Neuroanatomy

## 1. Gross Anatomy
*   **Length:** Ends at **L1-L2** in adults (Conus Medullaris).
*   **Lumbar Cistern:** Subarachnoid space below L2, contains Cauda Equina + CSF. Site for Lumbar Puncture.
*   **Enlargements:**
    *   **Cervical (C4-T1):** Brachial Plexus (Arms).
    *   **Lumbosacral (L2-S3):** Lumbosacral Plexus (Legs).

## 2. Spinal Reflexes (Slides 23-27)
*   **Stretch Reflex (Myotatic):** Monosynaptic. Deep Tendon Reflexes (DTR).
    *   *Mechanism:* Muscle Spindle -> Ia Afferent -> Alpha Motor Neuron -> Contraction.
    *   *Levels:* S1/S2 (Achilles), L3/L4 (Patellar), C5/C6 (Biceps), C7/C8 (Triceps).
*   **Flexor Withdrawal:** Polysynaptic. Pain -> Pull limb away.
*   **Crossed-Extensor:** Polysynaptic. Pain in one foot -> Withdraw that foot + Extend *opposite* leg (to maintain balance).

## 3. Major Tracts (The Big Three) (Slides 30-39)

### A. DCML (Dorsal Column Medial Lemniscus)
*   **Function:** Fine Touch, Vibration, Proprioception.
*   **Pathway:**
    1.  Enters Dorsal Column (Fasciculus Gracilis = Legs/Medial; Cuneatus = Arms/Lateral).
    2.  Ascends **Ipsilaterally**.
    3.  Synapses in Medulla (Nucleus Gracilis/Cuneatus).
    4.  **Decussates** (Internal Arcuate Fibers) -> Medial Lemniscus.
    5.  Thalamus (VPL) -> Cortex.
*   **Lesion in Cord:** **Ipsilateral** loss of touch/vibration.

### B. STT (Spinothalamic Tract - Anterolateral System)
*   **Function:** Pain, Temperature, Crude Touch.
*   **Pathway:**
    1.  Enters Dorsal Horn (Lissauer's Tract).
    2.  Synapses immedately (Substantia Gelatinosa).
    3.  **Decussates** immediately (Anterior White Commissure).
    4.  Ascends **Contralaterally**.
*   **Lesion in Cord:** **Contralateral** loss of pain/temp (1-2 segments below).

### C. CST (Corticospinal Tract)
*   **Function:** Voluntary Motor.
*   **Pathway:**
    1.  Motor Cortex -> Internal Capsule -> Brainstem.
    2.  **Decussates** in Medulla (Pyramids).
    3.  Descends in Lateral Funiculus.
    4.  Synapses on Anterior Horn Cells (LMN).
*   **Lesion in Cord:** **Ipsilateral** Spastic Paralysis (UMN signs).

## 4. Vascular Syndromes (Slide 41)
*   **Anterior Spinal Artery (ASA) Syndrome:**
    *   Infarction of Anterior 2/3 of cord.
    *   **Damaged:** CST (Motor) + STT (Pain/Temp).
    *   **Spared:** Dorsal Columns (Touch/Vibration) - supplied by Posterior Spinal Arteries.
    *   *Symptoms:* Paraplegia + Loss of Pain/Temp below lesion. Proprioception INTACT.
*   **Posterior Spinal Artery Syndrome:** Loss of Dorsal Columns (Proprioception).

## 5. Clinical Correlates
*   **Shingles (Herpes Zoster):** Virus dormant in **DRG**. Reactivation -> Dermatomal rash.
*   **Tetanus:** Tetanospasmin toxin blocks release of **GABA/Glycine** from Renshaw cells (inhibitory interneurons). Leads to spastic paralysis (Lockjaw, Opisthotonos).
`,
    questions: [
        {
            question: "**1. A patient presents with loss of pain and temperature sensation in the right leg, and spastic paralysis and loss of vibration sense in the left leg. This 'Dissociated Sensory Loss' pattern (Brown-Séquard Syndrome) is caused by a hemisection lesion on which side of the spinal cord?**",
            options: [
                "Right side (Ipsilateral to pain loss)",
                "Left side (Ipsilateral to motor/vibration loss)",
                "Bilateral central lesion",
                "Dorsal Columns only",
                "Anterior Horn only"
            ],
            correctAnswer: 1,
            rationale: "Brown-Séquard (Hemisection): <br>- **Ipsilateral** signs: Motor (CST decussated above) + Vibration (DCML decussates above).<br>- **Contralateral** signs: Pain/Temp (STT decussates immediately). <br>Since motor/vibration loss is on the **Left**, the lesion is on the **Left**."
        },
        {
            question: "**2. Tetanus toxin causes spastic paralysis by blocking the release of inhibitory neurotransmitters (GABA and Glycine) from which specific spinal cord cells?**",
            options: [
                "Alpha Motor Neurons",
                "Gamma Motor Neurons",
                "Renshaw Cells",
                "Dorsal Root Ganglion Cells",
                "Clarke's Nucleus Cells"
            ],
            correctAnswer: 2,
            rationale: "From Slide 22: Tetanospasmin blocks the release of GABA/Glycine from **Renshaw Cells** (inhibitory interneurons), leading to unchecked excitation (tetany)."
        },
        {
            question: "**3. An infarction of the Anterior Spinal Artery (ASA) would result in all of the following deficits below the lesion level EXCEPT:**",
            options: [
                "Loss of pain sensation (STT)",
                "Loss of temperature sensation (STT)",
                "Spastic Paralysis (CST)",
                "Loss of vibration and proprioception (DCML)",
                "Loss of crude touch"
            ],
            correctAnswer: 3,
            rationale: "From Slide 41: The ASA supplies the anterior 2/3 of the cord (STT, CST). The **Dorsal Columns (DCML)** are supplied by the Posterior Spinal Arteries and are **SPARED** in ASA syndrome."
        },
        {
            question: "**4. Which spinal tract carries fine touch and proprioception and ascends ipsilaterally within the spinal cord?**",
            options: [
                "Lateral Corticospinal Tract",
                "Spinothalamic Tract",
                "Dorsal Column Medial Lemniscus (DCML)",
                "Rubrospinal Tract",
                "Vestibulospinal Tract"
            ],
            correctAnswer: 2,
            rationale: "The **DCML** enters the cord and ascends in the posterior columns on the SAME side (ipsilateral) until it reaches the medulla, where it decussates."
        },
        {
            question: "**5. In the stretch reflex (e.g., Knee Jerk), the primary afferent neuron synapses directly onto the alpha-motor neuron. This type of reflex is classified as:**",
            options: [
                "Polysynaptic",
                "Disynaptic",
                "Monosynaptic",
                "Intersegmental",
                "Contralateral"
            ],
            correctAnswer: 2,
            rationale: "From Slide 24: The stretch reflex is the simplest reflex and is **Monosynaptic** (one synapse between sensory and motor neuron)."
        }
    ],
    flashcards: [
        { "front": "Function of Dorsal Column Medial Lemniscus (DCML)?", "back": "Fine Touch, Vibration, Proprioception", "tag": "Neuro" },
        { "front": "Function of Spinothalamic Tract (STT)?", "back": "Pain and Temperature", "tag": "Neuro" },
        { "front": "Function of Corticospinal Tract (CST)?", "back": "Voluntary Motor Control", "tag": "Neuro" },
        { "front": "Where does DCML decussate?", "back": "Medulla (Internal Arcuate Fibers)", "tag": "Neuro" },
        { "front": "Where does STT decussate?", "back": "Spinal Cord (Anterior White Commissure)", "tag": "Neuro" },
        { "front": "Where does CST decussate?", "back": "Medulla (Pyramids)", "tag": "Neuro" },
        { "front": "What is spard in Anterior Spinal Artery Syndrome?", "back": "Dorsal Columns (Proprioception/Vibration)", "tag": "Pathology" },
        { "front": "Virus dormant in DRG causing Shingles?", "back": "Varicella Zoster Virus (VZV)", "tag": "Micro" },
        { "front": "Toxin blocking Renshaw Cells (GABA/Glycine)?", "back": "Tetanus Toxin", "tag": "Micro" },
        { "front": "Reflex level for Patellar (Knee) Jerk?", "back": "L3-L4", "tag": "Clinical" }
    ],
    mindmap: `
## Spinal Cord
### Tracts
*   **Ascending (Sensory)**
    *   **DCML**: Touch/Prop. (Ipsilateral in cord) -> Decussates Medulla
    *   **STT**: Pain/Temp. (Contralateral in cord) -> Decussates Cord
*   **Descending (Motor)**
    *   **CST**: Motor (Ipsilateral in cord) -> Decussates Medulla
### Reflexes
*   **Stretch**: Monosynaptic (DTRs)
*   **Withdrawal**: Polysynaptic (Pain)
### Pathology
*   **ASA Syndrome**: Spares Dorsal Columns
*   **Brown-Sequard**: Hemi-section
    *   Ipsi: Motor, Proprioception
    *   Contra: Pain/Temp
*   **Tetanus**: Blocks Inhibition
`
};

if (typeof window !== 'undefined') {
    window.L6_CONTENT = L6_CONTENT;
}
