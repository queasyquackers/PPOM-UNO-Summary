export const L31_CONTENT = {
    id: "l31",
    summary: `
# Lecture 31: Basal Ganglia

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture 31

## 1. Basal Ganglia Anatomy
*   **Striatum (Input):** Caudate + Putamen. Releases **GABA**.
*   **Pallidum (Output):** GPi (Internal) & GPe (External). Releases **GABA**.
*   **Subthalamic Nucleus (STN):** Releases **Glutamate** (Excitatory).
*   **Substantia Nigra pars Compacta (SNc):** Releases **Dopamine**.

## 2. The Pathways (Albin-DeLong Model)
1.  **Direct Pathway (GO):**
    *   Promotes movement.
    *   Striatum inhibits GPi $\\to$ Disinhibition of Thalamus.
    *   **D1 Receptors:** Dopamine *excites* this pathway.
2.  **Indirect Pathway (NO-GO):**
    *   Inhibits movement.
    *   Striatum inhibits GPe $\\to$ STN active $\\to$ GPi active $\\to$ Thalamus inhibited.
    *   **D2 Receptors:** Dopamine *inhibits* this pathway (Releases the brake).
3.  **Hyperdirect Pathway:** Fast suppression (Freeze!). Cortex $\\to$ STN $\\to$ GPi.

## 3. Parkinson's Disease (Hypokinetic)
*   **Pathology:** Loss of Dopaminergic neurons in **SNc**. **Lewy Bodies** ($\alpha$-synuclein).
*   **Symptoms (TRAP):**
    *   **T**remor (Resting, Pill-rolling).
    *   **R**igidity (Cogwheel).
    *   **A**kinesia / Bradykinesia (Slow movement, Masked face).
    *   **P**ostural Instability.
*   **History:** MPTP (toxin) caused acute Parkinsonism in drug users ("Frozen Addicts").

## 4. Huntington's Disease (Hyperkinetic)
*   **Pathology:** Atrophy of **Caudate Nucleus** (Boxy ventricles on MRI). loss of GABA/ACh neurons.
*   **Genetics:** **CAG** trinucleotide repeat (>40). **Autosomal Dominant**. Anticipation (worse in next gen).
*   **Symptoms:** **Chorea** (Dance-like), Dementia, Depression. Signs appear age 30-50.

## 5. Other Disorders
*   **Hemiballismus:**
    *   *Lesion:* **Subthalamic Nucleus (STN)** (lacunar stroke).
    *   *Symptoms:* Wild, ballistic flailing of *contralateral* arm/leg.
*   **Tardive Dyskinesia:**
    *   *Cause:* Chronic use of **Antipsychotics** (D2 blockers).
    *   *Symptoms:* Repetitive lip smacking, tongue rolling. Late onset.
`,
    pearls: [
        {
            title: "Parkinson's TRAP",
            content: "**T**remor (Resting)\\n**R**igidity\\n**A**kinesia\\n**P**ostural Instability"
        },
        {
            title: "Huntington's CAG Mnemonic",
            content: "**C**audate lost\\n**A**Ch lost\\n**G**ABA lost\\n(Also CAG Repeats)"
        },
        {
            title: "Hemiballismus Lesion",
            content: "Damage to the **Subthalamic Nucleus (STN)** causes contralateral flailing."
        },
        {
            title: "Dopamine Receptors",
            content: "**D1** = Direct (Go).\\n**D2** = Indirect (No-Go).\\nDopamine stimulates D1 and inhibits D2, both resulting in **Movement**."
        },
        {
            title: "MPTP Toxin",
            content: "Destroys SNc neurons, causing rapid, permanent Parkinsonism. (Synthetic heroin case)."
        }
    ],
    questions: [
        {
            question: "A patient presents with wild, uncontrollable flailing movements of the right arm and leg. An MRI would most likely show a lacunar stroke in which structure?",
            options: [
                "Left Substantia Nigra",
                "Left Subthalamic Nucleus",
                "Right Subthalamic Nucleus",
                "Left Caudate",
                "Right Putamen"
            ],
            correctAnswer: 1,
            rationale: "**Hemiballismus** (contralateral flailing) is caused by a lesion in the **Subthalamic Nucleus** (STN). Right movements = Left STN."
        },
        {
            question: "Which neurotransmitter is primarily released by the neurons of the Subthalamic Nucleus?",
            options: [
                "GABA",
                "Dopamine",
                "Glutamate",
                "Acetylcholine",
                "Serotonin"
            ],
            correctAnswer: 2,
            rationale: "The **STN** is the only intrinsic BG nucleus that is **excitatory**, releasing **Glutamate**. All others (Striatum, GPe, GPi, SNr) release GABA."
        },
        {
            question: "In Huntington's Disease, which brain structure undergoes the most significant atrophy, leading to ventriculomegaly?",
            options: [
                "Substantia Nigra",
                "Caudate Nucleus",
                "Thalamus",
                "Hippocampus",
                "Cerebellum"
            ],
            correctAnswer: 1,
            rationale: "Huntington's causes atrophy of the **Striatum**, specifically the **Caudate Nucleus**, leading to 'boxy' dilated ventricles."
        },
        {
            question: "A 65-year-old male presents with a resting tremor, masked facies, and a shuffling gait. Histology would likely reveal:",
            options: [
                "Neurofibrillary Tangles",
                "Lewy Bodies",
                "Amyloid Plaques",
                "Negri Bodies",
                "Pick Bodies"
            ],
            correctAnswer: 1,
            rationale: "This is Parkinson's Disease. The hallmark histology is **Lewy Bodies** (alpha-synuclein) in the Substantia Nigra."
        },
        {
            question: "Dopamine binding to D2 receptors in the striatum results in:",
            options: [
                "Excitation of the Indirect Pathway",
                "Inhibition of the Indirect Pathway",
                "Excitation of the Direct Pathway",
                "Inhibition of the Direct Pathway",
                "Inhibition of the Thalamus"
            ],
            correctAnswer: 1,
            rationale: "D2 receptors are **inhibitory**. They are on the Indirect (No-Go) pathway. So Dopamine **inhibits the Indirect pathway**, essentially 'turning off the stop signal', which promotes movement."
        }
    ],
    flashcards: [
        {
            front: "Hemiballismus Lesion",
            back: "Contralateral Subthalamic Nucleus (STN)",
            tag: "Neurology"
        },
        {
            front: "Parkinson's Pathology",
            back: "Loss of Dopamine in SNc + Lewy Bodies",
            tag: "Pathology"
        },
        {
            front: "Huntington's Genetic Defect",
            back: "CAG Repeat (>40) on Ch 4",
            tag: "Genetics"
        },
        {
            front: "Direct Pathway Function",
            back: "Promotes Movement (Disinhibits Thalamus)",
            tag: "Physiology"
        },
        {
            front: "Neurotransmitter of Striatum",
            back: "GABA",
            tag: "Neuroscience"
        },
        {
            front: "Neurotransmitter of STN",
            back: "Glutamate",
            tag: "Neuroscience"
        },
        {
            front: "Tardive Dyskinesia Cause",
            back: "Chronic D2 Blockers (Antipsychotics)",
            tag: "Pharmacology"
        },
        {
            front: "MPTP causes...",
            back: "Parkinsonism (Destroys SNc)",
            tag: "Pathology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Pathology > Degenerative diseases",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Pathology > Movement Disorders" }
        ]
    },
    mindmap: `
## Basal Ganglia

### Pathways
*   **Direct (Go)**: Striatum -| GPi -| Thalamus. D1.
*   **Indirect (Stop)**: Striatum -| GPe -| STN -> GPi -| Thalamus. D2.

### Pathology
*   **Parkinson's**: Low DA. TRAP. Lewy Bodies. Hypokinetic.
*   **Huntington's**: Caudate Atrophy. CAG. Chorea. Hyperkinetic.
*   **Hemiballismus**: STN Lesion. Flailing.

### Neurotransmitters
*   **GABA**: Striatum, Pallidum, SNr.
*   **Glutamate**: STN, Cortex.
*   **Dopamine**: SNc.
\`
};
