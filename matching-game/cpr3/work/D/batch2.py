from vedit import Editor
ed = Editor()
S138 = "CV138 slides/transcript (strict-rule lecture)"

# ---------------- CV138 ----------------
ed.set("Cholera", "presentation",
       "Relief worker, 34, in a post-earthquake camp drinking untreated river water. Since yesterday: sudden painless, "
       "profuse watery diarrhea, pale gray with mucus flecks; no fever, no blood. T 36.9 C, HR 128, BP 78/44; "
       "sunken eyes, skin tenting.",
       "Summary-only details removed: 'a liter an hour', vomiting, leg cramps (not on CV138 slides/transcript).",
       "CV138 slides 18-19, transcript l.553-600")
ed.set("Cholera", "workup",
       "Stool: no white cells or blood; curved, oxidase-positive gram-negative rods grow on "
       "thiosulfate-citrate-bile salts-sucrose agar. K+ 2.8 mEq/L, HCO3- 14 mEq/L, creatinine 2.1 mg/dL.",
       "'yellow colonies' is not in CV138; replaced with the lecture's own ID (curved, oxidase+, TCBS).",
       "CV138 slide 18, transcript l.553-557")
ed.set("Cholera", "management",
       "Oral rehydration with electrolyte replacement - very treatable this way, against 25-50% mortality "
       "untreated. Reportable to the CDC.",
       "'IV if in shock' and 'deaths fall to few' are not in CV138; lecture: oral rehydration + electrolytes, "
       "mortality 25-50% without Tx, 'very treatable', reportable.",
       "CV138 slide 19, transcript l.585-604")
ed.set("Measles", "presentation",
       "Unvaccinated 4-year-old, 10 days after a crowded indoor party: 3 days of fever to 40.5 C, cough, runny "
       "nose, sore throat, red watery eyes and light sensitivity, then a dense red rash that starts on the face "
       "and spreads to the trunk, arms and legs.",
       "Buzzword stack: the buccal-spot description (Koplik paraphrase) on top of the 3 Cs and the face-down rash. "
       "Dropped the spots; constellation still points only to measles.",
       "CV138 slide 22, transcript l.669-692")
ed.replace("Measles", "management",
           "Airborne isolation (negative pressure, N95), since the virus lingers up to 2 hours; it is reportable.",
           "Airborne isolation (negative pressure, N95); the virus also survives on surfaces up to 2 hours. Reportable.",
           "Slide says the virus survives on SURFACES up to 2 h, not in air. Airborne precautions are from CV140 "
           "slide 17 (CV138 itself says droplet). Vitamin A kept: it IS in the CV138 transcript ('possibly vitamin A').",
           "CV138 slide 22-23, transcript l.708-715; CV140 slide 17, transcript l.328-337")
ed.set("Dengue", "presentation",
       "27-year-old back 5 days from a month in the Philippines, many mosquito bites. Sudden high fever, chills, "
       "malaise, severe headache, pain behind the eyes and intense pain in the back, joints, muscles and bones; "
       "a red rash. T 39.8 C, HR 104, BP 118/72.",
       "Rash site ('blotchy, trunk') is not in CV138; travel moved to an endemic area the lecture names.",
       "CV138 slide 28, transcript l.847-915")
ed.set("Dengue", "management",
       "Supportive only: there is no antiviral. Watch for the severe hemorrhagic form with shock and kidney "
       "failure, mainly on reinfection with a different serotype (15% mortality untreated, about 1% with "
       "supportive care).",
       "'No vaccine' is dated (lecture: 'no vaccine yet'; vaccines now licensed) - claim dropped so the card is "
       "true both ways. Shock/renal failure and reinfection risk are the lecture's words.",
       "CV138 slide 29, transcript l.873-931")
ed.replace("Ebola / Marburg virus disease", "management",
           "IV fluids and electrolytes, oxygen, blood-pressure support, antiemetics, fever and pain control, treat other infections; anti-glycoprotein monoclonal antibodies.",
           "IV fluids, electrolytes, oxygen, pressure support, antiemetics, fever and pain control, treat other infections; antibodies protect (monoclonals REGN-EB3, mAb114).",
           "'anti-glycoprotein' is not in CV138. Lecture names REGN-EB3/mAb114 as not approved/experimental (dated: "
           "both now FDA-approved) - card names them without calling them approved or experimental.",
           "CV138 slide 32, transcript l.984-1013")
ed.replace("Hantavirus pulmonary syndrome", "presentation",
           "fever, headache and aching thighs and back,", "fever, headache and muscle aches,",
           "Muscle groups not in CV138 (lecture: fever, headache, myalgias).",
           "CV138 slide 33, transcript l.1035-1036")
ed.set("Hantavirus pulmonary syndrome", "management",
       "Supportive care, usually in the ICU (oxygen, ventilatory support); up to 30% die. Caught by inhaling "
       "dust from deer mouse urine and droppings.",
       "'careful fluids' and 'avoid droppings in closed buildings' are not in CV138. Ribavirin still left out: "
       "lecture says 'some benefit', current evidence says no benefit - omitted so the card is true both ways.",
       "CV138 slide 33, transcript l.1014-1045")
ed.replace("Mumps", "workup",
           "PCR or viral culture of saliva can confirm.",
           "RT-PCR, viral culture or a 4-fold rise in IgG can confirm.",
           "'of saliva' is not in CV138; 4-fold IgG rise is on the slide.",
           "CV138 slide 25, transcript l.755-762")

# ---------------- CV138 lecture lists ----------------
for nm in ("Inhalational anthrax", "Pneumonic tularemia", "Legionella pneumonia"):
    it = ed.item(nm)
    ed.set(nm, "lectures", [x for x in it["lectures"] if x != "CV138"],
           "CV138 only lists it in the EID table (slide 5); transcript never mentions it - not taught.",
           "CV138 slide 5, transcript grep")
it = ed.item("VRE infection")
ed.set("VRE infection", "lectures", [x for x in it["lectures"] if x != "CV138"],
       "CV138 never mentions enterococci/VRE (only VRSA).", "CV138 slides + transcript grep")

# ---------------- CV140 ----------------
ed.replace("Clostridioides difficile colitis", "workup",
           "Colonoscopy: raised yellow-white plaques of fibrin and debris stuck to inflamed colonic mucosa.",
           "Colonoscopy: a membrane-like coat of plaques over inflamed colonic mucosa.",
           "Plaque color/composition not in CV140/138 (lecture: toxins cause necrosis and pseudomembranes covering "
           "the colon wall).", "CV140 slide 19, transcript l.358-373")
ed.replace("Candidemia (invasive candidiasis)", "workup",
           "germ tube forms at 37 C (no germ tube: suspect a fluconazole-resistant species).",
           "germ tubes form at 37 C.",
           "FACTUAL: 'no germ tube = fluconazole-resistant' is wrong (C. parapsilosis/tropicalis lack germ tubes "
           "and are usually fluconazole-susceptible). Lecture: albicans forms germ tubes at 37 C; glabrata "
           "azole-resistant.", "CV137 slide 7, CV140 slide 40")
ed.replace("Pseudomonas nosocomial infection", "management",
           "Resistance can emerge during about 10% of courses, so repeat cultures.",
           "It turns resistant during about 10% of courses.",
           "'so repeat cultures' is an inference not in CV140.", "CV140 transcript l.717-724; CV139 l.499-534")
it = ed.item("MRSA infection")
ed.set("MRSA infection", "lectures", it["lectures"] + ["CV131"],
       "CV131 teaches MRSA (slide 9: mecA, PVL, HAP/VAP organism).", "CV131 slides 4, 9, 30")
it = ed.item("Klebsiella pneumonia")
ed.set("Klebsiella pneumonia", "lectures", it["lectures"] + ["CV140"],
       "CV140 teaches Klebsiella pneumonia (upper lobe, thick bloody mucus, cavitation, mucoid capsule).",
       "CV140 slides 32-34, transcript l.745-804")

# ---------------- CV130 / CV141 / CV137 / CV136 ----------------
ed.replace("Epiglottitis", "workup",
           "Direct view in the OR: bright red, edematous supraglottic tissue. Blood culture: gram-negative "
           "coccobacilli growing on chocolate agar.",
           "Blood culture: gram-negative coccobacilli that grow on chocolate agar (need factors V and X).",
           "Buzzword stack: 'bright red' epiglottis (cherry-red paraphrase) on top of the thumb-sign paraphrase. "
           "Kept the film description + organism ID.", "CV130 slides 13-14; CV141 slide 50")
ed.replace("Pneumococcal pneumonia", "management",
           "Vaccinate against the encapsulated organism (no spleen); repeat in 5 years or at 65.",
           "Vaccinate against the encapsulated organism (no spleen).",
           "Revaccination schedule is not in any lecture (CV141 only names PPV23/PCV13) and is dated under current "
           "conjugate-vaccine schedules.", "CV141 slide 69")
ed.replace("Aspergilloma", "workup",
           " with a thin rim of air between mass and wall; the mass shifts when he lies prone.",
           " with a thin rim of air between mass and wall.",
           "Two famous signs stacked (air-crescent paraphrase + mobile ball). Kept one; mobility is not in CV137.",
           "CV137 slide 10")
for nm in ("Histoplasmosis", "Blastomycosis", "Primary pulmonary coccidioidomycosis",
           "Disseminated coccidioidomycosis"):
    it = ed.item(nm)
    ed.set(nm, "lectures", it["lectures"] + ["CV132"],
           "CV132 teaches the endemic mycoses (geography, yeast in macrophages, broad-based thick-walled yeast / "
           "suppurative granulomas, spherules; <1% disseminate to skin and meninges).", "CV132 slides 23, 28-31")

ed.save("Batch 2 - CV138 (strict), CV140 (strict), CV139/130/141/137/136 fixes and lecture lists")
