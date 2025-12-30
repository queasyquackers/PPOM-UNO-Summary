const L23_CONTENT = {
    id: 'l23',
    title: 'Lecture #23: Pathology of Auditory and Vestibular System',
    lecturer: 'A. Reno, D.O.',
    module: 'Neurology',
    session: 'Lecture #23',
    prev: 'l22',
    next: 'l24',
    pdf: 'pdfs/Lecture # 23. A. Reno, D.O. (PPT).pdf',
    transcript: 'transcripts/Lecture #23_ Pathology of Auditory and Vestibular System Faculty_ A. Reno, D.O..srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > The Ear'
    },
    summary: `
# Lecture #23: Pathology of Auditory & Vestibular System

**Lecturer:** Adam Reno, D.O.
**Session:** Neurology

## 1. Vertigo & Dizziness
*   **Definitions:** It is critical to distinguish "lightheadedness" (presyncope) from **Vertigo** (illusion of movement/spinning).
*   **Peripheral vs. Central Vertigo:**
    *   **Peripheral:**
        *   *Nystagmus:* Horizontal/Rotary, **Extinguishes** with fixation, **Fatigable**.
        *   *Hearing:* Often associated with tinnitus/hearing loss.
        *   *Gait:* Walking preserved (usually).
        *   *Examples:* BPPV, Meniere's, Vestibulitis.
    *   **Central:**
        *   *Nystagmus:* Vertical/Purely Rotary, **Does NOT extinguish**, **Non-fatigable**.
        *   *Hearing:* Usually normal.
        *   *Gait:* Severe ataxia (cannot walk).
        *   *Examples:* Stroke (Cerebellar/Brainstem), MS, Tumors.

## 2. Specific Vestibular Disorders
### Benign Paroxysmal Positional Vertigo (BPPV)
*   **Mechanism:** Dislodged otoconia (calcium carbonate crystals) in semicircular canals (usually Posterior).
*   **Presentation:** Episodic vertigo (< 1 minute) triggered by **head movement**. No hearing loss.
*   **Diagnosis:** **Dix-Hallpike Maneuver** (Rotary nystagmus).
*   **Treatment:** **Epley Maneuver**.

### Vestibular Neuritis (Vestibulitis)
*   **Mechanism:** Inflammation of CN VIII (often post-viral).
*   **Presentation:** **Continuous** vertigo for days. Nausea/Vomiting. **No hearing loss**.
*   **Exam:** Positive Head Impulse Test. Nystagmus away from lesion.

### Labyrinthitis
*   **Mechanism:** Inflammation of inner ear (Cochlea + Vestibule).
*   **Presentation:** Continuous vertigo + **Hearing Loss** + Tinnitus.

### Meniere's Disease (Endolymphatic Hydrops)
*   **Mechanism:** Increased endolymphatic fluid pressure.
*   **Triad:** 1. Episodic Vertigo (min-hours) 2. Sensorineural Hearing Loss (fluctuating, low-freq) 3. Tinnitus ("Roaring") / Aural fullness.
*   **Treatment:** Low sodium diet, Diuretics (HCTZ/Triamterene).

## 3. Hearing Loss Evaluation
*   **Conductive (CHL):** Outer/Middle ear problem (Cerumen, Otitis Media, Otosclerosis).
*   **Sensorineural (SNHL):** Inner ear/Nerve problem (Presbycusis, Noise, Drugs, Meniere's).
*   **Tuning Fork Tests (512 Hz):**
    *   **Weber:**
        *   *Normal:* Midline.
        *   *CHL:* Localizes to **AFFECTED** ear.
        *   *SNHL:* Localizes to **UNAFFECTED** ear.
    *   **Rinne:**
        *   *Normal:* AC > BC (Positive).
        *   *CHL:* BC > AC (Negative).
        *   *SNHL:* AC > BC (Positive - but reduced duration/volume compared to normal).

## 4. Clinical Correlates
:::correlate
**Acoustic Neuroma (Vestibular Schwannoma)**
*   **Mechanism:** Tumor of Schwann cells on CN VIII (Cerebellopontine angle).
*   **Presentation:** Unilateral SNHL, Tinnitus, Vertigo (late).
*   **Association:** Neurofibromatosis Type 2 (Bilateral acoustic neuromas).
:::

:::correlate
**Pharmacology**
*   **Ototoxicity:** Aminoglycosides (Gentamicin), Loop Diuretics (Furosemide), Cisplatin, ASA.
*   **Vertigo Tx:** Antihistamines (Meclizine), Benzodiazepines (Diazepam - acute only), Antiemetics (Ondansetron).
:::
`,
    questions: [
        {
            question: "**1. A 65-year-old male presents with sudden onset of room-spinning dizziness when he rolls over in bed. Symptoms last for 30 seconds. Hearing is normal. What is the most likely diagnosis?**",
            options: [
                "Meniere's Disease",
                "Vestibular Neuritis",
                "BPPV",
                "Acoustic Neuroma",
                "Cerebellar Stroke"
            ],
            correctAnswer: 2,
            rationale: "**BPPV** presents with brief (<1 min) episodes of vertigo triggered by head position changes. There is no associated hearing loss."
        },
        {
            question: "**2. A patient has Weber test lateralizing to the Right ear and Rinne test showing BC > AC in the Right ear. What is the diagnosis?**",
            options: [
                "Right Sensorineural Hearing Loss",
                "Left Sensorineural Hearing Loss",
                "Right Conductive Hearing Loss",
                "Left Conductive Hearing Loss",
                "Normal Hearing"
            ],
            correctAnswer: 2,
            rationale: "Weber to the Right + Rinne Negative (BC > AC) on the Right indicates a **Right Conductive Hearing Loss**."
        },
        {
            question: "**3. Which finding suggests a CENTRAL cause of vertigo?**",
            options: [
                "Nystagmus that suppresses with fixation",
                "Horizontal nystagmus",
                "Severe inability to walk (Ataxia)",
                "Associated tinnitus",
                "Fatigable nystagmus"
            ],
            correctAnswer: 2,
            rationale: "**Severe ataxia** and nystagmus that does *not* suppress with fixation are red flags for central vertigo (e.g., Stroke)."
        },
        {
            question: "**4. Meniere's Disease is characterized by which triad of symptoms?**",
            options: [
                "Vertigo, Headache, Photophobia",
                "Vertigo, Hearing Loss, Tinnitus",
                "Vertigo, Dysarthria, Diplopia",
                "Syncope, Hearing Loss, Tinnitus",
                "Dizziness, Nausea, Vomiting only"
            ],
            correctAnswer: 1,
            rationale: "The classic triad for **Meniere's** is episodic vertigo, sensorineural hearing loss (often low frequency), and tinnitus/aural fullness."
        },
        {
            question: "**5. What is the treatment for BPPV?**",
            options: [
                "Salt restriction",
                "Antibiotics",
                "Epley Maneuver",
                "Corticosteroids",
                "Hearing Aids"
            ],
            correctAnswer: 2,
            rationale: "The **Epley Maneuver** repositions the dislodged otoliths out of the semicircular canal."
        }
    ],
    flashcards: [
        { "front": "Diagnosis: Vertigo < 1 min, triggered by head movement?", "back": "BPPV", "tag": "Neuro" },
        { "front": "Diagnosis: Continuous vertigo, no hearing loss, post-viral?", "back": "Vestibular Neuritis", "tag": "Neuro" },
        { "front": "Diagnosis: Episodic vertigo + Hearing Loss + Tinnitus?", "back": "Meniere's Disease", "tag": "Neuro" },
        { "front": "Diagnosis: Continuous vertigo + Hearing Loss?", "back": "Labyrinthitis", "tag": "Neuro" },
        { "front": "Nystagmus in Peripheral Vertigo?", "back": "Horizontal/Rotary, Fatigable, Suppresses with fixation", "tag": "Neuro" },
        { "front": "Nystagmus in Central Vertigo?", "back": "Vertical, Non-fatigable, No suppression", "tag": "Neuro" },
        { "front": "Weber lateralizes to Right ear. Causes?", "back": "Right Conductive OR Left Sensorineural", "tag": "Neuro" },
        { "front": "Rinne: BC > AC. Meaning?", "back": "Conductive Hearing Loss (Negative Rinne)", "tag": "Neuro" },
        { "front": "Mechanism of BPPV?", "back": "Dislodged Otoconia in Semicircular Canal", "tag": "Neuro" },
        { "front": "Acute Tx for Meniere's?", "back": "Salt restriction, Diuretics", "tag": "Neuro" }
    ],
    mindmap: `
## Auditory & Vestibular Pathology
### Hearing Loss
*   **Conductive (CHL)**: Outer/Middle Ear. Weber -> Affected. Rinne -> BC>AC.
*   **Sensorineural (SNHL)**: Inner Ear/Nerve. Weber -> Unaffected. Rinne -> AC>BC.
### Vertigo
*   **Peripheral**
    *   **BPPV**: <1 min, movement triggered. (Dix-Hallpike -> Epley).
    *   **Neuritis**: Days, No HL.
    *   **Labyrinthitis**: Days + HL.
    *   **Meniere's**: Hours, Fluctuating HL, Tinnitus, Fullness.
*   **Central**
    *   **Stroke/Tumor**: Vertical nystagmus, Ataxia, No suppression.
`
};

if (typeof window !== 'undefined') {
    window.L23_CONTENT = L23_CONTENT;
}
