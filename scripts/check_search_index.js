// Decay check for generated indexes (search + concepts).
//
// Fails (exit 1) if any index is missing, empty, malformed, or stale relative
// to content/json/. This is what catches the bug where someone adds new
// lectures and forgets to run `npm run build:search` / `npm run build:concepts`.
//
// Run with:  node scripts/check_search_index.js   (or `npm run check:search`)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const contentDir = path.join(repoRoot, 'content', 'json');
const searchIndexFile = path.join(repoRoot, 'lectures_search_index.js');
const conceptIndexFile = path.join(repoRoot, 'lectures_concept_index.js');

function fail(msg, hint) {
  console.error(`[check_search_index] FAIL: ${msg}`);
  if (hint) console.error(`  ${hint}`);
  process.exit(1);
}

function loadGlobal(file, globalName, regenerateHint) {
  if (!fs.existsSync(file)) fail(`${path.relative(repoRoot, file)} does not exist.`, regenerateHint);
  const code = fs.readFileSync(file, 'utf8');
  if (!code.trim()) fail(`${path.relative(repoRoot, file)} is empty.`, regenerateHint);
  const sb = { window: {} };
  vm.createContext(sb);
  try { vm.runInContext(code, sb); }
  catch (err) { fail(`could not parse ${path.relative(repoRoot, file)}: ${err.message}`, regenerateHint); }
  return sb.window[globalName];
}

function checkSearchIndex(expectedIds) {
  const idx = loadGlobal(searchIndexFile, 'SEARCH_INDEX', 'Run `npm run build:search`.');
  if (!Array.isArray(idx)) fail(`window.SEARCH_INDEX is not an array.`, 'Run `npm run build:search`.');
  if (idx.length === 0) fail(`search index is empty (0 entries).`, 'Run `npm run build:search`.');

  const indexedIds = new Set(idx.map(e => e.id));
  const missing = [...expectedIds].filter(id => !indexedIds.has(id));
  const orphaned = [...indexedIds].filter(id => !expectedIds.has(id));
  const empty = idx.filter(e => !e.content || e.content.length < 20).map(e => e.id);

  const problems = [];
  if (missing.length) problems.push(`${missing.length} lecture(s) missing from search index: ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? '…' : ''}`);
  if (orphaned.length) problems.push(`${orphaned.length} stale entry(s) in search index: ${orphaned.slice(0, 10).join(', ')}${orphaned.length > 10 ? '…' : ''}`);
  if (empty.length) problems.push(`${empty.length} search entry(s) have empty content: ${empty.slice(0, 10).join(', ')}${empty.length > 10 ? '…' : ''}`);
  if (problems.length) fail(problems.join('\n  '), 'Run `npm run build:search` to regenerate.');

  return idx.length;
}

function checkConceptIndex() {
  const idx = loadGlobal(conceptIndexFile, 'CONCEPT_INDEX', 'Run `npm run build:concepts`.');
  if (!idx || typeof idx !== 'object') fail(`window.CONCEPT_INDEX is not an object.`, 'Run `npm run build:concepts`.');
  if (!idx.concepts || typeof idx.concepts !== 'object') fail(`CONCEPT_INDEX.concepts missing.`, 'Run `npm run build:concepts`.');
  if (!idx.byLecture || typeof idx.byLecture !== 'object') fail(`CONCEPT_INDEX.byLecture missing.`, 'Run `npm run build:concepts`.');
  const conceptCount = Object.keys(idx.concepts).length;
  if (conceptCount === 0) fail(`concept index has 0 concepts.`, 'Run `npm run build:concepts`.');
  return { conceptCount, lectureCount: Object.keys(idx.byLecture).length };
}

function main() {
  if (!fs.existsSync(contentDir)) fail(`content directory not found: ${contentDir}`);
  const lectureFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.file.js'));
  const expectedIds = new Set(lectureFiles.map(f => f.replace(/\.file\.js$/, '')));

  const searchCount = checkSearchIndex(expectedIds);
  const { conceptCount, lectureCount } = checkConceptIndex();

  console.log(`[check_search_index] OK: search ${searchCount}/${lectureFiles.length}; concepts ${conceptCount} across ${lectureCount} lectures.`);
}

main();
