const LinkedList = require('./LinkedList');

//displays the linked list
function display(LL) {
  let curNode = LL.head;
  let arr = [];
  while (curNode) {
    arr.push(curNode.value);
    curNode = curNode.next;
  }
  console.log(arr);
}


//returns the size of the linked list
function size(LL) {
  if (LL.head === null) {
    console.log('The list is empty');
  }
  let counter = 0;
  let curNode = LL.head;

  while (curNode !== null) {
    counter++;
    curNode = curNode.next;
  }
  console.log(counter);
}


//finds if the list is empty or not (without using the size() function)
function isEmpty(LL) {
  if(LL.head === null) {
    console.log('Empty');
  } else {
    console.log('Not Empty');
  }
}

//finds the node before the item you are looking for
function findPrevious(LL, key) {
  if (LL.head === null) {
    console.log('List is empty');
  } else {
    let curNode = LL.head;
    let previousNode;

    while (curNode.value !== key) {

      previousNode = curNode;
      //console.log(previousNode);
      curNode = curNode.next;
    }
    return previousNode;
    //console.log(`Previous node before ${key} is ${previousNode.value}`);
  }
}

//returns the last node in the linked list
function findLast(LL) {
  let curNode = LL.head;

  while (curNode !== null) {
    if (!curNode.next) {
      return curNode;
    }
    curNode = curNode.next;
  }
}

//This code outputs the node at position 1 in the linked list

// function WhatDoesThisProgramDo(lst) {
//   let current = lst.head;
//   while (current !== null) {
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         newNode.next = newNode.next.next;
//       }
//       else {
//         newNode = newNode.next;
//       }
//     }
//     return current = current.next;
//   }
// }


function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');
  SLL.insertBefore('testBefore', 'Husker');
  SLL.insertAfter('testAfter', 'Husker');
  SLL.insertAt('newThingAt', 2);
  SLL.remove('Tauhida');
  
  //console.log(JSON.stringify(SLL, null, 2));

  //display(SLL);
  //size(SLL);
  //isEmpty(SLL);
  //console.log(findPrevious(SLL, 'testBefore'));
  //console.log(findLast(SLL));

}

main();