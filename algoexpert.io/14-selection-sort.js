#! /usr/bin/env node

// O(n^2) time | O(1) space
function selectionSort(array) {
  let currentIdx = 0;

  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length - 1; i++) {
      if (array[i] < array[smallestIdx]) {
        smallestIdx = i;
      }
    }
    [array[currentIdx], array[smallestIdx]] = [
      array[smallestIdx],
      array[currentIdx],
    ];
    currentIdx++;
  }
  return array;
}

const selectionArray = [
  1, 23, 8990, 45, 100, 67, 90, 23, 8990, 45, 100, 67123, 345, 23, 8990, 45,
  100, 67, 78, 23, 8990, 45, 100, 67, 678, 98, 76,
];

console.log(selectionArray);
selectionSort(selectionArray);
console.log(selectionArray);
