const Heap = require("collections/heap");

const kThSmallestNumber = function (nums, k) {
  let maxHeap = new Heap([], null, (a, b) => a - b);

  for (let i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }

  return maxHeap.peek();
};

const arr = [1, 5, 12, 2, 11, 5],
  k = 3;

console.log(kThSmallestNumber(arr, k));
