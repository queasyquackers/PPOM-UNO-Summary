from vedit import Editor
ed = Editor()
ed.replace("Hand-foot-mouth disease", "presentation",
           "painful ulcers inside the mouth;", "painful oral ulcers;",
           "qa leak rule: 'mouth' is in the answer's name; slide wording 'painful oral ulcers' used instead.",
           "CV129 slide 7")
ed.save("Batch 6 - qa fix")
