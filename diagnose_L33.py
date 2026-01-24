
import os

filepath = r"c:\Users\quazi\Downloads\PPOM-UNO-Summary\content\L33_content.js"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Scanning {filepath}...")
found = False
for i, line in enumerate(lines):
    if '|' in line or '->' in line or '\\to' in line or '||' in line:
        print(f"Line {i+1}: {line.strip()}")
        found = True

if not found:
    print("No target patterns found.")
