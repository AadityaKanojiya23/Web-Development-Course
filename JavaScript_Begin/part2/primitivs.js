// Numbers 

let num1 = "aditya"  
console.log(num1);
console.log(typeof num1);   /// output string 

let num2 = 120  
console.log(num2);
console.log(typeof num2);  // output number 

let anotherNum1 = new Number(120)
console.log(anotherNum1);  // output [Number: 120]
console.log(anotherNum1.valueOf());  /// output is 120 only 
console.log(typeof anotherNum1);  // output Object 

// Null And Undefined 

let firstname
console.log(firstname);  // output undefined 

let firstnamee = null 
let lastname = undefined 
console.log(firstnamee);
console.log(lastname); // output null undefined 

let myString = "Hello"
let myStringOne = 'Hello'
let username = "Aaditya"

// old greed way 
let oldgreed = myString + username
console.log(oldgreed);  // output HelloAaditya in this case same in not added to resolve this 

// new greed way 
let newgreed = `${myString} ${username} !`
let hellomaths = `Value is ${2*4}`
console.log(hellomaths);
console.log(newgreed);  // output is Hello Aaditya !

 




