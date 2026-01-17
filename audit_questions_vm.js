
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const contentDir = path.join('e:', 'PPOM-UNO-Summary', 'content');

function audit() {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('_content.js'));
    let issuesFound = 0;
    let migrateCount = 0;

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        const code = fs.readFileSync(filePath, 'utf8');

        // Create a sandbox
        const sandbox = {
            window: {},
            console: console,
            exports: {}
        };

        // Handle "export const LXX_CONTENT = ..." by stripping "export"
        let cleanCode = code.replace(/export\s+const\s+(\w+)/g, 'var $1');

        try {
            vm.createContext(sandbox);
            vm.runInContext(cleanCode, sandbox);

            let content = null;
            const varName = file.replace('content.js', 'CONTENT').toUpperCase().replace('-', '_'); // Handle L1a_content -> L1A_CONTENT

            // Try explicit name or scan keys
            const keys = Object.keys(sandbox).filter(k => k.endsWith('_CONTENT'));
            if (keys.length > 0) {
                content = sandbox[keys[0]];
            }

            if (!content || !content.questions) {
                continue;
            }

            content.questions.forEach((q, idx) => {
                let migrate = false;
                let missing = false;

                // Normalization Check
                if (q.answer !== undefined && q.correctAnswer === undefined) migrate = true;
                if (q.explanation && !q.rationale) migrate = true;

                // Missing Data Check
                const hasAns = q.correctAnswer !== undefined || q.answer !== undefined;
                const hasExpl = q.rationale || q.explanation;

                if (!hasAns || !hasExpl) {
                    console.log(`[FAIL] ${file} Q${idx + 1}: MISSING DATA (HasAns: ${hasAns}, HasExpl: ${!!hasExpl})`);
                    issuesFound++;
                }

                if (migrate && hasAns && hasExpl) {
                    console.log(`[MIGRATE] ${file} Q${idx + 1}`);
                    migrateCount++;
                }
            });

        } catch (err) {
            console.error(`Error processing ${file}: ${err.message}`);
        }
    }

    console.log(`\nAudit Complete.`);
    console.log(`Questions needing migration: ${migrateCount}`);
    console.log(`Questions with missing data: ${issuesFound}`);
}

audit();
