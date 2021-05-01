//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 5;

const find_average_of_subarray = function (arr, k) {
  let start = 0,
    end = 0,
    n = arr.length;
  let sum = 0;
  let result = [];
  while (end < n) {
    sum += arr[end];
    if (end >= k - 1) {
      result.push(sum / k);
      sum -= arr[start++];
    }
    end++;
  }
  console.log(result);
};

find_average_of_subarray(arr, k);
