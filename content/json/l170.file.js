const l170 = {
    id: "l170",
    title: "Lecture 170: DPR: Introduction to Behavioral Medicine",
    author: "L. Hoffman, Ph.D.",
    narrative: "This lecture introduces the foundational skills required for conducting a diagnostic patient encounter in behavioral and mental health. Dr. Hoffman emphasizes that while the physical exam remains important to rule out physiological mimickers (like hypothyroidism causing depression), the cornerstone of psychiatry is the psychiatric history and the Mental Status Exam (MSE). The lecture guides student physicians through the sensitive art of building rapport, managing difficult transitions, and conducting life-saving screenings for suicide and homicide risk.",
    sections: [
        {
            title: "1. The Therapeutic Alliance & Interview Dynamics",
            content: "Successful behavioral medicine starts with the interview environment and the physician's professional conduct:\n\n- **Professionalism & Bias:** Maintain a non-judgmental attitude and be aware of pre-existing biases. \n- **Patient Language:** Use the patient's own words to validate their experience and demonstrate active listening.\n- **Sensitive Transitions:** Use explicit transition statements when moving to personal topics (e.g., 'Now I'd like to ask some questions about your social history and relationships...').\n- **Counseling Timing:** Gather the history and complete the exam before moving into education/counseling."
        },
        {
            title: "2. The Psychiatric History (HPI & Screening)",
            content: "A behavioral HPI requires a careful timeline and the use of standardized screening measures:\n\n- **HPI Components:** Focus on the onset (acute vs. gradual), triggers, and how symptoms have changed over time. Ask specifically: 'How have you been coping?' and assess the impact on daily function.\n- **Social History & Pediatric Risk:** Beyond living situation and relationships, specifically consider if **children** in the home are witnessing the struggle or being neglected, as they may require intervention.\n- **Screening Tools (The 'Rule of 2s'):** \n    - **PHQ-2 (Patient Health Questionnaire-2):** Initial screen for depression.\n    - **GAD-2 (Generalized Anxiety Disorder-2):** Initial screen for anxiety.\n    - Positive results on these brief screens should be followed up with the full PHQ-9 or GAD-7 assessments."
        },
        {
            title: "3. The Mental Status Exam (MSE)",
            content: "The MSE is the 'physical exam' of behavioral medicine—a systematic observation of the patient's current psychological state:\n\n- **Appearance & Behavior:** Grooming, posture, and **Psychomotor activity** (Agitaded/increased vs. Retarded/decreased).\n- **Speech:** Rate (pressured vs. slow), volume, and rhythm.\n- **Mood vs. Affect:** **Mood** is the patient's internal sustained emotion ('climate'); **Affect** is the physician's observation of their immediate emotional expression ('weather').\n- **Thought Process:** The organizational flow of thoughts.\n    - **Linear:** Goal-directed and logical.\n    - **Circumstantial:** Provides unnecessary detail but eventually returns to the point.\n    - **Tangential:** Moves from one topic to another and never returns to the original point.\n    - **Flight of Ideas:** Rapidly skipping between ideas with only tenuous connections.\n- **Thought Content:** What is on their mind (Suicidality, delusions, obsessions, hallucinations).\n- **Insight & Judgment:** Does the patient recognize they are ill? Can they weigh the consequences of their decisions?"
        },
        {
            title: "4. Risk Assessment & Self-Harm",
            content: "Assessing the risk of harm to self or others is a mandatory component of every psychiatric evaluation:\n\n- **Suicide Assessment:** Must includes specific questions about **Ideation** ('Have you had thoughts of hurting yourself?'), **Plan** ('Do you have a specific method?'), and **Access/Means** ('Do you have access to weapons or pills?').\n- **Self-Harm vs. Suicidality:** Distinguish between suicidal intent and non-suicidal self-injury (NSSI) like skin picking, hair pulling (BFRBs), or cutting/burning."
        },
        {
            title: "5. Physiological Mimickers & OMT",
            content: "Psychiatric symptoms often have physiological causes that must be ruled out:\n\n- **Rule Outs:** **Hypothyroidism** can mimic depression; **arrhythmias** or **hyperthyroidism** can mimic anxiety; **B12 deficiency** can cause cognitive decline.\n- **Diagnostic Baseline:** Tests like CBC, CMP, EKG, and UA are used both to rule out mimickers and to establish baselines before starting medications that may affect heart rhythm or metabolic markers.\n- **OMT:** Consider techniques to normalize the autonomic nervous system (Sympathetic vs. Parasympathetic balance) through **Rib Raising** or **Suboccipital Release**."
        }
    ],
    clinical_pearls: [
        {
            title: "The MSE Weather Analogy",
            content: "To distinguish Mood from Affect: **Mood** is like the **Climate** (the overarching emotional state reported by the patient), while **Affect** is like the **Weather** (the immediate emotional response you see in the room)."
        },
        {
            title: "SIGECAPS Mnemonic",
            content: "A classic board tool for depression symptoms: **S**leep, **I**nterest, **G**uilt, **E**nergy, **C**oncentration, **A**ppetite, **P**sychomotor agitation/retardation, **S**uicidality."
        },
        {
            title: "Transition Phrases",
            content: "Don't just jump into suicide questions. Use a soft entry: 'Because many people in your situation feel quite overwhelmed, I want to ask if you've had any thoughts of harming yourself...'"
        },
        {
            title: "The PHQ-2 Threshold",
            content: "If a patient scores a 3 or more on the PHQ-2, you **must** proceed to the PHQ-9. In practice, missing a diagnosis of depression increases the risk of mortality through both suicide and decreased compliance with chronic medical treatments."
        }
    ],
    anking_resources: [
        {
            category: "Psychiatric Evaluation & MSE",
            resources: [
                {
                    name: "OnlineMedEd",
                    path: "Psychiatry -> Behavioral Science Basics -> Evaluation",
                    description: "Excellent overview of the MSE components and interview flow."
                }
            ]
        },
        {
            category: "Mood & Anxiety Disorders",
            resources: [
                {
                    name: "B&B",
                    path: "03. Psych -> 02. Psychiatric Disorders -> 01. Depression",
                    description: "Covers diagnostic criteria (SIGECAPS) and screening tools."
                },
                {
                    name: "Physeo",
                    path: "11. Psychiatry -> 01. Mood Disorders -> 01. Depressive Disorders",
                    description: "Visual breakdown of the PHQ-9 items and diagnostic thresholds."
                }
            ]
        },
        {
            category: "Clinical Ethics & Communication",
            resources: [
                {
                    name: "Step 2 AnKing (Cheesy Dorian)",
                    path: "Step 2 -> Psych -> Ethics/Patient Encounters",
                    description: "Focused on transition statements and building rapport."
                }
            ]
        }
    ]
};

export default l170;
