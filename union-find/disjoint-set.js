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

let ds = new DisJointSet();

ds.makeSet(1);
ds.makeSet(2);
ds.makeSet(3);
ds.makeSet(4);
ds.makeSet(5);
ds.makeSet(6);
ds.makeSet(7);

ds.union(1, 2);
ds.union(2, 3);
ds.union(4, 5);
ds.union(6, 7);
ds.union(5, 6);
ds.union(3, 7);

console.log(ds.findSetValue(1));
console.log(ds.findSetValue(2));
console.log(ds.findSetValue(3));
console.log(ds.findSetValue(4));
console.log(ds.findSetValue(5));
console.log(ds.findSetValue(6));
console.log(ds.findSetValue(7));
