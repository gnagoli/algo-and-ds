/*jshint esversion: 6 */

import BST from "./04-bst-construction.mjs";

/**
 * Invert binary tree | iterative method
 * @param {BST} tree 
 * 
 * O(n) time | O(n) space
 */
function invertBinaryTree1(tree) {
  let queue = [tree];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current) {
      [current.left, current.rigth] = [current.rigth, current.left];
      queue.push(current.left, current.rigth);
    }
  }
}

/**
 * Invert binary tree | recursive method
 * @param {BST} tree 
 * @returns 
 * O(n) time | O(d) space
 */
function invertBinaryTree(tree) {
  if (!tree) return;
  [tree.left, tree.rigth] = [tree.rigth, tree.left];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.rigth);
}

const bstTree = new BST(20);
bstTree.insert(8);
bstTree.insert(12).insert(132);

console.log("\n<============INITIAL===========>");
console.log(bstTree);
console.log("\n<============INVERTED 1===========>");
invertBinaryTree1(bstTree);
console.log(bstTree);
console.log("\n<============REVERTED 1===========>");
invertBinaryTree(bstTree);
console.log(bstTree);
