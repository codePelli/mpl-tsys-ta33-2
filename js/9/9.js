// 9
let arraySize = prompt("Enter the size of the array:");
let randomArray = [];

function fillArray() {

    for (let x = 0; x < arraySize; x++) {

        randomArray.push(Math.floor(Math.random() * 10));
    }
}

function displayArrayAndSum() {

    console.log("-- Exercise 9 --");
    console.log("Array: " + randomArray.join(", "));
    console.log("Sum: " + randomArray.reduce((acc, curr) => acc + curr, 0));
}

fillArray();
displayArrayAndSum();
