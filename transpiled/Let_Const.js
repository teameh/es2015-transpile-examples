"use strict";

console.log('----- Let_Const.js -----');

function f() {
  {
    var x = undefined;
    {
      // okay, block scoped name
      var _x = "sneaky";
      // error: '"x" is read-only'
      // x = "foo";
    }
    // okay, declared with `let`
    x = "bar";
    // error: 'Duplicate declaration "x"'
    // let x = "inner";
  }
}