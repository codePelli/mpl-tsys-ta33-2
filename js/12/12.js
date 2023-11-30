////////////////////////////////////////////////////////////////////////////////////////////////////////////
//12
let arrSize = prompt("Enter the size of the array:");
let digit = prompt("Enter the specific digit:");

function filterBySpecificDigit(array, digit) {

    return array.filter(number => number % 10 === parseInt(digit));
}

let arrayTerminates = [];

for (let i = 0; i < arrSize; i++) {

    arrayTerminates.push(Math.floor(Math.random() * 300) + 1);
}

let filteredArray = filterBySpecificDigit(arrayTerminates, digit);

console.log("-- Exercise 12 --");
console.log("Array: " + filteredArray.join(", "));