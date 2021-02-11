let matrix = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

const noOfIslands = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  let TotIslands = 0;

  console.log(matrix);

  const helper = (matrix, i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col || matrix[i][j] == "0") {
      return;
    }

    matrix[i][j] = "0";

    helper(matrix, i - 1, j);
    helper(matrix, i + 1, j);
    helper(matrix, i, j - 1);
    helper(matrix, i, j + 1);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == "1") {
        TotIslands++;
        helper(matrix, i, j);
      }
    }
  }

  console.log(TotIslands);
};

noOfIslands(matrix);
