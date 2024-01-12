import formateToStylish from './stylish.js';
import formateToPlain from './plain.js';
import formateToJson from './json.js';

const choiceFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return formateToStylish(data);
    case 'plain':
      return formateToPlain(data);
    case 'json':
      return formateToJson(data);
    default:
      throw new Error(`Unknown ${format}.`);
  }
};
export default choiceFormat;
