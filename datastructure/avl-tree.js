class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  getHeight(root = this.root) {
    let height = 0;
    if (!root) {
      height = -1;
    } else {
      height =
        Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }
    return height;
  }

  getBalance(root = this.root) {
    return this.getHeight(root.left) - this.getHeight(root.right);
  }

  rightRotate(root) {
    let newRoot = root.left;
    root.left = root.left.right;
    newRoot.right = root;
    return newRoot;
  }

  leftRotate(root) {
    let newRoot = root.right;
    root.right = root.right.left;
    newRoot.left = root;
    return newRoot;
  }

  leftRightRotate(root) {
    root.left = this.leftRotate(root.left);
    return this.rightRotate(root);
  }

  rightLeftRotate(root) {
    root.right = this.rightRotate(root.right);
    return this.leftRotate(root);
  }

  insert(data) {
    const insertHelper = (root, node) => {
      if (!root) {
        return node;
      }
      if (node.data < root.data) {
        root.left = insertHelper(root.left, node);
      } else if (node.data > root.data) {
        root.right = insertHelper(root.right, node);
      }
      const balance = this.getBalance(root);
      if (balance > 1) {
        if (this.getHeight(root.left.left) >= this.getHeight(root.left.right)) {
          root = this.rightRotate(root);
        } else {
          root = this.leftRightRotate(root);
        }
      }
      if (balance < -1) {
        if (
          this.getHeight(root.right.right) >= this.getHeight(root.right.left)
        ) {
          root = this.leftRotate(root);
        } else {
          root = this.rightLeftRotate(root);
        }
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

const avl = new Tree();

avl.insert(30);
avl.insert(20);
avl.insert(40);
avl.insert(10);
avl.insert(5);
avl.insert(3);
avl.insert(4);
avl.insert(50);
avl.insert(60);
avl.insert(70);
avl.insert(65);

console.log(avl.root);
