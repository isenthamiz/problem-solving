/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const addVertex = function (V1, V2) {
    adjList.set(V1, []);
    adjList.set(V2, []);
  };
  const addEdge = function (s, d) {
    adjList.get(s).push(d);
  };

  const topologySort = function () {
    const topologySortUntil = (node, visited, stack) => {
      visited.set(node, true);
      let list = adjList.get(node);
      for (let i = 0; i < list.length; i++) {
        if (!visited.get(list[i])) {
          topologySortUntil(list[i], visited, stack);
        }
      }
      stack.push(node);
    };

    let visited = new Map();
    let stack = [];
    for (let key of adjList.keys()) {
      visited.set(key, false);
    }
    for (let key of adjList.keys()) {
      if (!visited.get(key)) {
        topologySortUntil(key, visited, stack);
      }
    }
    let sortedStr = "";
    while (stack.length) {
      sortedStr = sortedStr + stack.pop();
    }
    return sortedStr;
  };

  let adjList = new Map();
  let Vertex = [];
  let word1, word2;
  for (let i = 0; i < words.length - 1; i++) {
    word1 = words[i];
    word2 = words[i + 1];
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] != word2[j]) {
        addVertex(word1[j], word2[j]);
        addEdge(word1[j], word2[j]);
      }
    }
  }
  return topologySort();
};
