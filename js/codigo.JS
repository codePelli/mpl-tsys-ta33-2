//1
let figure = prompt("Choose: circle, triangle, square.")

function area(figure) {

    switch (figure) {

        case 'circle':
            let radius = prompt('Radius of the circle:');

            return areaCircle(parseFloat(radius));

        case 'triangle':

            let base = prompt('Base of the triagle:');
            let height = prompt('Height of the triangle:');

            return areaTriangle(parseFloat(base), parseFloat(height));

        case 'square':

            let side = prompt('Introduce el lado del cuadrado:');

            return calcularAreaCuadrado(parseFloat(side));
    }

    function areaCircle(radius) {

        return Math.PI * Math.pow(radius, 2);
    }

    console.log('Circle area: ' + area('circle'));
    
    function areaTriangle(base, height) {

        return (base * height) / 2;
    }

    console.log('Triangle area: ' + area('triangle'));

    
    function calcularAreaCuadrado(side) {

        return Math.pow(side, 2);
    }

    console.log('Square area: ' + area('square'));

}

//2
function randomNumber(min, max) {

    return (Math.random() * (max - min + 1)) + min;
}
let set = prompt('Amount of random numbers: ');
let minn = prompt('Min value: ');
let maxx = prompt('Max value: ');

for (let x = 0; i < set; x++) {

    console.log('Random number: ', randomNumber(parseInt(minn), parseInt(maxx)));
}

//3
function pair(number) {

    for (let x = 2; x < number; x++) {

        if (number % x === 0) return false;

    }

    return true;
}

let isPair = prompt('Insert a number to verify if its pair or not: ');

console.log('Is pair: ', pair(isPair));

