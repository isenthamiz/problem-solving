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

  zigzaglevelorder(root = this.root) {
    let currentlevel = [];
    let nextlevel = [];
    currentlevel.push(root);
    let lefttoright = true;

    while (currentlevel.length) {
      let node = currentlevel.shift();
      console.log(node.data);
      if (lefttoright) {
        node.right && nextlevel.unshift(node.right);
        node.left && nextlevel.unshift(node.left);
      } else {
        node.left && nextlevel.unshift(node.left);
        node.right && nextlevel.unshift(node.right);
      }
      if (!currentlevel.length) {
        lefttoright = !lefttoright;
        currentlevel = nextlevel;
        nextlevel = [];
      }
    }
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

bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);
bt.insert(7);
bt.insert(8);
bt.insert(9);
bt.insert(10);
bt.insert(11);

bt.zigzaglevelorder();
