const Heap = require("collections/heap");

const inputArr = [5, 6, 7, 8, 9],
  k = 3,
  x = 7;

const kClosestNumber = function (nums, k, x) {
  const minHeap = new Heap([], null, (a, b) => b[1] - a[1]);
  let xIndex = binarySearch(nums, x);

  let low = xIndex - k,
    high = xIndex + k;
  low = Math.max(low, 0);
  high = Math.min(high, nums.length - 1);

  for (let i = low; i <= high - 1; i++) {
    minHeap.push([nums[i], Math.abs(x - nums[i])]);
  }

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(minHeap.pop()[0]);
  }
  return result;
};

const binarySearch = function (nums, x) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] == x) {
      return mid;
    }
    if (nums[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return low;
};

console.log(kClosestNumber(inputArr, k, x));
