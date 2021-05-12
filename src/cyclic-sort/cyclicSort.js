let arr = [2, 6, 4, 3, 1, 5];

const cyclicSort = function (nums) {
  let i = 0,
    j;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }
  console.log(arr);
};

cyclicSort(arr);
