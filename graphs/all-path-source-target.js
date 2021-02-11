var allPathsSourceTarget = function (graph) {
  let backtrack = function (current, path) {
    // visited[current] = true
    path.push(current);
    if (current == target) {
      results.push([...path]);
      return;
    }
    let list = graph[current];
    for (let i = 0; i < list.length; i++) {
      // if(!visited[list[i]]) {
      backtrack(list[i], path);
      path.pop();
      // }
    }
  };

  let size = graph.length;
  let target = size - 1;
  let visited = [];
  let path = [];
  let results = [];
  for (let i = 0; i < size; i++) {
    visited[i] = false;
  }
  backtrack(0, path);
  return results;
};
