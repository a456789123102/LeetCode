var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    const ans = [];
    while(queue.length){
        let len = queue.length;
        ans.push(queue.map(n => n.val));
        while(len--){
            let node = queue.shift();
            if(node.children)
             for(let child of node.children){
                 queue.push(child)
             };
        }
    }
    return ans
};

function TreeNode(val){
this.val = val;
this.children = [];
}
const root = new TreeNode(1);
root.children.push(new TreeNode(2));
root.children.push(new TreeNode(22));
root.children.push(new TreeNode(222));
root.children[0].children.push(new TreeNode(3));
root.children[0].children.push(new TreeNode(4));
root.children[1].children.push(new TreeNode(5));

console.log(levelOrder(root))