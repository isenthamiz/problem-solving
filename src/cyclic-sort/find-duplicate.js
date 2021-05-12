var findDuplicate = function (nums) {
  let i = 0,
    j;
  while (i <= nums.length) {
    if (nums[i] != i + 1) {
      j = nums[i] - 1;
      if (nums[i] != nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
};
