#! /usr/bin/env node

function sym(...args) {

  return [
    ...new Set(
      args.reduce((A, B) => [
        ...A.filter((v) => !B.includes(v)),
        ...B.filter((x) => !A.includes(x)),
      ])
    ),
  ];
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
