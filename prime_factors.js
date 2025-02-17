"use struct";
const ps = require("prompt-sync");
const prompt = ps()

let number_of_prime_factors = 0;
let n = prompt("Enter the number whose prime factors are to be printed: ");
for (let  i = 2; i <= n/2; i++) {
    if (n%i == 0) {
        console.log(i);
        number_of_prime_factors++;
    }
}
if (number_of_prime_factors == 0) {
    console.log("This is a Prime Number! It has only two factors: 1 and ",n);
} else {
    console.log("The number of different prime factors are: ",number_of_prime_factors);
}
