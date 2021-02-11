class cell {
  constructor(x, y, distance) {
    this.x = x;
    this.y = y;
    this.distance = distance;
  }
}

class Board {
  constructor(N) {
    this.board = new Array(N).fill(0).map((row) => new Array(N).fill(0));
    this.visited = new Array(N)
      .fill(false)
      .map((row) => new Array(N).fill(false));
    this.N = N;
  }

  isInside(x, y) {
    if (x >= 0 && y >= 0 && x < this.N && y < this.N) {
      return true;
    }
    return false;
  }

  minimumStepToReach(knightPos, targetPos) {
    let xOffSets = [1, -1, 2, -2, -2, 2, 1, -1];
    let yOffSets = [-2, -2, -1, -1, 1, 1, 2, 2];

    let queue = [];

    let current = new cell(knightPos[0], knightPos[1], 0);

    queue.push(current);

    this.visited[knightPos[0]][knightPos[1]] = true;

    while (queue.length) {
      let t = queue.shift();

      if (t.x == targetPos[0] && t.y == targetPos[1]) {
        return t.distance;
      }

      for (let i = 0; i < 8; i++) {
        let x = t.x + xOffSets[i];
        let y = t.y + yOffSets[i];
        if (this.isInside(x, y) && !this.visited[x][y]) {
          this.visited[x][y] = true;
          queue.push(new cell(x, y, t.distance + 1));
        }
      }
    }
    return Infinity;
  }
}

let b = new Board(6);

console.log(b.minimumStepToReach([0, 0], [5, 5]));
