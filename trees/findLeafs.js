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
 * @return {number[][]}
 */
var findLeaves = function (root) {
  let result = [];

  const getHeight = function (root) {
    if (!root) {
      return -1;
    }
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    let currentHeight = Math.max(leftHeight, rightHeight) + 1;

    !result[currentHeight]
      ? (result[currentHeight] = [root.val])
      : result[currentHeight].push(root.val);

    return currentHeight;
  };

  getHeight(root);

  return result;
};
