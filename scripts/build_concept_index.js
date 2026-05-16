// Build the cross-lecture concept index.
//
// Reads scripts/concepts.js (the curated concept list) and the search index,
// then for each concept checks which lectures contain any of its aliases.
// Emits lectures_concept_index.js for the browser:
//
//   window.CONCEPT_INDEX = {
//     concepts: { [key]: { label, category, lectures: [...] } },
//     byLecture: { [lectureId]: [conceptKey, ...] }
//   };
//
// Run with: node scripts/build_concept_index.js   (or `npm run build:concepts`)

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const searchIndexFile = path.join(repoRoot, 'lectures_search_index.js');
const outputFile = path.join(repoRoot, 'lectures_concept_index.js');
const concepts = require('./concepts.js');

function loadSearchIndex() {
  if (!fs.existsSync(searchIndexFile)) {
    console.error(`[build_concept_index] Missing ${searchIndexFile}. Run \`npm run build:search\` first.`);
    process.exit(1);
  }
  const sb = { window: {} };
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(searchIndexFile, 'utf8'), sb);
  if (!Array.isArray(sb.window.SEARCH_INDEX) || sb.window.SEARCH_INDEX.length === 0) {
    console.error(`[build_concept_index] Search index is empty. Run \`npm run build:search\` first.`);
    process.exit(1);
  }
  return sb.window.SEARCH_INDEX;
}

function main() {
  const searchIndex = loadSearchIndex();
  console.log(`[build_concept_index] Scanning ${searchIndex.length} lectures for ${concepts.length} concepts...`);

  const conceptsOut = {};
  const byLecture = {};
  const stats = { matched: 0, unmatched: [] };

  for (const c of concepts) {
    const aliases = (c.aliases || []).map(a => a.toLowerCase());
    if (aliases.length === 0) continue;
    const lectures = [];
    for (const lec of searchIndex) {
      const content = (lec.content || '').toLowerCase();
      if (aliases.some(a => content.includes(a))) lectures.push(lec.id);
    }
    if (lectures.length === 0) {
      stats.unmatched.push(c.key);
      continue;
    }
    // Natural sort by lecture number.
    lectures.sort((a, b) => {
      const na = parseInt(String(a).replace(/\D/g, ''), 10) || 0;
      const nb = parseInt(String(b).replace(/\D/g, ''), 10) || 0;
      return na - nb;
    });
    conceptsOut[c.key] = { label: c.label, category: c.category, lectures };
    stats.matched++;
    for (const id of lectures) {
      if (!byLecture[id]) byLecture[id] = [];
      byLecture[id].push(c.key);
    }
  }

  // Sort each lecture's concept list alphabetically by label for stable UI ordering.
  for (const id of Object.keys(byLecture)) {
    byLecture[id].sort((a, b) => conceptsOut[a].label.localeCompare(conceptsOut[b].label));
  }

  const payload = { concepts: conceptsOut, byLecture };
  fs.writeFileSync(outputFile, `window.CONCEPT_INDEX = ${JSON.stringify(payload)};`);

  const lectureCount = Object.keys(byLecture).length;
  console.log(`[build_concept_index] Matched ${stats.matched}/${concepts.length} concepts across ${lectureCount} lectures -> ${path.relative(repoRoot, outputFile)}`);
  if (stats.unmatched.length) {
    console.log(`[build_concept_index] ${stats.unmatched.length} concept(s) had zero matches (consider revising aliases or removing):`);
    stats.unmatched.forEach(k => console.log(`  - ${k}`));
  }
}

main();
