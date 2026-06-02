// Checking if a number is greater than another number :

const { log } = require("console")

let num1 = 5
let num2 = 8
console.log("Im a regular uper code");

if(num1 > num2) {
     console.log("num1 is greater then num2");   
}
// if (num1==num2){
//      console.log("Yes BOth Is Same");
     
//    }
else{
    console.log("num1 is not greater than num2");
    
}
console.log('I am regular bottem code');

// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
  //   console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

//Checking if a variable is a number or not:

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

//Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
    console.log("Tea is NOT ready");
}

// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
