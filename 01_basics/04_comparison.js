// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1); //true -> automatically converts to number but sometimes it doesn't give preferred result
// console.log("02">1); //true

// avoid them -> clean code
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null==undefined); //true

// the reason is that the equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null>0 is true and (1) null > 0  is false
// For equality checks (==), null is only equal to null or undefined

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// === //it also comapre the datatypes 

console.log("2"==2); //true
console.log("2"===2); //false
