//Hoisting = accessing variables before they are declared
// var, let and const

// var
var a = "hey"
a = 2
let a = "hello"
const a = "nice"
let a = 2

if (age > 18) {
    var age = 20;     // (1) ✅ Allowed (var can be redeclared)
    const age = 20;   // (2) ❌ Error: 'age' has already been declared
} else if (age === 18) {  
    var age = 18;     // (4) ✅ Allowed but problematic with 'let' below
    let age = 18;     // (5) ❌ Error: Redeclaration of 'age' in the same block
} else {
    var age = 15;     // (6) ✅ Allowed
    var age = 13;     // (7) ✅ Allowed (var allows redeclaration)
}


var fn = 52
var fn = function () {
    console.log("hello")
}


// ====================

// let
let b = 2
b++
let b = 6
const b = 5
var b  ="hello"

if(age > 18){
    let age = 20
}else{
    let age = 18
    var age = 18
}

//=================================
// const
const c = 2
++c     //behind the sence 
const c = "hey"
let c = "hello"
var c = "nice"

if(age > 18){
    const age = 20
}else{
    const age = 18
    var age = 18
    let age = 18
}


//==============================================
const  a = 2
let b=5
b = b + a 
a = b -a
b = b - a
console.log(a,b)






// ==================================================

/* Key Rules:
+ operator does string concatenation if ANY operand is string
-, *, / operators convert strings to numbers
Operations are evaluated left to right for equal precedence
Type coercion happens at each step */

// ---------------------------------------------

// === Examples (Strict)
5 === 5        // true (same value and type)
5 === '5'      // false (different types)
null === undefined  // false
[] === []      // false (different objects)

// == Examples (Loose) (== performs automatic type coercion) 
5 == '5'       // true (string '5' is converted to number 5)
0 == false     // true (false is converted to 0)
null == undefined  // true
[] == false    // true (both are converted to 0)

// Boolean converts to number first
true == 1     // true (true → 1)
false == 0    // true (false → 0)
true == "1"   // true (true → 1, then "1" → 1)

value == null; /* Checks if value is either null or undefined. */
// The double equals == works for both null and undefined

(5 != '5'); // false (because '5' is converted to 5)
(null != undefined); // false (they are considered equal in loose comparison)
(0 != false); // false (false is converted to 
(5 !== '5'); // true (number vs string, no coercion)
(null !== undefined); // true (different types)
(0 !== false); // true (number vs boolean)


// ------------------------------------------------------

data?.data = {} → ✅ Runs(because empty objects are truthy)
data?.data = [] → ✅ Runs(empty arrays are truthy too)
data?.data = "" → ❌ Doesn’t run(empty string is falsy)

// -------------------------------------------------------------