#! /usr/bin/env node
/*jshint esversion: 6 */
/**
 * Smallest differnce between numbers of tow different arrays
 *
 * @param {*} arrayOne first array
 * @param {*} arrayTow second array
 * @return {*} array of two numbers that has the smallest difference
 *
 * O(nlog(n)+ mlog(m)) time (n -> length of arrayOne, m -> length of arrayTwo) | O(1) space
 */
function smallestDifference(arrayOne, arrayTow) {
  arrayOne.sort((a, b) => a - b);
  arrayTow.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTow = 0;
  let currentDiff = Infinity;
  let smallest = Infinity;
  let smallestPair = [];

  while (idxOne < arrayOne.length && idxTow < arrayTow.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTow[idxTow];
    currentDiff = Math.abs(firstNum - secondNum);
    if (currentDiff === 0) return [firstNum, secondNum];
    if (firstNum < secondNum) {
      idxOne++;
    } else if (firstNum > secondNum) {
      idxTow++;
    }
    if (smallest > currentDiff) {
      smallest = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
