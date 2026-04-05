import sys
import re

def main():
    if len(sys.argv) < 3:
        print("Usage: python parse_srt.py <input.srt> <output.txt>")
        return
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    output = []
    current_para = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if re.match(r'^\d+$', line):
            continue
        if re.match(r'^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$', line):
            continue
        
        current_para.append(line)
        if len(current_para) > 10:
            output.append(' '.join(current_para))
            current_para = []
    if current_para:
        output.append(' '.join(current_para))
        
    with open(sys.argv[2], 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(output))

if __name__ == "__main__":
    main()
