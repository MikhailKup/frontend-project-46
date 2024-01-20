import { readFileSync } from 'fs';
import { getFilePath, getFileFormat } from './helpers.js';
import compareData from './comparefiles.js';
import formatData from './formatters/index.js';
import parse from './parse.js';

const getParesedData = (file) => {
  const path = getFilePath(file);
  const data = readFileSync(path, 'utf-8');
  const dataType = getFileFormat(file);
  return parse(data, dataType);
};

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const parseData1 = getParesedData(filePath1);
  const parseData2 = getParesedData(filePath2);
  const diff = compareData(parseData1, parseData2);
  return formatData(diff, format);
};
export default gendiff;
