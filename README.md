`__dirname` and `__filename` for ES Modules on Node.js
======================================================
[![CI status](https://github.com/rhysd/github-action-benchmark/workflows/CI/badge.svg)](https://github.com/rhysd/dirname-filename-esm/actions?query=workflow%3ACI)
[![npm](https://badge.fury.io/js/dirname-filename-esm.svg)](https://www.npmjs.com/package/dirname-filename-esm)

Node.js v13.2.0 was released which shipped support for ES Modules. [Official announcement](https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663)
explains the overview.

In ES Modules environment, global variables such as `require`, `exports`, `module.exports`, `__filename`,
`__dirname` are not available. `require`, `exports`, `module.exports` are no longer necessary in favor
of ESM, but we still need `__filename` and `__dirname` which can be calculated from `import.meta.url`.

To make migration from commonjs to ES Modules smooth, [dirname-filename-esm](https://www.npmjs.com/package/dirname-filename-esm)
provides functions to create `__dirname` and `__filename` variables easily in ES Modules environment.

Usage is very straightforward.

```javascript
// In ".mjs" script or a script under "type": "module" package
import { dirname, filename } from 'dirname-filename-esm';

const __dirname = dirname(import.meta);
const __filename = filename(import.meta);

// Use __dirname and __filename like under commonjs module
```

Two functions are exported.

- `dirname()` takes `import.meta` object and returns `__dirname` value of the script.
- `filename()` takes `import.meta` object and returns `__filename` value of the script.

This package has zero dependency.

This package offers [TypeScript](https://www.typescriptlang.org/) support. Since this package is for
ES Modules environment, ensure that `module` option is set to `es2020` or later in your `tsconfig.json`.

### License

[the MIT License](./LICENSE.txt)
