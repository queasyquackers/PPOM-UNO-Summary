const L31_CONTENT = {
    id: 'l31',
    title: 'Lecture #31: Basal Ganglia',
    lecturer: 'I. Kurtzer, Ph.D.',
    module: 'Neuro',
    session: 'Lecture #31',
    prev: 'l30',
    next: 'l32',
    pdf: 'pdfs/Lecture # 31. I. Kurtzer, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #31_ Introduction to Supraspinal Motor Systems Part II- Basal Ganglia; Presenter_ I. Kurtzer, PhD.srt',
    summary: `
# Lecture #31: Basal Ganglia

**Lecturer:** I. Kurtzer, Ph.D.
**Session:** Lecture #31

## 1. Overview and Functional Anatomy (Slides 3-9)
*   **Function:** Selection of automated actions and thoughts. "Go" vs "No Go".
*   **Organization:** Input -> Intrinsic -> Output -> Target.
*   **Key Concept:** Disinhibition. The Basal Ganglia (BG) works largely by **inhibiting** structures that are **inhibiting** a target (releasing the brake).

### The Nuclei
*   **Striatum (Input):**
    *   **Caudate:** C-shaped. Head, body, tail. Lateral wall of lateral ventricles.
    *   **Putamen:** Egg-shaped.
    *   **Nucleus Accumbens:** Ventral striatum.
    *   **Neurotransmitter:** GABA (Inhibitory).
*   **Pallidum (GPe/GPi):**
    *   **GPe (External):** Intrinsic. GABA.
    *   **GPi (Internal):** Output. GABA.
*   **Subthalamic Nucleus (STN):** Lateral to Hypothalamus. Releases **Glutamate** (Excitatory).
*   **Substantia Nigra (SN):**
    *   **Pars Compacta (SNc):** Dopamine (Modulatory).
    *   **Pars Reticulata (SNr):** Output. GABA.

## 2. Pathways (Slides 13-18)
The Albin-DeLong Model.

### Direct Pathway (GO)
Promotes movement.
1.  **Cortex** excites **Striatum** (Glu).
2.  **Striatum** inhibits **GPi/SNr** (GABA).
3.  **GPi/SNr** is *inhibited*, so it stops inhibiting the **Thalamus**.
4.  **Thalamus** is disinhibited and excites **Cortex**.
*   **Net Effect:** Excitation of Motor Cortex.

### Indirect Pathway (NO GO)
Inhibits movement.
1.  **Cortex** excites **Striatum** (Glu).
2.  **Striatum** inhibits **GPe** (GABA).
3.  **GPe** is *inhibited*, so it stops inhibiting the **STN**.
4.  **STN** is disinhibited and excites **GPi/SNr** (Glu).
5.  **GPi/SNr** inhibits **Thalamus** (strongly).
*   **Net Effect:** Inhibition of Motor Cortex.

### Hyperdirect Pathway (STOP ALL)
1.  **Cortex** directly excites **STN** (Glu).
2.  **STN** excites **GPi** (Glu).
3.  **GPi** inhibits **Thalamus**.
*   **Function:** Global suppression (e.g., stopping an action suddenly).

## 3. Dopamine Modulation (Slides 19-20)
Dopamine from SNc modulates the striatum.
*   **D1 Receptors:** Gs coupled (Increase cAMP). **Excite** Direct Pathway. (GO)
*   **D2 Receptors:** Gi coupled (Decrease cAMP). **Inhibit** Indirect Pathway. (Stop the NO GO = GO).
*   **Net Result:** Dopamine facilitates movement.

## 4. Basal Ganglia Channels (Slide 22)
*   **Motor:** Putamen -> GPi -> VL/VA Thalamus -> Motor Cortex.
*   **Oculomotor:** Caudate -> SNr -> FEF.
*   **Prefrontal:** Caudate -> GPi -> Prefrontal Cortex (Executive function).
*   **Limbic:** Nucleus Accumbens -> Ventral Pallidum -> Limbic (Emotion/Motivation).

## 5. Clinical Correlates

:::correlate
**Parkinson's Disease (Hypokinetic)**
*   **Pathology:** Loss of Dopaminergic neurons in **Substantia Nigra pars compacta**.
*   **Histology:** **Lewy Bodies** (alpha-synuclein), depigmentation of SN.
*   **Mechanism:** Less DA = Less Direct (D1) + More Indirect (D2) = **Inhibition** of movement.
*   **Presentation:** **TRAP**
    *   **T**remor (Resting, Pill-rolling)
    *   **R**igidity (Cogwheel)
    *   **A**kinesia/Bradykinesia (Shuffling gait, masked facies)
    *   **P**ostural Instability
*   **Treatment:** Levodopa (DA precursor), Carbidopa (prevents peripheral breakdown), Deep Brain Stimulation.
:::

:::correlate
**Huntington's Disease (Hyperkinetic)**
*   **Genetics:** Autosomal Dominant. CAG repeat expansion (>40). Chromosome 4. Anticipation.
*   **Pathology:** Atrophy of **Caudate Nucleus** (boxcar ventricles). Loss of GABA/Enk neurons in Indirect Pathway.
*   **Mechanism:** Loss of Indirect Pathway = Disinhibition of Thalamus = **Excess** movement.
*   **Presentation:** **Chorea** (dance-like), Athetosis, Aggression/Depression, Dementia.
*   **Mnemonic:** **CAG** = **C**audate atrophy, **A**cetylcholine/GABA decrease, **G**onads (anticipation).
:::

:::correlate
**Hemiballismus**
*   **Lesion:** **Subthalamic Nucleus (STN)** (usually Lacunar Stroke).
*   **Presentation:** Contralateral, wild, flailing (ballistic) movements of proximal limbs.
*   **Mechanism:** Loss of STN excitation to GPi -> Loss of inhibition on Thalamus -> Uncontrolled movement.
:::

:::correlate
**Drug-Induced Parkinsonism / Tardive Dyskinesia**
*   **Cause:** D2 Antagonists (Antipsychotics, Anti-emetics).
*   **Presentation:**
    *   **Acute:** Rigidity, resting tremor (Pseudoparkinsonism).
    *   **Chronic:** Tardive Dyskinesia (repetitive mouth/tongue movements).
:::

`,
    questions: [
        {
            question: "**1. Which neurotransmitter is released by the Subthalamic Nucleus (STN)?**",
            options: [
                "GABA",
                "Glutamate",
                "Dopamine",
                "Acetylcholine",
                "Serotonin"
            ],
            correctAnswer: 1,
            rationale: "The **Subthalamic Nucleus (STN)** is the only excitatory nucleus intrinsic to the basal ganglia; it releases **Glutamate**. All others (Striatum, Pallidum, SNr) primarily release GABA. (Slide 8)"
        },
        {
            question: "**2. A patient presents with a resting tremor, shuffling gait, and rigidity. Histology reveals intracellular inclusions containing alpha-synuclein. Which pathway is primarily affected?**",
            options: [
                "Loss of cholinergic input to the Striatum",
                "Loss of dopaminergic input from Substantia Nigra pars compacta",
                "Degeneration of the Subthalamic Nucleus",
                "Expansion of CAG repeats affecting the Caudate",
                "Infarction of the Internal Capsule"
            ],
            correctAnswer: 1,
            rationale: "This is **Parkinson's Disease**. It is caused by the loss of **dopaminergic neurons** in the **Substantia Nigra pars compacta**, leading to decreased drive of the direct pathway and disinhibition of the indirect pathway. (Slide 29)"
        },
        {
            question: "**3. A patient with a history of hypertension suffers a stroke and develops wild, flailing movements of the right arm and leg. Where is the lesion?**",
            options: [
                "Left Substantia Nigra",
                "Right Subthalamic Nucleus",
                "Left Subthalamic Nucleus",
                "Left Caudate Nucleus",
                "Right Globus Pallidus"
            ],
            correctAnswer: 2,
            rationale: "This is **Hemiballismus**, characterized by ballistic movements. It is caused by a lesion of the **Contralateral Subthalamic Nucleus** (Left brain -> Right body). (Slide 34)"
        },
        {
            question: "**4. In the Direct Pathway, activation of D1 receptors in the striatum leads to:**",
            options: [
                "Inhibition of GPi and Disinhibition of Thalamus",
                "Excitation of GPe and Inhibition of STN",
                "Inhibition of Thalamus directly",
                "Excitation of SNr",
                "Inhibition of the Motor Cortex"
            ],
            correctAnswer: 0,
            rationale: "**D1** receptor activation excites the Direct Pathway (Striatum). The Striatum inhibits the **GPi**. The GPi normally inhibits the Thalamus. Therefore, D1 activation leads to **Disinhibition of the Thalamus** (Movement facilitation). (Slide 19)"
        },
        {
            question: "**5. Which finding is characteristic of Huntington's Disease on neuroimaging?**",
            options: [
                "Depigmentation of the Substantia Nigra",
                "Atrophy of the Caudate Nucleus and box-like ventricles",
                "Lesion of the Subthalamic Nucleus",
                "Atrophy of the Mammillary Bodies",
                "Cerebellar vermis atrophy"
            ],
            correctAnswer: 1,
            rationale: "**Huntington's Disease** causes atrophy of the **Caudate Nucleus** (and Putamen), leading to expanded lateral ventricles that can appear box-like. (Slide 36)"
        }
    ],
    flashcards: [
        { "front": "Basal Ganglia Output Nuclei?", "back": "GPi (Globus Pallidus Internus) and SNr (Substantia Nigra pars reticulata)", "tag": "Neuro" },
        { "front": "Neurotransmitter of Direct Pathway (Striatum to GPi)?", "back": "GABA (with Substance P) -> Inhibitory", "tag": "Neuro" },
        { "front": "Neurotransmitter of STN?", "back": "Glutamate (Excitatory)", "tag": "Neuro" },
        { "front": "Parkinson's Disease Histology?", "back": "Lewy Bodies (Alpha-synuclein), Loss of pigmented neurons in SNc", "tag": "Neuro" },
        { "front": "Huntington's Disease Genetics?", "back": "Auto Dom, CAG expansion, Chromosome 4", "tag": "Neuro" },
        { "front": "Hemiballismus Lesion?", "back": "Contralateral Subthalamic Nucleus (STN)", "tag": "Neuro" },
        { "front": "Dopamine effect on D1?", "back": "Excitatory (Direct Pathway) -> GO", "tag": "Neuro" },
        { "front": "Dopamine effect on D2?", "back": "Inhibitory (Indirect Pathway) -> STOP the NO-GO -> GO", "tag": "Neuro" },
        { "front": "Parkinson's Symptoms TRAP?", "back": "Tremor (Rest), Rigidity, Akinesia/Bradykinesia, Postural Instability", "tag": "Neuro" },
        { "front": "Structure degenerated in Huntington's?", "back": "Caudate Nucleus (+ Putamen)", "tag": "Neuro" }
    ],
    mindmap: `
## Basal Ganglia
### Nuclei
*   **Striatum**: Input (GABA)
    *   **Caudate**: Cognitive
    *   **Putamen**: Motor
*   **GPe**: Intrinsic (GABA)
*   **STN**: Intrinsic (Glu)
*   **Output**: GPi / SNr (GABA)
*   **SNc**: Modulatory (Dopamine)
### Pathways
*   **Direct**: GO (Striatum -> GPi)
*   **Indirect**: NO GO (Striatum -> GPe -> STN -> GPi)
*   **Hyperdirect**: STOP (Cortex -> STN -> GPi)
### Diseases
*   **Parkinson's**: Loss of SNc. TRAP.
*   **Huntington's**: Loss of Caudate. Chorea.
*   **Hemiballismus**: Lesion of STN. Flailing.
`
};

if (typeof window !== 'undefined') {
    window.L31_CONTENT = L31_CONTENT;
}
