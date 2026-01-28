export const L37_CONTENT = {
    id: "l37",
    summary: `
# Lecture 37: Neurologic Exam II - Motor & Reflexes

**Lecturer:** R. Morgan, D.O.
**Session:** Lecture 37

## 1. Motor System
* **Grading (0-5 Scale)**:**
    * **0**:** No contraction.
    * **1**:** Trace / Flicker.
    * **2**:** Active movement with **gravity eliminated** (horizontal).
    * **3**:** Active movement against **gravity only**.
    * **4**:** Active movement against **resistance** (but weak).
    * **5**:** Normal strength.
* **Key Roots**:**
    * **C5/6**:** Biceps, Deltoid, Brachioradialis.
    * **C7**:** Triceps, Wrist Extension.
    * **C8/T1**:** Hand intrinsics (Grip).
    * **L2/3/4**:** Iliopsoas (Hip Flex), Quads (Knee Ext).
    * **L5**:** Tibialis Ant (Dorsiflex/Heel walk).
    * **S1**:** Gastroc (Plantarflex/Toe walk).

## 2. Reflexes (DTRs)
* **Grading (0-4 Scale)**:**
    * **0**:** Absent.
    * **2**:** Normal.
    * **4**:** Hyperactive with **Clonus** (UMN).
* **Roots**:**
    * **Biceps**:** C5, C6.
    * **Brachioradialis**:** C6.
    * **Triceps**:** C7.
    * **Patellar**:** L4.
    * **Achilles**:** S1.
* **Reinforcement**:**Jendrassik Maneuver** (hook fingers and pull) distracts patient to elicit hard-to-find reflexes.

## 3. UMN vs LMN Findings


| Feature | UMN (Upper Motor Neuron) | LMN (Lower Motor Neuron) |
| :--- | :--- | :--- |
| **Tone** | **Spastic** (Increased) | **Flaccid** (Decreased) |
| **Reflexes** | **Hyperreflexia** (+Clonus) | **Hyporeflexia** / Absent |
| **Babinski** | **Positive** (Upgoing toe) | Negative (Downgoing) |
| **Atrophy** | Mild (Disuse) | **Severe** (Denervation) |
| **Fasciculations** | Absent | **Present** |

## 4. Coordination & Gait (Cerebellum)
* **Dysdiadochokinesis**:** Inability to perform Rapid Alternating Movements (RAM).
* **Dysmetria**:** Overshooting/Undershooting (Finger-to-Nose).
* **Ataxia**:** Unsteady gait. *Tandem Walking* (Heel-to-toe) brings out subtle ataxia.
* **Romberg Test**:**
    *   Patient stands, feet together, eyes **CLOSED**.
    * **Positive**:** Patient sways/falls.
    * **Meaning**:** Loss of **Proprioception** (Dorsal Columns). *Note: Cerebellar ataxia occurs with eyes OPEN too.*

## 5. Other Signs
* **Pronator Drift**:** Eyes closed, arms out palms up. If one arm pronates and drops → Contralateral **UMN** (Corticospinal) weakness.
* **Primitive Reflexes**:** Grasp, Rooting, Snout. Seen in Frontal Lobe lesions (or babies).
`,
    pearls: [
        {
            title: "Reflex Roots Mnemonic",
            content: "**S1, 2** (Buckle my shoe - Ankle).\\n**L3, 4** (Kick the door - Knee).\\n**C5, 6** (Pick up sticks - Biceps).\\n**C7, 8** (Lay them straight - Triceps)."
        },
        {
            title: "Romberg is Sensory",
            content: "A positive Romberg (falling only when eyes CLOSED) indicates a **Sensory** Ataxia (Dorsal Columns/Proprioception), NOT Cerebellum."
        },
        {
            title: "Pronator Drift",
            content: "Highly specific sign for subtle **UMN Weakness**. The supinator muscles are weaker than pronators in UMN lesions."
        },
        {
            title: "Babinski Sign",
            content: "Stroke sole of foot. Normal = Toes curl DOWN. **UMN Lesion** = Big toe goes UP (Dorsiflex + fanning)."
        },
        {
            title: "Jendrassik Maneuver",
            content: "Can't get a knee jerk? Have them hook hands and PULL. Distraction unmasks the reflex."
        }
    ],
    questions: [
        {
            question: "A patient presents with weakness in the right arm. On examination, they have increased tone (spasticity) and hyperactive reflexes (3+) in the right biceps and triceps. There is no atrophy. This pattern suggests a lesion in the:",
            options: [
                "Lower Motor Neuron (e.g., Brachial Plexus)",
                "Upper Motor Neuron (e.g., Corticospinal Tract)",
                "Neuromuscular Junction",
                "Cerebellum",
                "Muscle fiber directly"
            ],
            correctAnswer: 1,
            rationale: "**UMN** signs include Spasticity, Hyperreflexia, and preserved muscle bulk (no atrophy). LMN signs would be flaccidity and atrophy."
        },
        {
            question: "Which of the following describes muscle strength Grade 3/5?",
            options: [
                "Active movement against gravity and resistance",
                "Active movement against gravity only",
                "Active movement with gravity eliminated",
                "Flicker of contraction only",
                "Normal strength"
            ],
            correctAnswer: 1,
            rationale: "**Grade 3** is movement against gravity but NOT resistance. Grade 2 is gravity eliminated. Grade 4 is against resistance."
        },
        {
            question: "A positive Romberg test (swaying significantly only when eyes are closed) primarily indicates dysfunction of:",
            options: [
                "The Cerebellum",
                "The Motor Cortex",
                "Proprioception (Dorsal Columns)",
                "The Basal Ganglia",
                "The Thalamus"
            ],
            correctAnswer: 2,
            rationale: "Romberg tests **Proprioception**. If vision (eyes open) compensates, but balance fails when eyes close, it's a sensory ataxia (Dorsal Columns)."
        },
        {
            question: "The Achilles tendon reflex is mediated primarily by which spinal nerve root?",
            options: [
                "L3",
                "L4",
                "L5",
                "S1",
                "S2"
            ],
            correctAnswer: 3,
            rationale: "Achilles reflex is **S1**. Patellar is L4."
        },
        {
            question: "Dysdiadochokinesis (inability to perform rapid alternating movements) is a hallmark sign of damage to the:",
            options: [
                "Cerebellum",
                "Frontal Lobe",
                "Spinal Cord",
                "Basal Ganglia",
                "Cranial Nerves"
            ],
            correctAnswer: 0,
            rationale: "Incoordination of rapid movements (RAM) is a classic **Cerebellar** sign."
        }
    ],
    flashcards: [
        {
            front: "S1 Reflex",
            back: "Achilles (Ankle Jerk)",
            tag: "Neurology"
        },
        {
            front: "L4 Reflex",
            back: "Patellar (Knee Jerk)",
            tag: "Neurology"
        },
        {
            front: "C7 Reflex",
            back: "Triceps",
            tag: "Neurology"
        },
        {
            front: "C5/C6 Reflex",
            back: "Biceps / Brachioradialis",
            tag: "Neurology"
        },
        {
            front: "Grade 3 Strength",
            back: "Against Gravity Only",
            tag: "Neurology"
        },
        {
            front: "Grade 2 Strength",
            back: "Gravity Eliminated",
            tag: "Neurology"
        },
        {
            front: "Jendrassik Maneuver Use",
            back: "Reinforce/Distract for Reflexes",
            tag: "Neurology"
        },
        {
            front: "Positive Romberg Meaning",
            back: "Sensory Ataxia (Dorsal Column Proprioception Loss)",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Clinical Neurology > Neurological Examination",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology" }
        ]
    },
    mindmap: `
## Neuro Exam II

### Motor Grading
* **0-1**: None/Trace.
* **2**: Gravity Elim.
* **3**: Gravity Only.
* **4**: Resistance (Weak).
* **5**: Normal.

### Reflexes (0-4)
* **S1**: Ankle.
* **L4**: Knee.
* **C7**: Triceps.
* **C5/6**: Biceps.
* **Signs**: UMN (Hyper/Clonus), LMN (Hypo/Absent).

### Coordination (Cerebellum)
* **RAM**: Dysdiadochokinesis.
* **Dysmetria**: Finger-to-nose overshoot.
* **Gait**: Ataxic, Tandem.

### Special Tests
* **Romberg**: Sensory Ataxia (Eyes Closed).
* **Pronator Drift**: UMN Weakness.
* **Babinski**: UMN (Upgoing toe).
\`
};

if (typeof window !== 'undefined') {
    window.L37_CONTENT = L37_CONTENT;
}
