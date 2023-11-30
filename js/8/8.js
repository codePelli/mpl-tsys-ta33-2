////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8
// 8
let numbersArray = [];

function fillArray() {

    for (let x = 0; x < 10; x++) {

        numbersArray.push(prompt("Enter value for position " + (x + 1) + ":"));
    }
}

function displayArray() {

    console.log("-- Exercise 8 --");

    for (let x = 0; x < numbersArray.length; x++) {
        
        console.log("Index " + x + " - Value: " + numbersArray[x]);
    }
}

fillArray();
displayArray();
