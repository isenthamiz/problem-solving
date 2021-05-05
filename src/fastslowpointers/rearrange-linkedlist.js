class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const reorder = function (head) {
  // TODO: Write your code here
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let reverseHead = reverseList(slow);
  let currentHead = head;

  while (currentHead && reverseHead) {
    let tmp = currentHead.next;
    currentHead.next = reverseHead;
    currentHead = tmp;

    tmp = reverseHead.next;
    reverseHead.next = currentHead;
    reverseHead = tmp;
  }

  if (currentHead !== null) {
    currentHead.next = null;
  }
};

const reverseList = function (head) {
  let current = head;
  let previous = null;
  while (current) {
    let tnode = current.next;
    current.next = previous;
    previous = current;
    current = tnode;
  }
  return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();
