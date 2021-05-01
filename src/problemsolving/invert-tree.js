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
  }

  invertTree(root = this.root) {
    if (!root) {
      return null;
    }

    let left = this.invertTree(root.left);
    let right = this.invertTree(root.right);
    root.left = right;
    root.right = left;

    return root;
  }

  insert(data) {
    let node = new Node(data);

    const insertHelper = function (node, root) {
      let queue = [];
      queue.push(root);
      while (queue.length) {
        let e = queue.shift();
        if (!e.left) {
          e.left = node;
          return;
        }
        if (!e.right) {
          e.right = node;
          return;
        }
        queue.push(e.left);
        queue.push(e.right);
      }
    };

    if (!this.root) {
      this.root = node;
    } else {
      insertHelper(node, this.root);
    }
  }
}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(20);
bt.insert(30);
bt.insert(40);
bt.insert(50);
bt.insert(60);

console.log(bt.root);
console.log(bt.invertTree());
