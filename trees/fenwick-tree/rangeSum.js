class BinaryIndexedTree {
  constructor(arr) {
    this.input = arr;
    this.N = arr.length;
    this.BIT = new Array(this.N + 1).fill(0);
    for (let i = 0; i < this.N; i++) {
      this.init(i, arr[i]);
    }
  }

  init(index, data) {
    index++;
    while (index <= this.N) {
      this.BIT[index] += data;
      index += index & -index;
    }
  }

  updateBIT(index, data) {
    let diff = data - this.input[index];
    this.input[index] = data;
    this.init(index, diff);
  }

  getSum(index) {
    index++;
    let sum = 0;
    while (index > 0) {
      sum += this.BIT[index];
      index -= index & -index;
    }
    return sum;
  }

  getSumQuery(i, j) {
    return this.getSum(j) - this.getSum(i - 1);
  }
}

const arr = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9];

const bt = new BinaryIndexedTree(arr);

console.log(bt.BIT);

console.log(bt.getSumQuery(1, 6));

bt.updateBIT(1, 2);

console.log(bt.getSumQuery(1, 6));
