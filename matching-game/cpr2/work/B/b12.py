from apply import *
d=load()
C=d['correlates']
C[39]['presentation']='67-year-old man on a top-dose cholesterol pill for 3 years started clarithromycin for pneumonia 5 days ago; drinks grapefruit juice daily. Now his thighs and shoulders ache and are weak - he can barely rise from a chair - and his urine is tea-colored. Proximal muscles tender.'
C[39]['management']='Stop the cholesterol drug and clarithromycin; IV isotonic fluid for urine output ~200 mL/h; watch K+, Ca2+ and creatinine; after recovery retry a low-dose HMG-CoA reductase inhibitor not cleared by CYP3A4, or ezetimibe or bempedoic acid.'
for k in ('presentation','management'): print(k,len(C[39][k]))
save(d)
