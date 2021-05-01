/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let prev = null;
  let current = head;

  while (m > 1) {
    prev = current;
    current = current.next;
    m--;
    n--;
  }

  let rev = prev,
    tail = current;

  while (n > 0) {
    let tmpNode = current.next;
    current.next = prev;
    prev = current;
    current = tmpNode;
    n--;
  }

  if (rev) {
    rev.next = prev;
  } else {
    head = prev;
  }
  tail.next = current;
  return head;
};
