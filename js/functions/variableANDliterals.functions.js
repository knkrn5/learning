// var, let and const

// var
var a = "hey"
a = 2
 let a = "hello"

// ============

// let
 let b = 2
 b++
 var b = 3

 
 //============
// const
 const c = 2
 ++c
 let c = "hey"










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

// ------------------------------------------------------

data?.data = {} → ✅ Runs (because empty objects are truthy)
data?.data = [] → ✅ Runs (empty arrays are truthy too)
data?.data = "" → ❌ Doesn’t run (empty string is falsy)

// -------------------------------------------------------------