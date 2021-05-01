/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  const dfs = function (node, parent) {
    if (node) {
      parentMap.set(node, parent);
      dfs(node.left, node);
      dfs(node.right, node);
    }
  };

  let parentMap = new Map();
  dfs(root, null);

  let queue = [];
  let visited = new Map();

  queue.push(null);
  queue.push(target);

  visited.set(target, true);
  visited.set(null, true);

  let dist = 0;

  while (queue.length) {
    let node = queue.shift();
    if (!node) {
      if (dist == K) {
        let ans = [];
        for (n of queue) {
          ans.push(n.val);
        }
        return ans;
      }
      queue.push(null);
      dist++;
    } else {
      if (!visited.has(node.left)) {
        visited.set(node.left, true);

        queue.push(node.left);
      }
      if (!visited.has(node.right)) {
        visited.set(node.right, true);

        queue.push(node.right);
      }
      let par = parentMap.get(node);
      if (!visited.has(par)) {
        visited.set(par, true);
        queue.push(par);
      }
    }
  }

  return [];
};
