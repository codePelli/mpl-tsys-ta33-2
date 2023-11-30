////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1
let figure = prompt("Choose: circle, triangle, square.")

function area(figure) {

    switch (figure) {

        case "circle":

            let radius = prompt("Radius of the circle:");

            return areaCircle(parseFloat(radius));

        case "triangle":

            let base = prompt("Base of the triagle:");
            let height = prompt("Height of the triangle:");

            return areaTriangle(parseFloat(base), parseFloat(height));

        case "square":

            let side = prompt("Introduce el lado del cuadrado:");

            return calcularAreaCuadrado(parseFloat(side));
    }

    function areaCircle(radius) {

        return Math.PI * Math.pow(radius, 2);
    }

    console.log("-- EJERCICIO 1 --");
    console.log("Circle area: " + area("circle"));
    
    function areaTriangle(base, height) {

        return (base * height) / 2;
    }

    console.log("-- EJERCICIO 1 --");
    console.log("Triangle area: " + area("triangle"));

    
    function calcularAreaCuadrado(side) {

        return Math.pow(side, 2);
    }

    console.log("-- EJERCICIO 1 --");
    console.log("Square area: " + area("square"));

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
function randomNumber(min, max) {

    return (Math.random() * (max - min + 1)) + min;
}
let set = prompt("Amount of random numbers: ");
let minn = prompt("Min value: ");
let maxx = prompt("Max value: ");

for (let x = 0; x < set; x++) {

    console.log("-- EJERCICIO 2 --");
    console.log("Random number: " + randomNumber(parseInt(minn), parseInt(maxx)));
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3
function pair(number) {

    for (let x = 2; x < number; x++) {

        if (number % x === 0) return false;

    }

    return true;
}

let isPair = prompt("Insert a number to verify if its pair or not: ");

console.log("-- EJERCICIO 3 --");
console.log("Is pair: " + pair(isPair));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4
let promptFactorial = prompt("Insert a value: ");

function factorial(numero) {

    let factorial = 1;

    for (let x = 1; x <= numero; x++) {

        factorial = factorial * x;
    }

    return factorial;
}

const resultFactorial = factorial(parseInt(promptFactorial));

console.log("-- EJERCICIO 4 --");
console.log("El factorial de " + promptFactorial + " es: " + resultFactorial);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5
// 6
let decimalNumber = prompt("Enter a decimal number:");

function decimalToBinary(number) {

    return number.toString(2);
}

const binaryResult = decimalToBinary(parseInt(decimalNumber));

console.log("-- Exercise 6 --");
console.log("The decimal number " + decimalNumber + " in binary is: " + binaryResult);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6
let numberDigits = prompt("Enter a positive integer:");

function countDigits(number) {

    return number.toString().length;
}

let resultDigits = countDigits(parseInt(numberDigits));

console.log("-- Exercise 6 --");
console.log("The number of digits in " + numberDigits + " is: " + resultDigits);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7
let promptEuro = prompt("Amount in euros:");
let targetCurrency = prompt("Desired currency in pounds,dollars or yen:");

function convertCurrency(amountEuros, currency) {

    switch (currency.toLowerCase()) {

        case "pounds":

            console.log("-- Exercise 7 --");
            console.log(amountEuros + " euros is " + amountEuros * 0.86 + " pounds.");
            break;

        case "dollars":

            console.log("-- Exercise 7 --");
            console.log(amountEuros + " euros is " + amountEuros * 1.28611 + " dollars.");
            break;

        case "yen":

            console.log("-- Exercise 7 --");
            console.log(amountEuros + " euros is " + amountEuros * 129.852 + " yen.");
            break;
    }
}

convertCurrency(parseFloat(promptEuro), targetCurrency);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8
let arraySize = prompt("Enter the size of the array:");
let randomArray = [];

function fillArray(min, max) {

    for (let x = 0; x < arraySize; x++) {

        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

function displayArrayAndSum(array) {

    console.log("-- Exercise 8 --");
    console.log("Content of the array: " + array.join(", "));
    console.log("Sum of the array: " + array.reduce((acc, curr) => acc + curr, 0));
}

fillArray(0, 9);
displayArrayAndSum(randomArray);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10

let primosArraySize = prompt("Size of the array:");
let primosArray = [];

function isPrimo(number) {

    for (let x = 2; x < number; x++) {

        if (number % x === 0) return false;
    }
    return number > 1;
}

function fillPrimosArray() {

    let number = 1;

    while (primosArray.length < primosArraySize) {

        if (isPrimo(number)) {

            primosArray.push(number);
        }
        number++;
    }
}

fillPrimosArray();

console.log("-- Exercise 10 --");
console.log("Array of prime numbers: " + primosArray.join(", "));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//11

let array1 = [];
let array2 = [];
let multiplicationResult = multiplyArrays(array1, array2);
let arraysSize = prompt("Size of the arrays:");

function multiplyArrays(array1, array2) {

    let result = [];

    for (let x = 0; x < arraysSize; x++) {

        result.push(array1[x] * array2[x]);
    }

    return result;
}

function displayMultiplicationResult(resultArray) {

    console.log("-- Exercise 11 --");
    console.log("Result of the array: " + resultArray.join(", "));
}

function fillArrays() {

    for (let x = 0; x < arraysSize; x++) {

        array1.push(Math.floor(Math.random() * 300) + 1);
        array2.push(Math.floor(Math.random() * 300) + 1);
    }
}

fillArrays();
displayMultiplicationResult(multiplicationResult);

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
