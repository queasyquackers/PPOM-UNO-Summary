const L16_CONTENT = {
    id: 'l16',
    title: 'Lecture #16: Visual System',
    lecturer: 'G. Otazu, Ph.D.',
    module: 'Neuroanatomy',
    session: 'Lecture #16',
    prev: 'l15',
    next: 'l17',
    pdf: 'pdfs/Lecture # 16. G. Otazu, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #16_ Visual System_ Eye Functional Anatomy and Vision Pathways; Presenter_ G. Otazu, PhD.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Neurology > Vision'
    },
    summary: `
# Lecture #16: Visual System

**Lecturer:** Gonzalo Otazu, Ph.D.
**Session:** Neuroanatomy

## 1. Anatomy of the Eye (Slides 4-15)
*   **Chambers:**
    *   *Anterior/Posterior:* Filled with Aqueous Humor (Produced by Ciliary Body, Drained by Canal of Schlemm/Trabecular Meshwork).
    *   *Glaucoma:* Blockage of drainage -> Increased IOP.
*   **Retina:**
    *   **Fovea:** Highest visual acuity, only **Cones** (Color), Avascular.
    *   **Optic Disc:** Blind spot (No photoreceptors).
    *   **Photoreceptors:**
        *   *Rods:* Night vision, Black/White, Periphery.
        *   *Cones:* Color (RGB), Fovea.

## 2. Visual Pathways (Slides 26-29)
*   **Optic Nerve (CN II):** Retina to Chiasm.
*   **Optic Chiasm:** Decussation of **Nasal** fibers (Temporal field).
*   **LGN (Thalamus):** Relay center.
*   **Optic Radiations:**
    *   *Meyer's Loop (Temporal Lobe):* Superior Visual Field ("Pie in the Sky").
    *   *Dorsal Tract (Parietal Lobe):* Inferior Visual Field ("Pie on the Floor").
*   **Primary Visual Cortex (V1):** Occipital Lobe (Calcarine fissure).

## 3. Clinical Correlates
:::correlate
**Pituitary Adenoma**
*   **Mechanism:** Compresses Optic Chiasm.
*   **Deficit:** **Bitemporal Hemianopsia** (Tunnel Vision) - Loss of peripheral fields (Nasal fibers compressed).
:::

:::correlate
**Meyer's Loop Lesion**
*   **Location:** Temporal Lobe.
*   **Deficit:** **Contralateral Superior Quadrantanopia** ("Pie in the Sky").
:::

:::correlate
**Parietal Lobe Lesion (Right)**
*   **Condition:** **Hemineglect**.
*   **Presentation:** Patient ignores left side of world (e.g., clocks drawn with only right side, shaves only right face). Right parietal lobe attends to *both* sides; Left only attends to Right.
:::

:::correlate
**Macular Sparing**
*   **Scenario:** PCA Stroke affecting Occipital Lobe.
*   **Finding:** Contralateral Homonymous Hemianopsia *with sparing of the center*.
*   **Why?** Macula has dual blood supply (PCA + MCA).
:::

:::correlate
**Papilledema (Slide 34)**
*   **Cause:** Increased Intracranial Pressure (ICP).
*   **Sign:** Swelling of Optic Disc blurred margins.
:::
`,
    questions: [
        {
            question: "**1. A patient with a pituitary adenoma presents with visual field deficits. What is the classic presentation?**",
            options: [
                "Right monocular blindness",
                "Left Homonymous Hemianopsia",
                "Bitemporal Hemianopsia",
                "Binasal Hemianopsia",
                "Superior Quadrantanopia"
            ],
            correctAnswer: 2,
            rationale: "The pituitary sits directly below the **Optic Chiasm**. Compression affects the crossing **Nasal Fibers**, which carry information from the **Temporal Visual Fields**, leading to **Bitemporal Hemianopsia**."
        },
        {
            question: "**2. Damage to Meyer's Loop in the right temporal lobe would cause:**",
            options: [
                "Left Superior Quadrantanopia",
                "Right Superior Quadrantanopia",
                "Left Inferior Quadrantanopia",
                "Right Inferior Quadrantanopia",
                "Bitemporal Hemianopsia"
            ],
            correctAnswer: 0,
            rationale: "Meyer's loop carries information from the **Superior** visual field (Inferior retina) of the **Contralateral** visual hemifield. A Right temporal lesion affects the Left Visual Field -> **Left Superior Quadrantanopia** ('Pie in the Sky')."
        },
        {
            question: "**3. A patient presents ignoring the left side of their body and the left side of their plate. They draw a clock with all numbers on the right. Where is the lesion?**",
            options: [
                "Left Frontal Lobe",
                "Left Parietal Lobe",
                "Right Parietal Lobe",
                "Right Occipital Lobe",
                "Right Temporal Lobe"
            ],
            correctAnswer: 2,
            rationale: "This is **Hemineglect**. The **Right Parietal Lobe** is dominant for spatial attention (attends to both sides). A lesion here causes profound neglect of the **Left** side."
        },
        {
            question: "**4. Which structure produces Aqueous Humor?**",
            options: [
                "Trabecular Meshwork",
                "Canal of Schlemm",
                "Ciliary Body",
                "Iris",
                "Cornea"
            ],
            correctAnswer: 2,
            rationale: "Aqueous humor is secreted by the epithelium of the **Ciliary Body**."
        },
        {
            question: "**5. Which part of the retina has the highest visual acuity and contains only cones?**",
            options: [
                "Optic Disc",
                "Peripheral Retina",
                "Fovea Centralis",
                "Ora Serrata",
                "Choroid"
            ],
            correctAnswer: 2,
            rationale: "The **Fovea** contains the highest density of cones and is responsible for high-acuity color vision."
        }
    ],
    flashcards: [
        { "front": "Visual Deficit: Pituitary Adenoma?", "back": "Bitemporal Hemianopsia", "tag": "Clinical" },
        { "front": "Visual Deficit: Right Optic Nerve lesion?", "back": "Right Monocular Blindness", "tag": "Clinical" },
        { "front": "Visual Deficit: Right PCA stroke?", "back": "Left Homonymous Hemianopsia (w/ Macular Sparing)", "tag": "Clinical" },
        { "front": "Visual Deficit: Meyer's Loop Lesion?", "back": "Contralateral Superior Quadrantanopia (Pie in Sky)", "tag": "Clinical" },
        { "front": "Location of Meyer's Loop?", "back": "Temporal Lobe", "tag": "Neuro" },
        { "front": "Thalamic Relay for Vision?", "back": "Lateral Geniculate Nucleus (LGN)", "tag": "Neuro" },
        { "front": "Sign of Increased ICP on Fundoscopy?", "back": "Papilledema", "tag": "Clinical" },
        { "front": "Cause of Glaucoma?", "back": "Increased IOP (Blocked drainage)", "tag": "Pathology" },
        { "front": "Lobe responsible for Spatial Neglect?", "back": "Parietal Lobe (usually Right)", "tag": "Neuro" },
        { "front": "Photoreceptor for Night/Peripheral Vision?", "back": "Rods", "tag": "Neuro" }
    ],
    mindmap: `
## Visual System
### Eye Anatomy
*   **Anterior Chamber**: Aqueous (Glaucoma)
*   **Retina**: Fovea (Cones/Acuity), Periphery (Rods)
### Pathway
*   **Retina** -> **Optic Nerve**
*   **Chiasm**: Crossing of Nasal Fibers
*   **LGN**: Thalamus
*   **Radiations**:
    *   *Meyer's Loop* (Temporal): Superior Field
    *   *Dorsal Tract* (Parietal): Inferior Field
*   **Cortex**: Occipital (V1)
### Lesions
*   **Optic Nerve**: Monocular Blindness
*   **Chiasm**: Bitemporal Hemianopsia (Pituitary)
*   **Tract/Cortex**: Contralateral Homonymous Hemianopsia
*   **Meyer's Loop**: Pie in the Sky
*   **PCA Stroke**: Macular Sparing
`
};

if (typeof window !== 'undefined') {
    window.L16_CONTENT = L16_CONTENT;
}
