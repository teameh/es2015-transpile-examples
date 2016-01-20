"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _math = require("./math");

var _loop = function _loop(_key2) {
    if (_key2 === "default") return "continue";
    Object.defineProperty(exports, _key2, {
        enumerable: true,
        get: function get() {
            return _math[_key2];
        }
    });
};

for (var _key2 in _math) {
    var _ret = _loop(_key2);

    if (_ret === "continue") continue;
}

exports.default = function (x) {
    return Math.exp(x);
};

var e = exports.e = 2.71828182846; // lib/mathplusplus.js