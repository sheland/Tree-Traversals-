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


function inorderTraversal(root) {
  let stack = []
  
  if(!root) return stack 
 
  let result = []
  let curr = root
  
  while(stack.length > 0 || current != null) {
    if(current) {
      stack.push(current)
      current = current.left 
    } else {
      current = stack.pop()
      result.push(current.val)
      current = current.right
    }
  }
  return result
  
}
