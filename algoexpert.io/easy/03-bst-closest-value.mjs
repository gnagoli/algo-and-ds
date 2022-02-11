#! /usr/bin/env node

import BST from "../medium/04-bst-construction.mjs"; // for test purpose

//  Iterative method
// Average : O(log(n)) time | O(1) space
// Worst : O(n) time | O(1) space
function closestValueInBst(bst, value) {
  let closestValue = Infinity;
  let currentNode = bst;
  while (currentNode) {
    if (Math.abs(currentNode.value - value) < Math.abs(closestValue - value)) {
      closestValue = currentNode.value;
    }
    if (currentNode.value < value) {
      currentNode = currentNode.rigth;
    } else if (currentNode.value > value) {
      currentNode = currentNode.left;
    } else break;
  }
  return closestValue;
}

//  recursive method
// Average : O(log(n)) time | O(log(n)) space
// Worst : O(n) time | O(n) space
function closestValueInBst2(bst, value) {
  return (function closestValueHelper(currentNode, targetValue, closest) {
    if (!currentNode) return closest;
    if (Math.abs(currentNode.value - value) < Math.abs(closest - value)) {
      closest = currentNode.value;
    }
    if (currentNode.value < value) {
      return closestValueHelper(currentNode.rigth, targetValue, closest);
    } else if (currentNode.value > value) {
      return closestValueHelper(currentNode.left, targetValue, closest);
    } else return closest;
  })(bst, value, Infinity);
}

const tree = new BST(20);
tree.insert(8);
tree.insert(12).insert(132);

console.log(closestValueInBst(tree, 10));
console.log(closestValueInBst2(tree, 10));
