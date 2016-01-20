console.log('----- Math_Number_String_ObjectApis.js -----');

import "babel-polyfill";

Number.EPSILON
console.log(Number.isInteger(Infinity))
// false
console.log(Number.isNaN("NaN"))
 // false

console.log(Math.acosh(3))
// 1.762747174039086

console.log(Math.hypot(3, 4))
// 5

console.log(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2))
// 2

console.log("abcde".includes("cd"))
// true

console.log("abc".repeat(3))
// "abcabcabc"

// (This example needs a browser)
var all = Array.from(document.querySelectorAll("*")) // Returns a real Array
console.log(all);

var arrary123 = Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
console.log(arrary123);

console.log([0, 0, 0].fill(7, 1))
// [0,7,7]

console.log([1,2,3].findIndex(x => x == 2))
// 1

var iterator = ["a", "b", "c"].entries();
console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

console.log(["a", "b", "c"].keys())
// iterator 0, 1, 2

console.log(["a", "b", "c"].values())
// iterator "a", "b", "c"

var rect = {size: {w: 100, h: 40}, origin: {x: 10, y: 20}};
Object.assign(rect, {origin: {x: 0, y: 0} })
var newRect = Object.assign({}, rect, {origin: {x: 5, y: 5} })
console.log(rect)
console.log(newRect)
