export const L18_CONTENT = {
    id: "l18",
    summary: `
# Lecture 18: Anatomy & Physiology of the Vestibular System

**Lecturer:** R. Ramos, Ph.D.
**Session:** Lecture 18

## 1. Peripheral Anatomy (Slide 4-15)
The Vestibular Labyrinth detects head motion via hair cells (mechanotransduction).
*   **Otolith Organs (Utricle & Saccule):**
    *   **Function:** Detect **Linear Acceleration** (e.g., gravity, elevator, car acceleration).
    *   **Mechanism:** Hair cells embedded in **Macula** covered by **Otoconia** (crystals). Gravity pulls crystals $\\to$ bends hairs.
    *   *Mnemonic:* **U**tricle = **U**pright (Horizontal plane). **S**accule = **S**ideways (Vertical plane).
*   **Semicircular Canals (Anterior, Posterior, Horizontal):**
    *   **Function:** Detect **Angular (Rotational) Acceleration** (head turning).
    *   **Mechanism:** **Crista Ampullaris** covered by **Cupula** (gelatin).
    *   *Fluid Dynamics:* When head turns Left, Endolymph lags (moves Right) $\\to$ bends Cupula.

## 2. Vestibular Pathways & Reflexes (Slide 16-20)
*   **Vestibulo-Ocular Reflex (VOR):** Stabilizes gaze during head movement.
    *   *Path:* Head Left $\\to$ Left SCC active $\\to$ Vestibular Nuclei $\\to$ Right CN VI (Abd) & Left CN III (MR) $\\to$ Eyes move **Right**.
*   **Vestibulo-Spinal Tracts:**
    *   *Lateral:* Extensor muscles (Anti-gravity/Balance).
    *   *Medial:* Neck muscles (Head stabilization).

## 3. Peripheral Vertigo Disorders (Slide 26-30)

:::correlate
**Benign Paroxysmal Positional Vertigo (BPPV)**
*   **Mechanism:** Otoconia (crystals) dislodge from Utricle and float into a **Semicircular Canal** (usually Posterior).
*   **Presentation:** **Brief (<1 min)** episodes of severe vertigo triggered by **Head Position** changes (rolling over in bed).
*   **Diagnosis:** **Dix-Hallpike Maneuver** elicits nystagmus.
*   **Treatment:** **Epley Maneuver** (repositions crystals).
:::

:::correlate
**Meniere's Disease**
*   **Mechanism:** **Endolymphatic Hydrops** (Excess fluid pressure).
*   **Presentation:** **Triad** of Episodic Vertigo (mins-hours) + **Tinnitus** + **Sensorineural Hearing Loss**.
*   **Treatment:** Low salt diet, Diuretics.
:::

:::correlate
**Labyrinthitis**
*   **Mechanism:** Inflammation/Infection of the inner ear.
*   **Presentation:** Continuous severe vertigo + Hearing Loss + Nausea. Often follows a viral infection.
:::

## 4. Central Vertigo Disorders (Slide 31-34)

:::correlate
**Wallenberg Syndrome (Lateral Medullary Syndrome)**
*   **Pathology:** Infarct of **PICA** (Posterior Inferior Cerebellar Artery).
*   **Signs:**
    *   **Vestibular Nuclei:** Vertigo, Nystagmus.
    *   **Nucleus Ambiguus:** dysphagia, hoarseness.
    *   **Spinothalamic Tract:** **Contralateral** loss of Pain/Temp (Body).
    *   **Spinal Trigeminal:** **Ipsilateral** loss of Pain/Temp (Face).
    *   **Sympathetic:** **Ipsilateral Horner's Syndrome** (Ptosis, Miosis, Anhidrosis).
:::

:::mnemonic
**Peripheral vs Central Vertigo**
*   **Peripheral:** **Severe** vertigo, **Hearing Loss** common, **Fatigable** nystagmus. (BPPV, Meniere's).
*   **Central:** **Mild** vertigo, **No Hearing Loss** (usually), **Non-fatigable** nystagmus, **CNS signs** (Ataxia, Dysphagia). (Stroke, MS).
:::
`,
    pearls: [
        {
            title: "Otoliths vs Canals",
            content: "**Otoliths** (Utricle/Saccule) = Linear/Gravity.\\n**Canals** (SCC) = Angular/Rotation."
        },
        {
            title: "BPPV Pathophysiology",
            content: "Dislodged Otoconia (Otoliths) floating in the Semicircular Canals."
        },
        {
            title: "Meniere's Triad",
            content: "1. Vertigo\\n2. Tinnitus\\n3. Hearing Loss (Fluctuating)."
        },
        {
            title: "Wallenberg Syndrome Artery",
            content: "**PICA** (Posterior Inferior Cerebellar Artery). Causes Lateral Medullary Syndrome."
        },
        {
            title: "Dix-Hallpike",
            content: "Diagnostic maneuver for **BPPV**. Induces nystagmus if positive."
        }
    ],
    questions: [
        {
            question: "A patient presents with episodes of room-spinning vertigo lasting 30 seconds, triggered only when rolling over in bed. Hearing is normal. What is the most likely diagnosis?",
            options: [
                "Meniere's Disease",
                "Vestibular Neuritis",
                "Benign Paroxysmal Positional Vertigo (BPPV)",
                "Acoustic Neuroma",
                "Wallenberg Syndrome"
            ],
            answer: 2,
            explanation: "**BPPV** is characterized by **brief (<1 min)**, **position-dependent** vertigo with **normal hearing**, caused by dislodged otoconia."
        },
        {
            question: "Which structure detects linear acceleration and head tilt relative to gravity?",
            options: [
                "Crista Ampullaris",
                "Semicircular Canals",
                "Otolith Organs (Utricle/Saccule)",
                "Cochlea",
                "Organ of Corti"
            ],
            answer: 2,
            explanation: "The **Otolith Organs** (Utricle and Saccule) contain the macula and otoconia, specifically designing them to detect **Linear Acceleration** and gravity."
        },
        {
            question: "A patient presents with vertigo, dysphagia (hoarseness), ipsilateral facial numbness, and contralateral body numbness. Examination reveals an ipsilateral Horner's syndrome. Which artery is occluded?",
            options: [
                "Anterior Spinal Artery",
                "Posterior Cerebral Artery (PCA)",
                "Posterior Inferior Cerebellar Artery (PICA)",
                "Anterior Inferior Cerebellar Artery (AICA)",
                "Middle Cerebral Artery (MCA)"
            ],
            answer: 2,
            explanation: "This is **Wallenberg (Lateral Medullary) Syndrome**, caused by occlusion of the **PICA**. The constellation of Vertigo (Vestibular), Dysphagia (Ambiguus), and Crossed Sensory loss is classic."
        },
        {
            question: "What is the primary mechanism of Meniere's Disease?",
            options: [
                "Otoconia dislodgement",
                "Endolymphatic Hydrops (Excess fluid)",
                "Demyelination",
                "Bacterial Infection",
                "Tumor Compression"
            ],
            answer: 1,
            explanation: "**Meniere's Disease** is caused by **Endolymphatic Hydrops** (swelling/excess pressure of the endolymphatic compartment)."
        },
        {
            question: "The Vestibulo-Ocular Reflex (VOR) allows for:",
            options: [
                "Hearing high frequencies",
                "Maintaining upright posture",
                "Stabilizing gaze during head movement",
                "Localizing sound in space",
                "Detecting gravity"
            ],
            answer: 2,
            explanation: "The **VOR** generates eye movements equal and opposite to head movements to **stabilize gaze** on a fixed target."
        }
    ],
    flashcards: [
        {
            front: "Function of Semicircular Canals",
            back: "Detect Angular (Rotational) Acceleration",
            tag: "Physiology"
        },
        {
            front: "Function of Otolith Organs (Utricle/Saccule)",
            back: "Detect Linear Acceleration & Gravity",
            tag: "Physiology"
        },
        {
            front: "Diagnosis: Brief positional vertigo, no hearing loss",
            back: "BPPV",
            tag: "Pathology"
        },
        {
            front: "Diagnosis: Vertigo + Tinnitus + Hearing Loss",
            back: "Meniere's Disease",
            tag: "Pathology"
        },
        {
            front: "Maneuver to treat BPPV",
            back: "Epley Maneuver",
            tag: "Clinical Skills"
        },
        {
            front: "Artery involved in Lateral Medullary Syndrome",
            back: "PICA (Posterior Inferior Cerebellar Artery)",
            tag: "Pathology"
        },
        {
            front: "Key signs of Wallenberg Syndrome",
            back: "Dysphagia, Vertigo, Horner's, Crossed Pain/Temp loss",
            tag: "Pathology"
        },
        {
            front: "Where are Otoconia normally located?",
            back: "Utricle and Saccule (Macula)",
            tag: "Anatomy"
        },
        {
            front: "Symptoms of Acoustic Neuroma",
            back: "Unilateral Hearing Loss, Tinnitus, Vertigo (CPA angle)",
            tag: "Pathology"
        },
        {
            front: "Fluid with high Potassium in Inner Ear",
            back: "Endolymph",
            tag: "Physiology"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > The Ear > Vestibular System",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Ophthalmology" },
            { resource: "Pathoma", chapter: "CNS" }
        ]
    },
    mindmap: `
## Vestibular System

### Peripheral Anatomy
*   **Otoliths** (Utricle/Saccule): Linear Accel, Gravity, Otoconia
*   **Semicircular Canals**: Angular Accel, Cupula

### Disorders
*   **Peripheral**
    *   **BPPV**: Loose Otoconia, Positional, Epley
    *   **Meniere's**: Hydrops, Triad (Vertigo/Tinnitus/HL)
    *   **Labyrinthitis**: Infection
    *   **Acoustic Neuroma**: CN VIII Tumor
*   **Central**
    *   **Wallenberg (PICA)**: Dysphagia, Horner's, Crossed Sensory

### Reflexes
*   **VOR**: Gaze stabilization
*   **Vestibulospinal**: Posture/Balance
\`
};
