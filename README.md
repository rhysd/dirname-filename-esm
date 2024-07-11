`__dirname` and `__filename` for ES Modules on Node.js
======================================================
[![CI][ci-badge]][ci]
[![npm][npm-ver]][npm]

Node.js v13.2.0 was released with support for ES Modules. [The official announcement][announce] explains
the overview.

In ES Modules environment, global variables such as `require`, `exports`, `module.exports`, `__filename`,
`__dirname` are not available. `require`, `exports`, `module.exports` are no longer necessary in favor
of ESM, but we still need `__filename` and `__dirname` which can be calculated from `import.meta.url`.

To make the migration from commonjs to ES Modules smooth, [dirname-filename-esm][npm] provides functions
to create `__dirname` and `__filename` variables easily in an ES Modules environment.

## Installation

```sh
npm install --save dirname-filename-esm
```

## Usage

Usage is very straightforward.

```javascript
// In ".mjs" script or a script under "type": "module" package
import { dirname, filename } from 'dirname-filename-esm';

const __dirname = dirname(import.meta);
const __filename = filename(import.meta);

// Use __dirname and __filename like in a commonjs module
```

Two functions are exported.

- `dirname()` takes `import.meta` object and returns `__dirname` value of the script.
- `filename()` takes `import.meta` object and returns `__filename` value of the script.

These functions return an empty string if `import.meta` doesn't have `url` property.

This package has zero dependency.

This package offers [TypeScript](https://www.typescriptlang.org/) support. Since this package is for
ES Modules environment, ensure that `module` option is set to one of the following values in your `tsconfig.json`.

- `es2020` or later
- `node16` or later

## License

[the MIT License](./LICENSE.txt)


[ci]: https://github.com/rhysd/dirname-filename-esm/actions/workflows/ci.yml
[ci-badge]: https://github.com/rhysd/dirname-filename-esm/actions/workflows/ci.yml/badge.svg
[npm]: https://www.npmjs.com/package/dirname-filename-esm
[npm-ver]: https://badge.fury.io/js/dirname-filename-esm.svg
[announce]: https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663
