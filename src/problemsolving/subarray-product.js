const arr = [1, 2, 3];

const getProduct = function (arr) {
  let n = arr.length;
  let product = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = i; k <= j; k++) {
        product *= arr[k];
      }
    }
  }
  return product;
};

console.log(getProduct(arr));
