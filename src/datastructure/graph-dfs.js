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
    this.adjList.get(w).push(v);
  }

  dfs(node) {
    const dfs_until = (node, visited) => {
      console.log(node);
      visited[node] = true;

      let list = this.adjList.get(node);

      for (let i = 0; i < list.length; i++) {
        let neigh = list[i];
        if (!visited[neigh]) {
          dfs_until(neigh, visited);
        }
      }
    };

    let visited = [];
    for (let i = 0; i < this.size; i++) {
      visited[i] = false;
    }
    dfs_until(node, visited);
  }
}

const dfs = new Graph(5);
dfs.addVertices();
dfs.addEdge(0, 1);
dfs.addEdge(0, 2);
dfs.addEdge(0, 3);
dfs.addEdge(1, 3);
dfs.addEdge(1, 4);
dfs.addEdge(2, 3);
dfs.addEdge(3, 4);

console.log(dfs.adjList);
dfs.dfs(0);
