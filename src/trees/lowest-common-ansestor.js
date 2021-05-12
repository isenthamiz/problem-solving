var lowestCommonAncestor = function (root, p, q) {
  const helper = function (root) {
    if (!root) {
      return false;
    }

    let left = helper(root.left) ? 1 : 0;
    let right = helper(root.right) ? 1 : 0;

    let mid = root == p || root == q ? 1 : 0;

    if (mid + left + right >= 2) {
      ans = root;
    }

    return mid + left + right > 0;
  };
  let ans = null;
  helper(root);
  return ans;
};
