"use strict";

console.log('----- Map_Set_WeakMap_WeakSet.js -----');

// ES5 needs polyfills
// import 'core-js/fn/map';
// import 'core-js/fn/weak-map';
// import 'core-js/fn/set';
// import 'core-js/fn/weak-set';

// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size, s.has("hello"));
// 2, true
console.log(s);
// Set { 'hello', 'goodbye' }

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s));
// 34
console.log(m);
// Map { 'hello' => 42, Set { 'hello', 'goodbye' } => 34 }

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log(wm);
// undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
console.log(ws);
// undefined

// Because the added object has no other references,
// it will not be held in the set