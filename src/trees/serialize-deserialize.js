/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  const helper = function (root, str) {
    if (!root) {
      str += "null,";
    } else {
      str += root.val + ",";

      str = helper(root.left, str);
      str = helper(root.right, str);
    }

    return str;
  };

  return helper(root, "");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const helper = function (list) {
    if (list[0] == "null") {
      list.shift();
      return null;
    }
    let root = new TreeNode(list.shift());

    root.left = helper(list);
    root.right = helper(list);

    return root;
  };

  let list = data.split(",");
  return helper(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
