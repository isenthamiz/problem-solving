var letterCombinations = function (digits) {
  const helper = function (combination, next_digits) {
    if (!next_digits.length) {
      output.push(combination);
    } else {
      let dig = next_digits.substring(0, 1);
      let letters = phone.get(dig);
      for (let i = 0; i < letters.length; i++) {
        let l = phone.get(dig).substr(i, 1);
        helper(combination + l, next_digits.substring(1));
      }
    }
  };

  let phone = new Map();
  phone.set("2", "abc");
  phone.set("3", "def");
  phone.set("4", "ghi");
  phone.set("5", "jkl");
  phone.set("6", "mno");
  phone.set("7", "pqrs");
  phone.set("8", "tuv");
  phone.set("9", "wxyz");

  let output = [];

  if (digits.length) {
    helper("", digits);
  }

  return output;
};

console.log(letterCombinations("23"));
