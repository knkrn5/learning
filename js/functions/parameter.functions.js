//parameter learning
// a Literals cannot be a parameter of a function
function myFunction(name, age, email) {
  console.log("");
}

function myFunction({ name }) {
  console.log(name);
}

function myFunction({ user: karan }) {
  console.log("");
}

function myFunction({ user: "karan "}) {
  console.log("");
}

function myFunction("karan") {
  console.log("");
}

function myFunction(55) {
  console.log("");
}

//------------------------

function test(() => {
  console.log("hey")
}) {
  console.log("hii")
}

function test(fn) {
  console.log("hii")
}

test(() => {
  console.log("hiii")
})

//---------------------------------------
// just for promise knowledge
const sleep = () => new Promise(((res, rej, next) => {
  res("hiii")   // Resolves the Promise
  rej("err")    // This will NEVER run after resolve() one method will only work at a time
  next("test")  // next is NOT a valid argument for Promise constructor
  console.log(res, rej, next)  // next is undefined
}));

//----------------------------------------------------