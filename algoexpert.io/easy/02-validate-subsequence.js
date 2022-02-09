#! /usr/bin/env node

/**
 * Validate arr sub sequence
 */

// O(n) time | O(1) space
function validateSubsequence(arr, sequence) {
  const arrIter = arr[Symbol.iterator]();
  const seqIter = sequence[Symbol.iterator]();

  let arrPosition = arrIter.next();
  let seqPosition = seqIter.next();

  while (!arrPosition.done && !seqPosition.done) {
    if (arrPosition.value === seqPosition.value) {
      seqPosition = seqIter.next();
    }
    arrPosition = arrIter.next();
  }
  return seqPosition.done;
}

// O(n) time | O(1) space
function validateSubsequence2(arr, sequence) {
  const seqIter = sequence[Symbol.iterator]();
  let seqPosition = seqIter.next();

  for (let value of arr) {
    if (seqPosition.done) break;
    if (seqPosition.value === value) {
      seqPosition = seqIter.next();
    }
  }

  return seqPosition.done;
}

console.log(validateSubsequence([12, 3, 5, 9, 10], [3, 9, 10])); // true
console.log(validateSubsequence([12, `3`, "5", 9, 10], [3, 9, 10])); // false
console.log(validateSubsequence([12, 3, 5, 9, 10], [3, 9, 10, 45])); // false
console.log(validateSubsequence2([12, 3, 5, 9, 10], [3, 9, 10])); // true
console.log(validateSubsequence2([12, 3, 5, 9, 10], [3, 9, 10, 45])); // false
