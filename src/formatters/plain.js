import _ from 'lodash';
// import compareFiles from '../comparefiles.js';
// import getParsedFile from '../parse.js';
// import choiceFormat from './index.js';
// import { readFile, getFilePath, getFileFormat } from '../tools.js';

// //?======================================================================
// const ext1 = getFileFormat('file1.json');
// const path1 = getFilePath('file1.json');
// const data1 = readFile(path1);

// const ext2 = getFileFormat('file2.json');
// const path2 = getFilePath('file2.json');
// const data2 = readFile(path2);

// const parseData1 = getParsedFile(data1, ext1);
// const parseData2 = getParsedFile(data2, ext2);
// const diff = compareFiles(parseData1, parseData2);

// //?======================================================================

const getValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return _.isObject(value) ? '[complex value]' : String(value);
};

const formateToPlain = (data) => {
  const iter = (value, path) => {
    const result = value.flatMap((elem) => {
      const { key, 
		children, 
		status, 
		value1, 
		value2 } = elem;
      const fullPath = path === '' ? `${key}` : `${path}.${key}`;
      switch (status) {
        case 'nested':
          return iter(children, fullPath);
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'added':
          return `Property '${fullPath}' was added with value: ${getValue(
            value2,
          )}`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${getValue(
            value1,
          )} to ${getValue(value2)}`;
        case 'unchanged':
          return [];
        default:
          throw new Error(`Unknown type: ${status}`);
      }
    });
    return [...result].join('\n');
  };
  return iter(data, '');
};

export default formateToPlain;

// console.log(choiceFormat(diff, 'plain'));
