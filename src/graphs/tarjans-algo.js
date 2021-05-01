class Graph {
  constructor(size) {
    this.N = size;
    this.adjList = new Map();
    this.time = 0;
  }

  addVertices() {
    for (let i = 0; i < this.N; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  SCC() {
    const sccUntil = (u, disc, low, stackMember, st) => {
      disc[u] = this.time;
      low[u] = this.time;
      this.time++;

      stackMember[u] = true;
      st.push(u);

      let list = this.adjList.get(u);

      for (let i = 0; i < list.length; i++) {
        let n = list[i];
        if (disc[n] == -1) {
          sccUntil(n, disc, low, stackMember, st);
          low[u] = Math.min(low[u], low[n]);
        } else if (stackMember[n] == true) {
          low[u] = Math.min(low[u], disc[n]);
        }
      }

      let w = -1;
      if (disc[u] == low[u]) {
        while (w != u) {
          w = st.pop();
          console.log(w + "->");
          stackMember[w] = false;
        }
      }
    };

    let disc = [],
      low = [],
      stackMember = [],
      st = [];
    for (let i = 0; i < this.N; i++) {
      disc[i] = -1;
      low[i] = -1;
      stackMember[i] = false;
    }

    for (let i = 0; i < this.N; i++) {
      if (disc[i] == -1) {
        sccUntil(i, disc, low, stackMember, st);
      }
    }
  }
}

let g1 = new Graph(5);

g1.addVertices();
g1.addEdge(0, 2);
g1.addEdge(0, 3);
g1.addEdge(1, 0);
g1.addEdge(2, 1);
g1.addEdge(3, 4);

g1.SCC();
