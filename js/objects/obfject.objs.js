
//deep vs shallow copy

/** In JavaScript, object keys must be strings or symbols. so js converts every datatype to string before using it as a key or obj property **********/ 
a ={
    name: "karan",
    age: 12
}
//number
let marks = 25
a[marks] = marks 
console.log(a)// output: { '25': 25, name: 'karan', age: 12 }
a["marks"] = marks
//array
var arr = [1, 2, 3] //output: { name: 'karan', age: 12, '1,2,3': [ 1, 2, 3 ] }
a[arr] = arr
console.log(a)


// In JavaScript, when you use an object or any datatype like a string as a key in another object, it gets implicitly converted to a string
const a = {};
const b = {
    name: 'tilak'
};
const c = {
    name: 'ram'
};

a[b] = {
    name: 'ankit'
};

a[c] = {
    name: 'rahul'
};

console.log(a[b]);  // { name: 'rahul' }

//---------------------------------------------------



//memory location
const user1 = {
    firstName: 'Anurag',
    lastName: 'Singh',
};

user1 = ({ age: 20 });  //error - const using 

const user2 = user1;

// ---------------------------------------------
let user1 = {
    firstName: 'Anurag',
    lastName: 'Singh',
};

user1 = { age: 20 }; //properties overwritten

console.log(user1);

//--------------------------------------------
cosnt user = {
    name: "karan"
}

console.log(user === { name: "karan" })
console.log(JSON.stringify(user) === JSON.stringify({ name: "karan" })); // true  a deep equality check,

const user2 = user;
console.log(user === user2); // true

//--------------------------------------------------






