const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "ABCCED";

const exist = function (board, word) {
  const backtrack = (board, row, col, word, index) => {
    if (index >= word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] != word[index]
    ) {
      return false;
    }

    let check = false;

    board[row][col] = "#";

    let rowoffset = [0, 1, 0, -1];
    let coloffset = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {
      check = backtrack(
        board,
        row + rowoffset[i],
        col + coloffset[i],
        word,
        ++index
      );
      if (check) {
        break;
      }
    }

    return check;
  };

  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

console.log(exist(board, word));
