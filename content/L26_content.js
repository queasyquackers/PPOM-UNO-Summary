const L26_CONTENT = {
    id: 'l26',
    title: 'Lecture #26: DPR Neuro Exam Part 1',
    lecturer: 'R. Morgan, D.O.',
    module: 'DPR',
    session: 'Lecture #26',
    prev: 'l25',
    next: 'l27',
    pdf: 'pdfs/Lecture # 26. R. Morgan, D.O. (PPT).pdf',
    transcript: 'transcripts/Lecture #26_ DPR_ Neurologic Exam Part 1_ Mental Status, Cranial Nerves and the Eye Examination Faculty_ R. Morgan, D.O..srt',
    summary: `
# Lecture #26: DPR Neuro Exam Part 1

**Lecturer:** R. Morgan, D.O.
**Session:** DPR (Doctor-Patient Relationship)

## 1. Mental Status Exam (MSE)
*   **Components:** Appearance, Behavior, Speech, Mood, Affect, Cognition, Thought Process.
*   **Orientation:** Person, Place, Time (Alert & Oriented x3).
*   **Glasgow Coma Scale (GCS):**
    *   **Eye Opening (4):** Spontaneous(4), Voice(3), Pain(2), None(1).
    *   **Verbal (5):** Oriented(5), Confused(4), Inappropriate(3), Sounds(2), None(1).
    *   **Motor (6):** Obeys(6), Localizes(5), Withdraws(4), Flexion/Decorticate(3), Extension/Decerebrate(2), None(1).
    *   *Max:* 15. *Coma:* <= 8.

## 2. Cranial Nerve Exam
### CN I (Olfactory)
*   Test each nostril with non-irritating scent (coffee, vanilla).
*   Typically deferred unless specific complaint.

### CN II (Optic)
*   **Visual Acuity:** Snellen Chart (20/20).
*   **Visual Fields:** Confrontation test.
*   **Fundoscopy:** Check red reflex, optic disc (sharp margins), papilledema.

### CN III, IV, VI (Oculomotor, Trochlear, Abducens)
*   **Pupils:** Size, Shape, Direct/Consensual Reflex (CN II afferent, CN III efferent).
*   **H-Test:** Extraocular Movements (EOM).
    *   *LR6:* Lateral Rectus (CN VI).
    *   *SO4:* Superior Oblique (CN IV).
    *   *Rest:* CN III.
*   **Ptosis:** Check eyelids.

### CN V (Trigeminal)
*   **Sensory:** Light touch (V1, V2, V3).
*   **Motor:** Clench teeth (Temporalis, Masseter).
*   **Reflex:** Corneal Reflex (V1 Afferent, VII Efferent).

### CN VII (Facial)
*   **Motor:** Raise eyebrows, Frown, Close eyes tightly, Show teeth, Puff cheeks.
*   **Sensory:** Taste anterior 2/3 tongue.
*   **Lesion:**
    *   *Bell's Palsy (LMN):* Whole half of face paralyzed.
    *   *Stroke (UMN):* Forehead spared (can wrinkle forehead).

### CN VIII (Vestibulocochlear)
*   **Gross Hearing:** Whisper test / Finger rub.
*   **Weber/Rinne:** If indicated.

### CN IX, X (Glossopharyngeal, Vagus)
*   **Palate:** "Say Ahh". Uvula deviates **AWAY** from lesion.
*   **Gag Reflex:** Touch posterior pharynx.

### CN XI (Accessory)
*   **Motor:** Shoulder shrug (Trapezius) and Head turn (SCM) against resistance.

### CN XII (Hypoglossal)
*   **Motor:** Stick out tongue. Deviates **TOWARDS** lesion ("Lick your wounds").

## 3. Clinical Correlates
:::correlate
**CN XII Lesion**
*   **Sign:** Tongue deviation.
*   **Rule:** Tongue points **TOWARDS** the side of the lesion (weak side).
:::

:::correlate
**CN X Lesion**
*   **Sign:** Uvula deviation.
*   **Rule:** Uvula points **AWAY** from the side of the lesion (strong side pulls it).
:::
`,
    questions: [
        {
            question: "**1. During the H-test for extraocular movements, the patient is unable to look laterally (abduct) with their right eye. Which nerve is affected?**",
            options: [
                "CN III",
                "CN IV",
                "CN VI",
                "CN II",
                "CN VII"
            ],
            correctAnswer: 2,
            rationale: "The **Lateral Rectus** muscle performs abduction and is innervated by **CN VI (Abducens)**."
        },
        {
            question: "**2. A patient sticks out their tongue and it deviates to the LEFT. Where is the lesion?**",
            options: [
                "Right CN XII",
                "Left CN XII",
                "Right CN X",
                "Left CN X",
                "Left CN VII"
            ],
            correctAnswer: 1,
            rationale: "The tongue deviates **TOWARDS** the side of the lesion. A left deviation indicates a **Left CN XII** palsy."
        },
        {
            question: "**3. When the patient says 'Ahhh', the uvula deviates to the RIGHT. This indicates a lesion of:**",
            options: [
                "Right CN X",
                "Left CN X",
                "Right CN IX",
                "Left CN IX",
                "Right CN XII"
            ],
            correctAnswer: 1,
            rationale: "The uvula deviates **AWAY** from the lesion. Deviation to the right means the **Left** side is weak (Left CN X)."
        },
        {
            question: "**4. Which finding distinguishes a peripheral CN VII lesion (Bell's Palsy) from a central stroke?**",
            options: [
                "Inability to smile",
                "Inability to puff cheeks",
                "Inability to close eye",
                "Inability to wrinkle forehead",
                "Drooling"
            ],
            correctAnswer: 3,
            rationale: "In an **UMN lesion (Stroke)**, the forehead is spared (can wrinkle) due to bilateral innervation. In an **LMN lesion (Bell's Palsy)**, the entire half of the face including the forehead is paralyzed."
        },
        {
            question: "**5. The corneal reflex tests the integrity of which two cranial nerves?**",
            options: [
                "CN II and III",
                "CN III and IV",
                "CN V and VII",
                "CN VII and VIII",
                "CN IX and X"
            ],
            correctAnswer: 2,
            rationale: "The afferent limb (sensation) is **CN V (V1)**, and the efferent limb (blink) is **CN VII**."
        }
    ],
    flashcards: [
        { "front": "Eye muscle for lateral gaze (Abduction)?", "back": "Lateral Rectus (CN VI)", "tag": "Neuro" },
        { "front": "Tongue deviates to Left. Lesion?", "back": "Left CN XII", "tag": "Neuro" },
        { "front": "Uvula deviates to Right. Lesion?", "back": "Left CN X", "tag": "Neuro" },
        { "front": "Forehead sparing facial droop. Location?", "back": "UMN (Stroke)", "tag": "Neuro" },
        { "front": "Corneal Reflex Nerves?", "back": "In: CN V1, Out: CN VII", "tag": "Neuro" },
        { "front": "Gag Reflex Nerves?", "back": "In: CN IX, Out: CN X", "tag": "Neuro" },
        { "front": "Pupillary Light Reflex Nerves?", "back": "In: CN II, Out: CN III", "tag": "Neuro" },
        { "front": "How to test CN XI?", "back": "Shoulder Shrug", "tag": "Neuro" },
        { "front": "Glasgow Coma Scale Max Score?", "back": "15", "tag": "Neuro" }
    ],
    mindmap: `
## Cranial Nerve Exam
### Eyes
*   **CN II**: Vision, Fields, Fundoscopy.
*   **CN III, IV, VI**: Pupils, EOM (H-Test).
### Face
*   **CN V**: Sensation (Face), Motor (Jaw).
*   **CN VII**: Motor (Expression).
### Bulbar
*   **CN IX/X**: Palate (Uvula away), Gag.
*   **CN XII**: Tongue (Towards).
### Neck
*   **CN XI**: Shrug (Trap), Turn (SCM).
`
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Clinical Neurology > The Neurological Exam",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cranial Nerves" },
            { "resource": "Pathoma", "chapter": "Nervous System > Introduction" }
        ]
    }
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Clinical Neurology > The Neurological Exam",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Neurology > Anatomy > Cranial Nerves" },
            { "resource": "Pathoma", "chapter": "Nervous System > Introduction" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L26_CONTENT = L26_CONTENT;
}
