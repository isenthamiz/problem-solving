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
      this.tail.next = node;
      this.tail = node;
    }
  }
}

let l1 = new LinkedList();

l1.insert(9);
l1.insert(9);
l1.insert(9);
l1.insert(9);
l1.insert(9);
l1.insert(9);
l1.insert(9);

let l2 = new LinkedList();

l2.insert(9);
l2.insert(9);
l2.insert(9);

const addTwoNumbers = function (l1, l2) {
  let l3 = new LinkedList();
  let list1 = l1.head;
  let list2 = l2.head;
  let remainder = 0;
  while (list1 || list2) {
    let num1 = list1 ? list1.data : 0;
    let num2 = list2 ? list2.data : 0;
    let sum = remainder + num1 + num2;
    let product = sum % 10;
    remainder = Math.floor(sum / 10);
    l3.insert(product);
    list1 ? (list1 = list1.next) : undefined;
    list2 ? (list2 = list2.next) : undefined;
  }
  console.log(remainder);
  remainder ? l3.insert(remainder) : undefined;
  return l3;
};

console.log(addTwoNumbers(l1, l2));
