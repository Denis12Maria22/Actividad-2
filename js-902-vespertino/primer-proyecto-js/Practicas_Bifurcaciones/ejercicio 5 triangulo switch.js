//ejercicio 5 triangulo switch
let N1 = 5;
let N2 = 5;
let N3 = 5;

switch (true) {
    case (N1 === N2 && N2 === N3):
        console.log("El triángulo es equilátero");
        break;
    case (N1 === N2 || N1 === N3 || N2 === N3):
        console.log("El triángulo es isósceles");
        break;
    default:
        console.log("El triángulo es escaleno");
        break;
}