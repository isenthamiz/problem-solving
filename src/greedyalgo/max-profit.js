var maxProfit = function (prices) {
  const calculate = function (prices, index) {
    if (index >= prices.length) {
      return 0;
    }
    let max = 0;
    for (let i = index; i < prices.length; i++) {
      let maxProfit = 0;
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[i] < prices[j]) {
          let profit = calculate(prices, j + 1) + prices[j] - prices[i];
          maxProfit = profit > maxProfit ? profit : maxProfit;
        }
      }
      max = max < maxProfit ? maxProfit : max;
    }
    return max;
  };

  return calculate(prices, 0);
};

var maxProfit1 = function (prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};
