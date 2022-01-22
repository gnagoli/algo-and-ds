#! /usr/bin/env node

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    let limit = array.length - 1 - counter++;
    for (let i = 0; i < limit; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // swap elements
        isSorted = false
      }
    }
  }
}

const numbersArray = [1, 23, 8990, 45, 100, 67, 90,  23, 8990, 45, 100, 67123, 345, 23, 8990, 45, 100, 67, 78, 23, 8990, 45, 100, 67, 678, 98, 76];

console.log(numbersArray);
bubbleSort(numbersArray)
console.log(numbersArray);