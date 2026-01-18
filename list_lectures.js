
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const contentDir = path.join('e:', 'PPOM-UNO-Summary', 'content');

function listLectures() {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('_content.js'));
    const lectures = [];

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        const code = fs.readFileSync(filePath, 'utf8');

        // Clean code for VM
        let cleanCode = code.replace(/export\s+const\s+(\w+)/g, 'var $1');

        try {
            const sandbox = { window: {}, console: console, exports: {} };
            vm.createContext(sandbox);
            vm.runInContext(cleanCode, sandbox);

            // Find content
            const keys = Object.keys(sandbox).filter(k => k.endsWith('_CONTENT'));
            if (keys.length > 0) {
                const content = sandbox[keys[0]];
                let moduleName = "Unknown";

                // Try to extract module from title or file content if not explicit
                // Assuming `module` field might not exist in content object based on previous views, 
                // but checking `L2_content.js` showed `module: 'Neuro'`.
                if (content.module) moduleName = content.module;
                else if (content.title && content.title.includes(':')) moduleName = content.title.split(':')[0];

                lectures.push({
                    file: file,
                    id: content.id,
                    title: content.title || "No Title",
                    module: moduleName,
                    summaryHeader: content.summary ? content.summary.split('\n')[1] : ""
                });
            }
        } catch (err) {
            console.error(`Error processing ${file}: ${err.message}`);
        }
    }

    // Print csv-like
    console.log("File,ID,Module,Title");
    lectures.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })).forEach(l => {
        console.log(`${l.file},${l.id},${l.module},"${l.title}"`);
    });
}

listLectures();
