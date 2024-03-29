import _ from 'lodash';

const compareData = (data1, data2) => {
  const unionKeys = _.union(_.keys(data1), _.keys(data2));
  const keys = _.sortBy(unionKeys);
  return keys.map((key) => {
    if (!_.has(data2, key)) {
      const result = { key, value: data1[key], status: 'removed' };
      return result;
    }
    if (!_.has(data1, key)) {
      const result = { key, value: data2[key], status: 'added' };
      return result;
    }
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      const result = {
        key,
        children: compareData(value1, value2),
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
};

export default compareData;
