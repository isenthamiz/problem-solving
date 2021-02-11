class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const Posision = {
  FIRST: "FIRST",
  LAST: "LAST",
  MIDDLE: "MIDDLE",
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data, posision, n) {
    let node = new Node(data);
    switch (posision) {
      case Posision.LAST:
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
          this.tail = node;
        }
        return;
      case Posision.FIRST:
        node.next = this.head;
        this.head = node;
        return;
      case Posision.MIDDLE:
        let current = this.head;
        while (n > 0) {
          current = current.next;
          n = n - 1;
        }
        node.next = current.next;
        current.next = node;
        return;
      default:
        return;
    }
  }
}

const sll = new LinkedList();

sll.insert(10, Posision.LAST);
sll.insert(20, Posision.LAST);
sll.insert(30, Posision.LAST);
sll.insert(40, Posision.LAST);
sll.insert(100, Posision.FIRST);
sll.insert(200, Posision.MIDDLE, 1);

console.log(sll);
