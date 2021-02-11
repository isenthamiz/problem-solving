const schedule = [
  [
    [1, 2],
    [5, 6],
  ],
  [[1, 3]],
  [[4, 10]],
];

const employeeFreeTime = function (schedule) {
  let event = [];
  let output = [];
  for (let emp of schedule) {
    for (let time of emp) {
      event.push([time[0], "OPEN"]);
      event.push([time[1], "CLOSE"]);
    }
  }
  event.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let prev = -1,
    bal = 0;
  for (e of event) {
    if (prev >= 0 && bal == 0) {
      output.push([prev, e[0]]);
    }
    bal += e[1] == "OPEN" ? 1 : -1;
    prev = e[0];
  }
  return output;
};

employeeFreeTime(schedule);
