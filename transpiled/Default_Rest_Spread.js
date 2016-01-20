"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

console.log('----- Default_Rest_Spread.js -----');

function f1(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f1(3));
// 15

function f2(x) {
  // y is an Array
  return x * (arguments.length - 1);
}
console.log(f2(3, "hello", true));
// 6

function f3(w, x, y, z) {
  return w + x + y + z;
}
// Pass each elem of array as argument
console.log(f3.apply(undefined, [1, 2, 3, 4]));
// 10

function enable(item) {
  return _extends({}, item, { enabled: true });
}
console.log(enable({ someProp: false }));
// {someProp: false, enabled: true}