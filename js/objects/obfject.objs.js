
//deep vs shallow copy

// In JavaScript, object keys must be strings or symbols.
// When you use an object as a key, JavaScript automatically converts it to a string.
// In JavaScript, when you use an object as a key in another object, it gets implicitly converted to a string
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






