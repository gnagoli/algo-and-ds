#! /usr/bin/env node

function permAlone(str) {
  let chars = new Set([...str]);
  if (chars.size == 1) {
    return 0;
  }
  
  return str;
}

permAlone("aab");
