var levelOrderBottom = function(root) {
    if (!root) return [];

    let queue = [root];
    let result = [];
while(queue.length){
    let len = queue.length;
    result.push(queue.map(n => n.val));
    while(len--){
        let node = queue.shift();
        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
    }
}
return result.reverse()
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

console.log(levelOrderBottom(root))