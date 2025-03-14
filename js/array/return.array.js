//All the array methods that return the new array implicitly create the array and assign it to the variable

//using return with, array methods that returns new array
var arr = [1, 2, 3]
const arr2 = arr.map(item => {
    const arr3 = []
    arr3.push(item)
    return arr3
})
console.log(arr2) //output: [ [ 1 ], [ 2 ], [ 3 ] ]
