class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
  }

  addVertices() {
    for (let i = 0; i < this.size; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  topologySort() {
    const topologySortHelper = (node, visited, stack) => {
      visited[node] = true;

      let list = this.adjList.get(node);

      for (let i = 0; i < list.length; i++) {
        let neigh = list[i];
        if (!visited[neigh]) {
          topologySortHelper(neigh, visited, stack);
        }
      }

      stack.push(node);
    };

    let visited = [];
    let stack = [];

    for (let i = 0; i < this.size; i++) {
      visited[i] = false;
    }

    for (let i = 0; i < this.size; i++) {
      if (!visited[i]) {
        topologySortHelper(i, visited, stack);
      }
    }

    while (stack.length) {
      console.log(stack.pop());
    }
  }
}

const ts = new Graph(4);

ts.addVertices();

ts.addEdge(1, 0);
// ts.addEdge(0, 2);
ts.addEdge(2, 0);
ts.addEdge(3, 1);
ts.addEdge(3, 2);
// ts.addEdge(3, 4);
// ts.addEdge(4, 5);

ts.topologySort();
