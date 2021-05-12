var reverseBetween = function (head, left, right) {
  if (left == right) {
    return head;
  }
  let i = 0,
    current = head,
    previous = null;

  while (current && i < left - 1) {
    previous = current;
    current = current.next;
    i += 1;
  }
  const last_node_of_first_part = previous;
  const last_node_of_sub_part = current;
  i = 0;

  while (current && i < right - left + 1) {
    let tNode = current.next;
    current.next = previous;
    previous = current;
    current = tNode;
    i += 1;
  }

  if (last_node_of_first_part) {
    last_node_of_first_part.next = previous;
  } else {
    head = previous;
  }
  last_node_of_sub_part.next = current;

  return head;
};
