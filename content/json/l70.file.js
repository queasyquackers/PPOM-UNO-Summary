const lecture70Data = {
    title: "Lecture 70: Pediatric H&P I (Birth to 5 Years)",
    lecturer: "A. Patel, D.O.",
    pdfPath: "pdfs/Lecture # 70. A. Patel, D.O. (PPT).pdf", // Corrected based on file listing
    summary: `content/L70_Summary.md`,
    analysis: `content/L70_HighYield_Render_Analysis.md`,
    ankiTags: {
        primary: "BandB::Pediatrics::Newborns::Newborn_Nursery",
        secondary: ["OME::Pediatrics::Newborn", "FirstAid::Public_Health::Pediatrics"]
    },
    questions: [
        {
            id: 1,
            question: "A 2-week-old male infant is brought to the clinic for a well-child check. On physical examination, you note a swelling on the right side of the head that does not cross the suture lines. The parents are concerned. What is the most likely diagnosis?",
            options: [
                "Caput Succedaneum",
                "Cephalohematoma",
                "Subgaleal Hemorrhage",
                "Craniosynostosis",
                "Hydrocephalus"
            ],
            correctAnswer: 1,
            rationale: "Cephalohematoma is a collection of blood under the periosteum that does not cross suture lines. Caput Succedaneum is edema that crosses suture lines. Subgaleal hemorrhage is a dangerous accumulation of blood that crosses suture lines and can cause hemodynamic instability."
        },
        {
            id: 2,
            question: "A 9-month-old female is brought in for a routine checkup. Which of the following developmental milestones would you expect her to have recently achieved or be performing?",
            options: [
                "Walking independently",
                "Speaking in 2-word sentences",
                "Pincer grasp (thumb-finger)",
                "Copying a circle",
                "Hopping on one foot"
            ],
            correctAnswer: 2,
            rationale: "By 9 months, infants typically develop the pincer grasp (fine motor), crawl, pull to stand, and have object permanence. Walking independently is a 12-month milestone. 2-word sentences are 2 years. Copying a circle is 3 years."
        },
        {
            id: 3,
            question: "During a newborn exam, you perform the Ortolani maneuver. You feel a 'clunk' as you abduct the hip. What is the next best step in management for this 2-day-old female?",
            options: [
                "Reassurance and follow-up in 2 weeks",
                "Immediate surgical consult",
                "Triple diapers",
                "Referral for Pavlik harness fitting (Orthopedics)",
                "Ordering a CT scan of the hips"
            ],
            correctAnswer: 3,
            rationale: "A positive Ortolani sign indicates hip instability (Developmental Dysplasia of the Hip). The standard of care is referral to Orthopedics, typically for a Pavlik harness. Triple diapers are not effective treatment."
        },
        {
            id: 4,
            question: "A 4-day-old neonate presents with purulent bilious eye discharge and eyelid swelling. Which of the following is the most appropriate treatment?",
            options: [
                "Oral Erythromycin",
                "Topical Erythromycin ointment only",
                "IM Ceftriaxone",
                "Warm compresses",
                "Observation"
            ],
            correctAnswer: 2,
            rationale: "Purulent conjunctivitis within the first 2-5 days is highly suspicious for Gonococcal ophthalmia neonatorum, which requires systemic treatment with IM Ceftriaxone to prevent corneal perforation and blindness. Chlamydia presents later (5-14 days) and is watery/mucoid."
        },
        {
            id: 5,
            question: "Which of the following reflexes is expected to disappear by 4 months of age?",
            options: [
                "Moro Reflex",
                "Babinski Reflex",
                "Parachute Reflex",
                "Patellar Reflex",
                "Achilles Reflex"
            ],
            correctAnswer: 0,
            rationale: "The Moro (startle) reflex typically disappears by 4 months. The Babinski reflex can persist normally until 12-24 months. The Parachute reflex appears around 6-9 months and persists. DTRs (Patellar/Achilles) persist."
        }
    ],
    flashcards: [
        { front: "Normal Newborn Heart Rate range", back: "120 - 160 bpm" },
        { front: "Normal Newborn Respiratory Rate range", back: "30 - 60 breaths/min" },
        { front: "Swelling on newborn head that crosses suture lines", back: "Caput Succedaneum" },
        { front: "Swelling on newborn head that does NOT cross suture lines", back: "Cephalohematoma" },
        { front: "White pupillary reflex (Leukocoria) indicates...", back: "Retinoblastoma or Congenital Cataracts" },
        { front: "Umbilical cord vessel anatomy", back: "2 Arteries, 1 Vein (AVA)" },
        { front: "Milestone: Sits without support", back: "6 months" },
        { front: "Milestone: Pincer grasp", back: "9 months" },
        { front: "Milestone: Walks alone", back: "12 months" },
        { front: "Milestone: 2-word sentences", back: "2 years" },
        { front: "Disappearance of Moro Reflex", back: "4 months" },
        { front: "Screening age for Autism (M-CHAT)", back: "18 months and 24 months" },
        { front: "Treatment for Hemangioma obstructing vision", back: "Propranolol" },
        { front: "Barlow Maneuver action", back: "Adduct and push Posterior (Dislocates)" },
        { front: "Ortolani Maneuver action", back: "Abduct and pull Anterior (Relocates)" }
    ],
    pearls: [
        "Head Control: 2 months = 45 degrees, 4 months = 90 degrees (no head lag).",
        "Weight: Doubles by 6 months, Triples by 1 year.",
        "Foreign Body Aspiration: Sudden onset wheezing/choking in a toddler --> Rigid Bronchoscopy.",
        "Epiglottitis: 'Thumbprint sign' on X-ray, Drooling, Tripoding. Medical Emergency."
    ],
    mindmap: {
        root: "Pediatric H&P I",
        children: [
            {
                name: "Newborn Exam",
                children: [
                    { name: "Vitals", details: "HR 120-160, RR 30-60" },
                    { name: "Head", details: "Caput vs Cephalohematoma, Fontanelles" },
                    { name: "Eyes", details: "Red Reflex (Leukocoria)" },
                    { name: "Hips", details: "Barlow/Ortolani, US <4mo" }
                ]
            },
            {
                name: "Milestones",
                children: [
                    { name: "2mo", details: "Lift Head, Smile" },
                    { name: "6mo", details: "Sit, Transfer obj, Babble" },
                    { name: "12mo", details: "Walk, Pincer, 1st word" },
                    { name: "2yr", details: "Run, 2-word phrases" }
                ]
            },
            {
                name: "Reflexes",
                children: [
                    { name: "Moro", details: "Gone by 4mo" },
                    { name: "Grasp", details: "Palmar (3mo), Plantar (8-15mo)" },
                    { name: "ATNR", details: "Gone by 6mo" }
                ]
            },
            {
                name: "Screening",
                children: [
                    { name: "Metabolic", details: "Birth" },
                    { name: "Autism", details: "18 & 24 mo" },
                    { name: "Lead/Anemia", details: "12 mo" }
                ]
            }
        ]
    }
};

module.exports = lecture70Data;