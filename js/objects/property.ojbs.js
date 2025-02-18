//1
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}


const user2 = {
    user.age = 24
}

//2
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}

user.age = 24
user.mark = 90


//3
const user = {
    name: "karan",
    age: 22,
    email: "mail@karan.email",
}


const user2 = {
    ...user,
    age: 24
}