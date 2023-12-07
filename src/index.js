import { readFile } from './tools.js';

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
  let resultArr = ['{'];
  for (const key in result) {
    resultArr.push(key + ':' + result[key]);
  }
  resultArr.push('}');
  return resultArr.join('\n');
};

const gendiff = (filePath1, filePath2) => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);
  const result = compareObjects(data1, data2);
  return result;
};
export default gendiff;

console.log(gendiff('file1.yml', 'file2.yml'));
