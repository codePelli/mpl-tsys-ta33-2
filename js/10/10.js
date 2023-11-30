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