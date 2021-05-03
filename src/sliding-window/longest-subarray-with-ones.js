const length_of_longest_substring = function (arr, k) {
  // TODO: Write your code here
  let start = 0,
    end,
    n = arr.length,
    zeroCount = 0,
    maxLen = 0;
  for (end = 0; end < n; end++) {
    zeroCount += arr[end] == 0 ? 1 : 0;
    if (zeroCount > k) {
      zeroCount -= arr[start] == 0 ? 1 : 0;
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

module.exports = length_of_longest_substring;
