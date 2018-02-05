# purified [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/WebReflection/donate) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

Purity and safety for methods invokes.

### purity(context, method[, args])
```js
const safe = require('purified');

// trap ASAP methods to trust
const trim = ''.trim;
const fromCharCode = String.fromCharCode;
const hasOwnProperty = {}.hasOwnProperty;

// whenever is needed, you can trust your code
console.log(
  safe(' abc ', trim),                  // "abc"
  safe({z: 9}, hasOwnProperty, ['z']),  // true
  safe(String, fromCharCode, [79, 75])  // "OK
);
```