const wordBreakRe = function (str, arr) {
  const helper = function (str, dict, n, start) {
    if (start == n) {
      return true;
    }
    for (let end = start + 1; end <= n; end++) {
      if (dict.has(str.substr(start, end)) && helper(str, dict, n, end)) {
        return true;
      }
    }
    return false;
  };

  let s = new Set();
  arr.forEach((w) => s.add(w));
  return helper(str, s, str.length, 0);
};

console.log(wordBreak(word, wordArr));
