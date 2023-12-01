import _ from 'lodash';

const data1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const data2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

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
      result[key] = data1[key];
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
  return JSON.stringify(result);
};
console.log(compareObjects(data1, data2));
