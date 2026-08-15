// Recompute readingTime for every entry in lectures_index.js based on the
// actual summary word count of each lecture file. Uses a 200 wpm estimate to
// match the in-app calculateReadingTime helper. Writes back numeric values
// so the renderer can no longer produce "13-16 min min".

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = process.cwd();
const indexFile = path.join(baseDir, 'lectures_index.js');

const WPM = 200;
const VERBOSE = process.argv.includes('--verbose');

function loadLectureSummary(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    let lectureData = null;
    // Use a Proxy for `window` so any assignment (e.g. window.contentData,
    // window.L123, window.lectureData) is captured. This handles the three
    // historical formats:
    //   1. window.receiveLectureContent({...})
    //   2. window.contentData['lXXX'] = {...}
    //   3. window.LXXX = {...}  /  window.lectureData = {...}
    const captured = {};
    const windowProxy = new Proxy({}, {
        set(target, prop, value) {
            target[prop] = value;
            captured[prop] = value;
            return true;
        },
        get(target, prop) {
            if (prop === 'receiveLectureContent') {
                return (data) => { lectureData = data; };
            }
            return target[prop];
        }
    });

    const sandbox = {
        window: windowProxy,
        console: { log() {}, warn() {}, error() {} }
    };
    vm.createContext(sandbox);
    try {
        vm.runInContext(code, sandbox);
    } catch (err) {
        return { error: err.message };
    }

    // Pattern 1: receiveLectureContent
    if (lectureData) {
        // Cardio (cv*) files put the markdown straight in `content` as a string;
        // older neuro files use `summary`, or nest it under `content.summary`.
        // Without the string case every cv lecture reported "empty summary" and
        // kept a stale readingTime.
        const summary = lectureData.summary
            || (typeof lectureData.content === 'string' ? lectureData.content : '')
            || (lectureData.content && lectureData.content.summary)
            || '';
        return { summary: String(summary) };
    }

    // Pattern 2/3: scan window.* assignments for lecture-shaped objects
    const candidates = [];
    for (const key of Object.keys(captured)) {
        const val = captured[key];
        if (!val || typeof val !== 'object') continue;
        // contentData is a map — drill into its values
        if (key === 'contentData') {
            for (const subKey of Object.keys(val)) {
                if (val[subKey] && typeof val[subKey] === 'object') {
                    candidates.push(val[subKey]);
                }
            }
        } else {
            candidates.push(val);
        }
    }

    for (const c of candidates) {
        // Possible places the prose body can live:
        //   c.summary                                 (newer files)
        //   c.content (string of markdown)            (l123-l125 contentData)
        //   c.content.summary (object with summary)   (alt nesting)
        //   c.metadata.summary
        //   c.sections (array of {content})           (some L126+ formats)
        let summary = '';
        if (typeof c.summary === 'string' && c.summary.length > 0) {
            summary = c.summary;
        } else if (typeof c.content === 'string' && c.content.length > 0) {
            summary = c.content;
        } else if (c.content && typeof c.content === 'object' && c.content.summary) {
            summary = String(c.content.summary);
        } else if (c.metadata && typeof c.metadata === 'object' && c.metadata.summary) {
            summary = String(c.metadata.summary);
        } else if (Array.isArray(c.sections)) {
            summary = c.sections
                .map(s => (s && typeof s === 'object') ? (s.content || s.body || s.text || '') : '')
                .join(' ');
        }
        if (summary) return { summary: String(summary) };
    }
    if (candidates.length > 0) {
        // Object existed but no summary field — return empty so it's flagged
        return { summary: '' };
    }
    return { error: 'no recognized lecture pattern' };
}

function wordCount(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
}

function computeMinutes(words) {
    if (words <= 0) return 1;
    return Math.max(1, Math.ceil(words / WPM));
}

function main() {
    const indexCode = fs.readFileSync(indexFile, 'utf8');
    let entries = null;
    const sandbox = {
        window: { receiveLectureIndex: (data) => { entries = data; } },
        console: { log() {}, warn() {}, error() {} }
    };
    vm.createContext(sandbox);
    vm.runInContext(indexCode, sandbox);
    if (!Array.isArray(entries)) {
        console.error('Could not parse lectures_index.js');
        process.exit(1);
    }

    let updated = 0;
    let missing = 0;
    const failures = [];
    for (const entry of entries) {
        const filePath = path.join(baseDir, entry.path || '');
        if (!entry.path || !fs.existsSync(filePath)) {
            missing++;
            failures.push({ id: entry.id, reason: 'path missing or file does not exist' });
            continue;
        }
        const result = loadLectureSummary(filePath);
        if (result.error) {
            missing++;
            failures.push({ id: entry.id, reason: result.error });
            continue;
        }
        const words = wordCount(result.summary);
        if (words === 0) {
            failures.push({ id: entry.id, reason: 'empty summary' });
        }
        const minutes = computeMinutes(words);
        if (entry.readingTime !== minutes) {
            entry.readingTime = minutes;
            updated++;
        }
    }

    const output = 'window.receiveLectureIndex(' + JSON.stringify(entries, null, 2) + ');\n';
    fs.writeFileSync(indexFile, output);

    console.log('Lectures scanned: ' + entries.length);
    console.log('Reading times updated: ' + updated);
    console.log('Issues: ' + failures.length);
    if (VERBOSE || failures.length > 0) {
        for (const f of failures) {
            console.log('  ' + f.id + ': ' + f.reason);
        }
    }
}

main();
