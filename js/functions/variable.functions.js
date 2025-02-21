// var, let and const

// var




// let





// const

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

// ------------------------------------------------------