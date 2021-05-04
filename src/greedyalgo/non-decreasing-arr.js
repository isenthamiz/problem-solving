var checkPossibility = function (nums) {
  let available = 1;
  let currentMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (available == 0) {
        return false;
      }
      available -= 1;

      if (i < 2 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
};
