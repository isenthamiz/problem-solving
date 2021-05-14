const findBiwiseComplement = function (num) {
  let bit_count = 0,
    n = num;
  while (n > 0) {
    bit_count += 1;
    n = n >> 1;
  }

  let all_bits_set = Math.pow(2, bit_count) - 1;

  return num ^ all_bits_set;
};

console.log(findBiwiseComplement(8));
