const arr = [30, 10, 50, 20, 60, 40];

const insertionSort = function (arr) {
  let i = 1,
    n = arr.length;
  while (i < n) {
    let currentNum = arr[i],
      j = i;
    while (arr[j - 1] > currentNum && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = currentNum;
    i++;
  }
  console.log(arr);
};

insertionSort(arr);
