const arr = [30, 10, 50, 20, 60, 40];

const selectionSort = function (arr) {
  let j = 0;
  let n = arr.length;
  let iMin = j;
  while (j < n) {
    let i = j + 1;
    while (i < n) {
      if (arr[i] < arr[iMin]) {
        iMin = i;
      }
      i++;
    }
    if (iMin != j) {
      [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }
    j++;
  }

  console.log(arr);
};

selectionSort(arr);
