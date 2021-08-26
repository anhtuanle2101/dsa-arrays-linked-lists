class Node{
    constructor(val, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoubleLinkedList{
  constructor(vals = []){
      this.head = null;
      this.tail = null;
      this.length = 0;
      for(let val of vals) this.push(val);
  }

  traverse(){
    if (!this.head){
      return;
    }
    let currentNode = this.tail;
    while(currentNode){
      console.log(currentNode.val);
      currentNode = currentNode.prev;
    }
  }

  reverse(){
    const tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
    let currentNode = this.head;
    while(currentNode){
      if (currentNode.next === null){
        currentNode.next = currentNode.prev;
        currentNode.prev = null;
      }else
      if (currentNode.prev === null){
        currentNode.prev = currentNode.next;
        currentNode.next = null;
      }else{
        const temp = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = temp;
      }
      currentNode = currentNode.next;
    }
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    const tempNode = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.prev = tempNode;
    this.length+=1;
    return;
  }
  
  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.head.next.prev = this.head;
    this.length+=1;
    return;
  }
  
  /** pop(): return & remove last item. */
  pop() {
    //check if empty
    if (this.length < 1){
      throw Error("Cannot be popped");
    }
    if (this.length === 1){
      const temp = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    const tempNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    tempNode.prev = null;
    this.length-=1;
    return tempNode.val;
  }
  
  /** shift(): return & remove first item. */
  shift() {
    if (this.length < 1){
      throw Error("Cannot be shifted");
    }
    if (this.length === 1){
      const temp = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    const tempNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    tempNode.next = null;
    this.length-=1;
    return tempNode.val;
  }
  
  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx >= this.length || idx<0){
      throw Error("Invalid index");
    }
    let mid = Math.floor((this.length-idx)/2);
    if (idx <= mid){
      let currentNode = this.head;
      let count = 0;
      while(currentNode && idx <= mid){
        if (idx === count){
          return currentNode.val;
        }
        currentNode = currentNode.next;
        count++;
      }
    }else{
      let currentNode = this.tail;
      let count = this.length-1;
      while(currentNode && idx > mid){
        if (idx === count){
          return currentNode.val;
        }
        currentNode = currentNode.prev;
        count--;
      }
    }
  }
  
  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx >= this.length || idx<0){
      throw Error("Invalid index");
    }
    let mid = Math.floor((this.length-idx)/2);
    if (idx <= mid){
      let currentNode = this.head;
      let count = 0;
      while(currentNode && idx <= mid){
        if (idx === count){
          currentNode.val = val;
          return;
        }
        currentNode = currentNode.next;
        count++;
      }
    }else{
      let currentNode = this.tail;
      let count = this.length-1;
      while(currentNode && idx > mid){
        if (idx === count){
          currentNode.val = val;
          return;
        }
        currentNode = currentNode.prev;
        count--;
      }
    }
  }
  
  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx > this.length || idx<0){
      throw Error("Invalid index");
    }
    const newNode = new Node(val);
    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    if (idx===0){
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length += 1;
      return;
    }
    if (idx===this.length){
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length+=1;
      return;
    }
    let mid = Math.floor((this.length-idx)/2);
    if (idx <= mid){
      let currentNode = this.head;
      let count = 0;
      while(currentNode && idx <= mid){
        if (idx === count){
          newNode.prev = currentNode.prev;
          newNode.next = currentNode;
          currentNode.prev.next = newNode;
          currentNode.prev = newNode;
          this.length+=1;
          return;
        }
        currentNode = currentNode.next;
        count++;
      }
    }else{
      let currentNode = this.tail;
      let count = this.length-1;
      while(currentNode && idx > mid){
        if (idx === count){
          newNode.prev = currentNode.prev;
          newNode.next = currentNode;
          currentNode.prev.next = newNode;
          currentNode.prev = newNode;
          this.length+=1;
          return;
        }
        currentNode = currentNode.prev;
        count--;
      }
    }
  }
  
  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx > this.length || idx<0){
      throw Error("Invalid index");
    }
    if (this.length===1){
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    if (idx === 0){
      const temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
      this.length-=1;
      return;
    }
    if (idx === this.length-1){
      const temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length-=1;
      return;
    }
    let mid = Math.floor((this.length-idx)/2);
    if (idx <= mid){
      let currentNode = this.head;
      let count = 0;
      while(currentNode && idx <= mid){
        if (idx === count){
          currentNode.val = val;
          return;
        }
        currentNode = currentNode.next;
        count++;
      }
    }else{
      let currentNode = this.tail;
      let count = this.length-1;
      while(currentNode && idx > mid){
        if (idx === count){
          currentNode.val = val;
          return;
        }
        currentNode = currentNode.prev;
        count--;
      }
    }
  }
  
  /** average(): return an average of all values in the list */
  average() {
    if (this.length===0){
      return 0;
    }
    let currentNode = this.head;
    let sum = 0;
    while(currentNode){
      sum+=currentNode.val;
      currentNode = currentNode.next;
    }
    return sum/this.length;
  }
}

module.exports = DoubleLinkedList;