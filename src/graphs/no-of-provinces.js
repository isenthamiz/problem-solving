var findCircleNum = function (isConnected) {
  const helper = function (u, visited) {
    visited[u] = true;
    let list = isConnected[u];
    for (let k = 0; k < list.size; k++) {
      if (!visited[k] && list[k]) {
        helper(n, visited);
      }
    }
  };

  let size = isConnected.length;
  let visited = new Array(size).fill(false);
  let num = 0;
  for (let i = 0; i < size; i++) {
    if (!visited[i]) {
      helper(i, visited);
      num++;
    }
  }
  return num;
};

const arr = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log(findCircleNum(arr));
