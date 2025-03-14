/* function add(a, b, c) {
    return a + b + c
}
 console.log(add(1, 2, 3))  */

// Curried version
/* function curriedAdd(a) {
    return function (b) {
        function sum (c) {
            return a + b + c;
        }
    }
}

//  The main logic doesn't execute all parameters have been provided through the chain of function calls.
const result = curriedAdd(1)(6);
console.log(result) */


/* function curriedAdd(a) {
    console.log(a)
    return function (b) {
        console.log(a + b)
        return function (c) {
            console.log(a + b + c)
            return a + b + c;
        }
    }
}

const result = curriedAdd(1)(6)(5);
console.log(result) */

//-------------------------------

/* function a(a, b) {
    return a + b
}

const result2 = a(1, 2)

function b(result) {
 console.log(result - 72)
}

b(result2) */

//-------------------------------

/* function fn1(a, b) {
    const res1 = a + b;

    function sum(res1, req = 72) {
        const res2 = res1 + req;

        function sub(res2, subres = 22) {
            return res2 - subres;
        }

        return sub(res2); // Call sub and return its result
    }

    return sum(res1); // Call sum and return its result
}

const result = fn1(1, 9);
console.log(result); */

/* const fn2 = function(){
    console.log("ouput")
    return "hiiii"
}
console.log(fn2())
console.log(fn2) */


/* const fn = function (){
    console.log("output")
    return fn()
}

console.log(fn())
 */



a ={
    name: "karan",
    age: 12
}



var arr = [1, 2, 3]
a[arr] = arr

console.log(a)
