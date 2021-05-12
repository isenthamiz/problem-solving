const find_missing_number = function (nums) {
  // TODO: Write your code here
  let i = 0,
    j;
  while (i < nums.length) {
    j = nums[i];
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i != nums[i]) {
      return i;
    }
  }
  return -1;
};
