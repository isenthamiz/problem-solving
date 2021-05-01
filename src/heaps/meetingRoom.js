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
    while (index >= 0) {
      let child = this.heap[index],
        parentIndex = Math.floor((index - 1) / 2),
        parent = this.heap[parentIndex];
      if (child < parent) {
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
      if (this.heap[index] > this.heap[right]) {
        swapIndex = right;
      }
      if (
        this.heap[index] > this.heap[left] &&
        (!this.heap[right] ||
          (this.heap[right] && this.heap[left] < this.heap[right]))
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

const intervals = [
  [7, 10],
  [2, 4],
];

const scheduleMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let scheduler = new Heap();
  for (let [start, end] of intervals) {
    if (!scheduler.heap.length) {
      scheduler.insert(end);
      continue;
    }
    if (start >= scheduler.heap[0]) {
      scheduler.extractMin();
    }
    scheduler.insert(end);
  }
  return scheduler.heap.length;
};

console.log(scheduleMeetingRooms(intervals));
