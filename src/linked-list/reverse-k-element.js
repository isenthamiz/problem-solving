const reverse_every_k_elements = function (head, k) {
  // TODO: Write your code here
  let current = head,
    previous = null;

  while (true) {
    let i = 0;
    let current_sub = current;
    let previous_sub = previous;

    while (current && i < k) {
      let tNode = current.next;
      current.next = previous;
      previous = current;
      current = tNode;
      i += 1;
    }

    if (previous_sub) {
      previous_sub.next = previous;
    } else {
      head = previous;
    }

    current_sub.next = current;

    if (!current) {
      break;
    }

    previous = current_sub;
  }
  return head;
};
