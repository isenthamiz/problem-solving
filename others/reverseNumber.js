/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let operator = 1;
  if (x < 0) {
    operator = -1;
    x = x * operator;
  }
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
    if (reverse > 2 ** 31) {
      return 0;
    }
  }
  return reverse * operator;
};
