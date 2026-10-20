from vh import *
setc('Centriacinar emphysema', 'presentation',
     '62-year-old man, 45 pack-years, stable at a clinic visit: 4 years of steadily worsening breathlessness, now after 1 flight of stairs; little cough or sputum; 6 kg weight loss over 2 years. BMI 19, RR 22, SpO2 95% on room air; hyperresonant chest, faint breath sounds, long expiration; no edema or cyanosis.')
setc('Chronic bronchitis', 'presentation',
     '58-year-old woman, 50 pack-years, 20 years in a textile mill: cough with grey-white sputum most mornings for at least 3 months every year for 5 years; three chest infections needing antibiotics in 2 years; breathless only recently. SpO2 86% at rest; scattered rhonchi and wheeze; mild ankle edema.')
setc('Acute rheumatic fever', 'presentation',
     '10-year-old boy recently arrived from Nepal had an untested sore throat 3 weeks ago. Now T 38.6 C and painful hot swelling that moved from right knee to left ankle to right wrist over 5 days, each joint settling as the next flared, and a new apical holosystolic murmur.')
setb('Acute rheumatic fever after untreated pharyngitis', 'presentation',
     '9-year-old girl, 3 months after an untreated sore throat: 4 weeks of clumsiness, dropping cups, crying spells, and quick involuntary jerks of the face and hands that vanish in sleep. New apical holosystolic murmur; afebrile; ESR 42 mm/h; no joint swelling.')
setc('Williams syndrome', 'presentation',
     '3-year-old boy, very chatty and friendly with strangers, with delayed speech and motor milestones and poor feeding as an infant: broad forehead, puffy eyes, full lips, wide mouth. Harsh systolic murmur at the right upper sternal border; irritable, constipated, thirsty.')
setc('Cardiac myxoma', 'presentation',
     '44-year-old woman: 3 months of dyspnea that worsens when she stands and eases lying down, two near-faints on standing, 5 kg weight loss, T 37.9 C, aching joints. Apical diastolic rumble that is louder sitting up and fades lying flat; no opening snap; no history of rheumatic fever.')
c = corr('Cardiac rhabdomyoma (tuberous sclerosis)')
c['presentation'] = c['presentation'].replace('three oval white patches on his back that glow under ultraviolet light', 'three oval pale patches on his back')
c = corr('Cardiac fibroma (Gorlin syndrome)')
c['presentation'] = c['presentation'].replace(', with small pits on his palms and a large head', ', with a large head')
save()
print(corr('Cardiac rhabdomyoma (tuberous sclerosis)')['presentation'])
print(corr('Cardiac fibroma (Gorlin syndrome)')['presentation'])
