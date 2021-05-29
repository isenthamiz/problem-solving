const Heap = require("collections/heap");

class Median {
  constructor() {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.maxHeap = new Heap([], null, (a, b) => a - b);
  }

  insertNum(num) {
    if (this.maxHeap.length == 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.minHeap.length == this.maxHeap.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    }
    return this.maxHeap.peek();
  }
}

let m = new Median();

m.insertNum(3);
m.insertNum(1);

console.log(m.findMedian());

m.insertNum(5);

console.log(m.findMedian());

m.insertNum(4);

console.log(m.findMedian());
