export const L24_CONTENT = {
    id: "l24",
    summary: `
# Lecture 24: Olfaction and Taste

**Lecturer:** G. Otazu, Ph.D.
**Session:** Lecture 24

## 1. Olfaction (Smell)
* **Receptors**:** Bipolar neurons in olfactory epithelium.
    * **  *Turnover**:* Every 7 days (stem cells).
    * **  *Receptors**:* GPCRs.
* **Pathway**:**
    1.  Olfactory Nerves (CN I) pass through **Cribriform Plate** of Ethmoid bone.
    2.  Synapse in **Glomeruli** of Olfactory Bulb.
    3.  **Mitral/Tufted Cells** (Second order) form Olfactory Tract.
    4.  Project directly to **Primary Olfactory Cortex (Piriform Cortex)**, Amygdala, Entorhinal Cortex.
    * **  *Note**:* Olfaction is the **ONLY** sense that bypasses the Thalamus before reaching the cortex.

## 2. Taste (Gustation)
* **Modalities**:**
    * **Salty**:** Na+ influx (Amiloride-sensitive channels).
    * **Sour**:** H+ ions (Block K+ channels).
    * **Sweet/Bitter/Umami**:** GPCRs (G-protein coupled).
* **Innervation**:**
    * **Anterior 2/3**:** CN VII (Facial - Chorda Tympani).
    * **Posterior 1/3**:** CN IX (Glossopharyngeal).
    * **Epiglottis/Pharynx**:** CN X (Vagus).
* **Pathway**:**
    1.  Nerves project to **Nucleus Tractus Solitarius (NTS)** in Medulla.
    2.  Project to **VPM** of Thalamus.
    3.  Project to **Gustatory Cortex** (Insula/Frontal Operculum).

## 3. Clinical Correlates
:::correlate
**Kallmann Syndrome**
* **Triad**:** Anosmia + Delayed Puberty (Hypogonadism).
* **Mechanism**:** Failure of GnRH neurons to migrate from olfactory placode to hypothalamus.
:::

:::correlate
**Foster-Kennedy Syndrome**
* **Cause**:** Meningioma of the Olfactory Groove.
* **Triad**:**
    1.  **Ipsilateral Anosmia** (Tumor compresses olfactory tract).
    2.  **Ipsilateral Optic Atrophy** (Tumor compresses Optic Nerve).
    3.  **Contralateral Papilledema** (Increased intracranial pressure).
:::

:::correlate
**Uncinate Fits (Temporal Lobe Epilepsy)**
*   Seizures originating in the **Uncus** (Medial Temporal Lobe).
* **Aura**:** Hallucination of foul smells (**Cacosmia**).
:::

:::correlate
**Neurodegenerative Diseases**
* **Parkinson's / Alzheimer's**:**Hyposmia** (decreased smell) is often the *earliest* clinical sign, appearing years before motor or cognitive symptoms.
:::
`,
    pearls: [
        {
            title: "Olfactory Pathway Uniqueness",
            content: "Olfaction is the only sensory modality that projects directly to the cortex **without** relaying through the Thalamus first."
        },
        {
            title: "Kallmann Syndrome",
            content: "Teenager with **No Smell** + **No Puberty**. (GnRH neuron migration failure)."
        },
        {
            title: "Foster-Kennedy Syndrome",
            content: "Olfactory Groove Meningioma: **Ipsilateral Anosmia/Optic Atrophy** + **Contralateral Papilledema**."
        },
        {
            title: "Taste Innervation",
            content: "Anterior 2/3 = **CN VII**.\\nPosterior 1/3 = **CN IX**.\\nThroat = **CN X**."
        },
        {
            title: "Taste Transduction",
            content: "Salty/Sour = **Ion Channels**.\\nSweet/Bitter/Umami = **GPCRs**."
        }
    ],
    questions: [
        {
            question: "A 16-year-old male presents with delayed puberty. Physical exam reveals small testes and a complete inability to smell since birth. What is the most likely diagnosis?",
            options: [
                "Klinefelter Syndrome",
                "Kallmann Syndrome",
                "Foster-Kennedy Syndrome",
                "Turner Syndrome",
                "Uncinate Epilepsy"
            ],
            correctAnswer: 1,
            rationale: "**Kallmann Syndrome** is characterized by hypogonadotropic hypogonadism (delayed puberty) and **anosmia** due to migration failure of GnRH neurons."
        },
        {
            question: "A patient presents with seizures preceded by a hallucination of a foul smell (burning rubber). Where is the seizure focus likely located?",
            options: [
                "Postcentral Gyrus",
                "Occipital Lobe",
                "Uncus (Temporal Lobe)",
                "Frontal Lobe",
                "Cerebellum"
            ],
            correctAnswer: 2,
            rationale: "**Uncinate fits** are temporal lobe seizures involving the **Uncus** (primary olfactory cortex area), resulting in olfactory hallucinations (**Cacosmia**)."
        },
        {
            question: "Which cranial nerve is responsible for taste sensation on the anterior two-thirds of the tongue?",
            options: [
                "Trigeminal (V)",
                "Facial (VII)",
                "Glossopharyngeal (IX)",
                "Vagus (X)",
                "Hypoglossal (XII)"
            ],
            correctAnswer: 1,
            rationale: "The **Facial Nerve (CN VII)** carries taste from the anterior 2/3 of the tongue (via the Chorda Tympani)."
        },
        {
            question: "A 55-year-old woman presents with loss of smell in her right ear and vision loss in her right eye. Fundoscopy reveals right optic atrophy and left papilledema. What is the most likely diagnosis?",
            options: [
                "Pituitary Adenoma",
                "Foster-Kennedy Syndrome",
                "Multiple Sclerosis",
                "Occipital Stroke",
                "Glioblastoma Multiforme"
            ],
            correctAnswer: 1,
            rationale: "**Foster-Kennedy Syndrome** (Olfactory Groove Meningioma) causes **ipsilateral anosmia and optic atrophy** (direct compression) and **contralateral papilledema** (ICP)."
        },
        {
            question: "Loss of olfaction is often an early prodromal sign of which neurodegenerative disorder?",
            options: [
                "Amyotrophic Lateral Sclerosis (ALS)",
                "Parkinson's Disease",
                "Huntington's Disease",
                "Multiple Sclerosis",
                "Myasthenia Gravis"
            ],
            correctAnswer: 1,
            rationale: "**Hyposmia** (loss of smell) frequently precedes motor symptoms in **Parkinson's Disease** (and Alzheimer's) by several years."
        }
    ],
    flashcards: [
        {
            front: "Diagnosis: Anosmia + No Puberty",
            back: "Kallmann Syndrome",
            tag: "Neurology"
        },
        {
            front: "Diagnosis: Ipsilateral Anosmia/Optic Atrophy + Contralateral Papilledema",
            back: "Foster-Kennedy Syndrome",
            tag: "Neurology"
        },
        {
            front: "CN for Taste: Anterior 2/3 Tongue",
            back: "CN VII (Facial)",
            tag: "Anatomy"
        },
        {
            front: "CN for Taste: Posterior 1/3 Tongue",
            back: "CN IX (Glossopharyngeal)",
            tag: "Anatomy"
        },
        {
            front: "Taste Modalities using Ion Channels",
            back: "Salty (Na+) and Sour (H+)",
            tag: "Physiology"
        },
        {
            front: "Taste Modalities using GPCRs",
            back: "Sweet, Bitter, Umami",
            tag: "Physiology"
        },
        {
            front: "Seizure aura with foul smell (Cacosmia)",
            back: "Uncinate Fit (Temporal Lobe/Uncus)",
            tag: "Neurology"
        },
        {
            front: "Unique feature of Olfactory Pathway",
            back: "Does not relay in Thalamus before Cortex",
            tag: "Anatomy"
        },
        {
            front: "Primary Olfactory Cortex location",
            back: "Piriform Cortex (Temporal Lobe)",
            tag: "Anatomy"
        },
        {
            front: "Thalamic Nucleus for Taste",
            back: "VPM (Ventral Posteromedial)",
            tag: "Anatomy"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Cranial Nerves",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Otology/Ophthalmology" },
            { resource: "BandB", chapter: "Neurology > The Chemical Senses" }
        ]
    },
    mindmap: `
## Olfaction & Taste

### Olfaction (CN I)
* **Receptors**: Bipolar (mucosa).
* **Pathway**: Bulb → Tract → **Piriform Cortex** (No Thalamus).
* **Pathology**:
    * **Kallmann**: Anosmia + Hypogonadism.
    * **Foster-Kennedy**: Meningioma. Ipsilateral Atrophy/Anosmia, Contralateral Papilledema.
    * **Uncinate Fit**: Seizure + Cacosmia.
    * **Parkinson's**: Early Hyposmia.

### Taste
* **Nerves**:
    * **  Ant 2/3**: **CN VII**
    * **  Post 1/3**: **CN IX**
    * **  Throat**: **CN X**
* **Pathway**: NTS → VPM (Thalamus) → Insula.
* **Sensation**:
    * **  Ion Channels**: Salty/Sour.
    * **  GPCR**: Sweet/Bitter/Umami.
\`
};

if (typeof window !== 'undefined') {
    window.L24_CONTENT = L24_CONTENT;
}
