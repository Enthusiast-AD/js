
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ",result);


function logInUserMesage(username="sam"){
    if(!username){ // same as username === undefined 
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMesage("Ansh"))
console.log(logInUserMesage())  // undefined -> if there is no default value in the function
console.log(logInUserMesage("ansh"))  // overides the pre-defined value of the username 