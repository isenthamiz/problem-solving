const find_happy_number = function (num) {
  // TODO: Write your code here
  let slow = num;
  let fast = num;
  while (true) {
    slow = square_sum(slow);
    fast = square_sum(square_sum(fast));
    if (slow == fast) {
      break;
    }
  }
  return slow == 1;
};

const square_sum = function (num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};
