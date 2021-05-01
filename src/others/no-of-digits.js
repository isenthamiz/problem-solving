const noOfDigits = function (num) {
  let nDigits = Math.floor(Math.log10(num)) + 1;
  return nDigits;
};

console.log(noOfDigits(121221112));
