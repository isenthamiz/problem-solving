class Graph {
  constructor(size) {
    this.size = size;
    this.adjList = new Map();
    this.rank = new Array(size).fill(null);
    this.connDict = new Map();
  }

  addVertices() {
    for (let i = 0; i < this.size; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
    if (v < w) {
      this.connDict.set(`${v}-${w}`, true);
    } else {
      this.connDict.set(`${w}-${v}`, true);
    }
  }

  dfs(node, discoveryRank) {
    if (this.rank[node] != null) {
      return this.rank[node];
    }
    this.rank[node] = discoveryRank;

    let minRank = discoveryRank + 1;

    for (let neigh of this.adjList.get(node)) {
      let neighRank = this.rank[neigh];
      if (neighRank != null && neighRank == discoveryRank - 1) {
        continue;
      }
      let recursiveRank = this.dfs(neigh, discoveryRank + 1);

      if (recursiveRank <= discoveryRank) {
        if (node < neigh) {
          this.connDict.delete(`${node}-${neigh}`);
        } else {
          this.connDict.delete(`${neigh}-${node}`);
        }
      }
      minRank = Math.min(minRank, recursiveRank);
    }
    return minRank;
  }

  criticalConnnections() {
    this.dfs(0, 0);
    console.log(this.connDict);
  }
}

let g = new Graph(8);
g.addVertices();

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(3, 4);
g.addEdge(3, 7);
g.addEdge(4, 5);
g.addEdge(4, 6);
g.addEdge(5, 6);

g.criticalConnnections();
