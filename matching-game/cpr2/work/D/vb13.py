from vh import *
setb('Culture-negative endocarditis in a cat owner', 'micro',
     'Small, poorly staining gram-negative bacilli; facultative intracellular in red cells and endothelial cells; silver (Warthin-Starry) stain of excised valve shows clumped bacilli; high-titer IgG serology or valve PCR; carried by cats and their fleas')
setb('Culture-negative prosthetic valve endocarditis', 'micro',
     'Faintly staining thin gram-negative bacilli; extremely fastidious - grows only on buffered charcoal yeast extract agar with cysteine and iron, so routine blood bottles stay sterile; facultative intracellular; lives in amoebae in warm water')
setb('Culture-negative prosthetic valve endocarditis', 'presentation',
     '70-year-old man with a bioprosthetic aortic valve placed 8 months ago at a hospital that later traced a cluster of lung infections to its hot-water system: 2 months of low-grade fevers, sweats, 4 kg weight loss. TEE: small mass on the prosthesis. Bottles sterile at day 7.')
c = corr('Cardiac myxoma')
c['presentation'] = c['presentation'].replace('louder sitting up and fades lying flat; no opening snap; no rheumatic fever history.', 'louder sitting up and fades lying flat; no rheumatic fever history.')
print(c['presentation'])
save()
