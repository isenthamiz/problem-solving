const find_substring = function (str, pattern) {
  // TODO: Write your code here
  let start = 0,
    end = 0,
    charFrequency = {},
    matched = 0,
    substrLen = str.length + 1,
    substart = 0;

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
      if (charFrequency[rightChar] >= 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      if (substrLen > end - start + 1) {
        substrLen = end - start + 1;
        substart = start;
      }
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
  if (substrLen > str.length) {
    return "";
  }
  return str.substr(substart, substrLen);
};

module.exports = find_substring;
