var getMiddleElement = function (head) {
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast != null && fast.next != null) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      break;
    }
  }

  if (prev != null) {
    prev.next = null;
  }

  return slow;
};

var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }

  let mid = getMiddleElement(head);

  let root = new TreeNode(mid.val);

  if (head == mid) {
    return root;
  }

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);

  return root;
};
