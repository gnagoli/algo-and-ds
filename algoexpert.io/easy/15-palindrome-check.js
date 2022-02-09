#! /usr/bin/env node

// O(n^2) time | O(n) space
function isPalindrome1(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString === str;
}

// O(n) time | O(n) space
function isPalindrome2(str) {
  let reversedChars = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedChars.push(str[i]);
  }
  return reversedChars.join("") === str;
}

// O(n) time | O(n) space
function isPalindrome3(str, i = 0) {
  let j = str.length - 1 - i;
  return i >= j || (str[i] === str[j] && isPalindrome3(str, i + 1));
}

// O(n) time | O(1) space
function isPalindrome(str) {
  let leftIdx = 0;
  let rigthIdx = str.length - 1;
  while (leftIdx <= rigthIdx) {
    if (str[leftIdx++] !== str[rigthIdx--]) return false;
  }
  return true;
}

console.log(
  isPalindrome("abcdcba"),
  isPalindrome1("abcdcba"),
  isPalindrome2("abcdcba"),
  isPalindrome3("abcdcba")
);
console.log(
  isPalindrome("abcodcba"),
  isPalindrome1("abcodcba"),
  isPalindrome2("abcodcba"),
  isPalindrome3("abcodcba")
);
