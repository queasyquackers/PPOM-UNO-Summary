from apply import *
d=load()
C=d['correlates']
C[27]['presentation']='19-year-old man with 2 months of chest tightness when he runs; firm, painless nodules thicken both Achilles tendons. Father died of an MI at 41, grandfather at 50; his 14-year-old sister already takes a cholesterol pill. Nonsmoker, BMI 23, BP 118/72.'
print(27,len(C[27]['presentation']))
C[28]['presentation']='52-year-old man, BMI 31, type 2 diabetes diagnosed last year, coronary stent at 48; now calf pain after walking 2 blocks. Firm, bumpy yellow plaques over both elbows and knees; Achilles tendons normal. A screening panel showed cholesterol and triglycerides both near 400.'
print(28,len(C[28]['presentation']))
sub(d,29,'workup','serum clear after refrigeration (no chylomicron layer)','refrigerated serum evenly cloudy with no creamy top layer')
save(d)
