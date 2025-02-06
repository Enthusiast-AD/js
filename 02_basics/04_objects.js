// const tinderUser = new Object() //singleton object 

const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser  = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Ansh",
            lastName: "Deep"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {
    1:"a",2: "b"
}
const obj2 = {
    3:"c",4:"d"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2} // mostly used 

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email

// console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // less used

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

