import _ from 'lodash';

const getIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth = 1) => {
  if (!_.isPlainObject(data)) {
    return `${data}`;
  }
  const currentIndent = getIndent(depth);
  const bracketIndent = ' '.repeat((depth - 1) * 4);
  const currentValue = Object.entries(data);
  const lines = currentValue.map(
    ([key, value]) => `${currentIndent}  ${key}: ${stringify(value, depth + 1)}`,
  );
  const result = ['{', ...lines, `${bracketIndent}}`].join('\n');
  return result;
};

const iter = (currentValue, depth = 1) => {
  const currentIndent = getIndent(depth);
  const bracketIndent = ' '.repeat((depth - 1) * 4);
  const lines = currentValue.flatMap((node) => {
    switch (node.status) {
      case 'nested':
        return `${currentIndent}  ${node.key}: ${iter(
          node.children,
          depth + 1,
        )}`;
      case 'removed':
        return `${currentIndent}- ${node.key}: ${stringify(
          node.value,
          depth + 1,
        )}`;
      case 'added':
        return `${currentIndent}+ ${node.key}: ${stringify(
          node.value,
          depth + 1,
        )}`;
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${stringify(
          node.value1,
          depth + 1,
        )}`;
      case 'changed':
        return [
          `${currentIndent}- ${node.key}: ${stringify(
            node.value1,
            depth + 1,
          )}`,
          `${currentIndent}+ ${node.key}: ${stringify(
            node.value2,
            depth + 1,
          )}`,
        ];
      default:
        throw new Error(`Unknown type ${node.status}.`);
    }
  });
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const formatToStylish = (data) => iter(data);

export default formatToStylish;
