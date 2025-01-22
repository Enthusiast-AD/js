// Dates 

let myDate = new Date()
// console.log(myDate) // 2025-01-22T12:51:18.234Z
// console.log(myDate.toString()) //Wed Jan 22 2025 12:51:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Wed Jan 22 2025
// console.log(myDate.toISOString()) //2025-01-22T12:55:02.060Z
// console.log(myDate.toJSON()) //2025-01-22T12:55:02.060Z
// console.log(myDate.toLocaleString()) //1/22/2025, 12:55:02 PM
// console.log(myDate.toTimeString()) //12:55:02 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString()) //12:55:02 PM
// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,21,5,3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString())

 let myTimeStamp = Date.now() // -> gives the time in ms

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) -> converts ms to seconds 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)  // -> Months starts from zero in js
console.log(newDate.getDay())  

newDate.toLocaleString('default',{
    weekday: "long",
})