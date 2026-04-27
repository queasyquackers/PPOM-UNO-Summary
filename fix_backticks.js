const fs = require('fs');

['content/json/l149.file.js', 'content/json/l150.file.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace backslash-backtick with just backtick
  let fixed = '';
  for (let i = 0; i < content.length; i++) {
    if (content.charCodeAt(i) === 92 && i + 1 < content.length && content.charCodeAt(i + 1) === 96) {
      // Skip the backslash, the backtick will be added on next iteration
      continue;
    }
    fixed += content[i];
  }
  fs.writeFileSync(file, fixed);
  console.log(file + ' fixed');
});
