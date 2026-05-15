// Decay check for lectures_search_index.js.
//
// Fails (exit 1) if any lecture in content/json/ is missing from the index,
// if any indexed entry has empty/near-empty content, or if the index file is
// itself empty/malformed. This is what catches the bug where someone adds new
// lectures and forgets to run `npm run build:search`.
//
// Run with:  node scripts/check_search_index.js   (or `npm run check:search`)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const contentDir = path.join(repoRoot, 'content', 'json');
const indexFile = path.join(repoRoot, 'lectures_search_index.js');

function fail(msg) {
  console.error(`[check_search_index] FAIL: ${msg}`);
  console.error(`  Run \`npm run build:search\` to regenerate.`);
  process.exit(1);
}

function loadIndex() {
  if (!fs.existsSync(indexFile)) fail(`${path.relative(repoRoot, indexFile)} does not exist.`);
  const code = fs.readFileSync(indexFile, 'utf8');
  if (!code.trim()) fail(`${path.relative(repoRoot, indexFile)} is empty.`);

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(code, sandbox);
  } catch (err) {
    fail(`could not parse ${path.relative(repoRoot, indexFile)}: ${err.message}`);
  }

  const idx = sandbox.window.SEARCH_INDEX;
  if (!Array.isArray(idx)) fail(`window.SEARCH_INDEX is not an array.`);
  if (idx.length === 0) fail(`index is empty (0 entries).`);
  return idx;
}

function main() {
  if (!fs.existsSync(contentDir)) fail(`content directory not found: ${contentDir}`);

  const lectureFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.file.js'));
  const expectedIds = new Set(lectureFiles.map(f => f.replace(/\.file\.js$/, '')));

  const index = loadIndex();
  const indexedIds = new Set(index.map(e => e.id));

  const missing = [...expectedIds].filter(id => !indexedIds.has(id));
  const orphaned = [...indexedIds].filter(id => !expectedIds.has(id));
  const empty = index.filter(e => !e.content || e.content.length < 20).map(e => e.id);

  const problems = [];
  if (missing.length) problems.push(`${missing.length} lecture(s) missing from index: ${missing.slice(0, 10).join(', ')}${missing.length > 10 ? '…' : ''}`);
  if (orphaned.length) problems.push(`${orphaned.length} stale entry(s) in index (no source file): ${orphaned.slice(0, 10).join(', ')}${orphaned.length > 10 ? '…' : ''}`);
  if (empty.length) problems.push(`${empty.length} entry(s) have empty/short content: ${empty.slice(0, 10).join(', ')}${empty.length > 10 ? '…' : ''}`);

  if (problems.length) fail(problems.join('\n  '));

  console.log(`[check_search_index] OK: ${index.length}/${lectureFiles.length} lectures indexed, all entries populated.`);
}

main();
