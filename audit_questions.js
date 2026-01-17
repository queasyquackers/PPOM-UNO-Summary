
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join('e:', 'PPOM-UNO-Summary', 'content');

async function audit() {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('_content.js'));
    let issuesFound = 0;

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        try {
            // dynamic import needs a file URL
            const module = await import(`file://${filePath}`);
            const contentKey = Object.keys(module)[0]; // e.g. L10_CONTENT
            const content = module[contentKey];

            if (!content || !content.questions) {
                // console.log(`[WARN] ${file}: No questions field or empty export.`); // Reduce noise
                continue;
            }

            content.questions.forEach((q, idx) => {
                const missingFields = [];
                if (q.answer === undefined || q.answer === null || q.answer === '') missingFields.push('answer');
                if (!q.explanation || q.explanation.trim() === '') missingFields.push('explanation');

                // Check if answer is valid index
                if (q.options && typeof q.answer === 'number') {
                    if (q.answer < 0 || q.answer >= q.options.length) {
                        missingFields.push(`invalid_answer_index(${q.answer})`);
                    }
                }

                if (missingFields.length > 0) {
                    console.log(`[FAIL] ${file} - Question ${idx + 1}: Missing ${missingFields.join(', ')}`);
                    console.log(`       Preview: ${q.question.substring(0, 50)}...`);
                    issuesFound++;
                }
            });

        } catch (err) {
            console.error(`[ERROR] processing ${file}:`, err.message);
        }
    }

    console.log(`\nAudit complete. ${issuesFound} issues found.`);
}

audit();
