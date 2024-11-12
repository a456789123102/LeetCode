// สร้างคลาส Node สำหรับสร้างโหนดของ Binary Tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// สร้างคลาส BinaryTree สำหรับจัดการ Binary Tree
class BinaryTree {
    constructor() {
        this.root = null; // กำหนด root เริ่มต้นเป็น null
    }

    // ฟังก์ชันสำหรับเพิ่มโหนดใหม่
    insert(data) {
        const newNode = new Node(data);
        
        // ถ้า root เป็น null ให้ newNode เป็น root
        if (this.root === null) {
            this.root = newNode;
        } else {
            // ถ้ามี root อยู่แล้ว ให้แทรกโหนดในตำแหน่งที่เหมาะสม
            this.insertNode(this.root, newNode);
        }
    }

    // ฟังก์ชันช่วยสำหรับแทรกโหนดใหม่ในตำแหน่งที่เหมาะสม
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // ถ้า newNode มีค่าน้อยกว่า node ปัจจุบัน ให้ไปทางซ้าย
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // ถ้า newNode มีค่ามากกว่าหรือเท่ากับ node ปัจจุบัน ให้ไปทางขวา
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // การ traversal แบบ in-order (ซ้าย, ราก, ขวา)
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }

    // การ traversal แบบ pre-order (ราก, ซ้าย, ขวา)
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // การ traversal แบบ post-order (ซ้าย, ขวา, ราก)
    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.data);
        }
    }
}

// ตัวอย่างการใช้งาน
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(8);
tree.insert(15);

console.log("In-order Traversal:");
tree.inOrderTraversal(tree.root);

console.log("Pre-order Traversal:");
tree.preOrderTraversal(tree.root);

console.log("Post-order Traversal:");
tree.postOrderTraversal(tree.root);
