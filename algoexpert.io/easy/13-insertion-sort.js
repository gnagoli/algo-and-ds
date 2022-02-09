#! /usr/bin/env node

// O(n^2) time | O(1) space
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
}

const numberArray = [
  1, 23, 8990, 45, 100, 67, 90, 23, 8990, 45, 100, 67123, 345, 23, 8990, 45,
  100, 67, 78, 23, 8990, 45, 100, 67, 678, 98, 76,
];

console.log(numberArray);
insertionSort(numberArray);
console.log(numberArray);
