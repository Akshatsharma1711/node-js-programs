"use struct";
const ps = require("prompt-sync");
const prompt = ps();
a = {};
n = prompt("How many words would you like to enter? ");
for (let i = 0; i < n; i++) {
    key = prompt("Enter the word whose meaning is to be Added to the dictionary: ");
    value = prompt("Enter the meaning of the above word: ");
    a[key] = value;
}

console.log("The Dictionary is as follows-->\n",a);