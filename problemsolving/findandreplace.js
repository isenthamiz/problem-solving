let S = "vmokgggqzp";
let indexes = [3, 5, 1];
let sources = ["kg", "ggq", "mo"];
let targets = ["s", "so", "bfr"];

var findReplaceString = function (S, indexes, sources, targets) {
  let queue = [];
  let str = "";
  let i = 0;
  let map = new Map();

  for (let j = 0; j < indexes.length; j++) {
    map.set(indexes[j], [sources[j], targets[j]]);
  }

  while (i < S.length) {
    let word;
    let mapper = map.get(i);
    if (mapper) {
      let source = mapper[0];
      let target = mapper[1];
      word = S.substr(i, source.length);
      if (S.substr(i).startsWith(source)) {
        queue.push(target);
      } else {
        queue.push(word);
      }
      i = i + source.length;
    } else {
      queue.push(S[i]);
      i = i + 1;
    }
  }
  while (queue.length) {
    str = str + queue.shift();
  }
  return str;
};

findReplaceString(S, indexes, sources, targets);
