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

  constructTreeHelper(arr) {
    if (!arr.length) {
      return null;
    }
    if (arr[0] == "null") {
      arr.shift();
      return null;
    }

    let root = new Node(arr.shift());

    root.left = this.constructTreeHelper(arr);
    root.right = this.constructTreeHelper(arr);

    return root;
  }

  insert(arr) {
    this.root = this.constructTreeHelper(arr);
  }

  printTopView() {
    let queue = [];
    queue.push([this.root, 0]);
    let hmap = new Map();

    while (queue.length) {
      let [node, level] = queue.shift();
      if (!hmap.has(level)) {
        hmap.set(level, node);
      }

      node.left && queue.push([node.left, level - 1]);
      node.right && queue.push([node.right, level + 1]);
    }

    for (let v of hmap.values()) {
      console.log(v.data);
    }
  }
}

let t = new BinaryTree();

let arr = [1, "null", 2, "null", 5, 3, "null", 4, "null", "null", 6];

t.insert(arr);

t.printTopView();
