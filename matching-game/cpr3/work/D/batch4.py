from vedit import Editor
ed = Editor()

ed.set("Hansen disease (leprosy)", "management",
       "Dapsone (check G6PD; avoid with sulfa allergy) with rifampin and clofazimine (pink skin, QT; from a "
       "national program). Thalidomide for a severe painful nodular inflammatory reaction: pregnancy tests and "
       "two forms of birth control.",
       "CORRECTION of batch 1: 'two forms of birth control' IS in the CV128 Question Review transcript "
       "(l.2424-2431), with pregnancy tests at start and during therapy - restored; trimmed 'supplied through' "
       "to fit 240.", "CV128 transcript l.1991-2006, l.2424-2431; slide 42")
ed.set("Aspergilloma", "workup",
       "Chest CT: round solid mass inside an old right upper lobe cavity; the mass shifts when he lies prone. "
       "Culture: septate hyphae branching at acute angles; spores in radiating chains.",
       "CORRECTION of batch 2: mobility IS in CV137 (transcript l.384-385 'shift position in the cavity when a "
       "patient is moved'); the air-rim phrase is the banned air-crescent metaphor paraphrased. Kept the "
       "lecture's point, dropped the air rim - still one sign, not two.", "CV137 slide 10, transcript l.380-386")

ed.save("Batch 4 - corrections after re-reading Question Review / later transcript sections")
