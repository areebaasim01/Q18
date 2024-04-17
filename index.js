"use strict";
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.     88
// • Print your array in its original order.                                                88
// • Print your array in alphabetical order without modifying the actual list.              88
// • Show that your array is still in its original order by printing it.                    88
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
Object.defineProperty(exports, "__esModule", { value: true });
let favPlace = ["Bali", "Paris", "Dubai", "Turkey", "Murre"];
console.log("Original Order:");
console.log(favPlace);
let sortedList = favPlace.slice().sort();
console.log("Sorted Alphabatical Order:");
console.log(sortedList);
let reverseList = favPlace.slice().sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabatical Order:");
console.log(reverseList);
