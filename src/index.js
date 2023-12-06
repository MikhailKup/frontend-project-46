import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Получение пути
const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

// Получение абсолютного пути
// const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);

// Чтение файла и парсинг
const readFile = (filePath) => {
  const data = fs.readFileSync(getFixturePath(filePath), 'utf-8');
  return JSON.parse(data);
};

const compareObjects = (data1, data2) => {
  const result = {};
  const sortedData1 = Object.fromEntries(Object.entries(data1).sort());
  const sortedData2 = Object.fromEntries(Object.entries(data2).sort());
  const keys = Object.keys(sortedData1);
  const keys2 = Object.keys(sortedData2);
  for (let key of keys) {
    if (
      Object.hasOwn(sortedData2, key) &&
      sortedData1[key] === sortedData2[key]
    ) {
      result[`  ${key}`] = data1[key];
    } else if (
      Object.hasOwn(sortedData2, key) &&
      sortedData1[key] !== sortedData2[key]
    ) {
      result[`- ${key}`] = sortedData1[key];
      result[`+ ${key}`] = sortedData2[key];
    } else if (!Object.hasOwn(sortedData2, key)) {
      result[`- ${key}`] = sortedData1[key];
    }
  }
  for (let key of keys2) {
    if (!Object.hasOwn(sortedData1, key)) {
      result[`+ ${key}`] = sortedData2[key];
    }
  }
  return result;
};

const gendiff = (filePath1, filePath2) => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);
  const result = compareObjects(data1, data2);
  return result;
};
export default gendiff;
