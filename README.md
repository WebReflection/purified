# purified [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/WebReflection/donate) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/purified/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/purified?branch=master) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

Purity and safety for methods invokes.

The power of [Reflect.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) brought through natural arguments order to every JS engine.

### purity(context, method[, args])
```js
const $ = require('purified');

// trap ASAP methods to trust
const trim = ''.trim;
const fromCharCode = String.fromCharCode;
const hasOwnProperty = {}.hasOwnProperty;

// whenever is needed, you can trust your code
console.log(
  $(' abc ', trim),                 // "abc"
  $({z: 9}, hasOwnProperty, ['z']), // true
  $(String, fromCharCode, [79, 75]) // "OK
);
```