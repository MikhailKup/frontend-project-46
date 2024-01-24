import _ from 'lodash';

const getValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return _.isObject(value) ? '[complex value]' : String(value);
};

// const formatToPlain = (data) => {
//   const iter = (value, path) => {
//     const result = value.flatMap((node) => {
//       const fullPath = path === '' ? `${node.key}` : `${path}.${node.key}`;
//       switch (node.status) {
//         case 'nested':
//           return iter(node.children, fullPath);
//         case 'removed':
//           return `Property '${fullPath}' was removed`;
//         case 'added':
//           return `Property '${fullPath}' was added with value: ${getValue(
//             node.value,
//           )}`;
//         case 'changed':
//           return `Property '${fullPath}' was updated. From ${getValue(
//             node.value1,
//           )} to ${getValue(node.value2)}`;
//         case 'unchanged':
//           return [];
//         default:
//           throw new Error(`Unknown type: ${node.status}`);
//       }
//     });
//     return [...result].join('\n');
//   };
//   return iter(data, '');
// };

const iter = (value, path) => {
  const result = value.flatMap((node) => {
    const fullPath = path === '' ? `${node.key}` : `${path}.${node.key}`;
    switch (node.status) {
      case 'nested':
        return iter(node.children, fullPath);
      case 'removed':
        return `Property '${fullPath}' was removed`;
      case 'added':
        return `Property '${fullPath}' was added with value: ${getValue(
          node.value,
        )}`;
      case 'changed':
        return `Property '${fullPath}' was updated. From ${getValue(
          node.value1,
        )} to ${getValue(node.value2)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${node.status}`);
    }
  });
  return [...result].join('\n');
};

const formatToPlain = (data) => iter(data, '');

export default formatToPlain;
