//obj property access 

const user = {
    name: "Karan",
    age: 22,
    email: "mail@karan.email",
};

console.log(user.age);
console.log(user["email"]);


//--------------------------------
let obj = {
    name: "karan",
}

obj = { name: "don" }




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

user = {
    ...user,
    age: 24
}

//2
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}

user.age = 24
user.mark = 90
user[mark] = 90 //throw error 
user["mark"] = 90 //this will add the mark property


//----------- 
// so if we want to updatet eh obj proprety usign [] we need to access property as string like with dot operator directly, and ,
const buttonStates = {
    "module123": "Initial State",
    "module456": "Active"
};

buttonStates["module123"] = "Read Later"; // Overwriting the value
console.log(buttonStates);
//  if you're using a variable as a key, you don't need quotes
const module123 = "module123";
buttonStates[module123] = "Read Later"; // Overwriting the value
console.log(buttonStates);
//vs
let buttonStates = {
    module123: "Initial State",
    module456: "Active"
};
buttonStates["module123"] = "hello"; // Overwriting the value
buttonStates[module123] = "hello"; // throw error
console.log(buttonStates);


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

//--------------------------------------------------
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
    address: {
        city: "delhi",
        state: "delhi"
    },
    fn: function () {
        console.log("fn inside object as property")
    }
}

//-----------------------------------------
//dynamic property
const key = "dynamicKey";
const obj = {
    [key]: "This is a dynamic property",
};
console.log(obj.dynamicKey); // Output: This is a dynamic property


const obj = {};
obj["newProperty"] = "Dynamic value";
console.log(obj.newProperty); // Output: Dynamic value




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


//--------------------------------------
//json vs js obj
invert comma keys



