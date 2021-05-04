var numKLenSubstrNoRepeats = function (S, K) {
  let start = 0,
    end,
    charFrequency = {},
    count = 0;
  for (let ch of S) {
    charFrequency[ch] = 0;
  }
  for (end = 0; end < S.length; end++) {
    let rightChar = S[end];

    charFrequency[rightChar] += 1;

    while (charFrequency[rightChar] > 1) {
      let leftChar = S[start];
      charFrequency[leftChar] -= 1;
      start += 1;
    }

    if (end - start + 1 === K) {
      let leftChar = S[start];
      charFrequency[leftChar] -= 1;
      start += 1;
      count += 1;
    }
  }
  return count;
};

const str = "havefunonleetcode";
const k = 5;

console.log(numKLenSubstrNoRepeats(str, k));
