//Metodos para usar strings

//obtener la longitud de un string contando espacios 
let str_1 ="Hola soy un STRING ejemplo";

console.log(str_1.length)

/**Obtener datos de un String
 * slice()
 * substring()
 */

// El numero 5 es hasta donde llegara el recorrido e imprime los caracteres que se encuentran dentro del rango 0-5
let slice_str_1 = str_1.slice(0, 26);
console.log(slice_str_1);

let substring_str_1 = str_1.substring(0, 10);
console.log(substring_str_1);