class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data) {
    let node = new Node(data);
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
  }

  removeNthFromEnd(N) {
    const helper = function (head) {
      let dummy = new Node(-1);
      dummy.next = head;
      let length = 0;
      let current = head;
      while (current) {
        length++;
        current = current.next;
      }

      length -= N;
      current = dummy;
      while (length > 0) {
        --length;
        current = current.next;
      }

      current.next = current.next.next;
      return dummy.next;
    };

    return helper(this.head);
  }
}

let l1 = new LinkedList();

l1.insert(1);
l1.insert(2);
l1.insert(3);
l1.insert(4);
l1.insert(5);
l1.insert(6);

l1.removeNthFromEnd(2);

console.log(JSON.stringify(l1.head));
