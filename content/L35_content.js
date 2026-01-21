export const L35_CONTENT = {
    id: "l35",
    summary: `
# Lecture 35: Cranial Nerves I, II, III, IV, VI (Eye Movements)

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture 35

## 1. CN I (Olfactory) & CN II (Optic)
*   **CN I:** Visceral Sensory. Bypasses Thalamus.
    *   *Pathology:* **Anosmia** (Early sign of **Parkinson's** - Lewy bodies in Olfactory Bulb).
*   **CN II:** Special Sensory.
    *   *Reflex:* Pupillary Light Reflex (Afferent II → Pretectal Area → Bilateral Edinger-Westphal → Efferent III).

## 2. CN III (Oculomotor)
*   **Motor:** Medial, Superior, Inferior Recti; Inferior Oblique; Levator Palpebrae.
*   **Parasympathetic:** **Edinger-Westphal Nucleus** → Pupil Constriction (Miosis) & Lens Accommodation.
*   **Lesion (CN III Palsy):**
    *   **"Down and Out"** eye (Unopposed SO4/LR6).
    *   **Ptosis** (Droopy eyelid).
    *   **Mydriasis** (Blown pupil - loss of parasympathetics).
    *   *Note:* The **Superior Rectus** and **Levator** are innervated by the *Contralateral* nucleus, but the nerve fibers cross inside the complex, so a NERVE lesion affects the ipsilateral eye.

## 3. CN IV (Trochlear)
*   **Motor:** **Superior Oblique** (Depresses/Intorts eye).
*   **Unique Features:**
    1.  Only CN to exit **Dorsally**.
    2.  Only CN to **Decussate Completely** (Right Nucleus → Left Superior Oblique).
*   **Lesion:**
    *   **Vertical Diplopia** (Worse when looking down, e.g., stairs/reading).
    *   **Head Tilt:** Patient tilts head **AWAY** from the affected side to compensate/align eyes.

## 4. CN VI (Abducens) & Gaze Control
*   **Motor:** **Lateral Rectus** (Abducts eye).
*   **Horizontal Gaze Circuit:**
    *   To look RIGHT: Right PPRF → Right **Abducens Nucleus**.
    *   Right Abducens Nucleus does TWO things:
        1.  Contracts Ring Lateral Rectus (Abducts Right Eye).
        2.  Sends signal via **MLF** (Medial Longitudinal Fasciculus) to Left Oculomotor Nucleus → Contracts Left Medial Rectus (Adducts Left Eye).
*   **Pathology:**
    *   **CN VI Palsy:** Esotropia (Eye turns in).
    *   **INO (Internuclear Ophthalmoplegia):**
        *   Lesion of **MLF**.
        *   Ipsilateral eye cannot Adduct (Medial Rectus palsy).
        *   Contralateral eye has Nystagmus.
        *   Convergence is SPARED (because CN III is intact).
        *   *Classic Cause:* **Multiple Sclerosis** (Bilateral INO).

## 5. Summary Table

| Nerve | Muscles | Lesion Sign |
| :--- | :--- | :--- |
| **CN III** | All others + Levator + Pupil | Down & Out, Ptosis, Blown Pupil |
| **CN IV** | Superior Oblique | Head tilt AWAY, Vertical Diplopia (stairs) |
| **CN VI** | Lateral Rectus | Esotropia (Eye turns In) |
`,
    pearls: [
        {
            title: "SO4 LR6 All The Rest 3",
            content: "**S**uperior **O**blique = CN **4**.\\n**L**ateral **R**ectus = CN **6**.\\nAll other eye muscles = CN **3**."
        },
        {
            title: "CN IV Trochlear Trivia",
            content: "The only cranial nerve to exit from the **BACK** (Dorsal) of the brainstem. Also the only one to cross completely!"
        },
        {
            title: "INO (Internuclear Ophthalmoplegia)",
            content: "Lesion of **MLF**. Eye **lags** when looking towards nose (Adduction deficit). The other eye shakes (Nystagmus). Seen in **MS**."
        },
        {
            title: "Parkinson's Early Sign",
            content: "**Anosmia** (Loss of smell) is often the FIRST sign of Parkinson's, appearing years before motor symptoms."
        },
        {
            title: "Head Tilt in CN IV Palsy",
            content: "Head tilts **AWAY** from the lesion. (Right CN IV palsy = Left Head Tilt)."
        }
    ],
    questions: [
        {
            question: "A patient presents with vertical diplopia that worsens when walking down stairs. They are observed tilting their head to the left. Which cranial nerve is likely injured?",
            options: [
                "Left CN IV",
                "Right CN IV",
                "Left CN III",
                "Right CN VI",
                "Left CN VI"
            ],
            correctAnswer: 2,
            rationale: "Vertical diplopia (stairs problem) suggests **CN IV (Trochlear)** palsy. The head tilts **AWAY** from the lesion. Left tilt = **Right** CN IV lesion."
        },
        {
            question: "A patient cannot look to the right with the right eye. When attempting to look right, the left eye also fails to adduct. Convergence is intact. Where is the lesion?",
            options: [
                "Right Abducens Nerve",
                "Right Abducens Nucleus",
                "Right MLF",
                "Left MLF",
                "Right PPRF"
            ],
            correctAnswer: 2,
            rationale: "This is a **Right Abducens Nucleus** lesion. It knocks out the Right LR (Can't look right) AND the signal to the Left MR (via MLF), causing a gaze palsy to that side. (A simple nerve lesion would only affect the Right LR)."
        },
        {
            question: "In Internuclear Ophthalmoplegia (INO), the lesion is located in the:",
            options: [
                "Abducens Nerve",
                "Oculomotor Nerve",
                "Medial Longitudinal Fasciculus (MLF)",
                "Superior Colliculus",
                "Lateral Geniculate Nucleus"
            ],
            correctAnswer: 2,
            rationale: "**INO** is caused by damage to the **MLF**, disconnecting the Abducens nucleus from the contralateral Oculomotor nucleus."
        },
        {
            question: "Which cranial nerve contains the parasympathetic fibers responsible for pupillary constriction?",
            options: [
                "Optic (II)",
                "Oculomotor (III)",
                "Trochlear (IV)",
                "Trigeminal (V)",
                "Abducens (VI)"
            ],
            correctAnswer: 1,
            rationale: "**CN III (Oculomotor)** carries parasympathetics from the Edinger-Westphal nucleus to the ciliary ganglion for miosis and accommodation."
        },
        {
            question: "Anosmia is an early and often overlooked clinical sign of which neurodegenerative disorder?",
            options: [
                "Alzheimer's Disease",
                "Parkinson's Disease",
                "Huntington's Disease",
                "ALS",
                "Multiple Sclerosis"
            ],
            correctAnswer: 1,
            rationale: "**Parkinson's Disease** is strongly associated with early Anosmia due to Lewy Body deposition in the olfactory bulb."
        }
    ],
    flashcards: [
        {
            front: "Eye Muscles Innervation Mnemonic",
            back: "SO4, LR6, All Others 3",
            tag: "Neuroanatomy"
        },
        {
            front: "CN IV Exit Point",
            back: "Dorsal Brainstem (Midbrain)",
            tag: "Neuroanatomy"
        },
        {
            front: "CN III Palsy Signs",
            back: "Down & Out, Ptosis, Mydriasis",
            tag: "Neurology"
        },
        {
            front: "INO Lesion Location",
            back: "Medial Longitudinal Fasciculus (MLF)",
            tag: "Neurology"
        },
        {
            front: "Head Tilt in CN IV Palsy",
            back: "Away from Lesion",
            tag: "Neurology"
        },
        {
            front: "Vertical Diplopia Cause",
            back: "CN IV Palsy",
            tag: "Neurology"
        },
        {
            front: "Parasympathetic Nucleus for Eye",
            back: "Edinger-Westphal Nucleus",
            tag: "Neuroanatomy"
        },
        {
            front: "Abducens Nucleus Function",
            back: "Abducts Ipsilateral Eye + Adducts Contralateral Eye (via MLF)",
            tag: "Neurophysiology"
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
## Cranial Nerves I-VI

### Eye Movements
*   **CN III**: Everything Else. (Down/Out Palsy).
    *   *Parasymp*: Pupil constriction (EW Nuc).
*   **CN IV**: Sup. Oblique (Down/In). (Vertical Diplopia).
*   **CN VI**: Lateral Rectus (Out). (Esotropia).

### Gaze
*   **Horizontal**: PPRF → VI Nucleus → (Contra III via MLF).
*   **INO**: MLF Lesion. Lagging adduction.

### Other
*   **CN I**: Smell. Parkinson's Warning.
*   **CN II**: Vision. Afferent Limb of Light Reflex.
\`
};

if (typeof window !== 'undefined') {
    window.L35_CONTENT = L35_CONTENT;
}
