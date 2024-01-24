import { readFileSync } from 'fs';
import { getFilePath, getFileFormat } from './helpers.js';
import compareData from './comparedata.js';
import formatData from './formatters/index.js';
import parse from './parse.js';

const getParesedData = (file) => {
  const path = getFilePath(file);
  const data = readFileSync(path, 'utf-8');
  const formatType = getFileFormat(file);
  return parse(data, formatType);
};

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const parsedData1 = getParesedData(filePath1);
  const parsedData2 = getParesedData(filePath2);
  const diff = compareData(parsedData1, parsedData2);
  return formatData(diff, format);
};
export default gendiff;
