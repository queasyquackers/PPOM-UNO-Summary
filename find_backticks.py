
import re

file_path = "lectures_data.js"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.strip().endswith("\`"):
        print(f"Line {i+1}: {line.strip()}")
