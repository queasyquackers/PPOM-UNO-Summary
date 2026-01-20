export const L26_CONTENT = {
    id: "l26",
    summary: `
# Lecture 26: Neurologic Exam Part 1 - Cranial Nerves & Mental Status

**Lecturer:** L. Mark, D.O.
**Session:** Lecture 26

## 1. Mental Status & History
*   **Mental Status Exam:** Appearance, Behavior, Speech, Mood, Cognition.
*   **Glasgow Coma Scale (GCS):**
    *   **Score:** 3 (Coma) to 15 (Normal).
    *   **Components:** **E**ye opening, **V**erbal response, **M**otor response. ("EVM-456").

## 2. Cranial Nerve Examination
### CN I (Olfactory)
*   **Test:** Smell (Coffee, Cloves) one nostril at a time.
*   **Deficit:** Anosmia. (DDx: COVID-19, Kallmann Syndrome, Trauma).

### CN II (Optic)
*   **Visual Acuity:** Snellen Chart (20/20).
*   **Visual Fields:** Confrontation test (Static finger wiggle). detects Hemianopsia.
*   **Fundoscopy:**
    *   *Red Reflex:* Orange glow.
    *   *Optic Disc:* Check for Papilledema (blurred margins) or Cupping (Glaucoma).

### CN III, IV, VI (Oculomotor, Trochlear, Abducens)
*   **Pupils (CN III):**
    *   *Direct:* Constriction in illuminated eye.
    *   *Consensual:* Constriction in opposite eye.
    *   *Near Triad:* Convergence, Constriction, Accommodation.
*   **EOM:** H-Pattern.
    *   *CN VI Deficit:* Eye cannot look out (Lateral deviation failure).
    *   *CN III Deficit:* Eye is "Down and Out" + Ptosis + Dilated Pupil.

### CN V (Trigeminal)
*   **Sensory:** V1 (Opthalmic), V2 (Maxillary), V3 (Mandibular) - Pinprick/Light touch.
*   **Motor:** Muscles of Mastication (Temporalis/Masseter clench).
*   **Corneal Reflex:** **Afferent V1** (Senses touch) → **Efferent VII** (Blink).

### CN VII (Facial)
*   **Motor:** Facial expression (Smile, Frown, Puff cheeks, Close eyes tight).
    *   *Central Lesion (Stroke):* Spares forehead.
    *   *Peripheral Lesion (Bell's Palsy):* Affects entire half of face (Forehead + Lower).
*   **Sensory:** Taste Anterior 2/3.

### CN VIII (Vestibulocochlear)
*   **Gross Hearing:** Whisper test / Finger rub.
*   **Weber Test:** Tuning fork on vertex.
    *   *Lateralizes to BAD ear:* Conductive Loss.
    *   *Lateralizes to GOOD ear:* Sensorineural Loss.
*   **Rinne Test:** Mastoid (BC) vs. Air (AC).
    *   *AC > BC:* Normal or Sensorineural.
    *   *BC > AC:* Conductive Loss.

### CN IX, X (Glossopharyngeal, Vagus)
*   **Palate:** Say "Ah". Uvula deviates **AWAY** from lesion.
*   **Gag Reflex:** Sensory IX, Motor X.

### CN XI (Accessory)
*   **Motor:** Shrug shoulders (Trapezius), Turn head (SCM).

### CN XII (Hypoglossal)
*   **Motor:** Protrude tongue. Tongue deviates **TOWARDS** lesion ("Licks the lesion").
`,
    pearls: [
        {
            title: "Tongue Deviation",
            content: "CN XII Lesion: Tongue deviates **TOWARDS** the side of the lesion ('Licks the lesion')."
        },
        {
            title: "Uvula Deviation",
            content: "CN X Lesion: Uvula deviates **AWAY** from the side of the lesion (pulled by the strong side)."
        },
        {
            title: "Corneal Reflex",
            content: "**Afferent:** CN V1 (Sensation).\\n**Efferent:** CN VII (Blink)."
        },
        {
            title: "Rinne Interpretation",
            content: "**BC > AC** = Conductive Hearing Loss (Abnormal).\\n**AC > BC** = Normal (or Sensorineural)."
        },
        {
            title: "GCS Scoring",
            content: "**EVM-456**.\\nEyes (4), Verbal (5), Motor (6).\\nMax 15, Min 3."
        }
    ],
    questions: [
        {
            question: "A patient presents with right-sided hearing loss. Weber test lateralizes to the RIGHT ear. Rinne test shows Bone Conduction > Air Conduction on the right. What is the diagnosis?",
            options: [
                "Right Sensorineural Hearing Loss",
                "Right Conductive Hearing Loss",
                "Left Sensorineural Hearing Loss",
                "Left Conductive Hearing Loss",
                "Normal Hearing"
            ],
            correctAnswer: 1,
            rationale: "Weber lateralizing to the affected (bad) ear + Rinne BC > AC indicates a **Conductive Hearing Loss** in that ear."
        },
        {
            question: "On physical exam, a patient's tongue deviates to the LEFT when protruded. Which cranial nerve is lesioned?",
            options: [
                "Right CN XII",
                "Left CN XII",
                "Right CN X",
                "Left CN X",
                "Left CN IX"
            ],
            correctAnswer: 1,
            rationale: "The tongue deviates **towards** the side of the CN XII lesion (weak side). Left deviation = **Left CN XII** lesion."
        },
        {
            question: "When asking a patient to say 'Ah', the uvula deviates to the RIGHT. This suggests a lesion of which cranial nerve?",
            options: [
                "Right CN X",
                "Left CN X",
                "Right CN IX",
                "Left CN IX",
                "Right CN XII"
            ],
            correctAnswer: 1,
            rationale: "The uvula deviates **away** from the CN X lesion (pulled by the intact strong side). Right deviation = **Left CN X** lesion."
        },
        {
            question: "Which component of the corneal reflex is carried by the Facial Nerve (CN VII)?",
            options: [
                "Sensory Afferent (Pain)",
                "Sensory Afferent (Touch)",
                "Motor Efferent (Blink)",
                "Lacrimation only",
                "None"
            ],
            correctAnswer: 2,
            rationale: "CN V1 provides the sensory (Afferent) limb. **CN VII** provides the **Motor (Efferent)** limb to close the eyelid (Orbicularis Oculi)."
        },
        {
            question: "A patient has a dilated right pupil that is unresponsive to light, and the right eye is positioned 'down and out'. Which cranial nerve is affected?",
            options: [
                "CN II",
                "CN III",
                "CN IV",
                "CN VI",
                "CN VII"
            ],
            correctAnswer: 1,
            rationale: "These are classic signs of a **CN III (Oculomotor) Palsy**: Ptosis, Mydriasis (dilation), and Down-and-Out deviation."
        }
    ],
    flashcards: [
        {
            front: "Tongue Deviation Direction",
            back: "Towards the Lesion (CN XII)",
            tag: "Neurology"
        },
        {
            front: "Uvula Deviation Direction",
            back: "Away from the Lesion (CN X)",
            tag: "Neurology"
        },
        {
            front: "Corneal Reflex: Afferent Limb",
            back: "CN V1 (Ophthalmic)",
            tag: "Neurology"
        },
        {
            front: "Corneal Reflex: Efferent Limb",
            back: "CN VII (Facial)",
            tag: "Neurology"
        },
        {
            front: "Rinne Test: Conductive Loss Result",
            back: "BC > AC (Bone Conduction > Air Conduction)",
            tag: "Ent"
        },
        {
            front: "CN III Palsy Signs",
            back: "Down and Out eye, Ptosis, Dilated Pupil",
            tag: "Neurology"
        },
        {
            front: "Glasgow Coma Scale Components",
            back: "Eyes (4), Verbal (5), Motor (6)",
            tag: "Emergency"
        },
        {
            front: "Test for CN XI",
            back: "Shoulder Shrug (Trapezius) & Head Turn (SCM)",
            tag: "Neurology"
        },
        {
            front: "CN VII Test",
            back: "Facial Expressions (Smile, Frown, Puff Cheeks)",
            tag: "Neurology"
        },
        {
            front: "Weber Test Lateralization: Sensorineural",
            back: "To the GOOD ear",
            tag: "Ent"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Cranial Nerves",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Anatomy > Cranial Nerves" },
            { resource: "BandB", chapter: "Neurology > The Brainstem > Cranial Nerves" }
        ]
    },
    mindmap: `
## Neurologic Exam

### Cranial Nerves
*   **I**: Smell.
*   **II**: Acuity, Fields, Fundoscopy.
*   **III, IV, VI**: EOM, Pupils. (III: Down/Out, Dilated).
*   **V**: Face Sensation, Mastication, Corneal Afferent.
*   **VII**: Face Motor, Taste, Corneal Efferent.
*   **VIII**: Hearing (Weber/Rinne).
*   **IX, X**: Gag, Palate (Uvula Away).
*   **XI**: Shrug.
*   **XII**: Tongue (Deviates Towards).

### Mental Status
*   **GCS**: EVM (4-5-6). Max 15, Min 3.
\`
};
