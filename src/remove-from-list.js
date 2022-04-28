const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, elem) {
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    enqueue(value) {
      const node = new ListNode(value);
        if (this.head) {
          this.tail.next = node;
          this.tail = node;
        } else {
          this.head = node;
          this.tail = node;
        }
    }
  }  
  let newList = new Queue();
  // function convertArrayToList(arr) {
  //   return arr.reverse().reduce((acc, cur) => {
  //     if (acc) {
  //       const node = new ListNode(cur);
  //       node.next = acc;
  //       return node;
  //     }
  
  //     return new ListNode(cur);
  //   }, null);
  // }
  
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  arr = arr.filter(a => a!=elem);

  for (let i = 0; i < arr.length; i++) {
    newList.enqueue(arr[i]);
  }
  // return convertArrayToList(arr);
  return newList.head;
}

module.exports = {
  removeKFromList
};
