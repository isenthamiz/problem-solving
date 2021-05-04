const make_squares = function (arr) {
  let squares,
    left = 0,
    right = arr.length - 1,
    max_idx = arr.length - 1;
  squares = new Array(arr.length).fill(0);
  while (left <= right) {
    let lsquare = arr[left] * arr[left];
    let rsquare = arr[right] * arr[right];
    if (lsquare < rsquare) {
      squares[max_idx] = rsquare;
      right -= 1;
    } else {
      squares[max_idx] = lsquare;
      left += 1;
    }
    max_idx -= 1;
  }
  // TODO: Write your code here
  return squares;
};
