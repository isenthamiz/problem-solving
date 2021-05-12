const search_min_diff_element = function (arr, key) {
  // TODO: Write your code here
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] == key) {
      return key;
    }
    if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (arr[left] - key < key - arr[right]) {
    return arr[left];
  }
  return arr[right];
};

console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
