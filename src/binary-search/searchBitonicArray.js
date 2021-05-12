const search_bitonic_array = function (arr, key) {
  // TODO: Write your code here
  let max_index = findMaxIndex(arr);
  let key_index = binarySearch(arr, key, 0, max_index);
  if (key_index == -1) {
    key_index = binarySearch(arr, key, max_index + 1, arr.length - 1);
  }
  return key_index;
};

const findMaxIndex = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const binarySearch = function (arr, key, start, end) {
  let key_index = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] == key) {
      return mid;
    }
    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return key_index;
};

console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));
