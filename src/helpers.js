import {readFileSync} from 'fs';
import path from 'path';
//? ---------------------------------------------------

// Получение пути
const getFilePath = (filePath) => path.resolve(process.cwd(), filePath);

// Получение формата
// const getFileFormat = (filePath) => path.extname(filePath).slice(1);

// Чтение файла
// const readFile = (filePath) => readFileSync(filePath, 'utf-8');

const readFile = (filePath) => {
  const data = readFileSync(filePath, 'utf-8');
  const dataType = path.extname(filePath).slice(1);
  return getParsedFile(data, dataType);
};

export {readFile, getFilePath};
