var jump = function (nums) {
  let jumps = 0,
    currentJumpEnd = 0,
    farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i == currentJumpEnd) {
      jumps += 1;
      currentJumpEnd = farthest;
    }
  }
  return jumps;
};
