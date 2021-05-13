import { dirname, filename } from '..';

const __dirname: string = dirname(import.meta);
const __filename: string = filename(import.meta);

console.log(__dirname, __filename);
