/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  const currentIslandUnique = function () {
    if (uniqueIland.length) {
      for (uil of uniqueIland) {
        if (currentIland.length != uil.length) {
          continue;
        }
        if (currentIland.length == uil.length) {
          return equalIslands(currentIland, uil);
        }
      }
    }
    return true;
  };

  const equalIslands = function (island1, island2) {
    for (let i = 0; i < island1.length; i++) {
      if (island1[i][0] != island2[i][0] || island1[i][1] != island2[i][1]) {
        return false;
      }
    }
    return true;
  };

  const helper = function (grid, row, col, x, y) {
    let size = 0;
    if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] <= 0) {
      return 0;
    }

    grid[x][y] = -1;
    size++;
    currentIland.push([x, y]);
    let xOffSets = [0, -1, 0, 1];
    let yOffSets = [-1, 0, 1, 0];

    for (let k = 0; k < 4; k++) {
      size += helper(grid, row, col, x + xOffSets[k], y + yOffSets[k]);
    }
    return size;
  };

  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  let uniqueIland = [];
  let currentIland = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        helper(grid, row, col, i, j);
        let minCol = grid[0].length;
        for (it of currentIland) {
          minCol = Math.min(minCol, it[1]);
        }
        for (let k = 0; k < currentIland.length; k++) {
          currentIland[k][0] -= i;
          currentIland[k][1] -= minCol;
        }
        if (currentIslandUnique()) {
          uniqueIland.push(currentIland);
        }
        currentIland = [];
      }
    }
  }
  return uniqueIland.length;
};

let grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(numDistinctIslands(grid));
