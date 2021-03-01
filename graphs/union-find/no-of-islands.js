class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.rank = 0;
  }
}

class DisJointSet {
  constructor() {
    this.map = new Map();
  }

  makeSet(data) {
    let node = new Node(data);
    node.parent = node;
    this.map.set(data, node);
  }

  union(data1, data2) {
    let n1 = this.map.get(data1);
    let n2 = this.map.get(data2);

    let p1 = this.findSet(n1);
    let p2 = this.findSet(n2);

    if (p1 == p2) {
      return false;
    }

    if (p1.rank >= p2.rank) {
      p1.rank = p1.rank == p2.rank ? p1.rank + 1 : p1.rank;
      p2.parent = p1;
    } else {
      p1.parent = p2;
    }
    return true;
  }

  findSet(node) {
    let parent = node.parent;
    if (parent == node) {
      return parent;
    }
    node.parent = this.findSet(node.parent);
    return node.parent;
  }

  findSetValue(data) {
    return this.findSet(this.map.get(data)).data;
  }
}

class NumberOfIsland {
  constructor(arr) {
    this.grid = arr;
    this.row = arr.length;
    this.col = arr[0].length;
    this.djs = new DisJointSet();
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        this.djs.makeSet(i * this.col + j);
      }
    }
    this.resultArr = new Array(this.row * this.col).fill(0);
    this.noOfIsland = 0;
  }

  isInside(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= this.row ||
      y >= this.col ||
      this.grid[x][y] == 0
    ) {
      return false;
    }
    return true;
  }

  getCount() {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (this.grid[i][j] == 1) {
          this.isInside(i, j + 1) &&
            this.djs.union(i * this.col + j, i * this.col + j + 1);
          this.isInside(i + 1, j) &&
            this.djs.union(i * this.col + j, (i + 1) * this.col + j);
          this.isInside(i, j - 1) &&
            this.djs.union(i * this.col + j, i * this.col + j - 1);
          this.isInside(i - 1, j) &&
            this.djs.union(i * this.col + j, (i - 1) * this.col + j);
        }
      }
    }

    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (this.grid[i][j] == 1) {
          let x = this.djs.findSetValue(i * this.col + j);
          if (this.resultArr[x] == 0) {
            this.noOfIsland++;
            this.resultArr[x]++;
          } else {
            this.resultArr[x]++;
          }
        }
      }
    }
    console.log(this.noOfIsland);
  }
}

let arr = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

let noi = new NumberOfIsland(arr);

noi.getCount();
