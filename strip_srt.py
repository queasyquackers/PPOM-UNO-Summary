import re

def strip_srt(srt_file, output_file):
    with open(srt_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    text = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if re.match(r'^\d+$', line):
            continue
        if re.match(r'^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$', line):
            continue
        text.append(line)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(' '.join(text))

strip_srt(r'e:\PPOM-UNO-Summary\transcripts\Lecture #103_ Pathology of Skeletal Muscle Faculty_ W. Zaloga, D.O..srt', r'e:\PPOM-UNO-Summary\stripped_l103.txt')
