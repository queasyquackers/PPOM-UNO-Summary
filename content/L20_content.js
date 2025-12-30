const L20_CONTENT = {
    id: 'l20',
    title: 'Lecture #20: Indirect Cholinomimetics',
    lecturer: 'L. Goldstein, Pharm.D.',
    module: 'Pharmacology',
    session: 'Lecture #20',
    prev: 'l19',
    next: 'l21',
    pdf: 'pdfs/Lecture # 20. L. Goldstein, Pharm.D. (PPT).pdf',
    transcript: 'transcripts/Lecture #20_ Pharmacology_ Indirect-Acting Cholinomimetics; Presenter_ L.Goldstein.srt',
    ankingResource: {
        primarySource: 'BandB',
        chapter: 'Pharmacology > Autonomic Drugs > Cholinomimetics'
    },
    summary: `
# Lecture #20: Indirect Cholinomimetics (AChE Inhibitors)

**Lecturer:** Leslie Goldstein, Pharm.D.
**Session:** Pharmacology

## 1. Mechanism & Classification
*   **Mechanism:** Inhibit Acetylcholinesterase (AChE) -> Increase synaptic ACh -> Stimulate M and N receptors.
*   **Reversible:**
    *   *Alcohols:* Edrophonium.
    *   *Carbamates:* Neostigmine, Pyridostigmine, Physostigmine, Rivastigmine.
*   **Irreversible:**
    *   *Organophosphates:* Malathion, Echothiophate, Nerve Gas (Sarin).

## 2. Clinical Uses
### Myasthenia Gravis (MG)
*   **Pathology:** Antibodies against Nm receptors.
*   **Diagnosis (Historic):** **Edrophonium** (Tensilon test). Short acting. If strength improves -> MG.
*   **Treatment:** **Pyridostigmine** (Long acting, Oral). **Neostigmine** (IV/SC).
    *   *Note:* These do **NOT** cross the BBB (Quaternary amines).

### Alzheimer's Disease
*   **Drug:** **Donepezil**, **Rivastigmine**, **Galantamine**.
*   **Mechanism:** Cross BBB. Increase ACh in CNS to improve cognition.

### Reversal of NM blockade
*   **Drug:** **Neostigmine**.
*   **Use:** Reverses non-depolarizing NM blockers (e.g., Rocuronium) after surgery. Given with **Atropine** to prevent muscarinic side effects (bradycardia).

### Anticholinergic Toxicity (Atropine Overdose)
*   **Drug:** **Physostigmine**.
*   **Reason:** Tertiary amine -> **Crosses BBB**. Reverses both central and peripheral toxicity.

## 3. Toxicology
### Organophosphate Poisoning
*   **Source:** Insecticides, Nerve agents.
*   **Mechanism:** Irreversible phosphorylation of AChE. "Aging" stabilizes the bond.
*   **Symptoms (DUMBELS):** **D**iarrhea, **U**rination, **M**iosis, **B**radycardia/Bronchospasm, **E**mesis, **L**acrimation, **S**alivation. + Sweating.
*   **Death:** Respiratory failure (Bronchorrhea + Diaphragm paralysis).
*   **Treatment:**
    1.  **Atropine:** Blocks Muscarinic effects (Saves life).
    2.  **Pralidoxime (2-PAM):** Regenerates AChE (if given before aging). Reverses Nicotinic paralysis.

## 4. Clinical Correlates
:::correlate
**Myasthenic vs. Cholinergic Crisis**
*   **Myasthenic Crisis:** Undermedicated. Respiratory weakness. **Improves** with Edrophonium.
*   **Cholinergic Crisis:** Overmedicated. Depolarizing block (muscle weakness) + DUMBELS signs. **Worsens** with Edrophonium.
:::

:::correlate
**Ogilvie Syndrome**
*   **Def:** Acute colonic pseudo-obstruction.
*   **Treatment:** **Neostigmine** (Restores bowel motility).
:::
`,
    questions: [
        {
            question: "**1. A farmer typically using insecticides inhibits symptoms of pinpoint pupils, excessive salivation, vomiting, diarrhea, and difficulty breathing. The most immediate life-saving treatment is:**",
            options: [
                "Physostigmine",
                "Pralidoxime",
                "Atropine",
                "Pilocarpine",
                "Edrophonium"
            ],
            correctAnswer: 2,
            rationale: "Symptoms describe **Organophosphate poisoning** (DUMBELS). **Atropine** is the immediate antidote to block lifethreatening muscarinic effects (bronchorrhea/bradycardia). Pralidoxime is adjunctive."
        },
        {
            question: "**2. Which agent is preferred for the long-term management of Myasthenia Gravis?**",
            options: [
                "Edrophonium",
                "Physostigmine",
                "Pyridostigmine",
                "Donepezil",
                "Succinylcholine"
            ],
            correctAnswer: 2,
            rationale: "**Pyridostigmine** has a longer duration of action and is available orally, making it the standard for chronic maintenance in MG."
        },
        {
            question: "**3. A child consumes unidentified berries and presents with flushed skin, dry mouth, dilated pupils, and delirium. Which drug can reverse these central nervous system effects?**",
            options: [
                "Neostigmine",
                "Physostigmine",
                "Pyridostigmine",
                "Edrophonium",
                "Pralidoxime"
            ],
            correctAnswer: 1,
            rationale: "This is **Atropine/Anticholinergic toxicity**. **Physostigmine** is a tertiary amine that crosses the BBB to reverse CNS symptoms. (Others are quaternary and don't cross)."
        },
        {
            question: "**4. Which drug is used to reverse the effects of non-depolarizing neuromuscular blockers (like Rocuronium) after surgery?**",
            options: [
                "Succinylcholine",
                "Pralidoxime",
                "Neostigmine",
                "Bethanechol",
                "Pilocarpine"
            ],
            correctAnswer: 2,
            rationale: "**Neostigmine** increases ACh at the NMJ, allowing it to compete with and displace the blocker. It is usually co-administered with glycopyrrolate/atropine."
        },
        {
            question: "**5. What is the mechanism of action of Donepezil in Alzheimer's disease?**",
            options: [
                "Increases Dopamine release",
                "Blocks Glutamate NMDA receptors",
                "Inhibits Acetylcholinesterase",
                "Stimulates Nicotinic receptors directly",
                "Inhibits MAO-B"
            ],
            correctAnswer: 2,
            rationale: "Donepezil is a centrally acting **Acetylcholinesterase Inhibitor**."
        }
    ],
    flashcards: [
        { "front": "Diagnosis of Myasthenia Gravis?", "back": "Edrophonium (Tensilon Test)", "tag": "Pharm" },
        { "front": "Treatment of Myasthenia Gravis?", "back": "Pyridostigmine", "tag": "Pharm" },
        { "front": "Unique Feature of Physostigmine?", "back": "Crosses BBB (Tertiary Amine)", "tag": "Pharm" },
        { "front": "Antidote for Atropine toxicity?", "back": "Physostigmine", "tag": "Pharm" },
        { "front": "Antidote for Organophosphate poisoning?", "back": "Atropine + Pralidoxime (2-PAM)", "tag": "Pharm" },
        { "front": "Mechanism of Organophosphates?", "back": "Irreversible Inhibition of AChE", "tag": "Pharm" },
        { "front": "DUMBELS Mnemonic means?", "back": "Diarrhea, Urination, Miosis, Bradycardia/Bronchospasm, Emesis, Lacrimation, Salivation", "tag": "Pharm" },
        { "front": "Drug for Alzheimer's (AChE Inhibitor)?", "back": "Donepezil / Rivastigmine / Galantamine", "tag": "Pharm" },
        { "front": "Does Neostigmine cross BBB?", "back": "No (Quaternary Amine)", "tag": "Pharm" },
        { "front": "Role of Pralidoxime?", "back": "Regenerates AChE (if not aged)", "tag": "Pharm" }
    ],
    mindmap: `
## Indirect Cholinomimetics (AChE Inhibitors)
### Reversible
*   **Edrophonium**: Dx MG (Short)
*   **Physostigmine**: Crosses BBB (Antidote for Atropine)
*   **Neostigmine**: No BBB (Ileus, Urinary Retention, NMJ Reversal, MG)
*   **Pyridostigmine**: No BBB (MG maintenance)
*   **Donepezil**: Alzheimer's (CNS)
### Irreversible
*   **Organophosphates**: Insecticides, Nerve Gas
*   **Toxicity**: DUMBELS
*   **Antidote**: Atropine + Pralidoxime
### Uses
*   **Myasthenia Gravis**: Pyridostigmine
*   **NMJ Reversal**: Neostigmine
*   **Glaucoma**: Echothiophate (Rare)
*   **Alzheimer's**: Donepezil
`
};

if (typeof window !== 'undefined') {
    window.L20_CONTENT = L20_CONTENT;
}
