console.log('----- Destructuring.js -----');

// list matching
var [a, ,b] = [1,2,3];
a === 1;
b === 3;

function getASTNode(){
  return {op : "a", lhs : { op: "b" } , rhs : "c" }
}

// object matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
console.log(a, b, c);
// "a", "b", "c"

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()
console.log(op, lhs, rhs);
// a { op: 'b' } c

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})
// 5

// Fail-soft destructuring
var [a] = [];
console.log(a);
// undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log(a);
// 1

// Default arguments + destructuring
function drawSquare({ size, x = 0, y = 0 }) {
  console.log(size, x, y)
}

drawSquare({size: {w: 10, h:20}});

// Destructuring + defaults arguments
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
console.log(r({x:1, y:2}));
