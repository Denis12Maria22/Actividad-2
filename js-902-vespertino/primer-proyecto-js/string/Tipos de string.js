//String (cadena de caracteres)

let str_1 ="HOLA SOY UN TEXTO CON COMILLAS";
let str_2 ='HOLA SOY UN TEXTO CON COMILLAS SIMPLE';
let str_3 = "COMILLAS DENTRO DE LAS COMILLAS \"ejemplo\"";
let str_4 = 'COMILLAS DENTRO DE COMILLAS SIMPLES "ejemplo"';
let str_5 = "COMILLAS DENTRO DE  COMILLAS 'ejemplo'";

console.log(str_1)
console.log(str_2)
console.log(str_3)
console.log(str_4)
console.log(str_5)

//comillas invertidas (backticks) Alt gr+ } x2  ``
let src_6 =`COMILLAS INVERTIDAS O BACKTICKS`;
console.log(src_6);

let nombre = "Denisse"
let saludar = `Hola, ${nombre} Bienvenido`;

console.log(saludar)

let plantilla = `
<html>
<h3>Página web de ${nombre}</h3>
<p>Esto es un párrafo</p>
</html>
`
console.log(plantilla)