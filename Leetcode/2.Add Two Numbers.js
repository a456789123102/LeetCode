function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
 }
 var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next; 
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next; 
        }
        carry = Math.floor(sum / 10); 
        current.next = new ListNode(sum % 10);
        current = current.next;  
    }
    return dummyHead.next;
 };

 let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));  // 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));  // 465

let result = addTwoNumbers(l1, l2);
function printList(node) {
    while (node !== null) {
        console.log(node.val);
        node = node.next;
    }
}

printList(result); 