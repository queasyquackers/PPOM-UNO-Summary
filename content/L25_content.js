const L25_CONTENT = {
    id: 'l25',
    title: 'Lecture #25: Limbic System',
    lecturer: 'J. Xie, Ph.D.',
    module: 'Neurology',
    session: 'Lecture #25',
    prev: 'l24',
    next: 'l26',
    pdf: 'pdfs/Lecture # 25. J. Xie, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #25_ Limbic System - Neuroanatomy, Regional Function and Limbic Pathology Faculty_ J. Xie, Ph.D..srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Limbic System'
    },
    summary: `
# Lecture #25: Limbic System

**Lecturer:** J. Xie, Ph.D.
**Session:** Neurology

## 1. Components (The "HOME" Mnemonic)
*   **Homeostasis:** Hypothalamus.
*   **Olfaction:** Olfactory Cortex.
*   **Memory:** Hippocampus.
*   **Emotion:** Amygdala.

## 2. Key Structures
*   **Hippocampus:**
    *   *Function:* Consolidation of Short-term -> Long-term memory (Declarative). Spatial memory.
    *   *Lesion:* **Anterograde Amnesia** (Cannot form new memories). Patient H.M.
    *   *Circuit:* **Papez Circuit** (Hippocampus -> Fornix -> Mammillary Bodies -> Thalamus (Anterior) -> Cingulate -> Hippocampus).
*   **Amygdala:**
    *   *Function:* Fear, Aggression, Emotional tagging of memories.
    *   *Lesion (Bilateral):* **Kluver-Bucy Syndrome**:
        1.  Hyperorality.
        2.  Hypersexuality.
        3.  Docility (No fear/aggression).
*   **Cingulate Gyrus:** Emotional processing, error detection.

## 3. Pathology
*   **Wernicke-Korsakoff Syndrome:**
    *   *Cause:* Thiamine (B1) Deficiency (Alcoholics).
    *   *Path:* Atrophy of **Mammillary Bodies** and Medial Thalamus.
    *   *Symptoms:*
        *   **Wernicke:** Confusion, Ataxia, Ophthalmoplegia (Reversible).
        *   **Korsakoff:** Anterograde/Retrograde Amnesia, **Confabulation** (Irreversible).
*   **HSV Encephalitis:**
    *   *Target:* Temporal Lobes (Hippocampus/Amygdala).
    *   *Symptoms:* Fever, Headache, Seizures, Behavioral changes, Amnesia.
*   **Temporal Lobe Epilepsy:**
    *   *Signs:* Auras (Olfactory/Gustatory hallucinations), Deja vu, Jamais vu.

## 4. Clinical Correlates
:::correlate
**Kluver-Bucy Syndrome**
*   **Lesion:** Bilateral Amygdala damage (e.g., HSV-1, Trauma).
*   **Features:**
    *   **Docility:** Loss of fear/anger.
    *   **Hyperorality:** Putting objects in mouth.
    *   **Hypersexuality:** Inappropriate behavior.
    *   **Visual Agnosia:** Psychic blindness.
:::

:::correlate
**Patient H.M.**
*   **Case:** Bilateral Medial Temporal Lobe resection for epilepsy.
*   **Result:** Severe **Anterograde Amnesia**. Could not form new episodic memories, but Procedural memory (motor skills) remained intact.
:::
`,
    questions: [
        {
            question: "**1. Bilateral lesions of the amygdala result in which constellation of symptoms?**",
            options: [
                "Parkinsonism",
                "Wernicke's Aphasia",
                "Kluver-Bucy Syndrome",
                "Gerstmann Syndrome",
                "Wallenberg Syndrome"
            ],
            correctAnswer: 2,
            rationale: "**Kluver-Bucy Syndrome** (Hyperorality, Hypersexuality, Docility) is caused by bilateral amygdala damage."
        },
        {
            question: "**2. A chronic alcoholic presents with confusion, ataxia, and ophthalmoplegia. This is caused by damage to which structure?**",
            options: [
                "Hippocampus",
                "Mammillary Bodies",
                "Amygdala",
                "Cingulate Gyrus",
                "Basal Ganglia"
            ],
            correctAnswer: 1,
            rationale: "This is **Wernicke Encephalopathy**. It involves damage to the **Mammillary Bodies** and dorsomedial thalamus due to Thiamine (B1) deficiency."
        },
        {
            question: "**3. Which structure is the primary site for converting short-term memory into long-term memory?**",
            options: [
                "Amygdala",
                "Hippocampus",
                "Hypothalamus",
                "Fornix",
                "Caudate Nucleus"
            ],
            correctAnswer: 1,
            rationale: "The **Hippocampus** is essential for memory consolidation. Lesions cause anterograde amnesia."
        },
        {
            question: "**4. A patient with Herpes Simplex Encephalitis typically has necrosis in which area of the brain?**",
            options: [
                "Frontal Lobe",
                "Parietal Lobe",
                "Temporal Lobe",
                "Occipital Lobe",
                "Cerebellum"
            ],
            correctAnswer: 2,
            rationale: "HSV-1 Encephalitis has a predilection for the **Temporal Lobes**, often affecting the limbic system (Hippocampus/Amygdala)."
        },
        {
            question: "**5. Confabulation (making up stories to fill memory gaps) is a characteristic feature of:**",
            options: [
                "Alzheimer's Disease",
                "Korsakoff Syndrome",
                "Vascular Dementia",
                "Huntington's Disease",
                "Parkinson's Disease"
            ],
            correctAnswer: 1,
            rationale: "**Korsakoff Syndrome** (chronic thiamine deficiency) presents with amnesia and confabulation."
        }
    ],
    flashcards: [
        { "front": "Function of Hippocampus?", "back": "Memory Consolidation (ST -> LT)", "tag": "Neuro" },
        { "front": "Function of Amygdala?", "back": "Emotion (Fear/Aggression)", "tag": "Neuro" },
        { "front": "Wernicke-Korsakoff Cause?", "back": "Thiamine (B1) Deficiency", "tag": "Neuro" },
        { "front": "Wernicke-Korsakoff Lesion Location?", "back": "Mammillary Bodies / Medial Thalamus", "tag": "Neuro" },
        { "front": "Kluver-Bucy Syndrome Lesion?", "back": "Bilateral Amygdala", "tag": "Neuro" },
        { "front": "Kluver-Bucy Symptoms?", "back": "Hypersexuality, Hyperorality, Docility", "tag": "Neuro" },
        { "front": "Patient H.M. deficit?", "back": "Anterograde Amnesia (No new memories)", "tag": "Neuro" },
        { "front": "Papez Circuit Major Structures?", "back": "Hippocampus -> Mammillary Bodies -> Thalamus -> Cingulate", "tag": "Neuro" },
        { "front": "HSV Encephalitis Target?", "back": "Temporal Lobes", "tag": "Neuro" },
        { "front": "Confabulation is seen in?", "back": "Korsakoff Psychosis", "tag": "Neuro" }
    ],
    mindmap: `
## Limbic System
### Functions (HOME)
*   **H**omeostasis (Hypothalamus)
*   **O**lfaction
*   **M**emory (Hippocampus)
*   **E**motion (Amygdala)
### Pathology
*   **Wernicke-Korsakoff**: B1 Def. Mammillary Bodies. Confabulation, Ataxia.
*   **Kluver-Bucy**: Bilat Amygdala. Hypersexuality, Docility.
*   **HSV Encephalitis**: Temporal Lobes.
*   **Alzheimer's**: Hippocampal atrophy (early).
`
};

if (typeof window !== 'undefined') {
    window.L25_CONTENT = L25_CONTENT;
}
