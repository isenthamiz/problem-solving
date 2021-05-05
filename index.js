var jump = function (nums) {
  const helper = function (nums, idx, cache) {
    if (idx >= nums.length - 1) {
      return 1;
    }
    if (cache[idx] != 0) {
      return cache[idx];
    }
    let c1 = 0;
    for (let i = 1; i <= nums[idx]; i++) {
      c1 += helper(nums, idx + i, cache);
      ans = Math.min(Infinity, c1);
    }
    return c1;
  };

  let ans = Infinity;
  let cache = new Array(nums.length).fill(0);
  helper(nums, 0, cache);
  return ans;
};

let arr = [2, 3, 1, 1, 4];

console.log(jump(arr));
