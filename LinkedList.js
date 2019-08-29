class _Node {
  constructor() {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1)
  insertFirst(item){
    this.head = new _Node(item, this.head);
  } 

  // O(n)
  insertLast(item){
    if (this.head === null) {
      this.insertFirst(item)
    } 
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // O(n)
  remove(item) {
    //If the list is empty
    if (!this.head) {
      return null;
    }
    //If the node to be remvoed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currentNode= this.head;
    //keep track of previous
    let previousNode= this.head;

    while ((currentNode !== null) && (currentNode.value !== item)) {
      //save the previous node
      previousNode= currentNode;
      currentNode= currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }

  // O(n)
  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list and the item is not on the list */
           
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    return currNode;
  }

  
//this.head -> node()  "head points to"

// function display(){

// }

// let LL = new LinkedList();