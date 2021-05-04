const backspace_compare = function (str1, str2) {
  // TODO: Write your code here
  let m = str1.length - 1;
  let n = str2.length - 1;

  while (m >= 0 || n >= 0) {
    let i1 = getValidCharIndex(str1, m);
    let i2 = getValidCharIndex(str2, n);
    if (i1 < 0 && i2 < 0) {
      return true;
    } else if (i1 < 0 || i2 < 0) {
      return false;
    }
    if (str1[i1] != str2[i2]) {
      return false;
    }
    m = i1 - 1;
    n = i2 - 1;
  }
  return true;
};

const getValidCharIndex = function (str, idx) {
  let backspaceCount = 0;
  while (idx >= 0) {
    if (str[idx] === "#") {
      backspaceCount += 1;
    } else if (backspaceCount > 0) {
      backspaceCount -= 1;
    } else {
      break;
    }
    idx -= 1;
  }
  return idx;
};
