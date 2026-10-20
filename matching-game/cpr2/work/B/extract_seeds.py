import re, sys
base = r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\content\json'
out = open('seeds.txt', 'w', encoding='utf-8')
for n in [58,59,60,61,62,63,64,65,66,67,71,72,73,74,75,76]:
    txt = open(f'{base}\cv{n}.file.js', encoding='utf-8').read()
    blocks = re.findall(r':::correlate\n(.*?)\n:::', txt, re.S)
    out.write(f'\n######## CV{n} ({len(blocks)} blocks)\n')
    for b in blocks:
        out.write(b.strip() + '\n---\n')
out.close()
