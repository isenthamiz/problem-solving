var lengthOfLongestSubstringKDistinct = function (s, k) {
  let n = s.length;
  if (n * k == 0) {
    return 0;
  }
  let left = 0,
    right = 0,
    max = 1;
  let hmap = new Map();

  while (right < n) {
    hmap.set(s[right], right++);

    if (hmap.size > k) {
      let lowIndex = Infinity;
      for (v of hmap.values()) {
        lowIndex = Math.min(lowIndex, v);
      }
      hmap.delete(s[lowIndex]);
      left = lowIndex + 1;
    }

    max = Math.max(max, right - left);
  }

  console.log(max);
};

lengthOfLongestSubstringKDistinct("loveleetcode", 4);
