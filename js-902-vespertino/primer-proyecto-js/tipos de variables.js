//tipos de variables
//variables
//que es una variable?? es un contenedor que puede tener un valor y este valor puede ser cambiado, actulizado, borrado, etc.

//declarar variables
var variableVAR;  //variable de instancia - son variables que se decalran en cualquier parte del codigo y se puede
// reutilzar en uno o mas archivos o clases diferentes pertenecientes al mismo proyecto y ademas puede enviar datos y recibirlos
 //hacia programas externos mediante una API
let variableLET;  //variable local

//ejemplo de variableLET

for(let i = 3; i < 5; i++){
    console.log(i) 
}
//ejemplo de una variable de instancia
var i = 9;
console.log(i)

//como se declaran las variables
var x;
x=0;
console.log(x)

var z=8;
console.log(z)

 let s;
 s=7;
 console.log(s)

 let f=17;
 console.log(f)

//variable Let mal declarada o redundante
var variable = "soy una variable VAR";
let variable1 = "soy una variable Let";
for(let i =3; i<5; i++){

}

//variable LET declarada despues de usarla
var variable = "soy una variable var";
for(let i=3; i<5; i++){//i es una variable local
let variable="soy una variable LET";
}
let variable1 = "soy una variable LET";