const lcs = function (str1, str2) {
  let dp = new Array(str1.length + 1)
    .fill(0)
    .map((r) => new Array(str2.length + 1).fill(0));
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = 1 + Math.max(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
};

let str1 = "elephant";
let str2 = "eretpat";

lcs(str1, str2);
