const Heap = require("collections/heap");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const mergeLists = function (lists) {
  const minHeap = new Heap([], null, (a, b) => b.data - a.data);
  let result = [];
  for (let list of lists) {
    minHeap.push(list);
  }

  while (minHeap.length) {
    let node = minHeap.pop();
    result.push(node.data);
    if (node.next) {
      minHeap.push(node.next);
    }
  }

  return result;
};

let l1 = new Node(2);
l1.next = new Node(6);
l1.next.next = new Node(8);

let l2 = new Node(3);
l2.next = new Node(6);
l2.next.next = new Node(7);

let l3 = new Node(1);
l3.next = new Node(3);
l3.next.next = new Node(4);

console.log(mergeLists([l1, l2, l3]));
