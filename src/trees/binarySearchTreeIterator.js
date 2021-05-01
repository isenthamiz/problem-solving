/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  const inOrder = (root) => {
    if (!root) {
      return;
    }
    inOrder(root.left);
    this.list.push(root.val);
    inOrder(root.right);
  };
  this.list = [];
  inOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.list.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.list.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
