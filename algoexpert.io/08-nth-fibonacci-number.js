#! /usr/bin/env node

// O(2^n) time | O(n) space
function getNthFib1(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib1(n - 1) + getNthFib1(n - 2);
}

// O(n) time | O(n) space
function getNthFib2(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = getNthFib2(n - 1, memo) + getNthFib2(n - 2, memo);
    return memo[n];
  }
}
// O(n) time | O(1) space
function getNthFib(n) {
  let lastTowFibs = [0, 1];
  let i = 3;
  while (i <= n) {
    let next = lastTowFibs[0] + lastTowFibs[1];
    lastTowFibs[0] = lastTowFibs[1];
    lastTowFibs[1] = next;
    i++;
  }
  return n>0 ? lastTowFibs[1] : lastTowFibs[0];
}

console.log(getNthFib1(10), getNthFib2(10), getNthFib(10));
console.log(getNthFib2(100), getNthFib(100));
console.log(getNthFib2(1000), getNthFib(1000));
console.log(getNthFib(10_000));