class BinaryHeap {
  constructor() {
    this.Heap = [];
  }

  insert(data) {
    this.Heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.Heap.length - 1;
    while (index > 0) {
      let child = this.Heap[index];
      let pIndex = Math.floor((index - 1) / 2);
      let parent = this.Heap[pIndex];

      if (child > parent) {
        this.Heap[index] = parent;
        this.Heap[pIndex] = child;
        index = pIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    let max = this.Heap[0];
    this.Heap[0] = this.Heap.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let swapIndex = null;

      if (this.Heap[index] < this.Heap[right]) {
        swapIndex = right;
      }
      if (
        this.Heap[index] < this.Heap[left] &&
        (!this.Heap[right] ||
          (this.Heap[right] && this.Heap[right] < this.Heap[left]))
      ) {
        swapIndex = left;
      }

      if (!swapIndex) {
        break;
      }

      let tmp = this.Heap[index];
      this.Heap[index] = this.Heap[swapIndex];
      this.Heap[swapIndex] = tmp;

      index = swapIndex;
    }
  }
}

const bh = new BinaryHeap();

bh.insert(10);
bh.insert(7);
bh.insert(12);
bh.insert(2);
bh.insert(9);
bh.insert(5);
bh.insert(15);

console.log(bh.extractMax());
console.log(bh.Heap);

console.log(bh.extractMax());
console.log(bh.Heap);

console.log(bh.extractMax());
console.log(bh.Heap);
