//array, lista, objeto o vector
//son un conjunto de variables 
//los objetos son entridades que tienen atributos y los atributos son todas las caracteristicas 
//que pertenecen a los objetos, pueden cambiaro permanecer a medida que se va declarando el codigo

//ejemplo de como declarar un array
const datos = [1, "hola", true, undefined, null];
const datos2 = new Array(1, "hola", true, undefined, null);
const datos3 = new Array(3); //------> array llenado posterior a la declaracion
datos3[1]="hola mundo";
datos3[0]= 1;
const datos4 =[datos, datos2, datos3]; // ------> lista de listas

//ejemplo de impresion 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//objetos 
//ejmplo de un objeto
const alumno /*<---------objeto */= {
    ///atributos
    edad: 15,
    peso: 80,
    nombre: "Pedro",
    isBlack: false,
    amistades: ["confi1, confi2, confi3, confi4"]

}
//impresión del objeto
console.log(alumno);

//impresion especifico 
console.log(alumno.amistades);