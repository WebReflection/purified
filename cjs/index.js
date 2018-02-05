/*! (c) Andrea Giammarchi - @WebReflection (ISC) */
var apply = (
  typeof Reflect === 'object' &&
  Reflect.apply
) || Function.call.bind(Function.apply);

var purified = function (ctx, fn, args) {
  if (args === void 0) args = [];
  return apply(fn, ctx, args);
};

module.exports = purified;
