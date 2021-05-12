const find_range = function (arr, key) {
  result = [-1, -1];
  // TODO: Write your code here
  result[0] = binarySearch(arr, key, false);
  if (result[0] != -1) {
    result[1] = binarySearch(arr, key, true);
  }
  return result;
};

const binarySearch = function (arr, key, findMaxIndex) {
  let left = 0,
    right = arr.length - 1,
    keyIndex = -1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > key) {
      right = mid - 1;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      keyIndex = mid;
      if (findMaxIndex) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return keyIndex;
};
