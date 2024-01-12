import {readFile, getFilePath, getFileFormat} from './helpers.js';
import compareFiles from './comparefiles.js';
import choiceFormat from './formatters/index.js';
import getParsedFile from './parse.js';

const getParesedData = (file) => {
  const path = getFilePath(file);
  const data = readFile(path);
  const dataType = getFileFormat(file);
  return getParsedFile(data, dataType);
};

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const parseData1 = getParesedData(filePath1);
  const parseData2 = getParesedData(filePath2);
  const diff = compareFiles(parseData1, parseData2);
  return choiceFormat(diff, format);
};
export default gendiff;
