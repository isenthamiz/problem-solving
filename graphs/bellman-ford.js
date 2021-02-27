class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
    for (let i = 0; i < size; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u, v, weight) {
    this.adjList.get(u).push({ node: v, weight });
  }

  bellmanFord(start, end) {
    let distance = new Array(this.size).fill(Infinity);
    let parent = new Array(this.size).fill(-1);
    distance[start] = 0;
    for (let i = 0; i < this.size - 1; i++) {
      for (let j = 0; j < this.size; j++) {
        let list = this.adjList.get(j);
        for (let n of list) {
          let time = distance[j] + n.weight;
          if (time < distance[n.node]) {
            distance[n.node] = time;
            parent[n.node] = j;
          }
        }
      }
    }
    console.log(distance);
  }
}

let g = new Graph(5);

g.addEdge(0, 2, 6);
g.addEdge(0, 3, 6);
g.addEdge(1, 0, 3);
g.addEdge(2, 3, 2);
g.addEdge(3, 2, 1);
g.addEdge(3, 1, 1);
g.addEdge(4, 1, 4);
g.addEdge(4, 3, 2);

g.bellmanFord(4, 0);
