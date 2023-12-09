import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const getParsedFile = (data, format) => {
  if (!parsers[format]) {
    throw new Error('unknow file format');
  }
  const outputObject = parsers[format](data);
  return outputObject;
};

export default getParsedFile;
