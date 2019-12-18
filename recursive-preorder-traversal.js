/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function preOrder() {
  let result = []
  preOrderHelper(root);
}
//Helper function: 

  function preOrderHelper(root) {
    if (root !== null) {
      result.push(root.val);
      preOrderHelper(root.left);
      preOrderHelper(root.right);
   }
  }
return result
}
