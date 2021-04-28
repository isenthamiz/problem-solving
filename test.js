var furthestBuilding = function (heights, bricks, ladders) {
  const helper = function (heights, index, bricks, ladders) {
    if (index >= heights.length) {
      return 0;
    }
    if (bricks <= 0 && ladders <= 0) {
      return 0;
    }
    let c1 = 0,
      c2 = 0,
      c3 = 0;
    if (heights[index] > heights[index - 1]) {
      let diff = heights[index] - heights[index - 1];
      if (diff <= bricks) {
        c1 += 1 + helper(heights, index + 1, bricks - diff, ladders);
      }
      if (ladders > 0) {
        c2 += 1 + helper(heights, index + 1, bricks, ladders - 1);
      }
    } else {
      c3 += 1 + helper(heights, index + 1, bricks, ladders);
    }

    return Math.max(c1, c2, c3);
  };

  return helper(heights, 0, bricks, ladders);
};

const arr = [4, 2, 7, 6, 9, 14, 12];

console.log(furthestBuilding(arr, 5, 1));
