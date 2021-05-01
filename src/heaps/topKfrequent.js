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
      if (child[1] > parent[1]) {
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
      if (this.heap[right]) {
        if (this.heap[index][1] < this.heap[right][1]) {
          swapIndex = right;
        }
      }
      if (this.heap[left]) {
        if (
          this.heap[index][1] < this.heap[left][1] &&
          (!this.heap[right] ||
            (this.heap[right] && this.heap[left][1] > this.heap[right][1]))
        ) {
          swapIndex = left;
        }
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

const nums = [1, 1, 1, 2, 2, 3];

const topKFrequent = function (nums, k) {
  let hmap = new Map();
  let h = new Heap();
  for (let i = 0; i < nums.length; i++) {
    if (hmap.has(nums[i])) {
      hmap.set(nums[i], hmap.get(nums[i]) + 1);
    } else {
      hmap.set(nums[i], 1);
    }
  }
  for (e of hmap) {
    h.insert(e);
  }
  let resultArr = [];
  for (let i = 0; i < k; i++) {
    let tmp = h.extractMin();
    resultArr.push(tmp[0]);
  }
  return resultArr;
};

console.log(topKFrequent(nums, 2));
