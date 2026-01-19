export const L45_CONTENT = {
    id: "l45",
    summary: `
# Lecture 45: Structure-Function Integration to Identify Lesions

**Lecturers:** J. Xie, Ph.D. & K. Poole, Ph.D.
**Session:** Lecture 45

## 1. Brainstem Vascular Syndromes
*   **Lateral Medullary Syndrome (Wallenberg):**
    *   *Artery:* **PICA** (Posterior Inferior Cerebellar Artery) or Vertebral Artery.
    *   *Key Structures & Symptoms:*
        *   **Nucleus Ambiguus (CN 9, 10):** Dysphagia, Hoarseness, Decreased Gang Reflex. (**Specific to Lateral**).
        *   **Vestibular Nuclei:** Vertigo, Nystagmus, Vomiting.
        *   **Sympathetic Tract:** **Horner's Syndrome** (Ipsilateral).
        *   **Spinal Trigeminal Nucleus:** Loss of Pain/Temp on **Ipsilateral Face**.
        *   **Spinothalamic Tract:** Loss of Pain/Temp on **Contralateral Body**.
        *   **Inferior Cerebellar Peduncle:** Ataxia (Fall toward lesion).
    *   *Mnemonic:* "Don't **PICA** horse (hoarseness) that can't eat (dysphagia)."
*   **Medial Medullary Syndrome:**
    *   *Artery:* **Anterior Spinal Artery (ASA)**.
    *   *Key Structures & Symptoms:*
        *   **Corticospinal Tract:** Contralateral Hemiparesis (Upper & Lower limbs).
        *   **Medial Lemniscus:** Contralateral loss of Proprioception/Vibration.
        *   **CN XII (Hypoglossal):** Tongue deviates **Toward** the lesion ("Lick your wounds").
*   **Medial Pontine Syndrome:**
    *   *Artery:* Paramedian branches of Basilar Artery.
    *   *Key:* Contralateral Hemiparesis + **CN VI** (Abducens) palsy (Eye can't look out).

## 2. Cranial Nerve & Vessel Associations
*   **CN III (Oculomotor):**
    *   Runs between **Posterior Cerebral Artery (PCA)** and **Superior Cerebellar Artery (SCA)**.
    *   Susceptible to **PCom Aneurysms** → **Dilated Pupil** + Down & Out Eye.

## 3. Cerebellar Lesions
*   **Lateral Cerebellum (Hemispheres):**
    *   Affects **Limbs**.
    *   *Signs:* Dysdiadochokinesia, Intention Tremor, Dysmetria.
    *   *Side:* **Ipsilateral** fall/ataxia.
*   **Medial Cerebellum (Vermis/Flocculonodular):**
    *   Affects **Trunk**.
    *   *Signs:* Truncal Ataxia, Wide-based gait, Nystagmus.
    *   *Alcohol:* Specific damage to **Vermis**.

## 4. Spinal Cord Tracts Review
*   **Dorsal Column-Medial Lemniscus (DCML):**
    *   *Function:* Touch, Vibration, Proprioception.
    *   *Crossing:* Medulla (Internal Arcuate Fibers).
*   **Spinothalamic Tract (STT):**
    *   *Function:* Pain, Temperature.
    *   *Crossing:* Spinal Cord (Anterior White Commissure, 1-2 levels up).
*   **Corticospinal Tract (CST):**
    *   *Function:* Voluntary Motor.
    *   *Crossing:* Medulla (Pyramids).

`,
    pearls: [
        {
            title: "Rule of 4s: Medial vs Lateral",
            content: "**Medial** structures: Motor pathway (CST), Medial Lemniscus, MLF, Motor CNs (3, 4, 6, 12).\\n**Lateral** structures: Spinothalamic, Spinocerebellar, Spinal Trigeminal, Sympathetic, Sensory CNs (8)."
        },
        {
            title: "Wallenberg Hallmark",
            content: "The **ONLY** brainstem stroke with **Dysphagia/Hoarseness** (Nucleus Ambiguus) is Lateral Medullary (PICA)."
        },
        {
            title: "Tongue Deviation",
            content: "CN XII lesion: Tongue deviates **TOWARD** the side of the lesion ('Lick your wounds'). This is the hallmark of **Medial Medullary Syndrome**."
        },
        {
            title: "PCom Aneurysm",
            content: "A 'Blown Pupil' (Dilated) with a CN III palsy is a **PCom Aneurysm** until proven otherwise. Ischemic CN III palsy (Diabetes) spares the pupil."
        },
        {
            title: "Cerebellar Hemisphere vs Vermis",
            content: "**Lateral** = **L**imbs (Arm/Leg ataxia).\\n**Medial** (Ver**M**is) = **Midline** (Trunk/Gait ataxia)."
        }
    ],
    questions: [
        {
            question: "A 65-year-old male presents with sudden onset vertigo, vomiting, and difficulty swallowing (dysphagia). Exam shows a droopy left eyelid, small left pupil, loss of pain sensation on the left face, and loss of pain sensation on the right body. Where is the lesion?",
            options: [
                "Right Lateral Medulla",
                "Left Lateral Medulla",
                "Left Medial Medulla",
                "Right Medial Pons",
                "Left Lateral Pons"
            ],
            correctAnswer: 1,
            rationale: "**Left Lateral Medullary Syndrome (Wallenberg):** Ipsilateral Horner's, Ipsilateral Face sensory loss, Contralateral Body sensory loss, Dysphagia (Nucleus Ambiguus). Lesion is on the **Left**."
        },
        {
            question: "A patient presents with right-sided hemiparesis (arm and leg) and the tongue deviates to the left upon protrusion. Sensation of pain and temperature is intact. Which artery is likely occluded?",
            options: [
                "Left PICA",
                "Right PICA",
                "Left Anterior Spinal Artery",
                "Right Anterior Spinal Artery",
                "Basilar Artery"
            ],
            correctAnswer: 2,
            rationale: "**Medial Medullary Syndrome:** Tongue deviates **Toward** lesion (Left CN XII). Hemiparesis is **Contralateral** (Right side). Artery is the **Anterior Spinal Artery**."
        },
        {
            question: "Alcoholic cerebellar degeneration primarily affects which structure, resulting in a wide-based, ataxic gait?",
            options: [
                "Flocculus",
                "Lateral Hemispheres",
                "Vermis",
                "Dentate Nucleus",
                "Inferior Olive"
            ],
            correctAnswer: 2,
            rationale: "Chronic alcohol use causes atrophy of the **Anterior Vermis**, leading to truncal ataxia and gait instability (legs/trunk), often sparing the arms."
        },
        {
            question: "A cavernous sinus thrombosis would most likely affect which cranial nerve traveling through the sinus?",
            options: [
                "Optic Nerve (CN II)",
                "Abducens Nerve (CN VI)",
                "Facial Nerve (CN VII)",
                "Vestibulocochlear Nerve (CN VIII)",
                "Hypoglossal Nerve (CN XII)"
            ],
            correctAnswer: 1,
            rationale: "**CN VI (Abducens)** travels *inside* the cavernous sinus (along with the Carotid Artery). CN III, IV, V1, V2 are in the lateral wall. CN VI is often the first affected."
        },
        {
            question: "In Brown-Séquard syndrome (spinal cord hemisection), pain and temperature sensation are lost:",
            options: [
                "Ipsilateral to the lesion at the level of the lesion",
                "Contralateral to the lesion, 1-2 segments below",
                "Ipsilateral to the lesion, 1-2 segments below",
                "Bilaterally at the level of the lesion only",
                "Completely preserved"
            ],
            correctAnswer: 1,
            rationale: "Spinothalamic tract crosses almost immediately. A hemisection causes **Contralateral** loss of Pain/Temp starting 1-2 segments below the lesion."
        }
    ],
    flashcards: [
        {
            front: "Wallenberg Syndrome Artery",
            back: "PICA (Posterior Inferior Cerebellar Artery)",
            tag: "Neurology"
        },
        {
            front: "Wallenberg Syndrome Key Symptom",
            back: "Dysphagia / Hoarseness (Nucleus Ambiguus)",
            tag: "Neurology"
        },
        {
            front: "Medial Medullary Artery",
            back: "Anterior Spinal Artery (ASA)",
            tag: "Neurology"
        },
        {
            front: "Medial Medullary Key Sign",
            back: "Tongue deviation to lesion side + Contralateral Hemiparesis",
            tag: "Neurology"
        },
        {
            front: "Cerebellar Vermis Lesion",
            back: "Truncal Ataxia (Drunk walk)",
            tag: "Neurology"
        },
        {
            front: "Cerebellar Hemisphere Lesion",
            back: "Limb Ataxia (Finger-to-Nose)",
            tag: "Neurology"
        },
        {
            front: "CN 3 Palsy + Dilated Pupil",
            back: "PCom Aneurysm",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Brainstem Syndromes",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Brainstem" }
        ]
    },
    mindmap: `
## Brainstem Syndromes

### Medulla
*   **Lateral (Wallenberg)**: PICA. Dysphagia, Horner, Ataxia, Crossed Analgesia.
*   **Medial**: ASA. Tongue deviation (Ipsi), Hemiparesis (Contra).

### Pons
*   **Medial**: Basilar. CN 6 (Eye in), Hemiparesis.
*   **Lateral**: AICA. Facial Droop (CN 7), Deafness (CN 8).

### Cerebellum
*   **Vermis**: Truncal Ataxia (Alcohol).
*   **Hemisphere**: Limb Ataxia (Dysdiadochokinesia).
\`
};
