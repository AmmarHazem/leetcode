// T(n): O(n)
// Because its a DFS search on the tree
// S(n): O(logn)
// Because the tree is balanced the call stacks are called on half the tree every time
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var areSymmetric = function (root1, root2) {
  if (!root1 && !root2) {
    return true;
  } else if (!root1 && root2) {
    return false;
  } else if (root1 && !root2) {
    return false;
  } else if (root1.val !== root2.val) {
    return false;
  }
  return (
    areSymmetric(root1.left, root2.right) &&
    areSymmetric(root1.right, root2.left)
  );
};

var isSymmetric = function (root) {
  return areSymmetric(root.left, root.right);
};
