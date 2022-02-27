/*jshint esversion: 6 */

import BST from "./04-bst-construction.mjs";

/**
 *
 * In Order bst traversal
 *
 * @param {BST} bstNode
 * @param {Array<Number>} array
 * @return {Array<Number>} array
 *
 * O(n) time | O(n) space
 */
function inOrderTraversal(bstNode, array) {
  if (bstNode) {
    inOrderTraversal(bstNode.left, array);
    array.push(bstNode.value);
    inOrderTraversal(bstNode.rigth, array);
  }
  return array;
}


/**
 *
 * pre Order bst traversal
 *
 * @param {BST} bstNode
 * @param {Array<Number>} array
 * @return {Array<Number>} array
 *
 * O(n) time | O(n) space
 */
function preOrderTraversal(bstNode, array) {
  if (bstNode) {
    array.push(bstNode.value);
    preOrderTraversal(bstNode.left, array);
    preOrderTraversal(bstNode.rigth, array);
  }
  return array;
}

/**
 *
 * post Order bst traversal
 *
 * @param {BST} bstNode
 * @param {Array<Number>} array
 * @return {Array<Number>} array
 *
 * O(n) time | O(n) space
 */
function postOrderTraversal(bstNode, array) {
  if (bstNode) {
    postOrderTraversal(bstNode.left, array);
    postOrderTraversal(bstNode.rigth, array);
    array.push(bstNode.value);
  }
  return array;
}

const bstTree = new BST(20);
bstTree.insert(8);
bstTree.insert(12).insert(132);

console.log(inOrderTraversal(bstTree, []));
console.log(preOrderTraversal(bstTree, []));
console.log(postOrderTraversal(bstTree, []));
