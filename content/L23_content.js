export const L23_CONTENT = {
    id: "l23",
    summary: `
# Lecture 23: Pathology of Auditory and Vestibular System

**Lecturer:** A. Reno, D.O.
**Session:** Lecture 23

## 1. Approach to Dizziness (Slide 6-27)
*   **Vertigo:** Illusion of movement ("Spinning").
*   **Peripheral (Inner Ear):**
    *   *Nystagmus:* **Unidirectional** (usually horizontal/rotary).
    *   *Fixation:* **Extinguishes** nystagmus.
    *   *Walking:* Patient can usually walk.
    *   *Hearing:* Often affected (Tinnitus/Loss).
*   **Central (Brainstem/Cerebellum - Stroke/MS):**
    *   *Nystagmus:* **Bidirectional** or **Vertical**.
    *   *Fixation:* **Does NOT extinguish**.
    *   *Walking:* Patient often cannot stand/walk (Ataxia).
    *   *Hearing:* Usually normal.
    *   **"Red Flags":** Comparison to Stroke (HINTS Exam).

## 2. Key Vestibular Pathologies
### Benign Paroxysmal Positional Vertigo (BPPV)
*   **Duration:** **Seconds (< 1 minute)**.
*   **Trigger:** Head movement (Rolling over in bed).
*   **Mechanism:** Dislodged **Otoconia** (Calcium Carbonate crystals) in posterior semicircular canal.
*   **Diagnosis:** **Dix-Hallpike** maneuver (Rotary nystagmus).
*   **Treatment:** **Epley Maneuver**.

### Meniere's Disease (Endolymphatic Hydrops)
*   **Duration:** **Hours** (20 min - 24 hrs).
*   **Classic Triad:**
    1.  Episodic **Vertigo**.
    2.  **Tinnitus** ("Roaring").
    3.  **Sensorineural Hearing Loss** (Fluctuating, low frequency).
*   **Mechanism:** Excess Endolymph fluid.
*   **Treatment:** Low salt diet, **Diuretics** (HCTZ/Triamterene).

### Vestibulo-Cochlear Infections
*   **Vestibular Neuritis:** Vertigo **only** (No hearing loss). Duration: **Days**. Usually viral. Rx: Corticosteroids.
*   **Labyrinthitis:** Vertigo **+ Hearing Loss**. Viral or Bacterial.

## 3. Hearing Loss Evaluation (Slide 40-47)
### Conductive (CHL)
*   *Anatomy:* Outer/Middle ear (Wax, Otitis Media, Otosclerosis).
*   *Weber:* Lateralizes to **BAD** ear.
*   *Rinne:* **BC > AC** (Bone Conduction > Air Conduction).

### Sensorineural (SNHL)
*   *Anatomy:* Cochlea/Nerve (Presbycusis, Noise, Meniere's, Acoustic Neuroma).
*   *Weber:* Lateralizes to **GOOD** ear.
*   *Rinne:* **AC > BC** (Normal pattern, but reduced).

## 4. Clinical Correlates
:::correlate
**The HINTS Exam**
Used to distinguish Central (Stroke) from Peripheral vertigo in acute vestibular syndrome.
1.  **H**ead **I**mpulse: Normal impulse = **Central** (bad). (Peripheral has corrective saccade).
2.  **N**ystagmus: Direction changing = **Central**.
3.  **T**est of **S**kew: Vertical Skew = **Central**.
*Pearl:* "INFARCT" (Impulse Normal, Fast-phase Alternating, Refixation on Cover Test).
:::

:::correlate
**Acoustic Neuroma (Vestibular Schwannoma)**
*   Unilateral Sensorineural Hearing Loss + Tinnitus.
*   Slow growing.
*   Diagnose with **MRI**.
:::
`,
    pearls: [
        {
            title: "Vertigo Duration Clues",
            content: "**< 1 min:** BPPV.\\n**Hours:** Meniere's Disease.\\n**Days:** Vestibular Neuritis / Labyrinthitis."
        },
        {
            title: "Peripheral vs. Central Nystagmus",
            content: "**Peripheral:** Extinguishes with fixation. Horizontal/Rotary.\\n**Central:** Does NOT extinguish. Vertical or Direction-Changing."
        },
        {
            title: "Meniere's Triad",
            content: "1. Episodic Vertigo\\n2. Tinnitus (Roaring)\\n3. Sensorineural Hearing Loss."
        },
        {
            title: "Weber/Rinne Rules",
            content: "**Conductive:** Bad ear hears Weber louder. BC > AC.\\n**Sensorineural:** Good ear hears Weber louder. AC > BC."
        },
        {
            title: "Treatment of BPPV",
            content: "**Epley Maneuver** (Repositioning of otoconia)."
        }
    ],
    questions: [
        {
            question: "A 45-year-old woman complains of 'room-spinning' dizziness that lasts for 30 seconds when she rolls over in bed. It is associated with nausea. What is the most likely diagnosis?",
            options: [
                "Meniere's Disease",
                "Vestibular Neuritis",
                "Benign Paroxysmal Positional Vertigo (BPPV)",
                "Acoustic Neuroma",
                "Multiple Sclerosis"
            ],
            correctAnswer: 2,
            rationale: "**BPPV** is characterized by brief (<1 min) episodes of vertigo triggered by head position changes."
        },
        {
            question: "A patient presents with vertigo, tinnitus, and hearing loss in the right ear. The episodes last for about 4 hours. Which treatment is most appropriate for long-term management?",
            options: [
                "Epley Maneuver",
                "Antibiotics",
                "Low salt diet and Diuretics",
                "Carbamazepine",
                "Chemotherapy"
            ],
            correctAnswer: 2,
            rationale: "The patient has **Meniere's Disease** (Triad + Duration). Treatment involves reducing endolymph fluid with **salt restriction and diuretics**."
        },
        {
            question: "Weber test lateralizes to the LEFT ear. Rinne test shows Bone Conduction > Air Conduction on the LEFT. What is the diagnosis?",
            options: [
                "Right Sensorineural Hearing Loss",
                "Right Conductive Hearing Loss",
                "Left Sensorineural Hearing Loss",
                "Left Conductive Hearing Loss",
                "Normal Hearing"
            ],
            correctAnswer: 3,
            rationale: "Weber to the Left + Rinne BC > AC on Left = **Left Conductive Hearing Loss**. (In CHL, bone conduction is better than air, and it lateralizes to the affected ear)."
        },
        {
            question: "Which finding on physical exam strongly suggests a CENTRAL cause of vertigo (e.g., Stroke)?",
            options: [
                "Nystagmus that suppresses with fixation",
                "Unidirectional horizontal nystagmus",
                "Positive Head Impulse Test (Corrective Saccade)",
                "Vertical Nystagmus",
                "Hearing Loss"
            ],
            correctAnswer: 3,
            rationale: "**Vertical nystagmus** (or direction-changing nystagmus) is a red flag for **Central** pathology. Peripheral nystagmus is usually horizontal/rotary and suppresses with fixation."
        },
        {
            question: "A patient has sudden onset of severe vertigo lasting 3 days, with nausea and vomiting, but NO hearing loss. Findings include horizontal nystagmus. What is the most likely diagnosis?",
            options: [
                "Labyrinthitis",
                "Vestibular Neuritis",
                "Meniere's Disease",
                "BPPV",
                "Otosclerosis"
            ],
            correctAnswer: 1,
            rationale: "**Vestibular Neuritis** presents with continuous vertigo for days, often post-viral, with **preserved hearing**. (Labyrinthitis would include hearing loss)."
        }
    ],
    flashcards: [
        {
            front: "Diagnosis: Vertigo < 1 minute, triggered by movement",
            back: "BPPV (Benign Paroxysmal Positional Vertigo)",
            tag: "ENT"
        },
        {
            front: "Diagnosis: Vertigo (Hours) + Tinnitus + Hearing Loss",
            back: "Meniere's Disease",
            tag: "ENT"
        },
        {
            front: "Diagnosis: Vertigo (Days) + No Hearing Loss",
            back: "Vestibular Neuritis",
            tag: "ENT"
        },
        {
            front: "Diagnosis: Vertigo (Days) + Hearing Loss",
            back: "Labyrinthitis",
            tag: "ENT"
        },
        {
            front: "Weber Test Lateralization: Conductive Loss",
            back: "Lateralizes to the **BAD** (affected) ear",
            tag: "Diagnosis"
        },
        {
            front: "Weber Test Lateralization: Sensorineural Loss",
            back: "Lateralizes to the **GOOD** (unaffected) ear",
            tag: "Diagnosis"
        },
        {
            front: "Maneuver to Diagnose BPPV",
            back: "Dix-Hallpike",
            tag: "Diagnosis"
        },
        {
            front: "Maneuver to Treat BPPV",
            back: "Epley Maneuver",
            tag: "Treatment"
        },
        {
            front: "Mechanism of Meniere's Disease",
            back: "Endolymphatic Hydrops (Excess fluid in inner ear)",
            tag: "Pathology"
        },
        {
            front: "Central vs Peripheral Nystagmus: Fixation",
            back: "Peripheral suppresses with fixation. Central does NOT.",
            tag: "Diagnosis"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Vertigo and Dizziness",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Otology" },
            { resource: "BandB", chapter: "Neurology > The Ear" }
        ]
    },
    mindmap: `
## Vestibular Pathology

### Peripheral (Inner Ear)
*   **BPPV**: Seconds. Movement trigger. Otoconia. Rx: Epley.
*   **Meniere's**: Hours. Triad (Vertigo, Tinnitus, HL). Hydrops. Rx: Diuretics.
*   **Vestibular Neuritis**: Days. Viral. No HL.
*   **Labyrinthitis**: Days. HL + Vertigo.

### Central (Brain)
*   **Stroke / MS**: Vertical nystagmus. Ataxia. No fixation suppression. HINTS exam.

### Hearing Loss Testing
*   **Conductive**: Weber to Bad. BC > AC.
*   **Sensorineural**: Weber to Good. AC > BC.
\`
};

if (typeof window !== 'undefined') {
    window.L23_CONTENT = L23_CONTENT;
}
