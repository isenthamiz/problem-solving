const Heap = require("collections/heap");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const kThSmallestNumber = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let list of nums) {
    minHeap.push([list[0], 0, list]);
  }
  let num,
    idx,
    list,
    num_count = 0;
  while (minHeap.length) {
    [num, idx, list] = minHeap.pop();
    num_count += 1;
    if (num_count == k) {
      break;
    }
    if (idx < list.length - 1) {
      minHeap.push([list[idx + 1], idx + 1, list]);
    }
  }

  return num;
};

const arr1 = [2, 6, 8];
const arr2 = [3, 6, 7];
const arr3 = [1, 3, 4];

console.log(kThSmallestNumber([arr1, arr2, arr3], 5));
