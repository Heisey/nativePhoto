const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, '../core/src/config');
const outputFilePath = path.join(configDir, 'mergedConfig.json');

const urlsFilePath = path.join(configDir, 'urls.json');
const portsFilePath = path.join(configDir, 'ports.json');
const mobileFirebaseFilePath = path.join(configDir, 'mobile.firebase.json');
const clientFirebaseFilePath = path.join(configDir, 'client.firebase.json');

const readJsonFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
  return {};
};

const mergedConfig = {
  urls: readJsonFile(urlsFilePath),
  ports: readJsonFile(portsFilePath),
  firebase: {
    mobile: readJsonFile(mobileFirebaseFilePath),
    client: readJsonFile(clientFirebaseFilePath)
  }
};

fs.writeFileSync(outputFilePath, JSON.stringify(mergedConfig, null, 2), 'utf-8');
console.log('Merged config written to:', outputFilePath);
