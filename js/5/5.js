////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5
let decimalNumber = prompt("Enter a decimal number:");

function decimalToBinary(number) {

    return number.toString(2);
}

const binaryResult = decimalToBinary(parseInt(decimalNumber));

console.log("-- Exercise 6 --");
console.log("The decimal number " + decimalNumber + " in binary is: " + binaryResult);