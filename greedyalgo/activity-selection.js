const arr = [
  [0, 6],
  [3, 4],
  [1, 2],
  [5, 8],
  [5, 7],
  [8, 9],
];

const activitySelection = function (schedule) {
  schedule.sort((a, b) => a[1] - b[1]);
  let finish = -1;
  for (e of schedule) {
    if (e[0] >= finish) {
      console.log(e);
      finish = e[1];
    }
  }
};

activitySelection(arr);
