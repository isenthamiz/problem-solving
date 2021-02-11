const arr = [30, 20, 40, 10, 80, 50, 15];

const mergeSort = function (arr) {
  const helper = function (arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let m = Math.floor(arr.length / 2);
    let left = arr.slice(0, m);
    let right = arr.slice(m);
    return merge(helper(left), helper(right));
  };

  const merge = function (left, right) {
    let result = [],
      leftIndex = 0,
      rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };

  helper(arr);
  console.log(arr);
};

mergeSort(arr);
