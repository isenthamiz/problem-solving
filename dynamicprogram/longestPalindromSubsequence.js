const str = "BABCBAB";

const lps = function (str) {
  let row = str.length - 1;
  let col = row;

  let matrix = new Array(row).fill(null).map((e) => new Array(col).fill(null));

  for (let i = 0; i < row; i++) {
    matrix[i][i] = 1;
    for (let j = 1; i < col; j++) {
      for (let k = 0; k < col - j; k++) {}
    }
  }

  console.log(matrix);
};

lps(str);
