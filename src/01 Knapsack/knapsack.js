const profit = [1, 6, 10, 16];
const weight = [1, 2, 3, 5];
const capacity = 6;

const solveKnapsack = function (profit, weight, capacity) {
  const dfsHelper = function (profits, weight, capacity, idx, cache) {
    if (idx >= profits.length || capacity <= 0) {
      return 0;
    }
    cache[idx] = cache[idx] || [];
    if (cache[idx][capacity] != undefined) {
      return cache[idx][capacity];
    }

    let profit1 = 0;

    if (weight[idx] <= capacity) {
      profit1 =
        profits[idx] +
        dfsHelper(profits, weight, capacity - weight[idx], idx + 1, cache);
    }

    let profit2 = dfsHelper(profits, weight, capacity, idx + 1, cache);

    cache[idx][capacity] = Math.max(profit1, profit2);

    return cache[idx][capacity];
  };
  let cache = [];
  return dfsHelper(profit, weight, capacity, 0, cache);
};

const solveKnapsackDp = function (profits, weights, capacity) {
  let n = profits.length;
  let dp = new Array(weights.length + 1)
    .fill(0)
    .map((r) => new Array(capacity).fill(0));

  for (let i = 0; i < capacity; i++) {
    if (weights[0] <= i) dp[0][i] = profits[i];
  }

  for (let i = 1; i < profits.length; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0,
        profit2 = 0;
      if (weights[i] <= c) {
        profit1 = profits[i] + dp[i - 1][c - weights[i]];
      }
      profit2 = dp[i - 1][c];

      dp[i][c] = Math.max(profit1, profit2);
    }
  }

  return dp[n - 1][capacity];
};

console.log(solveKnapsack(profit, weight, capacity));

console.log(solveKnapsackDp(profit, weight, capacity));
