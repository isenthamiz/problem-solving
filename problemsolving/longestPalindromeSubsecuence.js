const str = "GEEKSFORGEEKS";

const longestPanlindrom = (str) => {
  const lps = (s, i, j) => {
    if (i == j) {
      return 1;
    }

    if (s[i] == s[j] && i + 1 == j) {
      return 2;
    }

    if (s[i] == s[j]) {
      return lps(s, i + 1, j - 1) + 2;
    }

    return Math.max(lps(s, i + 1, j), lps(s, i, j - 1));
  };

  let i = 0;
  let j = str.length - 1;
  return lps(str, i, j);
};

console.log(longestPanlindrom(str));
