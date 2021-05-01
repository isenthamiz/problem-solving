const lcs = function (str1, str2) {
  const helper = function (str1, str2, i, j) {
    if (i == str1.length || j == str2.length) {
      return 0;
    }
    let a = 0;
    if (str1[i] == str2[j]) {
      a = 1 + helper(str1, str2, i + 1, j + 1);
    }
    let b = helper(str1, str2, i + 1, j);
    let c = helper(str1, str2, i, j + 1);
    return Math.max(a, b, c);
  };
  let ans = helper(str1, str2, 0, 0);
  console.log(ans);
};

let str1 = "elephant";
let str2 = "eretpat";

lcs(str1, str2);
