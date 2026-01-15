const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');
const outputDir = path.join(__dirname, 'content', 'json');
const indexFile = path.join(__dirname, 'lectures_index.js');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Mock window to capture assignments
global.window = {};

async function generate() {
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('_content.js') && f !== 'lectures_data.js');
    
    // Sort naturally
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    files.sort(collator.compare);

    const lectureIndex = [];

    console.log(`Found ${files.length} content files. Processing...`);

    for (const file of files) {
        try {
            const filePath = path.join(contentDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            // We want to evaluate the file content to get the object
            // The files usually do: const L2_CONTENT = { ... }; window.L2_CONTENT = L2_CONTENT;
            // We can eval it in the global context.
            // Note: eval is risky if untrusted, but these are our text files.
            
            // Clear previous keys to avoid collision if variable names differ (though typically they are unique consts, which eval might complain about redeclaring)
            // To avoid "Identifier 'LX_CONTENT' has already been declared", we can wrap in IIFE or just parse differently.
            // Easiest is to replace 'const ' with 'var ' or just strip it? 
            // Actually, we can just use `vm` module or `eval` blindly if variables are unique. 
            // BUT: reuse of `const` in same context throws.
            // Hack: replace `const ` with `global.` or just remove const.
            
            // Better approach: regex to find the variable name, then access it from window.
            // But simply: `eval(fileContent)` runs in this scope.
            // If file has `const L2_CONTENT`, running it twice throws.
            // We are running a script once.
            
            // However, `const` declarations are block scoped.
            // Let's rely on the `window.L2_CONTENT = ...` part.
            // We can wrap the code in a function? No, `window` assignment still works.
            
            // Regex to change `const LX_CONTENT` to `var LX_CONTENT` to allow redeclaration if needed, 
            // but since we process each file once in this script run, it should be fine?
            // Wait, `files` loop. `const` is block scoped? No, in top level eval it might persist?
            // Let's strip the `const variable =` part and just eval the object?
            // Or just append the file content to a vm.
            
            // SIMPLEST: use `new Function` with the code?
            // "const" inside new Function is scoped to that function.
            // The window assignment will leak out to our global window. Perfect.
            
            const fn = new Function(fileContent);
            fn();
            
            // Now find what was added to window.
            // We assume the file adds exactly on key to window that matches its ID or just check keys.
            // Optimization: The file typically adds ONE key like `L2_CONTENT`.
            // We can check `window` keys that are new?
            // Or since we know the structure, just look for the object.
            
            // Let's iterate all values in window and find the one that looks like a lecture object
            let lectureData = null;
            for (const key in global.window) {
                if (global.window.hasOwnProperty(key)) {
                    const obj = global.window[key];
                    // Heuristic: has 'id' and 'summary'
                    if (obj && obj.id && (obj.summary !== undefined)) {
                        // Check if this object ID matches the file we expect (e.g. l2 for L2_content.js)
                        // Actually, just grab it. content files usually only export one thing.
                        // We need to match it to the current file to be sure (in case old keys remain).
                        // To be safe, we can clear window after each iteration, assuming we can.
                        // window is just a global object here.
                        
                        // Let's rely on the file name or ID content.
                        // Id is inside the object.
                        
                        // Double check: if object id matches file's expected id? 
                        // L2_content.js -> id: 'l2'.
                        
                        // Let's just take the LAST added key? 
                        // Safer: Reset window each time?
                        // global.window = {} // might break if code relies on window existing.
                        
                        // We will just read the object that has the ID we want.
                        // But we don't know the ID yet.
                        lectureData = obj; 
                    }
                }
            }
            
            if (!lectureData) {
                console.warn(`No lecture data found in ${file}`);
                continue;
            }

            // Clean up window for next iteration (optional but good)
            global.window = {}; 

            // Process Data
            const id = lectureData.id; // e.g. 'l2'
            const jsFilename = `${id}.file.js`;
            
            // Add to Index
            lectureIndex.push({
                id: id,
                title: lectureData.title || 'Untitled',
                module: lectureData.module || 'General',
                tags: lectureData.session || '',
                path: `content/json/${jsFilename}`,
                readingTime: lectureData.summary ? Math.ceil(lectureData.summary.split(/\s+/).length / 200) : 0
            });

            // Write File
            const jsonStr = JSON.stringify(lectureData, null, 2);
            const fileOutput = `window.receiveLectureContent(${jsonStr});`;
            fs.writeFileSync(path.join(outputDir, jsFilename), fileOutput);
            
            console.log(`Generated ${jsFilename}`);

        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }

    // Write Index
    const indexJson = JSON.stringify(lectureIndex, null, 2);
    const indexOutput = `window.receiveLectureIndex(${indexJson});`;
    fs.writeFileSync(indexFile, indexOutput);
    
    console.log(`\nSuccessfully generated index with ${lectureIndex.length} lectures.`);
}

generate();
