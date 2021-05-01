/**
 * @param {number[]} nums
 * @return {number}
 */
class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
    this.count_ge = 1;
  }
}

const insert = function (root, data) {
  if (!root) {
    root = new Node(data);
  } else if (data == root.data) {
    root.count_ge++;
  } else if (data < root.data) {
    root.left = insert(root.left, data);
  } else if (data > root.data) {
    root.count_ge++;
    root.right = insert(root.right, data);
  }
  return root;
};

const search = function (root, target) {
  if (!root) {
    return 0;
  } else if (root.data == target) {
    return root.count_ge;
  } else if (target < root.data) {
    return root.count_ge + search(root.left, target);
  } else {
    return search(root.right, target);
  }
};

var reversePairs = function (nums) {
  let root = null;
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += search(root, nums[i] * 2 + 1);
    root = insert(root, nums[i]);
  }
  return count;
};
