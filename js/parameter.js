  //parameter learning
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