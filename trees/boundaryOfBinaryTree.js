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

  insert(arr) {
    const helper = function (arr) {
      if (!arr.length) {
        return null;
      }
      if (arr[0] == "null") {
        arr.shift();
        return null;
      }
      let root = new Node(arr.shift());
      root.left = helper(arr);
      root.right = helper(arr);

      return root;
    };

    this.root = helper(arr);
  }

  getBoundary() {
    let left_boundary = [],
      right_boundary = [],
      leafs = [];
    this.preOrder(this.root, left_boundary, right_boundary, leafs, 0);
    console.log(left_boundary, leafs, right_boundary);
    console.log(left_boundary.concat(leafs, right_boundary));
  }

  isLeaf(current) {
    return !current.left && !current.right;
  }

  isRightBounday(flag) {
    return flag == 2;
  }

  isLeftBoundary(flag) {
    return flag == 1;
  }

  isRoot(flag) {
    return flag == 0;
  }

  leftChildFlag(current, flag) {
    if (this.isLeftBoundary(flag) || this.isRoot(flag)) {
      return 1;
    } else if (this.isRightBounday(flag) && !current.right) {
      return 2;
    } else {
      return 3;
    }
  }

  rightChildFlag(current, flag) {
    if (this.isRightBounday(flag) || this.isRoot(flag)) {
      return 2;
    } else if (this.isLeftBoundary(flag) && !current.left) {
      return 1;
    } else {
      return 3;
    }
  }

  preOrder(root, left_boundary, right_boundary, leafs, flag) {
    if (!root) {
      return;
    }
    if (this.isRightBounday(flag)) {
      right_boundary.unshift(root.data);
    } else if (this.isLeftBoundary(flag) || this.isRoot(flag)) {
      left_boundary.push(root.data);
    } else if (this.isLeaf(root)) {
      leafs.push(root.data);
    }

    this.preOrder(
      root.left,
      left_boundary,
      right_boundary,
      leafs,
      this.leftChildFlag(root, flag)
    );
    this.preOrder(
      root.right,
      left_boundary,
      right_boundary,
      leafs,
      this.rightChildFlag(root, flag)
    );
  }
}

let bt = new BinaryTree();

bt.insert([
  1,
  2,
  4,
  "null",
  "null",
  5,
  6,
  "null",
  "null",
  "null",
  3,
  7,
  "null",
  "null",
  8,
]);

bt.getBoundary();
