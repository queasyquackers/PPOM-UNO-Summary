import re, sys, os
LECS = [116,117,118,119,120,121,126,127,128,129,130,131,132,136,137,138,139,140,141,142,143,146,147,148,149,150,151,152,153,155,156,157,159,160,161,162,163]
TERMS = {
 'Isoniazid': r'isoniazid|\bINH\b',
 'Rifampin': r'rifampin|rifampicin|\bRIF\b',
 'Rifabutin': r'rifabutin',
 'Rifapentine': r'rifapentine',
 'Pyrazinamide': r'pyrazinamide|\bPZA\b',
 'Ethambutol': r'ethambutol|\bEMB\b',
 'Aminoglycosides': r'aminoglycoside|amikacin|streptomycin|gentamicin|tobramycin',
 'Fluoroquinolones': r'fluoroquinolone|floxacin',
 'Ethionamide': r'ethionamide',
 'Cycloserine': r'cycloserine',
 'Linezolid': r'linezolid',
 'Bedaquiline': r'bedaquiline',
 'Pretomanid': r'pretomanid',
 'Azithromycin': r'azithromycin',
 'Clarithromycin': r'clarithromycin',
 'Erythromycin': r'erythromycin',
 'Dapsone': r'dapsone',
 'Clofazimine': r'clofazimine',
 'Thalidomide': r'thalidomide',
 'Oseltamivir': r'oseltamivir|tamiflu',
 'Zanamivir': r'zanamivir|relenza',
 'Peramivir': r'peramivir',
 'Baloxavir': r'baloxavir|xofluza',
 'Amantadine': r'amantadine',
 'Rimantadine': r'rimantadine',
 'Paxlovid': r'nirmatrelvir|paxlovid',
 'Remdesivir': r'remdesivir',
 'Molnupiravir': r'molnupiravir',
 'Tecovirimat': r'tecovirimat|TPOXX',
 'Vancomycin': r'vancomycin',
 'TMP-SMX': r'trimethoprim|bactrim|TMP|sulfamethoxazole',
 'Penicillin': r'penicillin|amoxicillin|ampicillin|augmentin',
 'Ceph3': r'ceftriaxone|cefotaxime|third.generation ceph|3rd.generation',
 'Carbapenem': r'carbapenem|imipenem|meropenem|ertapenem',
 'Doxycycline': r'doxycycline|tetracycline',
 'Metronidazole': r'metronidazole|flagyl',
 'AmphoB': r'amphotericin',
 'Fluconazole': r'fluconazole',
 'Itraconazole': r'itraconazole',
 'Voriconazole': r'voriconazole',
 'Albuterol': r'albuterol|\bSABA',
 'LABA': r'\bLABA|salmeterol|formoterol',
 'LAMA': r'\bLAMA|tiotropium|ipratropium|\bSAMA',
 'ICS': r'inhaled corticosteroid|\bICS\b|fluticasone|budesonide',
 'Montelukast': r'montelukast|leukotriene',
 'Omalizumab': r'omalizumab|anti.IgE',
 'Mepolizumab': r'mepolizumab|reslizumab|IL.5',
 'Heliox': r'heliox|helium',
 'SystemicSteroid': r'prednisone|methylprednisolone|systemic steroid|oral steroid|corticosteroid|glucocorticoid',
 'O2': r'supplemental oxygen|oxygen therapy|home oxygen|\bO2\b',
 'ACEi': r'ACE inhibitor|\bARB|lisinopril|losartan|angiotensin',
 'SGLT2': r'SGLT|gliflozin',
 'Thiazide': r'thiazide|hydrochlorothiazide|chlorthalidone',
 'Citrate': r'citrate',
 'Allopurinol': r'allopurinol',
 'Alpha': r'tamsulosin|alpha.?1? blocker|alpha.?blocker|alpha antagonist|terazosin|doxazosin',
 'Tiopronin': r'tiopronin|penicillamine',
 'NSAID': r'NSAID|ketorolac|ibuprofen|nonsteroidal',
 'Oxybutynin': r'oxybutynin|tolterodine|anticholinergic|antimuscarinic',
 'Estrogen': r'estrogen',
 'Botox': r'botulinum|botox',
 'Desmopressin': r'desmopressin|DDAVP',
 'Bicarb': r'bicarbonate',
 'Acetazolamide': r'acetazolamide|diamox|carbonic anhydrase inhibitor',
 'Fomepizole': r'fomepizole',
}
which = sys.argv[1:] or list(TERMS)
for k in which:
    rx = re.compile(TERMS[k], re.I)
    out = []
    for L in LECS:
        d = rf'E:\PPOM-UNO-Summary\_pipeline\CV{L}'
        cs = ct = 0
        for fn, tag in (('slides.txt','s'),('transcript.txt','t')):
            p = os.path.join(d, fn)
            if os.path.exists(p):
                n = len(rx.findall(open(p, encoding='utf-8', errors='ignore').read()))
                if tag == 's': cs = n
                else: ct = n
        if cs or ct:
            out.append(f'{L}(s{cs}/t{ct})')
    print(f'{k}: ' + ' '.join(out))
