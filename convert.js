"use struct";
const ps = require("prompt-sync");
const prompt = ps();

let run = true;
while (run) { 
console.log(`What would you like to do?
1 = convert km to miles
2 = convert miles to km
3 = convert centigrade to farenheight
4 = convert farenheight to centigrade
5 = quit `);
input = Number(prompt("Your Answer: "));
switch (input) {
    case 1: 
        let km = prompt("Enter the distance in Kilometers: ");
        console.log("The distance in miles is: ",0.621*km);
        break;
    case 2:
        let miles = prompt("Enter the distance in miles: ");
        console.log("The distance in kilometers is: ",1.609*miles);
        break;
    case 3: 
        let centigrate = prompt("Enter the temperature in farenheight: ")
        console.log("The temperature in farenheight is: ",((centigrate*9/5)+32));
        break;
    case 4:
        let farenheight = prompt("Enter the temperature in centigrade: ");
        console.log("The temperature in centigrade is: ",((farenheight - 32)*5/9));
        break;
    case 5:
        run = false;
        break;

    default: console.log("Please enter a number from the choices made available to you!");
        break;
}
}