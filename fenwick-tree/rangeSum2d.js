class FenwickTree {
  constructor(grid) {
    this.matrix = grid;
    this.row = grid.length;
    this.col = grid[0].length;
    this.BIT = new Array(this.row + 1)
      .fill(0)
      .map((c) => new Array(this.col + 1).fill(0));
    this.constructBit(this.matrix, this.BIT);
  }

  constructBit(matrix, bit) {
    let aux = new Array(this.row + 1)
      .fill(0)
      .map((c) => new Array(this.col + 1).fill(0));
    this.constructAux(matrix, aux);
    console.log(aux);
    for (let j = 1; j <= this.col; j++) {
      for (let i = 1; i <= this.row; i++) {
        let v1 = this.getSum(bit, i, j),
          v2 = this.getSum(bit, i, j - 1),
          v3 = this.getSum(bit, i - 1, j - 1),
          v4 = this.getSum(bit, i - 1, j);
        this.updateBit(bit, i, j, aux[i][j] - (v1 - v2 - v4 + v3));
      }
    }
  }

  constructAux(matrix, aux) {
    for (let j = 1; j <= this.col; j++) {
      for (let i = 1; i <= this.row; i++) {
        aux[i][j] = matrix[this.row - j][i - 1];
      }
    }
  }

  getSum(bit, x, y) {
    let sum = 0;
    for (; x > 0; x -= x & -x) {
      for (; y > 0; y -= y & -y) {
        sum += bit[x][y];
      }
    }
    return sum;
  }

  updateBit(bit, x, y, val) {
    for (; x <= this.row; x += x & -x) {
      for (; y <= this.col; y += y & -y) {
        bit[x][y] += val;
      }
    }
  }

  answerQuery(x1, y1, x2, y2) {
    x1++;
    y1++;
    x2++;
    y2++;
    return (
      this.getSum(this.BIT, x2, y2) -
      this.getSum(this.BIT, x2, y1 - 1) -
      this.getSum(this.BIT, x1 - 1, y2) +
      this.getSum(this.BIT, x1 - 1, y1 - 1)
    );
  }
}

const grid = [
  [1, 2, 3, 4],
  [5, 3, 8, 1],
  [4, 6, 7, 5],
  [2, 4, 8, 9],
];

let ft = new FenwickTree(grid);

console.log(ft.BIT);

console.log(ft.answerQuery(1, 1, 3, 2));
