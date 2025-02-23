//higher order funcitons
funtion a(fn){
    console.log("hello")
    fn()
}

funtion b(){
    console.log("this si function b")
}

a(b) //passed the function as an argument

a(()=> {  //wrote the function directly
    console.log("this si function b")
})






//curry functions