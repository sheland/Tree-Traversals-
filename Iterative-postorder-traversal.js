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
 
 function postOrder(root) {
  
  if(!root) return []
  
  let stack = [root]
  let result = []
  
  while(stack.length > 0) {
   let curr = stack.pop()
   result.unshift(curr.val)
   
   if(curr.left) {
    stack.push(curr.right)
   }
   
   if(curr.right) {
    stack.push(curr.left)
   }
   
  }
  return result
  
  
 }
