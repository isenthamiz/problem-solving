/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let maxsqlen = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == "1") {
        let sqlen = 1;
        let flag = true;
        while (i + sqlen < row && j + sqlen < col && flag) {
          for (let k = j; k <= j + sqlen; k++) {
            if (matrix[i + sqlen][k] == "0") {
              flag = false;
              break;
            }
          }
          for (let k = i; k <= i + sqlen; k++) {
            if (matrix[k][j + sqlen] == "0") {
              flag = false;
              break;
            }
          }
          if (flag) {
            sqlen++;
          }
        }
        if (maxsqlen < sqlen) {
          maxsqlen = sqlen;
        }
      }
    }
  }
  return maxsqlen * maxsqlen;
};
