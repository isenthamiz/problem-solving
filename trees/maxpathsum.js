class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

let root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const maxPathSum = function (root) {
  const helper = (current) => {
    if (!current) {
      return 0;
    }

    let left = helper(current.left);
    let right = helper(current.right);

    let sum = current.data + left + right;

    maxSum = Math.max(maxSum, sum);

    return current.data;
  };

  let maxSum = -Infinity;

  helper(root);

  console.log(maxSum);
};

maxPathSum(root);
