from vedit import Editor
ed = Editor()

ed.replace("Severe COVID-19 with ARDS", "management",
           "with PEEP of at least 5 cm H2O,", "with high PEEP,",
           "CV126 slide 48 teaches 'low tidal volume and high PEEP' (PEEP <5 raised mortality vs >16); "
           ">=5 is only the Berlin minimum.", "CV126 slides 37, 46-48")
for nm in ("COVID-19 at high risk of progression (outpatient)", "Hospitalized COVID-19, not mechanically ventilated"):
    it = ed.item(nm)
    ed.set(nm, "lectures", it["lectures"] + ["CV138"],
           "CV138 teaches SARS-CoV-2 treatment: remdesivir, Paxlovid, molnupiravir (slide 42, 45).",
           "CV138 slides 42/45, transcript l.1238-1242")
ed.replace("Mycoplasma pneumonia", "workup",
           "patchy bilateral interstitial infiltrates that look worse than the patient.",
           "patchy bilateral interstitial infiltrates.",
           "Stock phrase ('CXR looks worse than the patient') stacked with cold agglutinins on one card; kept the "
           "lab result, dropped the stock phrase.", "CV141 slide 72; CV130 slide 19")
ed.replace("Hansen disease (leprosy)", "presentation",
           "thick skin on cheeks and feet, sparse eyebrows, skin ulcers,",
           "thickened skin on the cheeks and feet, skin ulcers,",
           "Two classic signs stacked (thickened facial skin + eyebrow loss). Dropped the eyebrow loss; the "
           "slow skin nodules/plaques + ulcers + weakness after South America still point to one answer.",
           "CV128 transcript l.1717-1727, l.2708-2730")

ed.save("Batch 3 - CV126/CV150 COVID, buzzword trims (Mycoplasma, Hansen)")
