const findSingleNumbers = function (nums) {
  let n1xn2 = 0,
    right_most_set_bit = 1,
    num1 = 0,
    num2 = 0;
  for (let num of nums) {
    n1xn2 ^= num;
  }

  while ((right_most_set_bit & n1xn2) == 0) {
    right_most_set_bit = right_most_set_bit << 1;
  }

  for (let num of nums) {
    if ((num && right_most_set_bit) != 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
};

const arr = [1, 4, 2, 1, 3, 5, 6, 2, 3, 5];

console.log(findSingleNumbers(arr));
