const search_next_letter = function (letters, key) {
  // TODO: Write your code here
  let n = letters.length;
  if (key < letters[0] || key > letters[n - 1]) {
    return letters[0];
  }
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (letters[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return letters[left % n];
};

console.log(search_next_letter(["a", "c", "f", "h"], "h"));
console.log(search_next_letter(["a", "c", "f", "h"], "b"));
console.log(search_next_letter(["a", "c", "f", "h"], "m"));
