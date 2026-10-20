import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.dirname(__file__))
from lec_scan import KW, texts
CORE = {71, 72, 85, 96}
for k in sys.argv[1:]:
    rx = KW[k]
    for n, t in texts.items():
        if n in CORE: continue
        ms = list(re.finditer(rx, t))
        if not ms: continue
        snip = ' | '.join(t[max(0,m.start()-60):m.end()+40].replace('\n',' ') for m in ms[:1])
        print(f'{k} CV{n}: {snip}')
