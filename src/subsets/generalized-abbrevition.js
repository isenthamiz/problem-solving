class AbbreviatedWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}

const generateGeneralizedAbbreviation = function (word) {
  let queue = [],
    result = [],
    n = word.length;
  queue.push(new AbbreviatedWord("", 0, 0));

  while (queue.length) {
    const ab = queue.shift();
    if (ab.start == n) {
      if (ab.count != 0) {
        ab.str += ab.count;
      }
      result.push(ab.str);
    } else {
      queue.push(new AbbreviatedWord(ab.str, ab.start + 1, ab.count + 1));
      if (ab.count != 0) {
        ab.str += ab.count;
      }
      let new_str = ab.str + word[ab.start];
      queue.push(new AbbreviatedWord(new_str, ab.start + 1, 0));
    }
  }

  return result;
};

let str = "BAT";

console.log(generateGeneralizedAbbreviation(str));
