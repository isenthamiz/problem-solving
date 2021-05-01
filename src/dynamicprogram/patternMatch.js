const s = "mississippi";
const p = "m??*ss*?i*pi";

const isMatch = function (s, p) {
  const helper = (str, pattern, n, m) => {
    let matrix = new Array(n + 1)
      .fill(null)
      .map((row) => new Array(m + 1).fill(false));
    matrix[0][0] = true;
    for (let j = 1; j <= m; j++) {
      if (pattern[j - 1] == "*") {
        matrix[0][j] = true;
      }
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (pattern[j - 1] == "*") {
          matrix[i][j] = matrix[i][j - 1] || matrix[i - 1][j];
        } else if (pattern[j - 1] == "?" || str[i - 1] == pattern[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = false;
        }
      }
    }
    console.log(matrix);
    console.log(matrix[n][m]);
  };
  if (p[0] != "*" || p[0] != "?") {
    let prefix = "";
    for (let i = 0; i < p.length && p[i] != "*" && p[i] != "?"; i++) {
      prefix = prefix + p[i];
    }
    if (!s.startsWith(prefix)) {
      return false;
    }
    s = s.substr(prefix.length);
    p = p.substr(prefix.length);
  }
  return helper(s, p, s.length, p.length);
};

isMatch(s, p);
