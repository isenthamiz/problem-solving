const addBinary = function (num1, num2) {
  let carry = 0,
    n1 = num1.length - 1,
    n2 = num2.length - 1;
  let output = "";
  while (n1 >= 0 || n2 >= 0) {
    let x = n1 >= 0 ? num1[n1] - "0" : 0;
    let y = n2 >= 0 ? num2[n2] - "0" : 0;
    let s = (carry + x + y) % 2;
    carry = Math.floor((carry + x + y) / 2);
    output = s + output;
    n1--;
    n2--;
  }
  output = carry ? carry + output : output;
  return output;
};

addBinary("1111", "10");
