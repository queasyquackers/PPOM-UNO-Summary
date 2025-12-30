const L12_CONTENT = {
    id: 'l12',
    title: 'Lecture #12: Thalamus & Internal Capsule',
    lecturer: 'J. Xie, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #12',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Thalamus'
    },
    prev: 'l11',
    next: 'l13',
    pdf: 'pdfs/Lecture # 12. J. Xie, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #12_ Anatomy and Physiology of the Thalamus Faculty_ J. Xie, Ph.D..srt',
    summary: `
# Lecture #12: Thalamus & Internal Capsule

**Lecturer:** J. Xie, Ph.D.
**Session:** Neuroanatomy

## 1. Thalamic Nuclei (Relay vs Association)
The Thalamus is the "Grand Central Station" of sensory/motor information.
*   **VPL (Ventral Posterolateral):** Sensation from **Body** (DCML/STT).
*   **VPM (Ventral Posteromedial):** Sensation from **Face** (Trigeminal) & Taste. ("**M**akeup/**M**outh").
*   **LGN (Lateral Geniculate):** **Vision**. ("**L**ight").
*   **MGN (Medial Geniculate):** **Hearing**. ("**M**usic").
*   **VA/VL (Ventral Anterior/Lateral):** **Motor**. Input from Basal Ganglia/Cerebellum.
*   **Anterior Nucleus:** **Memory**. Input from Mammillary Bodies (Papez Circuit).
*   **Reticular Nucleus:** The only **Inhibitory (GABA)** nucleus. Wraps around thalamus, regulates "Thalamic Gating" (Sleep/Attention).

## 2. Thalamic Syndrome (Dejerine-Roussy) (Slide 29)
*   **Cause:** Infarction of Thalamogeniculate arteries (branch of **PCA**).
*   **Lesion:** VPL/VPM.
*   **Symptoms:**
    1.  Contralateral hemianesthesia (Loss of sensation).
    2.  Later: **Central Post-Stroke Pain** (Hyperalgesia/Allodynia). Burning, agonizing pain.

## 3. Internal Capsule (Slide 37)
High-traffic highway for tracts.
*   **Anterior Limb:** Frontopontine fibers.
*   **Genu ("Knee"):** **Corticobulbar** tract (Motor to Face/Head).
*   **Posterior Limb:**
    *   **Corticospinal** tract (Motor to Body).
    *   Sensory radiations (to Postcentral Gyrus).
*   **Blood Supply:** **MCA** (Lenticulostriate Arteries). Common site for lacunar strokes (Pure Motor Stroke).

## 4. Physiology: Physiological States
*   **Tonic Mode:** Linear transmission. Awake state.
*   **Burst Mode:** Oscillatory. **Sleep** (SWS) or Epilepsy. Blocks sensory input.
`,
    questions: [
        {
            question: "**1. A patient presents with pure loss of sensation (anesthesia) on the Right side of the face and body. Weeks later, they develop excruciating, burning pain on the Right side that is triggered by light touch (Allodynia). This 'Thalamic Pain Syndrome' (Dejerine-Roussy) is caused by a lesion in which thalamic Nuclei?**",
            options: [
                "LGN and MGN",
                "VA and VL",
                "Anterior and Medial",
                "VPL and VPM",
                "Reticular Nucleus"
            ],
            correctAnswer: 3,
            rationale: "From Slide 29: **Thalamic Pain Syndrome** involves damage to the sensory relay nuclei (**VPL** for body, **VPM** for face). It typically follows a PCA stroke."
        },
        {
            question: "**2. A blockage of the Lenticulostriate Arteries (Branches of MCA) often causes a 'Pure Motor Stroke' by damaging which specific structure?**",
            options: [
                "Anterior Limb of Internal Capsule",
                "Posterior Limb of Internal Capsule",
                "Thalamus",
                "Caudate Nucleus",
                "Corpus Callosum"
            ],
            correctAnswer: 1,
            rationale: "From Slide 39: The **Posterior Limb** of the Internal Capsule carries the **Corticospinal Tract** (Motor to body). It is supplied by the Lenticulostriate arteries (MCA). Damage here causes contralateral hemiparesis."
        },
        {
            question: "**3. Which Thalamic nucleus receives direct input from the Mammilothalamic Tract and is part of the Papez Circuit involved in memory?**",
            options: [
                "Medial Dorsal Nucleus",
                "Anterior Nucleus",
                "Pulvinar",
                "Ventral Lateral Nucleus",
                "Lateral Geniculate Nucleus"
            ],
            correctAnswer: 1,
            rationale: "From Slide 16/41: The **Anterior Nucleus** receives input from the Mammillary Bodies and projects to the Cingulate Gyrus, playing a key role in the Papez Circuit (Memory/Emotion)."
        },
        {
            question: "**4. To remember the function of the Geniculate Nuclei, the mnemonic 'L is for Light, M is for Music' refers to:**",
            options: [
                "LGN=Hearing, MGN=Vision",
                "LGN=Vision, MGN=Hearing",
                "LGN=Taste, MGN=Smell",
                "LGN=Motor, MGN=Sensory",
                "LGN=Face, MGN=Body"
            ],
            correctAnswer: 1,
            rationale: "From Slide 18: **LGN** (Lateral) is for **Light** (Vision). **MGN** (Medial) is for **Music** (Hearing)."
        },
        {
            question: "**5. The Reticular Nucleus of the Thalamus is unique because:**",
            options: [
                "It is the only excitatory nucleus",
                "It projects directly to the cortex",
                "It uses Dopamine as a neurotransmitter",
                "It contains GABAergic inhibitory neurons that regulate other thalamic nuclei",
                "It receives input from the Retina"
            ],
            correctAnswer: 3,
            rationale: "From Slide 21/42: The **Reticular Nucleus** is a shell of **GABAergic (Inhibitory)** neurons that regulates the flow of information through the thalamus (Gating), critical for sleep and attention."
        }
    ],
    flashcards: [
        { "front": "Function of VPL Nucleus?", "back": "Body Sensation (Vibration/Pain/Touch)", "tag": "Neuro" },
        { "front": "Function of VPM Nucleus?", "back": "Face Sensation + Taste", "tag": "Neuro" },
        { "front": "Function of LGN?", "back": "Vision (Light)", "tag": "Neuro" },
        { "front": "Function of MGN?", "back": "Hearing (Music)", "tag": "Neuro" },
        { "front": "Function of VA/VL Nuclei?", "back": "Motor (Basal Ganglia/Cerebellum input)", "tag": "Neuro" },
        { "front": "Blood supply to Thalamus?", "back": "PCA (Thalamogeniculate arteries)", "tag": "Anatomy" },
        { "front": "Content of Internal Capsule Posterior Limb?", "back": "Corticospinal Tract (Motor to Body)", "tag": "Anatomy" },
        { "front": "Content of Internal Capsule Genu?", "back": "Corticobulbar Tract (Motor to Face)", "tag": "Anatomy" },
        { "front": "Thalamic Pain Syndrome symptoms?", "back": "Hemianesthesia followed by Allodynia (Burning Pain)", "tag": "Clinical" },
        { "front": "Neurotransmitter of Reticular Nucleus?", "back": "GABA (Inhibitory)", "tag": "Neurochemistry" }
    ],
    mindmap: `
## Thalamus
### Sensory Relay
*   **VPL**: Body
*   **VPM**: Face/Taste
*   **LGN**: Vision
*   **MGN**: Hearing
### Motor Relay
*   **VA/VL**: BG/Cerebellum
### Limbic/Memory
*   **Anterior**: Mammillary bodies
### Regulatory
*   **Reticular**: GABA (Gating)
## Internal Capsule
*   **Genu**: Face (Corticobulbar)
*   **Post. Limb**: Leg/Arm (Corticospinal)
`
};

if (typeof window !== 'undefined') {
    window.L12_CONTENT = L12_CONTENT;
}
