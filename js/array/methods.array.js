
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
const arr = ["hey you",]
const arr2 = ['finance insights, technical analysis, hey you']

arr.some(currentCat =>
    arr2.some(postCat => postCat.includes(currentCat))
);
//vs
const arr = ["hey you",]
const arr2 = ['finance insights, technical analysis, hey you']

arr2.some(currentCat =>
    arr.some(postCat => postCat.includes(currentCat))
);
//vs
const arr = ["hey you, finance insights, technical analysis"]
const arr2 = ['finance insights, technical analysis, hey you']

arr2.some(currentCat =>
    arr.some(postCat => postCat.includes(currentCat))
);

//-----------------------------------
const arr = ["hii", "hey me", "nice you"]
const arr = ['finance insights, technical analysis']
arr.push('test')
console.log(arr) //output: ['finance insights, technical analysis', 'test']

//--------------------------