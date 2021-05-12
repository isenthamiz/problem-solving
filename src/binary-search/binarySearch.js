const binary_search = function (arr, key) {
  // TODO: Write your code here
  let left = 0,
    right = arr.length - 1;
  let is_assessending = arr[left] < arr[right];
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (key == arr[mid]) {
      return arr[mid];
    }
    if (is_assessending) {
      if (key < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (key > arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
