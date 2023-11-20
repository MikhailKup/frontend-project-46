import path from 'path';

const getFilePath = (filePath) => path.resolve(process.cwd(), filePath);

const getFileFormat = (filePath) => path.extname(filePath).slice(1);

export { getFilePath, getFileFormat };
