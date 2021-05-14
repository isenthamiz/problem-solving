let arr = [1, 5, 2, 6, 4];

const findMissingNumber = function (arr) {
  let x1 = 1,
    x2,
    n = arr.length + 1;

  for (let i = 2; i <= n; i++) {
    x1 = x1 ^ i;
  }

  x2 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    x2 = x2 ^ arr[i];
  }

  return x1 ^ x2;
};

console.log(findMissingNumber(arr));
