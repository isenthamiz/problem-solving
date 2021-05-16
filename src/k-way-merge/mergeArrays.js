const Heap = require("collections/heap");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const mergeLists = function (lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let result = [];
  for (let list of lists) {
    minHeap.push([list[0], 0, list]);
  }

  while (minHeap.length) {
    let [num, idx, list] = minHeap.pop();
    result.push(num);
    if (idx < list.length - 1) {
      minHeap.push([list[idx + 1], idx + 1, list]);
    }
  }

  return result;
};

const arr1 = [2, 6, 8];
const arr2 = [3, 6, 7];
const arr3 = [1, 3, 4];

console.log(mergeLists([arr1, arr2, arr3]));
