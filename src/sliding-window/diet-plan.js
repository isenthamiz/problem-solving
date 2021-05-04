var dietPlanPerformance = function (calories, k, lower, upper) {
  let start = 0,
    end,
    T = 0,
    points = 0;
  for (end = 0; end < calories.length; end++) {
    T += calories[end];
    k -= 1;
    if (k <= 0) {
      if (T < lower) {
        points -= 1;
      }
      if (T > upper) {
        points += 1;
      }
      k += 1;
      T -= calories[start++];
    }
  }
  return points;
};
