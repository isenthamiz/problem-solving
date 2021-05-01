const arr = [6, 7, 1, 30, 8, 2, 4];

const houseTheif = function (houses) {
  const helper = function (arr, i, n) {
    if (i >= n) {
      return 0;
    }
    let a = arr[i] + helper(arr, i + 2, n);
    let b = helper(arr, i + 1, n);
    return Math.max(a, b);
  };
  max = helper(houses, 0, houses.length);
  console.log(max);
};

houseTheif(arr);
