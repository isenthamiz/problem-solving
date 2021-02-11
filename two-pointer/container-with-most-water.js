var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let ans = 0;
  while (left < right) {
    let small = Math.min(height[left], height[right]);
    ans = Math.max(ans, (right - left) * small);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

maxArea(arr);
