const str = "ab7c";

const findLetterCasePermutaiton = function (str) {
  let permutation = [];
  permutation.push(str);

  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) {
      let n = permutation.length;
      for (let j = 0; j < n; j++) {
        let charArr = permutation[j].split("");
        if (charArr[i] == charArr[i].toLowerCase()) {
          charArr[i] = charArr[i].toUpperCase();
        } else {
          charArr[i] = charArr[i].toLowerCase();
        }
        permutation.push(charArr.join(""));
      }
    }
  }

  return permutation;
};

console.log(findLetterCasePermutaiton(str));
