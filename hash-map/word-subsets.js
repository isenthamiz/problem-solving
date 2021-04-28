var wordSubsets = function (A, B) {
  let bmax = new Array(26).fill(0);
  let ans = [];
  for (let s of B) {
    let bcount = count(s);
    for (let i = 0; i < 26; i++) {
      bmax[i] = Math.max(bmax[i], bcount[i]);
    }
  }
  search: for (let s of A) {
    let acount = count(s);
    for (let i = 0; i < 26; i++) {
      if (acount[i] < bmax[i]) {
        continue search;
      }
    }
    ans.push(s);
  }

  console.log(ans);
};

var count = function (s) {
  let count = new Array(26).fill(0);
  for (let ch of s) {
    count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return count;
};

const A = ["amazon", "apple", "facebook", "google", "leetcode"];
const B = ["e", "o"];

wordSubsets(A, B);
