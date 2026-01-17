export const L34_CONTENT = {
    id: "l34",
    summary: `
# Lecture 34: Sympathomimetics II - Indirect & Mixed Acting

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 34

## 1. Beta-2 Agonists (Lungs & Uterus)
*   **SABA (Short-Acting):** **Albuterol**, Levalbuterol.
    *   *Use:* Acute Asthma/COPD exacerbation ("Rescue").
*   **LABA (Long-Acting):** **Salmeterol**, Formoterol.
    *   *Use:* Chronic maintenance. Always combine with Steroids (ICS) in asthma to prevent mortality.
*   **Tocolytics:** **Terbutaline**.
    *   *Use:* Relaxes uterine smooth muscle to delay preterm labor (allows time for corticosteroids to mature fetal lungs).

## 2. Beta-3 Agonists (Bladder)
*   **Mirabegron:**
    *   *Action:* Relaxes Detrusor muscle.
    *   *Use:* Overactive Bladder (OAB). (Alternative to Anticholinergics).

## 3. Alpha-2 Agonists (Central Sympatholytics)
Reduces sympathetic outflow from the brainstem.
*   **Clonidine:**
    *   *Uses:* Hypertension (resistant), **Opioid Withdrawal**, ADHD.
    *   *Adverse:* Rebound Hypertension if stopped abruptly. dry mouth, sedation.
*   **Methyldopa:**
    *   *Use:* **Hypertension in Pregnancy** (Safe for fetus).
    *   *Adverse:* **Coombs+ Hemolytic Anemia** (Autoimmune), Drug-induced Lupus.

## 4. Indirect & Mixed Acting
*   **Amphetamines (Adderall):**
    *   *Mechanism:* **Displaces** NE/DA from vesicles into synapse (Reverse transport).
    *   *Use:* ADHD, Narcolepsy.
*   **Cocaine:**
    *   *Mechanism:* **Blocks Reuptake** (NET/DAT).
    *   *Effect:* Vasoconstriction (Local Anesthetic + Pressor).
*   **Ephedrine:**
    *   *Mechanism:* Mixed (Direct Agonist + Indirect Release).
    *   *Use:* Hypotension during Anesthesia.
*   **Pseudoephedrine:**
    *   *Use:* Nasal Decongestant. (Precursor for Meth, hence restricted).

## 5. MAO Inhibitors (The Cheese Effect)
*   **Mechanism:** Inhibits Monoamine Oxidase (enzyme that breaks down NE/DA/Serotonin).
*   **Tyramine Interaction:** Tyramine (found in Aged Cheese, Wine, Cured Meats) releases stored NE. Commonly degraded by GI MAO.
*   **Crisis:** If on MAO-I, Tyramine is NOT degraded $\\to$ Massive NE release $\\to$ **Hypertensive Crisis**.
`,
    pearls: [
        {
            title: "Methyldopa in Pregnancy",
            content: "Methyldopa is the classic choice for **Hypertension in Pregnancy** (Preeclampsia prophylaxis). Watch for **Hemolytic Anemia**."
        },
        {
            title: "Clonidine Rebound",
            content: "Never stop Clonidine abruptly. Causes massive **Rebound Hypertension** due to upregulated receptors."
        },
        {
            title: "Cocaine vs Amphetamine",
            content: "**Cocaine:** BLOCKS reuptake (NET blocker).\\n**Amphetamine:** REVERSES transporter (Displaces NE). (Both increase synaptic NE)."
        },
        {
            title: "Cheese Reaction",
            content: "MAO Inhibitors + Tyramine (Wine/Cheese) = Hypertensive Crisis. (Tyramine displaces NE)."
        },
        {
            title: "Terbutaline Tocolysis",
            content: "Beta-2 agonist used to **Stop Labor** (Relax Uterus). 'Turbulence' delays the flight (birth)."
        }
    ],
    questions: [
        {
            question: "A pregnant woman presents with chronic hypertension. Which centrally acting alpha-2 agonist is considered safe and appropriate for management?",
            options: [
                "Clonidine",
                "Methyldopa",
                "Lisinopril",
                "Losartan",
                "Propranolol"
            ],
            correctAnswer: 1,
            rationale: "**Methyldopa** is the classic safe antihypertensive for pregnancy. ACE inhibitors (Lisinopril) and ARBs are teratogenic."
        },
        {
            question: "A patient on a Monoamine Oxidase Inhibitor (MAOI) for depression consumes a charcuterie board with aged cheese and wine. They present to the ER with a severe headache and BP of 220/120. mechanism is:",
            options: [
                "Direct Alpha-1 agonism by Tyramine",
                "Displacement of stored Norepinephrine by Tyramine",
                "Blockade of Norepinephrine reuptake",
                "Allergic reaction to wine",
                "Serotonin Syndrome"
            ],
            correctAnswer: 1,
            rationale: "**Tyramine** acts as an indirect sympathomimetic by **displacing stored NE** from vesicles. Usually broken down by MAO, but persists in MAO-I patients."
        },
        {
            question: "Which drug works by relaxing the detrusor muscle via Beta-3 agonism to treat overactive bladder?",
            options: [
                "Oxybutynin",
                "Mirabegron",
                "Bethanecol",
                "Tamsulosin",
                "Finasteride"
            ],
            correctAnswer: 1,
            rationale: "**Mirabegron** is a Beta-3 agonist. (Oxybutynin is an Anticholinergic, which also works but via M3 blockade)."
        },
        {
            question: "Amphetamines exert their stimulant effect primarily by:",
            options: [
                "Directly activating Alpha-1 receptors",
                "Blocking the degradation of Acetylcholine",
                "Displacing Norepinephrine and Dopamine from vesicles into the synapse",
                "Blocking the reuptake of Serotonin only",
                "Directly activating Beta-2 receptors"
            ],
            correctAnswer: 2,
            rationale: "Amphetamines enter the nerve terminal (via uptake) and then **displace** NE/DA from vesicles, reversing the transporter to pump NE/DA OUT into the synapse."
        },
        {
            question: "Salmeterol is classified as a:",
            options: [
                "Short-Acting Beta Agonist (SABA)",
                "Long-Acting Beta Agonist (LABA)",
                "Alpha-1 Antagonist",
                "Muscarinic Antagonist",
                "Corticosteroid"
            ],
            correctAnswer: 1,
            rationale: "**Salmeterol** is a **LABA** used for asthma maintenance. Albuterol is a SABA."
        }
    ],
    flashcards: [
        {
            front: "Methyldopa Indication",
            back: "Hypertension in Pregnancy",
            tag: "Pharmacology"
        },
        {
            front: "Methyldopa Adverse Effect",
            back: "Coombs (+) Hemolytic Anemia",
            tag: "Pharmacology"
        },
        {
            front: "Clonidine Mechanism",
            back: "Central Alpha-2 Agonist (Decreases Sympathetic Outflow)",
            tag: "Pharmacology"
        },
        {
            front: "Mirabegron Target",
            back: "Beta-3 Receptor (Bladder Relaxation)",
            tag: "Pharmacology"
        },
        {
            front: "Terbutaline Use",
            back: "Tocolysis (Delay Labor)",
            tag: "Pharmacology"
        },
        {
            front: "Tyramine Mechanism",
            back: "Displaces Stored NE (Indirect Agonist)",
            tag: "Pharmacology"
        },
        {
            front: "Cocaine Mechanism",
            back: "Blocks Reuptake (NET/DAT)",
            tag: "Pharmacology"
        },
        {
            front: "Albuterol vs Salmeterol",
            back: "Albuterol = SABA (Acute). Salmeterol = LABA (Maintenance).",
            tag: "Pharmacology"
        }
    ],
    ankingResource: {
        primarySource: "AMBOSS",
        chapter: "Pharmacology > Autonomic Drugs > Sympathomimetics",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" }
        ]
    },
    mindmap: `
## Sympathomimetics II

### Beta Agonists
*   **B2 Lungs**: Albuterol (SABA), Salmeterol (LABA).
*   **B2 Uterus**: Terbutaline (Tocolytic).
*   **B3 Bladder**: Mirabegron.

### Alpha-2 Agonists (Central)
*   **Clonidine**: HTN, Withdrawal. Rebound HTN.
*   **Methyldopa**: Pregnancy HTN. Hemolytic Anemia.

### Indirect Agents
*   **Amphetamine**: Displaces NE.
*   **Cocaine**: Blocks Reuptake.
*   **Tyramine**: Cheese Effect (MAO-I crisis).
\`
};
