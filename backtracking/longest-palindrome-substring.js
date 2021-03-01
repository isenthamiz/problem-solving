const lps = function (str) {
  const helper = function (str, i, j) {
    if (i > j) {
      return 0;
    }
    if (i == j) {
      return 1;
    }
    let c1 = 0;
    if (str[i] == str[j]) {
      let remaining = j - i - 1;
      if (remaining == helper(str, i + 1, j - 1)) {
        c1 = remaining + 2;
      }
    }
    let c2 = helper(str, i + 1, j);
    let c3 = helper(str, i, j - 1);

    return Math.max(c1, c2, c3);
  };

  let ans = helper(str, 0, str.length - 1);
  console.log(ans);
};

const str = "MAMDRDM";

lps(str);
