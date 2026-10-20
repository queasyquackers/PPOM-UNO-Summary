from apply import *
d=load()
C=d['correlates']
C[41]['presentation']='14-year-old boy, 188 cm with an arm span of 196 cm, a mild learning disability and worsening nearsightedness; both lenses are partly dislocated. Now a swollen, painful left calf after a 1-hour car ride. An uncle had a stroke at 30. Joints not hypermobile; no murmur.'
C[41]['workup']='Plasma methionine 420 umol/L (normal <40) with low cystathionine and cystine; cystathionine beta-synthase activity low in cultured fibroblasts; ultrasound: left popliteal clot; echo: normal aortic root.'
for k in ('presentation','workup'): print(k,len(C[41][k]))
save(d)
