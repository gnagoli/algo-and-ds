#! /usr/bin/env node

class BST {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.rigth = undefined;
  }

  contains = (v) => {
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value < v) {
        currentNode = currentNode.rigth;
      } else if (currentNode.value > v) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  };

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  insert(newValue) {
    let currentNode = this;
    while (true) {
      if (newValue < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(newValue);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.rigth) {
          currentNode.rigth = new BST(newValue);
          break;
        } else {
          currentNode = currentNode.rigth;
        }
      }
    }
    return this;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  remove(value, parentNode = undefined){
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.rigth;
      } else {
        if (currentNode.rigth && currentNode.left) {
          currentNode.value = currentNode.rigth.minValue();
          currentNode.rigth.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.rigth = currentNode.rigth.left;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.rigth) {
            currentNode.value = currentNode.rigth.value;
            currentNode.left = currentNode.rigth.left;
            currentNode.rigth = currentNode.rigth.rigth;
          } else {
            currentNode.value = undefined;
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.rigth;
        } else if (parentNode.rigth === currentNode) {
          parentNode.rigth = currentNode.left
            ? currentNode.left
            : currentNode.rigth;
        }
        break;
      }
    }
    return this;
  }

  minValue(){
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// const tree = new BST(20);
// tree.insert(8);
// console.log(tree);
// tree.insert(12).insert(132);

// console.log(tree);

// console.log(tree.contains(12), tree.contains(80));

// console.log(
//   "\n\n\n",
//   tree.contains(8),
//   tree.remove(8),
//   tree.contains(8),
//   "\n\n\n"
// );


export default BST;