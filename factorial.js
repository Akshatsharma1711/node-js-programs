"use struct";

const ps = require("prompt-sync");
const prompt = ps();

const factorial_recursive =(n)=> {
    if (n>1)
    return n*factorial_recursive(n-1) ;
    else if (n==1)
    return 1;
    else 
    return -1;
}

function factorial_non_recursive(n){
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product = i*product;
    }
    return product;
}

let n = prompt("Enter the number: ")
console.log("The factorial is: ")
console.log(factorial_non_recursive(n))
console.log(factorial_recursive(n))