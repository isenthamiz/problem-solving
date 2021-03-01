const arr = [
  [4, 7, 8, 6, 4],
  [6, 7, 3, 9, 2],
  [3, 8, 1, 2, 4],
  [7, 1, 7, 3, 7],
  [2, 9, 8, 9, 3],
];

const minCostEndOfArray = function (arr) {
  const helper = function (arr, i, j) {
    if (i < 0 || j < 0) {
      return Infinity;
    }
    if (i <= 0 && j <= 0) {
      return arr[0][0];
    }
    let c1 = helper(arr, i - 1, j);
    let c2 = helper(arr, i, j - 1);
    let minC = Math.min(c1, c2);
    let currentC = arr[i][j];
    return currentC + minC;
  };
  let r = arr.length;
  let c = arr[0].length;
  let ans = helper(arr, r - 1, c - 1);
  console.log(ans);
};

minCostEndOfArray(arr);
