/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const helper = function (current) {
    if (current) {
      if (!helper(current.next)) return false;
      if (current.val != front.val) return false;
      front = front.next;
    }
    return true;
  };

  let front = head;
  return helper(front, head);
};
