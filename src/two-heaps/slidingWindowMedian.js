const Heap = require("collections/heap");

class Median {
  constructor() {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.maxHeap = new Heap([], null, (a, b) => a - b);
  }

  rearrangeHeaps() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findSlidingWindowMedian(nums, k) {
    let start = 0,
      end,
      n = nums.length;
    let results = [];

    for (end = 0; end < n; end += 1) {
      let rightNum = nums[end];
      if (this.maxHeap.length == 0 || this.maxHeap.peek() >= rightNum) {
        this.maxHeap.push(rightNum);
      } else {
        this.minHeap.push(rightNum);
      }
      this.rearrangeHeaps();

      if (end >= k - 1) {
        if (this.maxHeap.length == this.minHeap.length) {
          results.push((this.maxHeap.peek() + this.minHeap.peek()) / 2);
        } else {
          results.push(this.maxHeap.peek());
        }

        let leftNum = nums[start];
        start += 1;
        if (leftNum <= this.maxHeap.peek()) {
          this.maxHeap.delete(leftNum);
        } else {
          this.minHeap.delete(leftNum);
        }

        this.rearrangeHeaps();
      }
    }

    return results;
  }
}

let m = new Median();

const arr = [1, 2, -1, 3, 5],
  k = 2;

console.log(m.findSlidingWindowMedian(arr, k));
