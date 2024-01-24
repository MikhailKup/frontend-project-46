import formatToStylish from './stylish.js';
import formatToPlain from './plain.js';
import formatToJson from './json.js';

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      return formatToStylish(data);
    case 'plain':
      return formatToPlain(data);
    case 'json':
      return formatToJson(data);
    default:
      throw new Error(`Unknown ${format}.`);
  }
};
export default formatData;
