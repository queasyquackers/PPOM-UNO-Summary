import re

# Read the file
with open('e:/PPOM-UNO-Summary/content/json/l59.file.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the specific quote issue on line 237
# Replace 'Do Not Use' with escaped version  
content = content.replace("'Do Not Use' list", '"Do Not Use" list')

# Write back
with open('e:/PPOM-UNO-Summary/content/json/l59.file.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed quote issue in l59.file.js")
