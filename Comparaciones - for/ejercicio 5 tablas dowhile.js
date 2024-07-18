//realizar un programa que muestre las tablas del 1 al 10 usando while o do while

let i = 1;
do {
  console.log(`Tabla del ${i}:`);
  let j = 1;
  do {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  } while (j <= 10);
  console.log(""); // Imprime una línea en blanco entre cada tabla
  i++;
} while (i <= 10);