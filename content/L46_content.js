export const L46_CONTENT = {
    id: "l46",
    summary: `
# Lecture 46: Sensory System & Special Techniques

**Lecturer:** R. Morgan, D.O.
**Session:** Lecture 46

## 1. Sensory Pathways Review
* **Spinothalamic Tract**:**
    * **  *Modality**:* Pain, Temperature, Crude Touch.
    * **  *Fibers**:* Small, Unmyelinated/Thinly myelinated.
* **Posterior Columns (DCML)**:**
    * **  *Modality**:* Vibration, Proprioception, Fine Touch.
    * **  *Fibers**:* Large, Heavily myelinated.
    * **  *Testing**:* Always test **Distal** first (Toes/Fingers). If normal distally, proximal is likely normal.

## 2. Cortical Sensation (Discriminative)
* **  *Requires**:* Intact primary sensation (DCML/STT) + Intact **Parietal Lobe** (Sensory Cortex).
* **Stereognosis**:** Identify common object (key, coin) in hand with eyes closed.
* **Graphesthesia**:** Identify number drawn on palm.
* **Two-Point Discrimination**:** Distinguish two points vs one.
* **Extinction**:** Touch both sides simultaneously. If patient only feels one side, suspects contralateral parietal lesion (Neglect).

## 3. Meningeal Signs (Meningitis/SAH)
* **Brudzinski Sign**:**
    * **  *Maneuver**:* Flex patient's neck (chin to chest).
    * **  *Positive**:* Involuntary flexion of **Hips and Knees**.
* **Kernig Sign**:**
    * **  *Maneuver**:* Flex hip/knee to 90 degrees, then slowly **Extend** the knee.
    * **  *Positive**:* Pain/Resistance in hamstring.

## 4. Special Musculoskeletal Tests
* **Cervical Spine (Radiculopathy)**:**
    * **Spurling Test**:** Extend and Rotate head to affected side + Axial Compression. Positive = Radiation of pain down arm.
    * **Distraction Test**:** Lift head (Traction). Positive = **Relief** of pain.
* **Lumbar Spine (Sciatica/Disc Herniation)**:**
    * **Straight Leg Raise (SLR)**:** Passive leg raise. Positive = Radicular pain between 30-70 degrees.
    * **Bragard's Test**:** SLR + **Dorsiflexion** of foot. Increases nerve stretch.
    * **Crossed (Well) SLR**:** Raise the **Unaffected** leg. Positive = Pain in the **Affected** leg. (Highly specific for Disc Herniation).
* **Malingering / Functional**:**
    * **Hoover Test**:** Cup both heels. Ask patient to lift the "paralyzed" leg.
    * **  *Positive for Malingering**:* You do **NOT** feel downward pressure from the "normal" heel. (Normal physiology requires pushing down with the opposite leg to lift one leg).

`,
    pearls: [
        {
            title: "Hoover Test Logic",
            content: "In a true effort to lift one leg, the other leg **MUST** push down. If you don't feel downward pressure from the 'good' leg when they try to lift the 'bad' leg, they aren't really trying."
        },
        {
            title: "BrudZinski vs Kernig",
            content: "**B**rudzinski = **B**rain (Neck flexion causes knees to bend).\\n**K**ernig = **K**nee (Knee extension causes pain)."
        },
        {
            title: "Spurling Test",
            content: "think 'Spurling crushes the Spine'. Compression reproduces radicular pain. Distraction relieves it."
        },
        {
            title: "Crossed SLR",
            content: "The **Crossed** Straight Leg Raise (lifting the good leg causes pain in the bad leg) is very **Specific** for a Herniated Disc."
        },
        {
            title: "Stocking-Glove",
            content: "The classic pattern of Diabetic Polyneuropathy. Starts in toes/feet (longest nerves) and ascends. Sensory loss is symmetrical."
        }
    ],
    questions: [
        {
            question: "You are performing a neurological exam on a patient claiming to have a paralyzed right leg. You cup your hands under both heels and ask him to lift his right leg. He strains, but his leg doesn't move. You feel no pressure in your left hand under his left heel. What is the interpretation?",
            options: [
                "True Right Leg Paralysis",
                "Left Leg Paralysis",
                "Positive Hoover Sign (Lack of Effort)",
                "Sciatic Nerve Impingement",
                "Cauda Equina Syndrome"
            ],
            correctAnswer: 2,
            rationale: "**Positive Hoover Sign:** Lack of downward pressure in the contralateral (normal) heel indicates the patient is not making a genuine effort to lift the affected leg."
        },
        {
            question: "Which physical exam finding is most specific for a lumbar disc herniation?",
            options: [
                "Positive Straight Leg Raise (Ipsilateral)",
                "Positive Crossed (Well) Straight Leg Raise",
                "Paraspinal muscle tenderness",
                "Decreased range of motion",
                "Negative Brudzinski sign"
            ],
            correctAnswer: 1,
            rationale: "While the Ipsilateral SLR is sensitive, the **Crossed (Well) Straight Leg Raise** (pain in the affected leg when lifting the healthy leg) is highly **Specific** for disc herniation."
        },
        {
            question: "A patient presents with fever and severe headache. When you flex the patient's neck, their hips and knees spontaneously flex. This is a positive:",
            options: [
                "Kernig Sign",
                "Brudzinski Sign",
                "Babinski Sign",
                "Lhermitte Sign",
                "Hoffmann Sign"
            ],
            correctAnswer: 1,
            rationale: "**Brudzinski Sign:** Neck flexion causes involuntary hip/knee flexion. It suggests meningeal irritation (Meningitis)."
        },
        {
            question: "A patient complains of shooting pain down their right arm. You extend and rotate their head to the right and apply downward pressure. This maneuver reproduces the pain. What is the test?",
            options: [
                "Distraction Test",
                "Spurling Test",
                "Tinel Sign",
                "Phalen Test",
                "Lhermitte Sign"
            ],
            correctAnswer: 1,
            rationale: "**Spurling Test:** Cervical compression with extension/rotation narrows the neural foramen. Reproduction of radicular pain indicates Cervical Radiculopathy."
        },
        {
            question: "Which sensory modality is carried by the Dorsal Columns (Posterior Columns)?",
            options: [
                "Pain",
                "Temperature",
                "Crude Touch",
                "Vibration and Proprioception",
                "Itch"
            ],
            correctAnswer: 3,
            rationale: "**Dorsal Columns:** Vibration, Proprioception, Fine Touch. (Spinothalamic = Pain, Temp, Crude Touch)."
        }
    ],
    flashcards: [
        {
            front: "Brudzinski Sign",
            back: "Neck flexion → Hip/Knee flexion (Meningitis)",
            tag: "Neurology"
        },
        {
            front: "Kernig Sign",
            back: "Knee extension → Pain (Meningitis)",
            tag: "Neurology"
        },
        {
            front: "Spurling Test",
            back: "Cervical Compression → Radicular Pain (Radiculopathy)",
            tag: "Neurology"
        },
        {
            front: "Hoover Test",
            back: "Test for Malingering (Lack of contralateral heel pressure)",
            tag: "Neurology"
        },
        {
            front: "Crossed Straight Leg Raise",
            back: "Lift Good Leg → Pain in Bad Leg (Specific for Disc Herniation)",
            tag: "Neurology"
        },
        {
            front: "Stereognosis",
            back: "Identify object in hand (Parietal Cortex)",
            tag: "Neurology"
        },
        {
            front: "Graphesthesia",
            back: "Identify number drawn on palm (Parietal Cortex)",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Neurological Examination",
        alternatives: [
            { resource: "BandB", chapter: "Neurology > Clinical Neurology > Sensory Exam" },
            { resource: "FirstAid", chapter: "Neurology > Exam" }
        ]
    },
    mindmap: `
## Neuro Exam 3

### Meningeal Signs
* **Brudzinski**: Neck Flex → Knees Flex.
* **Kernig**: Knee Extend → Pain.

### Spine
* **Cervical**: Spurling (Compress). Distraction (Relief).
* **Lumbar**: SLR (Sensitive). Crossed SLR (Specific).

### Cortical Sensory
* **Stereognosis**: Object ID.
* **Graphesthesia**: Number ID.
* **Extinction**: Neglect.

### Malingering
* **Hoover**: No downward pressure.
`
};

if (typeof window !== 'undefined') {
    window.L46_CONTENT = L46_CONTENT;
}
