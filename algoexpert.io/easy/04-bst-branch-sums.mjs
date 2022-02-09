#! /usr/bin/env node

import BST from "./23-bst-construction.mjs";

// O(n) time | O(n) space
function branchSums(bst) {
  let sums = [];
  (function calculateBranchSums(node, runingSum, sumArr) {
    if (!node) return;
    let newRurningSum = runingSum + node.value;
    if (!node.left && !node.rigth) {
      sumArr.push(newRurningSum);
      return;
    }
    calculateBranchSums(node.left, newRurningSum, sumArr);
    calculateBranchSums(node.rigth, newRurningSum, sumArr);
  })(bst, 0, sums);

  return sums;
}

const tree = new BST(1);
tree.insert(90).insert(8).insert(87).insert(20).insert(78).insert(5);

console.log(JSON.parse(JSON.stringify(tree)));
console.log(branchSums(tree));
