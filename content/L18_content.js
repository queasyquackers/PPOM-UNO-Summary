const L18_CONTENT = {
    id: 'l18',
    title: 'Lecture #18: Vestibular System',
    lecturer: 'R. Ramos, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #18',
    prev: 'l17',
    next: 'l19',
    pdf: 'pdfs/Lecture # 18. R. Ramos, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #18_ Anatomy & Physiology Vestibular System Faculty_ Ramos PhD.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Vestibular'
    },
    summary: `
# Lecture #18: Vestibular System

**Lecturer:** Raddy L. Ramos, Ph.D.
**Session:** Neuroanatomy

## 1. Vestibular Anatomy
*   **Otolith Organs (Utricle & Saccule):** Detect **Linear** acceleration (Gravity/Tilt).
    *   *Macula:* Hair cells covered by Otoconia (Crystals).
    *   *Function:* Static tilt/Linear motion.
*   **Semicircular Canals:** Detect **Angular** acceleration (Rotation).
    *   *Ampulla/Cupula:* Hair cells detect fluid lag.
    *   *Organization:* 3 Orthogonal planes.

## 2. Pathways & Reflexes
*   **Vestibulo-Ocular Reflex (VOR):** Stabilizes gaze during head movement. (Head Left -> Eyes Right).
*   **Vestibulospinal Tracts:** Postural control.
*   **Nystagmus:** Defined by the **Fast** phase (Reset).

## 3. Peripheral vs. Central Vertigo (Slide 37)
*   **Peripheral:** Severe vertigo, Tinnitus/Hearing loss, Horizontal nystagmus (inhibited by fixation).
*   **Central:** Mild vertigo, **No** hearing loss, Vertical/Direction-changing nystagmus, Focal neurologic signs.

## 4. Clinical Correlates
:::correlate
**BPPV (Benign Paroxysmal Positional Vertigo)**
*   **Cause:** Displaced Otoconia (Otoliths) in Semicircular Canal.
*   **Symptoms:** **Brief** (<1 min) episodes of severe vertigo triggered by head position.
*   **Diagnosis:** **Dix-Hallpike** maneuver.
*   **Treatment:** **Epley** maneuver.
:::

:::correlate
**Meniere's Disease**
*   **Triad:** Vertigo + Tinnitus + Sensorineural Hearing Loss.
*   **Pathology:** Endolymphatic Hydrops (Excess fluid pressure).
*   **Course:** Episodes last hours (not seconds like BPPV).
:::

:::correlate
**Labyrinthitis/Vestibular Neuritis**
*   **Cause:** Viral infection/Inflammation.
*   **Symptoms:** Continuous severe vertigo for days, Nausea/Vomiting. (+ Hearing loss in Labyrinthitis).
:::

:::correlate
**Wallenberg Syndrome (Lateral Medullary)**
*   **Cause:** **PICA** Stroke.
*   **Signs:**
    *   Vertigo/Nystagmus (Vestibular Nuclei).
    *   Cerebellar signs (Ataxia).
    *   Loss of Pain/Temp (Face - Ipsi; Body - Contra).
    *   Dysphagia/Hoarseness (Nucleus Ambiguus).
    *   Horner's Syndrome.
:::
`,
    questions: [
        {
            question: "**1. A patient presents with acute vertigo lasting seconds, triggered by rolling over in bed. Hearing is normal. Dix-Hallpike maneuver elicits rotatory nystagmus. What is the diagnosis?**",
            options: [
                "Meniere's Disease",
                "Vestibular Neuritis",
                "BPPV",
                "Acoustic Neuroma",
                "Cerebellar Stroke"
            ],
            correctAnswer: 2,
            rationale: "**BPPV** is characterized by distinct, brief episodes of vertigo triggered by position changes, caused by loose otoconia. Dix-Hallpike is diagnostic."
        },
        {
            question: "**2. Which component of the vestibular system detects linear acceleration (like riding an elevator)?**",
            options: [
                "Semicircular Canals",
                "Utricle and Saccule",
                "Cochlea",
                "Ampulla",
                "Organ of Corti"
            ],
            correctAnswer: 1,
            rationale: "The **Otolith Organs (Utricle & Saccule)** detect linear acceleration and gravity. Semicircular canals detect angular (rotational) acceleration."
        },
        {
            question: "**3. A patient presents with Vertigo, Tinnitus, and Hearing Loss in the left ear. Episodes last 2-4 hours. What is the most likely pathology?**",
            options: [
                "Displaced Otoconia",
                "Endolymphatic Hydrops",
                "Viral Inflammation of CN VIII",
                "PICA Stroke",
                "Autoimmune Demyelination"
            ],
            correctAnswer: 1,
            rationale: "This is the classic triad of **Meniere's Disease**, which is caused by **Endolymphatic Hydrops** (fluid buildup)."
        },
        {
            question: "**4. Wallenberg Syndrome (Lateral Medullary Syndrome) is caused by occlusion of which artery?**",
            options: [
                "AICA",
                "PICA",
                "ASA",
                "PCA",
                "Middle Meningeal"
            ],
            correctAnswer: 1,
            rationale: "Wallenberg Syndrome is the classic **PICA** (Posterior Inferior Cerebellar Artery) infarct."
        },
        {
            question: "**5. In the Vestibulo-Ocular Reflex (VOR), if the head turns to the LEFT, which extraocular muscles are activated to maintain fixation?**",
            options: [
                "Left Lateral Rectus, Right Medial Rectus",
                "Right Lateral Rectus, Left Medial Rectus",
                "Left Lateral Rectus, Left Medial Rectus",
                "Right Superior Oblique",
                "Left Inferior Oblique"
            ],
            correctAnswer: 1,
            rationale: "To compensate for a **Left** head turn, the eyes must move **Right**. This requires the **Right Lateral Rectus** (CN VI) and the **Left Medial Rectus** (CN III)."
        }
    ],
    flashcards: [
        { "front": "BPPV Trigger?", "back": "Head position", "tag": "Clinical" },
        { "front": "BPPV Diagnosis?", "back": "Dix-Hallpike Maneuver", "tag": "Clinical" },
        { "front": "BPPV Treatment?", "back": "Epley Maneuver", "tag": "Clinical" },
        { "front": "Triad of Meniere's Disease?", "back": "Vertigo + Tinnitus + Hearing Loss", "tag": "Clinical" },
        { "front": "Detects Angular/Rotational Motion?", "back": "Semicircular Canals", "tag": "Physiology" },
        { "front": "Detects Linear Motion/Gravity?", "back": "Otolith Organs (Utricle/Saccule)", "tag": "Physiology" },
        { "front": "Cause of Wallenberg Syndrome?", "back": "PICA Occlusion", "tag": "Clinical" },
        { "front": "Wallenberg: Dysphagia/Hoarseness source?", "back": "Nucleus Ambiguus", "tag": "Neuro" },
        { "front": "Peripheral vs Central Vertigo: Which has hearing loss?", "back": "Peripheral", "tag": "Clinical" },
        { "front": "VOR function?", "back": "Stabilize gaze during head movement", "tag": "Physiology" }
    ],
    mindmap: `
## Vestibular System
### Anatomy
*   **Otolith Organs**: Linear/Gravity (Macula + Crystals)
*   **Semicircular Canals**: Angular/Rotation (Ampulla + Cupula)
### Conditions
*   **BPPV**: Loose Crystals, Brief Vertigo, Positional. (Dix-Hallpike)
*   **Meniere's**: Hydrops triad (Vertigo/Tinnitus/Hearing Loss).
*   **Labyrinthitis**: Inflammation (Viral).
*   **Acoustic Neuroma**: CP Angle tumor.
*   **Wallenberg**: PICA Stroke (Central Vertigo + Crossed Pain/Temp + Dysphagia).
`
};

if (typeof window !== 'undefined') {
    window.L18_CONTENT = L18_CONTENT;
}
