export const L2_CONTENT = {
    id: 'l2',
    title: 'Lecture #2: Overview of Neuroembryology',
    lecturer: 'K. Poole, Ph.D.',
    module: 'Neuro',
    session: 'Lecture #2',
    prev: 'l1b',
    next: 'l3',
    pdf: 'pdfs/Lecture # 2. K. Poole, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #2_ Overview of Neuroembryology Faculty_ K. Poole, Ph.D..srt',
    summary: `
# Lecture #2: Overview of Neuroembryology

**Lecturer:** K. Poole, Ph.D.
**Session:** Lecture #2
**Topic:** Neuroembryology

## 1. Early Development & Gastrulation
*   **Gastrulation (Week 3):** Formation of the three germ layers.
    *   **Ectoderm:** Nervous system, skin (epidermis).
    *   **Mesoderm:** Muscle, bone, connective tissue, notochord.
    *   **Endoderm:** Gut tube, internal organs.
*   **Notochord:** Derived from mesoderm. Induces the overlying ectoderm to thicken and become the **Neural Plate**.

## 2. Neurulation (Weeks 3-4)
*   **Process:**
    1.  **Neural Plate:** Thickening of ectoderm.
    2.  **Neural Groove:** Midline depression forms.
    3.  **Neural Folds:** Lateral edges rise and fuse.
    4.  **Neural Tube:** Fusion creates a hollow tube.
        *   Fuses in the middle (cervical region) first, then "zips" rostrally and caudally.
*   **Neuropores:** Openings at ends of the tube.
    *   **Anterior (Rostral) Neuropore:** Closes ~Day 25.
    *   **Posterior (Caudal) Neuropore:** Closes ~Day 27-28.

## 3. Neural Crest Cells
*   **Origin:** Cells at the edge of the neural folds that detatch during closure.
*   **Derivatives ("4th Germ Layer"):**
    *   DRG neurons
    *   Autonomic ganglia
    *   Schwann cells
    *   Adrenal medulla
    *   Melanocytes
    *   Craniofacial bones/cartilage

## 4. Primary & Secondary Vesicles
*   **3 Primary Vesicles (Week 4):**
    1.  **Prosencephalon** (Forebrain)
    2.  **Mesencephalon** (Midbrain)
    3.  **Rhombencephalon** (Hindbrain)
*   **5 Secondary Vesicles (Week 5):**
    *   **Prosencephalon** -> **Telencephalon** & **Diencephalon**
    *   **Mesencephalon** -> **Mesencephalon** (stays same)
    *   **Rhombencephalon** -> **Metencephalon** & **Myelencephalon**

:::mnemonic
**Brain Vesicles**
*   **Tel** (Tell) -> Cerebrum
*   **Di** (Die) -> Thalamus/Hypothalamus
*   **Mes** (Me) -> Midbrain
*   **Met** (Met) -> Pons/Cerebellum
*   **Myel** (My) -> Medulla
:::

## 5. Clinical Correlates
:::correlate
**Neural Tube Defects (NTDs)**
*   **Cause:** Failure of neuropore closure. Associated with **low Folic Acid (Vitamin B9)**.
*   **Anencephaly:** Failure of **Rostral** neuropore to close. No forebrain/calvaria. Polyhydramnios (can't swallow amniotic fluid). Incompatible with life.
*   **Spina Bifida:** Failure of **Caudal** neuropore to close.
    *   *Occulta:* Mild, tuft of hair, vertebral arch defect.
    *   *Meningocele:* Meninges herniate.
    *   *Myelomeningocele:* Meninges + Spinal Cord herniate (Severe).
:::

:::correlate
**Holoprosencephaly**
*   **Pathology:** Failure of cleavage of the Prosencephalon (Forebrain) into left/right hemispheres.
*   **Presentation:** Midline facial defects (cleft lip/palate, cyclopia in severe cases).
*   **Association:** Trisomy 13 (Patau), Sonic Hedgehog mutations.
:::
`,
    questions: [
        {
            question: "**1. Which of the following cells are derived from the Neural Crest?**",
            options: [
                "Motor neurons of the ventral horn",
                "Astrocytes of the CNS",
                "Dorsal Root Ganglion (DRG) cells",
                "Oligodendrocytes",
                "Microglia"
            ],
            correctAnswer: 2,
            rationale: "**Neural Crest cells** migrate to form the **DRGs**, autonomic ganglia, Schwann cells, and adrenal medulla. CNS glial cells (astrocytes, oligos) come from the neural tube (neuroectoderm). Microglia come from mesoderm."
        },
        {
            question: "**2. A newborn has a tuft of hair over the lumbar spine but no neurologic deficits. What is the most likely diagnosis?**",
            options: [
                "Spina Bifida Occulta",
                "Meningocele",
                "Myelomeningocele",
                "Anencephaly",
                "Rachischisis"
            ],
            correctAnswer: 0,
            rationale: "**Spina Bifida Occulta** is a defect in the vertebral arch (mesoderm) fusion, often marked by a tuft of hair or dimple. The meninges and cord remain in place."
        },
        {
            question: "**3. Which vitamin deficiency is strongly associated with Neural Tube Defects?**",
            options: [
                "Vitamin B12",
                "Vitamin C",
                "Folic Acid (B9)",
                "Vitamin D",
                "Vitamin A"
            ],
            correctAnswer: 2,
            rationale: "**Folic Acid** supplementation prior to conception and during early pregnancy significantly reduces the risk of NTDs."
        },
        {
            question: "**4. The Metencephalon gives rise to which adult structures?**",
            options: [
                "Medulla",
                "Midbrain",
                "Thalamus and Hypothalamus",
                "Pons and Cerebellum",
                "Cerebral Hemispheres"
            ],
            correctAnswer: 3,
            rationale: "The **Metencephalon** develops into the **Pons** and **Cerebellum**. The Myelencephalon becomes the Medulla."
        },
        {
            question: "**5. Which structure induces the formation of the Neural Plate from the ectoderm?**",
            options: [
                "Primitive Streak",
                "Notochord",
                "Yolk Sac",
                "Intermediate Mesoderm",
                "Neural Crest"
            ],
            correctAnswer: 1,
            rationale: "The **Notochord**, derived from mesoderm, secretes signaling molecules (e.g., Sonic Hedgehog) that induce the overlying ectoderm to differentiate into the **Neural Plate**."
        }
    ],
    flashcards: [
        { "front": "Tissue origin of CNS?", "back": "Neuroectoderm (Neural Tube)", "tag": "Embryology" },
        { "front": "Tissue origin of PNS neurons/glia?", "back": "Neural Crest", "tag": "Embryology" },
        { "front": "Structure inducing neural plate?", "back": "Notochord", "tag": "Embryology" },
        { "front": "Adult derivative of Telencephalon?", "back": "Cerebrum (Cerebral Hemispheres)", "tag": "Embryology" },
        { "front": "Adult derivative of Diencephalon?", "back": "Thalamus, Hypothalamus, Retina", "tag": "Embryology" },
        { "front": "Failure of rostral neuropore closure?", "back": "Anencephaly", "tag": "Pathology" },
        { "front": "Failure of caudal neuropore closure?", "back": "Spina Bifida", "tag": "Pathology" },
        { "front": "Vitamin to prevent NTDs?", "back": "Folic Acid (B9)", "tag": "Prevention" },
        { "front": "Closure day of Rostral Neuropore?", "back": "Day 25", "tag": "Embryology" },
        { "front": "Closure day of Caudal Neuropore?", "back": "Day 27-28", "tag": "Embryology" }
    ],
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Embryology > Nervous System Development",
        alternatives: [
             { "resource": "FirstAid", "chapter": "Neurology > Embryology" },
             { "resource": "Pathoma", "chapter": "CNS > Congenital Malformations" },
             { "resource": "Physeo", "chapter": "Anatomy > Neuroanatomy > Embryology" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L2_CONTENT = L2_CONTENT;
}
