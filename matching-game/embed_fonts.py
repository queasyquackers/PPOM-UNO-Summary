"""Download the web fonts and write fonts_embed.css with base64 data-URIs.

Run once (needs internet). build.py then inlines fonts_embed.css so the
generated game HTML is fully self-contained and works offline.
"""
import base64
import os
import re
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36')
# Only the weights the game actually uses, latin subset only.
CSS_URL = ('https://fonts.googleapis.com/css2?'
           'family=EB+Garamond:wght@700&'
           'family=Inter:wght@600;700&'
           'family=Source+Serif+4:wght@400&display=swap')


def fetch(url, binary=False):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    return data if binary else data.decode('utf-8')


css = fetch(CSS_URL)
blocks = re.findall(r'/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{[^}]*\})', css)

faces = []
for subset, block in blocks:
    if subset != 'latin':
        continue
    m = re.search(r'src:\s*url\((https://[^)]+\.woff2)\)', block)
    if not m:
        continue
    woff2 = fetch(m.group(1), binary=True)
    b64 = base64.b64encode(woff2).decode('ascii')
    data_uri = f'src:url(data:font/woff2;base64,{b64}) format("woff2")'
    faces.append(re.sub(r'src:\s*url\([^)]+\)\s*format\([^)]+\)', data_uri, block))

out = '\n'.join(faces) + '\n'
with open(os.path.join(HERE, 'fonts_embed.css'), 'w', encoding='utf-8') as fh:
    fh.write(out)

print(f'embedded {len(faces)} font faces; fonts_embed.css = {len(out) / 1024:.0f} KB')
