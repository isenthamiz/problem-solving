var coinChange = function (coins, amount) {
  let n = coins.length;
  let result = 0;
  coins.sort((a, b) => a - b);
  for (let i = n - 1; i >= 0; i--) {
    if (amount >= coins[i]) {
      result += Math.floor(amount / coins[i]);
      amount = amount % coins[i];
    }
  }

  return amount ? -1 : result;
};

const coinChangeRe = function (coins, amount) {
  const helper = function (coins, amt, count) {
    if (amt < 0) {
      return -1;
    }
    if (amt == 0) {
      return 0;
    }
    if (count[amt - 1] != 0) {
      return count[amt - 1];
    }
    let min = Infinity;
    for (c of coins) {
      let res = helper(coins, amt - c, count);
      if (res >= 0 && res < min) {
        min = 1 + res;
      }
    }
    count[amt - 1] = min == Infinity ? -1 : min;
    return count[amt - 1];
  };
  let count = new Array(amount).fill(0);
  let result = helper(coins, amount, count);
  console.log(result);
};

const coins = [1, 2, 5];

const amount = 11;

coinChangeRe(coins, amount);
