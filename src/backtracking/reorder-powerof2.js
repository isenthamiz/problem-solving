const isPowerOfTwo = function (num) {
  if (num % 2 != 0 && num != 1) {
    return false;
  }
  let p = 0;
  while (true) {
    if (num == 2 ** p) {
      return true;
    }
    if (num < 2 ** p) {
      return false;
    }
    p++;
  }
};

const permutation = function (arr, i, n) {
  if (i == n) {
    if (arr[0] == 0) {
      return false;
    }
    let s = "";
    for (n of arr) {
      s += n;
    }
    return isPowerOfTwo(parseInt(s));
  }
  for (let k = i; k < n; k++) {
    [arr[i], arr[k]] = [arr[k], arr[i]];
    if (permutation(arr, i + 1, n)) {
      return true;
    }
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  return false;
};

var reorderedPowerOf2 = function (N) {
  let s = N.toString();
  let numArr = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    numArr[i] = s[i] - "0";
  }
  return permutation(numArr, 0, s.length);
};

console.log(reorderedPowerOf2(821));
