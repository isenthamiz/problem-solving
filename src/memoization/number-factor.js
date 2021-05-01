const numberFactor = function (n) {
  if (hmap.has(n)) {
    return hmap.get(n);
  }
  if (n == 0 || n == 1 || n == 2) {
    return 1;
  }
  if (n == 3) {
    return 2;
  }

  let a = numberFactor(n - 1);
  let b = numberFactor(n - 3);
  let c = numberFactor(n - 4);
  hmap.set(n, a + b + c);
  return a + b + c;
};

let hmap = new Map();
console.log(numberFactor(100));
