import re

# Read lectures_data.js
with open('e:/PPOM-UNO-Summary/lectures_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the L59 object - need to match from id: 'l59' to the closing brace before next lecture or end
# Look for the pattern more carefully
start_idx = content.find("id: 'l59',")
if start_idx == -1:
    print("ERROR: Could not find L59 object")
    exit(1)

# Go backwards to find the opening brace
while start_idx > 0 and content[start_idx] != '{':
    start_idx -= 1

# Now find the matching closing brace
# We need to count braces
brace_count = 0
end_idx = start_idx
in_string = False
escape_next = False
in_backtick = False

for i in range(start_idx, len(content)):
    char = content[i]
    
    # Handle escape sequences
    if escape_next:
        escape_next = False
        continue
    if char == '\\':
        escape_next = True
        continue
    
    # Handle backtick strings
    if char == '`' and not in_string:
        in_backtick = not in_backtick
        continue
        
    # Skip characters inside backtick strings
    if in_backtick:
        continue
    
    # Handle regular strings
    if char in ['"', "'"]:
        in_string = not in_string
        continue
        
    if in_string:
        continue
    
    # Count braces only outside strings
    if char == '{':
        brace_count += 1
    elif char == '}':
        brace_count -= 1
        if brace_count == 0:
            end_idx = i
            break

# Extract the L59 object
l59_object = content[start_idx:end_idx+1].strip()

# Create the file content
file_content = f"window.receiveLectureContent({l59_object});\n"

# Write to l59.file.js
with open('e:/PPOM-UNO-Summary/content/json/l59.file.js', 'w', encoding='utf-8') as f:
    f.write(file_content)

print("Successfully created l59.file.js")
print(f"File size: {len(file_content)} bytes")
print(f"Object extracted from position {start_idx} to {end_idx}")
