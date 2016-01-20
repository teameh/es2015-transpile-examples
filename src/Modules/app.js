console.log('----- Modules/app.js -----');

import * as math from "./math";
console.log("2π = " + math.sum(math.pi, math.pi));
// 2π = 6.283186 

import exp, {pi, e} from "./mathplusplus";
console.log("e = " + e);
console.log("e^π = " + exp(pi));
// e^π = 23.14070064895278
