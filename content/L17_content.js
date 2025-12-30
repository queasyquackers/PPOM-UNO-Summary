const L17_CONTENT = {
    id: 'l17',
    title: 'Lecture #17: Auditory System',
    lecturer: 'G. Otazu, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #17',
    prev: 'l16',
    next: 'l18',
    pdf: 'pdfs/Lecture # 17. G. Otazu, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #17_ Anatomy and Physiology of the Auditory System; Presenter_ G. Otazu, PhD.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Hearing'
    },
    summary: `
# Lecture #17: Auditory System

**Lecturer:** Gonzalo Otazu, Ph.D.
**Session:** Neuroanatomy

## 1. Anatomy of the Ear
### Middle Ear
*   **Ossicles:** Malleus, Incus, Stapes (connects to Oval Window).
*   **Function:** Impedance matching (Air -> Fluid).
*   **Reflex:** Stapedius (CN VII) & Tensor Tympani (CN V3) dampen loud sounds.

### Inner Ear (Cochlea)
*   **Scale Media:** High K+ (Endolymph).
*   **Organ of Corti:** Hair cells (Receptors).
    *   *Inner Hair Cells:* Sensory transduction.
    *   *Outer Hair Cells:* Cochlear amplification (Otoacoustic emissions).
*   **Tonotopy:**
    *   *Base:* High frequency (Stiff/Narrow).
    *   *Apex:* Low frequency (Floppy/Wide).

## 2. Auditory Pathway
*   **Cochlear Nerve (CN VIII)** -> **Cochlear Nucleus** (Medulla) -> **Superior Olive** (Pons - Localization) -> **Inferior Colliculus** (Midbrain) -> **MGN** (Thalamus) -> **Auditory Cortex** (Temporal).
*   *Mnemonic:* **SLIM** (Superior Olive, Lateral Lemniscus, Inferior Colliculus, MGN).

## 3. Hearing Loss Types
:::correlate
**Conductive Hearing Loss**
*   **Cause:** Obstruction (Wax), Otitis Media, Otosclerosis.
*   **Rinne Test:** Bone > Air (Abnormal).
*   **Weber Test:** Localizes to **Affected** ear.
:::

:::correlate
**Sensorineural Hearing Loss**
*   **Cause:** Presbycusis, Noise, Drugs (Aminoglycosides), Acoustic Neuroma.
*   **Rinne Test:** Air > Bone (Normal positive).
*   **Weber Test:** Localizes to **Unaffected** ear.
:::

## 4. Specific Syndromes (Slides 33-37)
:::correlate
**Usher Syndrome**
*   **Presentation:** Congenital Deafness + Retinitis Pigmentosa (Blindness).
*   **Genetics:** Mutation in stereocilia proteins.
:::

:::correlate
**EAST Syndrome**
*   **Acronym:** Epilepsy, Ataxia, Sensorineural deafness, Tubulopathy.
*   **Pathology:** KCNJ10 mutation (K+ channel defect) - cannot maintain Endolymph potential.
:::

:::correlate
**Vestibular Schwannoma (Acoustic Neuroma)**
*   **Tumor:** Schwann cells of CN VIII.
*   **Location:** Cerebellopontine Angle (CPA).
*   **Symptoms:** Unilateral Hearing Loss, Tinnitus, Vertigo. May involve CN VII (Facial palsy) or CN V (Facial numbness).
:::
`,
    questions: [
        {
            question: "**1. A patient presents with hearing loss in the right ear. Weber test localizes to the Left ear. Rinne test shows Air > Bone bilaterally. What is the diagnosis?**",
            options: [
                "Right Conductive Hearing Loss",
                "Right Sensorineural Hearing Loss",
                "Left Conductive Hearing Loss",
                "Left Sensorineural Hearing Loss",
                "Normal Hearing"
            ],
            correctAnswer: 1,
            rationale: "Weber localizing to the **Unaffected** (Left) ear suggests **Sensorineural** loss in the Right ear. A 'Normal' Rinne (Air > Bone) confirms it is not conductive."
        },
        {
            question: "**2. High frequency sounds are detected at which part of the cochlea?**",
            options: [
                "Apex",
                "Base",
                "Helicotrema",
                "Saccule",
                "Utricle"
            ],
            correctAnswer: 1,
            rationale: "The **Base** of the basilar membrane is stiff and narrow, vibrating best at **High Frequencies**."
        },
        {
            question: "**3. Which structure in the auditory pathway is responsible for sound localization?**",
            options: [
                "Cochlear Nucleus",
                "Superior Olivary Complex",
                "Inferior Colliculus",
                "Medial Geniculate Nucleus",
                "Auditory Cortex"
            ],
            correctAnswer: 1,
            rationale: "The **Superior Olive** (Pons) receives bilateral input to compare time and intensity differences for sound localization."
        },
        {
            question: "**4. A patient has Epilepsy, Ataxia, and Sensorineural Deafness. This 'EAST Syndrome' is caused by a defect in:**",
            options: [
                "Sodium Channels",
                "Potassium Channels",
                "Calcium Channels",
                "Chloride Channels",
                "Gap Junctions"
            ],
            correctAnswer: 1,
            rationale: "EAST syndrome is caused by a mutation in KCNJ10, a **Potassium Channel** (Kir4.1) critical for maintaining high K+ in the endolymph."
        },
        {
            question: "**5. Which thalamic nucleus relays auditory information to the cortex?**",
            options: [
                "VPL",
                "VPM",
                "LGN",
                "MGN",
                "VL"
            ],
            correctAnswer: 3,
            rationale: "**MGN** (Medial Geniculate Nucleus) is the Auditory relay. (LGN is for Light/Vision)."
        }
    ],
    flashcards: [
        { "front": "Weber Test: Conductive Loss?", "back": "Localizes to Affected Ear", "tag": "Clinical" },
        { "front": "Weber Test: Sensorineural Loss?", "back": "Localizes to Unaffected Ear", "tag": "Clinical" },
        { "front": "High frequencies detected at?", "back": "Base of Cochlea", "tag": "Physiology" },
        { "front": "Low frequencies detected at?", "back": "Apex of Cochlea", "tag": "Physiology" },
        { "front": "Thalamic relay for Hearing?", "back": "MGN", "tag": "Neuro" },
        { "front": "Function of Superior Olive?", "back": "Sound Localization", "tag": "Neuro" },
        { "front": "Usher Syndrome triad?", "back": "Deafness + Blindness (Retinitis Pigmentosa) + Vestibular", "tag": "Pathology" },
        { "front": "EAST Syndrome defect?", "back": "Potassium Channel (KCNJ10)", "tag": "Pathology" },
        { "front": "Acoustic Neuroma location?", "back": "Cerebellopontine Angle (CPA)", "tag": "Pathology" },
        { "front": "Fluid in Scala Media?", "back": "Endolymph (High K+)", "tag": "Anatomy" }
    ],
    mindmap: `
## Auditory System
### Anatomy
*   **Middle Ear**: Ossicles (Cond conductive loss)
*   **Inner Ear**: Cochlea (Sensorineural loss)
    *   *Base*: High Freq
    *   *Apex*: Low Freq
### Pathway
*   **CN VIII** -> **Cochlear Nuc** -> **Superior Olive** (Localization) -> **Lat Lemniscus** -> **Inf Colliculus** -> **MGN** -> **Cortex**
### Hearing Loss
*   **Conductive**: Weber to Bad ear, Rinne Bone > Air
*   **Sensorineural**: Weber to Good ear, Rinne Air > Bone
### Pathologies
*   **Usher**: Deaf + Blind
*   **EAST**: Sz + Ataxia + Deaf (K+ channel)
*   **Acoustic Neuroma**: CPA tumor (Hearing loss + Tinnitus + Vertigo)
`
};

if (typeof window !== 'undefined') {
    window.L17_CONTENT = L17_CONTENT;
}
