#! /usr/bin/env node

// O(n) time <n is the total element in all arrays>, | O(d) space <d is the depth of arrays>
function productSum(arr, depth = 1) {
  let sum = 0;
  for (let element of arr) {
    if (element instanceof Array) {
      sum += productSum(element, depth + 1);
    } else {
      sum += element;
    }
  }
  return sum * depth;
}

const values = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// console.log(values instanceof Array)
console.log(productSum(values));
