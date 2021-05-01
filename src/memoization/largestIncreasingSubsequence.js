const arr = [10, 9, 2, 5, 3, 7, 101, 18];

const lengthOfLIS = function (arr) {
  const helper = function (arr, prev, index, memo) {
    if (index == arr.length) {
      return 0;
    }
    if (memo[prev + 1][index] >= 0) {
      return memo[prev + 1][index];
    }
    let taken = 0;

    if (prev < 0 || arr[prev] < arr[index]) {
      taken = 1 + helper(arr, index, index + 1, memo);
    }
    let notTaken = helper(arr, prev, index + 1, memo);
    memo[prev + 1][index] = Math.max(taken, notTaken);
    return memo[prev + 1][index];
  };
  let memo = new Array(arr.length + 1)
    .fill(0)
    .map((c) => new Array(arr.length).fill(-1));

  return helper(arr, -1, 0, memo);
};

let result = lengthOfLIS(arr);

console.log(result);
