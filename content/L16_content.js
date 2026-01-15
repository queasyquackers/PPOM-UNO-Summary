export const L16_CONTENT = {
    id: "l16",
    summary: `
# Lecture 16: Visual System

**Lecturer:** G. Otazu, Ph.D.
**Session:** Lecture 16

## 1. Eye Functional Anatomy (Slide 4-10)

The eye focuses light onto the retina to transduce it into neural signals.
*   **Refraction:** Most focusing power comes from the **Cornea** (air-water interface), not the lens.
*   **Accommodation:** The **Lens** changes shape to focus near objects.
    *   **Near Vision (Reflex):** Ciliary muscle **Contracts** $\\to$ Zonules Relax $\\to$ Lens becomes **Rounder**. (+ Pupil constriction + Convergence).
    *   **Far Vision:** Ciliary muscle Relaxes $\\to$ Zonules Tighten $\\to$ Lens flattens.
*   **Aqueous Humor:** Produced by Ciliary Body. Drains via **Canal of Schlemm**. Blockage = **Glaucoma**.

### Retina Organization
*   **Fovea:** Center of Macula. **All Cones**. Highest acuity. No blood vessels/layers in light path.
*   **Periphery:** Mostly **Rods**. High sensitivity (low light), low acuity.
*   **Blind Spot (Optic Disc):** Where optic nerve exits. No photoreceptors.

## 2. Visual Pathway (Slide 26-30)

1.  **Retina:** Light hits Photoreceptors $\\to$ Bipolar Cells $\\to$ Ganglion Cells.
2.  **Optic Nerve (CN II):** Ganglion cell axons.
3.  **Optic Chiasm:** **Nasal** fibers (temporal field) **CROSS**. Temporal fibers (nasal field) stay ipsilateral.
4.  **Optic Tract:** Contains ipsilateral Temporal fibers + contralateral Nasal fibers. Projects to **LGN**.
5.  **Lateral Geniculate Nucleus (LGN):** Thalamic relay.
    *   **Magno** (M) layers: Motion/Depth.
    *   **Parvo** (P) layers: Color/Form.
6.  **Geniculocalcarine Tract (Optic Radiations):**
    *   **Meyer's Loop (Temporal Lobe):** Loops around lateral ventricle. Carries **Superior** Visual Field ("Pie in the Sky").
    *   **Dorsal/Parietal Radiations:** Carries **Inferior** Visual Field ("Pie on the Floor").
7.  **Primary Visual Cortex (V1):** Occipital Lobe. Upper bank (Cuneus) = Inferior Field. Lower bank (Lingual) = Superior Field.

## 3. Visual Field Lesions (Slide 26-29, 32)
*   **Monocular Blindness:** Lesion of **Optic Nerve**.
*   **Bitemporal Hemianopsia:** Lesion of **Optic Chiasm**.
    *   *Cause:* **Pituitary Adenoma** compressing chiasm centrally.
    *   *Effect:* Loss of peripheral vision ("Tunnel Vision").
*   **Homonymous Hemianopsia:** Lesion of **Optic Tract** or **PCA Stroke**.
    *   *Effect:* Loss of same field in both eyes (e.g., Left field perception lost in both eyes).
    *   *Macular Sparing:* PCA strokes often spare the fovea (supplied by MCA collaterals).
*   **Quadrantanopsia:**
    *   **Meyer's Loop (Temporal):** "Pie in the Sky" (Contralateral Superior Quadrant).
    *   **Parietal Radiations:** "Pie on the Floor" (Contralateral Inferior Quadrant).

:::correlate
**Papilledema (Slide 34)**
*   **Pathophysiology:** Increased Intracranial Pressure (ICP) transmitted through the subarachnoid space surrounding the Optic Nerve.
*   **Sign:** Swelling of the Optic Disc visible on fundoscopy. Blurred margins.
*   **Context:** Brain tumor, Meningitis, Pseudotumor Cerebri.
:::

:::correlate
**Hemispatial Neglect (Slide 43-44)**
*   **Lesion:** **Right Parietal Lobe** (Non-dominant hemisphere).
*   **Presentation:** Patient ignores the **Left** side of the world/body.
    *   Starts eating from only right side of plate.
    *   Shaves only right face.
    *   Draws only right half of clock.
*   **Note:** This is an *Attention* deficit, not a visual one.
:::

:::mnemonic
**Visual Field Defects**
*   **Tem**poral Loop = **Pie in the Sky** (Temporal lobe lesion $\\to$ Superior field defect).
*   **Parietal** Path = **Pie on the Floor** (Parietal lobe lesion $\\to$ Inferior field defect).
:::
`,
    pearls: [
        {
            title: "Pituitary Adenoma Deficit",
            content: "Compresses Optic Chiasm $\\to$ **Bitemporal Hemianopsia** (Tunnel Vision)."
        },
        {
            title: "Meyer's Loop Deficit",
            content: "Temporal Lobe lesion $\\to$ **Superior** Homonymous Quadrantanopia ('Pie in the Sky')."
        },
        {
            title: "Parietal Radiation Deficit",
            content: "Parietal Lobe lesion $\\to$ **Inferior** Homonymous Quadrantanopia ('Pie on the Floor')."
        },
        {
            title: "Macular Sparing",
            content: "Occipital Cortex (PCA) infarcts often spare the Macula because it has dual blood supply (MCA collaterals)."
        },
        {
            title: "Right Parietal Lobe Lesion",
            content: "Causes **Left Hemispatial Neglect**. The Right parietal lobe attends to *both* sides, while the Left only attends to the Right. Loss of Right = Loss of Left attention."
        }
    ],
    questions: [
        {
            question: "A patient presents with 'tunnel vision', bumping into objects on their periphery. MRI reveals a mass compressing the optic chiasm. What is the most likely diagnosis?",
            options: [
                "Right Optic Nerve Compression",
                "Pituitary Adenoma",
                "Temporal Lobe Tumor",
                "Parietal Lobe Tumor",
                "Occipital Lobe Stroke"
            ],
            answer: 1,
            explanation: "A **Pituitary Adenoma** compresses the specialized crossing fibers in the Optic Chiasm, causing **Bitemporal Hemianopsia** (Tunnel Vision)."
        },
        {
            question: "A patient cannot see the upper left quadrant of their visual field ('Pie in the Sky'). Where is the lesion located?",
            options: [
                "Right Temporal Lobe (Meyer's Loop)",
                "Left Temporal Lobe (Meyer's Loop)",
                "Right Parietal Lobe",
                "Left Parietal Lobe",
                "Right Occipital Cortex"
            ],
            answer: 0,
            explanation: "A **Left** upper field defect maps to the **Right** brain (Contralateral). 'In the Sky' (Superior) implies the inferior fibers (**Meyer's Loop** in Temporal Lobe). So, **Right Temporal Lobe**."
        },
        {
            question: "Accommodation for near vision involves which action of the ciliary muscle?",
            options: [
                "Relaxation",
                "Contraction",
                "Hyperpolarization",
                "Atrophy",
                "No change"
            ],
            answer: 1,
            explanation: "The ciliary muscle **Contracts**, loosening the zonules, allowing the lens to spring into a rounder shape for near focus."
        },
        {
            question: "Papilledema is a clinical sign indicative of:",
            options: [
                "Retinal Detachment",
                "Glaucoma",
                "Increased Intracranial Pressure",
                "Cataracts",
                "Macular Degeneration"
            ],
            answer: 2,
            explanation: "**Papilledema** (swollen optic disc) is caused by transmitted **Increased Intracranial Pressure (ICP)**."
        },
        {
            question: "A patient with a Right Parietal Lobe stroke only eats food on the right side of their plate and ignores the left side. This is called:",
            options: [
                "Homonymous Hemianopsia",
                "Agnosia",
                "Hemispatial Neglect",
                "Apraxia",
                "Prosopagnosia"
            ],
            answer: 2,
            explanation: "**Hemispatial Neglect** is an attention deficit, classically due to a non-dominant (Right) Parietal Lobe lesion."
        }
    ],
    flashcards: [
        {
            front: "Visual Deficit: Optic Chiasm Lesion",
            back: "Bitemporal Hemianopsia",
            tag: "Neurology"
        },
        {
            front: "Visual Deficit: Right Optic Tract Lesion",
            back: "Left Homonymous Hemianopsia",
            tag: "Neurology"
        },
        {
            front: "Visual Deficit: Meyer's Loop (Temporal) Lesion",
            back: "Contralateral Superior Quadrantanopia ('Pie in the Sky')",
            tag: "Neurology"
        },
        {
            front: "Visual Deficit: Parietal Radiation Lesion",
            back: "Contralateral Inferior Quadrantanopia ('Pie on the Floor')",
            tag: "Neurology"
        },
        {
            front: "Lesion causing Left Hemispatial Neglect",
            back: "Right Parietal Lobe",
            tag: "Neurology"
        },
        {
            front: "Sign of Increased ICP on Eye Exam",
            back: "Papilledema",
            tag: "Pathology"
        },
        {
            front: "Function of Ciliary Muscle Contraction",
            back: "Accommodation (Near Vision)",
            tag: "Physiology"
        },
        {
            front: "Area of Retina with highest acuity",
            back: "Fovea (Macula)",
            tag: "Physiology"
        },
        {
            front: "Blood Supply to Visual Cortex",
            back: "Posterior Cerebral Artery (PCA)",
            tag: "Neuroanatomy"
        },
        {
            front: "What is spared in PCA stroke visual field defect?",
            back: "Macula (Macular Sparing)",
            tag: "Pathology"
        }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > The Eye > Visual Fields",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Ophthalmology" },
            { resource: "Pathoma", chapter: "CNS" }
        ]
    },
    mindmap: `
## Visual System

### Anatomy
*   **Anterior**: Cornea, Lens (Accommodation), Ciliary Body
*   **Retina**: Fovea (Cones), Periphery (Rods), Optic Disc (Blind Spot)

### Visual Pathway
*   Retina -> Optic Nerve -> **Chiasm** (Cross) -> Tract -> **LGN** -> Radiations -> **V1**

### Lesions
*   **Chiasm**: Bitemporal Hemianopsia (Pituitary Tumor)
*   **Tract**: Homonymous Hemianopsia
*   **Temporal Loop**: Superior Quadrant (Sky)
*   **Parietal Loop**: Inferior Quadrant (Floor)
*   **Parietal Lobe**: Hemispatial Neglect (Right lesion)
\`
};
