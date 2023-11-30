
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
