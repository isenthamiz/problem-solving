var isRobotBounded = function (instructions) {
  let directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ],
    idx = 0,
    x = 0,
    y = 0;

  let charArr = instructions.split("");
  for (let command of instructions) {
    if (command == "R") {
      idx = (idx + 1) % 4;
    } else if (command == "L") {
      idx = (idx + 3) % 4;
    } else {
      x += directions[idx][0];
      y += directions[idx][1];
    }
  }

  return (x == 0 && y == 0) || idx != 0;
};

module.exports = isRobotBounded;
