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
