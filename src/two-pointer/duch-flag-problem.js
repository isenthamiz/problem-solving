const dutch_flag_sort = function (arr) {
  // TODO: Write your code here
  let left = 0,
    right = arr.length - 1,
    mid = 0;
  while (mid <= right) {
    if (arr[mid] == 0) {
      let tmp = arr[mid];
      arr[mid] = arr[left];
      arr[left] = tmp;
      mid += 1;
      left += 1;
    } else if (arr[mid] == 1) {
      mid += 1;
    } else {
      let tmp = arr[mid];
      arr[mid] = arr[right];
      arr[right] = tmp;
      right -= 1;
    }
  }
  return arr;
};
