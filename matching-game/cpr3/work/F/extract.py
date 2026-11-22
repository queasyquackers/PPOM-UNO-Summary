import re, sys
for n in sys.argv[1:]:
    s = open(rf'E:\PPOM-UNO-Summary\content\json\cv{n}.file.js', encoding='utf-8').read()
    print(f'######## CV{n}')
    for m in re.finditer(r':::correlate(.*?)\n:::', s, re.S):
        print(m.group(1).strip()); print('--')
