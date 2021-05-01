class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
    for (let i = 0; i < size; i++) {
      this.adjList.set(i, []);
    }
    this.adjMatrix = new Array(size)
      .fill(0)
      .map((c) => new Array(size).fill(0));
  }

  addEdge(u, v, weight) {
    this.adjList.get(u).push({ node: v, weight });
    this.adjMatrix[u][v] = weight;
    this.adjMatrix[v][u] = weight;
  }

  minimumSpaningTree_Prims() {
    let parent = new Array(this.size).fill(-1);
    let key = new Array(this.size).fill(Infinity);
    let mstSet = new Array(this.size).fill(false);
    key[0] = 0;
    for (let i = 0; i < this.size; i++) {
      let u = this.minKey(key, mstSet);
      mstSet[u] = true;
      for (let v = 0; v < this.size; v++) {
        if (
          this.adjMatrix[u][v] != 0 &&
          mstSet[v] == false &&
          this.adjMatrix[u][v] < key[v]
        ) {
          parent[v] = u;
          key[v] = this.adjMatrix[u][v];
        }
      }
    }
    this.printMST(parent, this.adjMatrix);
  }

  minKey(key, mstSet) {
    let min = Infinity,
      minIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (mstSet[i] == false && key[i] < min) {
        min = key[i];
        minIndex = i;
      }
    }
    return minIndex;
  }

  printMST(parent, graph) {
    for (let i = 1; i < this.size; i++) {
      console.log(`${parent[i]} - ${i}    ${graph[i][parent[i]]}`);
    }
  }
}

let g = new Graph(5);

g.addEdge(0, 1, 10);
g.addEdge(0, 2, 20);
g.addEdge(1, 2, 30);
g.addEdge(1, 3, 5);
g.addEdge(2, 3, 15);
g.addEdge(2, 4, 6);
g.addEdge(3, 4, 8);

g.minimumSpaningTree_Prims();
