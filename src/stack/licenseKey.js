var licenseKeyFormatting = function (S, K) {
  let stack = [];
  let result = "",
    n = K;
  for (let i = 0; i < S.length; i++) {
    S[i] != "-" && stack.push(S[i]);
  }

  while (stack.length) {
    if (n > 0) {
      result = stack.pop() + result;
      n--;
    } else {
      result = "-" + result;
      n = K;
    }
  }
  return result.toUpperCase();
};
