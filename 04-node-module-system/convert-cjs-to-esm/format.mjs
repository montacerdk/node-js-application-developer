// ESM is always in strict mode.

export const upper = (str) => {
  if (typeof str === "symbol") str = str.toString();
  str += "";
  return str.toUpperCase();
};
