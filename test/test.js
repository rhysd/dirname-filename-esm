import { dirname, filename } from '../index.js';
import { ok, deepStrictEqual as eq } from 'assert';
import * as path from 'path';
import fromCommonjs from './helper.cjs';

let failures = 0;
function run(what, testcase) {
    console.log(`RUN: '${what}'...`);
    try {
        testcase();
        console.log(`PASS: '${what}'`);
    } catch (err) {
        console.log(`FAIL: '${what}': ${err}`);
        failures++;
    }
}

run('dirname() returns a directory path of this script', () => {
    const d = dirname(import.meta);
    eq(d, fromCommonjs.dirname);
    eq(d, path.dirname(fromCommonjs.filename));
});

run('filename() returns a file path of this script', () => {
    const f = filename(import.meta);
    eq(f, path.join(fromCommonjs.dirname, 'test.js'));
    eq(path.dirname(f), path.dirname(fromCommonjs.filename));
    eq(path.basename(f), 'test.js');
});

run('filename() returns an empty string when import.meta.url does not exist', () => {
    const f = filename({});
    eq(f, '');
});

run('dirname() returns an empty string when import.meta.url does not exist', () => {
    const f = dirname({});
    eq(f, '');
});

if (failures === 0) {
    console.log('OK');
} else {
    console.log('NOT OK');
    process.exit(111);
}
