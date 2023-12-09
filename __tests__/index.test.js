import gendiff from '../src/index.js';

test('gendiff for stylish', () => {
  const filepath1 = 'file1.json';
  const filepath2 = 'file2.json';
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});

test('gendiff for stylish yaml, yml', () => {
  const filepath1 = 'file1.yaml';
  const filepath2 = 'file2.yaml';
  const result = gendiff(filepath1, filepath2, 'stylish');
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});
