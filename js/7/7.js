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