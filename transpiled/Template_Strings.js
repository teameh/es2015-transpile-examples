"use strict";

var _templateObject = _taggedTemplateLiteral(["In ES5 \"\n\" is a line-feed."], ["In ES5 \"\\n\" is a line-feed."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

console.log('----- Template_Strings.js -----');

// Basic literal string creation
"This is a pretty little template string.";

// Multiline strings
var template = "In ES5 this is\n not legal.";

// Interpolate variable bindings
var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

// Unescaped template strings
String.raw(_templateObject);

var a = "A",
    b = "B",
    credentials = "My Credentials",
    foo = "FOO",
    bar = "BAR";

console.log("http://foo.org/bar?a=" + a + "&b=" + b + "\n    Content-Type: application/json\n    X-Credentials: " + credentials + "\n    { \"foo\": " + foo + ",\n      \"bar\": " + bar + "}");