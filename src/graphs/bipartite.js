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
    // this.adjList.get(w).push(v);
  }

  biPartite(node) {
    let queue = [];
    let visited = [];
    let colorArr = [];
    for (let i = 0; i < this.size; i++) {
      visited[i] = false;
      colorArr[i] = -1;
    }
    queue.push(node);
    colorArr[node] = 1;
    visited[node] = true;

    while (queue.length) {
      let v = queue.shift();
      let list = this.adjList.get(v);
      for (let i = 0; i < list.length; i++) {
        let neigh = list[i];
        if (colorArr[v] == colorArr[neigh]) {
          return false;
        } else {
          if (!visited[neigh]) {
            colorArr[neigh] = 1 - colorArr[v];
            queue.push(neigh);
          }
        }
      }
    }
    console.log(colorArr);
    return true;
  }
}

let g = new Graph(7);
g.addVertices();

g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 4);
g.addEdge(1, 5);
g.addEdge(4, 6);
g.addEdge(5, 6);
g.addEdge(5, 2);
// g.addEdge(4, 5);

console.log(g.biPartite(0));
