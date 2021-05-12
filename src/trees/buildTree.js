var buildTree = function (preorder, inorder) {
  const createTree = function (left, right) {
    if (left > right) {
      return null;
    }

    let rootVal = preorder[pIndex++];
    let root = new TreeNode(rootVal);

    root.left = createTree(left, hmap.get(rootVal) - 1);
    root.right = createTree(hmap.get(rootVal) + 1, right);

    return root;
  };

  let hmap = new Map();
  let pIndex = 0;
  for (let i = 0; i < inorder.length; i++) {
    hmap.set(inorder[i], i);
  }

  return createTree(0, preorder.length - 1);
};
