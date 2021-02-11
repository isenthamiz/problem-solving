/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  let points = [],
    max = 0,
    queue = [],
    output = [];
  queue.push(0);
  for (building of buildings) {
    points.push([building[0], building[2], "S"]);
    points.push([building[1], building[2], "E"]);
  }
  points.sort((x, y) => {
    if (x[0] != y[0]) {
      return x[0] - y[0];
    } else {
      return x[2] == "S" ? -x[1] : x[1] - y[2] == "S" ? -y[1] : y[1];
    }
  });
  console.log(points);
  for (pt of points) {
    if (pt[2] == "S" && max < pt[1]) {
      queue.unshift(pt[1]);
      max = pt[1];
      output.push([pt[0], pt[1]]);
    } else if (pt[2] == "E") {
      queue.splice(queue.indexOf(pt[1]), 1);
      if (max <= pt[1]) {
        max = queue[0];
        output.push([pt[0], max]);
      }
    }
  }

  return output;
};

let a = getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]);

console.log(a);
