const fs = require('fs');
const path = require('path');

const appEntryPath = path.resolve(__dirname, '../node_modules/expo/AppEntry.js');

const correctImportPath = '../../mobile/App'; // Update this path based on your actual directory structure

// Read the existing file
fs.readFile(appEntryPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading AppEntry.js:', err);
    return;
  }

  // Replace the incorrect import path
  const updatedData = data.replace(/import App from '..\/..\/App';/, `import App from '${correctImportPath}';`);

  // Write the updated file back
  fs.writeFile(appEntryPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing AppEntry.js:', err);
    } else {
      console.log('Updated AppEntry.js with the correct path.');
    }
  });
});
