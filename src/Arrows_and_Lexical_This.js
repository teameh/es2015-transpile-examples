console.log('----- Arrows_and_Lexical_This.js -----');

var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Expression bodies
var odds = evens.map(v => v + 1);
console.log(odds);
// [ 3, 5, 7, 9, 11, 13, 15, 17, 19, 21 ]

var nums = evens.map((v, i) => v + i);
console.log(nums);
// [ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29 ]

// Statement bodies
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0){
    fives.push(v);
  }
});
console.log(fives);
// [ 5, 20 ]

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ['Hank, Fred, Tom'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
bob.printFriends();
// Bob knows Hank, Fred, Tom
