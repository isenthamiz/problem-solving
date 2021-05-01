var myAtoi = function (s) {
  let i = 0;
  let isNegative = false;
  let num = 0;
  while (i < s.length) {
    if (isNaN(s[i]) && s[i] != "-" && s[i] != "+") {
      break;
    }
    if (s[i] != " " && s[i] != "-" && s[i] != "+") {
      num = num * 10 + (s[i] - "0");
    } else if (s[i] == "-") {
      isNegative = true;
    }
    i++;
  }
  num = num < 2 ** 31 ? num : isNegative ? 2 ** 31 : 2 ** 31 - 1;

  return isNegative ? -num : num;
};
