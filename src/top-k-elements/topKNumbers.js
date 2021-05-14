const Heap = require("collections/heap");

const findKLargestNumbers = function (nums, k) {
  let minHeap = new Heap([], null, (a, b) => b - a);

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.toArray();
};

const nums = [3, 1, 5, 12, 2, 11],
  k = 3;

console.log(findKLargestNumbers(nums, k));
