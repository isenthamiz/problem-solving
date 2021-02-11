var topKFrequent = function (words, k) {
  let hmap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (hmap.has(words[i])) {
      hmap.set(words[i], hmap.get(words[i]) + 1);
    } else {
      hmap.set(words[i], 1);
    }
  }
  let sortedArr = [...hmap].sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    } else {
      return b[1] - a[1];
    }
  });
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedArr[i][0]);
  }

  return output;
};

const words = ["coding", "bbbbbb", "i", "love", "leetcode", "i", "love"];
const k = 3;

console.log(topKFrequent(words, k));
