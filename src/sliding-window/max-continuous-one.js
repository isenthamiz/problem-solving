var longestOnes = function (nums, k) {
  let start = 0,
    end = 0,
    ans = 0;
  for (end = 0; end < nums.length; end++) {
    k -= nums[end] === 0 ? 1 : 0;
    if (k < 0) {
      if (nums[start] === 0) {
        k += 1;
      }
      start += 1;
    }
    ans = Math.max(ans, end - start + 1);
  }
  return ans;
};
