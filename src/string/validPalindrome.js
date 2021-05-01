const isPalindrome = function (str, low, high) {
  while (low < high) {
    if (str[low] != str[high]) {
      return false;
    }
  }
  return true;
};

const validPalindrome = function (str) {
  let low = 0;
  let high = str.length - 1;
  while (low <= high) {
    if (str[low] == str[high]) {
      low++;
      high--;
    } else {
      if (isPalindrome(str, low++, high) || isPalindrome(str, low, high--)) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(validPalindrome("abavva"));
