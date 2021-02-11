const calculator = function (expr) {
  let stack = [],
    operator = "+",
    cnum = "";
  for (let i = 0; i < expr.length; i++) {
    let ch = expr[i];

    if (ch == "+" || ch == "-") {
      operator = ch;
      stack.push(cnum);
      cunum = "";
    } else {
      cnum += ch;
    }
  }
};

const e = "33+2*2/2";

calculator(e);
