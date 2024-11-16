var zigzagLevelOrder = function(root) {
       if(!root) return[];
       const queue = [root];
       let ans = [];
       while(queue.length){
              let len = queue.length;
              ans.length % 2 === 0 ? ans.push(queue.map(n => (n.val)))  :ans.push(queue.map(n => (n.val)).reverse())
              while(len--){
                     let node = queue.shift();
                     if(node.left) queue.push(node.left);
                     if(node.right) queue.push(node.right);
              }
       }
       return ans
};

function TreeNode(val, left = null, right = null) {
       this.val = val;
       this.left = left;
       this.right = right;
   }
   
   // กำหนดค่าของ binary tree
   const root = new TreeNode(3);
   root.left = new TreeNode(9);
   root.right = new TreeNode(20);
   root.right.left = new TreeNode(15);
   root.right.right = new TreeNode(7);

   console.log(zigzagLevelOrder(root))