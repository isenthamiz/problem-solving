const Heap = require("collections/heap");

const maximumDistinctElements = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  let numFrequency = {},
    distinct_elements = 0;
  for (let num of nums) {
    if (!numFrequency[num]) {
      numFrequency[num] = 0;
    }
    numFrequency[num] += 1;
  }
  for (let num in numFrequency) {
    if (numFrequency[num] == 1) {
      distinct_elements += 1;
    } else {
      minHeap.push(numFrequency[num]);
    }
  }

  while (k > 0 && minHeap.length) {
    const frequency = minHeap.pop();
    k -= frequency - 1;
    if (k >= 0) {
      distinct_elements += 1;
    }
  }

  if (k > 0) {
    distinct_elements -= k;
  }

  return distinct_elements;
};

const arr = [7, 3, 5, 8, 5, 3, 3],
  k = 2;

console.log(maximumDistinctElements(arr, k));
