const L43_CONTENT = {
    id: 'l43',
    title: 'Lecture #43: Pharmacology - Multiple Sclerosis',
    lecturer: 'M. Pino, Ph.D.',
    module: 'Pharm',
    session: 'Lecture #43',
    prev: 'l42',
    next: 'l44',
    pdf: 'pdfs/Lecture # 43. M. Pino, Ph.D. (PPT)-1.pdf',
    transcript: 'transcripts/Lecture #43_ Pharmacology_ Multiple Sclerosis Faculty_ M. Pino, Ph. D. Question Review.srt',
    summary: `
# Lecture #43: Pharmacology - Multiple Sclerosis

**Lecturer:** M. Pino, Ph.D.
**Session:** Lecture #43

## Acute MS Exacerbations

### Glucocorticoids

:::drug
**High-Dose Corticosteroids**
*   **Use:** Acute MS exacerbations (optic neuritis, partial vision loss).
*   **Regimen:** **IV methylprednisolone** for few days → Taper to oral prednisone → Wean off.
*   **Adverse Effects:**
    *   **Long-term:** Bone loss (osteoporosis) → May need **bisphosphonates**.
    *   **Metabolic:** ↑ Blood glucose, ↑ aldosterone → Fluid retention, hypertension.
    *   **Psychiatric:** Mood changes, insomnia.
*   **Monitoring:** CBC essential throughout treatment.
:::

## Disease-Modifying Therapies (DMTs)

### Interferon Beta

:::drug
**Interferon Beta-1a/1b**
*   **Mechanism:** Cytokine → ↓ T-lymphocyte activation, ↓ MHC class II expression, ↓ migration into CNS.
*   **Adverse Effects:**
    *   **Flu-like symptoms** (first few days of treatment).
    *   **Depression** (↓ neurotransmitter synthesis).
    *   **Anemia** (↓ erythropoiesis).
    *   **Hepatotoxicity:** Monitor LFTs.
    *   **Injection site reactions.**
*   **Monitoring:** CBC critical before and during treatment.
:::

### Glatiramer Acetate

**Mechanism:** Immunomodulator (mimics myelin basic protein).

**Adverse Effects:** Injection site reactions, post-injection reaction (flushing, chest tightness, anxiety).

### Fingolimod (S1P Receptor Modulator)

:::drug
**Fingolimod**
*   **Mechanism:** S1P receptor modulator → Traps lymphocytes in lymph nodes → ↓ CNS infiltration.
*   **Adverse Effects:**
    *   **Bradycardia** (affects cardiac action potential) → **Monitor EKG**.
    *   **Macular edema.**
    *   **PML risk** (JC virus reactivation in immunosuppressed).
    *   **Hepatotoxicity.**
*   **Monitoring:**
    *   **EKG** (bradycardia).
    *   **Varicella testing** (ensure immunity or vaccinate).
    *   **Ophthalmologic exam** (macular edema).
:::

### Natalizumab (Anti-VLA-4 Antibody)

:::drug
**Natalizumab**
*   **Mechanism:** Monoclonal antibody against **VLA-4 (α4β1 integrin)** → Prevents T-cell migration into CNS.
*   **Indication:** Highly active MS, not responding to conventional treatment.
*   **Major Risk:** **PML (Progressive Multifocal Leukoencephalopathy)** due to JC virus reactivation.
    *   **JC virus antibody testing** required before starting.
*   **Adverse Effects:** Infusion reactions, hepatotoxicity, infections.
:::

### Teriflunomide / Leflunomide

:::drug
**Teriflunomide (Active metabolite of Leflunomide)**
*   **Mechanism:** Inhibits **dihydroorotate dehydrogenase** → ↓ Pyrimidine synthesis → ↓ Lymphocyte proliferation.
*   **Also used for:** Rheumatoid arthritis (leflunomide).
*   **Major Concern:** **Teratogenic** (affects DNA/RNA synthesis).
    *   **Contraindicated in pregnancy.**
    *   **Adequate birth control required.**
    *   **Counsel on teratogenicity** before starting (pregnancy test essential).
*   **Adverse Effects:** Hepatotoxicity, diarrhea, alopecia, hypertension.
:::

### Alemtuzumab (Anti-CD52 Antibody)

:::drug
**Alemtuzumab**
*   **Mechanism:** Monoclonal antibody against **CD52** (on T/B cells) → Depletes lymphocytes.
*   **Indication:** Highly active MS, disease progression despite other treatments.
*   **Adverse Effects:**
    *   **Infusion reactions** (pretreat with antihistamines, corticosteroids).
    *   **Autoimmune conditions** (thyroid disease, ITP).
    *   **Infections** (immunosuppression).
    *   **Malignancy risk.**
:::

### Mitoxantrone

:::drug
**Mitoxantrone**
*   **Mechanism:** Anthracycline (DNA intercalation, topoisomerase II inhibitor) → Immunosuppression.
*   **Indication:** Secondary-progressive MS (after 15 years, disease progressing despite treatment).
*   **Major Risk:** **Dilated cardiomyopathy** (similar to doxorubicin).
    *   **Cardiac exam** at baseline and during treatment essential.
*   **CI:** Patients with angina or heart disease.
*   **Adverse Effects:** Cardiotoxicity, myelosuppression, leukemia risk, blue-green urine.
:::

## Symptomatic Management

### Spasticity

:::drug
**Baclofen (GABA-B agonist)**
*   **Use:** Muscle spasticity in MS.
*   **Mechanism:** Activates GABA-B receptors in spinal cord → ↓ Muscle tone.
*   **Adverse Effects:** Sedation, weakness, CNS depression (avoid alcohol).
:::

**Other options:** Tizanidine (α2-agonist), benzodiazepines, dantrolene.

### Bladder Dysfunction (Incontinence)

:::drug
**Oxybutynin, Darifenacin (Anticholinergics)**
*   **Mechanism:** M3 muscarinic receptor antagonists → ↓ Bladder contractions.
*   **Use:** Overactive bladder, urinary incontinence.
*   **Adverse Effects:** Dry mouth, constipation, urinary retention, blurred vision, confusion (elderly).
:::

**Alternative:** Botulinum toxin (Botox injections into bladder).

### Erectile Dysfunction

**PDE5 Inhibitors:** Sildenafil, tadalafil → ↑ Blood flow.

## Key Monitoring

:::highyield
**MS Drug Monitoring (All Patients)**
*   **CBC:** Before and during treatment (myelosuppression risk).
*   **LFTs:** Hepatotoxicity (most DMTs).
*   **Pregnancy test:** Before starting teratogenic drugs (teriflunomide).
*   **EKG:** Fingolimod (bradycardia).
*   **Cardiac exam:** Mitoxantrone (cardiomyopathy).
*   **JC virus antibody:** Natalizumab, fingolimod (PML risk).
*   **Varicella immunity:** Fingolimod (reactivation risk).
:::

`,
    questions: [
        {
            question: "**1. A 28-year-old woman starting teriflunomide for MS. What is the most important counseling point?**",
            options: [
                "Monitor for bradycardia",
                "Avoid pregnancy for 2 years after stopping (teratogenic)",
                "Risk of PML",
                "Monitor cardiac function",
                "Flu-like symptoms expected"
            ],
            correctAnswer: 1,
            rationale: "**Teriflunomide is teratogenic** (inhibits pyrimidine synthesis → affects DNA/RNA). **Contraindicated in pregnancy**. Advise adequate birth control and avoid pregnancy for **2 years after stopping**. Always do pregnancy test before starting. (Slide 33, 36)"
        },
        {
            question: "**2. A patient on fingolimod for MS. Which monitoring is essential?**",
            options: [
                "Liver function only",
                "EKG for bradycardia",
                "Renal function",
                "Amylase/lipase",
                "Thyroid function"
            ],
            correctAnswer: 1,
            rationale: "**Fingolimod** (S1P receptor modulator) can cause **bradycardia** (affects cardiac action potential). **EKG monitoring essential**. Also check varicella immunity (reactivation risk) and monitor for macular edema, PML. (Slide 19)"
        },
        {
            question: "**3. A patient has secondary-progressive MS with angina. Which MS drug is contraindicated?**",
            options: [
                "Interferon beta",
                "Glatiramer",
                "Mitoxantrone",
                "Fingolimod",
                "Baclofen"
            ],
            correctAnswer: 2,
            rationale: "**Mitoxantrone** (anthracycline) causes **dilated cardiomyopathy** → **Contraindicated in patients with angina or heart disease**. Requires cardiac exam at baseline and during treatment. Used for secondary-progressive MS. (Slide 42, 43)"
        },
        {
            question: "**4. A patient on natalizumab for highly active MS. What is the major risk?**",
            options: [
                "Cardiomyopathy",
                "Hepatotoxicity",
                "PML (Progressive multifocal leukoencephalopathy)",
                "Teratogenicity",
                "Bradycardia"
            ],
            correctAnswer: 2,
            rationale: "**Natalizumab** (anti-VLA-4 antibody) → Major risk is **PML** (JC virus reactivation in immunosuppressed patients). **JC virus antibody testing required** before starting. (Slide 21, 74)"
        },
        {
            question: "**5. A patient has muscle spasticity from MS. Which drug mechanism is correct?**",
            options: [
                "Baclofen - GABA-A agonist",
                "Baclofen - GABA-B agonist",
                "Oxybutynin - GABA-B agonist",
                "Tizanidine - Muscarinic antagonist",
                "Dantrolene - GABA-A agonist"
            ],
            correctAnswer: 1,
            rationale: "**Baclofen is a GABA-B agonist** (not GABA-A) → Activates GABA-B receptors in spinal cord → ↓ Muscle spasticity. Adverse effects: Sedation, CNS depression (avoid alcohol). (Slide on spasticity)"
        }
    ],
    flashcards: [
        { "front": "MS acute exacerbation treatment?", "back": "High-dose IV methylprednisolone → Oral prednisone taper", "tag": "Pharm" },
        { "front": "Interferon beta adverse effects?", "back": "Flu-like symptoms, depression, anemia, hepatotoxicity", "tag": "Pharm" },
        { "front": "Fingolimod monitoring?", "back": "EKG (bradycardia), varicella immunity, macular edema", "tag": "Pharm" },
        { "front": "Natalizumab major risk?", "back": "PML (JC virus reactivation)", "tag": "Pharm" },
        { "front": "Teriflunomide key concern?", "back": "Teratogenic - avoid pregnancy 2 years after stopping", "tag": "Pharm" },
        { "front": "Mitoxantrone major toxicity?", "back": "Dilated cardiomyopathy (CI in angina/heart disease)", "tag": "Pharm" },
        { "front": "Alemtuzumab mechanism?", "back": "Anti-CD52 antibody → Depletes T/B cells", "tag": "Pharm" },
        { "front": "Baclofen mechanism?", "back": "GABA-B agonist → ↓ Spasticity", "tag": "Pharm" },
        { "front": "Oxybutynin use in MS?", "back": "M3 antagonist → Urinary incontinence", "tag": "Pharm" },
        { "front": "MS drug monitoring (all)?", "back": "CBC, LFTs before and during treatment", "tag": "Pharm" }
    ],
    mindmap: `
## MS Pharmacology
### Acute Exacerbations
*   **Corticosteroids**: IV methylprednisolone → Oral taper
*   **Long-term risk**: Osteoporosis (bisphosphonates)
### Disease-Modifying Therapies
*   **Interferon beta**: Flu-like, depression, anemia
*   **Fingolimod**: Bradycardia (EKG), PML risk
*   **Natalizumab**: PML (JC virus testing)
*   **Teriflunomide**: Teratogenic (2-year washout)
*   **Mitoxantrone**: Cardiotoxicity (CI in angina)
### Symptomatic
*   **Spasticity**: Baclofen (GABA-B agonist)
*   **Incontinence**: Oxybutynin (M3 antagonist)
*   **ED**: PDE5 inhibitors
### Monitoring
*   **All**: CBC, LFTs
*   **Fingolimod**: EKG, varicella, ophthalmology
*   **Mitoxantrone**: Cardiac exam
*   **Teriflunomide**: Pregnancy test
`
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Demyelinating > MS Treatment",
        alternatives: [
            { "resource": "SketchyPharm", "chapter": "Neuro/Psych > MS Drugs" }
        ]
    }
,
    ankingResource: {
        primarySource: "BandB",
        chapter: "Neurology > Demyelinating > MS Treatment",
        alternatives: [
            { "resource": "SketchyPharm", "chapter": "Neuro/Psych > MS Drugs" }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.L43_CONTENT = L43_CONTENT;
}
