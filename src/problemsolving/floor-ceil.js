class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  getBounds(x, root = this.root, floor = undefined, ceil = undefined) {
    if (!root) {
      return [floor, ceil];
    }
    if (x == root.data) {
      return [x, x];
    }
    if (x < root.data) {
      [floor, ceil] = this.getBounds(x, root.left, floor, root.data);
    }
    if (x > root.data) {
      [floor, ceil] = this.getBounds(x, root.right, root.data, ceil);
    }
    return [floor, ceil];
  }

  insert(data) {
    const insertHelper = function (root, node) {
      if (!root) {
        return node;
      }
      if (node.data < root.data) {
        root.left = insertHelper(root.left, node);
      }
      if (node.data > root.data) {
        root.right = insertHelper(root.right, node);
      }
      return root;
    };

    let node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.root = insertHelper(this.root, node);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(10);
bst.insert(40);
bst.insert(90);
bst.insert(80);
bst.insert(100);

console.log(bst.getBounds(15));
