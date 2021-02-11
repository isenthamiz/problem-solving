// This is your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

const encode = function (num = "") {
  if (num.length <= 1) {
    return 1;
  }
  let total = 0;
  if (parseInt(num.substr(0, 2)) <= 26) {
    total = total + encode(num.substr(2, num.length));
  }

  total = total + encode(num.substr(1, num.length));

  return total;
};

console.log(encode("11111"));
