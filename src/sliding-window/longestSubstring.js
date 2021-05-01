var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    n = s.length;
  let hmap = new Set();
  let max = 0;
  while (i < n && j < n) {
    if (!hmap.has(s[j])) {
      hmap.add(s[j++]);
      max = Math.max(max, hmap.size);
    } else {
      hmap.delete(s[i++]);
    }
  }
  return max;
};

lengthOfLongestSubstring("pwwkew");
