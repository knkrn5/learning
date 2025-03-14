//---------------------------------
const fntest = function fnName(){
    console.log("const with funciton name")
    return fnName
}
console.log(fntest)
const fn3 = fntest()
console.log(fn3)
//VS
const fntest2 = function fnName(){
    console.log("const with funciton name")
    return fnName()//infinite loop recurrsive 
}
console.log(fntest2()) 
console.log(fntest2)

//***************************************** */


//reference
const fn = function fnName(){
    console.log("output")
}
console.log(fn) //output [function: fnName]
//this is equal to above code, retuning nothing 
const fn = function fnName(){
    console.log("output")
    return
}
console.log(fn())
console.log(fn)
//vs
const fn = function fnName(){
    console.log("output")
    return fnName
}
console.log(fn) //output [function: fnName]
//vs
const fn = function fnName(){
    console.log("output")
    return fnName()
}
console.log(fn())
console.log(fn)

//----------------------------------
//without fn name
const fn2 = function(){
    console.log("ouput")
}
console.log(fn2())
console.log(fn2) //output [function: fn2]
//vs
const fn2 = function(){
    console.log("output")
    return "hiiii"
}
console.log(fn2())
console.log(fn2)


//***************************************** */
