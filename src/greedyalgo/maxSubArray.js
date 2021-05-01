/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], nums[i] + currSum);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
