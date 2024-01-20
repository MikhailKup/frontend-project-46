import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturesPath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);

const readTestFile = (filePath) => readFileSync(getFixturesPath(filePath), 'utf-8');

const resultStylish = readTestFile('resultstylish.txt');
const resultPlain = readTestFile('resultplain.txt');
const resultJson = readTestFile('resultjson.txt');

describe('gendiff', () => {
  test('with json', () => {
    const filepath1 = getFixturesPath('file1.json');
    const filepath2 = getFixturesPath('file2.json');
    expect(gendiff(filepath1, filepath2)).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(resultJson);
  });
  test('with yaml', () => {
    const filepath1 = getFixturesPath('file1.yaml');
    const filepath2 = getFixturesPath('file2.yaml');
    expect(gendiff(filepath1, filepath2)).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(resultJson);
  });
});
