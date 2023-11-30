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