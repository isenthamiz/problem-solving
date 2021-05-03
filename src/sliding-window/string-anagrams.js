const find_string_anagrams = function (str, pattern) {
  let result_indexes = [],
    start = 0,
    end,
    charFrequency = {},
    matched = 0;
  for (let i = 0; i < pattern.length; i++) {
    let ch = pattern[i];
    if (!charFrequency[ch]) {
      charFrequency[ch] = 0;
    }
    charFrequency[ch] += 1;
  }
  for (end = 0; end < str.length; end++) {
    let rightChar = str[end];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] == 0) {
        matched += 1;
      }
    }
    if (matched == pattern.length) {
      result_indexes.push(start);
    }
    if (end >= pattern.length - 1) {
      let leftChar = str[start];
      start += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] == 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return result_indexes;
};

module.exports = find_string_anagrams;
