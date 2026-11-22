"""Verifier edit helper for fragment D. Applies edits and appends each to verify_log.md.

usage (from a batch script):
    from vedit import Editor
    ed = Editor()
    ed.replace(name, field, old, new, reason, source)
    ed.set(name, field, value, reason, source)      # value None deletes the field
    ed.save()
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
FRAG = os.path.join(HERE, '..', '..', 'fragments', 'D.json')
LOG = os.path.join(HERE, 'verify_log.md')


class Editor:
    def __init__(self):
        with open(FRAG, encoding='utf-8') as f:
            self.data = json.load(f)
        self.lines = []

    def item(self, name):
        for it in self.data['correlates']:
            if it['name'] == name:
                return it
        raise KeyError(name)

    def _log(self, name, field, before, after, reason, source):
        self.lines.append(
            f"- **{name}** | `{field}`\n  - before: {json.dumps(before, ensure_ascii=False)}\n"
            f"  - after: {json.dumps(after, ensure_ascii=False)}\n  - reason: {reason}\n  - source: {source}\n")

    def replace(self, name, field, old, new, reason, source):
        it = self.item(name)
        cur = it[field]
        assert old in cur, (name, field, old)
        it[field] = cur.replace(old, new, 1)
        self._log(name, field, old, new, reason, source)

    def set(self, name, field, value, reason, source):
        it = self.item(name)
        before = it.get(field)
        if value is None:
            it.pop(field, None)
        else:
            it[field] = value
        self._log(name, field, before, value, reason, source)

    def save(self, header=None):
        for it in self.data['correlates']:
            for k in ('presentation', 'workup', 'management'):
                if k in it:
                    assert len(it[k]) <= (280 if k == 'presentation' else 240), (it['name'], k, len(it[k]))
        with open(FRAG, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=2)
            f.write('\n')
        with open(LOG, 'a', encoding='utf-8') as f:
            if header:
                f.write(f"\n## {header}\n\n")
            f.writelines(self.lines)
        print('saved', len(self.lines), 'edits')
