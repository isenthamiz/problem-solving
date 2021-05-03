const arr = [1, 2, 3, 4, 6],
  t = 6;

const findSum = function (arr, t) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum < t) {
      i += 1;
    } else if (sum > t) {
      j -= 1;
    } else {
      return [arr[i], arr[j]];
    }
  }

  return [];
};

console.log(findSum(arr, t));
