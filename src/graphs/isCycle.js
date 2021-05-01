var isCycle = function (isConnected) {
  const helper = function (u, visited, recstack) {
    if (recstack[u]) {
      return true;
    }
    if (visited[u]) {
      return false;
    }
    visited[u] = true;
    recstack[u] = true;
    let list = isConnected[u];
    for (let n = 0; n < list.length; n++) {
      if (list[n] && helper(n, visited, recstack)) {
        return true;
      }
    }
    recstack[u] = false;

    return false;
  };

  let size = isConnected.length;
  let visited = new Array(size).fill(false);
  let recstack = new Array(size).fill(false);
  for (let i = 0; i < size; i++) {
    if (helper(i, visited, recstack)) {
      return true;
    }
  }
  return false;
};

const arr = [
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 1],
];

console.log(isCycle(arr));
