export const L22_CONTENT = {
    id: "l22",
    summary: `
# Lecture 22: Ganglionic and Neuromuscular Blockers

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 22

## 1. Ganglionic Blockers (Slide 7-9)
*   **Target:** Neuronal Nicotinic Receptors (**Nn**) at autonomic ganglia.
*   **Mecamylamine:**
    *   *Mechanism:* Blocks output of **BOTH** Sympathetic and Parasympathetic systems.
    *   *Effect:* Predictable based on **Dominant Tone**:
        *   **Arterioles (Symp dominant):** Vasodilation → Hypotension (Orthostatic).
        *   **Heart (Para dominant):** Tachycardia.
        *   **Gut/Bladder (Para dominant):** Constipation, Urinary Retention.
        *   **Eye (Para dominant):** Mydriasis, Cycloplegia.

## 2. Neuromuscular Blockers (NMBAs) (Slide 19-23)
Target **Nicotinic (Nm)** receptors at the Neuromuscular Junction (NMJ).

### Depolarizing NMBA
*   **Succinylcholine (SCh):**
    *   *Structure:* Two ACh molecules.
    *   *Mechanism:* Agonist. Causes sustained depolarization → Fasciculations → Flaccid paralysis (Phase I). Desensitization (Phase II).
    *   *Metabolism:* **Plasma Cholinesterase** (Pseudocholinesterase).
    *   *Duration:* Very short (<8 min). **Prolonged in patients with genetic deficiency.**
    *   *Adverse Effects:*
        *   **Malignant Hyperthermia (MH):** Triggered by SCh + Inhaled Anesthetics (e.g., Halothane). Muscle rigidity, hyperthermia. Treat with **Dantrolene**.
        *   **Hyperkalemia:** Life-threatening in **Burn/Trauma** patients (due to receptor upregulation/rhabdomyolysis).

### Non-Depolarizing NMBAs (Competitive Antagonists)
*   **Isoquinolines:**
    *   **Atracurium:** Degraded by **Hofmann Elimination** (spontaneous, no organ weakness). *Side Effect:* **Histamine release** (Hypotension) + *Laudanosine* accumulation (Seizures).
    *   **Cisatracurium:** Hofmann elimination. No histamine. Safe for organ failure.
*   **Aminosteroids:**
    *   **Rocuronium:** Fast onset (can replace SCh for intubation). Biliary excretion.
    *   **Vecuronium:** Renal/Biliary excretion.

## 3. Reversal (Slide 27)
*   **Cholinesterase Inhibitors (Neostigmine):** Increase ACh to compete with NMBAs. *Always give with Atropine* to prevent muscarinic bradycardia.
*   **Sugammadex:** Specialized chelator. Encapsulates **Rocuronium/Vecuronium** for rapid reversal. No muscarinic side effects.

## 4. Clinical Correlates

:::correlate
**Malignant Hyperthermia**
*   **Trigger:** Succinylcholine or Volatile Anesthetics.
*   **Genetic:** Mutation in **Ryanodine Receptor (RyR1)**.
*   **Pathology:** Uncontrolled Ca2+ release from SR → Rigidity → Heat/Acidosis.
*   **Cure:** **Dantrolene** (Blocks RyR1).
:::

:::correlate
**Hofmann Elimination**
*   **Drug:** Atracurium / Cisatracurium.
*   **Concept:** Breaks down spontaneously in plasma based on pH and temperature.
*   **Pearl:** Ideal for patients with **multisystem organ failure** (Kidney/Liver don't matter).
:::
`,
    pearls: [
        {
            title: "Succinylcholine & Potassium",
            content: "Causes K+ efflux. **Contraindicated** in Burns, Trauma, Crush injuries, and Denervation (risk of Cardiac Arrest)."
        },
        {
            title: "Dantrolene Mechanism",
            content: "Blocks **Ryanodine Receptors (RyR1)** on Sarcoplasmic Reticulum. Treats Malignant Hyperthermia."
        },
        {
            title: "Hofmann Elimination",
            content: "**Atracurium/Cisatracurium**. Spontaneous degradation. Safe in renal/hepatic failure."
        },
        {
            title: "Dominant Tone Concept",
            content: "Ganglionic blockers remove the dominant tone. **Vessels = Symp** (Block → Hypotension). **Heart = Para** (Block → Tachycardia)."
        },
        {
            title: "Sugammadex",
            content: "Encapsulates **Rocuronium/Vecuronium**. Reversal without cholinergic side effects."
        }
    ],
    questions: [
        {
            question: "A patient undergoes surgery and develops muscle rigidity, tachycardia, and a temperature of 105°F shortly after induction. Which drug is the most likely trigger?",
            options: [
                "Rocuronium",
                "Succinylcholine",
                "Cisatracurium",
                "Propofol",
                "Fentanyl"
            ],
            correctAnswer: 1,
            rationale: "**Succinylcholine** is a classic trigger for **Malignant Hyperthermia** (along with volatile anesthetics)."
        },
        {
            question: "Which neuromuscular blocker undergoes spontaneous 'Hofmann elimination' and is therefore safe in patients with renal and hepatic failure?",
            options: [
                "Pancuronium",
                "Rocuronium",
                "Vecuronium",
                "Cisatracurium",
                "Succinylcholine"
            ],
            correctAnswer: 3,
            rationale: "**Cisatracurium** (and Atracurium) degrades spontaneously in plasma (Hofmann elimination), independent of organ function."
        },
        {
            question: "What is the mechanism of action of Sugammadex?",
            options: [
                "Inhibits Acetylcholinesterase",
                "Blocks Ryanodine Receptors",
                "Chelates/Encapsulates Aminosteroid NMBAs",
                "Stimulates Nicotinic Receptors",
                "Blocks Muscarinic Receptors"
            ],
            correctAnswer: 2,
            rationale: "**Sugammadex** forms a complex with aminosteroids (**Rocuronium/Vecuronium**) to reverse blockade rapidly."
        },
        {
            question: "A patient with severe burns requires intubation. Which neuromuscular blocker is CONTRAINDICATED due to the risk of hyperkalemia?",
            options: [
                "Rocuronium",
                "Cisatracurium",
                "Vecuronium",
                "Atracurium",
                "Succinylcholine"
            ],
            correctAnswer: 4,
            rationale: "**Succinylcholine** causes depolarization and K+ efflux. In burn patients (upregulated receptors), this can cause massive hyperkalemia and cardiac arrest."
        },
        {
            question: "The use of Neostigmine to reverse neuromuscular blockade can cause bradycardia. Which drug is co-administered to prevent this?",
            options: [
                "Pralidoxime",
                "Physostigmine",
                "Atropine",
                "Epinephrine",
                "Dantrolene"
            ],
            correctAnswer: 2,
            rationale: "**Neostigmine** increases ACh everywhere (Muscarinic + Nicotinic). **Atropine** is given to block the Muscarinic effects (Bradycardia) while allowing Nicotinic effects (Muscle strength)."
        }
    ],
    flashcards: [
        {
            front: "Contraindication for Succinylcholine",
            back: "Burns, Trauma, Hyperkalemia, Hx of Malignant Hyperthermia",
            tag: "Pharmacology"
        },
        {
            front: "Treatment for Malignant Hyperthermia",
            back: "Dantrolene",
            tag: "Pharmacology"
        },
        {
            front: "NMBA metabolized by Plasma Cholinesterase",
            back: "Succinylcholine",
            tag: "Pharmacology"
        },
        {
            front: "NMBA eliminated by Hofmann Elimination",
            back: "Cisatracurium / Atracurium",
            tag: "Pharmacology"
        },
        {
            front: "Depolarizing Neuromuscular Blocker",
            back: "Succinylcholine",
            tag: "Pharmacology"
        },
        {
            front: "Dominant Autonomic Tone: Heart",
            back: "Parasympathetic (Vagal)",
            tag: "Physiology"
        },
        {
            front: "Dominant Autonomic Tone: Blood Vessels",
            back: "Sympathetic",
            tag: "Physiology"
        },
        {
            front: "Sugammadex reverses which drugs?",
            back: "Rocuronium and Vecuronium",
            tag: "Pharmacology"
        },
        {
            front: "Why give Atropine with Neostigmine reversal?",
            back: "To prevent Muscarinic side effects (Bradycardia)",
            tag: "Pharmacology"
        },
        {
            front: "Ganglion Blocker (Drug Name)",
            back: "Mecamylamine",
            tag: "Pharmacology"
        }
    ],
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Parasympathetics > Neuromuscular Blockers",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" },
            { resource: "BandB", chapter: "Pharmacology > ANS > NMBAs" }
        ]
    },
    mindmap: `
## Neuromuscular & Ganglionic Blockers

### Ganglionic Blockers (Nn)
*   **Mecamylamine**: Blocks ALL Autonomic ganglia
*   **Effect**: Opposite of Dominant Tone
    *   Heart (Para) → Tachycardia
    *   Vessels (Symp) → Hypotension

### Neuromuscular Blockers (Nm)
*   **Depolarizing**: **Succinylcholine**
    *   Phase 1 (Fasciculations), Phase 2 (Desensitization)
    *   Degraded by Plasma Cholinesterase
    *   **Risks**: Hyperkalemia (Burns), Malignant Hyperthermia

*   **Non-Depolarizing (Competitive)**
    *   **Isoquinolines**: Atracurium/Cisatracurium (Hofmann Elimination)
    *   **Aminosteroids**: Rocuronium/Vecuronium (Liver/Kidney)

### Reversal
*   **Neostigmine** (+ Atropine)
*   **Sugammadex** (for Rocuronium)

### Malignant Hyperthermia
*   **Trigger**: SCh + Gas
*   **Mech**: RyR1 Ca2+ release
*   **Rx**: Dantrolene
\`
};

if (typeof window !== 'undefined') {
    window.L22_CONTENT = L22_CONTENT;
}
