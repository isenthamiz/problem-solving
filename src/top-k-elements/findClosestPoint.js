const Heap = require("collections/heap");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
}

const findClosestPoints = function (points, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  for (let p of points) {
    let value = p.x * p.x + p.y * p.y;
    minHeap.push([value, p]);
  }

  let result = [];

  for (let i = 0; i < k; i++) {
    let point = minHeap.pop()[1];
    result.push([point.x, point.y]);
  }

  return result;
};

const points = [new Point(1, 3), new Point(3, 4), new Point(2, -1)],
  k = 2;

console.log(findClosestPoints(points, k));
