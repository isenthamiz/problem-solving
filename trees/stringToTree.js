class Node {
  constructor(data = null) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

const str = "4(2(3)(1))(6(5))";

const str2tree = function (str) {
  if (!str) {
    return null;
  }
  let stack = [];
  let root = new Node();
  stack.push(root);
  let index = 0;
  while (index < str.length) {
    let node = stack.pop();
    if (!isNaN(str[index]) || str[index] == "-") {
      let pair = getNum(str, index);
      node.data = pair[0];
      index = pair[1];

      if (index < str.length && str[index] == "(") {
        stack.push(node);
        node.left = new Node();
        stack.push(node.left);
      }
    } else if (str[index] == "(" && node.left != null) {
      stack.push(node);
      node.right = new Node();
      stack.push(node.right);
    }
    index++;
  }
  return !stack.length ? root : stack.pop();
};

const getNum = function (s, i) {
  let isNegative = false;
  if (s[i] == "-") {
    isNegative = true;
    i++;
  }
  let number = 0;
  while (i < s.length && !isNaN(s[i])) {
    number = number * 10 + (s[i] - "0");
    i++;
  }
  return [isNegative ? -number : number, i];
};

console.log(str2tree(str));
