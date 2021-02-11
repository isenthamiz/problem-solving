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
    this.lca = null;
  }

  insert(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let queue = [];
      queue.push(this.root);
      while (queue.length) {
        let current = queue.shift();
        if (!current.left) {
          current.left = node;
          break;
        }
        if (!current.right) {
          current.right = node;
          break;
        }
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }

  getLowestCommonAnsestor(p, q) {
    const recurseTree = (current, p, q) => {
      if (!current) {
        return false;
      }

      let left = recurseTree(current.left, p, q) ? 1 : 0;
      let right = recurseTree(current.right, p, q) ? 1 : 0;
      let mid = current.data == p || current.data == q ? 1 : 0;

      if (left + mid + right >= 2) {
        this.lca = current.data;
      }

      return left + mid + right > 0;
    };

    recurseTree(this.root, p, q);
    return this.lca;
  }
}

let bt = new BinaryTree();

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
bt.insert(12);
bt.insert(13);
bt.insert(14);
bt.insert(15);

console.log(bt.getLowestCommonAnsestor(12, 15));
