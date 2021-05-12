const minSwaps = function (data) {
  let ones = data.reduce((prev, current) => prev + current);
  let start = 0,
    end,
    n = data.length,
    cones = 0,
    maxones = 0;
  for (end = 0; end < n; end++) {
    cones += data[end];

    if (end - start > ones) {
      cones -= data[start];
      start += 1;
    }

    maxones = Math.max(maxones, cones);
  }
  return ones - maxones;
};

const data = [1, 0, 1, 0, 1];

minSwaps(data);
