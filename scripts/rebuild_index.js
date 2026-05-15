// Canonical search-index generator for OnePass.
//
// Scans content/json/*.file.js, extracts each lecture's searchable text,
// and writes lectures_search_index.js (consumed by app.js for full-text search).
//
// Lecture files come in four shapes (mirroring app.js loadLectureContent):
//   1. window.receiveLectureContent({...})       — majority
//   2. window.contentData['lXXX'] = {...}        — l123, l124, l125
//   3. window.LXXX = {...}                       — l126-l129, l131, l132, l134, l135
//   4. window.lectureData = {...}                — l133
//
// Run with:  node scripts/rebuild_index.js   (or `npm run build:search`)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const contentDir = path.join(repoRoot, 'content', 'json');
const outputFile = path.join(repoRoot, 'lectures_search_index.js');

function extractFromSandbox(sandbox, fallbackId) {
  // Try each known shape in order.
  if (sandbox._captured) return sandbox._captured;

  if (sandbox.window.contentData && sandbox.window.contentData[fallbackId]) {
    return sandbox.window.contentData[fallbackId];
  }

  const numId = fallbackId.replace(/^l/i, '');
  const globalKey = 'L' + numId;
  if (sandbox.window[globalKey] && typeof sandbox.window[globalKey] === 'object') {
    return sandbox.window[globalKey];
  }

  if (sandbox.window.lectureData && typeof sandbox.window.lectureData === 'object') {
    return sandbox.window.lectureData;
  }

  return null;
}

function normalizeId(rawId, fallbackId) {
  if (rawId == null || rawId === '') return fallbackId;
  const numPart = String(rawId).replace(/^l/i, '');
  return 'l' + numPart;
}

function buildSearchableText(data) {
  // Mirror the field normalization app.js does, so the index reflects
  // what the user actually reads.
  const meta = data.metadata || {};
  const title = data.title || meta.title || '';
  const module = data.module || meta.module || '';
  const summary = data.summary || data.content || '';
  const mindmap = data.mindmap || data.mindMap || '';

  let text = `${title} ${module} ${summary} ${mindmap} `;

  const questions = data.questions || data.reviewQuestions || [];
  if (Array.isArray(questions)) {
    questions.forEach(q => {
      const stem = q.question || q.stem || q.questionText || '';
      const rationale = q.rationale || q.explanation || '';
      const opts = Array.isArray(q.options) ? q.options.join(' ') : '';
      text += `${stem} ${rationale} ${opts} `;
    });
  }

  const flashcards = data.flashcards || [];
  if (Array.isArray(flashcards)) {
    flashcards.forEach(f => {
      const front = f.front || f.q || '';
      const back = f.back || f.a || '';
      text += `${front} ${back} `;
    });
  }

  const pearls = data.pearls || [];
  if (Array.isArray(pearls)) {
    pearls.forEach(p => {
      text += `${p.title || ''} ${p.content || ''} `;
    });
  }

  return text.replace(/\s+/g, ' ').replace(/"/g, "'").trim();
}

function main() {
  if (!fs.existsSync(contentDir)) {
    console.error(`[rebuild_index] Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.file.js'));
  console.log(`[rebuild_index] Scanning ${files.length} files in ${contentDir}`);

  const searchIndex = [];
  const failures = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fallbackId = file.replace(/\.file\.js$/, '');
    const code = fs.readFileSync(filePath, 'utf8');

    try {
      const sandbox = {
        window: {
          // Shape 1: receiveLectureContent callback
          receiveLectureContent: (data) => { sandbox._captured = data; },
        },
        console: { log() {}, warn() {}, error() {} },
        _captured: null,
      };
      vm.createContext(sandbox);
      vm.runInContext(code, sandbox);

      const data = extractFromSandbox(sandbox, fallbackId);
      if (!data) {
        failures.push({ file, reason: 'no recognized content shape found' });
        continue;
      }

      const meta = data.metadata || {};
      const id = normalizeId(data.id || meta.id, fallbackId);
      const title = (data.title || meta.title || 'Untitled').replace(/\*\*/g, '');
      const module = data.module || meta.module || 'Unknown';
      const content = buildSearchableText(data);

      if (!content || content.length < 20) {
        failures.push({ file, reason: `extracted content too short (${content.length} chars)` });
        continue;
      }

      searchIndex.push({ id, title, module, content });
    } catch (err) {
      failures.push({ file, reason: err.message });
    }
  }

  searchIndex.sort((a, b) => {
    const numA = parseInt(String(a.id).replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(String(b.id).replace(/\D/g, ''), 10) || 0;
    return numA - numB;
  });

  fs.writeFileSync(outputFile, `window.SEARCH_INDEX = ${JSON.stringify(searchIndex)};`);
  console.log(`[rebuild_index] Indexed ${searchIndex.length}/${files.length} lectures -> ${path.relative(repoRoot, outputFile)}`);

  if (failures.length) {
    console.error(`[rebuild_index] ${failures.length} file(s) failed:`);
    failures.forEach(f => console.error(`  - ${f.file}: ${f.reason}`));
    process.exit(1);
  }
}

main();
