from apply import *
d=load()
sub(d,4,'workup','urine pH 5.0; urine Na+ + K+ - Cl- = -25 (negative: kidney NH4+ excretion intact); creatinine 1.4.',
    'urine pH 5.0; urine Na+ 12, K+ 30, Cl- 67 (Na+ + K+ - Cl- = -25: NH4+ excretion intact); BUN 34, creatinine 1.4.')
sub(d,7,'presentation','routine labs show a high K+ and he feels well.',
    'routine labs show K+ 6.1 although his eGFR is 42 and has been stable for years; he feels well.')
save(d)
