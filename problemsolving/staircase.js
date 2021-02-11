// This is your coding interview problem for today.

// This problem was asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// We will be sending the solution tomorrow, along with tomorrow's question. As always, feel free to shoot us an email if there's anything we can help with.

const staircase = function (n) {
  if (n <= 1) {
    return 1;
  }
  return staircase(n - 1) + staircase(n - 2);
};

const staircase_i = function (n) {
  let a = 1,
    b = 1;
  for (let i = 0; i < n; i++) {
    let tmp = a;
    a = b;
    b = tmp + b;
  }
  return a;
};

console.log(staircase_i(4));

const staircase_n = function (n) {
  if (n < 0) {
    return 0;
  } else if (n == 0) {
    return 1;
  } else {
    return staircase(n - 1) + staircase(n - 3) + staircase(n - 5);
  }
};

console.log(staircase_n(5));
