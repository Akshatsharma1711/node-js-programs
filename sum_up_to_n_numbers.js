"use struct";
const ps = require("prompt-sync");
const prompt = ps();

const sum_up_to_n_numbers_non_recursive = (n)=>{
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
return sum;
}
function sum_up_to_n_numbers_recursive(n){
    if(n>1)  {return (n+(sum_up_to_n_numbers_recursive(n-1)));}
    else if(n==1) {return 1;}
    else {return -1;}
}

let n = Number(prompt("Enter the value of n: "));
console.log("The sum is: ", sum_up_to_n_numbers_non_recursive(n));
console.log("The sum is: ", sum_up_to_n_numbers_recursive(n));