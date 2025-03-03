/****  confusion between return the function name and object name ****/

//----------------------------------
const fn = (data) =>{
    console.log(data)
}

const obj = {    
    name: "karan",
    age: 22,
    marks: 90,
    gender: "male",
}

fn(obj)

const str = "karan";
fn(str)

//---------------------
objfn = (obj) => {
    name = "karan";
    age: 21;
    marks: 90;
}

//--------------------------------------
const fn = (obj) => {
    obj.age = 30;  // Modifies the original object
}

let person = { age: 22 };
fn(person);

console.log(person.age); // Output: 30 (original object modified)


//----------------------------------------
/**  we can only assign the value that is being defined **/

const objfn = (obj) => {
    name = username;  // ❌ Undefined variable 'username'
    age = age;        // ❌ This does nothing, it's just assigning the same value
    marks = marks;    // ❌ Same issue as 'age'
    gender;           // ❌ Undefined variable 'gender'
}

obj1 = {
    age: 21,
    marks: 90,
}

objfn(obj1)

//------------------------

const objfn = (obj) => {
    name = username;
    age = age
    marks =  marks
    return obj;
}

obj1 = {
    age: 21,
    marks: 90,
}

objfn(obj1)