import {readFileSync} from 'fs';
import path from 'path';
import getParsedFile from './parse.js';
//? ---------------------------------------------------

// Получение пути
const getFilePath = (filePath) => path.resolve(process.cwd(), filePath);

// const getFileFormat = (filePath) => path.extname(filePath).slice(1);

// const readFile = (filePath) => readFileSync(filePath, 'utf-8');

const readFile = (filePath) => {
  const data = readFileSync(getFilePath(filePath), 'utf-8');
  const dataType = path.extname(filePath).slice(1);
  return getParsedFile(data, dataType);
};

export {readFile, getFilePath};
