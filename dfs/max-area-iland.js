const arr = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

var maxAreaOfIsland = function (grid) {
  const helper = function (matrix, i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || matrix[i][j] == 0) {
      return 0;
    }

    matrix[i][j] = 0;

    count++;

    let xOffSets = [1, 0, -1, 0];
    let yOffSets = [0, 1, 0, -1];

    for (let k = 0; k < 4; k++) {
      helper(matrix, i + xOffSets[k], j + yOffSets[k]);
    }
  };

  let row = grid.length;
  let col = grid[0].length;
  let result = 0,
    count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        helper(grid, i, j);
        result = Math.max(count, result);
        count = 0;
      }
    }
  }
  return result;
};

maxAreaOfIsland(arr);
