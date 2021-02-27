const nums = [3, 0, -2, -1, 1, 2];

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let l,
    h,
    result = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    l = i + 1;
    h = nums.length - 1;
    if (i == 0 || nums[i - 1] != nums[i]) {
      while (l < h) {
        let sum = nums[i] + nums[l] + nums[h];
        console.log(sum);
        if (sum < 0) {
          l++;
        } else if (sum > 0) {
          h--;
        } else {
          result.push([nums[i], nums[l++], nums[h--]]);
          while (l < h && nums[l] == nums[l - 1]) {
            ++l;
          }
        }
      }
    }
  }
  return result;
};
