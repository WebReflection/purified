var file = require.resolve('../cjs');

var purified = require(file);

var trim = ''.trim;
var fromCharCode = String.fromCharCode;

console.assert(
  purified(' a ', trim) === 'a' &&
  purified(0, fromCharCode, [79, 75]) === "OK"
);

delete require.cache[file];
global.Reflect = {};
purified = require(file);

console.assert(
  purified(' a ', trim) === 'a' &&
  purified(0, fromCharCode, [79, 75]) === "OK"
);

delete require.cache[file];
global.Reflect = void 0;
purified = require(file);

console.assert(
  purified(' a ', trim) === 'a' &&
  purified(0, fromCharCode, [79, 75]) === "OK"
);