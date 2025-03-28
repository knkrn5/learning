//funciton declaration vs function expression

//hoisting in funcitons
function a(a, b) {   // Function `a` is defined
    return a + b;     // This should return the sum of the two arguments
    function b(a, b) {  // Function `b` is defined INSIDE `a`
        console.log((a + b) - 72)
        return (a + b) - 72
    }
}
const res = a(1, 9);
console.log(res); //1funtion b(a, b) .... complete b funciton is added to "a".

//-------------------------

//higher order funcitons
funtion a(fn){
    console.log("hello")
    fn()
}

funtion b(){
    console.log("this si function b")
}


a(b) //passed the function as an argument

a(() => {  //wrote the function code directly as an argument
    console.log("this si function b")
})



//curry functions=============================
function multiply(a, b, c) {
    return a * b * c;
}

// Curried version
function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
//  The main logic doesn't execute until all parameters have been provided through the chain of function calls.
console.log(curriedMultiply(2)(3)(4));

//-------------------------------
function outerFunction(a) {
    return (function innerFunction(b) {
        console.log(a + b);  // Now `a` correctly refers to the outer function parameter
        return "hii";
    })(10); // Pass a value for `b`
}
console.log(outerFunction(5));



//parameter dependence
function curriedAdd(a) {
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
console.log(result)


//indefinte curry functions
function infiniteCurry(a) {  // suppose: a = 5
    return function (b) {  // suppose: a = 10
        if (b !== undefined) {
            return infiniteCurry(a + b);  // this will indefinitely call  "infiniteCurry(15)" like this, untill contidion is false
        }
        return a;
    };
}
console.log(infiniteCurry(5)(10)(3)(1)(0)());


//advance level==========================
/* function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (nextArg) {
                return curried.apply(this, args.concat(nextArg));
            };
        }
    };
} */

//---------------------------------------
//closure and lexical scoping 
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log('Current error:', count);
        return count;
    };
}
const counter = createCounter();
counter(); //this will call the inner function and not the outer function


//------------------------------
//function/callback chaining == Nested callbacks or callback nesting
function fn1(a, b) {
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

const result2 = fn1(1, 9);
console.log(result2);

//----------------------------------------



//anonymous functions
Response => {  //if only one parameter
    console.log(Response);
}

(Response) => {
    console.log(Response);
}


setTimeout(resolve, ms);  === setTimeout(() => resolve(), ms);

