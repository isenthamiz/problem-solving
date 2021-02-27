class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.rank = 0;
  }
}

class DisJoinSet {
  constructor() {
    this.hmap = new Map();
  }

  makeSet(data) {
    let node = new Node(data);
    node.parent = node;
    this.hmap.set(data, node);
  }

  findSetNode(node) {
    let parent = node.parent;
    if (node == parent) {
      return parent;
    }
    node.parent = this.findSetNode(node.parent);
    return node.parent;
  }

  findSet(data) {
    return this.findSetNode(this.hmap.get(data)).data;
  }

  union(a, b) {
    let n1 = this.hmap.get(a);
    let n2 = this.hmap.get(b);
    let p1 = this.findSetNode(n1);
    let p2 = this.findSetNode(n2);
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
}

class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
    for (let i = 0; i < this.size; i++) {
      this.adjList.set(i, []);
    }
    this.edges = [];
  }

  addEdge(u, v, weight) {
    this.edges.push([u, v, weight]);
    this.adjList.get(u).push({ node: v, weight });
  }

  MinimumSpaningTree_Kruskal() {
    let ds = new DisJoinSet();
    let cost = 0;
    for (let i = 0; i < this.size; i++) {
      ds.makeSet(i);
    }
    this.edges.sort((a, b) => a[2] - b[2]);
    console.log(this.edges);
    for (let e of this.edges) {
      let [a, b, weight] = e;
      if (ds.findSet(a) != ds.findSet(b)) {
        ds.union(a, b);
        cost += weight;
      }
    }
    console.log(cost);
  }
}

let g = new Graph(5);

g.addEdge(0, 1, 15);
g.addEdge(0, 2, 20);
g.addEdge(1, 2, 13);
g.addEdge(1, 3, 5);
g.addEdge(2, 3, 10);
g.addEdge(2, 4, 6);
g.addEdge(3, 4, 8);

g.MinimumSpaningTree_Kruskal();
