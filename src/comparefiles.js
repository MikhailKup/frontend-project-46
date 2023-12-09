import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const unionKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys;
};

const compareFiles = (data1, data2) => {
  const keys = getSortedKeys(data1, data2);
  const conditions = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.has(data1, key) && !_.has(data2, key)) {
      const result = { key, value1, status: 'removed' };
      return result;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      const result = { key, value2, status: 'added' };
      return result;
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      const result = {
        key,
        children: compareFiles(value1, value2),
        status: 'nested',
      };
      return result;
    }
    if (_.isEqual(value1, value2)) {
      const result = { key, value1, status: 'unchanged' };
      return result;
    }
    return {
      key,
      value1,
      value2,
      status: 'changed',
    };
  });
  return conditions;
};

export default compareFiles;
