const L22_CONTENT = {
    id: 'l22',
    title: 'Lecture #22: Ganglionic and Neuromuscular Blockers',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #22',
    prev: 'l21',
    next: 'l23',
    pdf: 'pdfs/Lecture # 22. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #22_ Pharmacology_ Ganglionic and Neuromuscular Blockers Faculty_ L. Goldstein, Pharm.D..srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Pharmacology > Autonomic Drugs > Autonomic Drugs'
    },
    summary: `
# Lecture #22: Ganglionic & NM Blockers

**Lecturer:** Leslie Goldstein, Pharm.D.
**Session:** Pharmacology

## 1. Ganglionic Blockers (Nn)
*   **Drug:** **Mecamylamine**.
*   **Mechanism:** Competitive antagonism at Nicotinic (Nn) receptors in **BOTH** Sympathetic and Parasympathetic ganglia.
*   **Effect:** Removes the "Dominant Tone".
    *   *Arterioles:* Sympathetic dominate -> Vasodilation -> **Hypotension** (Postural).
    *   *Heart:* Parasympathetic dominates -> **Tachycardia**.
    *   *Gut/Bladder:* Parasympathetic dominates -> Constipation/Retention.
*   **Use:** Rarely used (Hypertension emergencies historically).

## 2. Neuromuscular Blockers (Nm)
Used for paralysis during surgery/intubation. **No Analgesia/Sedation!**

### Depolarizing (Succinylcholine)
*   **Structure:** Two ACh molecules.
*   **Mechanism:**
    *   **Phase 1:** Depolarizes membrane (fasciculations) and keeps it depolarized -> Flaccid paralysis. **No reversal**.
    *   **Phase 2:** Desensitization (resembles non-depolarizing block).
*   **Pharmacokinetics:** Rapid metabolism by **Plasma Cholinesterase** (Short duration).
*   **Adverse Effects:**
    *   **Malignant Hyperthermia:** With inhaled anesthetics.
    *   **Hyperkalemia:** Risk in burns, trauma, crush injury.
    *   **Bradycardia.**

### Non-Depolarizing (Curares)
*   **Drugs:**
    *   **Isoquinolines:** Atracurium, Cisatracurium.
    *   **Steroids:** Rocuronium, Vecuronium, Pancuronium.
*   **Mechanism:** Competitive Antagonist at Nm.
*   **Elimination:**
    *   **Cisatracurium:** **Hofmann Elimination** (Spontaneous degradation). Safe in renal/liver failure.
    *   **Rocuronium:** Hepatic.
*   **Reversal:**
    *   **Neostigmine:** Increases ACh to compete.
    *   **Sugammadex:** Encapsulates Rocuronium/Vecuronium (Chemical reversal).

## 3. Clinical Correlates
:::correlate
**Malignant Hyperthermia**
*   **Trigger:** Succinylcholine + Volatile Anesthetics.
*   **Gene:** **RYR1** (Ryanodine Receptor) mutation (AD).
*   **Signs:** Muscle rigidity, Hyperthermia, Acidosis.
*   **Treatment:** **Dantrolene** (Blocks Ca2+ release from SR).
:::

:::correlate
**Pseudocholinesterase Deficiency**
*   **Condition:** Genetic deficiency in plasma cholinesterase.
*   **Effect:** **Succinylcholine** lasts for hours (prolonged apnea) instead of minutes.
:::
`,
    questions: [
        {
            question: "**1. Which Neuromuscular Blocker is metabolized via Hofmann Elimination (spontaneous degradation)?**",
            options: [
                "Succinylcholine",
                "Rocuronium",
                "Cisatracurium",
                "Vecuronium",
                "Pancuronium"
            ],
            correctAnswer: 2,
            rationale: "**Cisatracurium** undergoes Hofmann elimination, making it the drug of choice for patients with multi-organ (renal/hepatic) failure."
        },
        {
            question: "**2. A patient with severe burns requires intubation. Which agent is CONTRAINDICATED due to the risk of hyperkalemia?**",
            options: [
                "Rocuronium",
                "Succinylcholine",
                "Cisatracurium",
                "Vecuronium",
                "Propofol"
            ],
            correctAnswer: 1,
            rationale: "**Succinylcholine** causes K+ efflux. In burn/trauma patients (who have upregulated receptors), this can cause massive Hyperkalemia and cardiac arrest."
        },
        {
            question: "**3. Malignant Hyperthermia is treated with:**",
            options: [
                "Atropine",
                "Physostigmine",
                "Dantrolene",
                "Sugammadex",
                "Calcium Gluconate"
            ],
            correctAnswer: 2,
            rationale: "**Dantrolene** is the specific antidote. It blocks calcium release from the Sarcoplasmic Reticulum via the Ryanodine receptor."
        },
        {
            question: "**4. Sugammadex is a specific reversal agent for:**",
            options: [
                "Succinylcholine",
                "Cisatracurium",
                "Rocuronium",
                "Mecamylamine",
                "Dantrolene"
            ],
            correctAnswer: 2,
            rationale: "**Sugammadex** works by encapsulating steroidal NMBAs like **Rocuronium** and Vecuronium. It does not work on Isoquinolines (Cisatracurium) or Succinylcholine."
        },
        {
            question: "**5. What is the expected effect of a ganglionic blocker like Mecamylamine on Blood Pressure?**",
            options: [
                "Hypertension",
                "No change",
                "Orthostatic Hypotension",
                "Bradycardia",
                "Vasoconstriction"
            ],
            correctAnswer: 2,
            rationale: "Ganglionic blockers remove the dominant tone. Arterioles are sympathetically dominated (vasoconstriction), so blockade causes vasodilation and severe **Orthostatic Hypotension**."
        }
    ],
    flashcards: [
        { "front": "Mechanism of Succinylcholine?", "back": "Depolarizing NM Blocker (Agonist)", "tag": "Pharm" },
        { "front": "Treatment for Malignant Hyperthermia?", "back": "Dantrolene", "tag": "Pharm" },
        { "front": "Contraindication for Succinylcholine?", "back": "Burns / Trauma (Hyperkalemia)", "tag": "Pharm" },
        { "front": "Elimination of Cisatracurium?", "back": "Hofmann Elimination (Spontaneous)", "tag": "Pharm" },
        { "front": "Reversal agent for Rocuronium?", "back": "Sugammadex", "tag": "Pharm" },
        { "front": "Dominant tone in Arterioles?", "back": "Sympathetic (Constriction)", "tag": "Pharm" },
        { "front": "Dominant tone in Heart?", "back": "Parasympathetic (Bradycardia)", "tag": "Pharm" },
        { "front": "Ganglionic Blocker effect on HR?", "back": "Tachycardia (Blocks parasymp tone)", "tag": "Pharm" },
        { "front": "Structure of Succinylcholine?", "back": "Two Acetylcholine molecules", "tag": "Pharm" },
        { "front": "Enzyme that breaks down Succinylcholine?", "back": "Plasma Cholinesterase (Pseudocholinesterase)", "tag": "Pharm" }
    ],
    mindmap: `
## NM & Ganglionic Blockers
### Ganglion Blockers
*   **Mecamylamine**: Blocks Nn (both systems). Severe Hypotension.
### NM Blockers (Paralytics)
*   **Depolarizing**: Succinylcholine
    *   *Risks*: Hyperkalemia, Malignant Hyperthermia.
    *   *Metabolism*: Plasma ChE.
*   **Non-Depolarizing**: Rocuronium, Cisatracurium
    *   *Cisatracurium*: Hofmann Elimination (Organ failure safe).
    *   *Rocuronium*: Sugammadex reversal.
### Pharmacology
*   **Dantrolene**: Treats MH (Ryanodine block).
*   **Sugammadex**: Chelates Rocuronium.
*   **Neostigmine**: Reverses Non-depolarizers (General).
`
};

if (typeof window !== 'undefined') {
    window.L22_CONTENT = L22_CONTENT;
}
