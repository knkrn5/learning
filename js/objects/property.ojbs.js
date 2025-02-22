//obj property access 

const user = {
    name: "Karan",
    age: 22,
    email: "mail@karan.email",
};

console.log(user.age);
console.log(user["email"]);




//obj property assignment or creation

//1
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}

user.marks = 90;
user[gender] = "male" //throw error [] can only be used to acess 


const user2 = {
    user.age = 24
}

//2
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}

user.age = 24
user.mark = 90


//3
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}


const user2 = {
    ...user,
    age: 24
}


// ------------------------------------------------------------
const name = "email";

// SETTING properties
const obj1 = {
    [name]: ''    // Creates { email: '' }
}

const obj2 = {
    name: ''      // Creates { name: '' }
}

// ACCESSING properties
obj1[name]      // Returns ''
obj1.email      // Returns ''
obj2[name]      // Returns undefined
obj2.name       // Returns ''


// -------------------------------------------------
//prettier-ignore
/* The square brackets in the object literal[variable] tell JavaScript 
to use the VALUE of the name variable as the property name,
    rather than literally using "name" as the property name. */

const variable = "age";

const obj = {
    [variable]: 24
}



