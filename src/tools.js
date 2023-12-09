import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Получение пути
const getFilePath = (filePath) =>
  path.join(__dirname, '..', '__fixtures__', filePath);

// Получение формата
const getFileFormat = (filePath) => path.extname(filePath).slice(1);

// Чтение файла
const readFile = (filePath) => readFileSync(filePath, 'utf-8');

export { readFile, getFilePath, getFileFormat };
