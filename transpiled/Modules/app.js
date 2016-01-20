"use strict";

var _math = require("./math");

var math = _interopRequireWildcard(_math);

var _mathplusplus = require("./mathplusplus");

var _mathplusplus2 = _interopRequireDefault(_mathplusplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('----- Modules/app.js -----');

console.log("2π = " + math.sum(math.pi, math.pi));
// 2π = 6.283186

console.log("e = " + _mathplusplus.e);
console.log("e^π = " + (0, _mathplusplus2.default)(_mathplusplus.pi));
// e^π = 23.14070064895278