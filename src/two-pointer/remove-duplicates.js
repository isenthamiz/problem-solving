const remove_duplicates = function (arr) {
  // TODO: Write your code here
  let i = 1,
    j = 1,
    n = arr.length;
  while (i < n) {
    if (arr[j - 1] != arr[i]) {
      arr[j] = arr[i];
      j += 1;
    }
    i += 1;
  }
  return j;
};
