import { readFileSync } from 'fs';
import path from 'path';

const getFilePath = (filePath) => path.resolve(process.cwd(), filePath);

const getFileFormat = (filePath) => path.extname(filePath).slice(1);

const readFile = (filePath) => readFileSync(filePath, 'utf-8');

export { readFile, getFilePath, getFileFormat };
