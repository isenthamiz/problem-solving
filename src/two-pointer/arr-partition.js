const arrayPartition = function (arr, k) {
  let left = 0,
    right = arr.length - 1,
    mid = 0;
  while (mid <= right) {
    if (arr[mid] < k) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left += 1;
      mid += 1;
    } else if (arr[mid] == k) {
      mid += 1;
    } else if (arr[mid] > k) {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right -= 1;
    }
    console.log(arr);
  }
  return arr;
};

const arr = [9, 12, 3, 5, 14, 10, 10, 11, 4, 1, 22, 10],
  k = 10;

console.log(arrayPartition(arr, k));
