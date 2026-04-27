window.receiveLectureContent({
  metadata: {
    title: "Introduction to Gyn/Ob History",
    lecturer: "Steven Lewis, M.D. (Session 159)",
    readingTime: "10-15 min",
    difficulty: "Intermediate",
    tags: ["DPR", "Clinical Skills", "Obstetrics", "Gynecology", "History Taking"]
  },
  resources: {
    ankingResource: {
      primarySource: "First Aid",
      chapter: "Reproductive > Basics",
      alternatives: [
        { resource: "Boards and Beyond", chapter: "Reproductive > Obstetric Concepts" },
        { resource: "Step-Up to Medicine", chapter: "Gynecology" }
      ]
    },
    anking: [
      { match: "GTPAL / Obstetric History", resources: "AnKing Step 2 v11: #B&B::06_ObGyn::02_Obstetrics::01_Prenatal_Care" },
      { match: "Cervical Cancer Screening (Pap Smear)", resources: "AnKing Step 1 v11: #Pathoma::16_Female_Genital_System_and_Breast::02_Cervix" },
      { match: "Menopause Symptoms", resources: "AnKing Step 1 v11: #FirstAid::Reproductive::Pathology::Menopause" }
    ]
  },
  summary: `
# Story Mode: The Life Cycles of Women

The Gynecological and Obstetrical (Gyn/Ob) history is one of the most sensitive and information-dense parts of a clinical interview. It requires not just technical knowledge of menstrual cycles and surgical outcomes, but a high degree of empathy and non-judgmental communication. We are documenting the story of a woman's reproductive life, from her first period to her final years. This is not just a checklist; it is a map of her hormonal and physical journey.

---

## 1. The Gynecological Foundation: The Rhythms of Life
We start with the basics of the menstrual cycle. This isn't just about dates; it's about identifying underlying hormonal health and recognizing patterns of dysfunction.

*   **Menarche**: The age of the first period. Early menarche (<12) is a risk factor for breast and endometrial cancer due to increased lifetime estrogen exposure.
*   **The LMP**: Always ask for the **first day** of the Last Menstrual Period. This is the global "Time Zero" for calculating pregnancy and investigating cycle irregularities.
*   **The Cycle Metrics**:
    *   **Frequency**: How many days from the start of one period to the start of the next? (Normal is 21–35 days). 
    *   **Duration**: How many days does the actual bleeding last? (Normal is 2–7 days).
    *   **Flow (The Quantifier)**: Don't settle for "heavy" or "light." Ask: "How many pads or tampons do you soak through on your heaviest day?" Do you have to change them during the night? Do you pass clots?
*   **Dysmenorrhea**: Painful periods. Differentiate between "normal" cramping and pain that keeps her from work or school (which might suggest Endometriosis).
*   **Menopause (The Quiet Exit)**: Defined clinically as **12 consecutive months** of amenorrhea in a woman of appropriate age.
    *   **CRITICAL RED FLAG**: Any vaginal bleeding after menopause is **Endometrial Cancer** until proven otherwise. It requires an urgent endometrial biopsy or ultrasound.

---

## 2. Preventive Screening: The Guardrails of Health
### I. The Pap Smear (Cervical Cancer)
*   **The Target**: The **Transformation Zone** (Squamocolumnar junction). This is where the delicate columnar cells of the inner cervix meet the tough squamous cells of the outer cervix. It is where 90% of cervical cancers start.
*   **The Screening Rules**: 
    *   Starts at **age 21**, regardless of sexual history. 
    *   From 21–29: Pap every 3 years. 
    *   From 30–65: Pap + HPV co-testing every 5 years (preferred).
*   **The History**: Always ask about previous abnormal results. If she has had a "Colposcopy" or "LEEP" procedure, her risk profile changes.

### II. Mammograms and Breast Health
*   **The History**: Ask about lumps, skin dimpling (**"Peau d'orange"**), or nipple discharge (especially if bloody or spontaneous).
*   **Self-Exams**: While no longer recommended as a primary screening tool by some guidelines, if performed, they should be done **5–7 days after menses** when breast tissue is softest and least congested by estrogen.

---

## 3. The Sexual History: The "Poker Face" 5 P's
When asking about sexual health, maintain a neutral, professional "poker face." Normalize the questions by saying, "To provide the best care, I ask these questions of all my patients."

1.  **Partners**: Number and gender of partners. (Crucial for assessing STI risk).
2.  **Practices**: Types of intercourse (vaginal, ****, oral). This determines where you should test for STIs (e.g., throat or rectal swabs).
3.  **Protection**: Barrier methods. Ask how *consistently* they are used.
4.  **Past STIs**: History of infections like Chlamydia or Gonorrhea (which can lead to Pelvic Inflammatory Disease and infertility).
5.  **Prevention of Pregnancy**: Current contraception. Is she happy with it? Is she taking it correctly? (e.g., "How many pills do you miss in a month?").

---

## 4. Obstetrical History: The GTPAL Code
This is the shorthand clinicians use to summarize a patient's entire pregnancy history. It's a "code" that tells a story of fertility and loss.

*   **G (Gravida)**: Total number of times pregnant (including the current one!).
*   **T (Term)**: Deliveries after 37 weeks.
*   **P (Preterm)**: Deliveries between 20 and 37 weeks.
*   **A (Abortion)**: Pregnancies ending before 20 weeks (includes both spontaneous miscarriages and elective terminations).
*   **L (Living)**: Number of children currently living.
*   **Note on Twins**: A twin pregnancy counts as **G1**, but the delivery counts as **T1** (or P1), and the living children count as **L2**.

### Naegele's Rule: The Due Date Math
If you know the first day of the LMP, you can estimate the **Expected Date of Confinement (EDC)**:
**LMP + 7 Days - 3 Months + 1 Year.**
*(Example: LMP May 10 -> May 17 -> Feb 17 next year).*

---

## 5. The Hidden Red Flags
*   **Intimate Partner Violence (IPV)**: Screen every patient, every time, in private. "Are you safe in your relationship? Has anyone ever hurt you or made you feel afraid?"
*   **Urinary Incontinence**: Many women consider this "normal" after childbirth, but it is treatable. Ask: "Do you leak urine when you cough or sneeze?"
*   **Postpartum Depression**: Always screen mothers at their follow-up visits. The transition to motherhood is a period of extreme psychiatric vulnerability.
`,
  questions: [
    {
      question: "A patient reports her Last Menstrual Period (LMP) began on August 15th, 2023. Using Naegele's Rule, what is her estimated date of delivery (EDD)?",
      options: [
        { text: "May 15th, 2024" },
        { text: "May 22nd, 2024", isCorrect: true },
        { text: "November 22nd, 2024" },
        { text: "May 8th, 2024" }
      ],
      explanation: "Naegele's Rule: Aug 15 + 7 days = Aug 22. Aug 22 - 3 months = May 22. Add one year = May 22, 2024."
    },
    {
      question: "A 60-year-old woman who has been postmenopausal for 10 years presents with 2 days of vaginal spotting. She denies pain or trauma. What is the most appropriate next step?",
      options: [
        { text: "Reassure her that vaginal atrophy can cause light bleeding" },
        { text: "Order an endometrial biopsy", isCorrect: true },
        { text: "Start her on low-dose estrogen cream" },
        { text: "Follow up in 6 months to see if it recurs" }
      ],
      explanation: "Postmenopausal bleeding is ENDOMETRIAL CANCER until proven otherwise. You must sample the tissue (biopsy) or visualize the thickness of the lining (ultrasound) immediately."
    },
    {
      question: "A patient has been pregnant 5 times. She had one miscarriage at 8 weeks, one twin delivery at 39 weeks, one preterm delivery at 32 weeks, and one ectopic pregnancy at 6 weeks. She is currently pregnant again. What is her GTPAL?",
      options: [
        { text: "G5 T1 P1 A2 L3", isCorrect: true },
        { text: "G5 T2 P1 A2 L3" },
        { text: "G4 T1 P1 A2 L3" },
        { text: "G5 T1 P1 A1 L3" }
      ],
      explanation: "G=5 (total). T=1 (the twin delivery). P=1 (the 32-weeker). A=2 (miscarriage + ectopic; both < 20 weeks). L=3 (two twins + one preterm child)."
    },
    {
      question: "Which of the following describes the recommended cervical cancer screening for a 25-year-old female with no prior abnormal paps?",
      options: [
        { text: "Pap smear every year" },
        { text: "Pap smear every 3 years", isCorrect: true },
        { text: "Pap smear + HPV co-testing every 5 years" },
        { text: "Screening is not necessary until age 30" }
      ],
      explanation: "For women aged 21-29, the recommendation is cytology (Pap smear) alone every 3 years. Co-testing with HPV is not recommended until age 30."
    },
    {
      question: "A woman mentions she has been 'feeling down' since the birth of her baby 4 weeks ago. She admits she is having trouble sleeping even when the baby is asleep and feels like she isn't a good mother. Which of the following is the most likely diagnosis?",
      options: [
        { text: "Postpartum Blues" },
        { text: "Postpartum Depression", isCorrect: true },
        { text: "Postpartum Psychosis" },
        { text: "Normal maternal adjustment" }
      ],
      explanation: "Postpartum Blues typically resolve within 2 weeks. Symptoms persisting beyond 2 weeks with functional impairment (insomnia, feelings of inadequacy) suggest Postpartum Depression."
    }
  ],
  flashcards: [
    { front: "Define **Primary Amenorrhea**.", back: "Failure of menarche to occur by age 15.", tag: "Gyn" },
    { front: "What is the **Transformation Zone**?", back: "The squamocolumnar junction of the cervix; most common site for **cervical cancer**.", tag: "Gyn" },
    { front: "What is the significance of **bloody nipple discharge**?", back: "Highly suspicious for **Intraductal Papilloma** or malignancy; requires workup.", tag: "Gyn" },
    { front: "Define **Gravida**.", back: "The total number of pregnancies, regardless of outcome.", tag: "Ob" },
    { front: "What is the **GTPAL** for a woman with twins (term) and one singleton (preterm)?", back: "**G2 T1 P1 A0 L3**.", tag: "Ob" }
  ],
  pearls: [
    { title: "Estrogen and Cancer", content: "Unopposed estrogen (early menarche, late menopause, obesity) is the primary driver of endometrial and breast cancer. Progesterone is the 'protective' counterpart." },
    { title: "The 'P' in Para", content: "Para is the number of pregnancies that reached **viability** (>20 weeks). Twins count as P1 (one event), but L2 (two people)." },
    { title: "Post-coital Bleeding", content: "Bleeding after intercourse is a classic red flag for **cervical cancer** or a cervical polyp." },
    { title: "Ask the 'Safe' Question", content: "Always screen for IPV when the patient is alone. Partners may be the perpetrators and will not allow the patient to speak freely." }
  ]
});
