const DoubleLinkedList = require('./double-linked-list');

const newList = new DoubleLinkedList([1,2,3,4,5,6,7,8,9]);

newList.traverse();
newList.reverse();
newList.traverse();