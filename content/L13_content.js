const L13_CONTENT = {
    id: 'l13',
    title: 'Lecture #13: Clinical Decision Making (DPR)',
    lecturer: 'Richard Morgan, D.O.',
    module: 'DPR',
    session: 'Lecture #13',
    prev: 'l12',
    next: 'l14',
    pdf: 'pdfs/Lecture # 13. R. Morgan, D.O. (PPT).pdf',
    transcript: 'transcripts/Lecture #13_ DPR_ Clinical Decision Making Faculty_ R. Morgan, D.O..srt',
    summary: `
# Lecture #13: Clinical Decision Making

**Lecturer:** Richard Morgan, D.O.
**Session:** DPR (Doctor-Patient Relationship)

## 1. Dual Process Theory (Slide 4)
*   **System 1 (Intuitive):** Fast, Automatic, Subconscious, Habit-based. Uses **Heuristics** (Mental shortcuts). Prone to bias.
*   **System 2 (Hypothetico-Deductive):** Slow, Analytical, Deliberate, Logical. Used for complex/new cases.

## 2. Cognitive Biases (Slides 5, 26-27)
Errors in System 1 thinking.
*   **Anchoring:** Locking onto salient features in the initial presentation too early.
*   **Availability Heuristic:** Diagnosing what is "available" in memory (e.g., a disease you just saw 5 cases of, or a rare "zebra" you read about).
*   **Confirmation Bias:** Seeking evidence to support your diagnosis while ignoring evidence that refutes it.
*   **Premature Closure:** Stopping the diagnostic process before considering all possibilities.

## 3. Clinical Reasoning Steps
1.  **Patient Story:** History & Physical.
2.  **Problem Representation:** A one-sentence summary of the case (Patient Age/Gender + Epidemiology + Key Symptoms + Time Course).
3.  **Differential Diagnosis (DDx):** List of potential causes.
    *   *Mnemonic:* **VINDICATE** (Vascular, Infectious, Neoplastic, Drug, Inflammatory, Congenital, Autoimmune, Trauma, Endocrine).
4.  **Illness Scripts:** Mental model of a disease (Epi, Pathophys, Signs/Symptoms, Diagnostics, Treatment).
5.  **Assessment & Plan:** Final diagnosis and treatment strategy.

## 4. Case Study (Slide 30)
*   3yo Male, fever, ear pain, bulging TM.
*   **Diagnosis:** Acute Otitis Media (Suppurative).
*   **Plan:** Amoxicillin + OMT.
`,
    questions: [
        {
            question: "**1. A clinician sees a patient with a cough and fever. Because they have seen 10 cases of Influenza this morning during flu season, they immediately diagnose Influenza without considering Pneumonia or COVID-19. This is an example of which cognitive bias?**",
            options: [
                "Anchoring Bias",
                "Availability Heuristic",
                "Confirmation Bias",
                "Premature Closure",
                "Sunk Cost Fallacy"
            ],
            correctAnswer: 1,
            rationale: "From Slide 5/26: **Availability Heuristic** occurs when a diagnosis is selected because it is readily available in the clinician's mind (e.g., recent frequent exposure), ignoring the specific probability for the current patient."
        },
        {
            question: "**2. Which thinking system is described as 'Slow, Analytical, Deliberate, and Logical', often used by students or when specific patterns are not recognized?**",
            options: [
                "System 1",
                "System 2",
                "Intuitive System",
                "Heuristic System",
                "Reflexive System"
            ],
            correctAnswer: 1,
            rationale: "From Slide 4: **System 2** is the Hypothetico-Deductive system. It is slow, effortful, and analytical, used when System 1 (Intuitive) fails or for complex cases."
        },
        {
            question: "**3. 'Seeking supportive evidence for a diagnosis while excluding more persuasive information that generates a refuting hypothesis' describes which bias?**",
            options: [
                "Anchoring",
                "Confirmation Bias",
                "Availability",
                "Outcome Bias",
                "Blind Spot Bias"
            ],
            correctAnswer: 1,
            rationale: "From Slide 26: **Confirmation Bias** is the tendency to look for evidence that confirms your pre-existing beliefs/hypothesis and ignore evidence that contradicts it."
        },
        {
            question: "**4. In the VINDICATE mnemonic for generating a differential diagnosis, what does the 'N' stand for?**",
            options: [
                "Neurologic",
                "Nutritional",
                "Neoplastic",
                "Neonatal",
                "Necrotic"
            ],
            correctAnswer: 2,
            rationale: "From Slide 15: In VINDICATE, **N** stands for **Neoplastic** (Tumors/Cancer)."
        },
        {
            question: "**5. A 'Problem Representation' in clinical reasoning is best defined as:**",
            options: [
                "A list of all patient medications",
                "The patient's chief complaint in their own words",
                "A synthesized sentence summarizing the patient's demographics, epidemiology, and key clinical features",
                " The final ICD-10 diagnosis code",
                "The plan of care"
            ],
            correctAnswer: 2,
            rationale: "From Slide 12: A **Problem Representation** is a 1-sentence summary synthesizing the patient's demographics, risk factors, and key clinical presentation (e.g., '3yo male with acute onset fever and ear pain...')."
        }
    ],
    flashcards: [
        { "front": "System 1 Thinking?", "back": "Fast, Intuitive, Heuristic", "tag": "DPR" },
        { "front": "System 2 Thinking?", "back": "Slow, Analytical, Deliberate", "tag": "DPR" },
        { "front": "Availability Heuristic?", "back": "Diagnosing what comes to mind easily (recent/common)", "tag": "DPR" },
        { "front": "Anchoring Bias?", "back": "Reliant on first piece of information", "tag": "DPR" },
        { "front": "Confirmation Bias?", "back": "Seeking only evidence that confirms hypothesis", "tag": "DPR" },
        { "front": "Premature Closure?", "back": "Stopping diagnosis too early", "tag": "DPR" },
        { "front": "VINDICATE 'V'?", "back": "Vascular", "tag": "DPR" },
        { "front": "VINDICATE 'I'?", "back": "Infectious / Inflammatory", "tag": "DPR" },
        { "front": "VINDICATE 'N'?", "back": "Neoplastic", "tag": "DPR" },
        { "front": "Illness Script?", "back": "Mental summary of a disease (Epi, Path, Sx, Tx)", "tag": "DPR" }
    ],
    mindmap: `
## Clinical Decision Making
### Dual Process
*   **System 1**: Fast, Intuitive (Heuristics)
*   **System 2**: Slow, Analytical
### Biases
*   **Availability**: Recent experience
*   **Anchoring**: First impression
*   **Confirmation**: Ignoring contrary data
*   **Premature Closure**: Stopping early
### Process
*   **Patient Story** -> **Problem Rep** -> **DDx** -> **Diagnosis**
*   **Mnemonics**: VINDICATE
`
};

if (typeof window !== 'undefined') {
    window.L13_CONTENT = L13_CONTENT;
}
