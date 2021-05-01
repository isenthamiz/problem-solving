/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!s) {
    return false;
  }

  return helper(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const helper = function (s, t) {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }

  return s.val == t.val && helper(s.left, t.left) && helper(s.right, t.right);
};
