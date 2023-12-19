import gendiff from '../src/index.js';
import {getFixturesPath} from '../src/tools.js';

test('gendiff for stylish', () => {
  const filepath1 = getFixturesPath('file1.json');
  const filepath2 = getFixturesPath('file2.json');
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test('gendiff for stylish yaml, yml', () => {
  const filepath1 = getFixturesPath('file1.yaml');
  const filepath2 = getFixturesPath('file2.yaml');
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});

test('gendiff for plain', () => {
  const filepath1 = getFixturesPath('file1.json');
  const filepath2 = getFixturesPath('file2.json');
  const result = gendiff(filepath1, filepath2, 'plain');
  expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test('gendiff for json', () => {
  const filepath1 = getFixturesPath('file1.json');
  const filepath2 = getFixturesPath('file2.json');
  const result = gendiff(filepath1, filepath2, 'json');
  expect(gendiff(filepath1, filepath2, 'json')).toEqual(result);
});
