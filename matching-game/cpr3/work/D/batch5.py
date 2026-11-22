from vedit import Editor
ed = Editor()
R = "Strict rule (CV129/138/140): detail not on the slides or in the transcript of any in-scope lecture"

ed.set("Herpangina", "presentation",
       "4-year-old at a summer day camp with 1 day of fever and a sore throat; drinks little as swallowing hurts. "
       "T 39.4 C, HR 132; a dozen painful sores at the back of the mouth and throat only; gums, lips, palms and "
       "soles normal.",
       R + ": lesion morphology (vesicles with red rims) and the soft palate/uvula/pillars map are summary-only; "
       "CV129 says only 'sores in the back of the mouth and the throat along with a fever'. Posterior-only + no "
       "hand/foot rash still separates it from HFMD.", "CV129 transcript l.157-164; cv129.file.js")
ed.replace("Hand-foot-mouth disease", "presentation",
           "shallow painful ulcers on the tongue and buccal mucosa; tender, non-itchy red macules and small "
           "vesicles on the palms and soles.",
           "painful ulcers inside the mouth; non-itchy red spots and small blisters on the palms and soles.",
           R + ": 'tender' and the tongue/buccal map are not in CV129 (slide: non-pruritic rash of hands and feet, "
           "painful oral ulcers; transcript: vesicular rash).", "CV129 slide 7, transcript l.176-187")
ed.replace("Pharyngoconjunctival fever", "presentation",
           "both conjunctivae injected with small follicles;", "both conjunctivae red;",
           R + ": follicles not in CV129/CV141.", "CV129 slides 10-12, l.382-395; CV141 l.494-501")
ed.replace("Mumps", "presentation",
           "painful swelling in front of and below both ears that lifts the earlobes;",
           "painful swelling in front of and below both ears;",
           R + ": earlobe lift not in CV138 (slide: swollen parotid, maybe submaxillary/sublingual glands).",
           "CV138 slide 24, transcript l.716-738")
ed.set("Clostridioides difficile colitis", "presentation",
       "79-year-old woman, hospital day 9, on a broad-spectrum antibiotic for pneumonia. Three days of 8-10 "
       "watery, non-bloody stools a day. T 38.3 C, HR 106, BP 108/64; abdomen mildly distended and diffusely "
       "tender.",
       R + ": crampy lower abdominal pain and marked leukocytosis (WBC 24,000) are summary-only (cv138.file.js "
       "'lower abdominal crampy pain... leukocytosis 15,000-50,000'); CV138/CV140 teach antibiotic-associated "
       "secretory diarrhea/colitis in inpatients.", "CV138 l.148-209; CV140 slides 19-21, l.358-431")
ed.set("RSV bronchiolitis in an infant", "management",
       "Supportive care; ribavirin only in select severe cases. Prevention for high-risk infants: a monoclonal "
       "antibody shot in the first RSV season, or vaccinating the mother in pregnancy.",
       R + ": oxygen / nasal suction / feeding support are not in CV129 (slide: 'supportive').",
       "CV129 slide 19, transcript l.738-753")

ed.save("Batch 5 - strict-rule sweep of remaining CV129/138/140 vignettes")
