import gendiff from '../src/index.js';

test('gendiff for json', () => {
  const filepath1 = 'file1.json';
  const filepath2 = 'file2.json';
  const result = gendiff(filepath1, filepath2);
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});

test('gendiff for yaml, yml', () => {
  const filepath1 = 'file1.yml';
  const filepath2 = 'file2.yml';
  const result = gendiff(filepath1, filepath2);
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});
