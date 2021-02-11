class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  isUnivalTree(root = this.root) {
    const helper = function (node, data) {
      if (!node) {
        return true;
      }
      if (node.data == data) {
        return helper(node.left, data) && helper(node.right, data);
      }
      return false;
    };

    return helper(root, root.data);
  }

  getUnivalSubTreeCount(root = this.root) {
    if (!root) {
      return;
    }
    this.count = this.isUnivalTree(root) ? this.count + 1 : this.count;
    this.getUnivalSubTreeCount(root.left);
    this.getUnivalSubTreeCount(root.right);
    return this.count;
  }
}

const bt = new BinaryTree();

bt.root = new Node(0);
bt.root.left = new Node(1);
bt.root.right = new Node(0);
bt.root.right.left = new Node(1);
bt.root.right.right = new Node(0);
bt.root.right.left.left = new Node(1);
bt.root.right.left.right = new Node(1);

console.log(bt.getUnivalSubTreeCount());
