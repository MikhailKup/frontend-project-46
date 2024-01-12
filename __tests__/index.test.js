import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import path, {dirname} from 'path';
import gendiff from '../src/index.js';

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