from apply import *
d=load()
C=d['correlates']
C[43]['management']='SL nitroglycerin every 5 min up to 3 doses, then EMS; a beta-1-selective blocker first (no ISA agents such as acebutolol); add a CCB, long-acting nitrate or ranolazine; aspirin, high-intensity statin; revascularize if refractory.'
print(43,len(C[43]['management']))
save(d)
