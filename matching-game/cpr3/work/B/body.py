"""Write a lecture summary body (no practice Qs/flashcards) to scratchpad. usage: body.py 131"""
import re, sys
n = sys.argv[1]
txt = open(rf'E:\PPOM-UNO-Summary\content\json\cv{n}.file.js', encoding='utf-8').read()
m = re.search(r'"content": `(.*?)`,\s*\n\s*"', txt, re.S)
body = m.group(1) if m else txt
body = re.split(r'\n## Practice Questions', body)[0]
lines = [l for l in body.splitlines() if l.strip()]
out = rf'C:\Users\quazi\AppData\Local\Temp\claude\0850348823f5f1e4\db829c1d-8cc9-42e5-952f-e2d0621d9670\scratchpad\cv{n}.txt'
open(out, 'w', encoding='utf-8').write('\n'.join(lines))
print(out, len('\n'.join(lines)))
