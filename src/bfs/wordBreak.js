const word = "catsandog";

const wordArr = ["cats", "dog", "sand", "and", "cat"];

const wordBreak = function (str, arr) {
  let s = new Set();
  arr.forEach((w) => {
    s.add(w);
  });
  let index = 0;
  let n = str.length;
  let queue = [];
  queue.push(index);
  let visited = new Array(n).fill(false);
  while (queue.length) {
    let i = queue.shift();
    if (visited[i]) {
      continue;
    }
    for (let k = i + 1; k <= n; k++) {
      if (s.has(str.substr(i, k - i))) {
        queue.push(k);
        if (k == n) {
          return true;
        }
      }
    }
    visited[i] = true;
  }
  return false;
};
