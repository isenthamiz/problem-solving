/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
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

module.exports = characterReplacement;
