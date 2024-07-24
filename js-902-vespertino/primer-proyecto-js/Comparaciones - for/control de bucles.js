//control de bucles

let listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < listNum.length; i++){
    //exclusion de un valor
    //presenta los numeros menos el que se define en el if en este caso es el 5
    if(listNum[i] ===5){
        continue;
    }
    console.log(listNum[i]);


//Interrumpir un bucle
if (listNum[i] > 6 ){
    break;
}

}