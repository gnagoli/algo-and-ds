#! /usr/bin/env node

/**
 *
 * @param {*} array  numbers list
 * @param {*} targetSum the target sum to match
 * @returns the list of triplet that sum matches the target number
 *
 * O(n^2) time | O(n) space
 */
function threeNumbersSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let triplets = [];

  console.log(array);

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let rigth = array.length - 1;
    while (left < rigth) {
      const currentSum = array[i] + array[left] + array[rigth];
      if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        rigth--;
      } else if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[rigth]]);
        left++;
        rigth--;
      }
    }
  }

  return triplets;
}

console.log(threeNumbersSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
