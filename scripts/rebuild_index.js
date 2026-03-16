const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Use relative paths or dynamic current working directory paths
const baseDir = process.cwd();
const contentDir = path.join(baseDir, 'content', 'json');
const outputFile = path.join(baseDir, 'lectures_search_index.js');

function generateIndex() {
    if (!fs.existsSync(contentDir)) {
        console.error(`Content directory ${contentDir} does not exist.`);
        return;
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.file.js') || f.endsWith('_content.js'));
    const searchIndex = [];

    console.log(`Scanning ${files.length} files in ${contentDir}...`);

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        const code = fs.readFileSync(filePath, 'utf8');

        try {
            let lectureData = null;
            // Define a sandbox with a mock window.receiveLectureContent function
            const sandbox = {
                window: {
                    receiveLectureContent: (data) => {
                        lectureData = data;
                    }
                },
                console: console
            };
            
            vm.createContext(sandbox);
            vm.runInContext(code, sandbox);

            if (lectureData) {
                // Construct searchable text blob
                let fullText = `${lectureData.id} ${lectureData.title} ${lectureData.module} `;

                // Add Summary
                if (lectureData.summary) fullText += lectureData.summary + " ";

                // Add Questions
                if (lectureData.questions && Array.isArray(lectureData.questions)) {
                    lectureData.questions.forEach(q => {
                        fullText += `${q.question} ${q.rationale || q.explanation || ""} ${q.options ? q.options.join(" ") : ""} `;
                    });
                }
                
                // Fallback for different field name 'reviewQuestions'
                if (lectureData.reviewQuestions && Array.isArray(lectureData.reviewQuestions)) {
                    lectureData.reviewQuestions.forEach(q => {
                        fullText += `${q.question} ${q.answer || ""} ${q.explanation || ""} `;
                    });
                }

                // Add Flashcards
                if (lectureData.flashcards && Array.isArray(lectureData.flashcards)) {
                    lectureData.flashcards.forEach(f => fullText += `${f.front} ${f.back} `);
                }

                // Add Pearls
                if (lectureData.pearls && Array.isArray(lectureData.pearls)) {
                    lectureData.pearls.forEach(p => fullText += `${p.title} ${p.content} `);
                }

                searchIndex.push({
                    id: lectureData.id,
                    title: lectureData.title || "Untitled",
                    module: lectureData.module || "Unknown",
                    content: fullText.replace(/\s+/g, ' ').replace(/"/g, "'").trim() // Normalize whitespace and quotes
                });
            } else {
                console.warn(`No lecture data found in ${file}. Ensure it calls window.receiveLectureContent.`);
            }
        } catch (err) {
            console.error(`Error processing ${file}: ${err.message}`);
        }
    }

    // Sort index by ID (natural sort)
    searchIndex.sort((a, b) => {
        const idA = a.id.replace(/\D/g, '');
        const idB = b.id.replace(/\D/g, '');
        return parseInt(idA || 0) - parseInt(idB || 0);
    });

    console.log(`Generated index with ${searchIndex.length} entries.`);

    // Write to file as a window global
    const outputContent = `window.SEARCH_INDEX = ${JSON.stringify(searchIndex)};`;
    
    fs.writeFileSync(outputFile, outputContent);
    console.log(`Successfully wrote index to ${outputFile}`);
}

generateIndex();
