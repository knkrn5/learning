//nested array
const nestedArray = [1, 2, [3, 4, [5, 6]]];

var arr = [1, 2, 3, 1, 9, 15, 2 , 0]

for (let i in arr ){
    console.log(i[i])
}
//vs
for (let i in arr) {
    console.log(arr[i]); 
}

//---------------------