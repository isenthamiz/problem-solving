const nums = [3, 0, -2, -1, 1, 2];

const threeSum = function (nums) {
  nums.sort();
  let i = 0,
    low = i + 1,
    high = nums.length - 1;
  let result = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i == 0 || nums[i - 1] != nums[i]) {
      while (low < high) {
        let sum = nums[i] + nums[low] + nums[high];
        if (sum < 0) {
          ++low;
        } else if (sum > 0) {
          --high;
        } else {
          result.push([nums[i], nums[low++], nums[high--]]);
          while (low < high && nums[low] == nums[low - 1]) {
            ++low;
          }
        }
      }
    }
  }
  console.log(result);
};

threeSum(nums);
