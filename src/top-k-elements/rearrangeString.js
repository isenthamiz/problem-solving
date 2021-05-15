const Heap = require("collections/heap");

const rearrangeString = function (str) {
  const charFrequency = {},
    maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!charFrequency[ch]) {
      charFrequency[ch] = 0;
    }
    charFrequency[ch] += 1;
  }

  for (let ch in charFrequency) {
    maxHeap.push([ch, charFrequency[ch]]);
  }

  let previousChar = null,
    previousFrequency = 0,
    result = [];

  while (maxHeap.length) {
    let [curr_ch, curr_frequency] = maxHeap.pop();

    if (previousChar && previousFrequency > 0) {
      maxHeap.push([previousChar, previousFrequency]);
    }

    result.push(curr_ch);
    previousFrequency = curr_frequency - 1;
    previousChar = curr_ch;
  }

  if (result.length == str.length) {
    return result.join("");
  }
  return "";
};

const str = "aapa";

console.log(rearrangeString(str));
