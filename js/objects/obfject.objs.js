
//deep vs shallow copy

//memory location
const user1 = {
    firstName: 'Anurag',
    lastName: 'Singh',
};

user1 = ({ age: 20});  //error - const using 

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

console.log(user === {name: "karan"})
console.log(JSON.stringify(user) === JSON.stringify({ name: "karan" })); // true  a deep equality check,

const user2 = user;
console.log(user === user2); // true

//--------------------------------------------------






