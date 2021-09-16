const LinkedList = require("./linked-list");


function mergeLinkedLists(linkedList1, linkedList2){
    const mergedLinkedList = new LinkedList();
    let currentNode1 = linkedList1.head;
    let currentNode2 = linkedList2.head;
    while (currentNode1 !== null || currentNode2 !== null){
        if ((currentNode1===null && currentNode2!==null) || currentNode1.val >= currentNode2.val){
            mergedLinkedList.push(currentNode2.val);
            currentNode2 = currentNode2.next;
        }else if ((currentNode2===null && currentNode1!==null) || currentNode2.val > currentNode1.val ){
            mergedLinkedList.push(currentNode1.val);
            currentNode1 = currentNode1.next;
        }
    }
    return mergedLinkedList;
}

const linkedList1 = new LinkedList([1,3,5,7]);
const linkedList2 = new LinkedList([2,4,6,8]);
console.log(mergeLinkedLists(linkedList1, linkedList2).traverse());