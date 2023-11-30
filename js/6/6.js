////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6
let numberDigits = prompt("Enter a positive integer:");

function countDigits(number) {

    return number.toString().length;
}

let resultDigits = countDigits(parseInt(numberDigits));

console.log("-- Exercise 6 --");
console.log("The number of digits in " + numberDigits + " is: " + resultDigits);