const str = "xaabaacy";

const longestPalindrom = function (str) {
  const isPalindorm = (str) => {
    const reverseStr = str.split("").reverse().join("");
    return str == reverseStr;
  };
  const helper = (s) => {
    if (!s) {
      return "";
    }
    if (isPalindorm(s)) {
      return s;
    }

    const str1 = helper(s.substr(1));
    const str2 = helper(s.substr(0, s.length - 1));

    return str1.length > str2.length ? str1 : str2;
  };

  return helper(str);
};

console.log(longestPalindrom(str));
