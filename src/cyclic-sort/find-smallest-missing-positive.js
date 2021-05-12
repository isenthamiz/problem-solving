const find_first_smallest_missing_positive = function (nums) {
  // TODO: Write your code here
  let i = 0,
    j;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) {
      return i + 1;
    }
  }
  return -1;
};
