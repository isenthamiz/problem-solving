let nums = [10, 9, 2, 5, 3, 7, 101, 18];

const lengthOfLIS = function (nums) {
  const helper = (n, prev, index) => {
    if (index == n.length) {
      return 0;
    }

    let taken = 0;
    if (prev < n[index]) {
      taken = 1 + helper(n, n[index], index + 1);
    }
    let nottaken = helper(n, prev, index + 1);

    return Math.max(taken, nottaken);
  };

  return helper(nums, -Infinity, 0);
};

console.log(lengthOfLIS(nums));
