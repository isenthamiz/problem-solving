const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];

const longestIncreasingPath = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let cache = new Array(row).fill(null).map((e) => new Array(col).fill(0));

  let xoffset = [0, 1, 0, -1];
  let yoffset = [1, 0, -1, 0];

  let max = 0;

  const helper = (matrix, i, j, cache) => {
    if (cache[i][j] != 0) {
      return cache[i][j];
    }
    for (let d = 0; d < 4; d++) {
      let x = i + xoffset[d],
        y = j + yoffset[d];
      if (x >= 0 && y >= 0 && x < row && y < col) {
        if (matrix[x][y] && matrix[x][y] > matrix[i][j]) {
          cache[i][j] = Math.max(helper(matrix, x, y, cache), cache[i][j]);
        }
      }
    }

    return ++cache[i][j];
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      max = Math.max(helper(matrix, i, j, cache), max);
    }
  }
  return max;
};

console.log(longestIncreasingPath(matrix));
