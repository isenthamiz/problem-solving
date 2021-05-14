const Heap = require("collections/heap");

const findKFrequentNumbers = function (nums, k) {
  const numFrequency = {};
  for (let num of nums) {
    if (!numFrequency[num]) {
      numFrequency[num] = 0;
    }
    numFrequency[num] += 1;
  }

  const minHeap = new Heap([], null, (a, b) => b[1] - a[1]);

  for (let num in numFrequency) {
    minHeap.push([num, numFrequency[num]]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  }

  let result = [];

  while (minHeap.length) {
    result.push(minHeap.pop()[0]);
  }

  return result;
};

const nums = [1, 3, 5, 12, 11, 12, 11],
  k = 2;

console.log(findKFrequentNumbers(nums, k));
