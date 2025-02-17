"use struct";
const ps = require("prompt-sync");
const prompt = ps();

let n1 = Number(prompt("Enter the value of number 1: "));
// a = Number.parseInt(a)  // This is also a type of typecasting
let n2 = Number(prompt("Enter the value of number 2: "));
let operation = Number(prompt("Enter one of the following operations 1=add 2= sub 3=multi 4=div --> "));
console.log("Output-->")

// using if else ladder
if (operation == 1) {
    console.log(n1+n2)
} else if (operation == 2) {
    console.log(n1-n2)
} else if (operation == 3) {
    console.log(n1*n2)
} else if (operation == 4) {
    console.log(n1/n2)
} else {
    console.log("Please enter a number from the available choices");
}

//using switch
switch (operation) {
    case 1:
        console.log(n1+n2);
        break;
    case 2:
        console.log(n1-n2);
        break;
    case 3:
        console.log(n1*n2);
        break;
    case 4:
        console.log(n1/n2);
        break;
    default:
        console.log("Please enter a number from the available choices");
        break;
}