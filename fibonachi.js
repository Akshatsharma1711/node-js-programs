"use struct";
const ps = require("prompt-sync");
const prompt = ps();

const fibonachi = (n) =>{
    if(n==1)
    return 0;
    else if (n==2)
    return 1;
    else if(n>2)
    return (fibonachi(n-1)+fibonachi(n-2));
}

n = prompt("Enter a number: ");
for (let i = 1; i <= n; i++) {
    console.log(fibonachi(i));
}