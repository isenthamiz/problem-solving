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

  isValidBST(root = this.root) {
    const helper = (node, low, high) => {
      if (!node) {
        return true;
      }
      if (
        (low != null && node.data <= low) ||
        (high != null && node.data >= high)
      ) {
        return false;
      }

      return (
        helper(node.left, low, node.data) && helper(node.right, node.data, high)
      );
    };

    return helper(root, null, null);
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

console.log(bst.isValidBST());
