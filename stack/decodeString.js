const expr = "3[a2[bc]]";

const decodeString = function (expr) {
  let result = "";
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let ch = expr[i];
    let list = [];
    if (ch == "]") {
      while (stack[stack.length - 1] != "[") {
        list.push(stack.pop());
      }
      stack.pop();
      let num = 0;
      if (stack.length && !isNaN(parseInt(stack[stack.length - 1]))) {
        num = parseInt(stack.pop());
      }

      while (num != 0) {
        for (let k = list.length - 1; k >= 0; k--) {
          stack.push(list[k]);
        }
        num--;
      }
    } else {
      stack.push(ch);
    }
  }
  while (stack.length) {
    result = result + stack.shift();
  }
  return result;
};

console.log(decodeString(expr));
