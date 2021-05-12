const find_missing_numbers = function (nums) {
  let i = 0,
    j,
    missingNumbers = [];
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
};
