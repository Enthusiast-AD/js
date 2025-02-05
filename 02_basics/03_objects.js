// singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const user  = {
    name: "Ansh",
    "full name": "Ansh Deep", 
    [mySym]:"myKey1",
    age: 19,
    location: "Delhi",
    email: "ansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);


user.email = "ansh@newemail.com"
// Object.freeze(user)
user.email = "ansh@microsoft.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello JS user")
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())