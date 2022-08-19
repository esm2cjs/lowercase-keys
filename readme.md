# @esm2cjs/lowercase-keys

This is a fork of https://github.com/sindresorhus/lowercase-keys, but automatically patched to support ESM **and** CommonJS, unlike the original repository.

## Install

You can use an npm alias to install this package under the original name:

```
npm i lowercase-keys@npm:@esm2cjs/lowercase-keys
```

```jsonc
// package.json
"dependencies": {
    "lowercase-keys": "npm:@esm2cjs/lowercase-keys"
}
```

but `npm` might dedupe this incorrectly when other packages depend on the replaced package. If you can, prefer using the scoped package directly:

```
npm i @esm2cjs/lowercase-keys
```

```jsonc
// package.json
"dependencies": {
    "@esm2cjs/lowercase-keys": "^ver.si.on"
}
```

## Usage

```js
// Using ESM import syntax
import lowercaseKeys from "@esm2cjs/lowercase-keys";

// Using CommonJS require()
const lowercaseKeys = require("@esm2cjs/lowercase-keys").default;
```

> **Note:**
> Because the original module uses `export default`, you need to append `.default` to the `require()` call.

For more details, please see the original [repository](https://github.com/sindresorhus/lowercase-keys).

## Sponsoring

To support my efforts in maintaining the ESM/CommonJS hybrid, please sponsor [here](https://github.com/sponsors/AlCalzone).

To support the original author of the module, please sponsor [here](https://github.com/sindresorhus/lowercase-keys).
