/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let T = new Array(n + 1).fill(0);

  T[0] = 1;
  T[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      T[i] += T[j] * T[i - j - 1];
    }
  }

  return T[n];
};
