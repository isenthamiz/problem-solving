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

  floydWarshall(start, end) {
    let adjMatrix = new Array(this.size)
      .fill(Infinity)
      .map((c) => new Array(this.size).fill(Infinity));
    for (let i = 0; i < this.size; i++) {
      adjMatrix[i][i] = 0;
      let list = this.adjList.get(i);
      for (let n of list) {
        adjMatrix[i][n.node] = n.weight;
      }
    }

    for (let k = 0; k < this.size; k++) {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          if (adjMatrix[i][j] > adjMatrix[i][k] + adjMatrix[k][j]) {
            adjMatrix[i][j] = adjMatrix[i][k] + adjMatrix[k][j];
          }
        }
      }
    }

    console.log(adjMatrix);
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

g.floydWarshall(4, 0);
