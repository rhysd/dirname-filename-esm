import { dirname, filename } from '../index.js';

const __dirname: string = dirname(import.meta);
const __filename: string = filename(import.meta);

console.log(__dirname, __filename);
