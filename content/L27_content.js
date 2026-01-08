const L27_CONTENT = {
    id: 'l27',
    title: 'Lecture #27: OMM Lab 17 Prep',
    lecturer: 'T. Li, D.O.',
    module: 'OMM',
    session: 'Lecture #27',
    prev: 'l26',
    next: 'l28',
    pdf: 'pdfs/Lecture # 27. T. Li, D.O. (PPT).pdf',
    transcript: 'transcripts/Lecture #27_ OMM Lab 17 Prep Lecture Faculty_ T. Li, D.O..srt',
    summary: `
# Lecture #27: OMM Lab 17 Prep

**Lecturer:** T. Li, D.O.
**Session:** Lecture #27

## 1. Counterstrain (CS) Overview (Slides 2-4)
*   **Definition:** An indirect, passive technique used to treat somatic dysfunction by placing the patient's body in a position of ease to relieve tenderness at a specific "tenderpoint" (Slide 3).
*   **History:** Originally called "Spontaneous Release by Positioning" (Slide 3).
*   **Key Concept:** "Fold and Hold". Shorten the muscle/tissue to silence the proprioceptive feedback (muscle spindles) causing the spasm (Slide 6).

### Clinical Pointers
:::pearl
Counterstrain is passive! The patient must relax and "not help you".
:::
*   **Safety:** Very safe due to gentle nature.
*   **Versatility:** Can be used alone or with other techniques (Slide 4).
*   **Symptom Location:** Tenderpoints may not be where the patient feels pain but may be the *cause* of the pain (Slide 3).

### Contraindications (Slide 4)
*   **Absolute:** No somatic dysfunction, no consent/cooperation.
*   **Relative:** Unable to relax, severe illness, severe osteoporosis.

## 2. Basic Steps of Counterstrain (Slides 6-7)
1.  **Find Point:** Locate tenderpoint with monitoring finger (Slide 6).
2.  **Establish Scale:** Set pain as 10/10 (Slide 6).
    *   **Note:** This is relative to the patient's experience, not an objective medical severity.
3.  **Position:** Passively place patient in position of ease ("Fold and Hold") (Slide 6).
    *   Goal: Reduce tenderness to **0/10** (ideal) or at least **≤ 3/10** (Slide 6).
4.  **Hold:** Maintain position for **90 seconds** (Slide 7).
5.  **Return:** Slowly return to neutral (Slide 7).
    *   **Crucial:** Patient must not help!
6.  **Reassess:** Check for tenderness (goal ≤ 3/10) (Slide 7).

:::highyield
**Post-Treatment Reaction (Slide 5):**
30-50% of patients experience soreness 1-2 days later.
*   **Advice:** Warn patient, avoid strenuous activity that day, increase water intake.
:::

## 3. Pelvic Counterstrain (Slides 8-9)
**Focus:** Anterior Pelvic Counterstrain points.
*   **Iliacus:** Deep in iliac fossa. Treatment: Flexion, External Rotation (Frog leg).
*   **Psoas:** Medial to ASIS. Treatment: Flexion, Sidebend TOWARD, Rotate AWAY (F-ST-RA).
*   **Low Ilium:** Superior ramus of pubis. Treatment: Flexion.
*   **Inguinal:** Lateral to pubic tubercle. Treatment: Flexion, Adduction, Internal Rotation (F-ADD-IR).
_(Note: Specific positions based on general principles, verify with lab manual)._

## 4. Innominate HVLA (Slides 10-12)
**Prerequisite:** Diagnosis and *Soft Tissue* preparation (Slide 10).
*   **Anterior Innominate Rotation SD:**
    *   **Finding:** ASIS low, PSIS high on affected side.
    *   **Treatment:** Rotate posteriorly.
*   **Posterior Innominate Rotation SD:**
    *   **Finding:** ASIS high, PSIS low on affected side.
    *   **Treatment:** Rotate anteriorly (extend hip).
*   **Superior Innominate Shear:**
    *   **Technique:** Slight abduction, internal rotation, traction to localize SI joint (Slide 12).

## 5. Clinical Correlates

:::correlate
**Post-Counterstrain Soreness**
*   **Presentation:** Soreness in treated area appearing several hours after treatment.
*   **Duration:** Self-limited, 1-2 days.
*   **Mechanism:** Metabolic waste release/tissue changes.
*   **Lecturer's Point:** "Good idea to 'warn them' so they expect it." (Slide 5)
:::

:::correlate
**Hip/Knee Arthritis**
*   **Relevance:** Common in older patients.
*   **Precaution:** Be mindful of range of motion when placing patients in counterstrain positions (flexion/rotation). Tailor treatment to limitations (Slide 8).
:::

`,
    questions: [
        {
            question: "**1. A patient reports soreness one day after receiving counterstrain treatment for somatic dysfunction. What is the most appropriate initial management?**",
            options: [
                "Prescribe muscle relaxants",
                "Reassure the patient this is a common, self-limited reaction",
                "Order an MRI to rule out iatrogenic injury",
                "Perform HVLA immediately to fix the recurrence",
                "Refer to orthopedics"
            ],
            correctAnswer: 1,
            rationale: "Post-treatment soreness occurs in 30-50% of patients, typically lasts 1-2 days, and is self-limited. Reassurance and hydration are the standard advice. (Slide 5)"
        },
        {
            question: "**2. Which of the following is an absolute contraindication to counterstrain treatment?**",
            options: [
                "Severe osteoporosis",
                "Acute somatic dysfunction",
                "Patient inability to voluntarily relax",
                "Lack of patient consent",
                "Severe illness"
            ],
            correctAnswer: 3,
            rationale: "Lack of patient consent (and absence of somatic dysfunction) are **absolute** contraindications. The others (osteoporosis, inability to relax, severe illness) are **relative** contraindications. (Slide 4)"
        },
        {
            question: "**3. During counterstrain treatment, what is the standard duration for holding the position of ease?**",
            options: [
                "30 seconds",
                "60 seconds",
                "90 seconds",
                "120 seconds",
                "5 minutes"
            ],
            correctAnswer: 2,
            rationale: "The standard duration for counterstrain treatment is **90 seconds**. (Slide 7)"
        },
        {
            question: "**4. You are performing counterstrain. You find a tenderpoint, set the scale to 10/10, and position the patient. The patient now reports tenderness is 4/10. What is your next step?**",
            options: [
                "Hold for 90 seconds",
                "Return to neutral and reassess",
                "Fine-tune the position to achieve a score of 3/10 or less",
                "Switch to HVLA",
                "Apply ice"
            ],
            correctAnswer: 2,
            rationale: "The goal is a reduction to 0/10 or at least ≤ 3/10. If the score is 4/10, you should **fine-tune** the position to further reduce tenderness before holding. (Slide 6)"
        },
        {
            question: "**5. When treating a Superior Innominate Shear using HVLA, which motions are used to localize force to the SI joint?**",
            options: [
                "Adduction and External Rotation",
                "Abduction, Internal Rotation, and Traction",
                "Flexion and Adduction",
                "Extension and External Rotation",
                "Hyperflexion only"
            ],
            correctAnswer: 1,
            rationale: "For Superior Innominate Shear HVLA, slight **abduction, internal rotation, and traction** are used to localize. (Slide 12)"
        }
    ],
    flashcards: [
        { "front": "Goals of Counterstrain tenderness reduction?", "back": "Ideal: 0/10, Acceptable: ≤ 3/10", "tag": "OMM" },
        { "front": "Duration of Counterstrain hold?", "back": "90 seconds", "tag": "OMM" },
        { "front": "Absolute Contraindications for Counterstrain?", "back": "No SD, No Consent/Cooperation", "tag": "OMM" },
        { "front": "Common side effect of Counterstrain?", "back": "Soreness (1-2 days)", "tag": "OMM" },
        { "front": "Innominate Rotation: ASIS High, PSIS Low?", "back": "Posterior Innominate Rotation", "tag": "OMM" },
        { "front": "Innominate Rotation: ASIS Low, PSIS High?", "back": "Anterior Innominate Rotation", "tag": "OMM" },
        { "front": "Mechanism of Counterstrain", "back": "Quiet the muscle spindle (Gamma gain)", "tag": "OMM" },
        { "front": "Is Counterstrain Direct or Indirect?", "back": "Indirect (Position of Ease)", "tag": "OMM" },
        { "front": "Is Counterstrain Active or Passive?", "back": "Passive", "tag": "OMM" },
        { "front": "Steps of Counterstrain?", "back": "Find Point -> Scale (10/10) -> Position (Ease) -> Hold (90s) -> Slow Return -> Reassess", "tag": "OMM" }
    ],
    mindmap: `
## OMM Lab 17
### Counterstrain Basics
*   **Type**: Indirect, Passive
*   **Mechanism**: Silencing muscle spindles
*   **Steps**: Point -> Position -> Hold (90s) -> Return -> Check
*   **Goal**: Tenderness <= 3/10
### Pelvic Points
*   **Iliacus**: Frog leg
*   **Psoas**: F-ST-RA
*   **Low Ilium**: Flexion
*   **Inguinal**: F-ADD-IR
### HVLA
*   **Prep**: Soft tissue first
*   **Anterior Innominate**: ASIS Low
*   **Posterior Innominate**: ASIS High
`
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Musculoskeletal > Spine",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Musculoskeletal > Anatomy" }
        ]
    }
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Musculoskeletal > Spine",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Musculoskeletal > Anatomy" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L27_CONTENT = L27_CONTENT;
}
