export const L38_CONTENT = {
    id: "l38",
    summary: `
# Lecture 38: OMM Lab 18 - Sacral Diagnosis

**Lecturer:** P. Noto, D.O.
**Session:** Lecture 38

## 1. Axes of Motion
*   **Oblique Axes:** Named for the superior pole.
    *   **Right Oblique Axis:** Runs from **Right Superior** to **Left Inferior** pole.
    *   **Left Oblique Axis:** Runs from **Left Superior** to **Right Inferior** pole.
    *   *Usage:* Walking cycle (Torsions).
*   **Transverse Axes:**
    *   **Superior (S2):** Respiratory / Craniosacral motion.
    *   **Middle (S2):** Postural / Flexion-Extension.
    *   **Inferior (S3):** Innominate rotation (Ilial shear).

## 2. Diagnosing Torsions vs Shears
*   **L5 Rules:**
    1.  L5 rotates **OPPOSITE** to the sacrum.
    2.  L5 sidebends to the **SAME** side as the Oblique Axis.
    *   *Example:* If L5 is Rotated Right, Sacrum is Rotated Left.
*   **Seated Flexion Test (SFT):**
    *   Positive on the side of **Dysfunction** (Blocked motion).
    *   The axis is on the **Opposite** side of the positive SFT.
*   **Physiologic (Forward) vs Non-Physiologic (Backward):**
    *   **Physiologic:** Neutral mechanics (Type I). "Forward" torsions (L on L, R on R).
        *   **Spring Test:** Negative (It springs / Good motion).
        *   **Sphinx Test:** Negative (Symmetry improves with extension).
    *   **Non-Physiologic:** Non-neutral (Type II). "Backward" torsions (L on R, R on L).
        *   **Spring Test:** Positive (Hard end feel / No spring).
        *   **Sphinx Test:** Positive (Asymmetry gets worse / Pain).

## 3. The 4-Step Diagnosis
1.  **Seated Flexion Test:** Determines the side of dysfunction (and thus the axis is on the opposite side).
2.  **Spring/Sphinx:** Determines if it is Forward (Negative) or Backward (Positive).
3.  **L5:** Confirms rotation.
4.  **Deep Sulcus / Post ILA:**
    *   **Forward Torsion:** Deep Sulcus and Posterior/Inf ILA are on **Opposite** sides.
    *   **Backward Torsion:** Deep Sulcus and Posterior/Inf ILA are on **Opposite** sides.
    *   *Wait, simplify:*
    *   **Deep Sulcus** = Side of Forward Rotation (Sacral Base Anterior).
    *   **Posterior ILA** = Side of Backward Rotation (Sacral Base Posterior).

## 4. Specific Diagnoses
*   **Left on Left (Forward Torsion):**
    *   Facing Left.
    *   Axis: Left.
    *   L5: Rotated Right.
    *   Spring: Negative (Good).
*   **Right on Left (Backward Torsion):**
    *   Facing Right.
    *   Axis: Left.
    *   L5: Rotated Left.
    *   Spring: Positive (Bad).
*   **Unilateral Shears:**
    *   Not an axis dysfunction. Whole side is stuck forward or backward.
    *   SFT + on same side as deep sulcus/low ILA (if flexion) or shallow sulcus/high ILA (if extension).

`,
    pearls: [
        {
            title: "L5 Rule Mnemonic",
            content: "L5 acts like a **Bully**. If L5 rotates Right, the Sacrum turns away (Left). Sidebending side = Axis side."
        },
        {
            title: "Spring Test Rules",
            content: "If it Springs, it's a **Functional** (Physiologic/Forward) torsion.\\nIf it's Stiff (Positive), it's a **Stuck** (Non-physiologic/Backward) torsion."
        },
        {
            title: "Naming Torsions",
            content: "**Rotation on Axis**.\\n**R on R**: Forward (Physiologic).\\n**L on L**: Forward (Physiologic).\\n**R on L**: Backward (Non-Physiologic).\\n**L on R**: Backward (Non-Physiologic).\\n*Hint: Same letters = Forward. Different letters = Backward.*"
        },
        {
            title: "Seated Flexion Test",
            content: "Finds the side of **ILIOSACRAL** dysfunction. The axis is on the **OPPOSITE** side of the positive test."
        },
        {
            title: "Sphinx Test Logic",
            content: "Extension (Sphinx) makes a forward sacrum happy (more symmetrical). It makes a backward sacrum sad (more asymmetrical)."
        }
    ],
    questions: [
        {
            question: "A patient has a positive Seated Flexion Test on the RIGHT. The Spring Test is NEGATIVE. L5 is Rotated Right. What is the diagnosis?",
            options: [
                "Right on Right Sacral Torsion",
                "Left on Left Sacral Torsion",
                "Right on Left Sacral Torsion",
                "Left on Right Sacral Torsion",
                "Right Unilateral Sacral Flexion"
            ],
            correctAnswer: 1,
            rationale: "**Step 1:** SFT Right (+) → Axis is on the **Left**. (So it's ? on Left).\\n**Step 2:** Spring Negative → Forward Torsion (L on L).\\n**Check:** Forward torsions have SAME letters. L on L fits."
        },
        {
            question: "Which of the following findings is consistent with a 'Non-Physiologic' (Backward) Sacral Torsion?",
            options: [
                "Negative Sphinx Test",
                "Negative Spring Test",
                "Positive Spring Test",
                "L5 Rotated opposite to Sacrum",
                "Symmetrical Sacral Sulci"
            ],
            correctAnswer: 2,
            rationale: "**Positive Spring Test** (Hard/Stiff) indicates the sacral base is stuck backward (Posterior), which is a non-physiologic backward torsion."
        },
        {
            question: "In a Right on Right sacral torsion, L5 will be:",
            options: [
                "Rotated Left, Sidebent Left",
                "Rotated Left, Sidebent Right",
                "Rotated Right, Sidebent Right",
                "Rotated Right, Sidebent Left",
                "Neutral"
            ],
            correctAnswer: 1,
            rationale: "**R on R:** Axis is Right → L5 Sidebends **Right**. Rotation is Right → L5 Rotates **Left** (Opposite). Pattern: Rot Left, SB Right (Type I neutral mechanics)."
        },
        {
            question: "The Superior Transverse Axis (S2) is associated with which motion?",
            options: [
                "Postural Flexion/Extension",
                "Innominate Rotation",
                "Respiratory / Craniosacral Motion",
                "Walking Cycle",
                "Disc Herniation"
            ],
            correctAnswer: 2,
            rationale: "**Superior Axis:** Respiratory/Craniosacral.\\n**Middle Axis:** Postural.\\n**Inferior Axis:** Innominate (Ilial)."
        },
        {
            question: "If the Seated Flexion Test is positive on the LEFT, which oblique axis is engaged?",
            options: [
                "Left Oblique Axis",
                "Right Oblique Axis",
                "Middle Transverse Axis",
                "Inferior Transverse Axis",
                "Vertical Axis"
            ],
            correctAnswer: 1,
            rationale: "SFT is positive on the side of dysfunction. The functioning axis is on the **OPPOSITE** side. Positive Left → Axis is **Right**."
        }
    ],
    flashcards: [
        {
            front: "SFT Positive Side Meaning",
            back: "Side of Dysfunction (Axis is Opposite)",
            tag: "OMM"
        },
        {
            front: "Spring Test Positive Meaning",
            back: "Stuck Backward (Non-physiologic / Backward Torsion)",
            tag: "OMM"
        },
        {
            front: "L5 Rotation Rule",
            back: "Rotates OPPOSITE to Sacrum",
            tag: "OMM"
        },
        {
            front: "L5 Sidebending Rule",
            back: "Sidebends SAME side as Axis",
            tag: "OMM"
        },
        {
            front: "Same Letters (e.g. L on L)",
            back: "Forward Torsion (Physiologic)",
            tag: "OMM"
        },
        {
            front: "Different Letters (e.g. R on L)",
            back: "Backward Torsion (Non-Physiologic)",
            tag: "OMM"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "OMM > Sacrum",
        alternatives: [
            { resource: "FirstAid", chapter: "OMM > Sacrum" }
        ]
    },
    mindmap: `
## Sacral Diagnosis

### Axes
*   **Respiratory**: Superior (S2).
*   **Postural**: Middle (S2).
*   **Innominate**: Inferior (S3).
*   **Oblique**: Walking.

### Diagnosis Steps
1.  **SFT**: Side of Dysfunction. Axis is Opposite.
2.  **Spring/Sphinx**:
    *   **Spring (+)**: Backyard (Stiff).
    *   **Spring (-)**: Forward (Good).
3.  **Results**:
    *   **L on L**: Fwd.
    *   **R on R**: Fwd.
    *   **L on R**: Bwd.
    *   **R on L**: Bwd.
\`
};

if (typeof window !== 'undefined') {
    window.L38_CONTENT = L38_CONTENT;
}
