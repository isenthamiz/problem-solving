const Heap = require("collections/heap");

const findSumOfElements = function (nums, k1, k2) {
  const minHeap = new Heap(nums, null, (a, b) => b - a);
  for (let i = 0; i < k1; i++) {
    minHeap.pop();
  }
  let sum = 0;
  for (let i = 0; i < k2 - k1 - 1; i++) {
    sum += minHeap.pop();
  }
  return sum;
};

const arr = [1, 3, 12, 5, 15, 11],
  k1 = 3,
  k2 = 6;

console.log(findSumOfElements(arr, k1, k2));
