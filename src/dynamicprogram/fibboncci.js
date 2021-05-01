const fibb = function (num) {
  if (num == 1 || num == 2) {
    return 1;
  }

  return fibb(num - 1) + fibb(num - 2);
};

const fibbMemo = function (num) {
  const helper = function (num, memo) {
    if (memo[num]) {
      return memo[num];
    }
    if (num == 1 || num == 2) {
      return 1;
    }

    let result = fibbMemo(num - 1) + fibbMemo(num - 2);
    memo[num] = result;
    return result;
  };
  let memo = new Array(num + 1).fill(0);
  memo[1] = 1;
  memo[2] = 1;
  return helper(num, memo);
};

const fibbDp = function (num) {
  let dp = new Array(num + 1).fill(0);
  let n = dp.length;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num];
};

const result = fibbDp(100);

console.log(result);
