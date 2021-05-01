/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
class Heap {
  constructor() {
    this.heap = [];
  }

  insert(data) {
    this.heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let child = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];
      if (child[1] < parent[1]) {
        this.heap[index] = parent;
        this.heap[parentIndex] = child;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    let min = this.heap.shift();
    if (this.heap.length) {
      this.heap.unshift(this.heap.pop());
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    while (true) {
      let left = 2 * index + 1,
        right = 2 * index + 2,
        swapIndex = null;
      if (this.heap[index][1] > this.heap[right][1]) {
        swapIndex = right;
      }
      if (
        this.heap[index][1] > this.heap[left][1] &&
        (!this.heap[right] ||
          (this.heap[right] && this.heap[left][1] < this.heap[right][1]))
      ) {
        swapIndex = left;
      }
      if (!swapIndex) {
        break;
      }
      let tmp = this.heap[swapIndex];
      this.heap[swapIndex] = this.heap[index];
      this.heap[index] = tmp;
      index = swapIndex;
    }
  }
}

var kClosest = function (points, K) {
  let h = new Heap();

  for (let i = 0; i < points.length; i++) {
    let x = points[i][0] * points[i][0];
    let y = points[i][1] * points[i][1];

    let distance = x + y;

    h.insert([i, distance]);
  }
  let output = [];
  for (let i = 0; i < K; i++) {
    let p = points[h.extractMin()[0]];
    output.push(p);
  }
  return output;
};

const points = [
    [1, 3],
    [-2, 2],
  ],
  k = 1;
kClosest(points, k);
