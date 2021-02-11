class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.post_idx = 0;
    this.inorder = [9, 3, 15, 20, 7];
    this.postorder = [9, 15, 7, 20, 3];
    this.hmap = new Map();
  }

  buildTree() {
    const helper = (left_idx, right_idx) => {
      if (left_idx > right_idx) {
        return null;
      }

      let root_val = this.postorder[this.post_idx];
      let root = new Node(root_val);

      let index = this.hmap.get(root_val);

      this.post_idx--;

      root.right = helper(index + 1, right_idx);
      root.left = helper(left_idx, index - 1);

      return root;
    };

    this.post_idx = this.postorder.length - 1;

    for (let i = 0; i < this.inorder.length; i++) {
      this.hmap.set(this.inorder[i], i);
    }

    return helper(0, this.inorder.length - 1);
  }
}

const bt = new BinaryTree();

console.log(bt.buildTree());
