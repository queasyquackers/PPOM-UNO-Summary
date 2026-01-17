export const L40_CONTENT = {
    id: "l40",
    summary: `
# Lecture 40: Spinal Cord Syndromes & Mononeuropathies

**Lecturer:** A. Leder, D.O.
**Session:** Lecture 40

## 1. Spinal Cord Anatomy Review
*   **Dorsal Columns:** Vibration, Proprioception, Fine Touch. (Cross in Brainstem).
*   **Spinothalamic Tract:** Pain, Temperature, Crude Touch. (Cross immediately/1-2 levels up).
*   **Corticospinal Tract:** Motor. (Cross in Medulla).

## 2. Spinal Cord Syndromes
*   **Central Cord Syndrome (Syringomyelia):**
    *   *Lesion:* Center of cord (crossing spinothalamic fibers).
    *   *Presentation:* **"Cape-like"** loss of pain/temperature across shoulders/arms. Upper extremities > Lower.
    *   *Causes:* Syringomyelia (Chiari I), Trauma (Hyperextension), Tumor.
*   **Posterior Column Syndrome (Tabes Dorsalis):**
    *   *Lesion:* Dorsal Columns.
    *   *Presentation:* Loss of Proprioception/Vibration $\\to$ Sensory Ataxia (**Stomping Gait**, +Romberg). **Lhermitte Sign** (Shock down back).
    *   *Causes:* **Neurosyphilis** (Tabes Dorsalis - Triad: Lightning pains, Ataxia, Argyll Robertson Pupil), B12 Deficiency.
*   **Posterolateral Column Syndrome (Subacute Combined Degeneration):**
    *   *Lesion:* Dorsal Columns + Corticospinal Tract.
    *   *Presentation:* Ataxia/Numbness + Spastic Paresis.
    *   *Causes:* **Vitamin B12 Deficiency** (Pernicious anemia, Gastric bypass, Vegans), **Nitrous Oxide** abuse ("Whippets").
*   **Anterior Cord Syndrome:**
    *   *Lesion:* Anterior 2/3 of cord (Spares Dorsal Columns).
    *   *Presentation:* Complete Motor Paralysis + Loss of Pain/Temp. **Proprioception/Vibration SPARED**.
    *   *Causes:* **Anterior Spinal Artery (ASA)** infarct (Aortic aneurysm repair/surgery).
*   **Brown-Séquard Syndrome (Hemicord):**
    *   *Lesion:* Half of the cord (Hemisection).
    *   *Presentation:*
        *   **Ipsilateral:** Loss of Motor (CST) + Proprioception/Vibration (DC).
        *   **Contralateral:** Loss of Pain/Temp (Spinothalamic) *starting 1-2 levels below*.
    *   *Causes:* Stab wound, MS, Tumor.
*   **Cauda Equina Syndrome:**
    *   *Lesion:* Nerve roots L2-S5 (Horse's tail).
    *   *Presentation:* **Saddle Anesthesia**, Bowel/Bladder dysfunction (Retention/Incontinence), Radicular pain.
    *   *Management:* **Surgical Emergency** (Decompression within 48hrs).

## 3. Common Mononeuropathies
*   **Median Nerve:** **Carpal Tunnel**. Numbness 1st 3.5 digits. Thenar atrophy.
*   **Ulnar Nerve:** **Cubital Tunnel**. Numbness 4th/5th digits. "Claw Hand" (weak interossei).
*   **Radial Nerve:** **Saturday Night Palsy**. Spiral groove compression. **Wrist Drop**.
*   **Common Peroneal (Fibular) Nerve:** Unilateral **Foot Drop** (Steppage gait). Compression at Fibular Head.
*   **Lateral Femoral Cutaneous Nerve:** **Meralgia Paresthetica**. Numbness of lateral thigh. Caused by tight belts, obesity, pregnancy.

`,
    pearls: [
        {
            title: "Brown-Séquard Rules",
            content: "You lose **Motor & Vibe** on the **SAME** side (Ipsi).\\nYou lose **Pain & Temp** on the **OPPOSITE** side (Contra)."
        },
        {
            title: "Anterior Cord Spare",
            content: "Anterior Spinal Artery stroke kills everything EXCEPT the **Dorsal Columns**. So they can still feel Vibration/Proprioception, but can't move or feel pain."
        },
        {
            title: "Syringomyelia Sign",
            content: "**Cape-like** distribution of numbness (Pain/Temp loss) across the shoulders and back. Often associated with **Chiari Malformation**."
        },
        {
            title: "Whippets & B12",
            content: "**Nitrous Oxide** irreversibly oxidizes B12, leading to Subacute Combined Degeneration (Posterolateral cord syndrome). Look for ataxia + numbness in a party-goer."
        },
        {
            title: "Cauda Equina Flags",
            content: "New onset **Incontinence** (or retention) + **Saddle Anesthesia**. This is an MRI + Surgery EMERGENCY."
        }
    ],
    questions: [
        {
            question: "A patient presents with loss of pain and temperature sensation in a cape-like distribution over the shoulders and arms. Vibration and proprioception are intact. This pattern is consistent with:",
            options: [
                "Anterior Cord Syndrome",
                "Central Cord Syndrome",
                "Brown-Séquard Syndrome",
                "Posterior Column Syndrome",
                "Cauda Equina Syndrome"
            ],
            correctAnswer: 1,
            rationale: "**Central Cord Syndrome** (Syringomyelia) expands from the central canal, disrupting the crossing Spinothalamic fibers first, causing the cape-like dissociation."
        },
        {
            question: "Following a stab wound to the right side of the spinal cord (Hemisection) at T10, which finding would be expected?",
            options: [
                "Loss of pain and temperature on the Right leg",
                "Loss of vibration and proprioception on the Left leg",
                "Paralysis of the Left leg",
                "Loss of pain and temperature on the Left leg",
                "Bilateral loss of all sensation"
            ],
            correctAnswer: 3,
            rationale: "**Brown-Séquard:** Contralateral loss of Pain/Temp. Right lesion $\\to$ **Left** leg Pain/Temp loss. (Right leg would lose Motor/Vibe)."
        },
        {
            question: "A patient recovering from abdominal aortic aneurysm repair develops bilateral leg paralysis and loss of pain sensation, but preserves vibration sense. The most likely diagnosis is:",
            options: [
                "Posterior Spinal Artery Infarct",
                "Anterior Spinal Artery Infarct",
                "Vitamin B12 Deficiency",
                "Tabes Dorsalis",
                "Guillain-Barré Syndrome"
            ],
            correctAnswer: 1,
            rationale: "**Anterior Spinal Artery** supplies the anterior 2/3 (Motor + Spinothalamic). Infarct causes Anterior Cord Syndrome (Paralysis + Pain loss) with **Dorsal Column sparing** (Vibe intact)."
        },
        {
            question: "Which of the following creates a 'Saturday Night Palsy' causing wrist drop?",
            options: [
                "Median Nerve compression at carpal tunnel",
                "Ulnar Nerve compression at cubital tunnel",
                "Radial Nerve compression at spiral groove",
                "Common Peroneal compression at fibular head",
                "Sciatic Nerve compression"
            ],
            correctAnswer: 2,
            rationale: "**Radial Nerve** compression at the spiral groove (humerus), often from falling asleep with arm over a chair ('Saturday Night'), causes **Wrist Drop**."
        },
        {
            question: "Subacute Combined Degeneration of the spinal cord involves demyelination of the Posterior Columns and Corticospinal Tracts due to deficiency of:",
            options: [
                "Vitamin B1 (Thiamine)",
                "Vitamin B3 (Niacin)",
                "Vitamin B12 (Cobalamin)",
                "Vitamin E",
                "Copper"
            ],
            correctAnswer: 2,
            rationale: "**Vitamin B12** deficiency (or Nitrous Oxide toxicity) causes Subacute Combined Degeneration."
        }
    ],
    flashcards: [
        {
            front: "Central Cord Syndrome Pattern",
            back: "Cape-like Pain/Temp Loss",
            tag: "Neurology"
        },
        {
            front: "Tabes Dorsalis Cause",
            back: "Neurosyphilis (Tertiary)",
            tag: "Neurology"
        },
        {
            front: "Brown-Sequard: Pain/Temp loss side",
            back: "Contralateral (Opposite side)",
            tag: "Neurology"
        },
        {
            front: "Brown-Sequard: Motor/Vibe loss side",
            back: "Ipsilateral (Same side)",
            tag: "Neurology"
        },
        {
            front: "Wrist Drop Nerve",
            back: "Radial Nerve",
            tag: "Neurology"
        },
        {
            front: "Foot Drop Nerve",
            back: "Common Peroneal (Fibular) Nerve",
            tag: "Neurology"
        },
        {
            front: "Saddle Anesthesia + Incontinence",
            back: "Cauda Equina Syndrome (Emergency)",
            tag: "Neurology"
        },
        {
            front: "Subacute Combined Degeneration Cause",
            back: "B12 Deficiency / Nitrous Oxide",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Spinal Cord Disorders",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Spinal Cord Lesions" }
        ]
    },
    mindmap: `
## Spinal Cord Syndromes

### Patterns
*   **Central (Syrinx)**: Cape-like Pain/Temp. UE>LE.
*   **Anterior (ASA)**: Motor/Pain Lost. DC Spared.
*   **Posterior (Tabes)**: Vibe/Prop Lost. Stomping. Syphilis.
*   **Posterolateral (B12)**: DC + CST. Subacute Combined.
*   **Hemicord (Brown-Sequard)**:
    *   Ipsi: Motor, Prop.
    *   Contra: Pain/Temp.

### Peripherals
*   **Radial**: Wrist Drop.
*   **Median**: Carpal Tunnel.
*   **Ulnar**: Claw Hand.
*   **Peroneal**: Foot Drop.

### Emergency
*   **Cauda Equina**: Saddle anesthesia, Bowel/Bladder. Surgery!
\`
};
