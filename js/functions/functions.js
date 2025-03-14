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

