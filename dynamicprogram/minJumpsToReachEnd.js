const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

const minJumpsDp = function (arr) {
  let n = arr.length,
    dp = new Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (j <= arr[i] + i) {
        dp[j] = Math.min(dp[j], dp[i] + 1);
      } else {
        break;
      }
    }
  }
  return dp[n - 1];
};

console.log(minJumpsDp(arr));
