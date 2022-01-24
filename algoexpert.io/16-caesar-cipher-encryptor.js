#! /usr/bin/env node

// O(n) time | O(n) space
function caesarCipherEncryptor(str, key) {
  const newLetters = [];
  let newKey = key % 26;
  for (let c of str) {
    let newLetterCode = c.charCodeAt(0) + newKey;
    let newLetter =
      newLetterCode <= 122
        ? String.fromCharCode(newLetterCode)
        : String.fromCharCode(96 + (newLetterCode % 122));
    newLetters.push(newLetter);
  }
  return newLetters.join("");
}


// O(n) time | O(n) space
function caesarCipherEncryptor2(str, key) {
  const newLetters = [];
  let newKey = key % 26;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let c of str) {
    let newLetterCode = alphabet.indexOf(c) + newKey;
    let newLetter =
      newLetterCode <= 25
        ? alphabet[newLetterCode]
        : alphabet[-1 + (newLetterCode % 25)];
    newLetters.push(newLetter);
  }
  return newLetters.join("");
}

console.log("sdfghjk =>", caesarCipherEncryptor("sdfghjk", 1));
console.log("sdfghjk =>", caesarCipherEncryptor2("sdfghjk", 1));