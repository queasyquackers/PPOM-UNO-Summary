import sys
n = sys.argv[1]
s = open(rf'E:\PPOM-UNO-Summary\content\json\cv{n}.file.js', encoding='utf-8').read()
i = s.find('"content": `'); j = s.find('`,\n  "flashcards"')
c = s[i+12:j]
a = int(sys.argv[2]) if len(sys.argv) > 2 else 0
b = int(sys.argv[3]) if len(sys.argv) > 3 else len(c)
sys.stdout.reconfigure(encoding='utf-8')
print(len(c)); print(c[a:b])
