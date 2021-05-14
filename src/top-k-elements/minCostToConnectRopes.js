const Heap = require("collections/heap");

const minCostToConnectRopes = function (rope_lengths) {
  let total = 0;
  const minHeap = new Heap([], null, (a, b) => b - a);
  for (let rl of rope_lengths) {
    minHeap.push(rl);
  }
  while (minHeap.length) {
    let r1 = minHeap.pop();
    let r2 = minHeap.pop();
    total += r1 + r2;
    if (minHeap.length) {
      minHeap.push(r1 + r2);
    }
  }
  return total;
};

const rope_lengths = [1, 3, 11, 5, 2];

console.log(minCostToConnectRopes(rope_lengths));
