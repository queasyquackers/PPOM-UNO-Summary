window.receiveLectureContent({
  "metadata": {
    "id": "l169",
    "title": "Microbiology: Opportunistic Infections",
    "lecturer": "C. Abraham, M.D.",
    "session": "Lecture #169",
    "module": "Hematology",
    "readingTime": "25-30 min"
  },
  "resources": {
    "ankingResource": {
      "primarySource": "SketchyMicro",
      "chapter": "Fungal > Opportunistic Fungi",
      "alternatives": [
        { "resource": "Physeo", topic: "Microbiology" },
        { "resource": "First Aid", topic: "Microbiology > Virology" }
      ]
    },
    "anking": [
      { "match": "Pneumocystis jirovecii", "resources": "AnKing Step 1 v11: #SketchyMicro::03_Fungi::05_Opportunistic_Fungi::04_Pneumocystis_jirovecii" },
      { "match": "Toxoplasma gondii", "resources": "AnKing Step 1 v11: #SketchyMicro::02_Parasites::02_Protozoa::02_Toxoplasma_gondii" },
      { "match": "Cryptococcus neoformans", "resources": "AnKing Step 1 v11: #SketchyMicro::03_Fungi::05_Opportunistic_Fungi::03_Cryptococcus_neoformans" },
      { "match": "CMV and JC virus", "resources": "AnKing Step 1 v11: #FirstAid::Microbiology::Virology::HIV_OI" }
    ]
  },
  "summary": `
# Lecture #169: Opportunistic Infections in the Immunocompromised

**Lecturer:** C. Abraham, M.D.

## 1. Pneumocystis jirovecii (PCP) - CD4 < 200
*   **Clinical:** Subacute dry cough, dyspnea, fever. **Ground-glass opacities** on CXR.
*   **Diagnosis:** Silver stain (GMS) shows disk-shaped (cup/saucer) yeasts.
*   **Treatment:** **TMP-SMX**. Add **Corticosteroids** if pO2 < 70 mmHg or A-a gradient > 35.

## 2. CNS Infections - CD4 < 100
*   **Toxoplasma gondii:** 
    *   **Presentation:** Focal neuro deficits, seizures. 
    *   **Imaging:** **Multiple ring-enhancing lesions** (often in basal ganglia).
    *   **Treatment:** Pyrimethamine and Sulfadiazine.
*   **Cryptococcus neoformans:** 
    *   **Presentation:** Meningitis (fever, headache). 
    *   **Diagnosis:** India ink (clear halo), latex agglutination (polysaccharide capsule). 
    *   **Imaging:** **Soap bubble** lesions in basal ganglia.
*   **JC Virus (PML):** 
    *   **Presentation:** Rapidly progressive neuro decline. 
    *   **Imaging:** Non-enhancing white matter lesions (demyelination). No mass effect.

## 3. GI and Systemic Infections - CD4 < 50
*   **Cytomegalovirus (CMV):** 
    *   **Retinitis:** "Pizza pie" appearance (hemorrhage + exudates). 
    *   **Esophagitis:** Linear ulcerations (vs. punched out in HSV). 
    *   **Histology:** **Owl's eye** inclusions.
*   **Mycobacterium avium complex (MAC):** 
    *   **Clinical:** B-symptoms (fever, weight loss) + anemia/hepatosplenomegaly. 
    *   **Prophylaxis:** Azithromycin (only if not on ART).
*   **Cryptosporidium:** 
    *   **Clinical:** Chronic, profuse, watery diarrhea. 
    *   **Diagnosis:** Acid-fast oocysts in stool.

## 4. Vascular and Skin Lesions
*   **Kaposi Sarcoma (HHV-8):** Purple plaques/nodules. Histology: Spindle cells with slit-like vascular spaces.
*   **Bacillary Angiomatosis (*Bartonella henselae*):** Red-purple papules. Histology: **Neutrophilic** infiltrate (vs. lymphocytic in KS).

## 5. Other Vulnerabilities
*   **Neutropenia (< 500):** Risk of *Pseudomonas*, *Aspergillus*, *Candida*.
*   **Splenectomy:** Risk of encapsulated bacteria (*S. pneumoniae, H. influenzae, N. meningitidis*).
`,
  "questions": [
    {
      "id": 1,
      "question": "An HIV-positive patient with a CD4 count of 80 presents with a severe headache and fever. An MRI of the brain shows multiple 'soap bubble' lesions in the basal ganglia. What is the most appropriate next step in diagnosis?",
      "options": ["Brain biopsy", "Lumbar puncture for India ink and latex agglutination", "Serum Toxoplasma IgG", "Start empiric Pyrimethamine", "HIV viral load"],
      "correctAnswer": 2,
      "rationale": "Soap bubble lesions in the basal ganglia are characteristic of Cryptococcus neoformans. The diagnosis is confirmed via CSF analysis (lumbar puncture) looking for the polysaccharide capsule with India ink or latex agglutination."
    },
    {
      "id": 2,
      "question": "A patient with AIDS (CD4 = 40) presents with blurred vision and 'floaters.' Funduscopic exam reveals perivascular hemorrhages and fluffy white exudates described as a 'pizza pie' appearance. What is the treatment of choice?",
      "options": ["Fluconazole", "TMP-SMX", "Ganciclovir", "Azithromycin", "Pyrimethamine"],
      "correctAnswer": 3,
      "rationale": "The description matches CMV retinitis, which occurs in severely immunocompromised patients (CD4 < 50). Ganciclovir or Foscarnet is the standard treatment."
    },
    {
      "id": 3,
      "question": "An AIDS patient with CD4 = 150 presents with a dry cough and exertional dyspnea. An arterial blood gas shows a pO2 of 65 mmHg. He is started on TMP-SMX. What other medication should be added to his regimen?",
      "options": ["Azithromycin", "Prednisone", "Ganciclovir", "Fluconazole", "Amphotericin B"],
      "correctAnswer": 2,
      "rationale": "In patients with PCP, corticosteroids (Prednisone) are indicated if the pO2 is < 70 mmHg or the A-a gradient is > 35 mmHg to reduce the risk of respiratory failure from the inflammatory response to dying organisms."
    },
    {
      "id": 4,
      "question": "A patient with HIV develops several raised purple skin nodules. A biopsy shows spindle cells and extravasated red blood cells. What virus is associated with this condition?",
      "options": ["HIV-1", "HHV-6", "HHV-8", "EBV", "HPV-16"],
      "correctAnswer": 3,
      "rationale": "Kaposi Sarcoma is caused by Human Herpesvirus 8 (HHV-8). The biopsy findings of spindle cells and slit-like vascular spaces are classic."
    },
    {
      "id": 5,
      "question": "An AIDS patient with a CD4 count of 75 presents with seizures. Imaging shows multiple ring-enhancing lesions in the brain. He is started on empiric treatment for Toxoplasmosis. If the lesions do not improve with treatment, what is the most likely alternative diagnosis?",
      "options": ["PML (JC Virus)", "Primary CNS Lymphoma (EBV)", "Cryptococcosis", "Neurosyphilis", "Brain abscess"],
      "correctAnswer": 2,
      "rationale": "Primary CNS lymphoma is the most common CNS mass lesion in AIDS patients after Toxoplasmosis. It is associated with EBV and often presents as a single ring-enhancing lesion (though multiple can occur). If 'Toxo' treatment fails, biopsy for lymphoma is the next step."
    },
    {
      "id": 6,
      "question": "A patient with advanced AIDS develops chronic, profuse, watery diarrhea. A stool sample is sent for modified acid-fast staining, which shows red-stained oocysts. What is the pathogen?",
      "options": ["Giardia lamblia", "Entamoeba histolytica", "Cryptosporidium", "Salmonella", "Shigella"],
      "correctAnswer": 3,
      "rationale": "Cryptosporidium is a common cause of severe diarrhea in immunocompromised hosts. The acid-fast oocysts in stool are pathognomonic."
    },
    {
      "id": 7,
      "question": "Which of the following describes the imaging finding of PML caused by the JC virus?",
      "options": [
        "Multiple ring-enhancing lesions with mass effect",
        "Bilateral ground-glass opacities",
        "Non-enhancing white matter lesions without mass effect",
        "Single large lesion with midline shift",
        "Hydrocephalus with meningeal enhancement"
      ],
      "correctAnswer": 3,
      "rationale": "PML causes demyelination of subcortical white matter. On imaging, it appears as multi-focal, non-enhancing white matter lesions that lack mass effect (unlike Toxo or Lymphoma)."
    },
    {
      "id": 8,
      "question": "A patient who recently underwent a splenectomy is at highest risk for life-threatening sepsis from which of the following?",
      "options": ["Pseudomonas", "Aspergillus", "Streptococcus pneumoniae", "CMV", "Listeria"],
      "correctAnswer": 3,
      "rationale": "The spleen is essential for clearing encapsulated bacteria. Patients who are asplenic are at risk for Overwhelming Post-Splenectomy Infection (OPSI), primarily from S. pneumoniae, H. influenzae, and N. meningitidis."
    },
    {
      "id": 9,
      "question": "A patient with AIDS presents with painful swallowing (odynophagia). An endoscopy shows white, cottage-cheese like plaques on the esophageal mucosa. What is the most likely diagnosis?",
      "options": ["CMV esophagitis", "HSV esophagitis", "Candida esophagitis", "GERD", "Barrett's esophagus"],
      "correctAnswer": 3,
      "rationale": "Candida esophagitis is the most common cause of odynophagia in AIDS patients. It presents with white plaques that can be scraped off."
    },
    {
      "id": 10,
      "question": "A patient with HIV and a CD4 count of 20 presents with systemic symptoms, anemia, and hepatosplenomegaly. Blood cultures grow an acid-fast organism. What is the most likely pathogen?",
      "options": ["M. tuberculosis", "M. avium complex", "M. leprae", "Pneumocystis", "Nocardia"],
      "correctAnswer": 2,
      "rationale": "MAC causes disseminated disease in advanced AIDS (CD4 < 50). It is characterized by 'B-symptoms' and can be cultured from the blood, unlike typical TB."
    }
  ],
  "flashcards": [
    { "front": "What is the classic CXR finding for **PCP**?", "back": "Bilateral **ground-glass** opacities.", "tag": "Microbiology" },
    { "front": "Which CNS infection causes **ring-enhancing** lesions in AIDS?", "back": "**Toxoplasmosis**.", "tag": "Microbiology" },
    { "front": "What does a funduscopic **'pizza pie'** appearance indicate?", "back": "**CMV Retinitis**.", "tag": "Microbiology" },
    { "front": "What is the specific morphology of **Cryptococcus** on EM/stain?", "back": "Encapsulated yeast (India ink halo).", "tag": "Microbiology" },
    { "front": "Which AIDS-defining illness is caused by **HHV-8**?", "back": "**Kaposi Sarcoma**.", "tag": "Microbiology" },
    { "front": "What do **Birbeck granules** indicate?", "back": "**Langerhans Cell Histiocytosis** (Wait, wrong lecture, but good review! For 169: **Owl's Eye** = CMV).", "tag": "Pathology" }
  ],
  "pearls": [
    { "title": "PCP Steroids Rule", "content": "PaO2 < 70 = Prednisone. Dying bugs cause inflammation that kills the patient faster than the infection itself." },
    { "title": "Toxo vs Lymphoma", "content": "Toxo is usually multiple, basal ganglia, and responds to drugs. Lymphoma is usually single, periventricular, and doesn't." },
    { "title": "Encapsulated logic", "content": "No spleen = No protection against 'SHiN' (Strep pneumo, H. flu, Neisseria)." },
    { "title": "The JC Virus", "content": "PML = 'P'atches of 'M'essing up 'L'eukocytes (white matter). Demyelination without inflammation." }
  ]
});
