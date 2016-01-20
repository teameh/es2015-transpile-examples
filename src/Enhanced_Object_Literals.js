console.log('----- Enhanced_Object_Literals.js -----');

var myPropery = 1.618

var obj = {
    myPropery,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ "prop_" + (() => 42)() ]: 42
};

console.log(obj.myPropery, obj.prop_42);
// 1.618, 42
