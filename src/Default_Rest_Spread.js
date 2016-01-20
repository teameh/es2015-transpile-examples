console.log('----- Default_Rest_Spread.js -----');

function f1(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f1(3));
// 15

function f2(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f2(3, "hello", true));
// 6

function f3(w, x, y, z) {
  return w + x + y + z;
}
// Pass each elem of array as argument
console.log(f3(...[1,2,3,4]));
// 10

function enable(item){
    return {...item, enabled: true };
}
console.log(enable({ someProp: false }));
// {someProp: false, enabled: true}
