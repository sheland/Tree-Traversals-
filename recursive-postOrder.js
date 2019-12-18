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

function postOrder() {
  let result = []
  postOrderHelper(root);
}
//Helper function: 

  function postOrderHelper(root) {
    if (root !== null) {
      postOrderHelper(root.left);
      postOrderHelper(root.right);
      result.push(root.val);
   }
  }
return result
}
