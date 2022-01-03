#! /usr/bin/env node

// O(n+m) time | O(n) space
function updateInventory(arr1, arr2) {
    let currentInv = new Map()
    arr1.forEach(item=>{
        currentInv.set(item[1], item[0]);
    });

    arr2.forEach(item=>{
       const curQte = currentInv.get(item[1]);
       if(curQte){
           currentInv.set(item[1], item[0]+curQte)  ;
       } else {
           currentInv.set(item[1], item[0])  ;
       }
    });

    return [...currentInv.entries()].sort().map(e=>e.reverse());
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) )
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]