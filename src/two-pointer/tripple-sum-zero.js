const search_triplets = function (arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] == arr[i]) {
      continue;
    }
    twoSum(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
};

const twoSum = function (arr, target, left, triplets) {
  let right = arr.length - 1;
  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      triplets.push([-target, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] == arr[left - 1]) {
        left += 1;
      }
      while (left < right && arr[right] == arr[right + 1]) {
        right -= 1;
      }
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};
