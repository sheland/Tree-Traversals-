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
