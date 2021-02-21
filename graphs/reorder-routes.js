const connections = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
];
const n = 6;

const minReorder = function (n, connections) {
  const dfs = function (root) {
    seen.add(root);
    let list = neighbours.get(root);
    for (n of list) {
      if (!seen.has(n)) {
        if (
          !connections.filter((arr) => arr[0] == n && arr[1] == root).length
        ) {
          res++;
        }
        dfs(n);
      }
    }
  };

  let neighbours = new Map();
  let seen = new Set();
  let res = 0;
  for ([a, b] of connections) {
    !neighbours.has(a) && neighbours.set(a, []);
    !neighbours.has(b) && neighbours.set(b, []);
    neighbours.get(a).push(b);
    neighbours.get(b).push(a);
  }
  dfs(0);
  return res;
};

console.log(minReorder(n, connections));
