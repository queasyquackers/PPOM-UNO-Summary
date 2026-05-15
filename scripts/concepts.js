// Curated list of high-yield clinical concepts that recur across multiple
// lectures. The build_concept_index.js script reads this, scans the search
// index for each concept's aliases, and emits lectures_concept_index.js.
//
// Adding a new concept: append an object with { key, label, category, aliases }.
// - key: kebab-case identifier (must be unique)
// - label: the canonical display name shown in the UI
// - category: free-form grouping label (currently used for sort/grouping)
// - aliases: lowercased substrings to match against lecture content.
//   Include singular/plural, possessive variants, common abbreviations.
//   Prefer specific aliases over short ones to avoid false positives.

module.exports = [
  // ── Eponymous syndromes / diseases ────────────────────────────────────────
  { key: "parkinsons", label: "Parkinson's Disease", category: "Neurology", aliases: ["parkinson's disease", "parkinson disease", "parkinson's", "parkinsonism"] },
  { key: "alzheimers", label: "Alzheimer's Disease", category: "Neurology", aliases: ["alzheimer's disease", "alzheimer disease", "alzheimer's"] },
  { key: "huntingtons", label: "Huntington's Disease", category: "Neurology", aliases: ["huntington's disease", "huntington's"] },
  { key: "horners-syndrome", label: "Horner's Syndrome", category: "Neurology", aliases: ["horner's syndrome", "horner syndrome", "horner's"] },
  { key: "wernicke-korsakoff", label: "Wernicke-Korsakoff Syndrome", category: "Neurology", aliases: ["wernicke-korsakoff", "wernicke's encephalopathy", "korsakoff"] },
  { key: "bells-palsy", label: "Bell's Palsy", category: "Neurology", aliases: ["bell's palsy", "bells palsy", "bell palsy"] },
  { key: "menieres", label: "Ménière's Disease", category: "Neurology", aliases: ["meniere's disease", "ménière's disease"] },
  { key: "hirschsprung", label: "Hirschsprung's Disease", category: "GI", aliases: ["hirschsprung's disease", "hirschsprung disease", "hirschsprung's", "hirschsprung"] },
  { key: "goodpasture", label: "Goodpasture Syndrome", category: "Immunology", aliases: ["goodpasture syndrome", "goodpasture's syndrome", "goodpasture"] },
  { key: "sjogrens", label: "Sjögren's Syndrome", category: "Immunology", aliases: ["sjogren's syndrome", "sjögren's syndrome", "sjogren", "sjögren"] },
  { key: "addisons", label: "Addison's Disease", category: "Endocrinology", aliases: ["addison's disease", "addison's"] },
  { key: "cushings", label: "Cushing's Syndrome", category: "Endocrinology", aliases: ["cushing's syndrome", "cushing's disease", "cushing's"] },
  { key: "graves", label: "Graves' Disease", category: "Endocrinology", aliases: ["graves' disease", "graves disease"] },
  { key: "hashimoto", label: "Hashimoto's Thyroiditis", category: "Endocrinology", aliases: ["hashimoto's thyroiditis", "hashimoto thyroiditis"] },
  { key: "crohns", label: "Crohn's Disease", category: "GI", aliases: ["crohn's disease", "crohn's"] },
  { key: "erbs-palsy", label: "Erb's Palsy", category: "Neurology", aliases: ["erb's palsy", "erbs palsy"] },
  { key: "klumpke", label: "Klumpke's Palsy", category: "Neurology", aliases: ["klumpke's palsy", "klumpke palsy", "klumpke's"] },
  { key: "kallmann", label: "Kallmann Syndrome", category: "Endocrinology", aliases: ["kallmann syndrome", "kallmann"] },
  { key: "tinel", label: "Tinel's Sign", category: "Neurology", aliases: ["tinel's sign", "tinel sign", "tinel's"] },
  { key: "phalen", label: "Phalen's Test", category: "Neurology", aliases: ["phalen's test", "phalen test", "phalen's"] },
  { key: "quervain", label: "De Quervain's Tenosynovitis", category: "MSK", aliases: ["quervain's tenosynovitis", "de quervain", "quervain"] },
  { key: "bruton", label: "Bruton's Agammaglobulinemia", category: "Immunology", aliases: ["bruton's agammaglobulinemia", "bruton agammaglobulinemia", "bruton's"] },
  { key: "guillain-barre", label: "Guillain-Barré Syndrome", category: "Neurology", aliases: ["guillain-barré", "guillain barre", "guillain-barre"] },
  { key: "ramsay-hunt", label: "Ramsay Hunt Syndrome", category: "Neurology", aliases: ["ramsay hunt", "ramsay-hunt"] },
  { key: "wallenberg", label: "Wallenberg Syndrome", category: "Neurology", aliases: ["wallenberg syndrome", "wallenberg", "lateral medullary syndrome"] },
  { key: "brown-sequard", label: "Brown-Séquard Syndrome", category: "Neurology", aliases: ["brown-séquard", "brown-sequard", "brown sequard"] },
  { key: "friedreich", label: "Friedreich's Ataxia", category: "Neurology", aliases: ["friedreich's ataxia", "friedreich ataxia"] },
  { key: "charcot-marie-tooth", label: "Charcot-Marie-Tooth", category: "Neurology", aliases: ["charcot-marie-tooth", "charcot marie tooth"] },
  { key: "sheehan", label: "Sheehan's Syndrome", category: "Endocrinology", aliases: ["sheehan's syndrome", "sheehan syndrome"] },

  // ── Diseases (non-eponymous) ──────────────────────────────────────────────
  { key: "multiple-sclerosis", label: "Multiple Sclerosis", category: "Neurology", aliases: ["multiple sclerosis"] },
  { key: "myasthenia-gravis", label: "Myasthenia Gravis", category: "Neurology", aliases: ["myasthenia gravis", "myasthenia"] },
  { key: "rheumatoid-arthritis", label: "Rheumatoid Arthritis", category: "Immunology", aliases: ["rheumatoid arthritis"] },
  { key: "sle", label: "Systemic Lupus Erythematosus (SLE)", category: "Immunology", aliases: ["systemic lupus erythematosus", "lupus"] },
  { key: "subarachnoid-hemorrhage", label: "Subarachnoid Hemorrhage", category: "Neurology", aliases: ["subarachnoid hemorrhage", "subarachnoid haemorrhage"] },
  { key: "autonomic-dysreflexia", label: "Autonomic Dysreflexia", category: "Neurology", aliases: ["autonomic dysreflexia"] },
  { key: "down-syndrome", label: "Down Syndrome", category: "Genetics", aliases: ["down syndrome"] },
  { key: "sickle-cell", label: "Sickle Cell", category: "Hematology", aliases: ["sickle cell"] },
  { key: "serotonin-syndrome", label: "Serotonin Syndrome", category: "Pharmacology", aliases: ["serotonin syndrome"] },
  { key: "neural-tube-defects", label: "Neural Tube Defects", category: "Embryology", aliases: ["neural tube defect", "neural tube defects"] },
  { key: "cauda-equina", label: "Cauda Equina Syndrome", category: "Neurology", aliases: ["cauda equina"] },
  { key: "bipolar", label: "Bipolar Disorder", category: "Psychiatry", aliases: ["bipolar disorder", "bipolar i", "bipolar ii"] },
  { key: "ptsd", label: "PTSD", category: "Psychiatry", aliases: ["ptsd", "post-traumatic stress disorder"] },
  { key: "scid", label: "Severe Combined Immunodeficiency (SCID)", category: "Immunology", aliases: ["severe combined immunodeficiency"] },
  { key: "siadh", label: "SIADH", category: "Endocrinology", aliases: ["siadh", "syndrome of inappropriate adh"] },
  { key: "thunderclap-headache", label: "Thunderclap Headache", category: "Neurology", aliases: ["thunderclap headache"] },
  { key: "increased-icp", label: "Increased Intracranial Pressure", category: "Neurology", aliases: ["increased intracranial pressure", "intracranial pressure"] },
  { key: "macular-sparing", label: "Macular Sparing", category: "Neurology", aliases: ["macular sparing"] },
  { key: "copd", label: "COPD", category: "Pulmonary", aliases: ["chronic obstructive pulmonary disease"] },
  { key: "adhd", label: "ADHD", category: "Psychiatry", aliases: ["attention-deficit", "attention deficit hyperactivity"] },
  { key: "gerd", label: "GERD", category: "GI", aliases: ["gastroesophageal reflux"] },
  { key: "mrsa", label: "MRSA", category: "Infectious Disease", aliases: ["methicillin-resistant", "mrsa"] },
  { key: "dress", label: "DRESS Syndrome", category: "Immunology", aliases: ["dress syndrome"] },

  // ── Anatomy ───────────────────────────────────────────────────────────────
  { key: "corticospinal-tract", label: "Corticospinal Tract", category: "Anatomy", aliases: ["corticospinal tract"] },
  { key: "spinothalamic-tract", label: "Spinothalamic Tract", category: "Anatomy", aliases: ["spinothalamic tract"] },
  { key: "dorsal-columns", label: "Dorsal Columns / DCML", category: "Anatomy", aliases: ["dorsal columns", "dorsal column", "dcml"] },
  { key: "basal-ganglia", label: "Basal Ganglia", category: "Anatomy", aliases: ["basal ganglia"] },
  { key: "substantia-nigra", label: "Substantia Nigra", category: "Anatomy", aliases: ["substantia nigra"] },
  { key: "internal-capsule", label: "Internal Capsule", category: "Anatomy", aliases: ["internal capsule"] },
  { key: "medial-lemniscus", label: "Medial Lemniscus", category: "Anatomy", aliases: ["medial lemniscus"] },
  { key: "nucleus-ambiguus", label: "Nucleus Ambiguus", category: "Anatomy", aliases: ["nucleus ambiguus"] },
  { key: "anterior-spinal-artery", label: "Anterior Spinal Artery", category: "Anatomy", aliases: ["anterior spinal artery"] },
  { key: "posterior-cerebral-artery", label: "Posterior Cerebral Artery (PCA)", category: "Anatomy", aliases: ["posterior cerebral artery"] },
  { key: "anterior-cerebral-artery", label: "Anterior Cerebral Artery (ACA)", category: "Anatomy", aliases: ["anterior cerebral artery"] },
  { key: "middle-cerebral-artery", label: "Middle Cerebral Artery (MCA)", category: "Anatomy", aliases: ["middle cerebral artery"] },
  { key: "basilar-artery", label: "Basilar Artery", category: "Anatomy", aliases: ["basilar artery"] },
  { key: "pica", label: "PICA (Post. Inferior Cerebellar Artery)", category: "Anatomy", aliases: ["posterior inferior cerebellar artery"] },

  // ── Neurochemistry ────────────────────────────────────────────────────────
  { key: "acetylcholine", label: "Acetylcholine", category: "Neurochemistry", aliases: ["acetylcholine"] },
  { key: "dopamine", label: "Dopamine", category: "Neurochemistry", aliases: ["dopamine"] },
  { key: "gaba", label: "GABA", category: "Neurochemistry", aliases: ["gaba"] },
  { key: "nmda", label: "NMDA Receptor", category: "Neurochemistry", aliases: ["nmda"] },
  { key: "serotonin", label: "Serotonin (5-HT)", category: "Neurochemistry", aliases: ["serotonin"] },
  { key: "norepinephrine", label: "Norepinephrine", category: "Neurochemistry", aliases: ["norepinephrine"] },

  // ── Drug classes ──────────────────────────────────────────────────────────
  { key: "nsaids", label: "NSAIDs", category: "Pharmacology", aliases: ["nsaids", "nsaid"] },
  { key: "ssris", label: "SSRIs", category: "Pharmacology", aliases: ["ssris", "ssri "] },
  { key: "snris", label: "SNRIs", category: "Pharmacology", aliases: ["snris", "snri "] },
  { key: "tcas", label: "Tricyclic Antidepressants (TCAs)", category: "Pharmacology", aliases: ["tricyclic antidepressant"] },
  { key: "maois", label: "MAOIs", category: "Pharmacology", aliases: ["maois", "maoi "] },
  { key: "dmards", label: "DMARDs", category: "Pharmacology", aliases: ["dmards"] },
  { key: "ivig", label: "IVIG", category: "Pharmacology", aliases: ["ivig"] },

  // ── Cells / Histology ─────────────────────────────────────────────────────
  { key: "neural-crest", label: "Neural Crest Cells", category: "Embryology", aliases: ["neural crest"] },
  { key: "schwann-cell", label: "Schwann Cells", category: "Histology", aliases: ["schwann cell"] },
  { key: "oligodendrocyte", label: "Oligodendrocytes", category: "Histology", aliases: ["oligodendrocyte"] },
  { key: "astrocyte", label: "Astrocytes", category: "Histology", aliases: ["astrocyte"] },
  { key: "microglia", label: "Microglia", category: "Histology", aliases: ["microglia"] },

  // ── Pathophys ─────────────────────────────────────────────────────────────
  { key: "hypersensitivity-i", label: "Type I Hypersensitivity", category: "Immunology", aliases: ["type i hypersensitivity", "type 1 hypersensitivity"] },
  { key: "hypersensitivity-ii", label: "Type II Hypersensitivity", category: "Immunology", aliases: ["type ii hypersensitivity", "type 2 hypersensitivity"] },
  { key: "hypersensitivity-iii", label: "Type III Hypersensitivity", category: "Immunology", aliases: ["type iii hypersensitivity", "type 3 hypersensitivity"] },
  { key: "hypersensitivity-iv", label: "Type IV Hypersensitivity", category: "Immunology", aliases: ["type iv hypersensitivity", "type 4 hypersensitivity"] },
];
