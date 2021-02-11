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

  inorder(root = this.root) {
    if (!root) {
      return;
    }
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }

  preorder(root = this.root) {
    if (!root) {
      return;
    }
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }

  postorder(root = this.root) {
    if (!root) {
      return;
    }
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }

  levelorder(root = this.root) {
    let queue = [];
    queue.push(root);
    while (queue.length) {
      let e = queue.shift();
      console.log(e.data);
      if (e.left) {
        queue.push(e.left);
      }
      if (e.right) {
        queue.push(e.right);
      }
    }
  }

  isValidBST(root = this.root) {
    const helper = (root, low, high) => {
      if (!root) {
        return true;
      }
      if (
        (low != null && root.data <= low) ||
        (high != null && root.data >= high)
      ) {
        return false;
      }
      return (
        helper(root.left, low, root.data) && helper(root.right, root.data, high)
      );
    };

    return helper(root, null, null);
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

bt.levelorder();

console.log(bt.isValidBST());
