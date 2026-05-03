window.receiveLectureContent({
  id: "l171b",
  module: "OMM",
  metadata: {
    title: "Lecture #171b: Billing and Coding for OMT",
    lecturer: "S. Yao, D.O. (Session 171b)",
    readingTime: "10-13 min",
    difficulty: "Intermediate",
    tags: ["OMM", "Billing", "Coding", "ICD-10", "CPT", "E&M", "SOAP Note", "Documentation", "25 Modifier"]
  },
  resources: {
    ankingResource: {
      primarySource: "Savarese OMT Review",
      chapter: "OMT in Practice > Billing, Coding, and Documentation",
      alternatives: [
        { resource: "BandB", chapter: "Practice Management > Documentation and Billing" },
        { resource: "AOA Practice Resources", chapter: "Documenting Osteopathic Physicians' Care" },
        { resource: "Foundations of Osteopathic Medicine (Chila)", chapter: "Documentation and Coding for OMT" }
      ]
    },
    anking: [
      {
        match: "In-house lecture is best",
        resources: "In-house lecture is best"
      }
    ]
  },
  summary: `
# Story Mode: The Receipt for the Visit

Every patient encounter you ever have will produce two parallel records. The first is the medical one—the SOAP note that documents what you did and why. The second is the financial one—the bill that translates that encounter into codes the insurance company can read and pay against. Billing and coding is the bridge between those two records, and understanding it is non-optional for two reasons: under-billing means you don't get paid for work you actually did, and over-billing (or sloppy documentation that looks like over-billing in an audit) can lead to repayment demands, license issues, civil penalties, or jail. The golden rule that runs through every section of this lecture is simple: **if it isn't documented, you can't code for it, and you can't get paid for it.**

For osteopathic physicians, OMT adds a second layer of complexity on top of the standard primary-care visit. Every OMT-eligible visit involves not one bill but a *combined* bill: an evaluation and management code for the office visit itself, plus a procedure code for the OMT, plus a modifier that links the two so the insurance company knows to pay for both. Get any one of those three pieces wrong and the entire claim gets rejected.

---

## 1. The Three Terminologies (Slides 4–5)

Three coding systems show up on every claim. They answer three different questions, and they are not interchangeable.

- **ICD-10 (International Classification of Diseases, 10th revision)** — the **diagnosis** codes. What is wrong with the patient? *Migraine without aura: G43.109. Essential hypertension: I10. Somatic dysfunction of the head: M99.00.* The 11th revision is being prepared but is not yet in active use.
- **CPT (Current Procedural Terminology)** — the **procedure** codes. What did you do? *Skin biopsy, OMT, surgery, injection — anything procedural is a CPT code.*
- **E&M (Evaluation and Management) codes** — a **subset of CPT** specifically for office visit billing. They identify the *level* of cognitive work in the visit (history taking, examining, deciding) as opposed to a discrete procedure. E&M codes also vary by *location*: an inpatient hospital visit and an outpatient office visit at the same complexity bill at different rates.

:::highyield
Every billable claim links **two pieces** at minimum: an ICD-10 (the *why*—diagnosis) and a CPT (the *what*—service). The E&M is one type of CPT. When OMT is performed, you bill an E&M (cognitive work of the visit) **plus** a separate OMT CPT (the procedure itself). One alone is not enough.
:::

---

## 2. The SOAP Note: Where Coding Lives or Dies (Slides 6–9)

Every billable thing you do has to be findable in the chart. The SOAP framework is how you organize that documentation, and each section has a specific purpose for billing later.

- **S — Subjective.** Patient's story. Use **OPQRSTA** to characterize the chief complaint. Capture key history (medical, surgical, family, social) and a review of systems.
- **O — Objective.** Vital signs, focused physical exam (HEENT, heart, lungs, abdomen, neuro/MSK), and—for any encounter where OMT will be billed—a dedicated **osteopathic structural exam** section listing somatic dysfunctions by region.
- **A — Assessment.** Numbered list of medical diagnoses with ICD-10 codes attached. **The first assessment must be the chief complaint or primary medical diagnosis.** Somatic dysfunction codes go *below* the medical diagnoses, never as the primary code.
- **P — Plan.** What you will do for each assessment. If OMT was performed, the plan must explicitly state that OMT was performed, *which* dysfunctions were treated, and *which* techniques were used. A procedure note at the end documents the patient's response and tolerance.

:::mnemonic
**OPQRSTA — Subjective History for Pain or Symptom Workup**

- **O:** **O**nset
- **P:** **P**rovocation / Palliation (what makes it better/worse)
- **Q:** **Q**uality
- **R:** **R**adiation
- **S:** **S**everity
- **T:** **T**iming / duration
- **A:** **A**ssociated symptoms
:::

---

## 3. The 10 Body Regions and the Somatic Dysfunction ICD-10 Codes (Slides 10–13)

Somatic dysfunctions live under ICD-10 code family **M99.0X**, where X selects the body region. There are **10 regions**, mirroring the regions used for OMT CPT billing. Listing somatic dysfunctions cleanly by region in the objective exam is what makes the downstream OMT bill defensible.

| Region | ICD-10 Code | Examples of Inclusion |
| :--- | :--- | :--- |
| Head | M99.00 | Cranial dysfunction, **OA (occipitoatlantal)** dysfunction |
| Cervical | M99.01 | C1–C7 segmental, suboccipital muscles |
| Thoracic | M99.02 | T1–T12 segmental, thoracic spine |
| Lumbar | M99.03 | L1–L5 segmental |
| Sacral | M99.04 | Sacral torsions, sacral shears |
| Pelvic | M99.05 | Innominate dysfunctions, pubic dysfunction |
| Lower extremity | M99.06 | Hip, knee, ankle, foot |
| Upper extremity | M99.07 | Shoulder, elbow, wrist, hand |
| Rib cage | M99.08 | Ribs 1–12 inhalation/exhalation |
| Abdomen and other | M99.09 | Diaphragm, mesenteric lift, ganglion treatments |

:::highyield
**OA dysfunction codes as M99.00 (head), not cervical.** Some structures cross regions—muscles that span thoracic to cervical, or upper extremity to lower back. The lecturer's rule is to assign the dysfunction to the region the **muscle's primary attachment** belongs to, then pick the single best fit.
:::

---

## 4. Listing Assessments: The Cardinal Rule (Slides 14–16)

> "Somatic dysfunction should never be the only code or the first code of the visit. A somatic dysfunction does not justify an office visit." — [Lecturer Emphasis]

Patients do not present with chief complaints of "somatic dysfunction of the head." They present with **migraine, hypertension, low back pain, fatigue.** That medical complaint is what justifies the office visit and must therefore be your first assessment with its corresponding ICD-10. The somatic dysfunction codes go after, as supplementary diagnoses that justify the OMT procedure you are about to add.

The migraine example used in the lecture:

- **Assessment 1 (Primary):** Migraine without aura — **G43.119**
- **Assessment 2:** Somatic dysfunction, head — **M99.00**
- **Assessment 3:** Somatic dysfunction, cervical — **M99.01**
- **Assessment 4:** Somatic dysfunction, thoracic — **M99.02**
- **Assessment 5:** Somatic dysfunction, rib cage — **M99.08**

:::highyield
**Order matters.** A claim that lists M99.00 before G43.119 reads to the insurer as "this visit was for somatic dysfunction"—which is not a billable reason for an office visit. The migraine has to come first.
:::

---

## 5. E&M Codes: Levels 1–5 (Slides 21–24)

The E&M code captures the *cognitive complexity* of the visit. Five levels, with two parallel families—one for **new patients** (99201–99205) and one for **established patients** (99211–99215). The level depends on **time spent** OR **medical decision-making (MDM) complexity**, whichever is higher.

| Level | Established Pt Code | New Pt Code | MDM | Time (Established) | Time (New) | Typical Visit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 99211 | 99201 | n/a | minimal | minimal | Nurse-only visit; rarely billed by physicians |
| 2 | 99212 | 99202 | Straightforward | ~10–19 min | ~15–29 min | BP check, med refill, controlled HTN |
| 3 | 99213 | 99203 | Low | ~20–29 min | ~30–44 min | Stable chronic problem with one new concern |
| 4 | 99214 | 99204 | Moderate | ~30–39 min | ~45–59 min | Multiple problems or moderate-complexity new problem |
| 5 | 99215 | 99205 | High | ≥40 min | ≥60 min | Multiple uncontrolled problems, high complication risk |

The three pillars of MDM (per 2021 guidelines):

- **Number and complexity of problems addressed** — How many distinct problems? How acute? How well-controlled?
- **Amount and complexity of data reviewed** — Labs interpreted, imaging reviewed, outside records considered, consultants contacted.
- **Risk of complications, morbidity, or mortality** — Are you prescribing high-risk medications? Sending to ED? Managing a poorly controlled chronic disease?

:::highyield
Hit **any one** of: high MDM **OR** time greater than the level-5 threshold (≥40 min established, ≥60 min new) and the visit codes as level 5. You don't need all three pillars at the highest tier—the highest single tier wins.
:::

---

## 6. OMT CPT Codes: Pay-by-Region (Slides 25–26)

OMT is a procedure. It bills as a separate CPT code, with the level determined by the **number of body regions treated**.

| CPT Code | Body Regions Treated |
| :--- | :--- |
| **98925** | 1–2 regions |
| **98926** | 3–4 regions |
| **98927** | 5–6 regions |
| **98928** | 7–8 regions |
| **98929** | 9–10 regions |

More regions treated = higher CPT level = higher reimbursement. But every region you bill must be **separately listed as a somatic dysfunction in the objective exam AND treated** with a documented technique—otherwise the bill is not supported by the chart.

:::highyield
The body region billing is exactly why the osteopathic structural exam in the SOAP note must list dysfunctions by region. If you treat the head, cervical, thoracic, and ribs (4 regions), bill 98926. If your chart only lists 2 of those 4, you can only justify 98925—you've left money (and worse, you're misaligned with the chart) by being lazy in the exam section.
:::

---

## 7. The 25 Modifier (Slides 27–29)

Same-day E&M plus procedure is the most common OMT billing scenario. The patient comes in with migraine, you take the history, examine them, decide to do OMT, perform the OMT, and bill the visit. **Both the E&M and the OMT CPT must be on the claim**, but without a special tag, the insurance company will assume the procedure is part of the office visit and refuse to pay for it separately.

The tag that says "no, this procedure is a separate, distinct service from the E&M" is the **-25 modifier**, appended to the E&M code.

- **When required:** E&M + procedure on the **same day**, same encounter.
- **When NOT required:** Patient is seen on Monday for the E&M (history, exam, diagnosis) and brought back Friday specifically for OMT. Two separate dates, two separate claims, no modifier needed.

The complete same-day claim for the migraine example:

- **99213-25** — Established patient, level 3 office visit, with -25 modifier
- **G43.119** — Migraine, primary diagnosis (linked to the E&M)
- **98926** — OMT, 3–4 regions
- **M99.00, M99.01, M99.02, M99.08** — Somatic dysfunctions (linked to the OMT CPT)

:::highyield
**Forget the -25 modifier on a same-day E&M-plus-procedure claim and the insurance company will pay you for one but not the other.** This is the single most common OMT billing error.
:::

---

## 8. Documentation Requirements for OMT (Slide 32)

For an OMT bill to be defensible against an audit, the chart needs every one of:

- **Comprehensive history** including OPQRSTA, with enough detail to support the E&M level.
- **Osteopathic structural exam** in the objective section listing each somatic dysfunction by region. The AOA's proposed format adds a severity scale (1–3, with 3 most severe) per dysfunction.
- **Plan section** stating that OMT was decided upon and which techniques were used (e.g., "HVLA to OA, muscle energy to T4–T6, soft tissue to suboccipitals").
- **Procedure note** at the end describing the patient's response: tolerance, decreased pain, increased range of motion, improved gait, etc.

Without all four, the chart cannot defend either the E&M level or the OMT CPT in an audit.

---

## 9. Consequences of Sloppy Billing (Slide 33)

[Lecturer Emphasis] Inaccurate or insufficient billing has a real cost:

- **Underbilling** is just as bad as overbilling. You worked, you don't get paid.
- **Overbilling** found in audit means **repayment** to the insurance company, plus potential civil penalties.
- **Pattern of upcoding or fraudulent billing** can result in **license revocation, civil court, and in extreme cases criminal charges (jail).**
- **Even if you outsource billing to a company**, you are the licensed physician—you sign the agreements, and you remain responsible for what gets submitted under your name. **Double-check what your billing company submits.**

The compliance burden falls on you. The insurance company isn't policing accuracy on your behalf. Audits are random, post-hoc, and unforgiving.
`,
  questions: [
    {
      question: "A family medicine physician sees an established patient on Tuesday for migraine, takes a focused history and exam, decides OMT is appropriate, and treats the head, cervical, thoracic, and rib regions. Which combination of codes will result in the physician being paid for both the office visit AND the OMT procedure?",
      options: [
        "99213 + 98926, no modifier",
        "99213-25 + 98926, with the -25 modifier on the E&M",
        "98926 alone, since OMT subsumes the office visit",
        "99213 + 98929, no modifier",
        "99201-25 + 98925, with the -25 modifier"
      ],
      correctAnswer: 1,
      rationale: "When E&M and a procedure are billed on the same day, the -25 modifier must be appended to the E&M code to signal that the procedure is a separate, distinct service. 99213 is correct for an established level-3 visit; 98926 is correct for OMT covering 3–4 regions (head, cervical, thoracic, ribs = 4 regions). Without the -25 modifier the insurance company will reject one of the two services."
    },
    {
      question: "Which of the following lists of assessments is correctly ordered for an established patient who presented with hypertension and was found to have somatic dysfunctions of the head, cervical, and thoracic regions during the visit?",
      options: [
        "1) M99.00 head, 2) M99.01 cervical, 3) M99.02 thoracic, 4) I10 essential hypertension",
        "1) M99.01 cervical, 2) I10 essential hypertension, 3) M99.00 head, 4) M99.02 thoracic",
        "1) I10 essential hypertension, 2) M99.00 head, 3) M99.01 cervical, 4) M99.02 thoracic",
        "1) M99.00 head, 2) I10 essential hypertension, 3) M99.01 cervical, 4) M99.02 thoracic",
        "1) I10 essential hypertension alone—somatic dysfunctions are documented elsewhere"
      ],
      correctAnswer: 2,
      rationale: "The medical diagnosis (the chief complaint or reason for the visit) must always be listed first. Somatic dysfunction codes (M99.0X) follow as supplementary diagnoses that justify the OMT procedure. Listing somatic dysfunction first, or as the only code, makes the claim look as though the office visit was for a non-billable reason and the claim will be denied."
    },
    {
      question: "An osteopathic physician treats a patient's lumbar, sacral, pelvic, and lower extremity regions. Which OMT CPT code is appropriate?",
      options: [
        "98925 (1–2 regions)",
        "98926 (3–4 regions)",
        "98927 (5–6 regions)",
        "98928 (7–8 regions)",
        "98929 (9–10 regions)"
      ],
      correctAnswer: 1,
      rationale: "Four body regions were treated (lumbar, sacral, pelvic, lower extremity), which falls in the 3–4 region range and codes as 98926. The OMT CPT family ladders by 2 regions per step from 98925 (1–2) up to 98929 (9–10)."
    },
    {
      question: "Which of the following is the single best summary of the 2021 E&M coding guidelines for selecting a level?",
      options: [
        "The level is based solely on time spent with the patient.",
        "The level is based solely on the number of diagnoses listed.",
        "The level is based on time OR medical decision-making complexity, whichever supports a higher level.",
        "The level is determined by the most complex procedure performed during the visit.",
        "The level is set by the patient's insurance plan."
      ],
      correctAnswer: 2,
      rationale: "Under the 2021 E&M guidelines, the physician selects the level based on either total time on the date of service OR the level of medical decision-making (MDM)—whichever supports the higher code. The three pillars of MDM are: number/complexity of problems addressed, amount/complexity of data reviewed, and risk of complications. Hitting one pillar at the highest tier (e.g., high MDM) is sufficient for level 5."
    },
    {
      question: "A physician's office is audited and the auditor finds that the billed OMT CPT code (98927, 5–6 regions) does not match the chart, which lists somatic dysfunctions for only 3 regions. Which of the following statements is most accurate?",
      options: [
        "No issue—98927 may still be billed because the physician treated whatever dysfunctions were present at the time.",
        "The physician will be required to repay the difference between 98927 and 98925, and may face civil penalties; the lack of documentation makes the higher level unsupported.",
        "The error falls on the billing company, and the physician is not legally responsible.",
        "Insurance companies cannot audit OMT billing, so the discrepancy is not enforceable.",
        "The physician should add the missing somatic dysfunctions to the chart now to bring documentation in line with the bill."
      ],
      correctAnswer: 1,
      rationale: "The bill must be supported by what is documented in the chart at the time of the encounter. If the chart only documents 3 regions, only 98926 is justifiable—not 98927. The physician would owe the insurance company the difference, and a pattern of unsupported upcoding can lead to civil penalties or license action. Crucially, the physician is responsible even when a billing company submits the claim, and amending the chart after the fact to match the bill is itself a serious compliance violation."
    }
  ],
  flashcards: [
    { front: "What does **ICD-10** stand for, and what does it code?", back: "**International Classification of Diseases, 10th revision.** It codes **diagnoses** (the *why* of a visit).", tag: "Billing" },
    { front: "What does **CPT** stand for, and what does it code?", back: "**Current Procedural Terminology.** It codes **procedures** (the *what* you did, including OMT, biopsies, surgery).", tag: "Billing" },
    { front: "What is **E&M**, and how does it relate to CPT?", back: "**Evaluation and Management.** E&M codes are a **subset of CPT** specifically for office visit billing (codes 99201–99215).", tag: "Billing" },
    { front: "What is the **golden rule** of billing?", back: "**If it isn't documented, you can't code for it.** The chart is the only defense in an audit.", tag: "Billing" },
    { front: "Why can a somatic dysfunction code never be the primary diagnosis on an office visit claim?", back: "**A somatic dysfunction does not justify an office visit.** The chief medical complaint (e.g., migraine, low back pain, hypertension) must be listed first; somatic dysfunctions are supplementary.", tag: "Billing" },
    { front: "What is the ICD-10 code family for somatic dysfunctions?", back: "**M99.0X**, where X selects the body region (M99.00 head, M99.01 cervical, M99.02 thoracic, M99.08 ribcage, etc.).", tag: "Billing" },
    { front: "Which body region does an OA (occipitoatlantal) dysfunction code under?", back: "**M99.00 — head.** OA is part of the cranial/head region for billing purposes.", tag: "Billing" },
    { front: "What is the OMT CPT code for treatment covering 3–4 body regions?", back: "**98926.** The ladder: 98925 (1–2), 98926 (3–4), 98927 (5–6), 98928 (7–8), 98929 (9–10).", tag: "Billing" },
    { front: "What is the **-25 modifier** and when is it required?", back: "It signals that an **E&M and a procedure** were both performed during the **same visit**, marking the procedure as a separate distinct service. Required for same-day E&M + OMT; not required if the procedure is on a different date.", tag: "Billing" },
    { front: "What CPT code range covers **established patient** office visits?", back: "**99211–99215** (level 1 through level 5).", tag: "Billing" },
    { front: "What CPT code range covers **new patient** office visits?", back: "**99201–99205** (level 1 through level 5).", tag: "Billing" },
    { front: "Under 2021 guidelines, what two factors can independently support a level-5 E&M?", back: "**(1)** High medical decision-making complexity, **OR** **(2)** total time ≥40 min for established / ≥60 min for new patient. Either alone is sufficient.", tag: "Billing" },
    { front: "What are the **three pillars of medical decision-making (MDM)**?", back: "**(1)** Number and complexity of problems addressed; **(2)** amount and complexity of data reviewed; **(3)** risk of complications, morbidity, or mortality.", tag: "Billing" },
    { front: "What does **OPQRSTA** capture in the SOAP subjective?", back: "**O**nset, **P**rovocation/Palliation, **Q**uality, **R**adiation, **S**everity, **T**iming, **A**ssociated symptoms.", tag: "Billing" },
    { front: "Who is ultimately responsible for billing accuracy when a physician outsources billing to a third-party company?", back: "**The physician.** The licensee signs the agreements; audit findings, repayment demands, and license consequences fall on the physician—not the billing vendor.", tag: "Billing" }
  ],
  pearls: [
    { title: "If It Isn't Documented, It Didn't Happen", content: "The chart is the only thing that exists in an audit. A treatment that was 'definitely performed' but not written down might as well have never been done. Document at the time, not later." },
    { title: "Order the Assessments Correctly", content: "Medical diagnosis first (the reason the patient came in). Somatic dysfunction codes after. A claim that puts M99.0X before the medical ICD-10 reads to the insurer as 'this office visit was for osteopathic treatment alone'—and that is not a billable reason for an E&M." },
    { title: "The -25 Modifier or Bust", content: "Same-day E&M + procedure without -25 = denial of one of the two codes, every time. This is the single most common preventable OMT billing error." },
    { title: "Body Regions Set the Money", content: "Every region you bill on the OMT CPT must appear by name in the structural exam AND have a documented technique applied to it in the plan. A sloppy exam section costs you a CPT level (and tens of dollars per visit, every visit, for years)." },
    { title: "Underbilling Is Also Malpractice-Adjacent", content: "Routinely billing a level 2 when the work was a level 4 is not just leaving money on the table—it skews quality data, undervalues the practice, and can be flagged as a pattern in audits the same way upcoding can be. Bill what you actually did." },
    { title: "You Are Responsible for the Billing Vendor", content: "Outsourcing billing to a company doesn't outsource liability. Spot-check the claims being submitted under your NPI. If the vendor upcodes systematically, the OIG will be at your office, not theirs." }
  ]
});
