console.log('----- Let_Const.js -----');

function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error: '"x" is read-only'
      // x = "foo";
    }
    // okay, declared with `let`
    x = "bar";
    // error: 'Duplicate declaration "x"'
    // let x = "inner";
  }
}
