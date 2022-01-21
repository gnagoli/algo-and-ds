#! /usr/bin/env node

class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time | O(1) space
  setHead(node) {
    if (this.head !== null) {
      this.insertBefore(this.head, node);
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  // O(1) time | O(1) space
  setTail(node) {
    if (this.tail !== null) {
      this.insertAfter(this.tail, node);
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev) {
      node.prev.next = nodeToInsert;
    } else {
      this.head = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next) {
      node.next.prev = nodeToInsert;
    } else {
      this.tail = nodeToInsert;
    }
  }

  // O(p) time <p is the position> | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node && currentPosition !== position) {
      node = node.next;
      currentPosition += 1;
    }
    if (!node) {
      this.setTail(nodeToInsert);
    } else {
      this.insertBefore(node, nodeToInsert);
    }
  }

  // O(n) time | O(1) space
  removeNodeWithValue(value) {
    let node = this.head;
    while (node) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  // O(n) time | O(1) space
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}

const linkedList = new DoublyLinkedList();

linkedList.setHead(new Node(100));

linkedList.insertAtPosition(2, new Node(3));
linkedList.insertAtPosition(1, new Node(40));
linkedList.insertAtPosition(1, new Node(46));
linkedList.insertAtPosition(1, new Node(4));

console.log(linkedList);
console.log(linkedList.containsNodeWithValue(100));
linkedList.removeNodeWithValue(4);
console.log(linkedList.containsNodeWithValue(4));
console.log(linkedList);
