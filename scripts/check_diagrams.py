"""Validate lecture_diagrams.js against the authoring rules, and cross-check
every :::diagram key::: directive used in the summaries.

    python scripts/check_diagrams.py

Exit 0 = clean, 1 = problems (printed). Run after editing diagrams.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_DIR = ROOT / "content" / "json"

# The shared stylesheet lives in lecture_diagrams.js; each lecture's diagrams
# live in their own file so they can be authored in parallel without conflicts.
REG_FILES = [ROOT / "lecture_diagrams.js"] + sorted(
    (ROOT / "content" / "diagrams").glob("*.diagrams.js")
)

problems = []
src = "\n".join(
    f.read_text(encoding="utf-8") for f in REG_FILES if f.exists()
)

# --- keys defined in the registry -----------------------------------------
defined = set(re.findall(r'window\.LECTURE_DIAGRAMS\["([^"]+)"\]', src))

# Split the file into per-diagram chunks so errors can name the key.
chunks = {}
marks = [(m.group(1), m.start()) for m in
         re.finditer(r'window\.LECTURE_DIAGRAMS\["([^"]+)"\]', src)]
for i, (key, pos) in enumerate(marks):
    end = marks[i + 1][1] if i + 1 < len(marks) else len(src)
    chunks[key] = src[pos:end]

for key, body in chunks.items():
    svgs = re.findall(r"<svg\b[^>]*>", body)
    if not svgs:
        problems.append(f"{key}: no <svg> element")
        continue
    for tag in svgs:
        if "viewBox" not in tag:
            problems.append(f"{key}: <svg> is missing viewBox (rule 3)")
        if re.search(r'\bwidth\s*=\s*"[^"]*"', tag) or re.search(r'\bheight\s*=\s*"[^"]*"', tag):
            problems.append(f"{key}: <svg> sets fixed width/height; let CSS scale it (rule 3)")
        if "role=" not in tag or "aria-label" not in tag:
            problems.append(f"{key}: <svg> needs role and aria-label for screen readers")

    # Rule 1: CSS animation only.
    for smil in ("<animate", "<animateTransform", "<animateMotion", "<set "):
        if smil in body:
            problems.append(f"{key}: uses SMIL ({smil.strip('<')}), not reliable on iPad - use CSS keyframes (rule 1)")
    if "setInterval" in body or "requestAnimationFrame" in body:
        problems.append(f"{key}: drives animation from JS; use CSS keyframes (rule 1)")

    # Rule 2: themed colors only.
    hexes = [h for h in re.findall(r"#[0-9a-fA-F]{3,8}\b", body)
             if not re.search(r'url\(\s*["\']?' + re.escape(h), body)]
    # ignore hex inside url(#gradientId) references and HTML entities (&#160;)
    hexes = [h for h in hexes if not re.match(r"#\d{2,4}$", h)]
    if hexes:
        problems.append(f"{key}: hardcoded colors {sorted(set(hexes))[:5]} - use var(--dg-*) (rule 2)")

    if ":hover" in body and "@media (hover" not in body:
        problems.append(f"{key}: has :hover styling - make sure nothing essential is hover-only (rule 4)")

    if "caption" not in body:
        problems.append(f"{key}: no caption - the diagram should explain itself in words too")

# --- directives used in summaries -----------------------------------------
used = {}
for f in sorted(JSON_DIR.glob("*.file.js")):
    text = f.read_text(encoding="utf-8", errors="ignore")
    for k in re.findall(r":::diagram\s+([a-z0-9\-]+)\s*:::", text, re.I):
        used.setdefault(k, []).append(f.name)

for k, files in sorted(used.items()):
    if k not in defined:
        problems.append(f"{k}: referenced by {', '.join(files)} but not defined in lecture_diagrams.js")

orphans = sorted(defined - set(used))

print(f"diagrams defined: {len(defined)}   referenced by summaries: {len(used)}")
if orphans:
    print(f"defined but unused: {orphans}")
if problems:
    print(f"\n{len(problems)} PROBLEM(S):")
    for p in problems:
        print("  -", p)
    sys.exit(1)
print("all diagram checks pass")
