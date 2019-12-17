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
var preorderTraversal = function(root) {
    var stack = [];
		
    // We do not push the root node onto the stack if the root node is null. This way we will avoid
    // going into the while loop when the root is null and just return an empty array as the result. 
    if(root !== null){
        stack.push(root);
    }
    
    // Initialize the result to an empty array 
    var res = [];
		
    // Keep iterating while there is something on the stack
    while(stack.length > 0){
        var node = stack.pop();
				
	// Do the preorder processing
        res.push(node.val);
				
        // If there is a right child, push it onto the stack. 
        if(node.right !== null){
            stack.push(node.right);
        }
				
        // If there is a left child, push it onto the stack. 
        if(node.left !== null){
            stack.push(node.left);
        }
    }
    
    return res; 
};
