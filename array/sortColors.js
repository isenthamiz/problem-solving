/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  let tmp;
  while (mid <= high) {
    if (nums[mid] == 0) {
      tmp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = tmp;
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      tmp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = tmp;
      high--;
    }
  }
};

let arr = [2, 0, 2, 1, 1, 0];
