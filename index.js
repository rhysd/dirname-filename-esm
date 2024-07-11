import { fileURLToPath } from 'url';
import { dirname as pathDirname } from 'path';

export function dirname(importMeta) {
    const file = filename(importMeta);
    return file !== '' ? pathDirname(file) : '';
}

export function filename(importMeta) {
    return importMeta.url ? fileURLToPath(importMeta.url) : '';
}
