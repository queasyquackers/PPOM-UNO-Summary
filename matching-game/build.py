"""Inject merged data into the template to produce a self-contained HTML game."""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

with open(os.path.join(HERE, 'matching_data.json'), encoding='utf-8') as fh:
    data = json.load(fh)
with open(os.path.join(HERE, 'game_template.html'), encoding='utf-8') as fh:
    template = fh.read()

# Inline the base64 web fonts (from embed_fonts.py) so the game is fully
# self-contained and works offline with no external requests.
fonts_path = os.path.join(HERE, 'fonts_embed.css')
fonts_css = ''
if os.path.exists(fonts_path):
    with open(fonts_path, encoding='utf-8') as fh:
        fonts_css = fh.read()
else:
    print('WARNING: fonts_embed.css missing - run embed_fonts.py; '
          'game will fall back to system fonts')
html = template.replace('/*__FONTS__*/', fonts_css)

# Compact JSON keeps the file small; safe to embed in a <script> block.
payload = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
html = html.replace('__MATCHING_DATA__', payload)

out = os.path.join(ROOT, 'block4_matching_game.html')
with open(out, 'w', encoding='utf-8') as fh:
    fh.write(html)

print('wrote', out, '-', round(len(html) / 1024), 'KB')
print(' · '.join(f'{k} {len(v)}' for k, v in data.items()))
