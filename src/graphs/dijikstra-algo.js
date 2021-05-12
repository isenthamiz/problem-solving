class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  getSize() {
    return this.collection.length;
  }

  enQueue(node, weight) {
    if (!this.collection.length) {
      this.collection.push([node, weight]);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (weight < this.collection[i][1]) {
          this.collection.splice(i, 0, [node, weight]);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push([node, weight]);
      }
    }
  }

  deQueue() {
    return this.collection.shift();
  }
}

class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
    for (let i = 0; i < size; i++) {
      this.addVertices(i);
    }
  }

  addVertices(v) {
    this.adjList.set(v, []);
  }

  addEdge(u, v, weight) {
    this.adjList.get(u).push({ node: v, weight });
    this.adjList.get(v).push({ node: u, weight });
  }

  dijikstraSSP(source, destination) {
    let parent = new Array(this.size).fill(-1);
    let distance = new Array(this.size).fill(Infinity);
    let Queue = new PriorityQueue();
    visited[source] = true;
    distance[source] = 0;
    Queue.enQueue(source, 0);
    while (Queue.getSize()) {
      let [u, uweight] = Queue.deQueue();
      for (let v of this.adjList.get(u)) {
        let time = uweight + v.weight;
        if (time < distance[v.node]) {
          parent[v] = u;
          distance[v.node] = time;
          Queue.enQueue(v.node, time);
        }
      }
    }
    console.log(distance[destination]);
  }
}

let g = new Graph(9);

g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 5, 4);
g.addEdge(2, 8, 2);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

g.dijikstraSSP(0, 8);
