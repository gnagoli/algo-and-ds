#! /usr/bin/env node

/**
 * Move elements to the end of array
 *
 * @param {Array<number>} array Array of numbers
 * @param {number} toMove element to move
 * @return {Array<number>} array with the elements at the end
 *
 * O(n) time | O(1) space
 */
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      [array[i], array[j]] = [array[j], array[i]];
    }
    i++;
  }
  return array;
}

console.log(
  moveElementToEnd([-1, 5, 10, 5, 0, 5, 5, 5, 20, 5, 28, 9, 5, 5, 3], 5)
);
