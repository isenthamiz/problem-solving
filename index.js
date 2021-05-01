const generateParentheses = function (n) {
  const helper = function (str, open, close, max) {
    if (str.length == 2 * max) {
      console.log(str);
      return;
    }

    if (open < max) {
      helper(str + "(", open + 1, close, max);
    }
    if (close < open) {
      helper(str + ")", open, close + 1, max);
    }
  };

  helper("", 0, 0, n);
};

generateParentheses(3);
