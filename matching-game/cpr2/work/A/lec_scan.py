"""Count drug keyword mentions in each CPR2 lecture summary (content field only)."""
import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
ROOT = r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json'
LECS = [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 71, 72, 73, 74, 75, 76, 77, 78,
        82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
        104, 105, 106, 107, 108, 109, 110, 111, 112]
KW = {
 'Quinidine': r'quinidine', 'Procainamide': r'procainamide', 'Disopyramide': r'disopyramide',
 'Lidocaine': r'lidocaine', 'Mexiletine': r'mexiletine', 'Phenytoin': r'phenytoin',
 'Flecainide/propafenone': r'flecainide|propafenone|class ic\b', 'Amiodarone': r'amiodarone',
 'Dronedarone': r'dronedarone', 'Sotalol': r'sotalol', 'Dofetilide/ibutilide': r'dofetilide|ibutilide',
 'Verapamil/diltiazem': r'verapamil|diltiazem|non-?dihydropyridine', 'DHP': r'amlodipine|felodipine|nifedipine|dihydropyridine',
 'Digoxin': r'digoxin|digitalis', 'Adenosine': r'adenosine', 'Magnesium': r'magnesium sulfate|iv magnesium|give magnesium|magnesium \(',
 'Ivabradine': r'ivabradine', 'Metoprolol grp': r'metoprolol|atenolol|bisoprolol|beta-1 selective|cardioselective',
 'Propranolol grp': r'propranolol|nadolol|timolol|nonselective beta', 'Labetalol/carvedilol': r'labetalol|carvedilol',
 'Pindolol/acebutolol': r'pindolol|acebutolol', 'Esmolol': r'esmolol', 'Nebivolol': r'nebivolol',
 'Nitrates': r'nitroglycerin|isosorbide|nitrates?\b', 'Nitroprusside': r'nitroprusside', 'Ranolazine': r'ranolazine',
 'Trimetazidine': r'trimetazidine', 'Aspirin': r'aspirin', 'Clopidogrel': r'clopidogrel', 'Ticlopidine': r'ticlopidine',
 'Prasugrel': r'prasugrel', 'Ticagrelor': r'ticagrelor', 'Cangrelor': r'cangrelor',
 'GP2b3a': r'abciximab|eptifibatide|tirofiban|iib/iiia inhibitor', 'Cilostazol': r'cilostazol', 'Dipyridamole': r'dipyridamole',
 'ACEi': r'ace inhibitor|acei|lisinopril|enalapril|ramipril|captopril', 'ARB': r'\barbs?\b|losartan|valsartan|candesartan|sartan',
 'Aliskiren': r'aliskiren', 'ARNI': r'sacubitril|arni|neprilysin', 'Spironolactone': r'spironolactone',
 'Eplerenone/finerenone': r'eplerenone|finerenone', 'Loops': r'furosemide|bumetanide|torsemide|loop diuretic',
 'Ethacrynic': r'ethacrynic', 'Thiazides': r'thiazide|chlorthalidone|indapamide', 'SGLT2': r'sglt2|flozin',
 'Hydralazine': r'hydralazine', 'Dobutamine': r'dobutamine', 'Milrinone': r'milrinone', 'Dopamine': r'dopamine',
 'Vericiguat': r'vericiguat', 'Nesiritide': r'nesiritide', 'Conivaptan': r'conivaptan|vaptan',
 'Semaglutide': r'semaglutide|glp-1', 'Statins': r'statin', 'Resins': r'cholestyramine|colestipol|colesevelam|bile acid resin|bile acid sequestrant',
 'Niacin': r'niacin|nicotinic', 'Fibrates': r'fibrate|gemfibrozil|fenofibrate', 'Ezetimibe': r'ezetimibe',
 'PCSK9 mAb': r'alirocumab|evolocumab|pcsk9 inhibitor', 'Inclisiran': r'inclisiran', 'Lomitapide': r'lomitapide',
 'Omega-3': r'omega-3|icosapent|fish oil', 'Bempedoic': r'bempedoic', 'Evinacumab': r'evinacumab',
}
texts = {}
for n in LECS:
    p = os.path.join(ROOT, f'cv{n}.file.js')
    if not os.path.exists(p):
        continue
    s = open(p, encoding='utf-8').read()
    m = re.search(r'"content":\s*`(.*?)`,\s*"flashcards"', s, re.S)
    texts[n] = (m.group(1) if m else s).lower()
if __name__ == '__main__':
    for k, rx in KW.items():
      hits = []
      for n, t in texts.items():
          c = len(re.findall(rx, t))
          if c:
              hits.append(f'CV{n}:{c}')
      print(f'{k:24s} ' + ' '.join(hits))
