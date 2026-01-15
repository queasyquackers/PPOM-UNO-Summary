export const L13_CONTENT = {
    id: "l13",
    summary: `
# Lecture 13: Clinical Decision Making

**Lecturer:** R. Morgan, D.O.
**Session:** Lecture 13

## 1. Dual Process Theory (Slide 4-5)

Clinical reasoning involves two cognitive systems:
*   **System 1 (Intuitive):** Fast, automatic, reflexive, pattern recognition. Used by experts for common cases. Prone to **Heuristic Biases**.
*   **System 2 (Hypothetico-Deductive):** Slow, analytical, deliberate. Used for complex or unclear cases. Less prone to bias but resource-intensive.

## 2. Cognitive Biases (Heuristics) (Slide 5, 26-28)

*   **Anchoring:** Locking onto salient features in the patient's initial presentation too early and failing to adjust.
*   **Availability Bias:** Judging a diagnosis as more likely because it is easily recalled (e.g., you just saw 3 cases of Appendicitis, so the next belly pain *must* be Appendicitis).
*   **Confirmation Bias:** Seeking evidence to support your hypothesis while ignoring evidence that refutes it.
*   **Premature Closure:** Stopping the diagnostic process before verifying the diagnosis or considering other possibilities. "When the diagnosis is made, the thinking stops."

## 3. The Diagnostic Framework

### VINDICATE Mnemonic (Slide 15)
A checklist to generate a broad Differential Diagnosis (DDx).
*   **V**ascular
*   **I**nfectious
*   **N**eoplastic
*   **D**rug / Degenerative
*   **I**nflammatory / Idiopathic
*   **C**ongenital
*   **A**utoimmune / Allergic
*   **T**rauma / Toxic
*   **E**ndocrine / Metabolic

### Illness Scripts (Slide 18, 22)
An organized mental summary of a disease, including:
*   **Epidemiology/Pathophysiology:** Who gets it? Why?
*   **Time Course:** Acute, Subacute, Chronic?
*   **Salient Symptoms/Signs:** Key features (Prototypical presentation).
*   **Diagnostics/Treatment:** Labs, Imaging, Meds.

## 4. Problem Representation (Slide 12, 35)
A one-sentence summary of the case used to communicate and reason.
*   *Structure:* [Patient Age/Sex/Risk Factors] presents with [Time Course] [Chief Complaint] characterized by [Key Features].
*   *Example:* "A 3yo male with no PMH presents with 2 days of fever and ear pulling, found to have a bulging erythematous TM."

:::correlate
**Case Study: Acute Otitis Media (AOM)**
*   **Presentation:** Fever, Ear Pain (Otalgia), Bulging Tympanic Membrane (TM), Loss of benchmarks.
*   **Pathogens:** *Strep pneumoniae*, *Haemophilus influenzae*, *Moraxella catarrhalis*.
*   **DDx:**
    *   **Serous Otitis Media:** Fluid (effusion) but no active infection/bulging.
    *   **Otitis Externa:** Swimmer's ear. Canal inflammation. Pain with tragal motion. flesh-colored canal makes this unlikely.
:::
`,
    pearls: [
        {
            title: "System 1 vs System 2",
            content: "**System 1:** Fast, Intuitive (Gut feeling). Prone to bias.\\n**System 2:** Slow, Analytical (Math problem). More accurate."
        },
        {
            title: "VINDICATE Mnemonic",
            content: "Vascular, Infectious, Neoplastic, Drug/Degenerative, Inflammatory/Idiopathic, Congenital, Autoimmune, Trauma/Toxic, Endocrine/Metabolic."
        },
        {
            title: "Confirmation Bias",
            content: "The tendency to look only for evidence that confirms your hunch and ignore evidence that contradicts it."
        },
        {
            title: "Availability Bias",
            content: "Diagnosing something because you recently saw it or it's 'top of mind' (e.g., flu during flu season)."
        },
        {
            title: "Premature Closure",
            content: "The most common fatal error: Accepting a diagnosis before it is fully verified and stopping the search for alternatives."
        }
    ],
    questions: [
        {
            question: "A resident diagnoses a patient with Influenza because 'everyone coming into the ER today has the flu', despite the patient having neck stiffness and a rash. Which cognitive bias is at play?",
            options: [
                "Anchoring",
                "Availability Bias",
                "Confirmation Bias",
                "Premature Closure",
                "Sunk Cost Fallacy"
            ],
            answer: 1,
            explanation: "**Availability Bias** is judging frequency or probability by how easily examples come to mind (e.g., a recent run of flu cases)."
        },
        {
            question: "When generating a differential diagnosis for a 60-year-old male with back pain, you use the mnemonic VINDICATE. The 'N' stands for:",
            options: [
                "Neurologic",
                "Nutritional",
                "Neoplastic",
                "Nociceptive",
                "Neonatal"
            ],
            answer: 2,
            explanation: "**N** in VINDICATE stands for **Neoplastic** (Cancer), a critical category to consider in older adults with new back pain."
        },
        {
            question: "Which of the following best describes 'System 2' thinking?",
            options: [
                "Fast and reflexive",
                "Pattern recognition",
                "Slow and analytical",
                "Prone to emotional influence",
                "Automatic association"
            ],
            answer: 2,
            explanation: "**System 2** is the slow, deliberate, analytical mode of thinking used for complex problems."
        },
        {
            question: "A 3-year-old presents with ear pain. Exam reveals a bulging, erythematous tympanic membrane with loss of bony landmarks. The most likely diagnosis is:",
            options: [
                "Otitis Externa",
                "Serous Otitis Media",
                "Mastoiditis",
                "Acute Otitis Media (Suppurative)",
                "Foreign Body"
            ],
            answer: 3,
            explanation: "**Bulging** and **erythema** of the TM are hallmark signs of Acute (Suppurative) Otitis Media."
        },
        {
            question: "You suspect a patient has a Pulmonary Embolism. You order a D-dimer, which is negative, but you dismiss the result as a 'lab error' because you are so sure of your diagnosis. This is an example of:",
            options: [
                "Confirmation Bias",
                "Anchoring",
                "Availability Bias",
                "Visceral Bias",
                "Gambler's Fallacy"
            ],
            answer: 1,
            explanation: "**Confirmation Bias** involves interpreting evidence to support your existing beliefs (the PE diagnosis) while dismissing contradictory evidence (the negative D-dimer)."
        }
    ],
    flashcards: [
        {
            front: "System 1 Thinking",
            back: "Fast, Intuitive, Automatic",
            tag: "Clinical Reasoning"
        },
        {
            front: "System 2 Thinking",
            back: "Slow, Analytical, Deliberate",
            tag: "Clinical Reasoning"
        },
        {
            front: "Availability Bias",
            back: "Diagnosing based on what is readily recalled (recent cases)",
            tag: "Clinical Reasoning"
        },
        {
            front: "Anchoring Bias",
            back: "Sticking to initial impressions despite new data",
            tag: "Clinical Reasoning"
        },
        {
            front: "Premature Closure",
            back: "Stopping the diagnostic process too early",
            tag: "Clinical Reasoning"
        },
        {
            front: "VINDICATE: V",
            back: "Vascular",
            tag: "Clinical Reasoning"
        },
        {
            front: "VINDICATE: I (first)",
            back: "Infectious",
            tag: "Clinical Reasoning"
        },
        {
            front: "VINDICATE: N",
            back: "Neoplastic",
            tag: "Clinical Reasoning"
        },
        {
            front: "Illness Script Components",
            back: "Pathophys, Epidemiology, Time Course, Symptoms, Diagnostics, Treatment",
            tag: "Clinical Reasoning"
        },
        {
            front: "Key sign of Acute Otitis Media",
            back: "Bulging Tympanic Membrane",
            tag: "Clinical Reasoning"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Infectious Disease > HEENT",
        alternatives: [
            { resource: "FirstAid", chapter: "Public Health > Epidemiology > Bias" },
            { resource: "Pathoma", chapter: "General Principles" }
        ]
    },
    mindmap: `
## Clinical Decision Making

### Dual Process Theory
*   **System 1**: Intuitive, Fast, Bias-prone
*   **System 2**: Analytical, Slow, Reliable

### Cognitive Biases
*   **Anchoring**: First impression stuck
*   **Availability**: Recent memory bias
*   **Confirmation**: Seeking supportive data
*   **Premature Closure**: "Done thinking"

### Frameworks
*   **VINDICATE**: Checking all categories
*   **Illness Scripts**: Mental disease models
*   **Problem Representation**: One-liner summary
\`
};
