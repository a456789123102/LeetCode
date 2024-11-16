// var preorderTraversal = function (root) {
//   if (!root) return [];
//   let stack = [root];
//   let ans = [];
//   while (stack.length) {
//     let node = stack.pop();
//     ans.push(node.val);
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
   
//   }
//   return ans;
// };

var preorderTraversal = function (root) {
  if (!root) return [];
const ans = [];
const pre = (node) =>{
  if(!node) return null;
  ans.push(node.val);
  if(node.left)pre(node.left);
  if(node.right)pre(node.right);

}
pre(root)
return ans;
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preorderTraversal(root));


