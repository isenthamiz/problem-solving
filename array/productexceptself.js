var productExceptSelf = function (nums) {
  let answer = [];
  answer[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let R = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R = R * nums[i];
  }

  return answer;
};

const arr = [1, 2, 3, 4];

console.log(productExceptSelf(arr));
