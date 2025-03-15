//All the array methods that return the new array implicitly create the array and assign it to the variable

//using return with, array methods that returns new array
var arr = [1, 2, 3]
const arr2 = arr.map(item => {
    const arr3 = []
    arr3.push(item)
    return arr3
})
console.log(arr2) //output: [ [ 1 ], [ 2 ], [ 3 ] ]


//return with  boolean with filter method
/**  When using .filter(), the callback 
function decides which elements stay 
in the new array based on whether it returns 
true or false. */

//nested array
currentPostCategories.some(currentPostCategory =>
    postCategories.some(category => category.toLowerCase() === currentPostCategory.toLowerCase())
);

//how JavaScript treats arrays of strings vs. arrays with a single string containing commas
const arr = ["hii", "hey me", "nice you"]
const arr = ['finance insights, technical analysis']

arr.forEach(item => {
    console.log(item)
})

//-----------------------------