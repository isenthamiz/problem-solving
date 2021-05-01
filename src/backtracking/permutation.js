const arr = [1, 2, 3];

const permutation = function (arr) {
  const helper = function (arr, i, n, output) {
    if (i == n) {
      output.add([...arr]);
    }
    for (let k = i; k < n; k++) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      helper(arr, i + 1, n, output);
      [arr[i], arr[k]] = [arr[k], arr[i]];
    }
  };
  let output = new Set();
  helper(arr, 0, arr.length, output);
  console.log(output);
};

permutation(arr);
