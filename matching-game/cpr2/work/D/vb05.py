from vh import *
setb('Acute Chagas disease', 'presentation',
     '6-year-old boy from rural Bolivia who sleeps in a mud-walled, thatched house: 10 days ago a firm, painless red swelling appeared on his cheek where something bit him in his sleep. Now T 38.3 C, HR 140, swollen nodes in front of that ear and hepatosplenomegaly.')
setb('Lyme carditis', 'presentation',
     '27-year-old woman hiked in Connecticut in June and pulled a small tick off her calf. 5 weeks later she is lightheaded with a left facial droop; HR 40. Telemetry shows the PR interval swinging from 0.32 s to complete block and back within minutes. No murmur.')
setc('Lyme carditis', 'presentation',
     '24-year-old man who hiked in Massachusetts in July: a red patch on his thigh spread to 15 cm 4 weeks ago, then faded untreated. Now 2 days of lightheadedness, fatigue and an aching knee. HR 38, BP 104/66; no murmur, no edema, no recent sore throat.')
# B. henselae -> endocarditis context
b = bug('Cat scratch disease')
b['disease'] = 'Culture-negative endocarditis in a cat owner'
b['micro'] = 'Small, poorly staining gram-negative bacilli; facultative intracellular in red cells and endothelial cells; Warthin-Starry silver stain of excised valve tissue shows clumped bacilli; diagnosed by high-titer IgG serology or valve PCR; carried by cats and their fleas'
b['presentation'] = '51-year-old woman with known mitral regurgitation who fosters kittens, with healed scratches on both hands: 3 months of low-grade fevers, fatigue and 6 kg weight loss. T 38.0 C, louder apical holosystolic murmur, spleen tip palpable. Six blood bottles show no growth; no farm animals, no lice.'
# B. quintana
b = bug('Trench fever with endocarditis')
b['disease'] = 'Culture-negative endocarditis in a homeless person with lice'
b['presentation'] = '48-year-old man living in a shelter with heavy alcohol use; lice in his clothing seams and scratched skin. 3 months of fevers, fatigue and 7 kg weight loss; new early diastolic murmur at the left sternal border; spleen tip palpable. Six blood bottles show no growth.'
# Legionella -> prosthetic valve IE context
b = bug('Severe atypical pneumonia in an older smoker')
b['disease'] = 'Culture-negative prosthetic valve endocarditis'
b['micro'] = 'Faintly staining thin gram-negative bacilli; extremely fastidious - grows only on buffered charcoal yeast extract agar with cysteine and iron, so routine blood bottles stay sterile; facultative intracellular; lives in amoebae in warm water systems'
b['presentation'] = '70-year-old man with a bioprosthetic aortic valve placed 8 months ago at a hospital that later traced a cluster of pneumonias to its hot-water system: 2 months of low-grade fevers, sweats, 4 kg weight loss. TEE: small mass on the prosthesis. Bottles sterile at day 7; no animal or louse exposure.'
b['lecture'] = 'CV105'; b['lectures'] = ['CV105']
# Coxiella: vary from the culture-negative correlate
setb('Q fever endocarditis', 'presentation',
     '60-year-old goat-dairy worker with a mechanical aortic valve placed 6 years ago: 6 months of night sweats, fatigue and 5 kg weight loss. T 37.9 C, finger clubbing, liver and spleen both palpable, mild paravalvular leak murmur. Three sets of blood bottles show no growth after 7 days.')
save()
