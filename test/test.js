import { dirname, filename } from '../index.js';
import { ok, deepStrictEqual as eq } from 'assert';
import * as path from 'path';
import fromCommonjs from './helper.cjs';

let failures = 0;
function run(what, testcase) {
    console.log(`RUN '${what}'...`);
    try {
        testcase();
        console.log(`SUCCESS '${what}'`);
    } catch (err) {
        console.log(`FAILURE '${what}': ${err}`);
        failures++;
    }
}

run('dirname() returns directory path of this script', () => {
    const d = dirname(import.meta);
    eq(d, fromCommonjs.dirname);
    eq(d, path.dirname(fromCommonjs.filename));
});

run('filename() returns file path of this script', () => {
    const f = filename(import.meta);
    eq(path.dirname(f), fromCommonjs.dirname);
    eq(path.dirname(f), path.dirname(fromCommonjs.filename));
});

if (failures === 0) {
    console.log('OK');
} else {
    console.log('NOT OK');
    process.exit(111);
}
