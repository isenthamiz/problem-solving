const arr = [[6, 9, 7]];

const sprialTravel = function (arr) {
  let row_start = 0,
    row_end = arr.length - 1,
    col_start = 0,
    col_end = arr[0].length - 1;

  while (row_start <= row_end && col_start <= col_end) {
    for (let i = col_start; i <= col_end; i++) {
      if (arr[row_start][i] != "X") {
        console.log(arr[row_start][i]);
      }
      arr[row_start][i] = "X";
    }
    row_start++;
    for (let j = row_start; j <= row_end; j++) {
      if (arr[j][col_end] != "X") {
        console.log(arr[j][col_end]);
      }
      arr[j][col_end] = "X";
    }
    col_end--;
    if (row_start <= row_end) {
      for (let k = col_end; k >= col_start; k--) {
        if (arr[row_end][k] != "X") {
          console.log(arr[row_end][k]);
        }
        arr[row_end][k] = "X";
      }
      row_end--;
    }

    for (let l = row_end; l >= row_start; l--) {
      if (arr[l][col_start] != "X") {
        console.log(arr[l][col_start]);
      }
      arr[l][col_start] = "X";
    }
    col_start++;
  }
};

sprialTravel(arr);
