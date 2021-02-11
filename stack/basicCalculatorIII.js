const expr = "(2+6* 3+5- (3*14/7+2)*5)+3";

const calculate = function (expr) {
  if (!expr) {
    return 0;
  }
  let currentNumber = 0,
    stack = [],
    operator = "+";
  for (let i = 0; i < expr.length; i++) {
    let ch = expr[i];
    if (!isNaN(parseInt(ch))) {
      currentNumber = currentNumber * 10 + (ch - "0");
    }
    if ((isNaN(parseInt(ch)) && !(ch == " ")) || i == expr.length - 1) {
      switch (operator) {
        case "+":
          stack.push(currentNumber);
          break;
        case "-":
          stack.push(-currentNumber);
          break;
        case "*":
          stack.push(stack.pop() * currentNumber);
          break;
        case "/":
          stack.push(Math.round(stack.pop() / currentNumber));
          break;
      }
      operator = ch;
      currentNumber = 0;
    }
  }
  let result = 0;
  while (stack.length) {
    result += stack.pop();
  }

  return result;
};

const main = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch == ")") {
      let expr = "";
      while (stack[stack.length - 1] != "(") {
        expr = stack.pop() + expr;
      }
      stack.pop();
      stack.push(calculate(expr));
    } else {
      stack.push(ch);
    }
  }
  let cexpr = "";
  while (stack.length) {
    cexpr = stack.pop() + cexpr;
  }
  return calculate(cexpr);
};

console.log(main(expr));
