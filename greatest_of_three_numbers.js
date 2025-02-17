"use struct";
const ps = require("prompt-sync");
const prompt = ps();

let a = Number(prompt("Enter the first number: "))
let b = Number(prompt("Enter the second number: "))
let c = Number(prompt("Enter the third number: "))
console.log("The greatest number is:",((a>b)?((a>c)?a:c):((b>c)?b:c)))