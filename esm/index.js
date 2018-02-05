/*! (c) Andrea Giammarchi - @WebReflection (ISC) */
const apply = (
  typeof Reflect === 'object' &&
  Reflect.apply
) || Function.call.bind(Function.apply);

const purified = (ctx, fn, args = []) => apply(fn, ctx, args);

export purified;
export default purified;
