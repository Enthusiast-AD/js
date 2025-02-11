function one(){
    const username = "ansh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    
    // two()
}

// one()

if(true){
    const username = "Ansh"
    if(username === "Ansh"){
        const website = " Youtube"
        // console.log(username+website)
    }
    // console.log(website);
    
}

// console.log(username)


// interesting 


console.log(addone(5)) // works fine

function addone(num){
    return num+1
}


console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
