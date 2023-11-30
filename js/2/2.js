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