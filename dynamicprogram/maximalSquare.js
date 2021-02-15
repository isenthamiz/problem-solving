/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let maxsqlen = 0;
  let dp = new Array(row + 1).fill(0).map((c) => new Array(col + 1).fill(0));

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (matrix[i - 1][j - 1] == "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i][j]);
      }
    }
  }

  return maxsqlen * maxsqlen;
};
