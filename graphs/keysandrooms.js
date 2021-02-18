/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Array(rooms.length).fill(false),
    stack = [];
  visited[0] = true;
  stack.push(0);
  while (stack.length) {
    let n = stack.pop();
    let room = rooms[n];
    for (let nei of room) {
      if (!visited[nei]) {
        visited[nei] = true;
        stack.push(nei);
      }
    }
  }

  for (let v of visited) {
    if (!v) {
      return false;
    }
  }
  return true;
};
