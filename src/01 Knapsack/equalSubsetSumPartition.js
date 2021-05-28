const canPartition = function (nums) {
  let cache = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 != 0) {
    return false;
  }
  return dfsHelper(nums, 0, sum / 2, cache);
};

const dfsHelper = function (nums, i, sum, cache) {
  if (sum == 0) {
    return true;
  }
  if (i >= nums.length) {
    return false;
  }
  cache[i] = cache[i] || [];

  if (cache[i][sum] == undefined) {
    if (nums[i] <= sum) {
      if (dfsHelper(nums, i + 1, sum - nums[i], cache)) {
        cache[i][sum] = true;
        return true;
      }
    }
    cache[i][sum] = dfsHelper(nums, i + 1, sum, cache);
  }

  return cache[i][sum];
};

const nums = [1, 1, 3, 4, 7];

console.log(canPartition(nums));
