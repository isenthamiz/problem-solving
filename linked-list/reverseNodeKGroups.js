/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseLinkedList = function (head, k) {
  let ptr = head;
  let newHead = null;
  while (k > 0) {
    let tmpNode = ptr.next;
    ptr.next = newHead;
    newHead = ptr;
    ptr = tmpNode;
    k--;
  }
  return newHead;
};
var reverseKGroup = function (head, k) {
  let ptr = head;
  let count = 0;

  while (count < k && ptr) {
    ptr = ptr.next;
    count++;
  }

  if (count == k) {
    let reverseNode = reverseLinkedList(head, k);
    head.next = reverseKGroup(ptr, k);
    return reverseNode;
  }
  return head;
};
