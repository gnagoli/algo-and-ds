#! /usr/bin/env node

// 0(n) time | O(1) space
function findThreeLargest(array) {
  let threeLargests = [];
  const it = array[Symbol.iterator]();
  let position = it.next();
  while (!position.done) {
    let value = position.value;

    if (!threeLargests[2] || threeLargests[2] < value) {
      updateAndShift(threeLargests, value, 2);
    } else if (!threeLargests[1] || threeLargests[1] < value) {
      updateAndShift(threeLargests, value, 1);
    } else if (!threeLargests[0] || threeLargests[0] < value) {
      updateAndShift(threeLargests, value, 0);
    }

    position = it.next();
  }

  return threeLargests;
}

function updateAndShift(arr, value, idx) {
  for (let i = 0; i <= idx; i++) {
    if (idx === i) {
      arr[i] = value;
    } else {
      arr[i] = arr[i + 1];
    }
  }
  return arr;
}

// 0(n) time | O(N) space <N is the number of largest element to return>
function findNLargest(array, n = 3) {
  let nLargests = [];
  const it = array[Symbol.iterator]();
  let position = it.next();
  while (!position.done) {
    let value = position.value;
    let idx = n-1;
    while (idx >= 0) {
      if (!nLargests[idx] || nLargests[idx] < value) {
        updateAndShift(nLargests, value, idx);
        break; //  Stop if value inserted
      }
      idx--;
    }
    position = it.next();
  }

  return nLargests;
}

const numbersArrab = [1, 90, 123, 345, 23, 8990, 45, 10067, 78, 678, 9876];

console.log(findThreeLargest(numbersArrab));

console.log(findNLargest(numbersArrab, 6));
