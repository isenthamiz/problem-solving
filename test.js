const arr = [2, 1, 5, 6, 2, 3];

const largestRectangle = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    for (let j = i, k = 1; j < arr.length; j++, k++) {
      min = min > arr[j] ? arr[j] : min;
      result = Math.max(result, min * k);
    }
  }
  console.log(result);
};

largestRectangle(arr);

const largestRectangleStack = function (arr) {
  let stack = [];
  stack.push(-1);
  let maxHeight = 0;

  for (let i = 0; i < arr.length; i++) {
    while (
      stack[stack.length - 1] != -1 &&
      arr[i] <= arr[stack[stack.length - 1]]
    ) {
      let currentHeight = arr[stack.pop()];
      let currentWidth = i - stack[stack.length - 1] - 1;
      maxHeight = Math.max(maxHeight, currentHeight * currentWidth);
    }
    stack.push(i);
  }
  while (stack[stack.length - 1] != -1) {
    let currentHeight = arr[stack.pop()];
    let currentWidth = arr.length - stack[stack.length - 1] - 1;
    maxHeight = Math.max(maxHeight, currentHeight * currentWidth);
  }
  console.log(maxHeight);
};

largestRectangleStack(arr);

const largestRectangleDivideAndConquire = function (arr) {
  const helper = function (arr, low, high) {
    if (low > high) {
      return 0;
    }
    let mid = Math.floor((low + high) / 2);
    helper(arr, low, mid);
    helper(arr, mid + 1, high);
  };

  let maxHeight = 0;
  helper(arr, 0, arr.length - 1);
};
