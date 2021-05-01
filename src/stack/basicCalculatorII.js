const expr = "3+5 / 2";

const calculator = function (expr) {
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
          stack.push(Math.floor(stack.pop() / currentNumber));
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

  console.log(result);
};

calculator(expr);
