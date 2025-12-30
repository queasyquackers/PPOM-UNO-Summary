const L21_CONTENT = {
    id: 'l21',
    title: 'Lecture #21: Antimuscarinics',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #21',
    prev: 'l20',
    next: 'l22',
    pdf: 'pdfs/Lecture # 21. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #21_ Pharmacology_ Antimuscarinic Agents; Presenter_ L.Goldstein.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Pharmacology > Autonomic Drugs > Anticholinergics'
    },
    summary: `
# Lecture #21: Antimuscarinics

**Lecturer:** Leslie Goldstein, Pharm.D.
**Session:** Pharmacology

## 1. Mechanism & Classification
*   **Mechanism:** Competitive antagonists at Muscarinic receptors.
*   **Inverse Agonists:** Most are actually inverse agonists (block constitutive activity).
*   **Classification:**
    *   **Tertiary Amines (Cross BBB):** Atropine, Scopolamine, Benztropine, Oxybutynin.
    *   **Quaternary Amines (No CNS):** Ipratropium, Tiotropium, Glycopyrrolate.

## 2. Clinical Uses
*   **Eye:** **Tropicamide/Cyclopentolate** (Mydriasis/Cycloplegia for exams).
*   **CNS:**
    *   **Scopolamine:** Motion Sickness (Patch).
    *   **Benztropine:** Parkinson's (Treats tremor/rigidity, restores ACh/DA balance).
*   **Respiratory (COPD/Asthma):**
    *   **Ipratropium (SAMA):** Short-acting.
    *   **Tiotropium (LAMA):** Long-acting.
    *   *Effect:* Bronchodilation + Reduced secretions.
*   **Bladder (Overactive Bladder):**
    *   **Oxybutynin, Tolterodine:** Relax detrusor muscle.
*   **GI:** **Dicyclomine** (IBS spasms).
*   **Surgery:** **Glycopyrrolate** (Reduce secretions, prevent bradycardia).

## 3. Atropine Specifics
*   **Uses:** Bradycardia (ACLS), Organophosphate poisoning.
*   **Dose Effects:**
    *   *Low dose:* **Paradoxical Bradycardia** (Blocks pre-synaptic M2 autoreceptors).
    *   *High dose:* Tachycardia (Blocks post-synaptic M2).

## 4. Toxicity (Anticholinergic Toxidrome)
*   **Mnemonic:**
    *   **Red as a Beet:** Flushing (cutaneous vasodilation due to hyperthermia).
    *   **Dry as a Bone:** Dry mouth, Anhidrosis.
    *   **Hot as a Hare:** Hyperthermia (No seating).
    *   **Blind as a Bat:** Mydriasis, Cycloplegia (No near vision).
    *   **Mad as a Hatter:** Delirium, Hallucinations.
    *   **Full as a Flask:** Urinary Retention.
*   **Contraindications:**
    *   **Glaucoma (Angle-closure):** Dilation closes the angle -> blindness.
    *   **BPH:** Precipitates urinary retention.
    *   **Elderly:** Delirium risks (Beers list).

## 5. Clinical Correlates
:::correlate
**Gardener's Pupil**
*   **Source:** Jimson Weed (Datura) contains Atropine/Scopolamine.
*   **Presentation:** Dilated pupil after handling plant. Systemic toxicity if ingested.
:::

:::correlate
**Drug-Induced Toxicity**
*   Many non-anticholinergic drugs have anticholinergic side effects: **TCAs** (Amitriptyline), **Antihistamines** (Diphenhydramine), **Antipsychotics**. Overdose mimics Atropine poisoning.
:::
`,
    questions: [
        {
            question: "**1. Which drug acts as a 'Paradoxical' bradycardia agent at low doses?**",
            options: [
                "Scopolamine",
                "Atropine",
                "Glycopyrrolate",
                "Ipratropium",
                "Benztropine"
            ],
            correctAnswer: 1,
            rationale: "**Atropine** at low doses blocks presynaptic M2 autoreceptors (which normally inhibit ACh release), causing *increased* ACh release and transient bradycardia. Higher doses block the postsynaptic M2 receptors causing tachycardia."
        },
        {
            question: "**2. Which agent is preferred for COPD maintenance therapy?**",
            options: [
                "Atropine",
                "Scopolamine",
                "Tiotropium",
                "Benztropine",
                "Oxybutynin"
            ],
            correctAnswer: 2,
            rationale: "**Tiotropium** is a Long-Acting Muscarinic Antagonist (LAMA) causing bronchodilation and reduced secretions, ideal for COPD maintenance."
        },
        {
            question: "**3. A patient with Parkinson's disease is prescribed Benztropine. What is the goal of this therapy?**",
            options: [
                "Increase Dopamine levels",
                "Inhibit Dopamine metabolism",
                "Restore the balance between Dopamine and Acetylcholine",
                "Stimulate Muscarinic receptors",
                "Block Nicotinic receptors"
            ],
            correctAnswer: 2,
            rationale: "In Parkinson's, dopamine loss leads to relative ACh excess (causing tremor). **Benztropine** (Antimuscarinic) restores the DA/ACh balance."
        },
        {
            question: "**4. Why is Atropine contraindicated in men with BPH?**",
            options: [
                "Causes Hypertension",
                "Precipitates Urinary Retention",
                "Causes Diarrhea",
                "Increases Prostate size",
                "Causes Bradycardia"
            ],
            correctAnswer: 1,
            rationale: "Atropine relaxes the detrusor muscle. In BPH (already obstructed outflow), this precipitates acute **Urinary Retention**."
        },
        {
            question: "**5. Which sign is part of the Anticholinergic Toxidrome?**",
            options: [
                "Diaphoresis (Sweating)",
                "Miosis (Pinpoint pupils)",
                "Bradycardia",
                "Hyperthermia (Hot as a Hare)",
                "Diarrhea"
            ],
            correctAnswer: 3,
            rationale: "**Hyperthermia** ('Hot as a Hare') is a classic sign due to blockage of sweating (Anhidrosis). The others are Cholinergic signs."
        }
    ],
    flashcards: [
        { "front": "Toxidrome: 'Mad as a Hatter'?", "back": "Anticholinergic Toxicity (Delirium)", "tag": "Pharm" },
        { "front": "Toxidrome: 'Dry as a Bone'?", "back": "Anhidrosis (No sweat) / Dry mouth", "tag": "Pharm" },
        { "front": "Toxidrome: 'Blind as a Bat'?", "back": "Mydriasis / Cycloplegia", "tag": "Pharm" },
        { "front": "Drug for Motion Sickness?", "back": "Scopolamine", "tag": "Pharm" },
        { "front": "Drug for COPD (LAMA)?", "back": "Tiotropium", "tag": "Pharm" },
        { "front": "Drug for Urge Incontinence?", "back": "Oxybutynin", "tag": "Pharm" },
        { "front": "Drug for Parkinson's Tremor?", "back": "Benztropine", "tag": "Pharm" },
        { "front": "Major Contraindication for Atropine?", "back": "Glaucoma (Angle-closure) / BPH", "tag": "Pharm" },
        { "front": "Does Glycopyrrolate cross BBB?", "back": "No (Quaternary - good for systemic effects without delirium)", "tag": "Pharm" },
        { "front": "Effect of Atropine on Heart?", "back": "Tachycardia", "tag": "Pharm" }
    ],
    mindmap: `
## Antimuscarinics
### Drugs
*   **Atropine**: Prototype (Bradycardia, Poisons)
*   **Scopolamine**: Motion Sickness (CNS)
*   **Ipratropium/Tiotropium**: COPD (Lungs)
*   **Oxybutynin**: Bladder
*   **Benztropine**: Parkinson's
*   **Glycopyrrolate**: Surgery (No CNS)
### Effects (Anti-DUMBELS)
*   **Eye**: Mydriasis
*   **Heart**: Tachycardia
*   **GI/GU**: Constipation, Retention
*   **Skin**: Dry, Hot
### Toxicity
*   **Signs**: Red, Dry, Hot, Blind, Mad.
*   **Contraindications**: Glaucoma, BPH, Elderly.
`
};

if (typeof window !== 'undefined') {
    window.L21_CONTENT = L21_CONTENT;
}
