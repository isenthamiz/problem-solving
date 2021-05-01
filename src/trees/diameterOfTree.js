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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  const helper = function (root) {
    if (!root) {
      return 0;
    }
    let left = helper(root.left);
    let right = helper(root.right);
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
  };
  let ans = 1;
  helper(root);
  return ans - 1;
};
