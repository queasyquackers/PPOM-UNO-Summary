from apply import *
d=load()
sub(d,10,'workup','; normal PFTs and V/Q scan; BMPR2 mutation.','; normal PFTs and V/Q scan.')
sub(d,19,'workup','; DNA: heterozygous G1691A (Arg506Gln) point mutation.','.')
sub(d,22,'workup','; MTTP mutation.','.')
sub(d,23,'workup','; NPC1 gene mutation;',';')
sub(d,24,'workup','; ABCA1 mutation.','.')
c=d['correlates'][25]
old=c['workup']
c['workup']='LDL 128, HDL 52, TG 110 mg/dL; TSH, glucose and A1c normal; a separate assay finds 210 nmol/L (high >125) of an LDL-like particle carrying an extra plasminogen-like glycoprotein; the level is genetically set and barely moves with diet.'
print('25 workup',len(c['workup']))
c=d['correlates'][26]
c['presentation']='7-year-old boy with his third bout of severe upper-abdominal pain and vomiting since age 3, each after a fatty meal; his sister has had similar attacks. Crops of small yellow papules with red rims on the buttocks and elbows; liver and spleen enlarged. Lean, no diabetes; parents healthy.'
print('26 pres',len(c['presentation']))
save(d)
