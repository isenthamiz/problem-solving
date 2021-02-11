class Graph {
  constructor(size) {
    this.nodes = [];
    this.adjList = new Map();
    this.size = size;
  }

  addVertices() {
    for (let i = 0; i < this.size; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  bfs(node) {
    let visited = [];
    let queue = [];
    for (let i = 0; i < this.size; i++) {
      visited[i] = false;
    }
    queue.push(node);
    visited[node] = true;

    while (queue.length) {
      let e = queue.shift();
      console.log(e);
      let list = this.adjList.get(e);
      for (let i = 0; i < list.length; i++) {
        let neigh = list[i];
        if (!visited[neigh]) {
          visited[neigh] = true;
          queue.push(neigh);
        }
      }
    }
  }
}

const bfs = new Graph(5);
bfs.addVertices();
bfs.addEdge(0, 1);
bfs.addEdge(0, 2);
bfs.addEdge(0, 3);
bfs.addEdge(1, 3);
bfs.addEdge(1, 4);
bfs.addEdge(2, 3);
bfs.addEdge(3, 4);

console.log(bfs.adjList);
bfs.bfs(0);
