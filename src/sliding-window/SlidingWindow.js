const lengthOfLongestSubstring = function (s) {
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

var characterReplacement = function (s, k) {
  let start = 0,
    maxLen = 0,
    maxCharFre = 0,
    frequency = {};

  for (let end = 0; end < s.length; end++) {
    let rightChar = s[end];
    if (!frequency[rightChar]) {
      frequency[rightChar] = 0;
    }
    frequency[rightChar] += 1;

    maxCharFre = Math.max(maxCharFre, frequency[rightChar]);

    if (end - start + 1 - maxCharFre > k) {
      let leftChar = s[start];
      frequency[leftChar] -= 1;
      start += 1;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};

const find_average_of_subarray = function (arr, k) {
  let start = 0,
    end = 0,
    n = arr.length;
  let sum = 0;
  let result = [];
  while (end < n) {
    sum += arr[end];
    if (end >= k - 1) {
      result.push(sum / k);
      sum -= arr[start++];
    }
    end++;
  }
  return result;
};

module.exports = {
  lengthOfLongestSubstring,
  characterReplacement,
  find_average_of_subarray,
};
