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

  serialize(root = this.root) {
    let queue = [];
    queue.push(root);
    let str = "";
    while (queue.length) {
      let e = queue.shift();
      str += e.data;
      if (!e.left) {
        str += "#";
      } else {
        queue.push(e.left);
      }
      if (!e.right) {
        str += "#";
      } else {
        queue.push(e.right);
      }
    }
    return str;
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

const s = bt.serialize();

console.log(s);

const deserialize = function (str) {
  const tree = new BinaryTree();
  const arr = str.split("");
  arr.forEach((ch) => {
    if (!(ch == "#")) {
      tree.insert(ch);
    }
  });
  console.log(tree);
};

deserialize(s);
