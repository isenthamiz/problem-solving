const container = [1, 5, 4, 3];

const getMaxCapacity = function (container, n) {
  let l = 0,
    r = n - 1,
    area = 0;
  while (l < r) {
    area = Math.max(area, Math.min(container[l], container[r]) * (r - 1));
    if (container[l] < container[r]) {
      l++;
    } else {
      r--;
    }
  }
  console.log(area);
};

getMaxCapacity(container, container.length);
