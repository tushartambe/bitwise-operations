function add(x, y) {
  if (!(Number.isInteger(x) && Number.isInteger(y))) {
    throw new Error("Number is not valid")
  }

  if (y == 0) return x;
  else return add(x ^ y, (x & y) << 1);
}

module.exports = { add }