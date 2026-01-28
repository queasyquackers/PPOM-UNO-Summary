export const L41_CONTENT = {
    id: "l41",
    summary: `
# Lecture 41: From Myelopathy to Myopathy

**Lecturer:** A. Leder, D.O.
**Session:** Lecture 41

## 1. Localization Approach
* **Myelopathy (Spinal Cord)**:** UMN signs below, Sensory level, Bowel/Bladder.
* **Anterior Horn Cell**:** LMN signs (Weakness, Atrophy, Fasciculations). **Sensory SPARED**.
* **Radiculopathy (Root)**:** Radiating pain, Dermatomal sensory loss.
* **Plexopathy**:** Multiple nerves/roots involved. Painful (e.g., Parsonage-Turner).
* **Peripheral Neuropathy**:** Stocking-glove sensory loss, Distal weakness.
* **NMJ**:** Fatigable weakness, Diplopia/Ptosis. **Sensory SPARED**.
* **Myopathy**:** Proximal muscle weakness. **Sensory SPARED**.

## 2. Anterior Horn Cell Disorders
* **ALS (Amyotrophic Lateral Sclerosis)**:**
    *   **UMN + LMN Signs** in same segment.
    *   Asymmetric limb weakness, Bulbar signs (Dysarthria/Dysphagia).
    *   **Sensory Spared**.
* **Polio & West Nile Virus**:**
    *   Acute, **Asymmetric** flaccid paralysis (LMN).
    *   Fever/Meningeal signs.
* **Spinal Muscular Atrophy (SMA)**:**
    *   Genetic (SMN1). **Symmetric** LMN weakness.

## 3. Peripheral Nerve Disorders
* **Guillain-Barré Syndrome (AIDP)**:**
    *   Acute **Ascending** Paralysis. Post-infectious (*Campylobacter*, Zika).
    * **  *LP**:* **Albuminocytologic Dissociation** (High Protein, Normal Cells).
    * **  *Tx**:* IVIG or Plasma Exchange. **NO Steroids**.
*   **CIDP (Chronic Inflammatory Demyelinating Polyneuropathy):**
    *   Chronic (>8 weeks). "Chronic GBS".
    * **  *Tx**:* **Steroids**, IVIG.
* **Leprosy**:** Hansen's Disease. Mutilating neuropathy (Armadillos).

## 4. Neuromuscular Junction (NMJ)
* **Myasthenia Gravis (MG)**:**
    *   **Post-synaptic** ACh Receptor Antibodies.
    * **  *Clinical**:* Ptosis, Diplopia, Bulbar weakness. **Fatigue** (Worse at end of day).
    * **  *Association**:* **Thymoma**.
* **Lambert-Eaton Myasthenic Syndrome (LEMS)**:**
    *   **Pre-synaptic** Voltage-Gated Calcium Channel Antibodies.
    * **  *Clinical**:* Proximal leg weakness. **Facilitation** (Strength IMPROVES with use). Dry mouth.
    * **  *Association**:* **Small Cell Lung Cancer**.
* **Botulism**:**
    *   Toxin blocks ACh release (SNARE proteins).
    *   **Descending** Paralysis. Pupils dilated/fixed. Honey (infants).

## 5. Myopathies
* **Polymyositis/Dermatomyositis**:**
    *   **Proximal** symmetric weakness (difficulty rising from chair).
    *   Pain is *uncommon*.
    *   Elevated CK.

`,
    pearls: [
        {
            title: "UMN vs LMN Signs",
            content: "**UMN:** Spasticity, Hyperreflexia, Babinski (+), No atrophy.\\n**LMN:** Flaccidity, Hyporeflexia, Fasciculations, Atrophy."
        },
        {
            title: "ALS Hallmark",
            content: "Presence of **UMN** and **LMN** signs in the **same** limb/segment. (e.g., Atrophied muscle has a brisk reflex). Sensory is **Intact**."
        },
        {
            title: "GBS vs CIDP Treatment",
            content: "Both get IVIG/PLEX.\\n**GBS:** Steroids do **NOT** work.\\n**CIDP:** Steroids **DO** work."
        },
        {
            title: "MG vs LEMS",
            content: "**MG (Eyes):** Post-synaptic. Worse with use. Thymoma.\\n**LEMS (Legs):** Pre-synaptic (Ca channels). BETTER with use. Small Cell Ca."
        },
        {
            title: "Albuminocytologic Dissociation",
            content: "High Protein but Normal WBCs in CSF. Classic finding in **Guillain-Barré Syndrome**."
        }
    ],
    questions: [
        {
            question: "A 35-year-old male presents with ascending weakness starting in his legs and moving up. Reflexes are absent. Two weeks ago he had a diarrheal illness. CSF shows protein of 150 (High) and WBC of 2 (Normal). What is the diagnosis?",
            options: [
                "Multiple Sclerosis",
                "Guillain-Barré Syndrome",
                "Myasthenia Gravis",
                "ALS",
                "Polio"
            ],
            correctAnswer: 1,
            rationale: "**GBS** presents with acute ascending paralysis and areflexia after an infection (*Campylobacter*). CSF shows **Albuminocytologic Dissociation**."
        },
        {
            question: "Which of the following findings is classic for Amyotrophic Lateral Sclerosis (ALS)?",
            options: [
                "Pure sensory loss in a stocking-glove distribution",
                "Symmetric proximal muscle weakness with pain",
                "Combination of UMN and LMN signs with sensory sparing",
                "Diplopia and ptosis worsening at night",
                "Ascending paralysis with bladder dysfunction"
            ],
            correctAnswer: 2,
            rationale: "**ALS** affects Anterior Horn Cells (LMN) and Corticospinal Tracts (UMN). The hallmark is mixed UMN/LMN signs. Sensation is typically preserved."
        },
        {
            question: "A patient with suspected Myasthenia Gravis is tested. Which antibody is most specific for this condition?",
            options: [
                "Anti-Voltage Gated Calcium Channel",
                "Anti-Acetylcholine Receptor (AChR)",
                "Anti-Jo-1",
                "Anti-GM1",
                "Anti-Hu"
            ],
            correctAnswer: 1,
            rationale: "**AChR antibodies** are pathogenic in Myasthenia Gravis (Post-synaptic). Calcium channel antibodies are for Lambert-Eaton."
        },
        {
            question: "Lambert-Eaton Myasthenic Syndrome is most commonly associated with which underlying malignancy?",
            options: [
                "Thymoma",
                "Small Cell Lung Cancer",
                "Renal Cell Carcinoma",
                "Lymphoma",
                "Melanoma"
            ],
            correctAnswer: 1,
            rationale: "**Small Cell Lung Cancer** is found in ~50% of patients with LEMS. (Thymoma is associated with Myasthenia Gravis)."
        },
        {
            question: "Which feature distinguishes Polio from ALS?",
            options: [
                "Polio causes LMN signs only; ALS causes UMN & LMN signs.",
                "Polio is progressive; ALS resolves spontaneously.",
                "Polio affects sensation; ALS spares sensation.",
                "Polio causes spasticity; ALS causes flaccidity.",
                "Polio is autoimmune; ALS is viral."
            ],
            correctAnswer: 0,
            rationale: "**Polio** destroys Anterior Horn Cells (LMN only) → Flaccid paralysis. **ALS** destroys AHCs (LMN) + CSTs (UMN) → Mixed Spastic/Flaccid."
        }
    ],
    flashcards: [
        {
            front: "ALS Finding",
            back: "Mixed UMN + LMN Signs",
            tag: "Neurology"
        },
        {
            front: "GBS CSF Finding",
            back: "Albuminocytologic Dissociation (High Protein, Normal Cells)",
            tag: "Neurology"
        },
        {
            front: "Myasthenia Gravis Mechanism",
            back: "Antibodies to Post-synaptic ACh Receptors",
            tag: "Neurology"
        },
        {
            front: "Lambert-Eaton Mechanism",
            back: "Antibodies to Pre-synaptic Voltage-Gated Calcium Channels",
            tag: "Neurology"
        },
        {
            front: "Lambert-Eaton Association",
            back: "Small Cell Lung Cancer",
            tag: "Neurology"
        },
        {
            front: "Myasthenia Gravis Association",
            back: "Thymoma",
            tag: "Neurology"
        },
        {
            front: "Botulism Presentation",
            back: "Descending Paralysis + Dilated Pupils",
            tag: "Neurology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Neurology > Neuromuscular Junction Disorders",
        alternatives: [
            { resource: "FirstAid", chapter: "Neurology > Neuromuscular" },
            { resource: "Pathoma", chapter: "Musculoskeletal > Neuromuscular Junction" },
            { resource: "SketchyPath", chapter: "Neurology > Neuromuscular & Peripheral Nerve" }
        ]
    },
    mindmap: `
## Localization

### Anterior Horn
* **ALS**: UMN + LMN. Sensory Spared.
* **Polio**: LMN only. Asymmetric. Virus.
* **SMA**: LMN only. Symmetric. Genetic.

### Nerve
* **GBS**: Ascending. High Protein. Post-viral. No Steroids.
* **CIDP**: Chronic. Steroids OK.
* **Leprosy**: Mutilating.

### NMJ
* **Myasthenia Gravis**: Post-synaptic. Worse w/ use. Eyes. Thymoma.
* **Lambert-Eaton**: Pre-synaptic (Ca). Better w/ use. Legs. SCLC.
* **Botulism**: Toxin. Descending. Honey.

### Muscle
* **Myopathy**: Proximal Weakness. No sensory loss.
\`
};

if (typeof window !== 'undefined') {
    window.L41_CONTENT = L41_CONTENT;
}
