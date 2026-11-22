from vedit import Editor
ed = Editor()

# --- TB block / CV128 ---
ed.replace("Hansen disease (leprosy)", "management",
           "with two forms of contraception.",
           "with pregnancy tests and contraception.",
           "'two forms' is not in the lecture; CV128 says pregnancy tests plus adequate contraception",
           "CV128 transcript l.1991-2006")

# --- CV129 viruses ---
ed.set("Herpangina", "lectures", ["CV129"],
       "CV141 never mentions herpangina (only 'Coxsackie A can also cause pharyngitis')",
       "CV141 slides 39, transcript l.516-517")
ed.set("RSV bronchiolitis in an infant", "management",
       "Supportive: oxygen, nasal suction, fluids and feeding support; ribavirin only in select severe cases. "
       "Prevention for high-risk infants: a monoclonal antibody shot in the first RSV season, or vaccinating the mother in pregnancy.",
       "Monoclonals are preventive, not treatment (lecture lumps them as 'antiviral treatments'); ribavirin "
       "is on the CV129 slide but now rarely used - phrased so both are true. Maternal vaccine + first-season "
       "antibody are in the transcript.",
       "CV129 slide 19, transcript l.738-753")

# --- pertussis buzzword ---
ed.set("Pertussis", "presentation",
       "9-year-old fully vaccinated as an infant. Two weeks of runny nose and low fever, then 3 weeks of violent "
       "coughing fits that leave her red-faced and breathless, sometimes ending in vomiting; well between fits. "
       "T 37.2 C, RR 18, SpO2 98%; lungs clear.",
       "Buzzword stack: '15-20 rapid coughs then a loud high-pitched gasp on breathing in' (the whoop paraphrase) "
       "plus post-tussive vomiting. Kept the paroxysms + vomiting + catarrhal-then-paroxysmal timeline + waning "
       "immunity in a vaccinated school-age child; workup card carries the lymphocytosis.",
       "CV138 slide 16-17, transcript l.479-546")

ed.save("Batch 1 - TB block (CV127/128/131/132/138), CV129 viruses, pertussis")
