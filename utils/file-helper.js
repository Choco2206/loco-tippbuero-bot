const fs = require('fs');
const path = require('path');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function ensureJsonFile(filePath, defaultData = {}) {
  ensureDir(filePath);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
  }
}

function readJson(filePath, defaultData = {}) {
  ensureJsonFile(filePath, defaultData);

  try {
    const raw = fs.readFileSync(filePath, 'utf8');

    if (!raw.trim()) {
      return defaultData;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.error(`❌ Fehler beim Lesen von ${filePath}:`, error);
    return defaultData;
  }
}

function writeJson(filePath, data) {
  ensureDir(filePath);

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Fehler beim Schreiben von ${filePath}:`, error);
    return false;
  }
}

module.exports = {
  ensureJsonFile,
  readJson,
  writeJson,
};
