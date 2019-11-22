`__dirname` and `__filename` for ES Modules on Node.js
======================================================

Node.js v13.2.0 was released and it ships support for ES Modules. [Official announcement](https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663) explains the overview.

In ES Modules environment, global variables such as `require`, `exports`, `module.exports`, `__filename`, `__dirname` are not available. `require`, `exports`, `module.exports` are no longer necessary since we have ESM, but we still need `__filename` and `__dirname` which can be calculated from `import.meta.url`.

To make migration from commonjs to ES Modules smooth, [dirname-filename-esm](TODO) provides functions to create `__dirname` and `__filename` easily in ES Modules environment.

Usage is very straightforward.

```javascript
import { dirname, filename } from 'dirname-filename-esm';

const __dirname = dirname(import.meta);
const __filename = filename(import.meta);

// Use __dirname and __filename like under commonjs module
```

- `dirname()` takes `import.meta` object and returns `__dirname` value of the script.
- `filename()` takes `import.meta` object and returns `__filename` value of the script.

### License

[the MIT License](./LICENSE.txt)
