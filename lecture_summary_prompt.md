# Lecture Summary Generation Prompt

## Goal

Generate a comprehensive, high-yield summary of the provided lecture content. 
**CRITICAL PRIORITY:** You must capture **EVERY** clinical correlate, syndrome, disease, and disorder mentioned in the lecture.
**LENGTH REQUIREMENT:** The lecture summary **MUST** fall within a **10-17 minute** reading time (approx. 2,000 - 3,500 words). **3,500 words is a hard ceiling**, not a target to drift past — a shorter lecture should produce a shorter summary (a genuinely thin lecture may land near 1,700), and a dense one still has to fit.

This is a *reading-effort* budget, not a content budget. The reader studies these, so they re-read and process rather than skim once; 4,500 words is close to an hour of real work. Meeting the ceiling never means dropping a clinical correlate, a number, a mnemonic, or a slide citation. Cut in this order instead:
1. **Correlate blocks that restate the bullets immediately above them** — this is the single biggest source of bloat. Aim for 2-9 correlates; if you have 16, most are one-liners that belong merged into the parent section.
2. **Repeated mechanism explanations** — state a mechanism once, then refer back to it.
3. **Table verbosity** — tables should carry values and short labels, not sentences.
4. **Preamble and recap sentences** that announce what a section is about to say.

If a lecture genuinely cannot fit (e.g. it covers two full drug classes), go as close to 3,500 as you can and say in your notes what you cut and why — do not silently overshoot.


- **Scope:** Your primary source of truth is the **Transcript**.
- **Rule:**
    - **Transcript + Slides:** **INCLUDE**. This is core content.
    - **Transcript Only:** **INCLUDE**. Tag as `[Lecturer Emphasis]`.
    - **Slides Only:** **EXCLUDE**. If the lecturer skipped it, it is low-yield. **DO NOT** include content that appears *only* in the slides but is never mentioned.

## Inputs

1.  **Transcript (Primary):** The verbal record of what is actually testable/important.
2.  **Lecture Slides (Secondary):** Use for structure, diagrams, and verifying spellings/terms found in the transcript.
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

- **Instructions - PRIORITY #1: Connective Narrative & Structure**
  - **Contextual Intro (MANDATORY):** Start **EVERY** major section with a "Story Mode" narrative paragraph (3-5 sentences).
    - **Purpose:** Explain the *mechanism* and *why* it matters before listing details.
    - **Connect the Dots:** Explicitly state how concepts link together. (e.g., "Because the optic nerve fibers cross at the chiasm, a pituitary tumor compressing the center causes bitemporal hemianopsia.")
    - **Tone:** Read like a high-quality textbook or lecture note set (e.g., Pathoma/Boards & Beyond style).
  - **Structured Breakdown (Levels 1-3):**
    - After the intro, you **MUST** use a strict nested bullet point structure for the core content.
    - **Level 1:** Main Concept (Bold)
    - **Level 2:** Details/Key Facts
    - **Level 3:** Nuance/Exceptions/Specifics
  - **Slide Citations:**
    - **Rule:** Every major section or key concept **MUST** cite the source slide number using the format `(Slide X)`.
    - **Example:** `## The Nervous System (Slide 5)` or `...affects the optic nerve (Slide 12).`
  - **Cross-Linking:**
    - **Rule:** If a previous lecture is mentioned (e.g., "Recall from L102"), format it as a link: `[[L102]]`.
  - **CLINICAL MANDATE (CRITICAL):**
    - **Aggressive Scan:** If a disease, syndrome, or disorder is mentioned (e.g., "Otitis Media", "Stroke", "Diabetes"), you **MUST** create a `:::correlate` block for it.
    - **Comprehensiveness:** You must capture **ALL** relevant details from the transcript, including Risk Factors, Complications, and "Lecturer's Nuance".
    - **Syntax Safety:** Do **NOT** use bold asterisks (`**`) or Markdown headers (`###`, `####`) in the Title line of the correlate block. Keep the title clean (plain text or bold only if absolutely necessary, but preferably plain).
    - **Clinical Correlate Syntax:**

    ```markdown
    :::correlate
    [Name of Condition]

    - **Pathophysiology:** [Mechanism]
    - **Presentation:** [Sxs, Signs]
    - **Diagnosis:** [Key tests/findings]
    - **Treatment:** [Drugs, Procedures]
    - **Risk Factors:** [If mentioned]
    - **Complications:** [If mentioned]
    - **Lecturer's Point:** [Specific note/emphasis/nuance from transcript]
      :::
    ```

  - **Content Selection Matrix (Strict Transcript Priority):**
    - **Rule:** The Transcript is King.
    - **If in Transcript AND Slides:** **Must Include**.
    - **If in Transcript ONLY:** **Must Include** (and tag as `[Lecturer Emphasis]` or `[Verbal Hint]`).
    - **If in Slides ONLY:** **DELETE/IGNORE**. Do not include content (even diseases) if the lecturer did not mention them at all. This prevents "slide dumping" of low-yield tables.

  - **Data Condensation (Tables):**
    - **Rule:** If the lecture covers 3+ similar items (e.g., Drugs, Diseases, Bacteria), you **MUST** summarize them in a Markdown Table rather than listing them sequentially.
    - **Format:** | Item | Mechanism | Key Feature | Treatment/Notes |

  - **High Yield Mandate:**
    - Identify at least 2 "Must Know" concepts and format as `:::highyield` blocks.
    - **High Yield Slide Filter:** Do **NOT** select slides that are primarily References, Bibliographies, or lists of Hyperlinks/URLs.

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
  - **CRITICAL REQUIREMENT:** You **MUST** include **Boards and Beyond (`BandB`)** as either the `primarySource` or as one of the `alternatives`. If it is the best match, make it primary. If not, include it in alternatives.
  - **Thoroughness:** Provide at least **3** alternative resources if possible.
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
  - **Rule:** Provide the **Best Match** as primary, and up to **5 Alternative Matches** in the list. Ensure `BandB` is present.

### 7. Anking Tag Matches (JSON)

- **Goal:** Provide specific concept matches to the AnKing deck.
  - **Format:**
  ```json
  "anking": [
      {
          "match": "[Concept Name]",
          "resources": "[Brief description or AnKing search term]"
      }
  ]
  ```
  - **CRITICAL RULE:** If there is no good match in the AnKing deck, then the `anking` array **MUST** still be present and populated exactly like this:
  ```json
  "anking": [
      {
          "match": "In-house lecture is best",
          "resources": "In-house lecture is best"
      }
  ]
  ```

### 8. Pearlbook (JSON)

- **Goal:** Provide a structured list of the "High Yield Pearls" for the Pearlbook feature.
- **Content:** Extract high-yield pearls directly into this JSON array. **Do not include them in the main text.**
- **JSON Format (Output this specific JSON block):**
  ```json
  "pearls": [
      { "title": "[Pearl Title]", "content": "[Pearl Content]" },
      { "title": "[Another Pearl]", "content": "[Content]" }
  ]
  ```

### 9. Mind Map Structure (Markdown)

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
