class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    // Fixed condition: use == instead of = to compare
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // Use correct comparisons for inserting in a binary tree
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  its(node){
    if(node !== null){ 
      this.its(node.left);
      this.its(node.right);
      console.log(node.data)
    }
  }
}


const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(20);
tree.insert(8);
tree.insert(15);
tree.its(tree.root);