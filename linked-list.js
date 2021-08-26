/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length<1){
      return undefined;
    }
    if (this.length===1){
      const result = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return result;
    }
    let currentNode = this.head;
    while (currentNode.next.next){
      currentNode = currentNode.next;
    }
    const result = currentNode.next.val;
    currentNode.next = null;
    this.tail = currentNode;
    this.length-=1;
    return result;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length<1){
      return undefined;
    }
    if (this.length===1){
      const result = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return result;
    }
    const result = this.head.val;
    this.head = this.head.next;
    this.length-=1;
    return result;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let currentNode = this.head;
    while(currentNode){
      if (count===idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      count++;
    }
    return undefined;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let currentNode = this.head;
    while(currentNode){
      if (count===idx){
        currentNode.val = val;
        return;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length=1;
      return;
    }
    if (idx===this.length){
      newNode.next = null;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length+=1;
      return;
    }
    let count = 0;
    let currentNode = this.head;
    while(currentNode){
      
      if (count+1===idx){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length+=1;
        return;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length < 1){
      return undefined;
    }
    if (this.length===1){
      this.head = null;
      this.tail = null;
      this.length=0;
      return;
    }
    let count=0;
    let currentNode = this.head;
    while(currentNode){
      if (count+1 === idx){
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head){
      return 0;
    }
    let sum = 0;
    let currentNode = this.head;
    while (currentNode){
      sum+=currentNode.val;
      currentNode = currentNode.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
