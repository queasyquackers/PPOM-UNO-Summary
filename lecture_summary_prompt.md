# Lecture Summary Generation Prompt

## Goal
Generate a comprehensive, high-yield summary of the provided lecture content.
**CRITICAL PRIORITY:** You must capture **EVERY** clinical correlate, syndrome, disease, and disorder mentioned in the lecture.
*   **Scope:** You must scan **BOTH** the **Lecture Slides (PDF)** and the **Transcript** for these entities.
*   **Rule:** If a disease/syndrome/condition is present in the Slides **OR** the Transcript, it **MUST** be included as a `:::correlate` block. Do not rely on the transcript alone.

## Inputs
1.  **Lecture Slides (PDF):** The primary source of visual and structured information. Scan every slide for disease names, clinical presentations, and patient vignettes.
2.  **Transcript Analysis (`L[#]_Summary_Analysis.md`):** A generated report containing:
    *   **High Yield Transcript Points:** Concepts emphasized by the lecturer.
    *   **Clinical Correlates:** Conditions mentioned in the transcript.
    *   **High Yield Slides:** Slides identified as critical.

## Output Format

### 1. Lecture Metadata
*   **Format:**
    ```markdown
    # Lecture #[Number]: [Title]
    
    **Lecturer:** [Name]
    **Session:** Lecture #[Number]
    ```

### 2. Comprehensive Summary
*   **Instructions:**
    *   **Completeness:** Synthesize content from slides and transcript.
    *   **Slide Citations:**
        *   **Rule:** Every major section or key concept **MUST** cite the source slide number using the format `(Slide X)`.
        *   **Example:** `## The Nervous System (Slide 5)` or `...affects the optic nerve (Slide 12).`
    *   **Cross-Linking:**
        *   **Rule:** If a previous lecture is mentioned (e.g., "Recall from L102"), format it as a link: `[[L102]]`.
    *   **CLINICAL MANDATE:**
        *   **Scan Slides:** Look for slide titles or bullet points naming specific diseases (e.g., "Horner's Syndrome", "Multiple Sclerosis").
        *   **Scan Transcript:** Look for the lecturer mentioning patient stories or specific conditions.
        *   **Action:** For **EVERY** identified entity, create a `:::correlate` block.
    *   **Structure:**
        *   Use H2 (##) for main topics.
        *   Use H3 (###) for subtopics.
    *   **Clinical Correlate Syntax:**
        ```markdown
        :::correlate
        **[Name of Condition]**
        *   **Pathophysiology:** [Mechanism]
        *   **Presentation:** [Sxs, Signs]
        *   **Diagnosis/Treatment:** [Key points]
        *   **Lecturer's Point:** [Specific note from transcript if any]
        :::
        ```
    *   **Mnemonics:**
        *   Integrate mnemonics directly into the text using the `:::mnemonic` block.
        ```markdown
        :::mnemonic
        **[Title/Concept]**
        **[ACRONYM]**
        *   **A:** Apple
        *   **B:** Banana
        :::
        ```
    *   **High Yield Blocks:**
        *   For "Must Know" concepts (not just clinical):
        ```markdown
        :::highyield
        [Concept]
        :::
        ```

### 3. Clinical Pearls
*   **Inline Pearls:**
    *   Insert `:::pearl` blocks throughout the summary where appropriate for specific high-yield facts (e.g., "Key Takeaways" or "Bottom Line").
    *   **Syntax:**
        ```markdown
        :::pearl
        [Concise High-Yield Fact related to the section]
        :::
        ```

### 4. Review Questions (Board-Style)
*   **Instructions:**
    *   Create 5 First-Order, Medical School level MCQs.
    *   **Distribution:** **MUST** vary the correct answer choices (A-E). Do not use the same letter more than twice.
    *   **Format:**
        *   Question Stem (clinical vignette preferred).
        *   Options A-E.
        *   **Hidden Answer:** Use `<details>` tags.
    *   **Template:**
    ```markdown
    **1. [Question Stem]**

    A. [Option A]
    B. [Option B]
    C. [Option C]
    D. [Option D]
    E. [Option E]

    <details>
    <summary><strong>Click to Reveal Answer</strong></summary>

    **Answer: [Letter] ([Text])**

    **Rationale**:
    [Explanation]
    </details>
    ```

### 5. Flashcards (JSON)
*   **Instructions:**
    *   Create a set of 10-15 high-yield flashcards.
    *   **Sources:**
        *   **Glossary Terms:** Definitions of new terms.
        *   **Clinical Correlates:** Formulate as specific questions (e.g., "What is the classic triad of [Disease]?", "What is the first-line treatment for [Condition]?").
        *   **Key Concepts:** Formulate as specific questions (e.g., "What is the primary mechanism of [Drug]?", "How does [Structure A] affect [Function B]?").
    *   **JSON Format (Output this specific JSON block):**
    ```json
    "flashcards": [
        { "front": "[Term] or [Question]", "back": "[Definition] or [Answer]", "tag": "Glossary" },
        { "front": "What is the classic triad of [Disease]?", "back": "[Answer]", "tag": "Clinical" },
        { "front": "What is the mechanism of...?", "back": "[Answer]", "tag": "Concept" }
    ]
    ```

### 6. Anking Resource Recommendations
*   **Goal:** Map this lecture to a high-yield external resource (Boards & Beyond, Pathoma, Sketchy, First Aid).
*   **JSON Format (Output this specific JSON block):**
    ```json
    "ankingResource": {
        "primarySource": "[Source Name]", 
        "chapter": "[Topic] > [Subtopic]"
    }
    ```
    *   **Valid Source Names:** `BandB`, `Pathoma`, `SketchyMicro`, `SketchyPharm`, `SketchyPath`, `FirstAid`, `Physeo`, `Pixorize`, `Bootcamp`.
    *   **Example:** For a lecture on Heart Failure:
        ```json
        "ankingResource": { "primarySource": "BandB", "chapter": "Cardiology > Heart Failure" }
        ```

### 7. Mind Map Structure (Markdown)
*   **Goal:** Create a strict hierarchical outline for visualization.
*   **Format:**
    *   **Level 1 (Main Theme):** Use `## Header`
    *   **Level 2 (Sub-topic):** Use `### Header`
    *   **Level 3 (Leaf Node):** Use Bullet points with Bold Terms: `* **Term**: Definition/Context`
*   **Constraint:** NO paragraph text. ONLY nested headers and bullets. All definitions from the summary must be represented here.
*   **Example:**
    ```markdown
    ## Cranial Nerves
    ### Optic Nerve (CN II)
    *   **Function**: Transmits visual information
    *   **Pathway**: Retina -> Optic Chiasm -> LGN
    ### Oculomotor Nerve (CN III)
    *   **Motor Function**: Extraocular muscles except SO4/LR6
    ```
