export const L42_CONTENT = {
    id: "l42",
    summary: `
# Lecture 42: Diseases of Myelin

**Lecturer:** M. Plummer, M.D.
**Session:** Lecture 42

## 1. Demyelinating Diseases (Myelin Destruction)
*   **Multiple Sclerosis (MS):**
    *   **Autoimmune** destruction of CNS myelin (Oligodendrocytes).
    *   *Pathology:* **Periventricular Plaques** ("Dawson's Fingers"). Reactive Gliosis. Preservation of Axons (early).
    *   *CSF:* **Oligoclonal IgG Bands** (Intrathecal synthesis).
    *   *Clinical:* Relapsing-Remitting course. **Optic Neuritis** (Painful vision loss), **INO** (MLF lesion), **Lhermitte Sign** (Electric shock with neck flexion), **Uhthoff Phenomenon** (Heat worsens symptoms).
    *   *Epidemiology:* Women > Men. Far from equator (Vitamin D).
*   **Guillain-Barré Syndrome (GBS):**
    *   **Autoimmune** destruction of PNS myelin (Schwann Cells).
    *   *Pathology:* Segmental demyelination + Lymphocytic infiltration.
    *   *Clinical:* Acute **Ascending Paralysis** + Areflexia.
    *   *Trigger:* *Campylobacter jejuni*, CMV, EBV (Molecular Mimicry).
    *   *CSF:* Albuminocytologic Dissociation (High Protein, Normal Cells).
*   **Central Pontine Myelinolysis (Osmotic Demyelination):**
    *   *Cause:* Rapid correction of **Hyponatremia**. ("From Low to High, your Pons will Die").
    *   *Clinical:* **Locked-In Syndrome** (Quadriplegia + Preserved Consciousness/Eye movements).

## 2. Dysmyelinating Diseases (Leukodystrophies)
*   *Definition:* Genetic defects in myelin *formation* or *turnover*.
*   **Metachromatic Leukodystrophy (MLD):**
    *   *Deficiency:* **Arylsulfatase A**.
    *   *Accumulation:* Sulfatides.
    *   *Path:* Metachromasia (change in dye color).
*   **Krabbe Disease (Globoid Cell Leukodystrophy):**
    *   *Deficiency:* **Galactocerebrosidase**.
    *   *Accumulation:* Galactosylsphingosine (Psychosine) - Toxic.
    *   *Path:* **Globoid Cells** (Engorged Macrophages).
*   **Adrenoleukodystrophy (ALD):**
    *   *Genetics:* **X-Linked Recessive** (ABCD1 gene).
    *   *Defect:* Peroxisomal transporter.
    *   *Accumulation:* **Very Long Chain Fatty Acids (VLCFA)**.
    *   *Clinical:* Adrenal Insufficiency + CNS deterioration in young boys.

## 3. Infectious Demyelination
*   **Progressive Multifocal Leukoencephalopathy (PML):**
    *   *Pathogen:* **JC Virus** (Reactivation).
    *   *Host:* Immunosuppressed (AIDS CD4 < 200).
    *   *Path:* Lytic infection of Oligodendrocytes. Enlarged nuclei with "Ground Glass" viral inclusions.
    *   *Clinical:* Rapidly progressive multifocal deficits. Death.

`,
    pearls: [
        {
            title: "MS Triad (Charcot)",
            content: "1. **Scanning Speech** (Dysarthria)\\n2. **Intention Tremor** (Cerebellar)\\n3. **Nystagmus** (INO/MLF)"
        },
        {
            title: "Uhthoff's Phenomenon",
            content: "MS symptoms get **WORSE** with **HEAT** (Hot bath, exercise, fever). Heat slows conduction in demyelinated axons."
        },
        {
            title: "CPM Rule",
            content: "**From Low to High, your Pons will Die** (Hyponatremia -> Rapid Correction -> CPM/Locked-in).\\n**From High to Low, your Brain will Blow** (Hypernatremia -> Rapid Correction -> Cerebral Edema)."
        },
        {
            title: "Krabbe Findings",
            content: "Look for **Globoid Cells** (Multinucleated Giant Cells) and optic atrophy."
        },
        {
            title: "Adrenoleukodystrophy",
            content: "Think: **Adrenal** glands + **Leuko** (White matter) + **Dystrophy** (Bad growth). Young boy with bronzing skin (Addison's) and behavioral changes."
        }
    ],
    questions: [
        {
            question: "A 28-year-old female presents with sudden loss of vision in her right eye associated with pain on eye movement. MRI shows periventricular white matter plaques. Analysis of her CSF would most likely reveal:",
            options: [
                "Albuminocytologic Dissociation",
                "Oligoclonal IgG Bands",
                "Neutrophilic Pleocytosis",
                "Decreased Glucose",
                "Positive India Ink Stain"
            ],
            answer: 1,
            explanation: "**Oligoclonal Bands** found in the CSF (but not serum) indicate intrathecal IgG production, a hallmark of **Multiple Sclerosis**."
        },
        {
            question: "A 45-year-old alcoholic is brought to the ER with severe hyponatremia (Na = 102). The residents rapidly correct his sodium to 135 over 6 hours. Two days later, he is quadriplegic but can blink and move his eyes vertically. What happened?",
            options: [
                "Stroke in the MCA territory",
                "Subarachnoid Hemorrhage",
                "Central Pontine Myelinolysis",
                "Wernicke's Encephalopathy",
                "Herniation"
            ],
            answer: 2,
            explanation: "**Central Pontine Myelinolysis** (Osmotic Demyelination Syndrome) is caused by **rapid correction of hyponatremia**. It destroys the Pons, causing **Locked-In Syndrome**."
        },
        {
            question: "Which pattern of weakness is characteristic of Guillain-Barré Syndrome?",
            options: [
                "Descending paralysis with pupillary dilation",
                "Hemiparesis sparing the face",
                "Ascending flaccid paralysis with areflexia",
                "Proximal muscle weakness with preserved sensation",
                "Waxing and waning weakness improving with rest"
            ],
            answer: 2,
            explanation: "**GBS** causes an acute **Ascending** paralysis (toes to nose) with loss of reflexes (Areflexia)."
        },
        {
            question: "Adrenoleukodystrophy involves the accumulation of which substance due to a peroxisomal defect?",
            options: [
                "Sphingomyelin",
                "Sulfatides",
                "Very Long Chain Fatty Acids (VLCFA)",
                "Galactocerebroside",
                "Copper"
            ],
            answer: 2,
            explanation: "**ALD** is a defect in the ABCD1 transporter, preventing the breakdown of **Very Long Chain Fatty Acids** in peroxisomes."
        },
        {
            question: "Progressive Multifocal Leukoencephalopathy (PML) is caused by the reactivation of which virus in immunocompromised patients?",
            options: [
                "Herpes Simplex Virus 1 (HSV-1)",
                "Cytomegalovirus (CMV)",
                "JC Virus",
                "Epstein-Barr Virus (EBV)",
                "Varicella Zoster Virus (VZV)"
            ],
            answer: 2,
            explanation: "**JC Virus** causes PML. (Mnemonic: **J**ohn **C**unningham virus destroys oligodendoctyes in AIDS)."
        }
    ],
    flashcards: [
        {
            front: "Multiple Sclerosis CSF Finding",
            back: "Oligoclonal IgG Bands",
            tag: "Neurology"
        },
        {
            front: "Lhermitte Sign",
            back: "Electric shock down back with neck flexion (MS/Spinal Cord)",
            tag: "Neurology"
        },
        {
            front: "Uhthoff Phenomenon",
            back: "Heat worsens MS symptoms",
            tag: "Neurology"
        },
        {
            front: "Central Pontine Myelinolysis Cause",
            back: "Rapid correction of Hyponatremia",
            tag: "Neurology"
        },
        {
            front: "Metachromatic Leukodystrophy Enzyme",
            back: "Arylsulfatase A",
            tag: "Neurology"
        },
        {
            front: "Krabbe Disease Hallmark",
            back: "Globoid Cells",
            tag: "Neurology"
        },
        {
            front: "Adrenoleukodystrophy Accumulation",
            back: "Very Long Chain Fatty Acids (VLCFA)",
            tag: "Neurology"
        },
        {
            front: "PML Virus",
            back: "JC Virus",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Demyelinating Disorders",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Demyelinating" }
        ]
    },
    mindmap: `
## Demyelination

### CNS (Oligodendrocytes)
*   **MS**: Autoimmune. Plaques. Optic Neuritis. Relapsing.
*   **PML**: JC Virus. AIDS.
*   **CPM**: Hyponatremia correction. Pons.

### PNS (Schwann Cells)
*   **GBS**: Ascending. Areflexia. Campylobacter.

### Leukodystrophies (Genetic)
*   **Metachromatic**: Arylsulfatase A.
*   **Krabbe**: Globoid Cells.
*   **ALD**: VLCFA. Adrenal.
\`
};
