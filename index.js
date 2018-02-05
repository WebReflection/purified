var purified = (function(apply){
  /*! (c) Andrea Giammarchi - @WebReflection (ISC) */
  return function (ctx, fn, args) {
    if (args === void 0) args = [];
    return apply(fn, ctx, args);
  };
}(
  (
    typeof Reflect === 'object' &&
    Reflect.apply
  ) || Function.call.bind(Function.apply)
));