import gendiff from '../src/index.js';
import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import path, {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturesPath = (filePath) =>
  path.join(__dirname, '..', '__fixtures__', filePath);

const readTestFile = (filePath) =>
  readFileSync(getFixturesPath(filePath), 'utf-8');

const resultStylish = readTestFile('resultstylish.txt');
const resultPlain = readTestFile('resultplain.txt');
const resultJson = readTestFile('resultjson.txt');

describe('gendiff', () => {
  test('gendiff for stylish', () => {
    const filepath1 = getFixturesPath('file1.json');
    const filepath2 = getFixturesPath('file2.json');
    expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish);
  });

  test('gendiff for plain', () => {
    const filepath1 = getFixturesPath('file1.json');
    const filepath2 = getFixturesPath('file2.json');
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
  });

  test('gendiff for json', () => {
    const filepath1 = getFixturesPath('file1.json');
    const filepath2 = getFixturesPath('file2.json');
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(resultJson);
  });
});

// Last files
// test('gendiff for stylish', () => {
//   const filepath1 = getFixturesPath('file1.json');
//   const filepath2 = getFixturesPath('file2.json');
//   const result = readFile('resultstylish.txt');
//   expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(result);
// });

// test('gendiff for stylish yaml, yml', () => {
//   const filepath1 = getFixturesPath('file1.yaml');
//   const filepath2 = getFixturesPath('file2.yaml');
//   const result = gendiff(filepath1, filepath2, 'stylish');
//   expect(gendiff(filepath1, filepath2)).toEqual(result);
// });

// test('gendiff for plain', () => {
//   const filepath1 = getFixturesPath('file1.json');
//   const filepath2 = getFixturesPath('file2.json');
//   const result = readFile('resultplain.txt');
//   expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
// });

// test('gendiff for json', () => {
//   const filepath1 = getFixturesPath('file1.json');
//   const filepath2 = getFixturesPath('file2.json');
//   const result = readFile('resultjson.txt');
//   expect(gendiff(filepath1, filepath2, 'json')).toEqual(result);
// });
