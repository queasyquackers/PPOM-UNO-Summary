# PPOM Master Study Guide - AI Prompt Template

**Purpose:** Use this prompt whenever you start a new block (e.g., Block 5, Block 6) or when you want the AI to process a new batch of lectures into your master HTML study guide format. 

**Instructions:** Copy and paste the prompt below into the chat. Be sure to replace the bracketed information `[like this]` with the specific details for your new task.

---

### The Prompt

```text
I am building a Master Study Guide in HTML for my medical school courses. I need you to integrate the following new lectures into the guide: [Insert Lecture Numbers, e.g., 193-205].

Source Material:
- Use the full SRT transcripts located in `transcripts/` 
- Use the slide PDFs located in `pdfs/`
- You MUST cross-reference both the transcript and the PDF for each lecture to ensure no high-yield board concepts are missed. Do not use any secondary JSON summaries.

Content Extraction Guidelines:
1. High-Yield Only: Strip away all lecture filler, introductions, and narrative transitions. 
2. Flashcard-Ready: Distill each point to what I need to know for board exams (USMLE/COMLEX) — mechanism of action, key clinical findings, distinguishing features, buzzwords, and treatments.
3. Consolidate: If multiple lectures cover the same topic, merge them into cohesive sections rather than repeating information.

HTML & CSS Structural Guidelines:
You must strictly adhere to my existing CSS framework and grid structure. Do not invent new classes.
1. Lecture Headers: Start new lecture groups with: `<div class="sub">📋 Lec [Numbers] — [Topic]</div>`
2. Grid Layout: Wrap all cards in `<div class="grid">...</div>`. 
3. Cards: Use `<div class="card">` for standard columns, or `<div class="card full">` for elements that need to span the entire width of the page.
4. Tables: Use tables heavily for differentials and classifications. Wrap them in `<div class="tbl-wrap"><table>...</table></div>`. Use `<tr><th>` for headers and `<tr><td>` for rows.
5. Direct Comparisons: For A vs B concepts, use the visual split layout:
   <div class="vs">
     <div class="vs-col"><div class="vs-head">Item A</div><ul>...</ul></div>
     <div class="vs-col"><div class="vs-head">Item B</div><ul>...</ul></div>
   </div>
6. Callouts: Use the following semantic div classes to highlight specific types of information:
   - `<div class="memo">`: For mnemonics, study tips, or memory hooks.
   - `<div class="alert warning">`: For critical clinical alerts, contraindications, or "exam traps".
   - `<div class="heart">`: For major clinical pearls, prognostic factors, or pathophysiology core concepts.
   - `<div class="drug">`: For pharmacology entries containing `<div class="drug-name">` and `<div class="drug-info">`.

CRITICAL DIV BALANCE RULE: 
You must ensure that every single opening `<div>` has a corresponding closing `</div>`. Unclosed or improperly nested divs will break the entire CSS grid layout of the application. Double-check your nesting before providing the final HTML.

Please begin by reading the transcripts and PDFs for the requested lectures, then generate the HTML and insert it into the appropriate subject panel (e.g., Pathology, Pharmacology, Micro, DPR) in [Insert Filename, e.g., block5_study_guide.html].
```
