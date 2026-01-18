
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const contentDir = path.join('e:', 'PPOM-UNO-Summary', 'content');
const outputFile = path.join('e:', 'PPOM-UNO-Summary', 'lectures_search_index.js');

function generateIndex() {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('_content.js'));
    const searchIndex = [];

    console.log(`Scanning ${files.length} files...`);

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        const code = fs.readFileSync(filePath, 'utf8');

        // Simple cleaner for export statement
        let cleanCode = code.replace(/export\s+const\s+(\w+)/g, 'var $1');

        try {
            const sandbox = { window: {}, console: console, exports: {} };
            vm.createContext(sandbox);
            vm.runInContext(cleanCode, sandbox);

            // Find content object
            const keys = Object.keys(sandbox).filter(k => k.endsWith('_CONTENT'));
            if (keys.length > 0) {
                const content = sandbox[keys[0]];

                // Construct searchable text blob
                let fullText = "";

                // Add Summary (stripped of markdown ideally, but raw is fine for search)
                if (content.summary) fullText += content.summary + " ";

                // Add Pearls
                if (content.pearls) {
                    content.pearls.forEach(p => fullText += `${p.title} ${p.content} `);
                }

                // Add Questions
                if (content.questions && Array.isArray(content.questions)) {
                    content.questions.forEach(q => {
                        fullText += `${q.question} ${q.rationale || q.explanation || ""} ${q.options ? q.options.join(" ") : ""} `;
                    });
                }

                // Add Flashcards
                if (content.flashcards) {
                    content.flashcards.forEach(f => fullText += `${f.front} ${f.back} `);
                }

                // Add Mindmap
                if (content.mindmap) fullText += content.mindmap + " ";

                searchIndex.push({
                    id: content.id,
                    title: content.title || "Untitled",
                    module: content.module || "Unknown",
                    content: fullText.replace(/\s+/g, ' ').trim() // Normalize whitespace
                });
            }
        } catch (err) {
            console.error(`Error processing ${file}: ${err.message}`);
        }
    }

    console.log(`Generated index with ${searchIndex.length} entries.`);

    // Write to file as a window global
    const outputContent = `window.SEARCH_INDEX = ${JSON.stringify(searchIndex)};`;
    fs.writeFileSync(outputFile, outputContent);
    console.log(`Wrote index to ${outputFile}`);
}

generateIndex();
