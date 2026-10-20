from apply import *
d=load()
sub(d,31,'workup','; lysosomal acid lipase activity absent in leukocytes; LIPA mutation.','; lysosomal acid lipase activity absent in leukocytes.')
C=d['correlates']
C[34]['workup']='Fasting glucose 108 mg/dL, A1c 5.9%, fasting insulin high; TG 190, HDL 36, LDL 128 mg/dL; ALT, TSH and urine albumin normal.'
print(34,len(C[34]['workup']))
save(d)
