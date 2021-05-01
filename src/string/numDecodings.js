const numDeconding = function (num) {
  const helper = function (numStr, index) {
    if (hmap.has(index)) {
      return hmap.get(index);
    }
    if (index > numStr.length) {
      return 0;
    }

    if (numStr[index] == "0") {
      return 0;
    }

    if (index == numStr.length) {
      return 1;
    }

    let ans = 0;
    ans = helper(numStr, index + 1);
    if (parseInt(numStr.substr(index, 2)) <= 26) {
      ans += helper(numStr, index + 2);
    }
    hmap.set(index, ans);
    return ans;
  };
  let hmap = new Map();
  return helper(num, 0);
};

console.log(numDeconding("1212121212"));
