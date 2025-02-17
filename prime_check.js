"use struct";
const ps = require("prompt-sync");
const prompt = ps()

let n = prompt("Enter the number to be checked: ");
let prime = 1;
for (let i = 2; i <= n/2; i++) {
    if(n%i == 0) {prime = 0;}
}
if (prime==0) {
    console.log("Not a prime number!");
} else {
    console.log("This is a prime number!"); 
}