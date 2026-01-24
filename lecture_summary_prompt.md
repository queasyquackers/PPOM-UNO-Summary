# Lecture Summary Generation Prompt

## Goal

Generate a comprehensive, high-yield summary of the provided lecture content.
**CRITICAL PRIORITY:** You must capture **EVERY** clinical correlate, syndrome, disease, and disorder mentioned in the lecture.

- **Scope:** You must scan **BOTH** the **Lecture Slides (PDF)** and the **Transcript** for these entities.
- **Rule:** If a disease/syndrome/condition is present in the Slides **OR** the Transcript, it **MUST** be included as a `:::correlate` block. Do not rely on the transcript alone.

## Inputs

1.  **Lecture Slides (PDF):** The primary source of visual and structured information. Scan every slide for disease names, clinical presentations, and patient vignettes.
2.  **Transcript Analysis (`L[#]_Summary_Analysis.md`):** A generated report containing:
    - **High Yield Transcript Points:** Concepts emphasized by the lecturer.
    - **Clinical Correlates:** Conditions mentioned in the transcript.
    - **High Yield Slides:** Slides identified as critical.

## Output Format

### 1. Lecture Metadata

- **Format:**

  ```markdown
  # Lecture #[Number]: [Title]

  **Lecturer:** [Name]
  **Session:** Lecture #[Number]
  ```

### 2. Comprehensive Summary

- **Instructions:**
  - **Content Style: Narrative & Contextual (CRITICAL)**
    - **Do NOT just list bullet points.** The summary should read like a **high-quality textbook or lecture note set**.
    - **Use Paragraphs:** Use full sentences and explanatory paragraphs to describe mechanisms, physiological processes, and the "story" of the lecture.
    - **Connect the Dots:** Use the **Transcript** to capture the lecturer's logic and connective tissue. Explain _why_ A leads to B. Don't just state "A -> B".
    - **Depth over Breadth:** If a complex topic is introduced (e.g., a specific nerve pathway or drug mechanism), **explain it fully**.
  - **Slide Citations:**
    - **Rule:** Every major section or key concept **MUST** cite the source slide number using the format `(Slide X)`.
    - **Example:** `## The Nervous System (Slide 5)` or `...affects the optic nerve (Slide 12).`
  - **Cross-Linking:**
    - **Rule:** If a previous lecture is mentioned (e.g., "Recall from L102"), format it as a link: `[[L102]]`.
  - **CLINICAL MANDATE (CRITICAL):**
    - **Aggressive Scan:** If a disease, syndrome, or disorder is mentioned (e.g., "Otitis Media", "Stroke", "Diabetes"), you **MUST** create a `:::correlate` block for it.
    - **Contextual Integration:** Introduce the condition naturally in the narrative paragraph first (e.g., "Damage to this nerve results in Condition X...").
    - **Extraction:** Then, use the `:::correlate` block to detail the specific clinical facts (Pathophysiology, Presentation, Treatment). Do not _only_ have the block; text + block is best.
    - **Clinical Correlate Syntax:**

    ```markdown
    :::correlate
    **[Name of Condition]**

    - **Pathophysiology:** [Mechanism]
    - **Presentation:** [Sxs, Signs]
    - **Diagnosis/Treatment:** [Key points]
    - **Lecturer's Point:** [Specific note from transcript if any]
      :::
    ```

    - **High Yield Mandate:**
    - Identify at least 2 "Must Know" concepts and format as `:::highyield` blocks.

  - **Mnemonics:**
    - Integrate mnemonics directly into the text using the `:::mnemonic` block.

    ```markdown
    :::mnemonic
    **[Title/Concept]**
    **[ACRONYM]**

    - **A:** Apple
    - **B:** Banana
      :::
    ```

  - **High Yield Blocks:**
    - For "Must Know" concepts (not just clinical):
    ```markdown
    :::highyield
    [Concept]
    :::
    ```

### 3. Clinical Pearls (Pearlbook)

- **Instruction:** Do **NOT** scatter `:::pearl` blocks in the main text. Keep the narrative clean.
- **Action:** Extract all high-yield pearls into the `pearls` JSON array (see Section 7).
- **Definition:** A "Pearl" is a concise, high-yield factoid, often a "rule of thumb" or "bottom line".
- **Note:** Continue to use `:::correlate` blocks in the text for full Disease/Syndrome profiles.

### 4. Review Questions (Board-Style)

- **Instructions:**
  - Create 5 First-Order, Medical School level MCQs.
  - **Distribution:** **MUST** vary the correct answer choices (A-E). Do not use the same letter more than twice.
  - **Format:**
    - Question Stem (clinical vignette preferred).
    - Options A-E.
    - **Hidden Answer:** Use `<details>` tags.
  - **Template:**

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

- **Instructions:**
  - Create a set of 10-15 high-yield flashcards.
  - **Sources:**
    - **Glossary Terms:** Definitions of new terms.
    - **Clinical Correlates:** Formulate as specific questions (e.g., "What is the classic triad of [Disease]?", "What is the first-line treatment for [Condition]?").
    - **Key Concepts:** Formulate as specific questions (e.g., "What is the primary mechanism of [Drug]?", "How does [Structure A] affect [Function B]?").
  - **JSON Format (Output this specific JSON block):**
  ```json
  "flashcards": [
      { "front": "[Term] or [Question]", "back": "[Definition] or [Answer]", "tag": "Glossary" },
      { "front": "What is the classic triad of [Disease]?", "back": "[Answer]", "tag": "Clinical" },
      { "front": "What is the mechanism of...?", "back": "[Answer]", "tag": "Concept" }
  ]
  ```

### 6. Anking Resource Recommendations

- **Goal:** Map this lecture to a high-yield external resource (Boards & Beyond, Pathoma, Sketchy, First Aid).
  - **JSON Format (Output this specific JSON block):**
  ```json
  "ankingResource": {
      "primarySource": "[Source Name]",
      "chapter": "[Topic] > [Subtopic]",
      "alternatives": [
          { "resource": "[Source 2]", "chapter": "[Topic] > [Subtopic]" },
          { "resource": "[Source 3]", "chapter": "[Topic] > [Subtopic]" }
      ]
  }
  ```

  - **Valid Source Names:** `BandB`, `Pathoma`, `SketchyMicro`, `SketchyPharm`, `SketchyPath`, `FirstAid`, `Physeo`, `Pixorize`, `Bootcamp`.
  - **Rule:** Provide the **Best Match** as primary, and up to **5 Alternative Matches** in the list.

### 7. Pearlbook (JSON)

- **Goal:** Provide a structured list of the "High Yield Pearls" for the Pearlbook feature.
- **Content:** Extract high-yield pearls directly into this JSON array. **Do not include them in the main text.**
- **JSON Format (Output this specific JSON block):**
  ```json
  "pearls": [
      { "title": "[Pearl Title]", "content": "[Pearl Content]" },
      { "title": "[Another Pearl]", "content": "[Content]" }
  ]
  ```

### 8. Mind Map Structure (Markdown)

- **Goal:** Create a strict hierarchical outline for visualization.
- **Format:**
  - **Level 1 (Main Theme):** Use `## Header`
  - **Level 2 (Sub-topic):** Use `### Header`
  - **Level 3 (Leaf Node):** Use Bullet points with Bold Terms: `* **Term**: Definition/Context`
- **Constraint:** NO paragraph text. ONLY nested headers and bullets. All definitions from the summary must be represented here.
- **Example:**

  ```markdown
  ## Cranial Nerves

  ### Optic Nerve (CN II)

  - **Function**: Transmits visual information
  - **Pathway**: Retina -> Optic Chiasm -> LGN

  ### Oculomotor Nerve (CN III)

  - **Motor Function**: Extraocular muscles except SO4/LR6
  ```
