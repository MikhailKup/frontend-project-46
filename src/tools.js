import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getParsedObject from './parse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Получение пути
const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

// Получение формата
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

// Чтение файла и парсинг
const readFile = (filePath) => {
  const data = fs.readFileSync(getFixturePath(filePath), 'utf-8');
  return getParsedObject(data, getFileFormat(filePath));
};

export { readFile, getFixturePath, getFileFormat };
