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