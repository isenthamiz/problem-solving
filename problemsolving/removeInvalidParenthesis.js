const expr = "(e)())()";

const isValid = function (str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    switch (ch) {
      case "(":
        stack.push(ch);
        break;
      case ")":
        if (!(stack.pop() == "(")) {
          return false;
        }
      default:
        continue;
    }
  }
  return stack.length ? false : true;
};

const removeInvalidParenthesis = function (e) {
  let queue = [];
  let visit = new Set();
  queue.push(e);
  visit.add(e);

  while (queue.length) {
    let ex = queue.shift();
    if (isValid(ex)) {
      console.log(ex);
      continue;
    }
    for (let i = 0; i < ex.length; i++) {
      if (!(ex[i] == "(" || ex[i] == ")")) {
        continue;
      }
      let tmp = ex.substr(0, i) + ex.substr(i + 1);
      if (!visit.has(tmp)) {
        visit.add(tmp);
        queue.push(tmp);
      }
    }
  }
};

removeInvalidParenthesis(expr);
