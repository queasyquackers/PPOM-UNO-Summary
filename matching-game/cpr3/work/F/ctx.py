import re, sys
n, pat = sys.argv[1], sys.argv[2]
w = int(sys.argv[3]) if len(sys.argv) > 3 else 400
src = sys.argv[4] if len(sys.argv) > 4 else 'transcript'
s = open(rf'E:\PPOM-UNO-Summary\_pipeline\CV{n}\{src}.txt', encoding='utf-8').read()
s = re.sub(r'\s+', ' ', s)
last = -10**9
for m in re.finditer(pat, s, re.I):
    if m.start() - last < w: continue
    last = m.start()
    print('...' + s[max(0, m.start()-w):m.end()+w] + '...\n')
