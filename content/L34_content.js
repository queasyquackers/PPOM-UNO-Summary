const L34_CONTENT = {
    id: 'l34',
    title: 'Lecture #34: Sympathomimetics Part 2',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #34',
    prev: 'l33',
    next: 'l35',
    pdf: 'pdfs/Lecture # 34. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #34_ Pharmacology_ Sympathomimetics Part 2 Faculty_ L. Goldstein, Pharm.D..srt',
    summary: `
# Lecture #34: Sympathomimetics Part 2

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture #34

## 1. Selective β2 Agonists (Slides 8-13)

:::highyield
**Short-Acting β2 Agonists (SABAs)**
*   **Drugs:** Albuterol, Levalbuterol.
*   **Mechanism:** β2 activation → ↑ cAMP → Bronchial smooth muscle relaxation.
*   **Use:** **Rescue inhaler** for acute bronchospasm. Exercise-induced asthma prophylaxis (PRN).
*   **Onset:** ~10 minutes. **Duration:** 4-6 hours.
*   **Route:** Inhaled (preferred). Oral/IV possible but ↑ side effects.
:::

:::highyield
**Long-Acting β2 Agonists (LABAs)**
*   **Drugs:** Salmeterol, Formoterol, Vilanterol (Ultra-LABA).
*   **Mechanism:** Same as SABAs, but **lipophilic** + high β2 affinity → prolonged duration.
*   **Use:** **Chronic prophylaxis** of bronchospasm (with inhaled glucocorticoid). NOT for acute relief.
*   **Duration:** ~12 hours (LABAs), ~24 hours (Ultra-LABAs).
*   **Note:** **Formoterol** is rapid-acting (3 min) but long-duration.
:::

### Therapeutic Uses
*   **Asthma/COPD:** Bronchodilation.
*   **Tocolysis (Terbutaline):** Delay preterm labor ×48 hours (to give maternal glucocorticoid for fetal lung maturation).

### Adverse Effects (Slide 13)
*   **Tremor** (β2 on skeletal muscle). Tolerance develops.
*   **Tachycardia** (β2 cardiac + reflex).
*   **Metabolic:** Hypokalemia (K⁺ uptake into muscle), Hyperglycemia, ↑ FFA.

## 2. β3 Agonists (Slide 15)

:::drug
**Mirabegron / Vibegron**
*   **Mechanism:** β3 activation → Relaxation of detrusor muscle (bladder storage phase).
*   **Use:** Overactive bladder (urinary frequency, urgency, urge incontinence).
*   **Can combine with Muscarinic antagonists** (lack cholinergic side effects).
*   **Adverse Effects:** ↑ BP, QT prolongation (low risk).
*   **Drug Interaction:** **CYP2D6 inhibitor** (↑ levels of 2D6 substrates).
*   **Avoid:** Severe hypertension, high QT risk.
:::

## 3. α2 Agonists (Slides 18-25)

:::highyield
**Clonidine**
*   **Mechanism:** Activates **central α2 receptors** (brainstem) → ↓ Sympathetic outflow → ↓ HR, ↓ CO, ↓ TPR → ↓ BP.
*   **Uses:**
    *   Hypertension (add-on, not first-line).
    *   ADHD (modulates prefrontal cortex).
    *   Opioid/Smoking withdrawal (↓ sympathetic symptoms).
    *   Pain management (epidural).
*   **Adverse Effects:** Bradycardia, Hypotension, Sedation, Dry mouth, Sexual dysfunction.
*   **Critical:** **Rebound hypertension** if abruptly stopped.
:::

:::drug
**Methyldopa**
*   **Mechanism:** Converted to **α-Methyl-NE** (false transmitter) → Replaces NE in vesicles → Released → Acts as α2 agonist centrally → ↓ Sympathetic outflow.
*   **Use:** **Pregnancy hypertension** (safe for fetus, maintains uterine blood flow).
*   **Adverse Effects:** Sedation, Low energy, Depression, **Parkinsonian symptoms**, **Hemolytic anemia** (rare), Hyperprolactinemia, Gynecomastia.
:::

:::warning
**Withdrawal of α2 Agonists**
*   Taper slowly to prevent **rebound hypertension**.
*   If on β-blocker + Clonidine: **Stop β-blocker first** (days before), then taper Clonidine. Otherwise, unopposed α vasoconstriction → severe hypertensive crisis.
:::

## 4. Indirect-Acting Sympathomimetics (Slides 26-29)

### Mechanisms
*   **Amphetamines:** Release NE/DA from vesicles, block reuptake, reverse NET transport.
*   **Cocaine:** Blocks NET/DAT (reuptake inhibitors).
*   **MAO Inhibitors:** ↑ NE/DA/Serotonin stores (block degradation).
*   **COMT Inhibitors:** Prolong Levodopa (Parkinson's).

:::drug
**MAO Inhibitors (e.g., Phenelzine)**
*   **Use:** Treatment-resistant depression.
*   **Critical Interaction:** **Tyramine** (aged cheese, wine, deli meats) → Tyramine not degraded by MAO → Displaces NE from vesicles → **Hypertensive Crisis**.
*   **Avoid:** Tyramine-rich foods.
:::

:::drug
**Atomoxetine / SNRIs (Duloxetine, Venlafaxine)**
*   **Mechanism:** Selective NE (or NE + Serotonin) reuptake inhibitors.
*   **Uses:** ADHD (Atomoxetine), Depression/Anxiety/Chronic pain (SNRIs).
:::

## 5. Mixed-Acting (Slides 30-31)

:::drug
**Ephedrine / Pseudoephedrine**
*   **Mechanism:** **Indirect** (release NE) + **Direct** (α and β agonist).
*   **Uses:**
    *   **Ephedrine:** Anesthesia-induced hypotension (IV). Bronchodilator (oral, OTC).
    *   **Pseudoephedrine:** Nasal decongestant (less potent, less CNS).
*   **Effects:** ↑ HR, ↑ CO, ↑ BP (variable peripheral resistance).
:::

`,
    questions: [
        {
            question: "**1. What is the primary difference in clinical use between SABAs and LABAs?**",
            options: [
                "SABAs are oral, LABAs are inhaled",
                "SABAs are for acute relief, LABAs are for chronic prophylaxis",
                "SABAs work on β2, LABAs work on β1",
                "SABAs are for COPD, LABAs are for asthma",
                "There is no significant difference"
            ],
            correctAnswer: 1,
            rationale: "**SABAs** (e.g., Albuterol) have rapid onset and are used as **rescue inhalers** for acute bronchospasm. **LABAs** (e.g., Salmeterol) have slower onset but long duration and are used for **chronic prophylaxis** (always with a glucocorticoid). (Slide 12, 16)"
        },
        {
            question: "**2. A patient with overactive bladder is started on Mirabegron. Which drug interaction should be monitored?**",
            options: [
                "CYP3A4 substrates",
                "CYP2D6 substrates",
                "MAO inhibitors",
                "Tyramine-containing foods",
                "Beta-blockers"
            ],
            correctAnswer: 1,
            rationale: "Mirabegron is a **CYP2D6 inhibitor**. It can increase serum levels of drugs metabolized by CYP2D6 (e.g., metoprolol, codeine). This is especially important in older patients who may be on multiple medications. (Slide 15)"
        },
        {
            question: "**3. Why is Methyldopa preferred over Clonidine for hypertension in pregnancy?**",
            options: [
                "Methyldopa has no CNS effects",
                "Methyldopa does not cross the placenta",
                "Methyldopa lacks fetal adverse effects and maintains uterine blood flow",
                "Methyldopa is a β-blocker",
                "Methyldopa does not cause rebound hypertension"
            ],
            correctAnswer: 2,
            rationale: "**Methyldopa** is safe in pregnancy because it **lacks fetal adverse effects**, **maintains uterine blood flow**, and does not reduce maternal cardiac output or renal blood flow. (Slide 23)"
        },
        {
            question: "**4. A patient on an MAO inhibitor (Phenelzine) eats aged cheese and develops a severe headache and hypertension. What is the mechanism?**",
            options: [
                "Direct α1 agonism by the cheese",
                "Tyramine displaces NE from vesicles, causing NE release",
                "MAO inhibition causes direct vasoconstriction",
                "Serotonin syndrome",
                "Histamine release from cheese"
            ],
            correctAnswer: 1,
            rationale: "Aged cheese contains **Tyramine**. Normally, tyramine is degraded by MAO-A in the GI tract and liver. MAO inhibition → Tyramine accumulates → Tyramine **displaces NE from storage vesicles** → Massive NE release → **Hypertensive crisis**. (Slide 29, 33)"
        },
        {
            question: "**5. When discontinuing a patient on both a β-blocker and Clonidine, which should be stopped first?**",
            options: [
                "Stop both simultaneously",
                "Stop Clonidine first, then β-blocker",
                "Stop β-blocker first, then taper Clonidine",
                "It does not matter",
                "Never stop either drug"
            ],
            correctAnswer: 2,
            rationale: "Withdraw the **β-blocker first** (several days before), then slowly **taper Clonidine**. If Clonidine is stopped first, rebound sympathetic surge occurs → unopposed α-mediated vasoconstriction (β blocked) → **severe hypertensive crisis**. (Slide 21)"
        }
    ],
    flashcards: [
        { "front": "SABA vs LABA use?", "back": "SABA = Rescue (acute). LABA = Prophylaxis (chronic, with GC)", "tag": "Pharm" },
        { "front": "Formoterol unique feature?", "back": "Rapid-acting LABA (3 min onset, 12 hr duration)", "tag": "Pharm" },
        { "front": "Mirabegron mechanism?", "back": "β3 agonist → Bladder detrusor relaxation", "tag": "Pharm" },
        { "front": "Mirabegron drug interaction?", "back": "CYP2D6 inhibitor", "tag": "Pharm" },
        { "front": "Clonidine mechanism?", "back": "Central α2 agonist → ↓ Sympathetic outflow", "tag": "Pharm" },
        { "front": "Methyldopa mechanism?", "back": "False transmitter (α-Methyl-NE) → Central α2 agonist", "tag": "Pharm" },
        { "front": "Methyldopa use?", "back": "Pregnancy hypertension", "tag": "Pharm" },
        { "front": "MAO inhibitor + Tyramine?", "back": "Hypertensive crisis (Tyramine displaces NE)", "tag": "Pharm" },
        { "front": "Ephedrine mechanism?", "back": "Mixed (releases NE + direct α/β agonist)", "tag": "Pharm" },
        { "front": "Clonidine withdrawal risk?", "back": "Rebound hypertension (taper slowly)", "tag": "Pharm" }
    ],
    mindmap: `
## Sympathomimetics Part 2
### β2 Agonists
*   **SABAs**: Albuterol (rescue)
*   **LABAs**: Salmeterol (prophylaxis)
### β3 Agonists
*   **Mirabegron**: Overactive bladder
### α2 Agonists
*   **Clonidine**: HTN, ADHD, Withdrawal
*   **Methyldopa**: Pregnancy HTN
### Indirect
*   **MAO-I**: Depression (Tyramine crisis)
*   **Atomoxetine**: ADHD (NE reuptake)
### Mixed
*   **Ephedrine**: Anesthesia hypotension
`
};

if (typeof window !== 'undefined') {
    window.L34_CONTENT = L34_CONTENT;
}
