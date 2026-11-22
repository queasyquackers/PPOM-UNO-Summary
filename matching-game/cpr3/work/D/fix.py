import json, sys
def fix(fn, name, field, old, new):
    p = json.load(open(fn, encoding='utf-8'))
    hit = False
    for it in p['correlates']:
        if it['name'] == name:
            assert old in it[field], (name, old)
            it[field] = it[field].replace(old, new); hit = True
    assert hit, name
    json.dump(p, open(fn, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
