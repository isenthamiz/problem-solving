const checkValidString = function (str) {
  let open_stack = [],
    star_stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch == "(") {
      open_stack.push(i);
    } else if (ch == "*") {
      star_stack.push(i);
    } else {
      if (open_stack.length > 0) {
        open_stack.pop();
      } else if (star_stack.length > 0) {
        star_stack.pop();
      } else {
        return false;
      }
    }
  }

  while (
    open_stack[open_stack.length - 1] < star_stack[star_stack.length - 1]
  ) {
    open_stack.pop();
    star_stack.pop();
  }

  return open_stack.length == 0;
};

console.log(checkValidString("(*)*())aaa()"));
