import re

tags = set()
with open('Make it stop.txt', 'r', encoding='utf-8') as f:
    for line in f:
        lower_line = line.lower()
        if any(term in lower_line for term in ['spurling', 'cauda equina', 'straight leg', 'lhermitte', 'spondylolysis', 'camptocormia']):
            matches = re.findall(r'#AK_Step1_v11::[^\s\"\']+', line)
            for m in matches:
                tags.add(m)

for t in sorted(list(tags)):
    print(t)
