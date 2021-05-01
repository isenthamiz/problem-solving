class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.pre_idx = 0;
    this.inorder = [9, 3, 15, 20, 7];
    this.preorder = [3, 9, 20, 15, 7];
    this.hmap = new Map();
  }

  buildTree() {
    const helper = (left_idx, right_idx) => {
      if (left_idx == right_idx) {
        return null;
      }

      let root_val = this.preorder[this.pre_idx];
      let root = new Node(root_val);

      let index = this.hmap.get(root_val);

      this.pre_idx++;

      root.left = helper(left_idx, index);
      root.right = helper(index + 1, right_idx);

      return root;
    };

    let idx = 0;

    for (let i = 0; i < this.inorder.length; i++) {
      this.hmap.set(this.inorder[i], i);
    }

    return helper(0, this.inorder.length);
  }
}

const bt = new BinaryTree();

console.log(bt.buildTree());
