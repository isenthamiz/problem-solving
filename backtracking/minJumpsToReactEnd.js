const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

const minJumps = function (arr) {
  const helper = function (arr, i, n) {
    if (memo[i]) {
      return memo[i];
    }
    if (i == n) {
      return 0;
    }
    if (arr[i] == 0) {
      return Infinity;
    }

    let min = Infinity;

    for (let j = i + 1; j <= n && j <= arr[i] + i; j++) {
      let jumps = helper(arr, j, n);
      if (jumps != Infinity && jumps + 1 < min) {
        min = jumps + 1;
      }
    }
    memo[i] = min;
    return min;
  };
  let memo = new Array(arr.length).fill(0);
  return helper(arr, 0, arr.length - 1);
};
