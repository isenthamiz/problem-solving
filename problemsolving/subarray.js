const arr = [1, 2, 3];

const getSubArray = function (arr = [], start = 0, end = 0) {
  if (end == arr.length) {
    return;
  }
  if (start > end) {
    getSubArray(arr, 0, ++end);
  } else {
    console.log(arr.slice(start, end + 1));
    getSubArray(arr, ++start, end);
  }
};

getSubArray(arr, 0, 0);
