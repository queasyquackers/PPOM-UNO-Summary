export const L30_CONTENT = {
    id: "l30",
    summary: `
# Lecture 30: Supraspinal Motor Systems (Cortex & Brainstem)

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture 30

## 1. Pyramidal System (Upper Motor Neurons)
* **Definition**:** UMNs originate in the Cortex (M1, Premotor, SMA) and project to LMNs in the Brainstem or Spinal Cord.
* **Corticospinal Tract (CST)**:**
    * **Lateral CST (85%)**:** Decussates at Medullary Pyramids. Controls **Distal Limbs** (Fine motor).
    * **Ventral CST (15%)**:** Descends ipsilaterally, decussates in spinal cord. Controls **Axial/Proximal** muscles (Posture).
* **Corticobulbar Tract**:**
    *   Controls Cranial Nerves (Head/Neck).
    * **Innervation**:** Most CN nuclei receive **Bilateral** input.
    * **Exceptions**:**
        * **CN VII (Face)**:**Lower Face** receives only *Contralateral* input. **Upper Face** is *Bilateral*.
        * **CN XII (Tongue)**:** Tongue deviates **AWAY** from the UMN lesion (towards the weak side).

## 2. UMN vs. LMN Lesions


| Feature | UMN Lesion (Cortex/Stem) | LMN Lesion (Nerve/Root) |
| :--- | :--- | :--- |
| **Tone** | **Spastic** (Increased) | **Flaccid** (Decreased) |
| **Reflexes** | **Hyperreflexia** | **Hyporeflexia** |
| **Babinski** | **Present (+)** (Toe up) | Absent (Toe down) |
| **Atrophy** | Mild (Disuse) | **Severe** (Denervation) |
| **Fasciculations** | No | **Yes** |

## 3. Brainstem Tracts & Posturing
* **Rubrospinal Tract**:** Originates in **Red Nucleus** (Midbrain). Flexor tones of upper limbs.
* **Vestibulospinal Tract**:** Extensor tone (Antigravity).
* **Decorticate Posture ("Mummy")**:**
    * **  *Lesion**:* **ABOVE** Red Nucleus (e.g., Cerebral Hemispheres).
    * **  *Presentation**:* Arms **Flexed** (Red nucleus intact), Legs Extended.
* **Decerebrate Posture**:**
    * **  *Lesion**:* **BELOW** Red Nucleus (e.g., Pons/Midbrain).
    * **  *Presentation**:* Arms **Extended**, Legs Extended (Rubrospinal lost, Vestibulospinal unopposed).

## 4. Specific Clinical Syndromes
* **Locked-In Syndrome**:**
    * **  *Lesion**:* **Pons** (Basilar Artery).
    * **  *Effect**:* Bilateral CST/Corticobulbar damage. Quadriplegia + Anarthria (can't speak).
    * **  *Spared**:* Vertical eye movements/Blinking (Midbrain/CN III spared). Consciousness intact.
* **Bell's Palsy (LMN CN VII)**:** Paralysis of **Entire Hemi-face** (Forehead + Chin).
* **Stroke (UMN CN VII)**:** Paralysis of **Lower Face Only** (Forehead spared).
`,
    pearls: [
        {
            title: "UMN vs LMN Face",
            content: "**UMN (Stroke):** Spares forehead (Look for wrinkles!).\\n**LMN (Bell's):** Affects whole face (Forehead smooth)."
        },
        {
            title: "Decorticate vs Decerebrate",
            content: "**De-COR-ticate:** Arms like **C**'s (Flexed to **Cor**e). Lesion **Above** Red Nucleus.\\n**De-cere-brate:** Arms like **E**'s (Extended). Lesion **Below** Red Nucleus (Worse prognosis)."
        },
        {
            title: "Tongue Deviation",
            content: "**Lick your lesions.**\\n**LMN:** Tongue deviates **TOWARD** lesion.\\n**UMN:** Tongue deviates **AWAY** from lesion."
        },
        {
            title: "Locked-In Syndrome",
            content: "Pontine Stroke. Quadriplegia. Only eyes move (Vertical). Consciousness preserved."
        },
        {
            title: "Pyramidal Decussation",
            content: "Occurs at the **Cervicomedullary Junction** (Lower Medulla)."
        }
    ],
    questions: [
        {
            question: "A patient presents with right-sided facial weakness involving the forehead and chin. What is the most likely location of the lesion?",
            options: [
                "Left Motor Cortex (Face area)",
                "Left Internal Capsule",
                "Right Facial Nerve (CN VII)",
                "Left Facial Nucleus",
                "Right Trigeminal Nerve"
            ],
            correctAnswer: 2,
            rationale: "Weakness of the **entire** hemiface (forehead + chin) indicates an **LMN** lesion (Bell's Palsy or CN VII injury) on the **same side**."
        },
        {
            question: "A comatose patient exhibits extension of both the upper and lower extremities when stimulated. This posturing suggests a lesion located:",
            options: [
                "Above the Red Nucleus",
                "Below the Red Nucleus (e.g., Pons)",
                "In the Spinal Cord",
                "In the Thalamus",
                "In the Cerebellum"
            ],
            correctAnswer: 1,
            rationale: "Extension of all limbs is **Decerebrate** posturing, which occurs with lesions **below** the Red Nucleus (rubrospinal tract lost)."
        },
        {
            question: "Which of the following is a classic sign of an Upper Motor Neuron (UMN) lesion?",
            options: [
                "Fasciculations",
                "Severe Atrophy",
                "Hyporeflexia",
                "Babinski Sign",
                "Flaccidity"
            ],
            correctAnswer: 3,
            rationale: "**Babinski sign** (extensor plantar response) is a hallmark of **UMN** dysfunction. The others are LMN signs."
        },
        {
            question: "A patient suffers a stroke affecting the Left Primary Motor Cortex. The tongue deviates to which side upon protrusion?",
            options: [
                "Left",
                "Right",
                "Does not deviate",
                "Upward",
                "Downward"
            ],
            correctAnswer: 1,
            rationale: "With a **UMN** lesion (Left Cortex), the tongue deviates **AWAY** from the lesion (towards the weak side). So it points to the **Right**.\\n*Wait, let me double check my pearl... LMN = Toward. UMN = Away. Correct. So Left Cortex lesion → Right Genioglossus weak → Tongue points Right. Correct Answer is Right.* (Options: Left/Right)."
        },
        {
            question: "Which tract is primarily responsible for voluntary fine motor control of the distal upper extremities?",
            options: [
                "Ventral Corticospinal Tract",
                "Lateral Corticospinal Tract",
                "Vestibulospinal Tract",
                "Reticulospinal Tract",
                "Tectospinal Tract"
            ],
            correctAnswer: 1,
            rationale: "The **Lateral Corticospinal Tract** controls distal muscles (hands/fingers). The Ventral tract controls axial muscles."
        }
    ],
    flashcards: [
        {
            front: "UMN Lesion Signs",
            back: "Spasticity, Hyperreflexia, Babinski (+)",
            tag: "Neurology"
        },
        {
            front: "LMN Lesion Signs",
            back: "Flaccidity, Atrophy, Fasciculations",
            tag: "Neurology"
        },
        {
            front: "Decorticate Posture",
            back: "Arms Flexed (Mummy). Lesion Above Red Nucleus.",
            tag: "Neurology"
        },
        {
            front: "Decerebrate Posture",
            back: "Arms Extended. Lesion Below Red Nucleus.",
            tag: "Neurology"
        },
        {
            front: "Bell's Palsy vs Stroke (Face)",
            back: "Bell's (LMN) = Whole Face. Stoke (UMN) = Lower Face.",
            tag: "Neurology"
        },
        {
            front: "Lateral Corticospinal Tract Decussation",
            back: "Medullary Pyramids",
            tag: "Neuroanatomy"
        },
        {
            front: "Rubrospinal Tract Origin",
            back: "Red Nucleus (Midbrain)",
            tag: "Neuroanatomy"
        },
        {
            front: "Locked-In Syndrome Lesion",
            back: "Pons (Basilar Artery)",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Neuroanatomy > Pyramidal & Extrapyramidal",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Spinal Tracts" }
        ]
    },
    mindmap: `
## Motor Systems

### UMN vs LMN
* **UMN**: Spastic, Babinski (+). Cortex → Cord.
* **LMN**: Flaccid, Fasciculations. Cord → Muscle.

### Tracts
* **Corticospinal**:
    * **  *Lateral***: Distal (Crosses Medulla).
    * **  *Ventral***: Axial.
* **Corticobulbar**: Face/Neck.
    * **  *CN VII***: Lower face = Contra Only.

### Posturing
* **Decorticate**: Flexed (Above Red Nuc).
* **Decerebrate**: Extended (Below Red Nuc).
\`
};

if (typeof window !== 'undefined') {
    window.L30_CONTENT = L30_CONTENT;
}
