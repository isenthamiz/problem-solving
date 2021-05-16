var minCameraCover = function (root) {
  const dfsHelper = function (root, parent) {
    if (root) {
      dfsHelper(root.left, root);
      dfsHelper(root.right, root);

      if (
        (parent == null && !covered.has(root)) ||
        (root.left && !covered.has(root.left)) ||
        (root.right && !covered.has(root.right))
      ) {
        ans += 1;
        covered.add(parent);
        covered.add(root);
        root.left && covered.add(root.left);
        root.right && covered.add(root.right);
      }
    }
  };

  let ans = 0;
  let covered = new Set();
  covered.add(null);
  dfsHelper(root, null);
  return ans;
};
