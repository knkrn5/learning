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

//--------------------------------------
const fn = (obj) => {
    obj.age = 30;  // Modifies the original object
}

let person = { age: 22 };
fn(person);

console.log(person.age); // Output: 30 (original object modified)

