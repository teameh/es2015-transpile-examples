console.log('----- Template_Strings.js -----');

// Basic literal string creation
`This is a pretty little template string.`

// Multiline strings
var template = `In ES5 this is
 not legal.`

// Interpolate variable bindings
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

var a = "A", b = "B", credentials = "My Credentials", foo = "FOO", bar = "BAR";

console.log(`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`);
