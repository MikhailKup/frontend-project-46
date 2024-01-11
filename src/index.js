import {readFile, getFilePath} from './helpers.js';
// import getParsedFile from './parse.js';
import compareFiles from './comparefiles.js';
import choiceFormat from './formatters/index.js';

// const gendiff = (filePath1, filePath2, format = 'stylish') => {
//   const ext1 = getFileFormat(filePath1);
//   const path1 = getFilePath(filePath1);
//   const data1 = readFile(path1);

//   const ext2 = getFileFormat(filePath2);
//   const path2 = getFilePath(filePath2);
//   const data2 = readFile(path2);

//   const parseData1 = readFile(data1, ext1);
//   const parseData2 = getParsedFile(data2, ext2);
//   const diff = compareFiles(parseData1, parseData2);
//   return choiceFormat(diff, format);
// };

// const gendiff = (filePath1, filePath2, format = 'stylish') => {
//   const path1 = getFilePath(filePath1);
//   const path2 = getFilePath(filePath2);

//   const parseData1 = readFile(path1);
//   const parseData2 = readFile(path2);
//   const diff = compareFiles(parseData1, parseData2);
//   return choiceFormat(diff, format);
// };

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const parseData1 = readFile(filePath1);
  const parseData2 = readFile(filePath2);
  const diff = compareFiles(parseData1, parseData2);
  return choiceFormat(diff, format);
};
export default gendiff;
