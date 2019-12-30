import url from 'url';
import * as path from 'path';

export function dirname(importMeta) {
    return path.dirname(filename(importMeta));
}

export function filename(importMeta) {
    return url.fileURLToPath(importMeta.url);
}
