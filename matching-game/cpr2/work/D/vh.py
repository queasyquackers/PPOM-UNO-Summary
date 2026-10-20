"""Verifier helper: targeted edits to fragments/D.json.
Usage from a batch script:  from vh import *;  setb(disease, field, value); setc(name, field, value); save()
"""
import json, os, sys
FRAG = r'C:\Users\quazi\Downloads\PPOM-UNO-Summary\matching-game\cpr2\fragments\D.json'
D = json.load(open(FRAG, encoding='utf-8'))

def bug(disease):
    hits = [b for b in D['bugs'] if b['disease'] == disease]
    assert len(hits) == 1, ('bug not found', disease)
    return hits[0]

def corr(name):
    hits = [c for c in D['correlates'] if c['name'] == name]
    assert len(hits) == 1, ('correlate not found', name)
    return hits[0]

def setb(disease, field, value):
    b = bug(disease)
    if value is None:
        b.pop(field, None)
    else:
        b[field] = value

def setc(name, field, value):
    c = corr(name)
    if value is None:
        c.pop(field, None)
    else:
        c[field] = value

def save():
    with open(FRAG, 'w', encoding='utf-8') as f:
        json.dump(D, f, indent=2, ensure_ascii=False)
        f.write('\n')
    for b in D['bugs']:
        if len(b['presentation']) > 280:
            print('LONG bug P', b['disease'], len(b['presentation']))
    for c in D['correlates']:
        if len(c['presentation']) > 280:
            print('LONG corr P', c['name'], len(c['presentation']))
        for k in ('workup', 'management'):
            if k in c and len(c[k]) > 240:
                print('LONG corr', k, c['name'], len(c[k]))
    print('saved')
