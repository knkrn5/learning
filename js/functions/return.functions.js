// return in arrow functions, it has implicit return ()
const obj = () => ({
    key: "data"
  });
  
  const arr = () => {
    return [
      "user", "data"
    ];
  }
  
  const arr2 = (vars) => ([
    "user", "data"
  ]);
  
  
  const arr3 = () => ["user", "data"];
  
  const obj2 = () => {
    key: "data"
  };
  
  
  const str = () => {
    return "data"
  };

  
  const obj3 = () => {
    return {
      key: "data"
    }
  };

  
  const obj3 = () => {
    return {
      user: {
        key: "data",
        username: "karan",
        age: 22
      }
    }
  };
  
  const arr4 = () => {
    return ["a", "b"]
  };

  
// return in normal functions, // doesn't have implicit return

  function obj4() {
    return {
      key: "data"
    }
  }
  
  
  function obj5() {
    return [
      "user", "data"
    ];
  }
  function arr5() {
    return [
      "user", "data"
    ];
  }
  
  
  function({ name: karan }) {
    console.log("test")
  }
  

//return with parameter 
function user(username, age, emal) {
    return (username, age, email)
}
  
function user(username, age, email) {
    return {username, age, email}
}
  
//-------------------------------
let result = (1, 2, 3);
console.log(result); // Output: 3

//=================================

let result = {1, 2, 3};
console.log(result);    

let result = { a: 1, b: 2, c: 3 };
console.log(result); // { a: 1, b: 2, c: 3 }



let result = [1, 2, 3]; 
console.log(result);

//==============================
/* how comma work in js  */

function test(a, b, c){
  return (a, b, c);
}

//-----------------------

function test(a, b, c) {
 return [a, b, c];
}
console.log(test(1, 2, 3)); // [1, 2, 3]

//------------

function test(a, b, c) {
 return { a, b, c };
}
const { a, b, c } = test(1, 2, 3);
console.log(a, b, c); // 1 2 3

//======================================
if(age < 18) {
  return console.log("sorry you are too young"); //return undefined
}


if(age < 18) {
 console.log("sorry you are too young");
 return  //exit
}






