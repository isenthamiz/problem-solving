/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let visited = new Map();

  const deepClone = function (root) {
    if (!root) {
      return null;
    }

    if (visited.has(root)) {
      return visited.get(root);
    }

    let node = new Node(root.val);

    visited.set(root, node);

    node.next = deepClone(root.next);
    node.random = deepClone(root.random);

    return node;
  };
  let clone = null;

  if (head) {
    clone = deepClone(head);
  }

  return clone;
};
