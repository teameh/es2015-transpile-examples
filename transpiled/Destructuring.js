"use strict";

console.log('----- Destructuring.js -----');

// list matching
var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];

a === 1;
b === 3;

function getASTNode() {
  return { op: "a", lhs: { op: "b" }, rhs: "c" };
}

// object matching

var _getASTNode = getASTNode();

var a = _getASTNode.op;
var b = _getASTNode.lhs.op;
var c = _getASTNode.rhs;

console.log(a, b, c);
// "a", "b", "c"

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope

var _getASTNode2 = getASTNode();

var op = _getASTNode2.op;
var lhs = _getASTNode2.lhs;
var rhs = _getASTNode2.rhs;

console.log(op, lhs, rhs);
// a { op: 'b' } c

// Can be used in parameter position
function g(_ref2) {
  var x = _ref2.name;

  console.log(x);
}
g({ name: 5 });
// 5

// Fail-soft destructuring
var _ref3 = [];
var a = _ref3[0];

console.log(a);
// undefined;

// Fail-soft destructuring with defaults
var _ref4 = [];
var _ref4$ = _ref4[0];
var a = _ref4$ === undefined ? 1 : _ref4$;

console.log(a);
// 1

// Default arguments + destructuring
function drawSquare(_ref5) {
  var size = _ref5.size;
  var _ref5$x = _ref5.x;
  var x = _ref5$x === undefined ? 0 : _ref5$x;
  var _ref5$y = _ref5.y;
  var y = _ref5$y === undefined ? 0 : _ref5$y;

  console.log(size, x, y);
}

drawSquare({ size: { w: 10, h: 20 } });

// Destructuring + defaults arguments
function r(_ref6) {
  var x = _ref6.x;
  var y = _ref6.y;
  var _ref6$w = _ref6.w;
  var w = _ref6$w === undefined ? 10 : _ref6$w;
  var _ref6$h = _ref6.h;
  var h = _ref6$h === undefined ? 10 : _ref6$h;

  return x + y + w + h;
}
console.log(r({ x: 1, y: 2 }));