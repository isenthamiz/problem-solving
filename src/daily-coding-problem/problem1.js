// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const arr = [10, 15, 3, 7];

const getResult = function (arr, k) {
  let s = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (s.has(k - arr[i])) {
      return true;
    }
    s.add(arr[i]);
  }

  return false;
};

console.log(getResult(arr, 25));
