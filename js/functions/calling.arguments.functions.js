// arguments 

function sum(a,b){
    return a + b
}

sum(1, 2, 3, 4)


//function calling

function xyz(){
    console.log("test")
}

function abc(){
  return  console.log("test")
}

const x = xyz
const y = xyz() 
const z = abc()
