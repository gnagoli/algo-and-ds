import BST from "./04-bst-construction.mjs";

/**
 * Validate bst
 * @param {BST} tree
 * @returns true | false
 *
 * O(n) time | O(d) space [n is the nodes and d is the depth of the tree]
 */
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(treeNode, minValue, maxValue) {
  if (!treeNode) return true;
  if (treeNode.value < minValue || treeNode.value >= maxValue) return false;
  let leftIsValid = validateBstHelper(treeNode.left, minValue, treeNode.value);
  return (
    leftIsValid && validateBstHelper(treeNode.rigth, treeNode.value, maxValue)
  );
}

const bstTree = new BST(20);
bstTree.insert(8);
bstTree.insert(12).insert(132);

console.log(validateBst(bstTree));
