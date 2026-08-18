"""Build a self-contained matching game from a block config + its dataset.

    python build.py            # rebuild every block in blocks/
    python build.py cpr1       # rebuild one block

Each blocks/<name>.json supplies the masthead strings, the localStorage key
prefix, the category/attribute map (CATS), and the input/output paths. The
engine in game_template.html is shared and knows nothing about any block.
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
BLOCKS = os.path.join(HERE, 'blocks')


def build(name):
    with open(os.path.join(BLOCKS, name + '.json'), encoding='utf-8') as fh:
        cfg = json.load(fh)
    with open(os.path.join(HERE, cfg['data']), encoding='utf-8') as fh:
        data = json.load(fh)
    with open(os.path.join(HERE, 'game_template.html'), encoding='utf-8') as fh:
        html = fh.read()

    # Every category declared in the config must exist in the dataset, or the
    # category picker renders a button that opens an empty round.
    missing = [k for k in cfg['cats'] if k not in data]
    if missing:
        raise SystemExit(f'{name}: dataset is missing categories {missing}')
    extra = [k for k in data if k not in cfg['cats']]
    if extra:
        print(f'  note: dataset has unused categories {extra}')

    # Inline the base64 web fonts (from embed_fonts.py) so the game is fully
    # self-contained and works offline with no external requests.
    fonts_path = os.path.join(HERE, 'fonts_embed.css')
    if os.path.exists(fonts_path):
        with open(fonts_path, encoding='utf-8') as fh:
            html = html.replace('/*__FONTS__*/', fh.read())
    else:
        print('WARNING: fonts_embed.css missing - run embed_fonts.py; '
              'game will fall back to system fonts')

    for key, field in [('__TITLE__', 'title'), ('__DESCRIPTION__', 'description'),
                       ('__ISSUE__', 'issue'), ('__SLOGAN__', 'slogan'),
                       ('__STORE__', 'store')]:
        html = html.replace(key, cfg[field])
    html = html.replace('__CATS__', json.dumps(cfg['cats'], ensure_ascii=False))
    # Compact JSON keeps the file small; safe to embed in a <script> block.
    html = html.replace('__MATCHING_DATA__',
                        json.dumps(data, ensure_ascii=False, separators=(',', ':')))

    out = os.path.join(ROOT, cfg['out'])
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write(html)
    print(f"{name}: wrote {cfg['out']} - {round(len(html) / 1024)} KB")
    print('  ' + ' · '.join(f'{k} {len(data[k])}' for k in cfg['cats']))


names = sys.argv[1:] or sorted(
    f[:-5] for f in os.listdir(BLOCKS) if f.endswith('.json'))
for n in names:
    build(n)
