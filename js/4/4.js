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