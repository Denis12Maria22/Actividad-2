//realiza un programa que sume los numeros del 1 al 100 usando do while

let sum = 0;
let con = 1;
do {
  sum += con;
  con++; // Incrementa con en cada iteración
} while (con <= 100);

console.log("La suma de los números del 1 al 100 es: " + sum);