export const L36_CONTENT = {
    id: "l36",
    summary: `
# Lecture 36: Cranial Nerves V, VII-XII (Brainstem Nuclei)

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture 36

## 1. CN V (Trigeminal)
*   **Sensory (Face):**
    *   **Mesencephalic Nucleus:** Proprioception (Jaw jerk).
    *   **Principal (Pontine) Nucleus:** Discriminative Touch (Face).
    *   **Spinal Trigeminal Nucleus:** **Pain & Temperature** (Face). (Extends down to C-spine).
*   **Motor (V3):** Muscles of Mastication (Temporalis, Masseter, Pterygoids).
*   **Clinical:**
    *   *Trigeminal Neuralgia:* "Suicide disease". Sharp shooting pain.
    *   *Corneal Reflex:* Afferent V1 (Ophthalmic) $\\to$ Efferent VII (Facial).

## 2. CN VII (Facial)
*   **Motor:** Muscles of Facial Expression, Stapedius (dampens sound), Stylohyoid, Digastric (Post).
*   **Parasympathetic:** Superior Salivatory Nucleus $\\to$ Lacrimal (Tears), Submandibular/Sublingual (Saliva).
*   **Sensory:** Taste Anterior 2/3 of Tongue.
*   **Clinical:**
    *   **Bell's Palsy (LMN):** Ipsilateral paralysis of **ENTIRE** face (Forehead involved). Hyperacusis, Loss of taste.
    *   **UMN Lesion (Stroke):** Contralateral paralysis of LOWER face only (**Forehead Spared** due to bilateral innervation).

## 3. CN IX (Glossopharyngeal) & CN X (Vagus)
*   **CN IX:**
    *   *Sensory:* Post 1/3 Tongue (Taste/Feel), Carotid Body/Sinus.
    *   *Motor:* Stylopharyngeus.
    *   *Reflex:* **Gag Reflex (Afferent)**.
*   **CN X:**
    *   *Motor:* Nucleus Ambiguus $\\to$ Pharynx/Larynx/Palate.
    *   *Visceral:* Dorsal Motor Nucleus $\\to$ GI/Heart (Parasymp).
    *   *Reflex:* **Gag Reflex (Efferent)**.
    *   *Lesion:* **Uvula deviates AWAY** from lesion. Hoarseness.

## 4. CN XI (Accessory) & CN XII (Hypoglossal)
*   **CN XI:** Trapezius (Shrug), SCM (Turn head). *Lesion:* Shoulder droop, cannot turn head away from lesion.
*   **CN XII:** Tongue muscles. *Lesion:* **Tongue deviates TOWARD** lesion ("Lick your wounds").

## 5. Brainstem Syndromes
*   **Lateral Medullary (Wallenberg) Syndrome:**
    *   *Artery:* **PICA** (Posterior Inferior Cerebellar Artery).
    *   *Nuclei:*
        *   **Ambiguus:** Dysphagia, Hoarseness.
        *   **Vestibular:** Vertigo, Nystagmus.
        *   **Spinal V:** Ipsilateral Facial Pain/Temp loss.
        *   **Spinothalamic:** Contralateral Body Pain/Temp loss.
        *   **Sympathetic:** Ipsilateral Horner's Syndrome.
*   **Medial Medullary Syndrome:**
    *   *Artery:* **ASA** (Anterior Spinal Artery).
    *   *Nuclei:*
        *   **Hypoglossal (XII):** Tongue deviates to lesion.
        *   **Corticospinal Tract:** Contralateral Hemiparesis.
        *   **Medial Lemniscus:** Contralateral Proprioception/Vibration loss.
`,
    pearls: [
        {
            title: "Bell's Palsy vs Stroke",
            content: "**Bell's (LMN):** Can NOT wrinkle forehead (Whole face paralyzed).\\n**Stroke (UMN):** CAN wrinkle forehead (Forehead spared)."
        },
        {
            title: "Uvula vs Tongue",
            content: "**Uvula (CN X):** Deviates **AWAY** from lesion.\\n**Tongue (CN XII):** Deviates **TOWARD** lesion."
        },
        {
            title: "Corneal Reflex",
            content: "**In:** CN V1 (Feels the cotton).\\n**Out:** CN VII (Blinks the eye)."
        },
        {
            title: "Lateral Medullary Syndrome (Wallenberg)",
            content: "**PICA** stroke. Specific sign: **Dysphagia/Hoarseness** (Nucleus Ambiguus) + Crossed Pain/Temp (Face same side, Body opposite side)."
        },
        {
            title: "Gag Reflex",
            content: "**In:** CN IX (Glossopharyngeal).\\n**Out:** CN X (Vagus)."
        }
    ],
    questions: [
        {
            question: "A patient presents with sudden onset of right-sided facial drooping involving the forehead and the lower face. They also complain that sounds seem abnormally loud in the right ear. The most likely location of the lesion is:",
            options: [
                "Left Motor Cortex",
                "Right Internal Capsule",
                "Right Facial Nerve",
                "Left Facial Nerve",
                "Right Trigeminal Nerve"
            ],
            correctAnswer: 2,
            rationale: "**Right Facial Nerve (LMN)** lesion causes Bell's Palsy (Whole hemiface paralysis) and Hyperacusis (loss of Stapedius)."
        },
        {
            question: "A patient sticks out their tongue, and it deviates to the LEFT. There is atrophy of the left side of the tongue. Which nerve is injured?",
            options: [
                "Right CN XII",
                "Left CN XII",
                "Right CN X",
                "Left CN X",
                "Left CN VII"
            ],
            correctAnswer: 1,
            rationale: "The tongue deviates **TOWARD** the side of the lesion (Lick your wounds). Left deviation + Atrophy = **Left CN XII** (LMN) lesion."
        },
        {
            question: "In Lateral Medullary Syndrome (Wallenberg), which nucleus is responsible for the characteristic dysphagia and hoarseness?",
            options: [
                "Solitary Nucleus",
                "Nucleus Ambiguus",
                "Dorsal Motor Nucleus of Vagus",
                "Hypoglossal Nucleus",
                "Spinal Trigeminal Nucleus"
            ],
            correctAnswer: 1,
            rationale: "**Nucleus Ambiguus** provides motor innervation to the pharynx and larynx (via IX and X). Damage causes dysphagia and hoarseness."
        },
        {
            question: "Loss of the afferent limb of the corneal reflex would result from damage to which cranial nerve?",
            options: [
                "CN II",
                "CN III",
                "CN V1",
                "CN VII",
                "CN VIII"
            ],
            correctAnswer: 2,
            rationale: "The afferent (sensing) limb of the corneal reflex is **CN V1** (Ophthalmic division of Trigeminal). The efferent (blinking) is CN VII."
        },
        {
            question: "A patient has loss of pain and temperature sensation on the RIGHT side of the face and the LEFT side of the body. This 'crossed' sensory deficit suggests a lesion in the:",
            options: [
                "Right Lateral Medulla",
                "Left Lateral Medulla",
                "Right Medial Medulla",
                "Left Medial Medulla",
                "Right Thalamus"
            ],
            correctAnswer: 0,
            rationale: "Crossed findings (Ipsi Face, Contra Body) are a hallmark of brainstem lesions. **Right Lateral Medulla** hits Right Spinal V (Face) and Right Spinothalamic (carrying Left Body info)."
        }
    ],
    flashcards: [
        {
            front: "Corneal Reflex Limbs",
            back: "In: V1. Out: VII.",
            tag: "Neurology"
        },
        {
            front: "Gag Reflex Limbs",
            back: "In: IX. Out: X.",
            tag: "Neurology"
        },
        {
            front: "Tongue Deviation Rule",
            back: "Deviates TOWARD the lesion (Lick your wounds)",
            tag: "Neurology"
        },
        {
            front: "Uvula Deviation Rule",
            back: "Deviates AWAY from the lesion",
            tag: "Neurology"
        },
        {
            front: "Nucleus Ambiguus Function",
            back: "Motor to Pharynx/Larynx (Swallowing/Speech) - CN IX, X, XI",
            tag: "Neuroanatomy"
        },
        {
            front: "Wallenberg Syndrome Artery",
            back: "PICA (Posterior Inferior Cerebellar Artery)",
            tag: "Neurology"
        },
        {
            front: "Bell's Palsy vs Stroke (Face)",
            back: "Bell's = Whole Face. Stroke = Lower Face only (Forehead spared).",
            tag: "Neurology"
        },
        {
            front: "Hyperacusis Nerve",
            back: "CN VII (Stapedius muscle paralysis)",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Neuroanatomy > Cranial Nerves",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Cranial Nerves" }
        ]
    },
    mindmap: `
## Cranial Nerves V, VII-XII

### V (Trigeminal)
*   **Sensory**: Face (V1,2,3).
*   **Motor**: Mastication (V3).
*   **Path**: Neuralgia, Corneal Reflex (In).

### VII (Facial)
*   **Motor**: Face (Bell's vs Stroke).
*   **Parasymp**: Tears/Saliva.
*   **Sensory**: Taste Ant 2/3.

### Bulbar Group (IX, X, XII)
*   **IX**: Sensory Post 1/3. Gag (In).
*   **X**: Ambiguus (Swallow/Talk). Uvula (Away). Gag (Out).
*   **XII**: Tongue (Toward).

### Syndromes
*   **Lateral Medullary (PICA)**: Ambiguus (Dysphagia), Vestibular, Crossed Pain/Temp.
*   **Medial Medullary (ASA)**: Tongue (XII), CST, ML.
\`
};
