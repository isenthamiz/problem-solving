str = "abcabcdbb";

const slidingWindow = function (str) {
  let S = new Set();
  let ans = 0,
    i = 0,
    j = 0;
  let N = str.length;

  while (i < N && j < N) {
    if (!S.has(str[j])) {
      S.add(str[j++]);
      ans = Math.max(ans, j - i);
    } else {
      S.delete(str[i++]);
    }
  }

  console.log(ans);
};

slidingWindow(str);
