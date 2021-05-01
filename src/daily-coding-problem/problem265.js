const arr = [10, 40, 200, 1000, 900, 800, 30];

const getSegment = function (arr) {
  let asc = arr[0] < arr[1];
  let prev = arr[0];
  let start = 0;
  let segment = [];

  for (let i = 1; i < arr.length; i++) {
    if ((asc && arr[i] < prev) || (!asc && arr[i] > prev)) {
      segment.push([asc, i - start]);
      start = i;
      asc = !asc;
    }
    prev = arr[i];
  }
  segment.push([asc, arr.length - start]);

  return segment;
};

const getBonus = function (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length == 1) {
    return 1;
  }

  let segments = getSegment(arr);

  let bonus = [];

  for (let segment of segments) {
    let [asc, len] = segment;
    let segBonus = new Array(len).fill(0).map((_, i) => i + 1);
    if (!asc) {
      segBonus.reverse();
    }
    bonus = [...bonus, ...segBonus];
  }

  console.log(bonus);
};

getBonus(arr);
