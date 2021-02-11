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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function (root, u) {
  let currentlevel = [],
    nextlevel = [];

  nextlevel.push(root);

  while (nextlevel.length) {
    currentlevel = nextlevel;
    nextlevel = [];

    while (currentlevel.length) {
      let node = currentlevel.shift();

      if (node.val == u.val) {
        return currentlevel[0] ? currentlevel[0] : null;
      }

      if (node.left) {
        nextlevel.push(node.left);
      }
      if (node.right) {
        nextlevel.push(node.right);
      }
    }
  }
  return null;
};
