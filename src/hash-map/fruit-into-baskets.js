/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let n = tree.length,
    k = 2;
  if (n * k == 0) {
    return 0;
  }
  let left = 0,
    right = 0,
    max = 1;
  let hmap = new Map();

  while (right < n) {
    hmap.set(tree[right], right++);

    if (hmap.size > k) {
      let lowIndex = Infinity;
      for (v of hmap.values()) {
        lowIndex = Math.min(lowIndex, v);
      }
      hmap.delete(tree[lowIndex]);
      left = lowIndex + 1;
    }

    max = Math.max(max, right - left);
  }

  return max;
};
