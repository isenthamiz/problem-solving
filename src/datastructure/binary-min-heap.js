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
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.Heap[parentIndex];
      if (child < parent) {
        this.Heap[parentIndex] = child;
        this.Heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    let min = this.Heap[0];
    this.Heap[0] = this.Heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let swap = null;

      if (this.Heap[index] > this.Heap[right]) {
        swap = right;
      }
      if (
        this.Heap[index] > this.Heap[left] &&
        (!this.Heap[right] ||
          (this.Heap[right] && this.Heap[left] < this.Heap[right]))
      ) {
        swap = left;
      }

      if (!swap) {
        break;
      }

      let tmp = this.Heap[swap];
      this.Heap[swap] = this.Heap[index];
      this.Heap[index] = tmp;

      index = swap;
    }
  }
}

let bh = new BinaryHeap();

bh.insert(10);
bh.insert(7);
bh.insert(12);
bh.insert(5);
bh.insert(9);
bh.insert(15);
bh.insert(2);

console.log(bh.extractMin());
console.log(bh.Heap);

console.log(bh.extractMin());
console.log(bh.Heap);
