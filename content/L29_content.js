const L29_CONTENT = {
    id: 'l29',
    title: 'Lecture #29: Neocortical Development',
    lecturer: 'R. Ramos, Ph.D.',
    module: 'Neuro',
    session: 'Lecture #29',
    prev: 'l28',
    next: 'l30',
    pdf: 'pdfs/Lecture # 29. R. Ramos, Ph.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #29_ Neocortical development, Faculty_ R. Ramos PhD.srt',
    summary: `
# Lecture #29: Neocortical Development

**Lecturer:** R. Ramos, Ph.D.
**Session:** Lecture #29

## 1. Early Development (Slide 3-5)
*   **Neural Tube:** Origin of CNS.
*   **Neuroepithelium:** Proliferative zone around the ventricle (Ventricular Zone).
*   **Symmetric Division:** Generates more progenitor cells (expands the pool).
*   **Asymmetric Division:** Generates one progenitor and one *Neuroblast* (neuron) or Glioblast.

## 2. Radial Migration (Slide 6-9)
*   **Radial Glia:** Specialized cells that act as scaffolds/guides. Cell body in ventricular zone, process extends to pial surface.
*   **Mechanism:** Neuroblasts climb the radial glia "ladder" to reach the cortex.
*   **Inside-Out Development:**
    *   First neurons form the deepest layers (Layer VI).
    *   Subsequent neurons migrate *past* the older ones to form more superficial layers (V, IV, III, II).
    *   **Analogy:** Getting on an elevator; the first person goes to the back, the last person stands at the front (actually, closer to: building a house from bottom up, but the new bricks fly through the old ones).
    *   **Order:** VI -> V -> IV -> III -> II. (Layer I is formed early as the preplate).

## 3. Tangential Migration (Slide 10)
*   **Interneurons (GABAergic):** Do not follow radial glia.
*   **Origin:** Ganglionic Eminences (MGE/LGE) in the basal telencephalon.
*   **Route:** Migrate tangentially (sideways) into the cortex to integrate with excitatory cells.

## 4. Growth Cone & Axon Guidance (Slide 12-15)
*   **Growth Cone:** The "hand" at the tip of the growing axon.
    *   **Filopodia:** Fingers (actin).
    *   **Lamellipodia:** Palm (tubulin).
*   **Chemoattractants:** "Come here" signals (e.g., Netrins).
*   **Chemorepellents:** "Go away" signals (e.g., Semaphorins, Slit).
*   **Pioneer Axons:** The first axons to pathfind; others follow (fasciculation).

## 5. Synaptogenesis & Pruning (Slide 16-18)
*   **Overproduction:** Brain produces way more synapses than needed ("Exuberant Synaptogenesis").
*   **Pruning (Apoptosis):** "Use it or lose it". Active connections are strengthened (Neurotrophins); inactive ones are eliminated.
*   **Critical Periods:** Windows of plasticity where sensory input is required for proper wiring (e.g., Vision).

## 6. Clinical Correlates

:::correlate
**Lissencephaly ("Smooth Brain")**
*   **Pathophysiology:** Defect in neuronal migration. Neurons fail to reach outer layers.
*   **Genetics:** LIS1 gene mutation (reelin pathway).
*   **Presentation:** Absence of gyri/sulci (agrammatic), distinct thick cortex (pachygyria), severe intellectual disability, seizures.
*   **Mechanism:** Disruption of "Inside-Out" patterning.
:::

:::correlate
**Heterotopia**
*   **Pathophysiology:** "Matter out of place". Clusters of gray matter located in white matter or along ventricles.
*   **Cause:** Arrested migration (stopped too early).
*   **Presentation:** Seizures (Epilepsy) in an otherwise normal-looking individual (Periventricular Nodular Heterotopia).
:::

:::correlate
**Fetal Alcohol Syndrome**
*   **Mechanism:** Alcohol is a teratogen interfering with cell proliferation and migration (L1 cell adhesion molecule disruption).
*   **Presentation:** Microcephaly, developmental delay, facial anomalies (smooth philtrum, thin vermilion border).
:::

:::correlate
**Holoprosencephaly**
*   **Pathophysiology:** Failure of prosencephalon (forebrain) to separate into two hemispheres.
*   **Timing:** Weeks 5-6.
*   **Genetics:** Sonic Hedgehog (SHH) path defect.
*   **Presentation:** Cyclopia, cleft lip/palate, single ventricle (Alobar - most severe).
:::

`,
    questions: [
        {
            question: "**1. Which of the following best describes the pattern of cortical layer formation?**",
            options: [
                "Outside-In (Layer II first, Layer VI last)",
                "Inside-Out (Layer VI first, Layer II last)",
                "Random distribution",
                "Rostral-Caudal",
                "Lateral-Medial"
            ],
            correctAnswer: 1,
            rationale: "The cortex develops in an **Inside-Out** manner. The deepest layers (VI) are formed first, and newer neurons migrate past them to form the superficial layers (II). (Slide 8)"
        },
        {
            question: "**2. A child presents with intractable seizures. MRI reveals nodules of gray matter lining the lateral ventricles. What is the underlying developmental defect?**",
            options: [
                "Failure of neural tube closure",
                "Failure of hemispheric separation",
                "Arrested neuronal migration",
                "Defective myelination",
                "Overactive apoptosis"
            ],
            correctAnswer: 2,
            rationale: "This describes **Periventricular Heterotopia**. Neurons failed to migrate all the way to the cortex and got stuck (arrested) near the ventricles. (Slide 22)"
        },
        {
            question: "**3. Inhibitory interneurons (GABAergic) primarily reach the cortex via which mechanism?**",
            options: [
                "Radial migration from the Ventricular Zone",
                "Tangential migration from the Ganglionic Eminences",
                "Direct differentiation from microglia",
                "Retrograde transport",
                "Schwann cell guidance"
            ],
            correctAnswer: 1,
            rationale: "Excitatory pyramidal cells migrate radially. **Inhibitory interneurons** migrate **tangentially** from the Ganglionic Eminences. (Slide 10)"
        },
        {
            question: "**4. Lissencephaly is characterized by:**",
            options: [
                "Excessive gyration",
                "Smooth brain surface without gyri",
                "Herniation of the cerebellum",
                "Absence of the corpus callosum",
                "Fluid-filled cysts"
            ],
            correctAnswer: 1,
            rationale: "**Lissencephaly** means 'smooth brain'. It results from a failure of migration, leading to a lack of gyri and sulci. (Slide 20)"
        },
        {
            question: "**5. In the growth cone, filopodia are primarily composed of:**",
            options: [
                "Microtubules",
                "Actin filaments",
                "Intermediate filaments",
                "Neurofilaments",
                "Myelin"
            ],
            correctAnswer: 1,
            rationale: "Filopodia (the fingers) are rich in **Actin**. The central domain (Lamellipodia) contains Microtubules. (Slide 12)"
        }
    ],
    flashcards: [
        { "front": "Pattern of Cortical Layering?", "back": "Inside-Out (VI first, II last)", "tag": "Neuro" },
        { "front": "Role of Radial Glia?", "back": "Scaffold for radial migration of excitatory neurons", "tag": "Neuro" },
        { "front": "Origin of Cortical Interneurons?", "back": "Ganglionic Eminences (Tangential Migration)", "tag": "Neuro" },
        { "front": "Lissencephaly means?", "back": "Smooth Brain (Migration defect)", "tag": "Neuro" },
        { "front": "Heterotopia means?", "back": "Gray matter in wrong place (e.g., periventricular)", "tag": "Neuro" },
        { "front": "Growth Cone 'Fingers'?", "back": "Filopodia (Actin)", "tag": "Neuro" },
        { "front": "Chemoattractant example?", "back": "Netrin", "tag": "Neuro" },
        { "front": "Chemorepellent example?", "back": "Slit, Semaphorin", "tag": "Neuro" },
        { "front": "Holoprosencephaly cause?", "back": "Failure of hemispheres to separate (SHH defect)", "tag": "Neuro" }
    ],
    mindmap: `
## Neocortical Development
### Proliferation
*   **Zone**: Ventricular Zone
*   **Division**: Symmetric (Expand) -> Asymmetric (Neuroblast)
### Migration
*   **Radial**: Excitatory. Uses Radial Glia. Inside-Out (VI->II).
*   **Tangential**: Inhibitory. From Ganglionic Eminences.
### Wiring
*   **Growth Cone**: Actin (Filopodia). Guides axon.
*   **Cues**: Attractants (Netrin), Repellents (Slit).
*   **Pruning**: Apoptosis of unused connections.
### Pathology
*   **Lissencephaly**: Smooth brain. Migration failure.
*   **Heterotopia**: Stuck neurons. Seizures.
*   **Holoprosencephaly**: Single hemisphere.
`
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Embryology > Brain Development",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Neurology > Embryology" }
        ]
    }
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Embryology > Brain Development",
        alternatives: [
            { "resource": "FirstAid", "chapter": "Neurology > Embryology" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L29_CONTENT = L29_CONTENT;
}
