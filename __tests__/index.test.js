import gendiff from '../src/index.js';

test('gendiff', () => {
  const filepath1 = 'file1.json';
  const filepath2 = 'file2.json';
  const result = gendiff(filepath1, filepath2);
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});
