const zeroOneKnapsack = function () {
  const helper = function (i, n, tot) {
    if (i >= n) {
      return 0;
    }
    let a = 0,
      b = 0;
    if (weight[i] < tot) {
      a = profit[i] + helper(i + 1, n, tot - weight[i]);
    }
    b = helper(i + 1, n, tot);

    return Math.max(a, b);
  };
  let profit = [31, 26, 72, 17];
  let weight = [3, 1, 5, 2];
  let K = 7;
  let max = helper(0, profit.length, K);
  console.log(max);
};

zeroOneKnapsack();
