const L24_CONTENT = {
    id: 'l24',
    title: 'Lecture #24: Olfaction and Taste',
    lecturer: 'G. Otazu, Ph.D.',
    module: 'Neurology',
    session: 'Lecture #24',
    prev: 'l23',
    next: 'l25',
    pdf: 'pdfs/Lecture # 24. G. Otazu, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #24_ Overview of Olfaction and Taste; Presenter_ G. Otazu, PhD.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Cranial Nerves > CN I, VII, IX, X'
    },
    summary: `
# Lecture #24: Olfaction and Taste

**Lecturer:** Gonzalo Otazu, Ph.D.
**Session:** Neurology

## 1. Olfaction (Smell)
*   **Receptors:** Bipolar neurons in olfactory epithelium. Use **GPCRs** (Golf) -> cAMP -> Ca2+/Na+ influx -> Depolarization.
*   **Pathway:** Olfactory Receptor Neurons (CN I) -> Cribriform Plate -> Olfactory Bulb (Glomeruli) -> Mitral/Tufted Cells -> Olfactory Tract.
*   **Targets:** Does **NOT** relay in Thalamus first!
    *   *Primary Olfactory Cortex:* Piriform Cortex, Periamygdaloid cortex.
    *   *Secondary:* Entorhinal cortex (Memory), Orbitofrontal cortex (Reward/Discrimination), Amygdala (Emotion).
*   **Regeneration:** Olfactory neurons regenerate (basal cells), but capacity decreases with age.

## 2. Gustation (Taste)
*   **Papillae:** Filiform (mechanical, no taste), Fungiform (tip), Foliate (sides), Circumvallate (back).
*   **Modalities:**
    *   **Salty:** Na+ channel (Amiloride-sensitive).
    *   **Sour:** H+ channel (TRP).
    *   **Sweet/Bitter/Umami:** GPCRs.
*   **Innervation:**
    *   *Anterior 2/3:* **CN VII** (Chorda Tympani).
    *   *Posterior 1/3:* **CN IX**.
    *   *Epiglottis/Pharynx:* **CN X**.
*   **Pathway:** Solitary Nucleus (NTS) -> VPM (Thalamus) -> Gustatory Cortex (Insula/Operculum).

## 3. Olfactory Disorders
*   **Anosmia:** Loss of smell.
    *   *Causes:* Trauma (cribriform plate fracture), Viral (COVID), Sinonasal disease.
*   **Kallmann Syndrome:** Anosmia + Hypogonadotropic Hypogonadism (GnRH neurons fail to migrate).
*   **Foster-Kennedy Syndrome:** Meningioma of olfactory groove.
    *   *Triad:* Ipsilateral Anosmia, Ipsilateral Optic Atrophy, Contralateral Papilledema.
*   **Neurodegeneration:** Anosmia is an **EARLY** sign of Parkinson's and Alzheimer's.
*   **Phantosmia/Uncinate Fits:** Olfactory hallucinations (often "burning rubber") due to temporal lobe seizures.

## 4. Clinical Correlates
:::correlate
**Kallmann Syndrome**
*   **Def:** Constitutional delay of puberty + Anosmia.
*   **Path:** Failure of GnRH producing neurons to migrate from olfactory pit to hypothalamus.
*   **Labs:** Low FSH, Low LH, Low Testosterone/Estrogen.
:::

:::correlate
**Foster Kennedy Syndrome**
*   **Cause:** Frontal lobe tumor (Meningioma).
*   **S/Sx:**
    1.  **Anosmia** (CN I compression).
    2.  **Optic Atrophy** (Ipsilateral CN II compression).
    3.  **Papilledema** (Contralateral - due to raised ICP).
:::

:::correlate
**Taste & Zinc**
*   **Dysgeusia:** Distortion of taste.
*   **Cause:** Zinc deficiency is a common reversible cause.
:::
`,
    questions: [
        {
            question: "**1. Which cranial nerve carries taste sensation from the anterior two-thirds of the tongue?**",
            options: [
                "CN V (Trigeminal)",
                "CN VII (Facial)",
                "CN IX (Glossopharyngeal)",
                "CN X (Vagus)",
                "CN XII (Hypoglossal)"
            ],
            correctAnswer: 1,
            rationale: "**CN VII** (via Chorda Tympani) supplies taste to the anterior 2/3. CN V supplies somatic sensation (touch/pain) to the same area."
        },
        {
            question: "**2. A 15-year-old male presents with delayed puberty and inability to smell. What is the diagnosis?**",
            options: [
                "Turner Syndrome",
                "Klinefelter Syndrome",
                "Kallmann Syndrome",
                "Foster-Kennedy Syndrome",
                "Cystic Fibrosis"
            ],
            correctAnswer: 2,
            rationale: "**Kallmann Syndrome** is characterized by the association of Anosmia and Hypogonadotropic Hypogonadism (delayed puberty)."
        },
        {
            question: "**3. Olfactory information projects directly to the cortex without first passing through which structure (unlike other senses)?**",
            options: [
                "Thalamus",
                "Cribriform plate",
                "Olfactory Bulb",
                "Amygdala",
                "Hypothalamus"
            ],
            correctAnswer: 0,
            rationale: "Olfaction is the unique sensory modality that bypasses the **Thalamus** to project directly to the primary olfactory cortex."
        },
        {
            question: "**4. Foster-Kennedy Syndrome involves a tumor in which location?**",
            options: [
                "Olfactory Groove / Frontal Lobe",
                "Pituitary Gland",
                "Cerebellopontine Angle",
                "Temporal Lobe",
                "Occipital Lobe"
            ],
            correctAnswer: 0,
            rationale: "Foster-Kennedy syndrome is caused by a meningioma in the **Olfactory Groove** compressing CN I and CN II."
        },
        {
            question: "**5. \"Burning rubber\" smells (uncinate fits) are associated with seizures in which lobe?**",
            options: [
                "Frontal",
                "Parietal",
                "Temporal",
                "Occipital",
                "Cerebellum"
            ],
            correctAnswer: 2,
            rationale: "The primary olfactory cortex (Piriform/Uncus) is in the **Temporal Lobe**. Seizures here cause olfactory hallucinations."
        }
    ],
    flashcards: [
        { "front": "Taste Anterior 2/3 tongue?", "back": "CN VII (Chorda Tympani)", "tag": "Neuro" },
        { "front": "Taste Posterior 1/3 tongue?", "back": "CN IX (Glossopharyngeal)", "tag": "Neuro" },
        { "front": "Taste Epiglottis?", "back": "CN X (Vagus)", "tag": "Neuro" },
        { "front": "Diagnosis: Anosmia + No Puberty?", "back": "Kallmann Syndrome", "tag": "Neuro" },
        { "front": "Early sign of Parkinson's/Alzheimer's?", "back": "Anosmia/Hyposmia", "tag": "Neuro" },
        { "front": "Foster Kennedy Triad?", "back": "Ipsilateral Anosmia, Ipsilateral Optic Atrophy, Contralateral Papilledema", "tag": "Neuro" },
        { "front": "Olfactory Hallucinations (Uncinate Fits) location?", "back": "Temporal Lobe (Uncus) Seizure", "tag": "Neuro" },
        { "front": "Does Olfaction go to Thalamus first?", "back": "No (Direct to Cortex)", "tag": "Neuro" },
        { "front": "Primary Olfactory Cortex location?", "back": "Piriform Cortex (Temporal Lobe)", "tag": "Neuro" },
        { "front": "Salty Taste Mechanism?", "back": "Na+ Channel", "tag": "Neuro" }
    ],
    mindmap: `
## Chemical Senses
### Olfaction (CN I)
*   **Path**: Epithelium -> Bulb -> Tract -> Piriform Cortex (No Thalamus).
*   **Pathology**:
    *   *Kallmann*: Anosmia + Hypogonadism.
    *   *Foster-Kennedy*: Tumor. Anosmia + Optic Atrophy + Papilledema.
    *   *Neurodegen*: Parkinson's/Alzheimer's Early sign.
### Gustation (Taste)
*   **Anterior 2/3**: CN VII.
*   **Posterior 1/3**: CN IX.
*   **Epiglottis**: CN X.
*   **Path**: Solitary Nucleus (NTS) -> VPM (Thalamus) -> Insula.
`
};

if (typeof window !== 'undefined') {
    window.L24_CONTENT = L24_CONTENT;
}
