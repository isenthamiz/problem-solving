let s = "(11+(4+5+2)-3)+(6+8)";

const basicCalc = function (s) {
  let stack = [];
  let oper = 0;
  let result = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!isNaN(parseInt(s[i]))) {
      oper = 10 * oper + parseInt(s[i]);
    } else if (ch == "+") {
      result += sign * oper;
      sign = 1;
      oper = 0;
    } else if (ch == "-") {
      result += sign * oper;
      sign = -1;
      oper = 0;
    } else if (ch == "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (ch == ")") {
      result += sign * oper;
      result *= stack.pop();
      result += stack.pop();
      oper = 0;
    }
  }
  console.log(result + sign * oper);
};

basicCalc(s);
