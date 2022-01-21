#! /usr/bin/env node

// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let left = 0;
  let rigth = array.length - 1;
  while (left <= rigth) {
    let middle = Math.floor((left + rigth) / 2);
    let potentialMatch = array[middle];
    if (potentialMatch === target) {
      return middle;
    } else if (potentialMatch < target) {
      left = middle + 1;
    } else {
      rigth = middle - 1;
    }
  }
  return -1;
}

// O(log(n)) time | O(log(n)) space
function binarySearch2(array, target) {
  return (function binarySearchHelper(arr, t, left, rigth) {
    if (left > rigth) return -1;
    let middle = Math.floor((left + rigth) / 2);
    let potentialMatch = arr[middle];
    if (potentialMatch === t) {
      return middle;
    } else if (potentialMatch < t) {
      return binarySearchHelper(arr, t, middle + 1, rigth);
    } else {
      return binarySearchHelper(arr, t, left, middle - 1);
    }
  })(array, target, 0, array.length - 1);
}

const tab = [1, 23, 45, 67, 78, 90, 123, 345, 678, 8990];

console.log(binarySearch(tab, 90), binarySearch2(tab, 90));

console.log(binarySearch(tab, 190), binarySearch2(tab, 190));
