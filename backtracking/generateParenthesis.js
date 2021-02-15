var generateParenthesis = function (n) {
  const helper = function (s, open, close, n) {
    if (s.length >= max) {
      combination.push(s);
      return;
    }

    if (open < n) {
      helper(s + "(", open + 1, close, n);
    }
    if (close < open) {
      helper(s + ")", open, close + 1, n);
    }
  };

  let combination = [];
  let max = 2 * n;
  helper("", 0, 0, n);
  console.log(combination);
};

generateParenthesis(3);
