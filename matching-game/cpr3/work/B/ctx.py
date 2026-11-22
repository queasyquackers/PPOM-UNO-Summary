"""Print headings + correlate blocks of a lecture summary. usage: ctx.py 129 [full]"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')
n = sys.argv[1]
mode = sys.argv[2] if len(sys.argv) > 2 else 'corr'
txt = open(rf'E:\PPOM-UNO-Summary\content\json\cv{n}.file.js', encoding='utf-8').read()
m = re.search(r'"content": `(.*)`', txt, re.S)
body = m.group(1) if m else txt
if mode == 'full':
    print(body); sys.exit()
if mode == 'heads':
    for line in body.splitlines():
        if line.startswith('#'):
            print(line)
    sys.exit()
for b in re.findall(r':::correlate(.*?)\n:::', body, re.S):
    print('---', b.strip()[:3000])
