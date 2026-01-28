export const L21_CONTENT = {
    id: "l21",
    summary: `
# Lecture 21: Muscarinic Antagonists (Anticholinergics)

**Lecturer:** L. Goldstein, Pharm.D.
**Session:** Lecture 21

## 1. Class Overview (Slide 7-8)
* **Mechanism**:** Competitive antagonists (or inverse agonists) at Muscarinic receptors (M1-M5).
* **Structure**:**
    * **Tertiary Amines (Cross BBB)**:** Atropine, Scopolamine, Benztropine.
    * **Quaternary Ammonium (No CNS)**:** Ipratropium, Tiotropium, Glycopyrrolate.

## 2. Clinical Uses (Slide 21-23)
* **Atropine**:**
    * **Bradycardia**:** Blocks vagal tone (M2) → Increases HR.
    * **Antidote**:** For Organophosphate poisoning.
    * **Pre-op**:** Reduces metabolic secretions.
    * **  *Note**:* Low doses can cause **Paradoxical Bradycardia** (blocks presynaptic M2 autoreceptors).
* **Scopolamine**:**
    * **Motion Sickness**:** Transdermal patch (bypasses first-pass).
* **Respiratory (COPD/Asthma)**:**
    *   **Ipratropium** (Short) & **Tiotropium** (Long). Block bronchoconstriction + decrease secretions.
* **Urinary Incontinence (Overactive Bladder)**:**
    *   **Oxybutynin**. Relaxes detrusor muscle.
* **Parkinson's Disease**:**
    *   **Benztropine**. Treats tremor (restores ACh/Dopamine balance).
* **Ophthalmology**:**
    *   **Tropicamide/Cyclopentolate**. Induce Mydriasis (Dilation) & Cycloplegia (Paralysis of accommodation) for exams.

## 3. Toxicity: Anticholinergic Toxidrome (Slide 26-28)
* **Red as a Beet**:** Cutaneous flushing (vasodilation to dissipate heat).
* **Dry as a Bone**:** No sweating (Anhidrosis), dry mouth.
* **Hot as Hades**:** Hyperthermia (cant sweat).
* **Blind as a Bat**:** Mydriasis (dilated pupils) + Cycloplegia (blurry near vision).
* **Mad as a Hatter**:** Delirium, Hallucinations (Central toxicity).
* **Full as a Flask**:** Urinary Retention.
* **Treatment**:**Physostigmine** (crosses BBB) - *Use with caution!*

## 4. Contraindications (Slide 25)
* **Narrow-Angle Glaucoma**:** Dilation blocks outflow → Acute crisis.
* **BPH (Prostatic Hyperplasia)**:** Worsens urinary retention.
* **Elderly**:** Risk of falls, confusion, delirium (BEERS criteria).
* **GI Obstruction/Ileus**:** Worsens constipation.

## 5. Clinical Correlates (Slide 31)

:::correlate
**Drug Interactions**
* **Oxybutynin + Macrolides (Erythromycin)**:** Macrolides inhibit **CYP3A4**. Oxybutynin is metabolized by CYP3A4. Result → **Anticholinergic Toxicity**.
:::

:::correlate
**Use in Special Populations**
* **Children**:** High risk of **Hyperthermia** ("Hot as Hades").
* **Elderly**:** High risk of **Delirium** ("Mad as a Hatter") and Falls. Avoid if possible.
:::
`,
    pearls: [
        {
            title: "Anticholinergic Toxidrome",
            content: "Red (Flush), Dry (No sweat), Hot (Hyperthermia), Blind (Mydriasis), Mad (Delirium), Full (Retention)."
        },
        {
            title: "Paradoxical Bradycardia",
            content: "Low dose Atropine blocks **Presynaptic M2** autoreceptors → Increases ACh releases → Slows Heart."
        },
        {
            title: "Reversal Agents",
            content: "**Atropine** reverses AChE Inhibitors.\\n**Physostigmine** reverses Atropine."
        },
        {
            title: "Contraindications",
            content: "Glaucoma (Angle Closure), BPH (Retention), Elderly (Delirium)."
        },
        {
            title: "Ipratropium/Tiotropium",
            content: "Quaternary amines (No CNS). Inhaled for **COPD/Asthma**."
        }
    ],
    questions: [
        {
            question: "A 75-year-old male with benign prostatic hyperplasia (BPH) takes an over-the-counter cold medication and develops acute urinary retention. Which ingredient likely caused this?",
            options: [
                "Guaifenesin",
                "Acetaminophen",
                "Diphenhydramine (Anticholinergic)",
                "Ibuprofen",
                "Pseudoephedrine"
            ],
            correctAnswer: 2,
            rationale: "**Diphenhydramine** has strong **anticholinergic** properties, which can precipitate urinary retention in patients with BPH."
        },
        {
            question: "Why is Atropine contraindicated in patients with Narrow-Angle Glaucoma?",
            options: [
                "It causes miosis",
                "It increases aqueous humor production",
                "It causes mydriasis which blocks the outflow angle",
                "It causes cataract formation",
                "It lowers intraocular pressure too much"
            ],
            correctAnswer: 2,
            rationale: "Atropine causes **Mydriasis** (dilation). In narrow-angle glaucoma, the bunched-up iris blocks the trabecular meshwork, dangerously increasing pressure."
        },
        {
            question: "To prevent motion sickness, a patient applies a Transderm Scop patch. What is the active drug and its mechanism?",
            options: [
                "Scopolamine; Muscarinic Antagonist",
                "Scopolamine; Nicotinic Antagonist",
                "Meclizine; H1 Antagonist",
                "Ondansetron; 5-HT3 Antagonist",
                "Metoclopramide; D2 Antagonist"
            ],
            correctAnswer: 0,
            rationale: "**Scopolamine** is a **Muscarinic Antagonist** used transdermally for motion sickness prevention."
        },
        {
            question: "Which drug is used to treat tremors in Parkinson's disease by restoring the balance between Acetylcholine and Dopamine?",
            options: [
                "Atropine",
                "Ipratropium",
                "Benztropine",
                "Oxybutynin",
                "Succinylcholine"
            ],
            correctAnswer: 2,
            rationale: "**Benztropine** is a centrally acting antimuscarinic used to treat Parkinsonian tremors (Parkinson's = Low Dopamine + High ACh)."
        },
        {
            question: "A child presents with flushed skin, dry mouth, dilated pupils, and tachycardia after eating berries from a garden plant. The most likely plant is:",
            options: [
                "Foxglove (Digitalis)",
                "Jimson Weed (Datura/Atropine)",
                "Oleander",
                "Poison Ivy",
                "Mushrooms (Muscarine)"
            ],
            correctAnswer: 1,
            rationale: "**Jimson Weed** (Datura stramonium) contains belladonna alkaloids (Atropine/Scopolamine) causing the classic anticholinergic toxidrome."
        }
    ],
    flashcards: [
        {
            front: "Anticholinergic Toxidrome: 'Mad as a Hatter'",
            back: "Delirium / Hallucinations",
            tag: "Toxicology"
        },
        {
            front: "Anticholinergic Toxidrome: 'Blind as a Bat'",
            back: "Mydriasis + Cycloplegia (Blurred vision)",
            tag: "Toxicology"
        },
        {
            front: "Drug for Overactive Bladder",
            back: "Oxybutynin",
            tag: "Pharmacology"
        },
        {
            front: "Inhaled Muscarinic Antagonist for COPD",
            back: "Tiotropium (Long) or Ipratropium (Short)",
            tag: "Pharmacology"
        },
        {
            front: "Why Atropine causes Tachycardia",
            back: "Blocks M2 receptors on SA node (Removes vagal brake)",
            tag: "Physiology"
        },
        {
            front: "Mechanism of Paradoxical Bradycardia",
            back: "Blockade of Presynaptic Autoreceptors (M2) → Increased ACh release",
            tag: "Physiology"
        },
        {
            front: "Contraindication: Narrow Angle Glaucoma",
            back: "Muscarinic Antagonists (Atropine)",
            tag: "Pharmacology"
        },
        {
            front: "Contraindication: BPH",
            back: "Muscarinic Antagonists (Causes Retention)",
            tag: "Pharmacology"
        },
        {
            front: "Drug for Motion Sickness (Patch)",
            back: "Scopolamine",
            tag: "Pharmacology"
        },
        {
            front: "Treats Parkinson's Tremor",
            back: "Benztropine",
            tag: "Pharmacology"
        }
    ],
    ankingResource: {
        primarySource: "SketchyPharm",
        chapter: "Autonomic Drugs > Parasympathetics > Muscarinic Antagonists",
        alternatives: [
            { resource: "FirstAid", chapter: "Pharmacology > Autonomic Drugs" },
            { resource: "BandB", chapter: "Pharmacology > ANS > Muscarinic Antagonists" }
        ]
    },
    mindmap: `
## Muscarinic Antagonists

### Tertiary (CNS)
* **Atropine**: Bradycardia, Antidote
* **Scopolamine**: Motion Sickness
* **Benztropine**: Parkinson's

### Quaternary (No CNS)
* **Ipratropium/Tiotropium**: COPD/Asthma
* **Glycopyrrolate**: Pre-op secretions, Hyperhidrosis
* **Oxybutynin**: Overactive Bladder

### Toxicity (Anticholinergic)
*   Red, Dry, Hot, Blind, Mad, Full
* **Antidote**: Physostigmine

### Contraindications
*   Glaucoma, BPH, Elderly, Ileus
\`
};

if (typeof window !== 'undefined') {
    window.L21_CONTENT = L21_CONTENT;
}
